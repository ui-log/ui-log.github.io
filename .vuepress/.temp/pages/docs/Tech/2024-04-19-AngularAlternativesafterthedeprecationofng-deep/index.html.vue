<template><div><p><img src="@source/docs/Tech/2024-04-19-AngularAlternativesafterthedeprecationofng-deep/img/AngularAlternativesafterthedeprecationofng-deep_0.png" alt="Angular 대체품: ng-deep 폐기 후 대안"></p>
<h1 id="개요" tabindex="-1"><a class="header-anchor" href="#개요" aria-hidden="true">#</a> 개요</h1>
<p>어느 날부터 앵귤러 팀이 SCSS 스타일링 시스템에서 ::ng-deep 가상 클래스를 사용하지 않기로 결정했습니다. 이 가상 클래스는 전역 스타일을 정의하거나 컴포넌트의 스타일 캡슐화를 해제하는 기능을 제공했습니다. 현재 ::ng-deep 가상 클래스가 언제까지 사용 가능할지 명확하지 않습니다. 언제나 부족했던 것은 새로운 도구나 방법으로 ::ng-deep를 대체할 수 있는 것이었습니다. 더 알려지지 않은 것은 이미 존재하는 도구들입니다. 그래서 우리는 가능한 대안을 살펴보겠습니다.</p>
<h1 id="ngclass-버전" tabindex="-1"><a class="header-anchor" href="#ngclass-버전" aria-hidden="true">#</a> ngClass 버전</h1>
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
<p>컴포넌트에서 @Input() 어노테이션을 사용하여 변수를 전달할 수 있고, [ngClass]를 사용하여 조건부 클래스를 설정할 수 있습니다. 이렇게 하면 CSS 파일 중 하나에 정의된 클래스를 커버할 수 있습니다.</p>
<p><strong>test.component.ts</strong> TypeScript 파일</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'./test.component.scss'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div [ngClass]="getTestClass()">테스트&lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TestComponent</span> <span class="token punctuation">{</span>
  @<span class="token function">Input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token literal-property property">hasSpecificStyle</span><span class="token operator">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token function">getTestClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> boolean <span class="token punctuation">}</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
     <span class="token string-property property">'test__specific-style'</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>hasSpecificStyle
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>test.component.scss</strong> 파일</p>
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
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.test__specific-style</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 방식은 직접 작성한 구성 요소에 대해서는 꽤 잘 작동합니다. 그러나 코드에는 상당한 오버헤드가 있습니다. 또한 새로운 스타일이 필요할 때마다 구성 요소를 변경해야 합니다. 이것은 라이브러리와 함께 사용할 때 특히 유용하지 않게 됩니다.</p>
<h1 id="styles-scss-방법" tabindex="-1"><a class="header-anchor" href="#styles-scss-방법" aria-hidden="true">#</a> styles.scss 방법</h1>
<p>styles.scss 파일에는 스타일 캡슐화를 신경 쓰지 않는 전역 스타일이 포함되어 있습니다. 이곳에서의 변경 사항은 전역적이므로 조금 더 신경써야 합니다. 여기에서 매우 구체적으로 스타일을 캡슐화하려고 하세요.</p>
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
<h1 id="호스트-콘텍스트-버전" tabindex="-1"><a class="header-anchor" href="#호스트-콘텍스트-버전" aria-hidden="true">#</a> 호스트 콘텍스트 버전</h1>
<p>이 버전에서는 우리의 테스트 파일을 사용하는 페이지 컴포넌트가 컴포넌트에 클래스를 정의하고, 컴포넌트 자체가 그 클래스를 가져와 사용합니다. 클래스를 가져오기 위해 여기에서 설명된 것처럼 :host-context(.class) 가사 클래스를 사용합니다.</p>
<p>페이지 HTML 파일</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>test <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"specific-style"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>test<span class="token operator">></span>
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
<p>The test.component.ts TypeScript file Markdown</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  selector<span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span>
  styles<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'./test.component.scss'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div class="test__main">Test&lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TestComponent</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And the test.component.scss file Markdown</p>
<div class="language-scss ext-scss line-numbers-mode"><pre v-pre class="language-scss"><code><span class="token selector">:host </span><span class="token punctuation">{</span>
  <span class="token punctuation">:</span><span class="token function">host-context</span><span class="token punctuation">(</span>.specific-style<span class="token punctuation">)</span> <span class="token selector"><span class="token parent important">&amp;</span> </span><span class="token punctuation">{</span>
    <span class="token selector">.test </span><span class="token punctuation">{</span>
      <span class="token selector"><span class="token parent important">&amp;</span>__main </span><span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="scss-변수-방식" tabindex="-1"><a class="header-anchor" href="#scss-변수-방식" aria-hidden="true">#</a> SCSS 변수 방식</h1>
<p>이 버전에서는 SCSS 파일의 var( — custom-border-color, red) 선언을 사용합니다. 이를 통해 각 변수당 스타일 속성을 정의할 수 있습니다. 변수가 컴포넌트를 사용할 때 페이지 블록 아래에서 설명한대로 선언되거나 덮어쓰입니다. 이 버전은 외부에 컴포넌트를 제공하는 라이브러리로 작동해야 하는 경우나 공유 컴포넌트를 위한 경우에 좋습니다. 단점은 이미 정의된 변수만 덮어쓸 수 있고 아직 설정되지 않은 새로운 스타일을 적용할 수 없다는 것입니다.</p>
<p>테스트 컴포넌트를 사용하고 있는 SCSS 파일입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span>host <span class="token punctuation">{</span>
  test <span class="token punctuation">{</span>
    <span class="token operator">--</span>custom<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<p>테스트.component.ts 타입스크립트 파일</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styles</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">'./test.component.scss'</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div class="test__main">테스트&lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">TestComponent</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-AngularAlternativesafterthedeprecationofng-deep/img/AngularAlternativesafterthedeprecationofng-deep_1.png" />
<p>그리고 테스트.component.scss 파일</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>test <span class="token punctuation">{</span>
  <span class="token operator">&amp;</span>__main <span class="token punctuation">{</span>
    border<span class="token operator">-</span>width<span class="token operator">:</span> 1px<span class="token punctuation">;</span>
    border<span class="token operator">-</span>style<span class="token operator">:</span> solid<span class="token punctuation">;</span>
    border<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>custom<span class="token operator">-</span>border<span class="token operator">-</span>color<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="출처" tabindex="-1"><a class="header-anchor" href="#출처" aria-hidden="true">#</a> 출처</h1>
<p>https://www.youtube.com/watch?v=PPmba5cBu3w</p>
</div></template>
