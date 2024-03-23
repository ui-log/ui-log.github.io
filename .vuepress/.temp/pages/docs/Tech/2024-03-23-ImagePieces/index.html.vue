<template><div><p>오늘은 CSS 세계로 들어가서 두 가지 필수 CSS 속성, background-size와 background-position에 초점을 맞추게 됩니다. 우리의 목표는 하나의 이미지를 여러 조각으로 나누는 것입니다. 그런데 왜 그러냐구요? 이 조각들을 정확하게 배열하여 하나의 일치하는 이미지처럼 보이도록 함으로써, 우리는 마법 같은 이편한 CSS 마법을 통해 분명한 이미지를 만들어 낼 수 있습니다!</p>
<p>하지만 잠깐, 여기서 반전이 있습니다: 이미지를 실제로 나누지는 않을 거에요. 대신 이미지 div들을 여럿 만들어서 서로 연결하고, 이들의 배경 위치와 크기를 설정하여 나란히 배치하면, 하나의 단일 이미지처럼 보일 수 있도록 할 겁니다.</p>
<p>요컨대, 우리는 여러 조각으로 나뉘어진 하나의 이미지인 것처럼 보이는 환상을 만들고 있습니다. 그리고 그 마법 같은 것에 더해, 그 조각들은 서로 멀어지고 다시 모이는 듯한 애니메이션을 가지고 있어, 매혹적인 시각 효과를 만들어 냅니다.</p>
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
<p>아주 최적화된 방법들이 있을 수도 있지만, 나는 이 방법이 재미있고 도전적이라고 생각했어.</p>
<p>자, 코딩을 시작해보자.</p>
<p>행과 열의 수: 이 함수는 요소의 총 수를 기반으로 그리드 레이아웃을 배열하는 최적의 행과 열의 수를 계산해.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">calculateGridDimensions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">numberOfPieces</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> GridDimensions <span class="token punctuation">{</span>
  <span class="token keyword">const</span> idealGridSize <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>numberOfPieces<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">let</span> columns <span class="token operator">=</span> idealGridSize<span class="token punctuation">;</span>
  <span class="token keyword">let</span> rows <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>numberOfPieces <span class="token operator">/</span> columns<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>columns <span class="token operator">*</span> rows <span class="token operator">></span> numberOfPieces<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    columns <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    rows <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>numberOfPieces <span class="token operator">/</span> columns<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> rows<span class="token punctuation">,</span> columns <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>Piece Dimension: 이 함수는 그리드 레이아웃의 총 너비와 높이, 그리고 조각의 수에 기반하여 각 조각의 치수를 계산합니다. 먼저 calculateGridDimensions 함수를 사용하여 그리드 치수를 결정한 후, 총 너비와 높이를 각각 행 수 및 열 수로 나누어 각 조각의 치수를 얻습니다. 마지막으로, 각 조각의 너비와 높이를 객체 형태로 반환합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">calculatePieceDimensions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">numberOfPieces</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> PieceDimensions <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> rows<span class="token punctuation">,</span> columns <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">calculateGridDimensions</span><span class="token punctuation">(</span>numberOfPieces<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> pieceWidth <span class="token operator">=</span> width <span class="token operator">/</span> rows<span class="token punctuation">;</span>
  <span class="token keyword">const</span> pieceHeight <span class="token operator">=</span> height <span class="token operator">/</span> columns<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> pieceWidth<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> pieceHeight <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Piece Position: 이 함수는 조각의 인덱스, 전체 조각 수, 그리드 치수를 기반으로 그리드 내에서 조각의 위치를 계산합니다. 인덱스가 유효한지 확인한 후, 조각의 위치를 그리드 내에서 결정합니다 (예: 좌측 상단, 우측 하단 등).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">calculatePiecePosition</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">index</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">numberOfPieces</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">gridDimensions</span><span class="token operator">:</span> GridDimensions</span><span class="token punctuation">)</span><span class="token operator">:</span> PiecePosition <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">>=</span> numberOfPieces<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"잘못된 인덱스입니다."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> row <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>index <span class="token operator">/</span> gridDimensions<span class="token punctuation">.</span>rows<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> col <span class="token operator">=</span> index <span class="token operator">%</span> gridDimensions<span class="token punctuation">.</span>rows<span class="token punctuation">;</span>

  <span class="token keyword">const</span> isTop <span class="token operator">=</span> row <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isBottom <span class="token operator">=</span> row <span class="token operator">===</span> gridDimensions<span class="token punctuation">.</span>columns <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isLeft <span class="token operator">=</span> col <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> isRight <span class="token operator">=</span> col <span class="token operator">===</span> gridDimensions<span class="token punctuation">.</span>rows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isTop <span class="token operator">&amp;&amp;</span> isLeft<span class="token punctuation">)</span> <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">TOP_LEFT</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isTop <span class="token operator">&amp;&amp;</span> isRight<span class="token punctuation">)</span> <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">TOP_RIGHT</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isBottom <span class="token operator">&amp;&amp;</span> isLeft<span class="token punctuation">)</span> <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">BOTTOM_LEFT</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isBottom <span class="token operator">&amp;&amp;</span> isRight<span class="token punctuation">)</span> <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">BOTTOM_RIGHT</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLeft<span class="token punctuation">)</span> <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">LEFT</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isTop<span class="token punctuation">)</span> <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">TOP</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isRight<span class="token punctuation">)</span> <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">RIGHT</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isBottom<span class="token punctuation">)</span> <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">BOTTOM</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> PiecePosition<span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위치에 따른 조각 애니메이션: 블로그를 간단하게 유지하기 위해 GitHub 링크를 추가했습니다.</p>
<p><a href="https://github.com/Saurabh-kayasth/react-img-pieces/blob/master/src/Animations/styles.module.css" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a></p>
<p>조각 스타일: 이 함수는 조각이 그리드 레이아웃 내에서 인덱스, 총 너비, 높이 및 조각 수에 따라 스타일(배경 위치 및 크기)를 계산합니다. 먼저 그리드 차원과 각 조각의 차원을 계산한 다음, 조각을 그리드에 상대적으로 배치한 배경 위치와 크기를 결정합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">calculatePieceStyles</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">index</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">numberOfPieces</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> PieceStyles <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> gridDimensions <span class="token operator">=</span> <span class="token function">calculateGridDimensions</span><span class="token punctuation">(</span>numberOfPieces<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> pieceDimensions <span class="token operator">=</span> <span class="token function">calculatePieceDimensions</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> numberOfPieces<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">rows</span><span class="token operator">:</span> columns<span class="token punctuation">,</span> <span class="token literal-property property">columns</span><span class="token operator">:</span> rows <span class="token punctuation">}</span> <span class="token operator">=</span> gridDimensions<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> pieceWidth<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> pieceHeight <span class="token punctuation">}</span> <span class="token operator">=</span> pieceDimensions<span class="token punctuation">;</span>

  <span class="token keyword">const</span> row <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>index <span class="token operator">/</span> gridDimensions<span class="token punctuation">.</span>rows<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> col <span class="token operator">=</span> index <span class="token operator">%</span> gridDimensions<span class="token punctuation">.</span>rows<span class="token punctuation">;</span>

  <span class="token keyword">const</span> backgroundSizeX <span class="token operator">=</span> pieceWidth <span class="token operator">*</span> columns<span class="token punctuation">;</span>
  <span class="token keyword">const</span> backgroundSizeY <span class="token operator">=</span> pieceHeight <span class="token operator">*</span> rows<span class="token punctuation">;</span>
  <span class="token keyword">const</span> backgroundSize <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>backgroundSizeX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>backgroundSizeY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> shiftXBy <span class="token operator">=</span> columns <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token punctuation">(</span>columns <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> shiftYBy <span class="token operator">=</span> rows <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token number">100</span> <span class="token operator">/</span> <span class="token punctuation">(</span>rows <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> backgroundPositionX <span class="token operator">=</span> col <span class="token operator">*</span> shiftXBy<span class="token punctuation">;</span>
  <span class="token keyword">const</span> backgroundPositionY <span class="token operator">=</span> row <span class="token operator">*</span> shiftYBy<span class="token punctuation">;</span>
  <span class="token keyword">const</span> backgroundPosition <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>backgroundPositionX<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">% </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>backgroundPositionY<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">%</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    backgroundPosition<span class="token punctuation">,</span>
    backgroundSize<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>마지막 단계로 조각들을 합쳐봅시다!</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">'./Animations/styles.module.css'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  calculateGridDimensions<span class="token punctuation">,</span>
  calculatePieceDimensions<span class="token punctuation">,</span>
  calculatePiecePosition<span class="token punctuation">,</span>
  calculatePieceStyles
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Animations/utils'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> type AnimationsComponentProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./types'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> ImagePiece <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> AnimationsComponentProps
<span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">JSX</span><span class="token punctuation">.</span><span class="token parameter">Element</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    imgSrc<span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token constant">CONTAINER_HEIGHT</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token constant">CONTAINER_WIDTH</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pieces</span><span class="token operator">:</span> <span class="token constant">PIECES</span><span class="token punctuation">,</span>
    animationDirection <span class="token operator">=</span> <span class="token string">'normal'</span><span class="token punctuation">,</span>
    animationDuration <span class="token operator">=</span> <span class="token string">'1s'</span><span class="token punctuation">,</span>
    animationIterationCount <span class="token operator">=</span> <span class="token string">'infinite'</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> props

  <span class="token keyword">function</span> <span class="token function">createNumberArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">result</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token constant">PIECES</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> pieceDimensions <span class="token operator">=</span> <span class="token function">calculatePieceDimensions</span><span class="token punctuation">(</span>
    <span class="token constant">CONTAINER_WIDTH</span><span class="token punctuation">,</span>
    <span class="token constant">CONTAINER_HEIGHT</span><span class="token punctuation">,</span>
    <span class="token constant">PIECES</span>
  <span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div
        className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>container<span class="token punctuation">}</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token constant">CONTAINER_WIDTH</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token constant">CONTAINER_HEIGHT</span> <span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token function">createNumberArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token punctuation">{</span> width<span class="token punctuation">,</span> height <span class="token punctuation">}</span> <span class="token operator">=</span> pieceDimensions

          <span class="token keyword">return</span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>div
              key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span>
              style<span class="token operator">=</span><span class="token punctuation">{</span>
                width<span class="token punctuation">,</span>
                height<span class="token punctuation">,</span>
                animationIterationCount<span class="token punctuation">,</span>
                animationDuration<span class="token punctuation">,</span>
                animationDirection<span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundImage</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">url(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>imgSrc<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
                <span class="token operator">...</span><span class="token function">calculatePieceStyles</span><span class="token punctuation">(</span>
                  index<span class="token punctuation">,</span>
                  <span class="token constant">CONTAINER_WIDTH</span><span class="token punctuation">,</span>
                  <span class="token constant">CONTAINER_HEIGHT</span><span class="token punctuation">,</span>
                  <span class="token constant">PIECES</span>
                <span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
              className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>styles<span class="token punctuation">.</span>piece<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                styles<span class="token punctuation">[</span>
                  <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">piece_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">calculatePiecePosition</span><span class="token punctuation">(</span>
                    index<span class="token punctuation">,</span>
                    <span class="token constant">PIECES</span><span class="token punctuation">,</span>
                    <span class="token function">calculateGridDimensions</span><span class="token punctuation">(</span><span class="token constant">PIECES</span><span class="token punctuation">)</span>
                  <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
                <span class="token punctuation">]</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1028/1*EmKEdlU7saaqS_2owuuvOQ.gif" alt="이미지"></p>
<p><strong>결론:</strong></p>
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
<p>마지막으로, CSS 속성인 background-size와 background-position과 같은 속성들이 하나의 이미지를 이동하는 조각들의 동적 모자이크로 변환시킬 수 있다는 것을 살펴보았습니다. 이러한 속성들을 창의적으로 사용함으로써, 매력적인 동작을 하는 이미지를 만들어보았습니다. 여러분도 직접 시도해보고 싶다면, React 프로젝트에서 이러한 애니메이션을 쉽게 만들 수 있도록 만든 'react-img-pieces'라는 npm 패키지를 확인해보세요.</p>
<p>다만, 이 기법은 시각적으로 놀라운 결과물을 만들어내지만 고려해야 할 문제가 하나 있습니다. 수천 개와 같이 대량의 이미지 조각을 다룰 때 성능 문제가 발생할 수 있습니다.</p>
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
<p>읽어 주셔서 감사합니다! 코딩 즐기세요!</p>
</div></template>
