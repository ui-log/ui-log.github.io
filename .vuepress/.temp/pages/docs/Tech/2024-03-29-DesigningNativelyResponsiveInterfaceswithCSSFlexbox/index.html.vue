<template><div><p>여러 해 동안 정사각형 웹사이트 디자인을 모바일 화면에 깔끔하게 재배치하는 것은 개발자들에게 머리아픔을 줬고 사용자들에게는 훌륭하지 못한 경험을 제공했습니다.</p>
<p>그러나 Flexbox를 사용하면 CSS가 유연하게 정렬 요소를 재배치할 수 있어 어떠한 뷰포트에도 동적으로 개인화된 레이아웃 요소를 지원합니다.</p>
<p>원안한 플로트나 무겁고 복잡한 그리드 시스템이 필요했던 것과 달리, Flexbox는 부모 컨테이너에 간단한 방향 흐름과 크기 조절 동작을 적용하여 인터페이스를 손쉽게 조정할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 레이아웃 컨테이너 */</span>
<span class="token punctuation">.</span>flex<span class="token operator">-</span>container <span class="token punctuation">{</span>
   <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span> <span class="token comment">/* Flexbox 활성화 */</span>
   flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span> <span class="token comment">/* 항목을 수평으로 배열 */</span>
   <span class="token comment">/* 여러 줄에 걸쳐 항목을 감싸기 */</span>
   flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
 
   <span class="token comment">/* 사용 가능한 공간을 균등하게 분배 */</span>
   align<span class="token operator">-</span>items<span class="token operator">:</span> stretch<span class="token punctuation">;</span>
   <span class="token comment">/* 항목 사이에 공간 배치 */</span>
   justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 유연한 하위 항목 */</span>
<span class="token punctuation">.</span>flex<span class="token operator">-</span>item <span class="token punctuation">{</span>
   <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token number">1</span> auto<span class="token punctuation">;</span> <span class="token comment">/* 확장, 축소, 기본 크기 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이러한 기본 지식으로부터 완벽한 레이아웃이 빠르게 형성되며 요소가 크기를 조절함에 따라 내용이 최적으로 재구성됩니다. 플렉스 컨테이너를 중첩함으로써 복잡한 다차원 배열을 반응적으로 작성할 수도 있습니다.</p>
<p>패딩 및 마진과 같은 위치 지정 스타일에 추가적인 플렉스 속성을 결합하면 정렬, 차원 및 시각적 흐름을 더욱 세밀하게 조정할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 소스 순서와 독립적으로 요소 순서 설정 */</span>
<span class="token punctuation">.</span>featured <span class="token punctuation">{</span>
 <span class="token literal-property property">order</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">/* 항목의 성장/축소 한계 설정 */</span>
img <span class="token punctuation">{</span>
 flex<span class="token operator">-</span>basis<span class="token operator">:</span> 200px<span class="token punctuation">;</span>
 flex<span class="token operator">-</span>grow<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Flexbox는 뻣뻣한 데스크톱 중심 가정으로 제한되던 레이아웃 가능성을 마침내 실현합니다. 외부의 엄격함보다는 내재적 유연성을 위해 먼저 디자인함으로써 인터페이스는 다양한 맥락과 사용자들과 조화롭게 어우러질 수 있습니다.</p>
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
<p>그러나 더 많은 Flexbox 채택은 일반적인 전환적 저항을 겪을 수 있습니다:</p>
<ul>
<li>레거시 브라우저 지원 부족으로 대체책이 필요합니다.</li>
<li>유연성을 위해 레이아웃 프로세스를 바꾸는 것은 처음에 연습이 필요합니다.</li>
<li>반응형 기능은 여전히 CSS 그리드, 플로트 및 미디어 쿼리와 같은 다른 방법을 추가하여 보완됩니다.</li>
</ul>
<p>디자인의 요소가 고정된 픽셀 대신 적응 가능한 레이어 주변으로 표준화되는 증가함에 따라, Flexbox는 웹사이트를 덜 일시적으로 느끼게 만들어주고 미래의 요구에 대응하기 위해 꺾이지 않고 굽히는 방식으로 계속 변화하는 뷰포트를 생존할 수 있게 만들어줍니다.</p>
</div></template>
