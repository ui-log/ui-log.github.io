<template><div><p><img src="@source/docs/Tech/2024-03-28-Fluttergo_routerTheEssentialGuide/img/Fluttergo_routerTheEssentialGuide_0.png" alt="Fluttergo_routerTheEssentialGuide_0"></p>
<p>Go_router은 Flutter에서 라우팅을 위한 서드 파티 패키지로, 기본 제공되는 라우팅 옵션보다 더 유연하고 쉽게 사용할 수 있는 솔루션을 제공하고 있습니다. 앱에서 루트가 정의되고 관리되는 방식에 대해 더 많은 제어를 원한다면 유용할 수 있습니다. 웹에 대한 좋은 지원을 제공하기 때문에 애플리케이션에 좋은 선택입니다.</p>
<p>URL 패턴을 정의하고, URL을 사용하여 탐색하며, 딥 링크를 처리하고 다른 네비게이션 관련 시나리오도 처리할 수 있습니다.</p>
<h1 id="특징" tabindex="-1"><a class="header-anchor" href="#특징" aria-hidden="true">#</a> 특징</h1>
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
<p>GoRouter에는 네비게이션을 간단하게 만드는 여러 기능이 있습니다:</p>
<ul>
<li>템플릿 구문을 사용하여 경로와 쿼리 매개변수 구문 분석</li>
<li>목적지에 대해 여러 화면 표시(하위 라우트)</li>
<li>리디렉션 지원 - 애플리케이션 상태에 따라 사용자를 다른 URL로 리디렉션할 수 있습니다. 예를 들어 사용자가 인증되지 않은 경우 로그인 페이지로 리디렉션할 수 있습니다.</li>
<li>StatefulShellRoute를 사용한 중첩 탭 네비게이션 지원</li>
<li>Material 및 Cupertino 앱 모두 지원</li>
<li>NavigatorAPI와의 하위 호환성</li>
</ul>
<h1 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기" aria-hidden="true">#</a> 시작하기</h1>
<p>시작하려면 pubspec.yaml에 go_router를 추가하십시오. 이 문서에서는 ^7.1.1을 사용할 것입니다.</p>
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
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">go_router</span><span class="token punctuation">:</span> ^7.1.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="라우트-구성" tabindex="-1"><a class="header-anchor" href="#라우트-구성" aria-hidden="true">#</a> 라우트 구성</h1>
<p>이제 그렇게 한 다음에 GoRouter 설정을 앱에 추가해 봅시다:</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:go_router/go_router.dart'</span></span><span class="token punctuation">;</span>

<span class="token comment">// GoRouter 구성</span>
<span class="token keyword">final</span> _router <span class="token operator">=</span> <span class="token class-name">GoRouter</span><span class="token punctuation">(</span>
  initialLocation<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'/'</span></span><span class="token punctuation">,</span>
  routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'home'</span></span><span class="token punctuation">,</span> <span class="token comment">// 선택사항, 라우트에 이름을 추가합니다. 이름으로 경로 이동 가능</span>
      path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'/'</span></span><span class="token punctuation">,</span>
      builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">HomeScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">GoRoute</span><span class="token punctuation">(</span>
      name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'page2'</span></span><span class="token punctuation">,</span>
      path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'/page2'</span></span><span class="token punctuation">,</span>
      builder<span class="token punctuation">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">Page2Screen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그럼 MaterialApp.router 또는 CupertinoApp.router 생성자 중 하나를 사용하고 routerConfig 매개변수를 GoRouter 구성 객체로 설정할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> MaterialApp<span class="token punctuation">.</span><span class="token function">router</span><span class="token punctuation">(</span>
      <span class="token literal-property property">routerConfig</span><span class="token operator">:</span> _router<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 정도면 🙂 GoRouter를 사용할 준비가 끝났어요!!!</p>
<h2 id="매개변수" tabindex="-1"><a class="header-anchor" href="#매개변수" aria-hidden="true">#</a> 매개변수</h2>
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
<p>경로 매개변수를 지정하려면, 경로 세그먼트 앞에 : 문자를 붙이고, 고유한 이름(예: :userId)을 사용하세요. 빌더 콜백에 제공된 GoRouterState 객체를 통해 매개변수 값을 액세스합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoRoute</span><span class="token punctuation">(</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/fruits/:id'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     final id <span class="token operator">=</span> state<span class="token punctuation">.</span>params<span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">]</span> <span class="token comment">// URL에서 "id" 매개변수 가져오기</span>
     <span class="token keyword">return</span> <span class="token function">FruitsPage</span><span class="token punctuation">(</span>id<span class="token operator">:</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>GoRouterState를 사용하여 쿼리 문자열 매개변수에도 액세스할 수 있습니다. 예를 들어, /fruits?search=antonio와 같은 URL 경로는 search 매개변수를 읽을 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoRoute</span><span class="token punctuation">(</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/fruits'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    final search <span class="token operator">=</span> state<span class="token punctuation">.</span>queryParams<span class="token punctuation">[</span><span class="token string">'search'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">FruitsPage</span><span class="token punctuation">(</span>search<span class="token operator">:</span> search<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
<h2 id="자식-경로-추가하기" tabindex="-1"><a class="header-anchor" href="#자식-경로-추가하기" aria-hidden="true">#</a> 자식 경로 추가하기</h2>
<p>일치하는 경로는 Navigator에서 여러 화면이 표시되도록 할 수 있습니다. 이는 push()를 호출하는 것과 동일하며, 새 화면이 이전 화면 위에 표시되며 AppBar 위젯에 앱 내부 뒤로 가기 버튼이 제공됩니다.</p>
<p>이를 수행하기 위해 자식 경로와 해당 상위 경로를 추가합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoRoute</span><span class="token punctuation">(</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/fruits'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">FruitsPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token operator">&lt;</span>RouteBase<span class="token operator">></span><span class="token punctuation">[</span> <span class="token comment">// 자식 경로 추가</span>
    <span class="token function">GoRoute</span><span class="token punctuation">(</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'fruits-details'</span><span class="token punctuation">,</span> <span class="token comment">// 참고: 라우터의 상위에 "/" 문자를 명시할 필요가 없습니다.</span>
      <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">FruitDetailsPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="화면-간-이동" tabindex="-1"><a class="header-anchor" href="#화면-간-이동" aria-hidden="true">#</a> 화면 간 이동</h2>
<p>go_router를 사용하여 목적지 간에 이동하는 여러 가지 방법이 있습니다.</p>
<p>새 화면으로 전환하려면 URL을 지정하여 context.go()를 호출하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">TextButton</span><span class="token punctuation">(</span>
    <span class="token function-variable function">onPressed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> context<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span><span class="token string">'/fruits/fruit-detail'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>이름으로 URL 대신에 이동할 수도 있어요. <code v-pre>context.goNamed()</code>를 호출해 보세요.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token class-name">TextButton</span><span class="token punctuation">(</span>
    <span class="token comment">// 라우트에 "name"을 추가하는 것을 잊지 마세요</span>
    onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> context<span class="token punctuation">.</span><span class="token function">goNamed</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'fruit-detail'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>쿼리 매개변수를 포함한 URI를 만들려면 Uri 클래스를 사용할 수 있어요:</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code>context<span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span>
  <span class="token class-name">Uri</span><span class="token punctuation">(</span>
    path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'/fruit-detail'</span></span><span class="token punctuation">,</span>
    queryParameters<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string-literal"><span class="token string">'id'</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'10'</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>현재 화면을 context.pop()를 통해 닫을 수 있어요.</p>
<h1 id="중첩된-탭-내비게이션" tabindex="-1"><a class="header-anchor" href="#중첩된-탭-내비게이션" aria-hidden="true">#</a> 중첩된 탭 내비게이션</h1>
<p>일부 앱은 화면의 하위 섹션에 대상을 표시합니다. 예를 들어 화면 간에 이동할 때 화면 상에 남아있는 BottomNavigationBar와 같은 것들이 있어요.</p>
<p>StatefulShellRoute를 사용하여 중첩된 내비게이션을 설정해봅시다.</p>
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
<p>StatefulShellRoute 클래스는 루트 네비게이터와 다른 네비게이터에 하위 라우트를 배치합니다. 그러나 이 라우트 클래스는 각 중첩된 브랜치마다 별도의 네비게이터를 생성하여 병렬 네비게이션 트리(즉, 병렬 네비게이션 트리)를 만들면서 상태가 있는 중첩된 네비게이션을 구축할 수 있습니다.</p>
<p>예를 들어 BottomNavigationBar를 사용하여 UI를 구현할 때 각 탭마다 지속적인 네비게이션 상태를 사용해야 할 때 편리합니다.</p>
<p>StatefulShellRoute는 루트 네비게이터 및 가지의 전역 네비게이터 키(GlobalKey)와 선택적 초기 위치를 제공하는 각각 다른 상태가 있는 브랜치를 나타내는 StatefulShellBranch 항목의 목록을 지정하여 생성됩니다.</p>
<p>이를 어떻게 구현하는지 살펴보겠습니다 🙂</p>
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
<p>저희는 라우터를 생성하는 것으로 시작합니다. 라우트에 StatefulShellRoute.indexedStack()를 추가할 건데, 이 클래스는 중첩된 네비게이션을 만드는 역할을 담당합니다.</p>
<p>StatefulShellRoute.indexedStack()은 중첩된 네비게이터를 위해 IndexedStack을 사용하는 StatefulShellRoute를 구성합니다.</p>
<p>이 생성자는 분기 네비게이터를 나타내는 위젯을 관리하는 데 사용되는 컨테이너(navigatorContainerBuilder)에 대한 IndexedStack 기반 구현을 제공합니다.</p>
<p>라우트에 StatefulShellRoute.indexedStack()을 추가했는데, 이것은 분기를 생성하고 사용자 정의 쉘(이 경우 BottomNavigationBar)을 반환하는 역할을 합니다.</p>
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
<li>빌더에서: (컨텍스트, 상태, 네비게이션 셸)을 반환하여 사용자 정의 셸을 생성합니다. 기본적으로 하단 네비게이션 바가 있는 Scaffold를 반환합니다. 이 페이지에는 다른 분기로 이동하기 위해 해당 페이지로 이동할 수 있는 navigationShell을 전달하는 것을 기억해 주세요 (예: 홈 == 쇼핑).</li>
<li>분기:[]에서는 StatefulShellBranch(분기) 목록을 제공합니다. 이전에 생성한 _sectionNavigatorKey를 navigatorKey 속성에 전달하지만 첫 번째 분기에만 사용되며, 다른 분기에는 기본 키가 사용됩니다. 또한 해당 분기에 지원되는 경로인 RouteBase 목록을 제공합니다.</li>
</ul>
<p>빌더가 하단 네비게이션 바를 포함하는 사용자 정의 셸을 반환하는 것을 볼 수 있습니다. 따라서 다음을 만들어 봅시다 👇🏿</p>
<p>기본적으로 하단 네비게이션 바가 있는 Scaffold를 반환하며, 본문은 라우터에서 얻은 navigationShell이 될 것입니다.</p>
<p>_onTap(index)에는 navigationShell.goBranch(index)를 사용하여 분기 간에 전환할 수 있습니다.</p>
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
<p>그게 다야, 이제 당신의 프로젝트에 구현할 준비가 됐어요 🥳🎉</p>
<p>완벽한 예제는 아래 저장소를 확인해보세요 👇🏿</p>
<h1 id="가드" tabindex="-1"><a class="header-anchor" href="#가드" aria-hidden="true">#</a> 가드</h1>
<p>특정 경로를 보호하기 위해, 예를 들어 인증되지 않은 사용자로부터, 전역 리디렉션이 GoRouter를 통해 설정될 수 있습니다. 가장 일반적인 예제는 /login이 아닌 모든 경로를 보호하는 리디렉션 설정이며, 사용자가 인증되지 않은 경우 /login으로 리디렉트됩니다.</p>
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
<p>리다이렉트는 GoRouterRedirect 유형의 콜백입니다. 응용 프로그램 상태에 따라 들어오는 위치를 변경하려면 GoRouter 또는 GoRoute 생성자에 콜백을 추가하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoRouter</span><span class="token punctuation">(</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token punctuation">(</span>BuildContext context<span class="token punctuation">,</span> GoRouterState state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    final isAuthenticated <span class="token operator">=</span> <span class="token comment">// 사용자가 인증되어 있는지 확인하는 논리</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">'/login'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 리다이렉트 없이 의도된 경로를 표시하려면 "null"을 반환합니다.</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>GoRouter 생성자에서 리다이렉트를 정의할 수 있습니다. 모든 네비게이션 이벤트 전에 호출됩니다.</li>
<li>GoRoute 생성자에서 리다이렉트를 정의할 수 있습니다. 네비게이션 이벤트가 라우트를 표시하기 전에 호출됩니다.</li>
</ul>
<h1 id="전환-애니메이션" tabindex="-1"><a class="header-anchor" href="#전환-애니메이션" aria-hidden="true">#</a> 전환 애니메이션</h1>
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
<p>GoRouter는 각 GoRoute에 대한 전환 애니메이션을 사용자 정의할 수 있게 해줍니다. 사용자 정의 전환 애니메이션을 구성하려면 GoRoute 생성자에 pageBuilder 매개변수를 제공하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoRoute</span><span class="token punctuation">(</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/fruit-details'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pageBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">CustomTransitionPage</span><span class="token punctuation">(</span>
      <span class="token literal-property property">key</span><span class="token operator">:</span> state<span class="token punctuation">.</span>pageKey<span class="token punctuation">,</span>
      <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">FruitDetailsScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">transitionsBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> animation<span class="token punctuation">,</span> secondaryAnimation<span class="token punctuation">,</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 애니메이션 값에 따라 화면의 불투명도를 변경하여 사용자 정의 전환 효과 만들기</span>
        <span class="token keyword">return</span> <span class="token function">FadeTransition</span><span class="token punctuation">(</span>
          <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token function">CurveTween</span><span class="token punctuation">(</span>curve<span class="token operator">:</span> Curves<span class="token punctuation">.</span>easeInOutCirc<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span>animation<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> child<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>전체 예시는 transition animations 샘플을 참고하세요.</p>
<h1 id="에러-처리-404-페이지" tabindex="-1"><a class="header-anchor" href="#에러-처리-404-페이지" aria-hidden="true">#</a> 에러 처리 (404 페이지)</h1>
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
<p>go_router는 기본적으로 MaterialApp 및 CupertinoApp을 위한 기본 오류 화면과 사용되지 않은 경우의 기본 오류 화면이 함께 제공됩니다. 또한 errorBuilder 매개변수를 사용하여 기본 오류 화면을 대체할 수도 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoRouter</span><span class="token punctuation">(</span>
  <span class="token comment">/* ... */</span>
  <span class="token function-variable function">errorBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">ErrorPage</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="타입-안전한-라우트" tabindex="-1"><a class="header-anchor" href="#타입-안전한-라우트" aria-hidden="true">#</a> 타입 안전한 라우트</h1>
<p>URL 문자열(context.go(&quot;/auth&quot;)) 대신 go_router는 go_router_builder 패키지를 사용하여 타입 안전한 라우트를 지원합니다.</p>
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
<p>시작하려면 pubspec.yaml 파일의 dev_dependencies 섹션에 go_router_builder, build_runner, 그리고 build_verify를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">dev_dependencies</span><span class="token operator">:</span>
  <span class="token literal-property property">go_router_builder</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">1.0</span><span class="token number">.16</span>
  <span class="token literal-property property">build_runner</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">2.3</span><span class="token number">.3</span>
  <span class="token literal-property property">build_verify</span><span class="token operator">:</span> <span class="token operator">^</span><span class="token number">3.1</span><span class="token number">.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="라우트-정의하기" tabindex="-1"><a class="header-anchor" href="#라우트-정의하기" aria-hidden="true">#</a> 라우트 정의하기</h2>
<p>그런 다음, 각 라우트를 GoRouteData를 확장한 클래스로 정의하고 build 메서드를 오버라이드하세요.</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">HomeRoute</span> <span class="token keyword">extends</span> <span class="token class-name">GoRouteData</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">HomeRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">GoRouterState</span> state<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">const</span> <span class="token class-name">HomeScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="route-트리" tabindex="-1"><a class="header-anchor" href="#route-트리" aria-hidden="true">#</a> Route 트리</h2>
<p>Route 트리는 각 최상위 route에 속성으로 정의됩니다:</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:go_router/go_router.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">part</span> <span class="token string-literal"><span class="token string">'go_router.g.dart'</span></span><span class="token punctuation">;</span> <span class="token comment">// 생성된 파일의 이름</span>

<span class="token comment">// Route 트리(경로 및 하위 route)를 정의합니다</span>
<span class="token metadata function">@TypedGoRoute</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeScreenRoute</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
    path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'/home'</span></span><span class="token punctuation">,</span>
    routes<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token comment">// 하위 route를 추가하세요</span>
      <span class="token class-name">TypedGoRoute</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SongRoute</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
        path<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">'song/:id'</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

<span class="token comment">// "GoRouteData"를 확장하고 "build"를 @override하는 route 스크린을 생성하세요</span>
<span class="token metadata function">@immutable</span>
<span class="token keyword">class</span> <span class="token class-name">HomeScreenRoute</span> <span class="token keyword">extends</span> <span class="token class-name">GoRouteData</span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token class-name">HomeScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token metadata function">@immutable</span>
<span class="token keyword">class</span> <span class="token class-name">SongRoute</span> <span class="token keyword">extends</span> <span class="token class-name">GoRouteData</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> int id<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token class-name">SongRoute</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">SongScreen</span><span class="token punctuation">(</span>songId<span class="token punctuation">:</span> id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>생성된 파일을 빌드하려면 build_runner 명령어를 사용하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flutter pub global activate build_runner <span class="token comment">// 선택 사항, 이미 build_runner를 활성화한 경우 이 단계를 건너뛸 수 있습니다</span>
flutter pub run build_runner build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이동하려면 필요한 매개변수로 GoRouteData 객체를 만들고 go()를 호출하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">TextButton</span><span class="token punctuation">(</span>
  <span class="token literal-property property">onPressed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function">SongRoute</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">go</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">'노래 2로 이동'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
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
<h1 id="가기-전에" tabindex="-1"><a class="header-anchor" href="#가기-전에" aria-hidden="true">#</a> 가기 전에!!!</h1>
<p>go_router의 아직 멋진 기능이 있습니다. NavigatorObserver를 GoRouter에 추가하여 Navigator의 동작을 감시할 수 있습니다. 언제 어떤 경로가 푸시, 팝 또는 교체되었는지 듣기 위해 클래스를 확장하는 방법은 다음과 같습니다 :</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyNavigatorObserver</span> <span class="token keyword">extends</span> <span class="token class-name">NavigatorObserver</span> <span class="token punctuation">{</span>
  @override
  <span class="token keyword">void</span> <span class="token function">didPush</span><span class="token punctuation">(</span><span class="token parameter">Route<span class="token operator">&lt;</span>dynamic<span class="token operator">></span> route<span class="token punctuation">,</span> Route<span class="token operator">&lt;</span>dynamic<span class="token operator">></span><span class="token operator">?</span> previousRoute</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'did push route'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  <span class="token keyword">void</span> <span class="token function">didPop</span><span class="token punctuation">(</span><span class="token parameter">Route<span class="token operator">&lt;</span>dynamic<span class="token operator">></span> route<span class="token punctuation">,</span> Route<span class="token operator">&lt;</span>dynamic<span class="token operator">></span><span class="token operator">?</span> previousRoute</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'did pop route'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 MyNavigatorObserver를 GoRouter에 추가해 보겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GoRouter</span><span class="token punctuation">(</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">observers</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 네비게이터 옵저버를 추가하세요</span>
    <span class="token function">MyNavigatorObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token operator">...</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이러한 이벤트가 트리거될 때마다 네비게이터에 알림이 전송됩니다.</p>
</div></template>
