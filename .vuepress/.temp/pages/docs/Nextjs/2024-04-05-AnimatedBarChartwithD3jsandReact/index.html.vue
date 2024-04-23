<template><div><p><img src="@source/docs/Nextjs/2024-04-05-AnimatedBarChartwithD3jsandReact/img/AnimatedBarChartwithD3jsandReact_0.png" alt="AnimatedBarChartwithD3jsandReact"></p>
<p>이전 글에서는 D3.js의 핵심 개념과 데이터 주도 요소를 만들기 위해 해당 API를 사용하는 방법에 대해 논의했습니다. 이 글에서는 D3.js를 사용한 애니메이션 효과가 있는 막대 차트를 그리는 개념을 설명하고 React 기반 웹 앱에서의 코드 예제를 보여드리겠습니다.</p>
<p>간략히 요약하면:</p>
<ul>
<li>차트를 컨테이너, 축, 그리고 막대로 개별 구성 요소로 분해합니다.</li>
<li>이러한 구성 요소를 그리기 위해 SVG와 D3.js를 사용합니다.</li>
<li>React 콜백 ref를 사용하여 DOM에 렌더링합니다.</li>
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
<h1 id="d3로-차트-작성은-레고-조립과-비슷해요" tabindex="-1"><a class="header-anchor" href="#d3로-차트-작성은-레고-조립과-비슷해요" aria-hidden="true">#</a> D3로 차트 작성은 레고 조립과 비슷해요</h1>
<p><img src="@source/docs/Nextjs/2024-04-05-AnimatedBarChartwithD3jsandReact/img/AnimatedBarChartwithD3jsandReact_1.png" alt="AnimatedBarChartwithD3jsandReact_1.png"></p>
<p>D3.js로 차트를 그릴 때, 레고 블록을 조립하는 것과 비슷한 느낌일 거예요. 여러 독립 구성 요소를 작업한 다음에 이를 함께 조합하여 최종 차트를 만들어요. 이 개념은 모든 종류의 차트에 적용됩니다.</p>
<p>막대 차트의 예를 살펴보죠. 우리는 이를 여러 구성 요소로 분해할 수 있어요.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-AnimatedBarChartwithD3jsandReact/img/AnimatedBarChartwithD3jsandReact_2.png" alt="이미지"></p>
<ul>
<li>Y 축: 세로 스케일입니다.</li>
<li>X 축: 가로 스케일입니다.</li>
<li>막대: 데이터의 시각적 표현입니다.</li>
<li>컨테이너: 모든 이 요소들이 함께 모이는 그림판입니다.</li>
</ul>
<p>마찬가지로 선 그래프의 경우, 구성 요소에는 X 축, Y 축, 선 자체의 경로, 그리고 물론 컨테이너가 포함됩니다.</p>
<p>이제 D3.js와 React를 사용하여 가장 일반적인 차트 유형 중 하나인 막대 차트를 만드는 단계를 살펴보겠습니다.</p>
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
<h1 id="_1-리액트-컴포넌트에서-설정" tabindex="-1"><a class="header-anchor" href="#_1-리액트-컴포넌트에서-설정" aria-hidden="true">#</a> 1. 리액트 컴포넌트에서 설정</h1>
<p>리액트에서 DOM을 조작하는 여러 가지 방법이 있습니다. 바닐라 자바스크립트를 통해 DOM 노드에 접근하거나, 리액트에서는 ref (useRef)를 사용할 수 있습니다. Ref를 사용하여 useEffect 내에서 새로운 DOM 요소를 추가하거나, useCallback 훅을 사용하여 콜백 ref 접근 방식을 선택할 수 있습니다. 제 의견으로는, 콜백 ref 방식이 여기서 가장 좋은 선택인데, useEffect와 달리 현재 렌더링 중인 DOM 요소를 걱정할 필요가 없습니다. Ref는 이것을 보장할 것입니다. 또한, React Strict Mode에서 컴포넌트가 두 번 렌더링되는 것을 방지합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">plotChart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token comment">// 여기에 차트 그리기</span>
 <span class="token comment">// 콜백 ref로 노드 반환</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> ref <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> plot <span class="token operator">=</span> <span class="token function">plotChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      node<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>plot<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>

<span class="token keyword">return</span> <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제, plotChart() 함수에서 차트를 그리는 논리를 추가하기 시작합니다.</p>
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
<h1 id="_2-컨테이너" tabindex="-1"><a class="header-anchor" href="#_2-컨테이너" aria-hidden="true">#</a> 2. 컨테이너</h1>
<p>먼저 컨테이너를 설정해야 합니다. 이는 차트를 그릴 그리기 공간으로 작용합니다. SVG로 폭과 높이가 500px인 컨테이너를 설정해 봅시다. viewBox 속성을 사용하여 그림판을 브라우저 뷰포트에 반응하도록 만들 수 있습니다. viewBox에 대해 더 알아보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">WIDTH</span> <span class="token operator">=</span> <span class="token number">500</span>
<span class="token keyword">const</span> <span class="token constant">HEIGHT</span> <span class="token operator">=</span> <span class="token number">500</span>

<span class="token keyword">const</span> selection <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'viewBox'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">0 0 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">WIDTH</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">HEIGHT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">style</span><span class="token punctuation">(</span><span class="token string">'width'</span><span class="token punctuation">,</span> <span class="token string">'100%'</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">style</span><span class="token punctuation">(</span><span class="token string">'height'</span><span class="token punctuation">,</span> <span class="token string">'auto'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>대량의 데이터를 처리해야 할 때는 SVG보다 성능이 더 좋은 캔버스 요소를 사용할 수도 있습니다. SVG는 대량 데이터셋으로 인해 성능이 저하될 수 있습니다.</p>
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
<h1 id="_3-척도" tabindex="-1"><a class="header-anchor" href="#_3-척도" aria-hidden="true">#</a> 3. 척도</h1>
<p>D3에서 척도에 대해 이해해야 할 세 가지 주요 용어가 있습니다:</p>
<ul>
<li><strong>Domain (도메인)</strong>: 가능한 입력 값 데이터 세트입니다.</li>
<li><strong>Range (범위)</strong>: 가능한 출력 값의 최소값과 최대값입니다.</li>
<li><strong>Scale Function (척도 함수)</strong>: 이 함수는 도메인의 입력 값을 범위 내에서 시각적으로 출력 값으로 매핑합니다.</li>
</ul>
<p>D3의 다양한 차트에 대한 척도 함수가 있습니다. 그 중 일부는 특정 사용 사례에 대해 매우 일반적입니다.</p>
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
<img src="@source/docs/Nextjs/2024-04-05-AnimatedBarChartwithD3jsandReact/img/AnimatedBarChartwithD3jsandReact_3.png" />
<p>바 차트의 X 및 Y 축을 위한 축척을 만들어 봅시다. 다음과 같은 데이터가 있다고 가정해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">DATA</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'Red'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#ff0000'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'Green'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#00ff00'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">'Blue'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#0000ff'</span><span class="token punctuation">,</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="x-축-축척" tabindex="-1"><a class="header-anchor" href="#x-축-축척" aria-hidden="true">#</a> X-축 축척</h2>
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
<p>저희 목표는 각 카테고리를 표시하고 차트의 너비(500픽셀)에 걸쳐 X 축에 고르게 분배하는 것입니다.</p>
<p>그러나 틱이 잘려 보이지 않도록 축 주변에 약간의 여백을 추가해야 합니다. 여백 때문에 축의 크기가 축소되므로 범위를 설정할 때 여백을 고려해야 합니다.</p>
<p>각 측면에 40픽셀 여백을 가정하면 축은 이제 40픽셀부터 460픽셀에 그려질 것입니다.</p>
<p>따라서 X 축의 도메인 및 범위는 다음과 같을 것입니다:</p>
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
<li>도메인: [&quot;빨강&quot;, &quot;초록&quot;, &quot;파랑&quot;]</li>
<li>범위: [40, 460]</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">MARGIN_TOP</span> <span class="token operator">=</span> <span class="token number">40</span>
<span class="token keyword">const</span> <span class="token constant">MARGIN_RIGHT</span> <span class="token operator">=</span> <span class="token number">40</span>
<span class="token keyword">const</span> <span class="token constant">MARGIN_BOTTOM</span> <span class="token operator">=</span> <span class="token number">40</span>
<span class="token keyword">const</span> <span class="token constant">MARGIN_LEFT</span> <span class="token operator">=</span> <span class="token number">40</span>

<span class="token keyword">const</span> xScale <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">scaleBand</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"빨강"</span><span class="token punctuation">,</span> <span class="token string">"초록"</span><span class="token punctuation">,</span> <span class="token string">"파랑"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">MARGIN_LEFT</span><span class="token punctuation">,</span> <span class="token constant">WIDTH</span> <span class="token operator">-</span> <span class="token constant">MARGIN_RIGHT</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

selection
 <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'g'</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>d3<span class="token punctuation">.</span><span class="token function">axisBottom</span><span class="token punctuation">(</span>xScale<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'transform'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translate(0, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">HEIGHT</span> <span class="token operator">-</span> <span class="token constant">MARGIN_BOTTOM</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>scaleBand() 함수를 사용하여 범위를 도메인의 길이인 'n' 개의 밴드로 나눕니다. scaleBand() 함수는 각 막대의 X 축 위치를 결정합니다. 매핑은 다음과 같이 테이블로 나타낼 수 있습니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-AnimatedBarChartwithD3jsandReact/img/AnimatedBarChartwithD3jsandReact_4.png" alt="테이블 이미지"></p>
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
<p>그럼, 우리는 주어진 스케일 함수를 사용하여 아래쪽으로 방향을 향한 축 라인을 반환하는 축 생성기인 axisBottom()함수를 호출합니다. 여백에 따라 요소를 변환 추가하여 위치를 위로 이동해야 합니다.</p>
<p>결과적으로 X 축은 다음과 같이 보일 것입니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-AnimatedBarChartwithD3jsandReact/img/AnimatedBarChartwithD3jsandReact_5.png" alt="X 축"></p>
<h2 id="y-축-척도" tabindex="-1"><a class="header-anchor" href="#y-축-척도" aria-hidden="true">#</a> Y 축 척도</h2>
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
<p>비슷한 개념이 Y 축에도 적용됩니다. 막대 차트의 Y 축에서는 숫자 데이터 값을 시각적 요소에 매핑해야 합니다. 여기서는 막대의 높이에서 여백을 뺀 값입니다. 우리 카테고리에 해당하는 데이터 값은 [2, 4, 8]입니다. 이 값들을 사용하여 Y 축의 범위와 영역을 설정할 것입니다.</p>
<ul>
<li>범위: [0, 8]</li>
<li>영역: [460, 40]</li>
</ul>
<p>차트의 높이가 500px이고 여백이 40px인 경우, 바가 차트의 밑바닥에 놓이도록 460(차트의 아래)부터 40(위쪽)까지 범위를 설정할 것입니다. 이것은 역직관적으로 보일 수 있지만, D3.js를 비롯한 많은 그래픽 표현에서 Y 좌표는 위에서 시작하여 아래쪽으로 증가합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> yScale <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">scaleLinear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token constant">HEIGHT</span> <span class="token operator">-</span> <span class="token constant">MARGIN_BOTTOM</span><span class="token punctuation">,</span> <span class="token constant">MARGIN_TOP</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

selection
 <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'g'</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>d3<span class="token punctuation">.</span><span class="token function">axisLeft</span><span class="token punctuation">(</span>yScale<span class="token punctuation">)</span><span class="token punctuation">)</span>
 <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'transform'</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">translate(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">MARGIN_LEFT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, 0)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리는 데이터 값을 Y 축의 픽셀 값에 비례하도록 매핑하기 위해 scaleLinear()를 사용합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-AnimatedBarChartwithD3jsandReact/img/AnimatedBarChartwithD3jsandReact_6.png" alt="image"></p>
<p>그런 다음, 주어진 스케일 함수로 왼쪽으로 정렬된 축 선을 반환하는 축 생성기 인 axisLeft() 함수를 호출합니다. 다시 한 번, 마진에 따라 요소에 변환을 추가하여 위치를 안쪽으로 이동해야 합니다.</p>
<p>두 축을 추가한 후에는 이제 다음과 같이 보입니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-AnimatedBarChartwithD3jsandReact/img/AnimatedBarChartwithD3jsandReact_7.png" alt="바 그래프 이미지"></p>
<h2 id="컬러-스케일" tabindex="-1"><a class="header-anchor" href="#컬러-스케일" aria-hidden="true">#</a> 컬러 스케일</h2>
<p>마지막으로, 카테고리에 따라 색상을 매핑하는 스케일 함수를 구현하려고 합니다. 우리는 위에서 정의한 scaleOrdinal()을 사용할 것입니다: 이 함수는 이산값(색상 문자열)을 다른 이산값(카테고리 문자열)에 매핑합니다. 이 개념은 축에 사용되는 스케일 함수와 유사합니다.</p>
<ul>
<li>도메인: [&quot;빨강&quot;, &quot;초록&quot;, &quot;파랑&quot;]</li>
<li>레인지: [<code v-pre>#ff0000</code>, <code v-pre>#00ff00</code>, <code v-pre>#0000ff</code>]</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> colorScale <span class="token operator">=</span> d3
    <span class="token punctuation">.</span><span class="token function">scaleOrdinal</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">domain</span><span class="token punctuation">(</span><span class="token constant">DATA</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> d<span class="token punctuation">.</span>category<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span><span class="token constant">DATA</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> d<span class="token punctuation">.</span>color<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 색상 스케일 함수는 다음 단계에서 막대의 색상을 채우는 데 사용될 것입니다.</p>
<h1 id="_4-막대" tabindex="-1"><a class="header-anchor" href="#_4-막대" aria-hidden="true">#</a> 4. 막대</h1>
<p>스케일이 설정되면, 다음 단계는 데이터를 나타내는 막대를 생성하고 그것을 SVG 컨테이너에 배치하는 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>selection
<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">'.bar'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token constant">DATA</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'rect'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'class'</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">xScale</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>category<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'y'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">yScale</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'width'</span><span class="token punctuation">,</span> xScale<span class="token punctuation">.</span><span class="token function">bandwidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'height'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">yScale</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">yScale</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">'fill'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">colorScale</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>category<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드에서 하는 일은 다음과 같습니다:</p>
<ul>
<li>
<p>먼저 bar 클래스 이름을 가진 요소를 선택합니다. 초기에는 해당 요소가 없습니다.</p>
</li>
<li>
<p>데이터를 선택에 바인딩합니다.</p>
</li>
<li>
<p>enter 선택을 선택합니다. 요소가 없으므로 enter 선택은 비어 있습니다. Enter, Update, Exit의 개념을 이해하려면 이전 문서를 참조하세요.</p>
</li>
<li>
<p>DATA를 순환하면서 배열인 경우 각 반복에 대해 다음을 수행합니다:</p>
</li>
<li>
<p>직사각형 모양인 <code v-pre>rect</code>를 추가합니다.</p>
</li>
<li>
<p>클래스 bar를 추가합니다.</p>
</li>
<li>
<p>X 좌표를 이전에 정의한 xScale() 함수로 설정합니다.</p>
</li>
<li>
<p>Y 좌표를 이전에 정의한 yScale() 함수로 설정합니다.</p>
</li>
<li>
<p>각 밴드(bar)의 너비를 반환하는 xScale.bandwidth() 함수로 막대의 너비를 설정합니다.</p>
</li>
<li>
<p>막대의 높이를 가장 낮은 값인 yScale(0)에서 시작하여 yScale() 함수로 설정합니다.</p>
</li>
<li>
<p>이전에 정의한 colorScale() 함수로 막대의 색상을 설정합니다.</p>
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
<p>결과는:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;img src="./img/AnimatedBarChartwithD3jsandReact_8.png" />

# 5. Polish it!

축 눈금의 스타일을 사용자 정의하고, 막대를 애니메이션하는 등의 작업으로 차트를 개선할 수 있습니다!

&lt;!-- ui-log 수평형 -->
&lt;ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true">&lt;/ins>
&lt;component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
&lt;/component>

여기서 할 일은 다음과 같아요:

- 막대 사이에 공백 추가하기.
- 각 라벨의 눈금선과 눈금 숨기기.
- 점선 격자 선 추가하기.
- x 축 라벨의 글꼴을 약간 크게 만들기.
- 각 y 축 라벨에 "cm" 단위 추가.
- 막대를 바닥부터 자라도록 애니메이션 효과 추가.

아래는 사용자 정의 스타일 및 애니메이션을 사용하여 구성하고 향상된 애니메이션 막대 차트의 전체 코드입니다.

```js
const plotChart = () => {
  const WIDTH = 500
  const HEIGHT = 500
  const MARGIN_TOP = 40
  const MARGIN_RIGHT = 40
  const MARGIN_BOTTOM = 40
  const MARGIN_LEFT = 40

  const DATA = [
    {
      category: 'Red',
      value: 2,
      color: '#ff0000',
    },
    {
      category: 'Green',
      value: 4,
      color: '#00ff00',
    },
    {
      category: 'Blue',
      value: 8,
      color: '#0000ff',
    },
  ]

  const categories = DATA.map((d) => d.category)

  const values = DATA.map((d) => d.value)

  const maxValue = Math.max(...values)

  const selection = d3.create('svg')
    .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)
    .style('width', '100%')
    .style('height', 'auto')

  const xScale = d3
    .scaleBand()
    .domain(categories)
    .range([MARGIN_LEFT, WIDTH - MARGIN_RIGHT])
    .padding(0.2) // 막대 사이의 공백

  selection
    .append('g')
    .call(d3.axisBottom(xScale).tickSize(0).tickPadding(12)) // x 축 라벨과 막대 사이 간격
    .attr('transform', `translate(0, ${HEIGHT - MARGIN_BOTTOM})`)
    .call((g) => g.select('.domain').remove()) // x 축 선 제거
    .call((g) => g.selectAll('.tick text').style('font-size', 14)) // x 축 라벨의 글꼴 크기

  const yScale = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([HEIGHT - MARGIN_BOTTOM, MARGIN_TOP])

  selection
    .append('g')
    .call(
      d3
        .axisLeft(yScale)
        .tickSize(-WIDTH) // 격자 선
        .tickPadding(12) // 격자 선과 라벨 사이 간격
        .tickFormat((d) => `${d} cm`), // 라벨 형식 지정
    )
    .attr('transform', `translate(${MARGIN_LEFT}, 0)`)
    .call((g) => g.select('.domain').remove()) // y 축 선 제거
    .call((g) => g.style('stroke-dasharray', 5).style('stroke-opacity', 0.2)) // y 축 격자 선

  const colorOrdinal = d3
    .scaleOrdinal()
    .domain(DATA.map((d) => d.category))
    .range(DATA.map((d) => d.color))

  selection
    .selectAll('.bar')
    .data(DATA)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d) => xScale(d.category))
    .attr('width', xScale.bandwidth())
    .attr('y', yScale(0)) // 막대는 처음에 차트의 맨 아래에서 시작합니다 - 0px
    .transition() // 애니메이션
    .duration(1000) // 애니메이션 지속 시간
    .ease(d3.easeCubic) // 애니메이션 효과
    .attr('y', (d) => yScale(d.value))
    .attr('height', (d) => yScale(0) - yScale(d.value))
    .attr('fill', (d) => colorOrdinal(d.category))

  return selection.node()
}

const ref = useCallback(
  (node) => {
    if (node !== null) {
      const plot = plotChart()
      node.append(plot)
    }
  },
  []
)

return &lt;div ref={ref} />
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>최종 결과:</p>
<img src="https://miro.medium.com/v2/resize:fit:1200/1*VMHMeojCL3tOB9i7KMuD6Q.gif" />
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>마무리하면 D3.js로 차트를 만들어내는 것은 레고 블록을 조합하는 것과 비슷합니다. 서로 다른 부분들 - 축과 막대 등 - 을 하나의 주요 컨테이너 안에 배치합니다. 중요한 것은 이러한 부분들을 척도와 데이터 바인딩을 올바르게 연결하여 모든 것을 올바르게 정렬하는 것입니다.</p>
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
<p>D3는 매우 유연합니다. 차트를 만드는 유일한 방법은 없습니다. 이 안내서는 기본 템플릿을 제공하지만 D3를 더 익숙해지면 더 많은 작업을 할 수 있습니다. 더 자세한 스타일링이나 다양한 상호 작용을 위한 이벤트 핸들러 구현 등이 가능합니다.</p>
</div></template>
