<template><div><p>게임 보드에 대한 HTML 요소, 스타일링을 위한 CSS 및 게임 로직을 담당하는 JavaScript를 사용하여,이 코드는 2048 게임을 위한 기본 프레임워크를 구축합니다. 스와이프 제어, 점수 매기기 및 이기기/지는 기준과 같은 추가 기능은이 코드를 확장하여 추가할 수 있습니다.</p>
<p>index.html</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token number">2048</span> 게임<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"styles.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token number">2048</span> 게임<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"game-container"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"game-board"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span>button onclick<span class="token operator">=</span><span class="token string">"resetGame()"</span><span class="token operator">></span>게임 재설정<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"script.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>styles.css</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>css
body <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f8f8f8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    max<span class="token operator">-</span>width<span class="token operator">:</span> 600px<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 50px auto<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

h1 <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>game<span class="token operator">-</span>container <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#game<span class="token operator">-</span>board <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid #ccc<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>tile <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #eee<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

button <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #4caf50<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>top<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">button</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #45a049<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>script.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> gameBoard <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"game-board"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> board <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token comment">// Initialize the game board</span>
<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    board<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">addTile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">addTile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Add a new tile (2 or 4) to a random empty cell</span>
<span class="token keyword">function</span> <span class="token function">addTile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        options<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> i<span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> j <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> spot <span class="token operator">=</span> options<span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> options<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    board<span class="token punctuation">[</span>spot<span class="token punctuation">.</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>spot<span class="token punctuation">.</span>y<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0.5</span> <span class="token operator">?</span> <span class="token number">2</span> <span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// Render the game board</span>
<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  gameBoard<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  board<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    row<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cell</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tile <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      tile<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"tile"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cell <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tile<span class="token punctuation">.</span>textContent <span class="token operator">=</span> cell<span class="token punctuation">;</span>
        tile<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">rgb(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">204</span> <span class="token operator">-</span> cell <span class="token operator">*</span> <span class="token number">16</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">255</span> <span class="token operator">-</span> cell <span class="token operator">*</span> <span class="token number">16</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token number">255</span> <span class="token operator">-</span> cell <span class="token operator">*</span> <span class="token number">16</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      gameBoard<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>tile<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Reset the game</span>
<span class="token keyword">function</span> <span class="token function">resetGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  board <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  score <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Initialize the game</span>
<span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>어떻게 코드를 실행할 수 있나요?</p>
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
<li>&quot;project&quot;라는 디렉토리를 만들어주세요.</li>
<li>&quot;project&quot; 디렉토리로 이동하여 index.html, styles.css 및 script.js 세 개의 스크립트를 생성해주세요.</li>
<li>index.html 파일에 마우스 오른쪽 버튼을 클릭하여 브라우저에서 실행해주세요.</li>
<li>이제 게임을 즐길 준비가 되었습니다.</li>
</ul>
<p>더 많은 정보는 저희 웹사이트를 방문해주세요.</p>
</div></template>
