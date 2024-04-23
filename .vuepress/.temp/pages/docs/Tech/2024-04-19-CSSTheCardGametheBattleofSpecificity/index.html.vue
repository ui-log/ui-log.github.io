<template><div><p>CSS 카드 게임의 다이내믹한 세계로 들어오세요! 특정성을 활용하여 동료들과 프레임워크와 싸워서 그들의 CSS를 무시하세요! 클래스, ID 등을 결합하여 다른 모든 CSS 속성에 우승하세요!</p>
<p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_0.png" alt="CSS 카드 게임"></p>
<h1 id="카드-읽는-방법" tabindex="-1"><a class="header-anchor" href="#카드-읽는-방법" aria-hidden="true">#</a> 카드 읽는 방법</h1>
<p>모든 카드는 이름과 특정성을 가지고 있습니다.</p>
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
<p>구체성은 A, B, C 형식을 따릅니다. 예를 들어, 0, 1, 0은 A=0, B=1, C=0을 의미합니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_1.png" alt="CSS The Card Game the Battle of Specificity"></p>
<h2 id="규칙" tabindex="-1"><a class="header-anchor" href="#규칙" aria-hidden="true">#</a> 규칙</h2>
<p>하나 이상의 카드를 결합하여 유효한 선택기를 작성하세요. 각 열의 구체성을 추가하여 선택기의 총 구체성을 얻으세요. 선택기의 구체성이 높으면 승리합니다.</p>
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
<h2 id="특이성-계산" tabindex="-1"><a class="header-anchor" href="#특이성-계산" aria-hidden="true">#</a> 특이성 계산</h2>
<p>선택자 div.nav.fancy는 2개의 클래스와 1개의 타입을 포함하며, 특이성은 다음과 같이 계산됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>div           <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">(</span>타입 선택자<span class="token punctuation">)</span>
<span class="token punctuation">.</span>nav          <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">(</span>클래스 선택자<span class="token punctuation">)</span>
<span class="token punctuation">.</span>fancy        <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">(</span>클래스 선택자<span class="token punctuation">)</span>
______________________
<span class="token constant">TOTAL</span>         <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">(</span>총 특이성<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다시 말하면:</p>
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
<p>이미지 태그를 Markdown 형식으로 변경하십시오.</p>
<p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_2.png" alt="CSSTheCardGametheBattleofSpecificity_2"></p>
<p>specificity를 계산할 때 이것들이 독립된 column이라는 것을 염두에 두세요! specificity를 계산할 때 이것들이 독립된 column이라는 것을 염두에 두세요! C가 10이라고 해서 selector를 B=1로 &quot;승격&quot;하지 않습니다.</p>
<h2 id="더-높은-specificity를-결정하는-방법" tabindex="-1"><a class="header-anchor" href="#더-높은-specificity를-결정하는-방법" aria-hidden="true">#</a> 더 높은 specificity를 결정하는 방법</h2>
<p>column A부터 시작하여 specificity를 비교합니다. 한 selector가 다른 것보다 더 높은 specificity를 가지면 이깁니다. 값이 같으면 다음 column으로 이동합니다. specificity를 비교할 때 A <code v-pre>B</code> C.</p>
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
<img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_3.png" />
<h2 id="동점일-때-어떻게-해야-할까요" tabindex="-1"><a class="header-anchor" href="#동점일-때-어떻게-해야-할까요" aria-hidden="true">#</a> 동점일 때 어떻게 해야 할까요</h2>
<p>만약 두 선택자의 특이성이 동일한 경우, <strong>나중에 선언된</strong> 선택자가 이깁니다.</p>
<img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_4.png" />
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/*
 * 만약 이 파일이 style.css라고 한다면
 */</span>
<span class="token punctuation">.</span>class1 <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">.</span>class2 <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token comment">/*
 * class2가 승리합니다. 파일 아래쪽에 있기 때문에
 * 따라서 class1보다 나중에 선언되었습니다
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_5.png" alt="CSSTheCardGametheBattleofSpecificity_5.png"></p>
<h2 id="universal-selector" tabindex="-1"><a class="header-anchor" href="#universal-selector" aria-hidden="true">#</a> Universal Selector</h2>
<p>페이지의 모든 요소를 대상으로합니다.</p>
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
<p>특정성 싸움에서 어느 정도 이길 수 있을지에 대한 유용한 정보는 제공하지 않아요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 0, 0, 0 */</span>
<span class="token operator">*</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_6.png" alt="CSSTheCardGametheBattleofSpecificity_6"></p>
<h2 id="타입" tabindex="-1"><a class="header-anchor" href="#타입" aria-hidden="true">#</a> 타입</h2>
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
<p>해당 요소 유형의 모든 요소를 대상으로합니다. 예를 들어, 모든 p, div, a 등을 대상으로합니다.</p>
<p>시작하는 데 좋습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 0, 0, 1 */</span>
div <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">/* 0, 0, 1 */</span>
p <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_7.png" alt="이미지"></p>
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
<h2 id="class-selector" tabindex="-1"><a class="header-anchor" href="#class-selector" aria-hidden="true">#</a> Class Selector</h2>
<p>특정 클래스를 가진 모든 요소를 대상으로합니다. 유형 선택기에 우세합니다.</p>
<p>아마도 가장 다재다능하고 인기 있는 선택기입니다. 명확성을 높이기 위해 무한히 연결할 수 있습니다!</p>
<p><em>할 수 있는 것이라고 해서 항상 해야 하는 것은 아니라는 걸 명심하세요</em></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 0, 1, 0 */</span>
<span class="token punctuation">.</span>a <span class="token punctuation">{</span> <span class="token punctuation">}</span>                   
<span class="token comment">/* 0, 2, 0 */</span>
<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token punctuation">{</span> <span class="token punctuation">}</span>          
<span class="token comment">/* 0, 6, 0 */</span>
<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a<span class="token punctuation">.</span>a <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_8.png" alt="CSSTheCardGametheBattleofSpecificity_8"></p>
<h2 id="가상-클래스" tabindex="-1"><a class="header-anchor" href="#가상-클래스" aria-hidden="true">#</a> 가상 클래스</h2>
<p>기존 선택자만으로 부족한 경우를 위해. 연쇄적으로 사용하면 각 추가된 가상 클래스가 특이성을 증가시킵니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 0, 1, 1 */</span>
<span class="token literal-property property">a</span><span class="token operator">:</span>hover <span class="token punctuation">{</span> <span class="token punctuation">}</span>
      
<span class="token comment">/* 0, 1, 1 */</span>
<span class="token literal-property property">a</span><span class="token operator">:</span>last<span class="token operator">-</span>child <span class="token punctuation">{</span> <span class="token punctuation">}</span>        
<span class="token comment">/* 0, 1, 1 */</span>
<span class="token literal-property property">input</span><span class="token operator">:</span>invalid <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">/* 0, 2, 1 */</span>
<span class="token literal-property property">a</span><span class="token operator">:</span>last<span class="token operator">-</span>child<span class="token operator">:</span>hover <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_9.png" />
<h2 id="가상-클래스-not" tabindex="-1"><a class="header-anchor" href="#가상-클래스-not" aria-hidden="true">#</a> 가상 클래스: not()</h2>
<p>요소가 아닌 것에 기반하여 요소를 대상화하세요!</p>
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
<p>특정성에 대한 이 카드의 특수 규칙</p>
<p>선택자의 특정성은 해당 선택자 목록 중 가장 복잡한 선택자의 특정성으로 대체됩니다. 즉, () 내부에 있는 내용의 특정성을 계산하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 0, 0, 1 */</span>
<span class="token operator">*</span><span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token parameter">div</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">/* 1, 0, 0 */</span>
<span class="token operator">*</span><span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token parameter">#myid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">/* 0, 1, 1 */</span>
<span class="token literal-property property">a</span><span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">:</span>visited</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token comment">/* 0, 1, 1 */</span>
<span class="token literal-property property">div</span><span class="token operator">:</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">.</span>myclass</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_10.png" />
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
<h2 id="속성" tabindex="-1"><a class="header-anchor" href="#속성" aria-hidden="true">#</a> 속성</h2>
<p>속성에 따라 요소를 대상으로합니다. 클래스 선택기와 같은 정도의 특이성을 가지고 있습니다.</p>
<p>의사 클래스처럼 특이성을 높이기 위해 연결할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 0, 1, 0 */</span>
<span class="token punctuation">[</span>alt<span class="token punctuation">]</span>                  
<span class="token comment">/* 0, 2, 0 */</span>
<span class="token punctuation">[</span>alt<span class="token operator">=</span>hello<span class="token punctuation">]</span><span class="token punctuation">[</span>title<span class="token operator">=</span>foo<span class="token punctuation">]</span>
<span class="token comment">/* 0, 1, 1 */</span>
a<span class="token punctuation">[</span>title<span class="token operator">=</span>foo<span class="token punctuation">]</span>
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
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>![CSSTheCardGametheBattleofSpecificity_11.png](./img/CSSTheCardGametheBattleofSpecificity_11.png)

## 아이디

아이디로 요소를 대상으로 지정합니다.

이 선택자는 어떤 클래스, 속성, 가상 클래스 선택자보다 우선순위가 높습니다.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 선택자는 연결할 수 없어요. 어떻게 그리고 왜 요소에 두 개의 아이디가 있을까요?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 1, 0, 0 */</span>
#id <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_12.png" alt="CSSTheCardGametheBattleofSpecificity_12.png"></p>
<h2 id="inline" tabindex="-1"><a class="header-anchor" href="#inline" aria-hidden="true">#</a> Inline</h2>
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
<p>제목바로 다음에 ````로 테이블 태그를 Markdown 형식으로 바꾸세요.</p>
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
<h1 id="중요-가장-강력한-카드" tabindex="-1"><a class="header-anchor" href="#중요-가장-강력한-카드" aria-hidden="true">#</a> !중요: 가장 강력한 카드</h1>
<p><img src="@source/docs/Tech/2024-04-19-CSSTheCardGametheBattleofSpecificity/img/CSSTheCardGametheBattleofSpecificity_13.png" alt="CSSTheCardGametheBattleofSpecificity_13"></p>
<p>이 카드 세트를 사용하여 모든 다른 CSS를 제거하세요. 다섯 장의 카드를 모두 모으면 CSS에서 가장 강력한 움직임인 !중요를 선언할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">*</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red <span class="token operator">!</span>important<span class="token punctuation">;</span> <span class="token comment">/* 다른 것들을 이길 수 있음 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>!important 선언을 사용하면 CSS 속성은 다른 선택자나 인라인 스타일로도 쉽게 재정의할 수 없게 됩니다.</p>
<ul>
<li>다섯 장의 카드는 특히 시스템을 구축할 때 사용하기 전에 깊이 생각해야 한다는 것을 나타냅니다.</li>
</ul>
<h1 id="지금-카드를-받아보세요" tabindex="-1"><a class="header-anchor" href="#지금-카드를-받아보세요" aria-hidden="true">#</a> 지금 카드를 받아보세요!</h1>
<p>카드 이미지는 무료로 다운로드하고 인쇄할 수 있습니다. 표준 2.5&quot; x 3.5&quot; 트레이딩 카드 크기로 인쇄할 수 있습니다.</p>
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
<p>GitHub 저장소: https://github.com/hanilim/css-the-card-game</p>
<h1 id="css-특이성에-대한-더-많은-자료" tabindex="-1"><a class="header-anchor" href="#css-특이성에-대한-더-많은-자료" aria-hidden="true">#</a> CSS 특이성에 대한 더 많은 자료</h1>
<p>셀렉터 및 특이성에 대한 공식 규칙서!</p>
<p>유용한 특이성 계산기</p>
</div></template>
