<template><div><p><img src="@source/docs/Tech/2024-04-19-ModernCSSinAngularLayouts/img/ModernCSSinAngularLayouts_0.png" alt="Modern CSS in Angular Layouts"></p>
<p>이번 달에는 새로운 블로그 시리즈 'Angular에서의 Modern CSS'를 소개합니다. 여기서는 Angular 개발자를 위한 현대 CSS 향상 기능을 살펴볼 것입니다.</p>
<p>이번 주에는 레이아웃을 다루어 보겠습니다.</p>
<p>@angular/flex-layout은 v5부터 Angular 조직의 베타 버전으로 남아있는 하이브리드 JavaScript 및 CSS 레이아웃 시스템입니다. 이 기간 동안 CSS는 혁신적으로 발전하여 성능 및 확장 가능한 레이아웃을 구축하는 새로운 방법을 제공했습니다. 이 블로그 포스트에서는 Angular에서 권장되는 레이아웃 접근 방식에 대해 더 알아보게 될 것입니다.</p>
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
<h1 id="최신-css-레이아웃" tabindex="-1"><a class="header-anchor" href="#최신-css-레이아웃" aria-hidden="true">#</a> 최신 CSS 레이아웃</h1>
<p>가장 추천하는 최신 CSS 레이아웃 해결책은 CSS Flexbox와 CSS Grid입니다.</p>
<h2 id="css-flexbox" tabindex="-1"><a class="header-anchor" href="#css-flexbox" aria-hidden="true">#</a> CSS Flexbox</h2>
<p>Flexbox는 행이나 열에 항목을 배열할 수 있는 일차원 레이아웃 방법입니다. 항목들은 추가 공간을 채우기 위해 확장(expand)하거나 작은 공간에 맞게 축소(shrink)됩니다.</p>
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
<p>Angular 데모에서 Flexbox를 확인할 수 있습니다:</p>
<p>Flexbox를 배우기 시작하려면 CSS Tricks: A Complete Guide to Flexbox를 추천합니다.</p>
<p>일반적으로 Flexbox는 응용 프로그램 내 구성 요소 및 소규모 레이아웃에 좋은 선택입니다. CSS Grid 레이아웃은 대형 레이아웃에 사용됩니다. Flexbox와 CSS Grid의 trade-offs에 대해 더 알아보세요.</p>
<h2 id="css-grid" tabindex="-1"><a class="header-anchor" href="#css-grid" aria-hidden="true">#</a> CSS Grid</h2>
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
<p>CSS Grid은 웹을 위한 2차원 레이아웃 시스템입니다. 이를 사용하면 콘텐츠를 행과 열로 배치할 수 있습니다. 개발자가 복잡한 레이아웃을 쉽게 구축할 수 있도록 도와주는 많은 기능이 있습니다.</p>
<p>여기에서 Angular 데모에서 CSS Grid를 볼 수 있습니다:</p>
<p>CSS Grid를 배우기 시작하기 위해 CSS Tricks: Grid에 대한 완전 가이드를 추천합니다.</p>
<h1 id="flex-grid-유연한-레이아웃의-미래" tabindex="-1"><a class="header-anchor" href="#flex-grid-유연한-레이아웃의-미래" aria-hidden="true">#</a> Flex, grid &amp; 유연한 레이아웃의 미래</h1>
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
<p>Angular의 주요 원칙 중 하나는 관심사의 분리입니다. flex-layout를 CSS의 지지대로 사용하지 않도록 함으로써, 더 읽기 쉽고 유지보수가 용이한 코드로 사용자를 이끌어가고 있습니다. 게다가 @angular/cdk의 레이아웃 패키지는 반응형 UI를 구축하기 위한 가벼운 유틸리티를 제공합니다. 이러한 옵션들은 payload 크기와 런타임 비용을 줄이며, Lighthouse 성능 메트릭을 향상시킵니다.</p>
<p>오늘부터는 Angular의 폐기 관행을 따를 것입니다. @angular/flex-layout은 베타 패키지이기 때문에 Angular v15에서는 @angular/flex-layout의 최종 릴리스를 게시할 것입니다.</p>
<p>@angular/flex-layout은 베타 상태를 벗어나지 않았지만, 매주 30만 다운로드 이상의 사용자를 확보했습니다. 해당 패키지에 의존하는 애플리케이션을 지원하기 위해 보안 및 브라우저 호환성 수정을 적어도 1년간 지속적으로 배포할 것입니다. 이는 패키지의 장기 지원(LTS)의 일환입니다.</p>
<h1 id="최신-css로-이주-계획" tabindex="-1"><a class="header-anchor" href="#최신-css로-이주-계획" aria-hidden="true">#</a> 최신 CSS로 이주 계획</h1>
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
<p>현대적인 레이아웃 시스템을 선택하는 것은 앱의 구조에 기반을 둡니다. 크롬의 Learn CSS 코스에서 현대적인 레이아웃에 대해 더 알아보세요.</p>
<p>라이브러리의 복잡성과 동적 사용 사례 때문에 자동 이관을 통해 새 레이아웃 시스템으로 직접 매핑할 수 없지만, 네 가지 레이아웃 도구를 추천할 수 있습니다. 이곳에 고수준 개요가 있습니다:</p>
<h2 id="css-flexbox-1" tabindex="-1"><a class="header-anchor" href="#css-flexbox-1" aria-hidden="true">#</a> CSS Flexbox</h2>
<p>Flexbox는 Angular 템플릿에서 Flexbox 레이아웃을 적용하는 개발자들에게 효율적인 방법을 제공하기 위해 설계된 @angular/flex-layout에 가장 유사합니다. 아래 코드 예제는 일반적인 Flexbox 속성과 @angular/flex-layout의 해당 속성을 매핑한 것입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
flex<span class="token operator">-</span>direction<span class="token operator">:</span> row<span class="token punctuation">;</span> <span class="token comment">// fxLayout</span>
flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span> <span class="token comment">// fxLayout</span>
box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
align<span class="token operator">-</span>content<span class="token operator">:</span> stretch<span class="token punctuation">;</span> <span class="token comment">// fxLayoutAlign</span>
align<span class="token operator">-</span>items<span class="token operator">:</span> stretch<span class="token punctuation">;</span> <span class="token comment">// fxLayoutAlign</span>
justify<span class="token operator">-</span>content<span class="token operator">:</span> flex<span class="token operator">-</span>start<span class="token punctuation">;</span> <span class="token comment">// fxLayoutAlign</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-grid-1" tabindex="-1"><a class="header-anchor" href="#css-grid-1" aria-hidden="true">#</a> CSS Grid</h2>
<p>많은 CSS 조사 결과 CSS 그리드가 2차원 레이아웃의 미래로 대두되고 있다고 강조되었습니다. 현대 CSS 그리드가 flex 레이아웃 디자인보다 더 최근에 개발되었기 때문에, flex 레이아웃에서 CSS 그리드로 이주하는 과정은 연관된 속성을 활용하기 위해서는 더 수동적인 절차입니다.</p>
<h2 id="angular-cdk의-layout-패키지" tabindex="-1"><a class="header-anchor" href="#angular-cdk의-layout-패키지" aria-hidden="true">#</a> @angular/cdk의 layout 패키지</h2>
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
<p>만약 뷰포트 크기를 다루기 위해 TypeScript 코드에서 레이아웃 특정 유틸리티가 필요하다면, Angular은 @angular/cdk의 레이아웃 패키지를 제공합니다.</p>
<p>@angular/cdk의 레이아웃 패키지는 주로 코드로 반응형 UI 상호작용을 구축해야 하는 경우에 사용됩니다. 일반적으로 애플리케이션 레이아웃을 생성하는 것보다 코드에서 상호작용을 구현해야 하는 경우입니다. 예를 들어 큰 뷰포트에서는 팝업을 트리거 엘리먼트에 연결된 드롭다운으로 표시하고, 작은 뷰포트에서는 중앙에 다이얼로그로 표시하고 싶을 수 있습니다.</p>
<h2 id="tailwindcss" tabindex="-1"><a class="header-anchor" href="#tailwindcss" aria-hidden="true">#</a> TailwindCSS</h2>
<p>Tailwind CSS는 @angular/flex-layout과 유사한 스타일링을 위한 템플릿 지향 접근 방식을 제공합니다.</p>
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
<p>테일윈드 CSS는 플렉스, pt-4, 텍스트-센터, 90도 회전 등의 클래스로 가득 찬 유틸리티-퍼스트 CSS 프레임워크로, 이를 조합하여 마크업에서 직접 어떠한 디자인이든 구축할 수 있습니다. Angular + 테일윈드 CSS에 대해 더 알아보세요.</p>
<p>마이그레이션을 계획할 때는 네 가지 현대적인 옵션을 모두 살펴보시기를 권장해 드립니다.</p>
<h1 id="감사합니다" tabindex="-1"><a class="header-anchor" href="#감사합니다" aria-hidden="true">#</a> 감사합니다</h1>
<p>CSS가 몇 년 동안 어떻게 발전하고 제공하는 현대적인 레이아웃 대안에 흥미로워합니다.</p>
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
<p>장의 솔루션을 권장하는 것은 성능 면에서 개발자들이 안정적인 방향을 유지할 수 있도록 해주면서 Angular 팀이 앞으로의 발전을 이끌 수 있는 중요한 프로젝트에 집중할 수 있습니다.</p>
<p>다음에 뵙기까지 현대 CSS를 구축해보세요! (그리고 다음에는 가시성에 대해 알아보도록 하죠)!</p>
<p>앵귤러 CSS 중에서 어떤 것을 더 알고 싶으신가요?</p>
</div></template>
