<template><div><img src="@source/docs/Tech/2024-04-19-CSStechniqueseveryfrontenddevelopershouldknowin2024/img/CSStechniqueseveryfrontenddevelopershouldknowin2024_0.png" />
<p>여러 해 동안 CSS는 상당히 발전해 왔습니다. 최근 업데이트로 프론트엔드 개발자들에게 강력한 도구를 제공하여 모든 주요 브라우저에서 효율적이고 깔끔하며 복잡한 레이아웃을 만들 수 있게 되었습니다.</p>
<p>이 중에서, 나는 최근 가장 많이 사용하고 있는 몇 가지 기술이 있습니다. 내 의견으로는 이들은 2024년에 모든 프론트엔드 개발자의 무기가 되어야 한다.</p>
<h1 id="css-중첩" tabindex="-1"><a class="header-anchor" href="#css-중첩" aria-hidden="true">#</a> CSS 중첩</h1>
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
<p>전통적인 CSS는 종종 긴 코드와 반복적인 코드로 이어졌어요. 2023년까지는 SCSS와 같은 도구를 사용하여 스타일을 구조화하는 방법이 필요했지만 이제는 순수 CSS로도 안전하게 그렇게 할 수 있어요.</p>
<h2 id="css-중첩이-없는-css" tabindex="-1"><a class="header-anchor" href="#css-중첩이-없는-css" aria-hidden="true">#</a> CSS 중첩이 없는 CSS</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>container <span class="token punctuation">.</span>header <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>container <span class="token punctuation">.</span>header h1 <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-중첩을-사용한-css" tabindex="-1"><a class="header-anchor" href="#css-중첩을-사용한-css" aria-hidden="true">#</a> CSS 중첩을 사용한 CSS</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">.</span>header <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> blue<span class="token punctuation">;</span>
    h1 <span class="token punctuation">{</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS 중첩을 통해 선택자를 서로 중첩시켜 더 깔끔하고 조직적인 스타일을 작성할 수 있습니다. 이는 스타일시트에서 더 자연스러운 계층 구조를 모방하는 방식입니다.</p>
<h1 id="has-선택자" tabindex="-1"><a class="header-anchor" href="#has-선택자" aria-hidden="true">#</a> :has() 선택자</h1>
<p>:has() 선택자는 새로운 수준의 스타일링 유연성을 제공하여, 자식 조건을 기반으로 한 부모 선택자를 허용하며 모든 주요 브라우저에서 안전하게 사용할 수 있습니다.</p>
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
<p>이전 CSS로 작업할 때는 자식 또는 형제 조건에 따라 부모 요소를 선택해야 하는 경우 복잡한 선택기나 JavaScript가 필요했습니다. :has() 선택기는 이 프로세스를 간소화하여 응답 및 동적 디자인에 대한 새로운 가능성을 엽니다.</p>
<h2 id="has-선택기-없이-css" tabindex="-1"><a class="header-anchor" href="#has-선택기-없이-css" aria-hidden="true">#</a> :has() 선택기 없이 CSS</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 특정 자식을 포함하는 div에 클래스를 추가하는 JavaScript</span>
document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'div > a.special-class'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">link</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  link<span class="token punctuation">.</span>parentElement<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'has-special-link'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 동적으로 추가된 클래스를 대상으로 하는 CSS */</span>
div<span class="token punctuation">.</span>has<span class="token operator">-</span>special<span class="token operator">-</span>link <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid green<span class="token punctuation">;</span>
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
<p>:has() 선택자 이전에는 CSS에서 특정 자식 요소의 존재를 기반으로 부모 요소를 직접 타겟팅할 수 없었습니다. 대신 개발자들은 일반적으로 JS를 사용하여 부모 div에 클래스를 동적으로 추가했습니다.</p>
<h2 id="has-선택자를-사용한-css" tabindex="-1"><a class="header-anchor" href="#has-선택자를-사용한-css" aria-hidden="true">#</a> :has() 선택자를 사용한 CSS</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">div</span><span class="token operator">:</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">></span> a<span class="token punctuation">.</span>special<span class="token operator">-</span><span class="token keyword">class</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:has 선택자를 사용하면 .special-class를 가진 자식 a를 가지고 있는 div 요소를 직접 타겟할 수 있어서 div의 테두리를 변경할 수 있습니다. 이는 추가적인 JS 코드나 복잡한 형제 선택자가 필요 없어 CSS를 간단하게 만듭니다.</p>
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
<h1 id="is-선택자" tabindex="-1"><a class="header-anchor" href="#is-선택자" aria-hidden="true">#</a> :is() 선택자</h1>
<p>더 읽기 쉬운 CSS를 작성하는 데 도움이 되며 모든 주요 브라우저에서 안전하게 사용할 수 있는 또 다른 편리한 선택자인 :is() 선택자가 있습니다.</p>
<p>:is() 선택자 이전에는 스타일을 공유하는 여러 요소를 선택하는 것이 자주 긴방복한 CSS 선택자로 이어졌습니다.</p>
<h2 id="is-선택자-없이-css" tabindex="-1"><a class="header-anchor" href="#is-선택자-없이-css" aria-hidden="true">#</a> :is() 선택자 없이 CSS</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>article <span class="token operator">></span> h1<span class="token punctuation">,</span> <span class="token punctuation">.</span>article <span class="token operator">></span> h2<span class="token punctuation">,</span> <span class="token punctuation">.</span>article <span class="token operator">></span> h3 <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="is-선택자를-사용한-css" tabindex="-1"><a class="header-anchor" href="#is-선택자를-사용한-css" aria-hidden="true">#</a> :is() 선택자를 사용한 CSS</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>article <span class="token operator">></span> <span class="token operator">:</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token parameter">h1<span class="token punctuation">,</span>h2<span class="token punctuation">,</span>h3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>전통적으로 여러 요소에 스타일을 적용하려면 각 선택기를 개별적으로 나열해야 했습니다. 첫 번째 블록에서 처럼 h1, h2 및 h3 요소에 대해 .article 내에서 동일하게 스타일이 적용되었습니다. :is() 를 사용하면 두 번째 블록에서처럼 :is() 내에 선택기를 그룹화하여 동일한 효과를 더 간결하게 달성할 수 있으며, 반복을 줄이고 코드 가독성을 향상시킵니다.```</p>
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
<p>CSS가 계속 발전함에 따라 중첩(nesting)과 :has, :is와 같은 가상 클래스(pseudo-classes) 기술을 통해 스타일과 UI 코드를 개선할 수 있게 되었습니다.</p>
</div></template>
