<template><div><img src="@source/docs/Nextjs/2024-03-29-EmpowerYourSkillsWithLatestJavascriptFeaturesYouDidNotKnowAbout/img/EmpowerYourSkillsWithLatestJavascriptFeaturesYouDidNotKnowAbout_0.png" />
<p>최근 몇 년간 자바스크립트에 지속적으로 새로운 기능들이 등장하고 있습니다. TC39은 매년 새로운 기능을 도입하여 개발을 최대한 쉽게 만들고자 노력하고 있습니다. 대부분의 개발자들은 ES6(ES2015)부터 ES8까지의 기능을 알고 있지만, 2022년이나 작년에 소개된 최신 기능들에 대해 알지 못하는 경우가 많습니다. 당신이 뒤처지지 않도록 이 기능들을 살펴보겠습니다.</p>
<h2 id="프라이빗-클래스-필드와-메소드" tabindex="-1"><a class="header-anchor" href="#프라이빗-클래스-필드와-메소드" aria-hidden="true">#</a> 프라이빗 클래스 필드와 메소드</h2>
<p>대부분의 객체 지향 프로그래밍 언어에 이미 존재하는 프라이빗 클래스 필드와 메소드로 시작합니다. 2015년에 자바스크립트가 클래스를 도입한 것은 다른 발전된 언어에 따라잡기 위한 중대한 변화였으며, 2009년부터 발전이 늦어져 있었습니다. 2022년에 TC39가 프라이빗 필드와 메소드를 도입하여 대규모 프로젝트에서 팀원들이 협력하는데 큰 도움이 되었습니다. 다른 사람이 작성한 함수를 사용할 때 프라이빗해야 하는 문제점을 해결하는 중요한 기능입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ClassWithPrivateField</span> <span class="token punctuation">{</span>
  #privateField<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#privateField<span class="token punctuation">;</span> <span class="token comment">// 문법 오류</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#undeclaredField <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span> <span class="token comment">// 문법 오류</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassWithPrivateField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
instance<span class="token punctuation">.</span>#privateField<span class="token punctuation">;</span> <span class="token comment">// 문법 오류</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="함수-at" tabindex="-1"><a class="header-anchor" href="#함수-at" aria-hidden="true">#</a> 함수 at()</h2>
<p>함수 at()은 [] 괄호와 거의 동일하지만, 음수 인덱스를 at()와 함께 사용할 수 있다는 점에서 차이가 있습니다. 때때로 배열의 마지막 항목에 액세스해야 하는 경우가 있습니다. 이 때 이렇게 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> item <span class="token operator">=</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>lenght <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
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
<p>at():</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> item <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 함수는 다른 함수들만큼 혁신적이지는 않지만, 여러분의 작업을 더 쉽게 만들어주고 더 깔끔한 코드를 작성하도록 도와줍니다.</p>
<h2 id="함수-toreversed-tosorted-with-그리고-tospliced" tabindex="-1"><a class="header-anchor" href="#함수-toreversed-tosorted-with-그리고-tospliced" aria-hidden="true">#</a> 함수 toReversed, toSorted, with 그리고 toSpliced</h2>
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
<p>reverse(), sort(), 그리고 splice() 함수들은 상당히 오랜 시간 동안 사용되어 왔습니다. 모두가 원래의 배열을 변경한다는 점에 대해 비판을 받아왔습니다. 이는 react나 vue와 같은 프레임워크에서 store가 있는 경우 큰 문제로 다가옵니다. 반면 store 값들은 변경 불가능하기 때문에 일반적으로 먼저 배열을 복사해야 하며, 그 후에 spread 연산자 (…)를 사용하여 이러한 함수 중 하나를 적용해야 합니다. 이제 더 이상 배열의 복사를 만들 필요가 없어졌습니다. toReversed(), toSorted(), with(), 그리고 toSplice() 함수 모두 수정된 복사된 배열을 반환합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> months <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Mar"</span><span class="token punctuation">,</span> <span class="token string">"Jan"</span><span class="token punctuation">,</span> <span class="token string">"Feb"</span><span class="token punctuation">,</span> <span class="token string">"Dec"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sortedMonths <span class="token operator">=</span> months<span class="token punctuation">.</span><span class="token function">toSorted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sortedMonths<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['Dec', 'Feb', 'Jan', 'Mar']</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['Mar', 'Jan', 'Feb', 'Dec']</span>

<span class="token keyword">const</span> months <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Jan"</span><span class="token punctuation">,</span> <span class="token string">"Mar"</span><span class="token punctuation">,</span> <span class="token string">"Apr"</span><span class="token punctuation">,</span> <span class="token string">"May"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> months2 <span class="token operator">=</span> months<span class="token punctuation">.</span><span class="token function">toSpliced</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">"Feb"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["Jan", "Feb", "Mar", "Apr", "May"]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["Jan", "Mar", "Apr", "May"]</span>

<span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> reversedItems <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">toReversed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reversedItems<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [3, 2, 1]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">with</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 6, 4, 5]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3, 4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>새로운 기능을 배우는 것은 항상 흥미롭습니다. 이는 프로그래밍에 새로운 측면을 제공하여 동일한 문제에 대해 더 많은 해결책을 제공합니다. 이제 이러한 함수들을 사용하여 코드를 짧게 작성하거나 중요하게 개선할 수 있습니다. 현재로서는 이러한 함수들이 모든 표준 브라우저에서 구현되어 있다고 MDN에서 명시하고 있습니다. 읽어 주셔서 감사합니다. 좋았다면 다른 문서도 확인해보세요.</p>
</div></template>
