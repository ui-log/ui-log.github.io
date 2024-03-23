<template><div><img src="@source/docs/Tech/2024-03-23-ThisiswhyyoushouldincludeContainerQueriesinyourcode/img/This-is-why-you-should-include-Container-Queries-in-your-code_0.png" />
<p>뷰포트 기반 미디어 쿼리와 씨름하는 고충을 잊어버리세요. @컨테이너 쿼리가 레스폰시브 디자인을 혁신할 것입니다!</p>
<p>상상해보세요: 두 개의 카드를 담고 있는 부모 컨테이너가 있다고 가정해 봅시다. 전통적으로, 스타일을 조정하려면 뷰포트 기반 미디어 쿼리와 씨름해야 했습니다. 하지만 @컨테이너가 나타나면, 게임이 완전히 달라집니다. 이제 요소들은 부모 컨테이너의 크기에 반응하여 독자적으로 적응할 수 있습니다. 뷰포트뿐만 아니라 컨테이너의 크기에 반응할 수 있게 되어요.</p>
<p>다음과 같이 생각해보세요: 사이드바나 본문과 같은 다른 섹션에 놓여 있는 동일한 카드는 주변에 맞게 신속하게 변환됩니다. 이것이 @컨테이너의 힘입니다. 개발자들이 환경에 진정으로 대응하는 인터페이스를 만들도록 돕습니다.</p>
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
<p>그래서, 어떻게 작동하나요?</p>
<p>한 예제로 들어가 봅시다. 정의된 마크업과 포함 속성을 갖는 카드 래퍼가 있습니다. container-type을 inline-size로 설정함으로써 CSS는 조정을 위해 부모의 너비를 감시합니다. 이는 너비 기반 미디어 쿼리처럼 작동하지만 컨테이너가 주도하는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"card-wrapper"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"card"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"notes"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"description"</span><span class="token operator">></span>Lorem ipsum dolor sit amet<span class="token punctuation">.</span> Eos modi saepe aut architecto velit ut iste obcaecati<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"links"</span><span class="token operator">></span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"submit-button"</span><span class="token operator">></span>Submit<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>card<span class="token operator">-</span>wrapper<span class="token punctuation">{</span>
  container<span class="token operator">-</span>type<span class="token operator">:</span> inline<span class="token operator">-</span>size<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #<span class="token number">000</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 @container 쿼리를 통해 마법이 벌어집니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">container</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 850px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token punctuation">.</span>links<span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>description<span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
@<span class="token function">container</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 650px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>description<span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">/* ... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우아함을 보셨나요? 스타일이 부모 요소의 크기에 맞게 유연하게 조절되어 웹 디자인에서 이전에 볼 수 없었던 정밀성과 제어를 제공합니다.</p>
<p>하지만 여기서 더욱 흥미로운 점은 — Container Queries + Media Queries입니다. 이 다이내믹한 둘을 함께 사용하면 Container 쿼리로 미시적 레이아웃을 정의하면서 Media 쿼리로 거시적 레이아웃을 관리할 수 있습니다. 이것은 스타일의 교향곡을 연주하는 것과 같아서 각 요소가 조화롭게 역할을 하는 것처럼 느껴집니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 컨테이너 쿼리 */</span>
@<span class="token function">container</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 500px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>submit<span class="token operator">-</span>button <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 30px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 미디어 쿼리 */</span>
@<span class="token function">media</span> <span class="token punctuation">(</span><span class="token parameter">min<span class="token operator">-</span>width<span class="token operator">:</span> 768px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span>card <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 조합은 컨테이너 내에서 정밀한 마이크로 레이아웃 조정을 가능하게 하면서, 다양한 화면 크기나 상황에 따라 마크로 레이아웃 변경을 미끄럽게 다루게 합니다. 결과는 무엇인가요? 어떤 화면 크기나 상황에도 손쉽게 적응하는 시각적으로 멋진 인터페이스가 만들어집니다.```</p>
</div></template>
