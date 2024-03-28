<template><div><h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>Angular 개발 영역에서 스타일링은 종종 내부 컴포넌트 스타일과 제3자 라이브러리의 정착된 미학 간의 충돌에 직면할 때 미로처럼 복잡한 여정이 될 수 있습니다. 해결책의 무기 가운데 두 가지가 두드러지는데, 바로 ::ng-deep와 ViewEncapsulation.None입니다. 그러나 Angular 팀이 ::ng-deep의 최종 폐지를 시사하면서 개발자들은 대안을 탐색할 필요가 생겼습니다. 이 글은 두 방법론의 세세한 점을 파헤치고, ::ng-deep에 의존하지 않고 컴포넌트별 스타일링을 유지하는 전략을 제시합니다.</p>
<h2 id="ng-deep의-문제" tabindex="-1"><a class="header-anchor" href="#ng-deep의-문제" aria-hidden="true">#</a> ::ng-deep의 문제:</h2>
<p>::ng-deep는 Angular에서 컴포넌트 캡슐화를 관통하고 전역으로 스타일을 적용하는 데 사용되는 CSS 컴바이너입니다. 다음은 예시입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* 컴포넌트의 SCSS 파일 내에서 */</span>
<span class="token operator">:</span><span class="token operator">:</span>ng<span class="token operator">-</span>deep <span class="token punctuation">.</span>my<span class="token operator">-</span>element <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 컴포넌트 내에서 &quot;my-element&quot; 클래스를 가진 모든 요소에 빨간색을 적용하여 캡슐화된 스타일을 재정의합니다.</p>
<p>::ng-deep은 Angular 개발자가 견고한 스타일을 무력화하는 데 도움이 되었던 오래된 동료입니다. 그러나 ::ng-deep의 종말이 다가오면서 Angular 환경의 변화가 시사됩니다. ::ng-deep의 유용성에도 불구하고, Angular 팀이 중단을 계획하고 있어 대체 솔루션을 찾을 필요성이 있습니다.</p>
<h2 id="viewencapsulation-none의-등장" tabindex="-1"><a class="header-anchor" href="#viewencapsulation-none의-등장" aria-hidden="true">#</a> ViewEncapsulation.None의 등장:</h2>
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
<p>희망의 빛이 ViewEncapsulation.None 형태로 나타납니다. Angular의 ViewEncapsulation.None은 컴포넌트 스타일을 전역적으로 적용하여 캡슐화를 우회할 수 있게 해줍니다. 예시와 함께 간단히 설명해 드리겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> ViewEncapsulation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'app-example'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">'./example.component.html'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./example.component.scss'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">encapsulation</span><span class="token operator">:</span> ViewEncapsulation<span class="token punctuation">.</span>None <span class="token comment">// 스타일을 전역적으로 적용</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ExampleComponent</span> <span class="token punctuation">{</span>
  <span class="token comment">// 컴포넌트 로직을 여기에 작성</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ViewEncapsulation.None을 사용하면 컴포넌트의 SCSS 파일에 선언된 스타일이 전체 애플리케이션에 영향을 미치게 되어, 마치 전역 스타일 파일에 선언된 것처럼 작동합니다. 컴포넌트 스타일의 캡슐화를 포기함으로써 개발자는 스타일링을 글로벌 스코프로 확장할 수 있으며, 애플리케이션의 주요 스타일 파일에 작성된 선언과 유사한 방식으로 스타일을 적용할 수 있습니다. 일부 시나리오에서는 이 접근 방식이 적합할 수 있지만, 모든 프로젝트 요구 사항과 일치하지 않을 수 있습니다.</p>
<h1 id="viewencapsulation-none으로-컴포넌트-특정성-보존하기" tabindex="-1"><a class="header-anchor" href="#viewencapsulation-none으로-컴포넌트-특정성-보존하기" aria-hidden="true">#</a> ViewEncapsulation.None으로 컴포넌트 특정성 보존하기</h1>
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
<p>ViewEncapsulation.None에 대한 컴포넌트별 스타일링을 옹호하는 것은 창의력을 필요로 합니다. 여기에서는 컴포넌트 스타일의 성결을 보호하기 위한 두 가지 기술을 탐구해봅니다:</p>
<ul>
<li>컴포넌트 셀렉터로 스타일 캡슐화:
솔직한 접근 방식은 컴포넌트 스타일을 컴포넌트 셀렉터 내에서 캡슐화하는 것입니다. 스타일을 셀렉터의 범위 내에 감싸면, 개발자들은 컴포넌트별 미학의 무결성을 유지할 수 있습니다. 그러나 이 방법은 동적 렌더링 시나리오에서 구성 요소가 프로그래밍 방식으로 생성될 때 실패할 수 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token operator">-</span>component <span class="token punctuation">{</span>
    <span class="token comment">/* 우리의 컴포넌트별 스타일 */</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> blue<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>클래스 기반 캡슐화 활용:
동적 렌더링이 도전적인 상황에서는, 클래스 기반 캡슐화 전략이 가치 있는 대안으로 떠오릅니다. 컴포넌트의 최상위 요소에 컴포넌트 셀렉터와 일치하는 클래스를 할당함으로써, 개발자들은 이 클래스의 범위 내에서 스타일을 캡슐화할 수 있습니다. 따라서, 동적 렌더링 시나리오에서도 컴포넌트별 스타일은 그대로 유지됩니다.
여기 &quot;app-component&quot;의 범위 내에서, 당신의 스타일이 다이내믹 생성의 변덕에 방해받지 않고 피어너세요.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"app-component"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 다른 템플릿 코드 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>app<span class="token operator">-</span>component <span class="token punctuation">{</span>
    <span class="token comment">/* 우리 컴포넌트별 스타일 */</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="마무리" tabindex="-1"><a class="header-anchor" href="#마무리" aria-hidden="true">#</a> 마무리</h1>
<p>Angular 스타일링과 제3자 통합의 교차점은 개발자들에게 큰 도전을 제시합니다. ::ng-deep가 신뢰할 만한 해결책으로 작용해왔지만, 곧 폐기 예정인 상황에서 스타일링 전략을 재고하는 필요성이 대두됩니다. ViewEncapsulation.None은 스타일 선언에 대한 전역 범위를 제공하는 강력한 대안으로 떠오르지만, 이 패러다임 내에서 컴포넌트 특이성을 유지하는 것은 세심한 접근이 필요합니다. 컴포넌트 셀렉터 내에서 스타일 캡슐화하거나 클래스 기반 캡슐화를 활용하는 등의 접근 방식이 필요합니다. 선견지명과 적극적 대처로 ::ng-deep 대 ViewEncapsulation.None 딜레마를 극복함으로써 Angular 개발자들은 애플리케이션에서 미학과 기능성의 원활한 통합을 보장할 수 있습니다.</p>
</div></template>
