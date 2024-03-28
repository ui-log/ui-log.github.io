<template><div><img src="@source/docs/Tech/2024-03-28-MasteringCSSPseudo-classesAComprehensiveGuide-Part1/img/MasteringCSSPseudo-classesAComprehensiveGuide-Part1_0.png" />
<p>웹 디자인의 중추인 Cascading Style Sheets (CSS)는 개발자들에게 웹 페이지의 외관과 레이아웃을 제어할 수 있는 능력을 제공합니다. CSS가 제공하는 많은 기능 중에서도, 가상 클래스(pseudo-classes)는 다양한 조건과 상태에 따라 요소를 대상으로 스타일을 적용할 수 있는 강력한 도구로 두드러지게 나타납니다.</p>
<p>이 부분에서는 몇 가지 CSS 가상 클래스에 대해 심층적으로 다루고, 그 구문과 응용 분야를 탐구하며 사용법을 마스터할 수 있도록 실제 예시를 제공하겠습니다.</p>
<h1 id="css-가상-클래스의-이해" tabindex="-1"><a class="header-anchor" href="#css-가상-클래스의-이해" aria-hidden="true">#</a> CSS 가상 클래스의 이해:</h1>
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
<p>CSS 가상 클래스는 요소의 특별한 상태를 지정하는 키워드입니다. 일반 클래스와 달리 HTML 요소에 직접 할당되는 것이 아니라 사용자 상호작용, 요소 계층 구조 또는 요소 상태와 같은 다양한 조건에 따라 적용됩니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-MasteringCSSPseudo-classesAComprehensiveGuide-Part1/img/MasteringCSSPseudo-classesAComprehensiveGuide-Part1_1.png" alt="Mastering CSS Pseudo-classes"></p>
<h2 id="사용되는-css-가상-클래스" tabindex="-1"><a class="header-anchor" href="#사용되는-css-가상-클래스" aria-hidden="true">#</a> 사용되는 CSS 가상 클래스:</h2>
<ul>
<li>:hover</li>
<li>:active</li>
<li>:link</li>
<li>:visited</li>
<li>:focus</li>
<li>:read-only</li>
<li>:read-write</li>
<li>:in-range</li>
<li>:out-of-range</li>
<li>:target</li>
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
<h2 id="_1-hover" tabindex="-1"><a class="header-anchor" href="#_1-hover" aria-hidden="true">#</a> 1. :hover</h2>
<p>:hover 가상 클래스는 CSS에서 사용자가 포인터 장치(마우스 등)로 요소 위에 올라갈 때 스타일을 적용하는 데 사용됩니다.</p>
<p>일반적으로 이를 사용하여 인터랙티브 효과를 만들고 사용자에게 시각적 피드백을 제공합니다.</p>
<p>이를 통해 개발자들은 사용자 상호 작용에 대응하여 요소의 모양을 변경함으로써 인터랙티브하고 매력적인 사용자 인터페이스를 만들 수 있습니다.</p>
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
<hr>
<p>간단한 HTML 버튼 요소를 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button<span class="token operator">></span>위에 마우스를 올려주세요<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 사용자가 버튼 위에 마우스를 올렸을 때 버튼에 스타일을 적용하려면 :hover를 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 버튼을 마우스 오버했을 때 버튼의 스타일을 지정합니다 */</span>
<span class="token literal-property property">button</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #007bff<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 파란색으로 변경합니다 */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ffffff<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 흰색으로 변경합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 사용자가 버튼 요소 위에 마우스를 올렸을 때 배경색이 파란색으로 변경되고 텍스트 색상이 흰색으로 변경됩니다.</p>
<p>— — —</p>
<p>:hover 가상 클래스는 버튼뿐만 아니라 링크 (<code v-pre>a</code>), 이미지, div와 같은 다양한 HTML 요소에 적용하여 호버 효과를 만들고 사용자 경험을 향상시킬 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* :hover 사용 예시 */</span>

<span class="token comment">/* 마우스를 올릴 때 링크 스타일 변경 */</span>
<span class="token literal-property property">a</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span> <span class="token comment">/* 링크 텍스트에 밑줄 표시 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 마우스를 올릴 때 이미지 스타일 변경 */</span>
<span class="token literal-property property">img</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">;</span> <span class="token comment">/* 불투명도를 80%로 낮춤 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 마우스를 올릴 때 디브 스타일 변경 */</span>
<span class="token literal-property property">div</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 10px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 그림자 효과 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 링크가 밑줄 처리되고, 이미지가 약간 투명해지며, 디브에 그림자 효과가 추가됩니다.</p>
<p>:hover를 사용하여 사용자의 관심을 끌고 웹사이트 상호작용을 개선하는 시각적 매력적인 호버 효과를 만들 수 있습니다.</p>
<h2 id="_2-active" tabindex="-1"><a class="header-anchor" href="#_2-active" aria-hidden="true">#</a> 2. :active</h2>
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
<p>CSS에서 :active 가상 클래스는 사용자에 의해 활성화될 때 요소에 스타일을 적용하는 데 사용됩니다. 이는 일반적으로 사용자가 요소를 클릭할 때(버튼 또는 링크와 같은) 발생합니다.</p>
<p>:active 가상 클래스는 상호 작용 중에 사용자에게 즉각적인 시각적 피드백을 제공하는 데 유용합니다.</p>
<p>이는 요소가 클릭되거나 활성화될 때 스타일을 적용합니다.</p>
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
<p>간단한 HTML 버튼 엘리먼트를 생각해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button<span class="token operator">></span>클릭하세요<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 해당 버튼이 클릭될 때 스타일을 지정하려면 :active를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 버튼이 클릭될 때 스타일 지정 */</span>
<span class="token literal-property property">button</span><span class="token operator">:</span>active <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #ff0000<span class="token punctuation">;</span> <span class="token comment">/* 배경 색을 빨간색으로 변경 */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #ffffff<span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 흰색으로 변경 */</span>
<span class="token punctuation">}</span>
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
<p>이 예제에서 사용자가 버튼 요소를 클릭하면 해당 배경색이 빨간색으로 바뀌고 텍스트 색상이 흰색으로 변경됩니다.</p>
<p>:active 가상 클래스는 일반적으로 버튼 및 링크와 같은 클릭 가능한 요소에 대한 시각적 피드백을 생성하여 사용자가 해당 요소와 상호 작용했음을 인식할 수 있도록합니다.</p>
<h2 id="_3-link" tabindex="-1"><a class="header-anchor" href="#_3-link" aria-hidden="true">#</a> 3. :link</h2>
<p>CSS의 :link 가상 클래스는 사용자가 아직 방문하지 않은 링크를 스타일링하는데 사용됩니다.</p>
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
<p>이 유사 클래스는 링크가 상호작용되기 전에 초기 스타일을 설정하는 데 종종 사용됩니다.</p>
<p>이 클래스는 아직 방문하지 않은 href 속성을 가진 앵커(<code v-pre>a</code>) 요소에 스타일을 적용합니다.</p>
<hr>
<p>앵커(<code v-pre>a</code>) 요소가 있는 간단한 HTML 구조를 고려해 보세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>example<span class="token punctuation">.</span>com<span class="token punctuation">]</span><span class="token punctuation">(</span>Visit Example<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 방문 전에이 링크를 특별히 스타일링하려면 🔗를 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 방문하지 않은 링크를 스타일 지정 */</span>
<span class="token literal-property property">a</span><span class="token operator">:</span>link <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 많은 브라우저에서 방문하지 않은 링크의 기본 스타일인 파란색과 밑줄이 없는 상태로 표시됩니다.</p>
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
<p>:link 가상 클래스는 방문하지 않은 링크에만 적용된다는 점을 기억하는 것이 중요합니다.</p>
<p>한 번 링크를 방문하면 :link 가상 클래스와 일치하지 않게되며, :visited 가상 클래스나 다른 CSS 규칙에 따라 스타일이 변경될 수 있습니다.</p>
<h2 id="_4-visited" tabindex="-1"><a class="header-anchor" href="#_4-visited" aria-hidden="true">#</a> 4. :visited</h2>
<p>CSS의 :visited 가상 클래스는 사용자가 방문한 링크의 스타일을 지정하는 데 사용됩니다.</p>
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
<p>이 의사 클래스는 사용자가 이미 방문한 링크와 아직 방문하지 않은 링크를 구별할 수 있게 해줍니다.</p>
<p>이미 방문한 href 속성을 가진 앵커(<code v-pre>a</code>) 요소에 스타일을 적용합니다.</p>
<p>— — —</p>
<p>앵커(<code v-pre>a</code>) 요소를 포함한 이전과 동일한 HTML 구조를 고려해보세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://example.com"</span><span class="token operator">></span>Visit Example<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제, 사용자가 이미 방문한 후에이 링크를 특별히 스타일링하려면 :visited를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 사용자가 이미 방문한 링크를 스타일 지정 */</span>
<span class="token literal-property property">a</span><span class="token operator">:</span>visited <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> purple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예에서 사용자가 이미 방문한 후에 링크가 보라색으로 표시됩니다.</p>
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
<p>중요한 점은 :visited 가상 클래스가 방문한 링크에만 적용된다는 것입니다.</p>
<p>한 번 링크를 방문하면 :visited 가상 클래스와 일치하며, 방문한 링크에 지정된 규칙이 반영됩니다.</p>
<h2 id="_5-focus" tabindex="-1"><a class="header-anchor" href="#_5-focus" aria-hidden="true">#</a> 5. :focus</h2>
<p>CSS의 :focus 가상 클래스는 요소가 포커스를 받을 때 스타일을 적용하는 데 사용됩니다.</p>
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
<p>사용자가 입력 필드, 텍스트 영역 또는 링크와 상호 작용할 때 자주 발생합니다. 사용자가 클릭하거나 키보드를 사용하여 해당 요소로 이동하는 경우 발생합니다.</p>
<p>양식 요소나 링크와 상호 작용할 때 사용자에게 시각적 피드백을 제공하는 데 자주 사용됩니다.</p>
<hr>
<p>간단한 HTML 입력 필드를 갖는 양식을 고려해보세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>form<span class="token operator">></span>
  <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"username"</span><span class="token operator">></span>사용자 이름<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
  <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> id<span class="token operator">=</span><span class="token string">"username"</span> name<span class="token operator">=</span><span class="token string">"username"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제, 입력란이 포커스를 받았을 때 스타일을 지정하고 싶다면, :focus를 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 입력란이 포커스를 받았을 때 스타일을 지정합니다 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>focus <span class="token punctuation">{</span>
  border<span class="token operator">-</span>color<span class="token operator">:</span> #007bff<span class="token punctuation">;</span> <span class="token comment">/* 테두리 색을 파란색으로 변경 */</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> 5px #007bff<span class="token punctuation">;</span> <span class="token comment">/* 파란색 그림자 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서, &quot;username&quot;이라는 id를 가진 입력란이 포커스를 받으면 테두리 색이 파란색으로 바뀌고 파란색 그림자가 생기게 될 거에요.```</p>
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
<p>:focus 가상 클래스는 폼 요소에만 적용되는 것이 아니라, 링크 (<code v-pre>a</code> 요소)에 포커스를 받았을 때 스타일을 적용하는 데 사용할 수 있습니다.</p>
<p>이 기능은 웹 사이트의 접근성 및 키보드 탐색을 개선하는 데 특히 유용합니다.</p>
<h2 id="_6-read-only" tabindex="-1"><a class="header-anchor" href="#_6-read-only" aria-hidden="true">#</a> 6. :read-only</h2>
<p>CSS의 :read-only 가상 클래스는 읽기 전용 상태에 있는 폼 요소에 스타일을 적용하는 데 사용됩니다.</p>
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
<p>이 의사 클래스는 사용자가 편집할 수 있는 입력 요소와 읽기 전용인 요소들을 시각적으로 구별할 수 있도록 도와줍니다.</p>
<p>readonly 속성이 설정된 입력 요소, 텍스트영역 및 기타 폼 컨트롤에 스타일을 적용합니다.</p>
<p>— — —</p>
<p>읽기 전용으로 설정된 입력 필드가 포함된 간단한 HTML 폼을 고려해보십시오:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token string">"읽기 전용 입력"</span> readonly<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 입력 필드가 읽기 전용 상태일 때 스타일을 지정하고 싶다면 :read-only를 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 입력 필드가 읽기 전용 상태일 때 스타일 지정 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>read<span class="token operator">-</span>only <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f2f2f2<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 회색으로 변경 */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">999999</span><span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 회색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 입력 필드가 읽기 전용 상태일 때 연한 회색 배경 색상과 회색 텍스트 색상을 가지게 됩니다.</p>
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
<p>:read-only 가상 클래스는 텍스트 영역, 체크박스 및 라디오 버튼과 같은 다른 폼 요소도 읽기 전용으로 설정될 때 스타일을 적용하는 데 사용할 수 있습니다.</p>
<h2 id="_7-read-write" tabindex="-1"><a class="header-anchor" href="#_7-read-write" aria-hidden="true">#</a> 7. :read-write</h2>
<p>CSS의 :read-write 가상 클래스는 사용자가 편집 가능한 폼 요소에 스타일을 적용하는 데 사용됩니다.</p>
<p>이 가상 클래스를 사용하면 사용자가 편집할 수 있는 입력 요소와 읽기 전용인 요소 간의 시각적 차이를 만들어낼 수 있습니다.</p>
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
<p>입력 요소, 텍스트 영역 및 읽기 전용 상태가 아닌 다른 양식 컨트롤에 스타일을 적용합니다.</p>
<p>— — —</p>
<p>입력 필드가 있는 간단한 HTML 양식을 고려해 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> value<span class="token operator">=</span><span class="token string">"편집 가능한 입력란"</span><span class="token operator">></span>
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
<p>이제 사용자가 편집 가능한 입력 필드를 스타일링하려면 :read-write를 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 사용자가 수정 가능한 상태일 때 입력 필드를 스타일링합니다 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>read<span class="token operator">-</span>write <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid #007bff<span class="token punctuation">;</span> <span class="token comment">/* 파란 테두리 추가 */</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 5px<span class="token punctuation">;</span> <span class="token comment">/* 안쪽 여백 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 사용자가 편집 가능할 때 입력 필드가 파란 테두리와 안쪽 여백을 갖게 됩니다.</p>
<p>:read-write 가상 클래스는 다른 폼 요소도 스타일링할 때 사용할 수 있어요. 예를 들어 텍스트영역, 체크박스, 라디오 버튼 등이 편집 가능할 때도 스타일을 적용할 수 있습니다.</p>
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
<h2 id="_8-in-range" tabindex="-1"><a class="header-anchor" href="#_8-in-range" aria-hidden="true">#</a> 8. :in-range</h2>
<p>CSS의 :in-range 가상 클래스는 특정 범위 내에 값을 갖는 입력 필드 또는 레인지 슬라이더와 같은 폼 요소에 스타일을 적용하는 데 사용됩니다.</p>
<p>이 가상 클래스를 사용하면 현재 값이 정의된 범위 내에 있는 요소에 스타일을 적용할 수 있습니다.</p>
<p>입력 요소(예: 텍스트 필드 또는 레인지 슬라이더)의 값이 해당 min 및 max 속성에 의해 정의된 허용 범위 내에 있을 때 스타일이 적용됩니다.</p>
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
<hr>
<p>수용 가능한 값 범위를 갖는 간단한 HTML 입력 필드를 살펴보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"number"</span> min<span class="token operator">=</span><span class="token string">"0"</span> max<span class="token operator">=</span><span class="token string">"100"</span> value<span class="token operator">=</span><span class="token string">"50"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제, 값이 0에서 100 범위 내에 있는 경우 입력 필드에 스타일을 적용하려면 <code v-pre>:in-range</code>을 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 특정 범위 내의 값일 때 input 필드를 스타일링합니다 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span><span class="token keyword">in</span><span class="token operator">-</span>range <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #cfe2f3<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 파랑색으로 변경합니다 */</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">000000</span><span class="token punctuation">;</span> <span class="token comment">/* 텍스트 색상을 검정색으로 변경합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 입력 필드의 값이 0에서 100 사이일 때, 배경색이 연한 파랑색이고 텍스트가 검정색으로 보입니다.</p>
<p>— — —</p>
<p>:in-range 가상 클래스는 범위 내의 값인 경우 다른 폼 요소를 스타일링하는 데에도 사용될 수 있습니다. range 슬라이더와 같은 다른 폼 요소도 해당 범위 내의 값을 가질 때 이 가상 클래스로 스타일을 지정할 수 있습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"range"</span> min<span class="token operator">=</span><span class="token string">"0"</span> max<span class="token operator">=</span><span class="token string">"100"</span> value<span class="token operator">=</span><span class="token string">"50"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 정해진 범위 내의 값일 때 range 슬라이더 스타일을 지정합니다 */</span>
input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"range"</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token keyword">in</span><span class="token operator">-</span>range <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #cfe2f3<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 파란색으로 변경합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 값이 0에서 100 사이에 있는 경우 range 슬라이더의 배경이 연한 파란색으로 표시됩니다.</p>
<p><code v-pre>:in-range</code>를 사용하여 사용자에게 입력값이 허용 범위 내에 있는지 시각적으로 나타내어 사용성 및 사용자 경험을 향상시킬 수 있습니다.</p>
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
<h2 id="_9-out-of-range" tabindex="-1"><a class="header-anchor" href="#_9-out-of-range" aria-hidden="true">#</a> 9. :out-of-range</h2>
<p>CSS에서 사용되는 :out-of-range 가상 클래스는 값이 지정된 범위를 벗어나는 형식 요소(예: 입력 필드 또는 범위 슬라이더)에 스타일을 적용하는 데 사용됩니다.</p>
<p>이 가상 클래스를 사용하면 현재 값이 정의된 범위를 벗어난 요소에 스타일을 적용할 수 있습니다.</p>
<p>이는 입력 필드(텍스트 필드 또는 범위 슬라이더)의 값이 min 및 max 속성에 의해 정의된 허용 범위를 벗어난 경우 해당 요소에 스타일을 적용합니다.</p>
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
<hr>
<p>허용되는 값 범위가 있는 간단한 HTML 입력 필드를 고려해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"number"</span> min<span class="token operator">=</span><span class="token string">"0"</span> max<span class="token operator">=</span><span class="token string">"100"</span> value<span class="token operator">=</span><span class="token string">"150"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 값이 0부터 100까지의 범위를 벗어나면 입력 필드에 스타일을 적용하려면 <code v-pre>:out-of-range</code>를 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 특정 범위를 벗어나는 경우 input 필드의 스타일을 지정합니다 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>out<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span>range <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px solid #ff0000<span class="token punctuation">;</span> <span class="token comment">/* 빨간 테두리 추가 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 입력 필드의 값이 0부터 100 사이의 범위를 벗어나면 빨간 테두리가 생깁니다.</p>
<p>— — —</p>
<p>:out-of-range 가상 클래스는 값이 지정된 범위를 벗어나는 경우 range 슬라이더와 같은 다른 폼 요소에도 스타일을 적용하는 데 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"range"</span> min<span class="token operator">=</span><span class="token string">"0"</span> max<span class="token operator">=</span><span class="token string">"100"</span> value<span class="token operator">=</span><span class="token string">"150"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 지정된 범위를 벗어난 경우 range 슬라이더의 스타일 설정 */</span>
input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"range"</span><span class="token punctuation">]</span><span class="token operator">:</span>out<span class="token operator">-</span><span class="token keyword">of</span><span class="token operator">-</span>range <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #ffd6d6<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 빨간색으로 변경 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 범위가 0부터 100까지인 경우 range 슬라이더의 배경이 연한 빨간색이 됩니다.</p>
<p>:out-of-range를 사용하여 사용자가 허용 범위를 벗어나는 입력임을 시각적으로 나타내어 사용성과 전반적인 사용자 경험을 향상시킬 수 있습니다.</p>
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
<h2 id="_10-target" tabindex="-1"><a class="header-anchor" href="#_10-target" aria-hidden="true">#</a> 10. :target</h2>
<p>CSS의 :target 가상 클래스는 URL의 단편 식별자의 대상인 요소를 스타일링하는 데 사용됩니다.</p>
<p>이 가상 클래스는 주로 앵커 링크(<code v-pre>a</code> 태그)와 함께 사용되어 웹 페이지 내에서 스크롤-맨 위로 또는 스크롤-앵커 기능을 만드는 데 사용됩니다.</p>
<p>URL에 단편 식별자(예: #section1)가 추가되고 해당 URL의 id 속성과 일치하는 요소가 페이지에 있다면 해당 요소가 대상이 되며, :target 가상 클래스를 사용하여 해당 요소를 스타일링할 수 있습니다.</p>
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
<hr>
<p>앵커 링크와 해당 섹션을 갖는 간단한 HTML 구조를 고려해 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>nav<span class="token operator">></span>
  <span class="token operator">&lt;</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#section1"</span><span class="token operator">></span>섹션 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#section2"</span><span class="token operator">></span>섹션 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"#section3"</span><span class="token operator">></span>섹션 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>

<span class="token operator">&lt;</span>section id<span class="token operator">=</span><span class="token string">"section1"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h2<span class="token operator">></span>섹션 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span>이것은 섹션 <span class="token number">1</span>의 내용입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>

<span class="token operator">&lt;</span>section id<span class="token operator">=</span><span class="token string">"section2"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h2<span class="token operator">></span>섹션 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span>이것은 섹션 <span class="token number">2</span>의 내용입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>

<span class="token operator">&lt;</span>section id<span class="token operator">=</span><span class="token string">"section3"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>h2<span class="token operator">></span>섹션 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
  <span class="token operator">&lt;</span>p<span class="token operator">></span>이것은 섹션 <span class="token number">3</span>의 내용입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 앵커 링크를 클릭했을 때 대상 섹션을 스타일링하려면 :target을 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 대상 섹션을 스타일링합니다 */</span>
<span class="token literal-property property">section</span><span class="token operator">:</span>target <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f0f0f0<span class="token punctuation">;</span> <span class="token comment">/* 배경색을 연한 회색으로 변경합니다 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서는 사용자가 앵커 링크(예: &quot;Section 1&quot;)를 클릭할 때 해당 섹션(<code v-pre>section id=&quot;section1&quot;</code>)이 대상이 되며, 연한 회색 배경색이 적용됩니다.</p>
<p>:target 가상 클래스는 부드러운 스크롤 효과가 있는 단일 페이지 웹사이트를 만들거나 앵커 링크를 통해 웹페이지의 섹션을 강조하는 데 특히 유용합니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h1>
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
<p>CSS 가상 클래스는 개발자가 동적이고 인터랙티브한 웹 경험을 만들 수 있는 강력한 도구입니다. 그들의 구문과 적용을 이해하면 웹 프로젝트의 시각적 매력과 사용성을 향상시킬 수 있습니다.</p>
<p>이러한 가상 클래스를 실험해보고 CSS 아카이브에 편입하여 웹 디자인 기술을 한 단계 업그레이드하세요. 연습과 창의력을 발휘하면 가능성이 무한해집니다.</p>
</div></template>
