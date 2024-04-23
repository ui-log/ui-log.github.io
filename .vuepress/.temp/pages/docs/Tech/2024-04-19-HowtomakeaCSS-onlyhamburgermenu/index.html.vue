<template><div><p>요즘에 제가 사이트에 작은 수정을 하고 있었을 때, 제가 만들었던 햄버거 메뉴를 다시 발견했어요. 아주 특별한 것은 아니에요. 작은 해상도로 들어가면 숨겨진 수직 메뉴로 자신을 압축하는 메뉴인데요. 버튼을 눌러서 보이게하거나 숨길 수 있어요. 흥미로운 점은 이것을 HTML과 CSS만을 사용해서 만든 것이에요.</p>
<p>만들 때, 인터넷에서 어떻게 이를 달성할 수 있는지에 대한 전체적인 예제를 찾을 수 없었고, 원하는 결과를 얻기 위해 많은 시행착오가 필요했다는 것을 기억해요. 그래서 메뉴의 코드를 추출하여 간단화된 예제로 변환했어요.</p>
<h1 id="요구-사항" tabindex="-1"><a class="header-anchor" href="#요구-사항" aria-hidden="true">#</a> 요구 사항</h1>
<p>이 프로젝트를 시작할 때, 수행해야 할 몇 가지 요구 사항이 있었어요.</p>
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
<li>HTML과 CSS만 사용할 수 있습니다. 상호작용도 포함됩니다.</li>
<li>두 개의 다른 메뉴가 아닌 동일한 메뉴여야 하며 한 가지만 표시해야 합니다.</li>
<li>CSS가 로드되지 않을 경우에도 적어도 기능해야 합니다.</li>
</ul>
<h1 id="과정" tabindex="-1"><a class="header-anchor" href="#과정" aria-hidden="true">#</a> 과정</h1>
<p>프로젝트는 다음 단계를 포함합니다:</p>
<ul>
<li>링크 목록을 작성합니다.</li>
<li>링크 목록을 큰 화면에 맞게 꾸밈니다.</li>
<li>링크 목록을 작은 화면에 맞게 꾸밈니다.</li>
<li>작은 화면의 링크 목록을 접을 수 있도록 만듭니다.</li>
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
<h1 id="시작점-링크-목록" tabindex="-1"><a class="header-anchor" href="#시작점-링크-목록" aria-hidden="true">#</a> 시작점, 링크 목록</h1>
<p>메뉴는 결국 탐색에 사용되는 링크 목록이므로, 우리는 그것으로 시작합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>nav<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 항상 표시되는 항목들을 포함하는 네비게이션 바 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://threkk.com"</span><span class="token operator">></span>threkk<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 접을 수 있는 메뉴 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'https://mastodon.social/@threkk'</span><span class="token operator">></span>Mastodon<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'https://twitter.com/threkk'</span><span class="token operator">></span>Twitter<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'https://github.com/threkk'</span><span class="token operator">></span>Github<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 목록은 사실상 전체 메뉴에서 사용할 모든 HTML입니다. 나머지는 CSS 마법일 뿐입니다.</p>
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
<h1 id="큰-화면에서-목록-깔끔하게-만들기" tabindex="-1"><a class="header-anchor" href="#큰-화면에서-목록-깔끔하게-만들기" aria-hidden="true">#</a> 큰 화면에서 목록 깔끔하게 만들기</h1>
<p>이 부분은 간단하며, CSS를 조금 추가하면 끝나요. 어떤 것이 깔끔해 보이는지는 당신의 선택입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nav <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> SeaGreen<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> snow<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
nav ul <span class="token punctuation">{</span>
    <span class="token comment">/* 마커들을 사라지게 만듭니다 */</span>
    list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
nav ul li <span class="token punctuation">{</span>
    <span class="token comment">/* 요소들을 한 줄에 배치합니다 */</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>flex<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3em 1em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 부분은 여기까지입니다. 이 부분에서는 변경 사항이 없을 것입니다.</p>
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
<h1 id="작은-화면에서-목록을-예쁘게-만들기" tabindex="-1"><a class="header-anchor" href="#작은-화면에서-목록을-예쁘게-만들기" aria-hidden="true">#</a> 작은 화면에서 목록을 예쁘게 만들기</h1>
<p>미디어 쿼리를 사용하여 다음 규칙을 작은 해상도에만 제한합니다. 원하는 경우 테블릿을 &quot;작은 장치&quot;로 고려할지에 따라 사용된 값을 조정해볼 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">media</span> <span class="token punctuation">(</span><span class="token parameter">max<span class="token operator">-</span>width<span class="token operator">:</span> 576px</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nav <span class="token punctuation">{</span>
        flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span>
        flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
        margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        margin<span class="token operator">-</span>right<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 현재 모바일 모드이므로 수직 목록으로 표시하고 싶어요 */</span>
    nav ul <span class="token punctuation">{</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/* 두 개의 목록이 있습니다. 첫 번째는 항상 메뉴 바에 표시되는 항목이고,
       두 번째는 숨겨질 목록입니다 */</span>
    nav ul<span class="token operator">:</span>last<span class="token operator">-</span>child <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        flex<span class="token operator">-</span>basis<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    nav ul li <span class="token punctuation">{</span>
        margin<span class="token operator">-</span>bottom<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        text<span class="token operator">-</span>align<span class="token operator">:</span> right<span class="token punctuation">;</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5em<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-HowtomakeaCSS-onlyhamburgermenu/img/HowtomakeaCSS-onlyhamburgermenu_0.png" />
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
<h1 id="작은-화면에서-링크-목록을-접을-수-있게-만들기" tabindex="-1"><a class="header-anchor" href="#작은-화면에서-링크-목록을-접을-수-있게-만들기" aria-hidden="true">#</a> 작은 화면에서 링크 목록을 접을 수 있게 만들기.</h1>
<p>마침내, 흥미로운 부분이에요. 모든 마법은 여기에 있어요: 체크박스가 제공되었을 때, 그것이 선택되지 않았다면 인접한 목록은 표시되지 않아요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">'checkbox'</span><span class="token punctuation">]</span><span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token operator">:</span>checked<span class="token punctuation">)</span><span class="token operator">+</span>ul <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>먼저, HTML에 라벨이 달린 체크박스를 추가해요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>nav<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 항상 보이는 네비게이션 바 아이템 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"https://threkk.com"</span><span class="token operator">></span>threkk<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 햄버거 메뉴 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">'menu'</span> tabindex<span class="token operator">=</span><span class="token string">"0"</span><span class="token operator">></span>
        🍔
    <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
    <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">'menu'</span> type<span class="token operator">=</span><span class="token string">'checkbox'</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 축소 가능한 메뉴 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'https://mastodon.social/@threkk'</span><span class="token operator">></span>Mastodon<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'https://twitter.com/threkk'</span><span class="token operator">></span>Twitter<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'https://github.com/threkk'</span><span class="token operator">></span>Github<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>화면이 큰 경우에는 체크박스와 레이블이 숨겨지며, 그 값은 중요하지 않습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>nav input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">'checkbox'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> nav label <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 작은 화면 해상도에서는 디자인 상의 이유로 레이블을 표시하고 체크박스는 숨깁니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 메뉴 아이콘 스타일링, 체크박스는 숨겨져 있습니다 */</span>
nav label <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> block<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5em<span class="token punctuation">;</span>
    line<span class="token operator">-</span>height<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>6em<span class="token punctuation">;</span>
    align<span class="token operator">-</span>self<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:640/1*yRRvaU-uG1aNW7M9OvzZdg.gif" alt="이미지"></p>
<p>에쇼! 여기까지입니다. 실제 예시를 확인하려면 여기를 클릭하고, 전체 소스 코드는 GitHub에서 확인할 수 있습니다.</p>
<p>이 글이 마음에 드셨나요? Mastodon이나 Twitter에서 알려주세요!</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>
