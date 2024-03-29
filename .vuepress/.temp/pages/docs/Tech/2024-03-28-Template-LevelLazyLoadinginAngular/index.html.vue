<template><div><p><img src="@source/docs/Tech/2024-03-28-Template-LevelLazyLoadinginAngular/img/Template-LevelLazyLoadinginAngular_0.png" alt="Template-LevelLazyLoadinginAngular_0"></p>
<p>Angular과 같은 컴포넌트 기반 프레임워크를 사용하면 템플릿이 컴포넌트의 중요한 구성 요소임을 알 수 있습니다. 템플릿의 유연성과 지원하는 선언적 API 덕분에 매우 동적인 웹 애플리케이션을 만들 수 있습니다. Angular 17에서는 많은 멋진 기능들이 도입되었는데, 그 중 중요한 것 중 하나가 새로운 블록 템플릿 구문인 @-syntax 표기법인데, 이는 템플릿에서 몇 가지 새로운 API의 도입으로 이어졌습니다.</p>
<p>이러한 API는 템플릿의 HTML 구문을 더 확장시켜줍니다. 그 중 하나가 자신감을 가지고 있으며 @defer 블록을 통해 액세스할 수 있는 Deferrable Views입니다.</p>
<p>현재 개발자 미리보기 상태인 Deferrable Views는 Angular 템플릿을 선언적이고 내장된 메커니즘으로 보완하여, 개발자가 필요한 경우 나중에 나중에 게으르게로드될 컴포넌트, 디렉티브, 파이프 및 관련 CSS를 지정할 수 있게 해줍니다.</p>
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
<p>이 기사에서는 Deferrable Views에 대해 심층 안내를 하지는 않겠지만, 우리 개발자들로 하여금 산문적인 템플릿 구문을 통해 게으르게 로딩의 이점을 얻을 수 있도록하여 프레임워크 자체로 일부 매뉴얼 작업을 제공했다는 것을 보여드리고자 합니다.</p>
<p>이 실습에서는 게으른 로딩을 사용하여 가장 자주 발생하는 사용 사례를 보여주겠습니다: 뷰포트 내에서 로딩 및 렌더링될 아래 콘텐츠입니다.</p>
<h2 id="쇼케이스-요구-사항" tabindex="-1"><a class="header-anchor" href="#쇼케이스-요구-사항" aria-hidden="true">#</a> 쇼케이스 요구 사항</h2>
<p>여기서 쇼케이스하고자 하는 내용을 더 잘 이해하기 위해, 다음을 구현하고자 하는 포인트를 먼저 정의해 봅시다:</p>
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
<li>뷰포트에 들어왔을 때 lazy loading을 트리거합니다.</li>
<li>로딩 및 에러 상태를 적절히 처리합니다.</li>
<li>깜빡임 문제를 해결합니다.</li>
</ul>
<p>위는 쇼케이스를 위한 주요한 기본 사항을 나타내고 있으며, 이후에는 다음과 같은 복잡한 사항들을 구현할 수 있습니다:</p>
<ul>
<li>다른 트리거 요소를 사용하여 빠른 lazy loading을 트리거합니다.</li>
<li>여러 템플릿 부분(즉, 컴포넌트)을 lazy loading합니다.</li>
</ul>
<p>자세히 알아봅시다 🚀</p>
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
<h2 id="클래식-템플릿-수준-지연-로딩" tabindex="-1"><a class="header-anchor" href="#클래식-템플릿-수준-지연-로딩" aria-hidden="true">#</a> 클래식 템플릿 수준 지연 로딩</h2>
<p>Angular 17 이전에는 템플릿 일부를 동적으로 생성할 수 있게 해주는 명령형 API가 존재했습니다. 컴포넌트, 디렉티브, 파이프 및 관련 CSS와 같이 Angular 내부적으로 컴포넌트 생성 및 템플릿 및 뷰를 관리하는 방식과 매우 유사했습니다. 템플릿에 게으른 로딩을 예정한 종속 항목들은 반드시 템플릿에 존재할 필요가 없었으며, 런타임에서 해당 모듈들을 동적으로 가져오기 위해 JavaScript의 동적 임포트를 적극적으로 활용했습니다.</p>
<p>이러한 클래식 API의 장점은 게으른 로딩을 하는 다양한 방법을 취할 수 있다는 것이며, 여기서 보여드리는 것이 아마 가장 간단한 방법 중 하나일지도 모릅니다.</p>
<p>샘플 데모 🐱‍🏍</p>
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
<p>우리는 시작으로 UserProfile 컴포넌트를 사용해보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div class="wrapper">
      &lt;app-details>&lt;/app-details>
    &lt;/div>

    &lt;div class="wrapper wrapper-xl">
      &lt;app-projects>&lt;/app-projects>
      &lt;app-achievements>&lt;/app-achievements>
    &lt;/div>

    ...
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>ProjectsComponent<span class="token punctuation">,</span> AchievementsComponent<span class="token punctuation">]</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Details 컴포넌트는 사용자의 꽤 긴 설명을 보여줍니다. 한편, Projects와 Achievements 컴포넌트는 프로젝트와 성취 목록을 렌더링합니다. 설명이 매우 길기 때문에 이 두 컴포넌트는 사용자에게 처음에는 보이지 않습니다. 화면 영역 밖에 있죠 👇:</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*0u1G36gdDFj8Z13_1UY1Rg.gif" />
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
<p>이렇게 되는 콘텐츠는 아래 판 위로 컨텐츠라고 알려져 있고, 초기 페이지 로드 및 어플리케이션 번들을 개선하는 작업 중 게으른 로딩을 위한 완벽한 후보입니다.</p>
<p>우선적으로, 우리는 프로젝트 컴포넌트만 게으르게 로드하고, 위에서 정의한 메인 기본 포인트들을 충족시키는 것을 확실히 해야 합니다. 클래식 API를 사용하여, 여기에 템플릿이 초기에 어떻게 보일지를 보여드리겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>type DepsLoadingState <span class="token operator">=</span> <span class="token string">'NOT_STARTED'</span> <span class="token operator">|</span> <span class="token string">'IN_PROGRESS'</span> <span class="token operator">|</span> <span class="token string">'COMPLETE'</span> <span class="token operator">|</span> <span class="token string">'FAILED'</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div class="wrapper">
      &lt;app-details>&lt;/app-details>
    &lt;/div>

    &lt;div class="wrapper wrapper-xl">
      &lt;ng-template #contentSlot /> // 👈 여기에 게으르게로드된 내용을 삽입합니다

      &lt;ng-container *ngIf="depsState$ | async as state">
        &lt;ng-template *ngIf="state == 'IN_PROGRESS'" [ngTemplateOutlet]="loadingTpl">&lt;/ng-template>
        &lt;ng-template *ngIf="state == 'FAILED'" [ngTemplateOutlet]="errorTpl">&lt;/ng-template>
      &lt;/ng-container>

      &lt;ng-template #loadingTpl>
        &lt;app-projects-skeleton />
      &lt;/ng-template>

      &lt;ng-template #errorTpl>
        &lt;p>이런, 문제가 발생했습니다!&lt;/p>
      &lt;/ng-template>
    &lt;/div>
    ...
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 👈 import 할 필요가 없습니다</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span>
  depsState$ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BehaviorSubject</span><span class="token operator">&lt;</span>DepsLoadingState<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'NOT_STARTED'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>보시다시피, 컴포넌트들이 템플릿에서 제거되고, 컴포넌트 또는 NgModule의 메타데이터의 imports 배열에 import 되지 않았습니다. 그 후에는 게으르게 로드될 컨텐츠가 삽입될 템플릿에서(ng-template 사용) 컨테이너 또는 슬롯(템플릿 참조 #contentSlot)를 정의했습니다.</p>
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
<p>이외에도 로딩 및 에러 템플릿(다시 말해, ng-template을 사용하는 것)을 정의했습니다. 이는 depsState$ subject로 추적되는 로딩 종속성의 상태를 템플릿으로 반영하는 데 도움이 됩니다.</p>
<p>그런데 🤚... 처음에는 아무 일도 일어나지 않습니다. 즉, 코드가 로딩 프로세스를 트리거하는 일이 없습니다... 😕</p>
<p>첫 번째로, 뷰포트 내에 있을 때 로딩을 시작하는 지점을 충족시키기 위해 로딩 템플릿 종속성이 시작되는 트리거를 정의해야 합니다. 우리의 경우, 우리는 뷰포트 내에 있을 때 내용을 표시하고 싶지만 (트리거 동작), 초기 템플릿에는 내용이 표시되지 않습니다. 그래서, 그 동작을 트리거하는 것이 무엇인지 정의해야 합니다.</p>
<p>구조화 템플릿이 구해줍니다 💪</p>
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
<p>화면에 초기 내용이 표시되도록 하려면 원하는 콘텐츠 로딩을 트리거하는 임시 템플릿을 추가해보겠습니다. 이 임시 템플릿은 플레이스홀더 템플릿으로 알려져 있습니다👇:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
<span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  ...
  &lt;ng-container *ngIf="depsState$ | async as state">
        &lt;ng-template *ngIf="state == 'NOT_STARTED'" 
          [ngTemplateOutlet]="placeholderTpl">
        &lt;/ng-template>
        ...
  &lt;/ng-container>

  &lt;ng-template #placeholderTpl>
    &lt;p>여기에 프로젝트 목록이 렌더링 될 것입니다...&lt;/p> // 👈 트리거 엘리먼트
  &lt;/ng-template>
  ...
</span><span class="token template-punctuation string">`</span></span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>플레이스홀더 템플릿, 즉 트리거 엘리먼트는 템플릿 종속성인 우리의 경우 Project 컴포넌트의 로딩을 발생시킨 후에 제거될 것이기 때문에 ng-template으로 정의됩니다.</p>
<p>이제 트리거 엘리먼트가 준비되었으니, 트리거 엘리먼트(플레이스홀더)이 화면에 들어가면 로딩을 발생시키는 트리거 자체를 정의하는 것만 남았습니다.</p>
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
<p>이를 위해 IntersectionObserver Web API를 사용할 것입니다. 우리는 지시문 내에 로직을 캡슐화하고, 해당 요소(트리거 요소)가 뷰포트에 들어가면 이벤트를 발생시키고 이후에는 해당 트리거 요소를 추적/관찰하지 않도록 하는 지시문을 사용할 것입니다. 아래와 같이:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Directive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'[inViewport]'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">standalone</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">InViewportDirective</span> <span class="token keyword">implements</span> <span class="token class-name">AfterViewInit</span><span class="token punctuation">,</span> OnDestroy <span class="token punctuation">{</span>
    <span class="token keyword">private</span> elRef <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span>ElementRef<span class="token punctuation">)</span><span class="token punctuation">;</span>

    @<span class="token function">Output</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token literal-property property">inViewport</span><span class="token operator">:</span> EventEmitter<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> observer<span class="token operator">!</span><span class="token operator">:</span> IntersectionObserver<span class="token punctuation">;</span>

    <span class="token function">ngAfterViewInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> entry <span class="token operator">=</span> entries<span class="token punctuation">[</span>entries<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>inViewport<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>elRef<span class="token punctuation">.</span>nativeElement<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token function">ngOnDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>observer<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이벤트를 발생한 후에는 UserProfile 컴포넌트에서 로딩 프로세스를 다음과 같이 처리할 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    ...
    &lt;div class="wrapper wrapper-xl">
      ...
      &lt;ng-template #placeholderTpl>
        // 👇 트리거 요소에 지시문을 적용합니다
        &lt;p (inViewport)="onViewport()">
            프로젝트 목록이 여기에 렌더링됩니다...
        &lt;/p> 
      &lt;/ng-template>
      ...
    &lt;/div>
    ...
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>InViewportDirective<span class="token punctuation">]</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span>
  @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">'contentSlot'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">read</span><span class="token operator">:</span> ViewContainerRef <span class="token punctuation">}</span><span class="token punctuation">)</span> 
  contentSlot<span class="token operator">!</span><span class="token operator">:</span> ViewContainerRef<span class="token punctuation">;</span>

  depsState$ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BehaviorSubject</span><span class="token operator">&lt;</span>DepsLoadingState<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'NOT_STARTED'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">onViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'IN_PROGRESS'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> loadingDep <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./user/projects/projects.component"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    loadingDep<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
      <span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>contentSlot<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>ProjectsComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'COMPLETE'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">err</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'FAILED'</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>컴포넌트를 비동기적으로 로드하기 위해 JavaScript의 동적 임포트 기능을 사용하여 로딩 프로세스의 상태를 추적하여 템플릿에도 상태를 제대로 반영합니다. 로딩 로직이 컴포넌트 클래스에 있기 때문에 템플릿에서 컨테이너/슬롯을 쿼리한 다음 로드된 컴포넌트의 호스트를 컨테이너에 삽입하려면 로드된 후에 이 작업을 수행해야 합니다. 아래에서 확인할 수 있습니다 👇:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*G9jVSOmFpa_YKa9ani7ISg.gif" alt="로딩 과정"></p>
<p>그리고 ... 멋져요! 작동하는 솔루션이 생겼습니다. 하지만 신중히 살펴보면 프로젝트 컴포넌트가 로드되지만 플레이스홀더가 거의 보이지 않고 로딩 템플릿이 렌더링되지 않습니다. 이는 프로젝트가 렌더링되므로 종속성이 빠르게 로드되어 로드가 진행 중일 때 어떤 종류의 깜빡임이 발생할 수 있음을 의미합니다.</p>
<p>이로 인해 위에서 정의한 세 번째 주요 포인트로 이어지며, 플레이스홀더와 로딩 템플릿이 렌더링되는 시점을 조율하여 문제를 해결할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">timing</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token function">res</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> timing<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span>
  @<span class="token function">ViewChild</span><span class="token punctuation">(</span><span class="token string">'contentSlot'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">read</span><span class="token operator">:</span> ViewContainerRef <span class="token punctuation">}</span><span class="token punctuation">)</span> 
  contentSlot<span class="token operator">!</span><span class="token operator">:</span> ViewContainerRef<span class="token punctuation">;</span>

  depsState$ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BehaviorSubject</span><span class="token operator">&lt;</span>DepsLoadingState<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'NOT_STARTED'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">onViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// time after the loading template will be rendered</span>
    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'IN_PROGRESS'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> loadingDep <span class="token operator">=</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./user/projects/projects.component"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    loadingDep<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
      <span class="token parameter">c</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// minimum time to keep the loading template rendered</span>
        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span>contentSlot<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span>c<span class="token punctuation">.</span>ProjectsComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'COMPLETE'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token parameter">err</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'FAILED'</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 확실히 사용자들이 무슨 일이 일어나고 있는지 더 잘 시각적으로 파악하고 더 부드러운 경험을 제공합니다 🤗:</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*MgXWs93BmgRLgBiG73FzJQ.gif" />
<p>우리는 보여주려고 계획한 3가지 주요 포인트를 모두 충족했습니다. 복잡하지만 종종 필요한 것 중 하나는 사용자 스크롤이 플레이스홀더가 뷰포트에 들어가도록 하기 전에 로딩이 조금 일찍 시작되게 하는 것입니다. 이것은 트리거 요소가 플레이스홀더 템플릿과 다른 것이며, 템플릿의 다른 곳에 있는 다른 요소를 그 목적으로 사용해야 합니다. 아래 내용을 참고하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
     ...
    // 👇 템플릿 내 위에 있는 트리거 요소
    &lt;span (inViewport)="onViewport()">&lt;/span>

    &lt;div class="wrapper wrapper-xl">
      &lt;ng-template #contentSlot /> // 

      &lt;ng-container *ngIf="depsState$ | async as state">
        &lt;ng-template *ngIf="state == 'NOT_STARTED'" [ngTemplateOutlet]="placeholderTpl">&lt;/ng-template>
        &lt;ng-template *ngIf="state == 'IN_PROGRESS'" [ngTemplateOutlet]="loadingTpl">&lt;/ng-template>
        &lt;ng-template *ngIf="state == 'FAILED'" [ngTemplateOutlet]="errorTpl">&lt;/ng-template>
      &lt;/ng-container>

      &lt;ng-template #placeholderTpl>
        &lt;p>프로젝트 목록은 여기에 렌더링됩니다...&lt;/p>
      &lt;/ng-template>
      ...
    &lt;/div>
    ...
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>InViewportDirective<span class="token punctuation">]</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token function">onViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 위와 같은 구현</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 사용자가 스크롤하면 트리거 요소(span)가 뷰포트에 들어가면 종속성 로딩이 시작됩니다. 아래 참조:</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*bdcgo1ESr9ZLPjlfoOynrQ.gif" />
<p>페이지의 프로젝트 섹션으로 스크롤할 때 뷰에 로딩 메시지가 표시되므로 확인이 쉽습니다. 멋져요 😎.```</p>
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
<p>여러 구성 요소의 지연 로드</p>
<p>우리가 작성한 코드는 명령형이면서 간단하지만, 해야 할 마지막 일이 남았습니다: 하나 이상의 구성 요소를 지연로드하는 것입니다. 예를 들어, 이번에는 Achievements 구성 요소가 Projects 구성 요소와 함께 로드될 준비가 되어 있습니다.</p>
<p>이 경우에는 두 가지 방법을 따를 수 있습니다: 각각 따로 로드하거나 함께 로드합니다. 전자의 옵션을 선택하면, Products 구성 요소와 같이 작업해야 합니다. 간단하지만 작업량이 상당히 많습니다 😁.</p>
<p>후자의 옵션을 선택한다면, 변경 사항이 거의 없거나 전혀 필요하지 않습니다. 단지 로딩 및 플레이스홀더 템플릿을 조정하여 두 구성 요소의 로드를 반영하고, 구성 요소 클래스의 로딩 로직을 조정하여 두 종속성을 관리하면 됩니다. 여러 종속성을 동적으로 로드하는 데 Promise.AllSettled 정적 메서드를 사용하는 방법에 유의하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">loadDeps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span>
    <span class="token punctuation">[</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./user/projects/projects.component"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"./user/achievements/achievements.component"</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div class="wrapper wrapper-xl">
      &lt;ng-template #contentSlot />
      
      &lt;ng-template #placeholderTpl>
        &lt;p (inViewport)="onViewport()">
            Projects and Achievements will be rendered here...
        &lt;/p>
      &lt;/ng-template>

      &lt;ng-template #loadingTpl>
        &lt;h2>Projects&lt;/h2>
        &lt;app-projects-skeleton />

        &lt;h2>Achievements&lt;/h2>
        &lt;app-achievements-skeleton />
      &lt;/ng-template>
      ...
    &lt;/div>
  </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token keyword">async</span> <span class="token function">onViewport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'IN_PROGRESS'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>projectsLoadModule<span class="token punctuation">,</span> achievementsLoadModule<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadDeps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>projectsLoadModule<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token string">"rejected"</span> <span class="token operator">||</span> achievementsLoadModule<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token string">"rejected"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'FAILED'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">await</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>contentSlot<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span>projectsLoadModule<span class="token punctuation">.</span>value<span class="token punctuation">.</span>ProjectsComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>contentSlot<span class="token punctuation">.</span><span class="token function">createComponent</span><span class="token punctuation">(</span>achievementsLoadModule<span class="token punctuation">.</span>value<span class="token punctuation">.</span>AchievementsComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>depsState$<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token string">'COMPLETE'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드를 보면, 여전히 동일한 템플릿 컨테이너/슬롯을 사용하여 구성 요소를 보기에 삽입하는 중이므로 계속해서 아래와 같이 나타납니다👇:</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*u76EM6ox4vZMjEQqbrss5g.gif" />
<p>의존성의 오류 처리는 프로젝트별이며, 더 나은 방법으로 구현할 수 있습니다.</p>
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
<p>이 모든 것은 전통적인 방식이며 상당한 양의 작업이죠? 이제 현대적인 방식을 살펴봅시다.</p>
<h2 id="현대적인-템플릿-수준의-lazy-loading-deferable-views" tabindex="-1"><a class="header-anchor" href="#현대적인-템플릿-수준의-lazy-loading-deferable-views" aria-hidden="true">#</a> 현대적인 템플릿 수준의 Lazy Loading: Deferable Views</h2>
<p>이제 이 새로운, 현대적인 API가 어떻게 우리의 쇼케이스에 적합한지 살펴봅시다. 일관성을 위해 동일한 UserProfile 컴포넌트를 사용할 것이므로, 전통적인 API와 밀접하게 비교할 수 있습니다. 이 기사의 서론에서 언급했듯이, Angular 17은 Deferable Views를 도입하여 전통적인 API의 부담을 개발자에서 프레임워크로 옮겼습니다. 보다 구체적으로는 컴파일러에게 맡겼죠.</p>
<p>위에서 정의한 기본 포인트를 기억하면, 같은 결과를 얻기 위해 필요한 것은 다음과 같은 템플릿 코드입니다 👇:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span> ProjectsComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    &lt;div class="wrapper">
       &lt;app-details />
    &lt;/div>

    &lt;div class="wrapper wrapper-xl">
       @defer (on viewport) {
         &lt;app-projects />
       } @placeholder {
         &lt;p>여기에 프로젝트가 렌더링됩니다...&lt;/p>
       } @loading {
          &lt;app-projects-skeleton />
       } @error {
          &lt;p>이런, 뭔가 잘못되었습니다!&lt;/p>
       }
    &lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>템플릿 주도 방식을 알아차리셨나요? 상태 관리 및 비동기 로딩 작업에 대해 명령형적인 작업이 없으므로, 코드 없이 클래스 컴포넌트를 사용할 수 있습니다. 지연로드될 콘텐츠는 @defer 블록 내부에 명시되고 해당 트리거는 이후에 매개변수로 정의됩니다 (on viewport). 또한 placeholder, error 및 loading 템플릿을 명명에 따라 선언적으로 정의하여 템플릿에서 프로세스의 상태를 정확하게 반영할 수 있도록 합니다. placeholder 템플릿은 트리거 요소입니다:</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*gpOHZf1tYDlCcWGparlXuQ.gif" />
<p>하지만 이미 알아차린 작은 디테일이 있습니다: Project 컴포넌트가 템플릿에 이미 존재하기 때문에, 템플릿 종속성이 감지되고 접근 가능하도록 컴포넌트 메타데이터의 imports 배열에 import해야 합니다. 그러나 컴파일러는 이에 대해 알고 있기 때문에 모든 것이 원활하게 작동합니다.</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>
&lt;!-- ui-log 수평형 -->
&lt;ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true">&lt;/ins>
&lt;component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
&lt;/component>

동일한 이유로 발생하는 깜박임 문제를 발견할 수도 있습니다. 이전과 마찬가지로 이를 해결하려면 플레이스홀더나 로딩 템플릿이 표시되는 시간을 조정해야 합니다. 이를 위해 @loading 블록은 아래와 같이 두 가지 선택적 매개변수, minimum과 after을 받습니다:

```js
@Component({
  ...
  template: `
    ...
    &lt;div class="wrapper wrapper-xl">
       @loading (after 1s; minimum 3s) {
          &lt;app-projects-skeleton />
       }
    &lt;/div>
    ...
  `
})
export class UserProfileComponent {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@loading 블록에 제공된 매개변수는 뷰에 렌더링되는 시기와 기간을 제어합니다. 우리의 경우, 매개변수는 로딩 프로세스가 시작된 후 1초 후에 @loading 블록을 표시하고 적어도 3초 동안 보이도록 지정합니다:</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*WjE10Mks6yDOTH5nCPCyjA.gif" />
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
<p>트리거 자체도 템플릿 블록과 마찬가지로 매개변수를 받을 수 있습니다. 우리의 시나리오에서 viewport 트리거는 트리거 역할을 하는 DOM 요소로 선택적 매개변수를 허용합니다(플레이스홀더 템플릿을 대체). 이를 통해 사용자가 로드된 콘텐츠가 렌더링될 페이지 영역으로 스크롤하기 전에 종속 항목을 로드할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>ProjectsComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    ...
    &lt;span #triggerEl>&lt;/span>
    ...

    &lt;div class="wrapper wrapper-xl">
       @defer (on viewport(triggerEl)) {
         &lt;app-projects />
       } 
       ...
    &lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 사용자가 스크롤하여 트리거 요소(span)가 뷰포트에 도착하면 종속 항목이로드됩니다. 아래 GIF를 참조해주세요 👇:</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*6eX4kq45gUtXy64hhXFZYQ.gif" />
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
<p>이는 쉽게 확인할 수 있습니다. 페이지의 Projects 섹션으로 스크롤하면 로딩 템플릿이 표시됩니다. 멋지죠 😎.</p>
<p>여러 컴포넌트의 지연 로딩</p>
<p>지금까지 우리는 아직 이행할 마지막 부분이 있습니다: 하나 이상의 컴포넌트를 지연 로딩하는 것입니다. 예시로, Achievements 컴포넌트가 Projects 컴포넌트와 함께 로딩될 준비가 되어 있습니다.</p>
<p>클래식한 방식처럼, 따라야 할 두 가지 경로가 있습니다: 따로 로딩하거나 함께 로딩합니다. 새로운 API인 @defer 블록을 사용하면 두 옵션 모두 쉽게 구현할 수 있습니다 😎.</p>
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
<p>함께 로드하기 🚀</p>
<p>컴포넌트를 함께 로드하려면 Achievements 컴포넌트를 컴포넌트 메타데이터의 imports 배열에 가져와야하며, 그런 다음 아래와 같이 @defer 블록에 삽입해야합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span> ProjectsComponent<span class="token punctuation">,</span> AchievementsComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
     ...

    &lt;div class="wrapper wrapper-xl">
       @defer (on viewport) {
         &lt;app-projects />
         &lt;app-achievements />
       } @placeholder () {
         &lt;p>여기에 프로젝트와 성취가 렌더링됩니다...&lt;/p>
       } @loading (after 1s; minimum 3s) {
          &lt;h2>프로젝트&lt;/h2>
          &lt;app-projects-skeleton />

          &lt;h2>성취&lt;/h2>
          &lt;app-achievements-skeleton />
       } @error {
          &lt;p>이런, 뭔가 잘못 되었습니다!&lt;/p>
       }
    &lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, 로딩 및 플레이스홀더 템플릿은 이제 두 컴포넌트의 로딩을 반영하도록 조정되었습니다👇:</p>
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
<img src="https://miro.medium.com/v2/resize:fit:1400/1*m8kc_A4EEhmu1VO3myLugQ.gif" />
<p>개별로 로딩하기 🚀</p>
<p>컴포넌트들을 개별적으로 로딩하려면, 각각을 @defer 블록으로 묶어야 하고 관련된 다른 블록들을 정의해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span> ProjectsComponent<span class="token punctuation">,</span> AchievementsComponent<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
     ...

    &lt;div class="wrapper wrapper-xl">
       @defer (on viewport) {
          &lt;app-projects  />
       } @placeholder () {
          &lt;p>프로젝트가 여기에 렌더링될 것입니다...&lt;/p>
       } @loading (1초 후; 최소 3초) {
          &lt;h2>프로젝트&lt;/h2>
          &lt;app-projects-skeleton />
       } @error {
          &lt;p>이런, 뭔가 잘못되었습니다!&lt;/p>
       }

       @defer (on viewport) {
          &lt;app-achievements />
       } @placeholder () {
          &lt;p>성취들이 여기에 렌더링될 것입니다...&lt;/p>
       } @loading (1초 후; 최소 3초) {
          &lt;h2>성취들&lt;/h2>
          &lt;app-achievements-skeleton />
       } @error {
          &lt;p>이런, 뭔가 잘못되었습니다!&lt;/p>
       }
    &lt;/div>
  </span><span class="token template-punctuation string">`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">UserProfileComponent</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>클래식한 방식과 비교해 보면 코드 양이 훨씬 적습니다. 손 쉽게 필요한만큼 많은 @defer 블록을 추가할 수 있고, 여전히 완벽하게 작동한다는 것을 확신할 수 있습니다 🤗:</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*m3UVNvzzSPWfVfHcyML_PA.gif" alt="이미지"></p>
<p>이것이 모던한 방식에 대한 전부입니다. Deferrable View가 제공하는 많은 기능 중 일부만을 소개했습니다. Deferrable Views에 대해 더 자세히 알아보려면 다음 자료를 확인해보세요:</p>
<ul>
<li>Angular Deferrable Views 문서.</li>
<li>글과 비디오: Tomas Trajan, Matthieu Riegler, Fanis Prodromou</li>
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
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>레이지 로딩은 Angular과 같은 웹 프레임워크에서 채택된 성능 최적화 기술입니다. 라우트 수준의 레이지 로딩은 Angular 커뮤니티에서 매우 인기가 있지만 템플릿 수준의 레이지 로딩은 인기가 부족합니다. 기존 API가 매우 잘 작동한다는 사실이 시간에 증명되었음에도 불구하고, 작업의 양, 컴포넌트 클래스와 템플릿의 관련성, 그리고 명령 코드의 모든 것이 개발자 친화적이지 않습니다.</p>
<p>Angular 17에서는 @block 템플릿 구문을 통해, 미룰 수 있는 뷰가 제공됩니다. 이는 현재 시점에서 로드되지 않을 수도 있는 템플릿의 일부를 미리 정의해 두는 현대적이고 선언적인 템플릿 주도 API를 제공합니다. 이러한 API 중 어떤 설정이 원하는 사용 사례에 가장 적합한지 결정하기만 하면 됩니다.</p>
<p>최종 코드는 여기에서 찾아볼 수 있으며, 코드를 시도해 볼 수 있습니다: https://github.com/ilirbeqirii/lazy-load-component</p>
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
<p>읽어 주셔서 감사합니다!</p>
<p>질문이나 제안이 있으시면 아래에 댓글을 달아 주세요 👇.</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component></div></template>
