<template><div><p><img src="@source/docs/Tech/2024-04-19-MasteringDynamicStylingwithAngularsNgClassIllustratedwithCode/img/MasteringDynamicStylingwithAngularsNgClassIllustratedwithCode_0.png" alt="MasteringDynamicStylingwithAngularsNgClassIllustratedwithCode_0.png"></p>
<p>이 기사에서는 Angular의 NgClass 지시문을 실용적으로 적용하여 동적이고 대화형 사용자 인터페이스를 만들어보겠습니다. 컴포넌트 논리에 기반한 스타일을 신속하게 전환하기 위해 NgClass를 활용하는 방법에 대해 살펴보겠습니다.</p>
<h2 id="ngclass-이해하기" tabindex="-1"><a class="header-anchor" href="#ngclass-이해하기" aria-hidden="true">#</a> NgClass 이해하기:</h2>
<p>Angular의 NgClass는 요소에 CSS 클래스를 조건부로 적용하는 지시문으로, 동적 스타일링을 위한 강력한 도구를 제공합니다. 특정 조건이나 사용자 작업에 응답하여 요소의 외관을 수정해야 할 필요성이있을 때 그 효과가 명백해집니다.</p>
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
<p>문서: https://angular.io/api/common/NgClass</p>
<p>우리 예제에서는 Angular 컴포넌트 내의 요소 색상을 동적으로 업데이트하기 위해 NgClass를 추가할 것입니다.</p>
<h2 id="데모" tabindex="-1"><a class="header-anchor" href="#데모" aria-hidden="true">#</a> 데모</h2>
<img src="@source/docs/Tech/2024-04-19-MasteringDynamicStylingwithAngularsNgClassIllustratedwithCode/img/MasteringDynamicStylingwithAngularsNgClassIllustratedwithCode_1.png" />
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
<p>코드: https://stackblitz.com/edit/angular-intensiv-create-a-new-project-cytwoy?file=src%2Fapp%2Fapp.component.html</p>
<p>시작해봐요! 🚀</p>
<h2 id="색상-변경-기능" tabindex="-1"><a class="header-anchor" href="#색상-변경-기능" aria-hidden="true">#</a> 색상 변경 기능</h2>
<p>우리의 예제는 Angular 컴포넌트 내의 색상 변경 기능을 중심으로 합니다. NgClass가 동적 스타일링을 어떻게 구현하는지 이해하기 위해 코드를 살펴봅시다:</p>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>inner-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token comment">&lt;!-- 색상 변경 버튼 --></span>
<span class="token code keyword">      &lt;button [class.pink]="currentColorClass === 'pink'" (click)="onToggleColor('pink')">핑크&lt;/button>
      &lt;button [class.blue]="currentColorClass === 'blue'" (click)="onToggleColor('blue')">파랑&lt;/button>
      &lt;button [class.green]="currentColorClass === 'green'" (click)="onToggleColor('green')">초록&lt;/button>
    &lt;/div></span>
    <span class="token comment">&lt;!-- 동적으로 스타일이 적용된 요소 --></span>
<span class="token code keyword">    &lt;div class="element" [ngClass]="currentColorClass">&lt;/div></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>색상 변경 버튼을 클릭하면 onclick 이벤트가 발생하고, 선택한 버튼의 색상에 맞게 currentColorClass가 동적으로 업데이트됩니다. element 클래스를 가진 div는 NgClass를 활용하여 currentColorClass에 따라 동적으로 색상이 조정됩니다.</p>
<h2 id="angular-컴포넌트-로직" tabindex="-1"><a class="header-anchor" href="#angular-컴포넌트-로직" aria-hidden="true">#</a> Angular 컴포넌트 로직</h2>
<p>Angular 컴포넌트가 동적 스타일링 로직을 조율합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'app-root'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">'./app.component.html'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./app.component.css'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">currentColorClass</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">'pink'</span><span class="token punctuation">;</span>

  <span class="token function">onToggleColor</span><span class="token punctuation">(</span>color<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>currentColorClass <span class="token operator">=</span> color<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AppComponent 클래스는 색상 변경 로직을 캡슐화하며, currentColorClass는 NgClass의 앵커 포인트로 작용합니다.</p>
<h2 id="디자인과-상호작용을-위한-스타일링" tabindex="-1"><a class="header-anchor" href="#디자인과-상호작용을-위한-스타일링" aria-hidden="true">#</a> 디자인과 상호작용을 위한 스타일링</h2>
<p>템플릿에서 pink, blue, green 클래스가 NgClass를 통해 사용됩니다.</p>
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
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #dce0dc<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>inner<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>pink <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>blue <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">210</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>green <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token operator">%</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 버튼 컨테이너 스타일링 */</span>
<span class="token punctuation">.</span>button<span class="token operator">-</span>container <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 4rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 버튼 스타일링 */</span>
button <span class="token punctuation">{</span>
  margin<span class="token operator">-</span>right<span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem 2rem<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> transparent<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>6rem<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid grey<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3rem <span class="token number">0</span><span class="token punctuation">.</span>3rem<span class="token punctuation">;</span>
  letter<span class="token operator">-</span>spacing<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>element <span class="token punctuation">{</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 10rem<span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> 10rem<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">76</span><span class="token punctuation">,</span> <span class="token number">77</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  font<span class="token operator">-</span>size<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3rem <span class="token number">0</span><span class="token punctuation">.</span>3rem<span class="token punctuation">;</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> 3s infinite alternate slidein<span class="token punctuation">;</span> <span class="token comment">/* 요소에 대한 애니메이션 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 슬라이드인 애니메이션을 위한 키프레임 */</span>
@keyframes slidein <span class="token punctuation">{</span>
  from <span class="token punctuation">{</span>
    margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  to <span class="token punctuation">{</span>
    margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">0</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>앵귤러의 NgClass 디렉티브는 색상 변경 기능을 보여줄 때 동적 스타일링을 손쉽게 처리합니다. 명료한 구조, 논리적인 컴포넌트 구성 및 매력적인 디자인은 앵귤러가 개발자들에게 매혹적인 사용자 인터페이스를 만들 수 있도록 하는 데 헌신하고 있음을 보여줍니다.</p>
<p>즐거운 코딩 되세요!```</p>
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
<p>완료되었습니다. 도움이 되었기를 바랍니다. 저를 Medium 및 트위터에서 팔로우해도 괜찮아요: https://twitter.com/SkjelinOttosen</p>
</div></template>
