<template><div><h1 id="html-css-js로-틱택토-tic-tac-toe-게임-만들기" tabindex="-1"><a class="header-anchor" href="#html-css-js로-틱택토-tic-tac-toe-게임-만들기" aria-hidden="true">#</a> Html CSS JS로 틱택토(tic-tac-toe)게임 만들기</h1>
<p>HTML, CSS, JavaScript 언어를 사용하여 틱택토 게임을 만들어 보겠습니다. 게임의 최종 상황은 다음과 같습니다:</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*UM3WqZbSXc8yZ-C1vhmTEw.gif" />
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
<p>우선, 게임에 대해 알아보겠습니다.</p>
<h2 id="틱택토는-무엇이며-게임-규칙은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#틱택토는-무엇이며-게임-규칙은-무엇인가요" aria-hidden="true">#</a> 틱택토는 무엇이며 게임 규칙은 무엇인가요?</h2>
<ul>
<li>두 명의 플레이어가 하는 게임입니다.</li>
<li>일반적으로 3x3 보드에서 진행되지만 더 큰 보드도 가능합니다. 저는 3x3 보드를 기준으로 하겠습니다.</li>
<li>선공한 플레이어는 빈 칸에 'X'를 입력하고, 다른 플레이어는 'O'를 입력합니다.</li>
<li>한 플레이어가 행, 열 또는 대각선에 'X-X-X' 또는 'O-O-O'를 만들면 게임에서 승리합니다.</li>
</ul>
<img src="@source/docs/Tech/2024-03-15-Html-CSS-JS로-틱택토(tic-tac-toe)게임-만들기/img/How-to-create-a-Tic-Tac-Toe-game-with-HTML-CSS-and-JavaScript_1.png" />
<ul>
<li>모든 칸이 채워지고 위의 조건 중 하나가 제공되지 않으면 게임이 무승부로 끝납니다.</li>
</ul>
<img src="@source/docs/Tech/2024-03-15-Html-CSS-JS로-틱택토(tic-tac-toe)게임-만들기/img/How-to-create-a-Tic-Tac-Toe-game-with-HTML-CSS-and-JavaScript_2.png" />
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
<p>코딩을 시작하기 전에 무엇을 했는지 간단히 설명하겠습니다. 먼저, 게임에 필요한 요소를 HTML로 코딩했습니다. 더 아름답게 만들기 위해 CSS로 스타일을 만들었습니다. 게임이 작동하도록 하기 위해 JavaScript를 사용했습니다. 이제 이들을 자세히 살펴보겠습니다.</p>
<h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML:</h2>
<p>제목을 가진 div 내에 h1 태그를 추가했습니다.</p>
<p>게임에 필요한 3x3 보드를 만들기 위해 board라는 id를 가진 div를 생성했습니다.</p>
<p>각 칸을 square라는 class로 board 내에 div로 생성했습니다. 각 칸에는 id가 있습니다.</p>
<p>게임을 다시 시작할 수 있도록 endGame이라는 id를 가진 div 내에 버튼 형태의 입력을 추가했습니다. 이 버튼이 클릭되면 자바스크립트에서 만든 함수를 호출하여 게임 화면을 재설정해야 합니다.</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>X-UA-Compatible<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>IE=edge<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Tic Tac Toe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://fonts.googleapis.com/css2?family=Poppins:wght@200&amp;family=Roboto+Serif&amp;display=swap<span class="token punctuation">"</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Tic Tac Toe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>board<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square3<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square5<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square7<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>endGame<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>다시 시작<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>restartButton<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">restartButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>game.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS:</h2>
<p>제목을 페이지 중앙에 배치했습니다.</p>
<p>board라는 id를 가진 div를 페이지 중앙에 배치했습니다. 이를 위해 margin 속성을 설정했습니다.</p>
<p>board의 너비와 높이 속성을 설정했습니다.</p>
<p>board는 9개의 칸으로 이루어져 있으며, 이를 생성하기 위해 grid 표시 속성을 사용했습니다. Grid template columns 설정으로 9개의 프레임을 만들었습니다. grid-gap 속성으로 프레임 사이의 간격을 설정했습니다.</p>
<p>각 칸의 너비와 높이 속성을 설정했습니다. 이 칸들에 border 속성을 추가했습니다. 배경색을 설정했습니다. 텍스트의 위치를 display 속성을 사용하여 설정했습니다. hover 기능을 사용하여 칸 위에 마우스를 올렸을 때 색상이 변경되도록 했습니다.</p>
<p>restartButton이라는 id를 가진 요소에 display 속성 및 다른 스타일을 설정했습니다. 또한 hover 기능을 사용했습니다.</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Poppins"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#board</span> <span class="token punctuation">{</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 375px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 375px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1 fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-gap</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.square</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 120px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #d3d3d3<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #f5f5f5<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.square:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffe0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#restartButton</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000000<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#restartButton:hover</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #000000<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h2>
<p>JavaScript를 사용하여 HTML에서 사용하는 요소를 처리하기 위해 HTML DOM 기능을 사용했습니다.</p>
<p>board라는 id와 square라는 class를 가진 div에 접근하기 위해 해당 DOM 태그에 해당하는 변수에 할당했습니다.</p>
<p>게임을 위해 &quot;players&quot;라는 배열을 만들었습니다. 배열의 요소는 X와 O입니다.</p>
<p>X가 먼저 게임을 시작했기 때문에 players[0]를 currentPlayer 변수에 할당했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> board <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"board"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> squares <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"square"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> players <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"O"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> currentPlayer <span class="token operator">=</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
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
<p>게임 종료를 확인하려면 게임이 조건을 만족할 때 화면에 메시지를 출력해야 합니다. 이를 위해 endMessage 변수에 h2 태그를 할당하여 HTML 문서에서 확인할 수 있도록 했습니다. after 함수를 사용하여 보드라는 id를 가진 div의 작업에 대한 메시지를 출력하도록 했습니다. textContent를 사용하여 변수에 텍스트를 출력할 수 있도록 했습니다. &quot;X의 차례!&quot;를 출력했습니다. 생성한 태그에 스타일을 추가했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> endMessage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>marginTop <span class="token operator">=</span> <span class="token string">"30px"</span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"center"</span><span class="token punctuation">;</span>
board<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>endMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>게임의 승리 상태를 배열에 정의했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> winning_combinations <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4877378276818686"
     data-ad-slot="9743150776"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>필요한 제어를 제공하기 위해 함수를 만들었습니다. checkWin이라는 함수를 만들어 게임의 승리 상태를 확인했습니다. 배열에서 하나의 상태가 충족되면 해당 플레이어가 게임에 승리합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkWin</span><span class="token punctuation">(</span><span class="token parameter">currentPlayer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> winning_combinations<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> winning_combinations<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>squares<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer <span class="token operator">&amp;&amp;</span> squares<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer <span class="token operator">&amp;&amp;</span> squares<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>무승부 상태를 확인하기 위해 checkTie 함수를 만들었습니다. for 루프를 통해 생성된 모든 프레임의 텍스트를 확인했습니다. 모든 칸이 채워져 있고 승리 상태가 만족되지 않으면 true를 반환합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkTie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>게임을 다시 시작할 때 작업을 재설정하기 위해 restartButton이라는 함수를 만들었습니다. square에 있는 값을 &quot;&quot;로 할당했습니다. endMessage.textContent에 게임이 시작될 때 화면에 표시될 메시지를 할당했습니다. 기본 플레이어를 다시 X로 할당했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">restartButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  currentPlayer <span class="token operator">=</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>게임에서 생성된 함수를 확인하기 위해 for 루프에서 사용했습니다. 이 루프에서 각 프레임을 클릭할 때 특정 조건이 충족되면 화면에 게임 상태가 출력됩니다. addEventListener 메소드를 사용하여 이 작업을 수행했습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">!==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> currentPlayer<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkWin</span><span class="token punctuation">(</span>currentPlayer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게임 종료! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPlayer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">이(가) 승리했습니다!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkTie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게임이 무승부로 종료되었습니다!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    currentPlayer <span class="token operator">=</span> currentPlayer <span class="token operator">===</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> players<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentPlayer <span class="token operator">==</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">O의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>작성한 JavaScript 코드 전체는 다음과 같습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> board <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"board"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> squares <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">"square"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> players <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"X"</span><span class="token punctuation">,</span> <span class="token string">"O"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> currentPlayer <span class="token operator">=</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> endMessage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>marginTop <span class="token operator">=</span> <span class="token string">"30px"</span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">"center"</span><span class="token punctuation">;</span>
board<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>endMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> winning_combinations <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span>

    <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">!==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> currentPlayer<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkWin</span><span class="token punctuation">(</span>currentPlayer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게임 종료! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPlayer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">이(가) 승리했습니다!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkTie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게임이 무승부로 종료되었습니다!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    currentPlayer <span class="token operator">=</span> currentPlayer <span class="token operator">===</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> players<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>currentPlayer <span class="token operator">==</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">O의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkWin</span><span class="token punctuation">(</span><span class="token parameter">currentPlayer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> winning_combinations<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> winning_combinations<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>squares<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer <span class="token operator">&amp;&amp;</span> squares<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer <span class="token operator">&amp;&amp;</span> squares<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkTie</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">restartButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  currentPlayer <span class="token operator">=</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
