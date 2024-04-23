<template><div><p>저는 HTML, CSS, 그리고 JavaScript 언어로 틱택토 게임을 만들어보려고 합니다. 게임의 종료 상황은 다음과 같을 것입니다:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*UM3WqZbSXc8yZ-C1vhmTEw.gif" alt="틱택토 종료 상황"></p>
<p>우선, 게임에 대해 간단히 설명을 드리겠습니다.</p>
<h2 id="틱택토란-무엇이며-게임의-규칙은-무엇인가요" tabindex="-1"><a class="header-anchor" href="#틱택토란-무엇이며-게임의-규칙은-무엇인가요" aria-hidden="true">#</a> 틱택토란 무엇이며 게임의 규칙은 무엇인가요?</h2>
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
<li>두 명의 플레이어를 위한 게임입니다.</li>
<li>일반적으로 3x3 보드에서 플레이하지만 더 넓게 플레이할 수도 있습니다. 여기서는 3x3 보드를 기준으로 설명할게요.</li>
<li>먼저 시작한 플레이어가 빈 칸에 'X'를 입력하고, 다른 플레이어는 'O'를 입력합니다.</li>
<li>플레이어가 가로, 세로 또는 대각선으로 X-X-X 또는 O-O-O를 만들면 게임에서 이기게 됩니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-HowtocreateaTicTacToegamewithHTMLCSSandJavaScript/img/HowtocreateaTicTacToegamewithHTMLCSSandJavaScript_1.png" alt="게임 보드"></p>
<ul>
<li>모든 칸이 채워지고 위의 조건 중 하나가 충족되지 않았을 경우에는 무승부가 됩니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-HowtocreateaTicTacToegamewithHTMLCSSandJavaScript/img/HowtocreateaTicTacToegamewithHTMLCSSandJavaScript_2.png" alt="게임 결과"></p>
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
<p>코딩을 시작하기 전에, 보통 내가 한 일을 먼저 알려드리고 싶어요. 처음에 게임에 필수적인 것들을 위해 HTML로 코딩을 했어요. 좀 더 아름답게 만들기 위해 CSS로 스타일을 만들었고, 게임을 기능적으로 만들기 위해 JavaScript를 사용했어요. 이제 그것들을 살펴보겠어요.</p>
<h2 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML:</h2>
<ul>
<li>
<p>id가 title인 div 안에 h1 태그를 추가했어요.</p>
</li>
<li>
<p>게임에 필요한 3*3 보드를 만들기 위해 id가 board인 div를 생성했어요.</p>
</li>
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
<p>게임판의 각 정사각형은 클래스가 &quot;square&quot;인 div로 만들었습니다. 각 정사각형에 대한 id도 만들었습니다.</p>
<p>게임을 다시 시작할 수 있도록 버튼 형식의 입력란을 추가했습니다. 이를 endGame이라는 id를 가진 div 안에 만들었습니다. 버튼을 클릭하면 게임 화면이 재설정되어야 합니다. 그래서 onclick 이벤트에 제가 javascript에서 만든 함수를 호출하는 기능을 추가했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"IE=edge"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Tic Tac Toe<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"styles.css"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://fonts.googleapis.com/css2?family=Poppins:wght@200&amp;family=Roboto+Serif&amp;display=swap"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>Tic Tac Toe<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"board"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square0"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square1"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square2"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square3"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square4"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square5"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square6"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square7"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"square"</span> id<span class="token operator">=</span><span class="token string">"square8"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>  
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"endGame"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"button"</span> value<span class="token operator">=</span><span class="token string">"재시작"</span> id<span class="token operator">=</span><span class="token string">"restartButton"</span> onclick<span class="token operator">=</span><span class="token string">"restartButton()"</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"game.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS:</h2>
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
<p>페이지의 제목을 가운데에 놨어요.</p>
<p>아이디가 &quot;board&quot;인 div를 페이지 가운데에 배치했어요. 이를 위해 margin 속성을 설정했어요.</p>
<p>아이디가 &quot;board&quot;인 div의 너비와 높이 속성을 지정했어요.</p>
<p>게시판은 9개의 정사각형으로 구성되어 있는데, 이를 만들기 위해 display 속성을 그리드로 설정했어요. Grid 템플릿 열 설정을 사용해서 9개의 프레임을 만들었고, grid-gap 속성으로 격자 사이의 간격을 조정했어요.</p>
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
<p>각 사각형에 너비와 높이 속성을 설정했어요. 이들 사각형에 테두리 속성을 추가했구요. 배경 색상도 넣었어요. display 속성을 사용해서 위치를 설정했어요. 사각형 위에 마우스를 올렸을 때 색상이 변경되도록 했어요. 이를 위해 hover 기능을 사용했어요.</p>
<p>restartButton의 id를 가지는 요소에 대해 display 속성 및 기타 스타일을 설정했어요. 또한 hover 기능을 사용했어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>body <span class="token punctuation">{</span>
    font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token string">'Poppins'</span><span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">000000</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

h1 <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#board <span class="token punctuation">{</span>
    margin<span class="token operator">-</span>left<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>right<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 375px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 375px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> grid<span class="token punctuation">;</span>
    grid<span class="token operator">-</span>template<span class="token operator">-</span>columns<span class="token operator">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    grid<span class="token operator">-</span>gap<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>square <span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 120px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 120px<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #<span class="token constant">D3D3D3</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token constant">F5F5F5</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 40px<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>square<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token constant">FFFFE0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#restartButton <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>left<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>right<span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 40px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 150px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token constant">FFFFFF</span><span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #<span class="token number">000000</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 40px<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

#restartButton<span class="token operator">:</span>hover <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">000000</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token constant">FFFFFF</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript:</h2>
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
<p>JavaScript를 통해 HTML에서 사용하는 요소를 처리하기 위해 HTML DOM 기능을 사용했어요.</p>
<p>HTML 파일에서 id가 board인 div과 class가 square인 div에 접근하기 위해 해당 DOM 태그에 변수를 할당하여 얻었어요.</p>
<p>게임을 위해 &quot;players&quot;라는 시리즈를 만들었어요. 배열의 요소들은 X와 O예요.</p>
<p>게임을 시작하는데 X가 먼저 시작했기 때문에 players[0]를 currentPlayer 변수에 할당했어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> board <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'board'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> squares <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'square'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> players <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'X'</span><span class="token punctuation">,</span> <span class="token string">'O'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> currentPlayer <span class="token operator">=</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>게임이 끝났을 때 화면에 메시지를 출력하려면 필요한 조건을 충족했을 때 메시지를 출력해야 합니다. 이를 위해 HTML 문서에서 확인할 수 있도록 h2 태그를 endMessage 변수에 할당했습니다. board라는 id를 가진 div에 수행된 작업의 결과로 메시지를 출력할 것입니다. after 함수를 사용하여 메시지를 출력할 수 있습니다. textContent를 사용하여 메시지를 변수에 출력할 수 있습니다. 'X의 차례!' 라는 메시지를 출력하였습니다. 만든 태그에 스타일을 추가했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> endMessage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>marginTop <span class="token operator">=</span> <span class="token string">'30px'</span><span class="token punctuation">;</span>
endMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>textAlign <span class="token operator">=</span> <span class="token string">'center'</span><span class="token punctuation">;</span>
board<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>endMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>게임의 승리 상태를 배열로 정의했습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> winning_combinations <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>필요한 컨트롤을 제공하기 위해 함수를 만들었어요. checkWin이라는 함수를 만들어서 게임의 승리 상태를 확인합니다. 배열의 상태 중 하나가 만족되면 해당 플레이어가 게임에서 승리합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkWin</span><span class="token punctuation">(</span><span class="token parameter">currentPlayer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> winning_combinations<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> winning_combinations<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer <span class="token operator">&amp;&amp;</span> squares<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer <span class="token operator">&amp;&amp;</span> squares<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>무승부 상태를 확인하는 checkTie 함수도 만들었어요. for 루프를 통해 생성된 모든 프레임의 텍스트를 제어합니다. 이 방법으로 모두 가득 차 있고 승리 상태가 만족되지 않은 경우 함수는 true를 반환합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">checkTie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>저는 &quot;restartButton&quot;이라는 함수를 만들어 게임을 다시 시작할 때 동작을 재설정했습니다. 우리는 사각형 안의 값을 &quot;&quot;으로 할당했습니다. 그런 다음 게임이 시작할 때 표시될 메시지를 endMessage.textContent에 할당했습니다. 다시 기본 플레이어를 X로 할당했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">restartButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
    endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X's turn!</span><span class="token template-punctuation string">`</span></span>
    currentPlayer <span class="token operator">=</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>게임에서 생성된 기능을 확인하기 위해 for 루프에서 사용했습니다. 이 루프에서 각 프레임을 클릭할 때, 특정 조건이 충족되는 경우 endMessage 변수를 사용하여 게임 상태가 화면에 출력됩니다. 저는 addEventListener 메서드를 사용하여 이 작업을 수행했습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">!==</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> currentPlayer
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">checkWin</span><span class="token punctuation">(</span>currentPlayer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게임 종료! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPlayer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 승리!</span><span class="token template-punctuation string">`</span></span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">checkTie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게임이 비겼습니다!</span><span class="token template-punctuation string">`</span></span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        currentPlayer <span class="token operator">=</span> <span class="token punctuation">(</span>currentPlayer <span class="token operator">===</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> players<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> 
        <span class="token keyword">if</span><span class="token punctuation">(</span>currentPlayer <span class="token operator">==</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">O의 차례!</span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span>     
    <span class="token punctuation">}</span><span class="token punctuation">)</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>자바스크립트로 작성한 모든 코드는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> board <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'board'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> squares <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByClassName</span><span class="token punctuation">(</span><span class="token string">'square'</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> players <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'X'</span><span class="token punctuation">,</span> <span class="token string">'O'</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> currentPlayer <span class="token operator">=</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> endMessage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h2'</span><span class="token punctuation">)</span>
endMessage<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span>
endMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>marginTop <span class="token operator">=</span> <span class="token string">'30px'</span>
endMessage<span class="token punctuation">.</span>style<span class="token punctuation">.</span>textAlign<span class="token operator">=</span><span class="token string">'center'</span>
board<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>endMessage<span class="token punctuation">)</span>

<span class="token keyword">const</span> winning_combinations <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">!==</span> <span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> currentPlayer
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">checkWin</span><span class="token punctuation">(</span>currentPlayer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게임 종료! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPlayer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 승리!</span><span class="token template-punctuation string">`</span></span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">checkTie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게임이 비겼습니다!</span><span class="token template-punctuation string">`</span></span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        currentPlayer <span class="token operator">=</span> <span class="token punctuation">(</span>currentPlayer <span class="token operator">===</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">?</span> players<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> 
        <span class="token keyword">if</span><span class="token punctuation">(</span>currentPlayer <span class="token operator">==</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">O의 차례!</span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span>     
    <span class="token punctuation">}</span><span class="token punctuation">)</span>   
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkWin</span><span class="token punctuation">(</span><span class="token parameter">currentPlayer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> winning_combinations<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> winning_combinations<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer <span class="token operator">&amp;&amp;</span> squares<span class="token punctuation">[</span>b<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer <span class="token operator">&amp;&amp;</span> squares<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> currentPlayer<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkTie</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">===</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">restartButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> squares<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        squares<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
    endMessage<span class="token punctuation">.</span>textContent<span class="token operator">=</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">X의 차례!</span><span class="token template-punctuation string">`</span></span>
    currentPlayer <span class="token operator">=</span> players<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기는 소스 코드에 액세스할 수 있는 GitHub 링크입니다.```</p>
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
<p>틱택토를 HTML, CSS 및 JavaScript를 사용해 단계별로 설명해보았어요. 도움이 되었으면 좋겠네요. 읽어 주셔서 감사합니다.</p>
</div></template>
