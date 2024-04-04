<template><div><p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_0.png" alt="Clean Architecture in Flutter"></p>
<p>클린 아키텍처는 로버트 C. 마틴에 의해 소개된 소프트웨어 디자인 패러다임으로, 코드베이스를 명확한 의존성과 책임을 갖는 구별된 레이어로 구성하여 유지보수 가능하고 확장 가능한 소프트웨어를 만들기 위해 노력합니다. 이 철학은 관심 분리(SoC), 의존성 역전 및 단일 책임 원칙을 바탕으로 합니다.</p>
<p>모바일 앱 개발의 동적 세계에서 강력하고 유지보수가 쉽며 확장 가능한 애플리케이션을 만드는 것은 지속적인 목표입니다. 사용자 친화적인 UI 툴킷과 반응형 프레임워크로 유명한 Flutter는 시각적으로 매력적인 크로스 플랫폼 앱을 구축하는 데 인기가 있습니다. Flutter 프로젝트가 더 복잡해지면 장기적인 성공과 관리 용이성을 위해 구조화된 아키텍처가 중요해집니다.</p>
<p>이 글에서는 플러터에서 클린 아키텍처에 대해 자세히 살펴보고, 그 원칙과 개발 프로세스에 미치는 영향을 살펴볼 것입니다. 핵심 엔티티부터 플러터 UI와 상호 작용하는 레이어까지, 클린 아키텍처가 유지보수성, 테스트 가능성 및 유연성을 촉진하는 방법을 알아볼 것입니다 — 모든 플러터 프로젝트의 성공에 있어 중요한 요소들이죠.</p>
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
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_1.png" alt="Clean Architecture in Flutter"></p>
<p>그래서 클린 아키텍처로 들어가는 여정에서 자리에 허리띠를 매고, 코드가 잘 조합된 심포니가 되어 각 구성 요소가 조화롭게 역할을 하는 곳인 플러터의 세계로 여행을 떠나봐요. 시간에 견딜 수 있는 앱을 만들어내며 🚀🔥</p>
<h1 id="mvvm이란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#mvvm이란-무엇인가요" aria-hidden="true">#</a> MVVM이란 무엇인가요?</h1>
<p>MVVM은 Model-View-ViewModel의 약자로, 소프트웨어 개발에서 흔히 사용되는 디자인 패턴으로, 특히 사용자 인터페이스(UI) 개발 분야에서 널리 사용됩니다. MVVM은 종종 데이터 바인딩을 지원하는 프레임워크와 관련이 있으며, UI의 변경 사항이 자동으로 기저 데이터를 업데이트하고 그 반대도 자동 업데이트하는 곳과 연관되어 있습니다.</p>
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
<p>플러터(Flutter)에서 MVVM은 네이티브 데이터 바인딩을 지원하는 다른 프레임워크들처럼 엄격하게 정의되지는 않습니다. 그러나 개발자들은 주로 MVVM 원칙을 채택하여 코드를 구조화하여 관심을 분리하고 표현 로직을 격리시키며 유지보수성을 촉진합니다.</p>
<p>다음은 플러터에서 MVVM 원칙을 구현하는 실용적인 가이드입니다:</p>
<h2 id="•-모델-model" tabindex="-1"><a class="header-anchor" href="#•-모델-model" aria-hidden="true">#</a> • 모델(Model)</h2>
<p>모델(Model)은 애플리케이션의 데이터와 비즈니스 로직을 나타냅니다. 데이터를 관리하고 응용 프로그램의 일관성과 무결성을 보장하는 역할을 합니다. MVVM의 맥락에서 모델(Model)은 사용자 인터페이스와 독립적이며 여러 프레젠테이션 계층에서 재사용할 수 있도록 설계됩니다.</p>
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
<p>플러터(Flutter)에서 모델은 일반적으로 애플리케이션의 데이터 및 비즈니스 로직을 나타내는 Dart 클래스나 객체로 구성됩니다. 이러한 클래스는 애플리케이션의 상태와 기능을 캡슐화하며, UI와 직접 상호 작용하지 않습니다.</p>
<p>예시</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  String name<span class="token punctuation">;</span>
  int age<span class="token punctuation">;</span>

  <span class="token function">User</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> required <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="•-뷰" tabindex="-1"><a class="header-anchor" href="#•-뷰" aria-hidden="true">#</a> • 뷰</h2>
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
<p>데이터를 사용자에게 제시하고 사용자 상호작용을 캡처하는 뷰가 있습니다. 사용자와 상호 작용하는 사용자 인터페이스입니다. MVVM에서 뷰는 매우 가벼워야하며 주로 정보를 표시하는 데 관심이 있습니다. 뷰모델의 변경 사항을 관찰하고 UI를 그에 맞게 업데이트합니다.</p>
<p>Flutter에서 뷰는 위젯으로 나타낼 수 있습니다. 위젯은 UI 요소를 렌더링하고 사용자 상호작용을 캡처하는 데 책임이 있습니다. UI 구성 요소에서 로직을 최소화하여 위젯을 가능한 &quot;덤&quot; 으로 유지하십시오.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">UserView</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">User</span> user<span class="token punctuation">;</span>

  <span class="token class-name">UserView</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ListTile</span><span class="token punctuation">(</span>
      title<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">,</span>
      subtitle<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Age: </span><span class="token interpolation"><span class="token punctuation">${</span><span class="token expression">user<span class="token punctuation">.</span>age</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="•-viewmodel" tabindex="-1"><a class="header-anchor" href="#•-viewmodel" aria-hidden="true">#</a> • ViewModel</h2>
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
<p>뷰모델은 모델과 뷰 사이의 중재자 역할을 합니다. 프레젠테이션 로직을 포함하며, 뷰가 바인딩할 수 있는 데이터와 명령을 노출합니다. 뷰모델은 UI와 독립적으로 테스트할 수 있도록 설계되어 있습니다. 또한 종종 뷰의 상태를 캡슐화하고 사용자 입력 및 상호작용을 처리합니다.</p>
<p>플러터에는 기본적인 뷰모델이 없지만, Dart 클래스를 생성하여 뷰모델 역할을 할 수 있습니다. 뷰모델은 프레젠테이션 로직을 포함하고 데이터 변환을 처리하며, UI가 데이터와 상호작용할 수 있는 깔끔한 API를 제공합니다.</p>
<p>예시</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'dart:async'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">UserViewModel</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> _userController <span class="token operator">=</span> <span class="token class-name">StreamController</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token keyword">get</span> userStream <span class="token operator">=</span><span class="token operator">></span> _userController<span class="token punctuation">.</span>stream<span class="token punctuation">;</span>

  <span class="token comment">// 비즈니스 로직과 데이터 변환</span>
  <span class="token keyword">void</span> <span class="token function">updateUserAge</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">,</span> int newAge<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> updatedUser <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> user<span class="token punctuation">.</span>name<span class="token punctuation">,</span> age<span class="token punctuation">:</span> newAge<span class="token punctuation">)</span><span class="token punctuation">;</span>
    _userController<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>updatedUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 메모리 누수를 피하기 위해 컨트롤러를 해제합니다.</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _userController<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="뷰와-뷰모델-연결하기" tabindex="-1"><a class="header-anchor" href="#뷰와-뷰모델-연결하기" aria-hidden="true">#</a> 뷰와 뷰모델 연결하기</h2>
<p>Flutter 애플리케이션에서는 Provider, Riverpod 또는 간단한 StatefulWidget과 같은 상태 관리 솔루션을 사용하여 뷰와 뷰모델을 연결할 수 있습니다. 이러한 솔루션은 상태를 관리하고 데이터가 변경될 때 UI에 알림을 제공하는 데 도움이 됩니다.</p>
<p>Provider를 사용한 예제:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">UserPage</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    final userViewModel <span class="token operator">=</span> Provider<span class="token punctuation">.</span>of<span class="token operator">&lt;</span>UserViewModel<span class="token operator">></span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> StreamBuilder<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">(</span>
      <span class="token literal-property property">stream</span><span class="token operator">:</span> userViewModel<span class="token punctuation">.</span>userStream<span class="token punctuation">,</span>
      <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> snapshot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>snapshot<span class="token punctuation">.</span>hasData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">UserView</span><span class="token punctuation">(</span>user<span class="token operator">:</span> snapshot<span class="token punctuation">.</span>data<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">CircularProgressIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="플러터에서-클린-아키텍처에-대한-깊은-설명" tabindex="-1"><a class="header-anchor" href="#플러터에서-클린-아키텍처에-대한-깊은-설명" aria-hidden="true">#</a> 플러터에서 클린 아키텍처에 대한 깊은 설명</h1>
<p>클린 아키텍처는 응용 프로그램의 다른 구성 요소를 모듈로 분리하여 각각에 명확한 목적을 부여하는 방식을 제공합니다. 클린 아키텍처의 주요 아이디어는 응용 프로그램을 프레젠테이션 레이어, 도메인 레이어 및 데이터 레이어로 세 가지 주요 레이어로 분리하는 것입니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_2.png" alt="Clean Architecture in Flutter"></p>
<p>MVVM의 View 레이어는 Flutter 클리어 아키텍처에서 프레젠테이션 레이어를 나타내며, ViewModel은 도메인 레이어를 나타내고, 모델 레이어는 데이터 레이어를 나타냅니다.</p>
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
<p>프로젝트 폴더 구조는 다음과 같이 될 것입니다:</p>
<p>features 폴더에는 인증, 프로필 등 앱의 모든 기능이 포함될 것이며, 애플리케이션의 각 기능은 이전 세 레이어(프레젠테이션, 도메인, 데이터)를 기반으로 구축됩니다. 예를 들어, 로그인 유스케이스 기능은 다음과 같은 폴더를 포함할 것입니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_3.png" alt="folder_structure"></p>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_4.png" alt="login_feature_folders"></p>
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
<p>핵심 폴더는 utils, routes, network, services, validators 및 styles와 같은 주요 구성 요소를 포함하는 기본 모듈입니다. 그 내용은 개발자가 코드 청결성을 향상시키고 빌드의 필요에 맞게 조정할 수 있도록 설계되었습니다. 이로써 코드를 간단하고 모듈화되며 유지 보수하기 쉬운 구조로 유지할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_5.png" alt="./img/CleanArchitectureinFlutterMVVMBloCDio_5.png"></p>
<p>Injection 파일에는 모든 주입 방법이 포함되어 있으며, main.dart에서 호출됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>final sl <span class="token operator">=</span> GetIt<span class="token punctuation">.</span>instance<span class="token punctuation">;</span>

Future<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token function">initInjections</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">initSharedPrefsInjections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">initAppInjections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">initDioInjections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">initArticlesInjections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>나중에 initArticlesInjections에 대해 알아볼 거야.</p>
<p>그리고 main.dart 파일에서 호출해:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 모든 종속성 주입</span>
<span class="token keyword">await</span> <span class="token function">initInjections</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">runApp</span><span class="token punctuation">(</span><span class="token function">DevicePreview</span><span class="token punctuation">(</span>
  <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로 shared 폴더는 우리 애플리케이션의 일반적인 기능을 위한 피처 폴더와 비슷하지만, 결제 기능, 공유 페이지, 공유 위젯 등이 들어 있어.</p>
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
<img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_6.png" />
<p>Clean Architecture layers로 시작해 보죠.</p>
<h1 id="_1-프레젠테이션-레이어" tabindex="-1"><a class="header-anchor" href="#_1-프레젠테이션-레이어" aria-hidden="true">#</a> 1- 프레젠테이션 레이어</h1>
<h2 id="책임" tabindex="-1"><a class="header-anchor" href="#책임" aria-hidden="true">#</a> 책임</h2>
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
<p>프레젠테이션 레이어는 가장 바깥쪽 레이어로 사용자에게 정보를 표시하고 사용자 상호작용을 캡처하는 역할을 담당합니다. UI(사용자 인터페이스)와 관련된 모든 구성 요소를 포함하며 위젯, 화면 및 프레젠터/컨트롤러(상태 관리)를 포함합니다.</p>
<h2 id="구성-요소" tabindex="-1"><a class="header-anchor" href="#구성-요소" aria-hidden="true">#</a> 구성 요소</h2>
<ul>
<li>화면(Screen): 기능 화면을 나타냅니다.</li>
<li>위젯 및 UI 구성 요소: 애플리케이션의 시각적 요소를 나타냅니다.</li>
<li>매니저/컨트롤러: UI 구성 요소와 상호작용하는 프레젠테이션 로직을 포함합니다. 사용자 입력을 받고, 도메인 레이어의 Use Case와 통신하며 UI를 업데이트합니다.</li>
</ul>
<h2 id="예시" tabindex="-1"><a class="header-anchor" href="#예시" aria-hidden="true">#</a> 예시</h2>
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
<img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_7.png" />
<h1 id="_2-domain-layer" tabindex="-1"><a class="header-anchor" href="#_2-domain-layer" aria-hidden="true">#</a> 2- Domain Layer</h1>
<h2 id="책임-1" tabindex="-1"><a class="header-anchor" href="#책임-1" aria-hidden="true">#</a> 책임</h2>
<p>도메인 레이어는 비즈니스 로직 또는 유즈 케이스 레이어로도 알려져 있으며, 응용프로그램의 핵심 비즈니스 규칙과 로직을 포함하고 있습니다. 이 레이어는 특정 프레임워크와 독립적인 필수 기능을 캡슐화하여 소프트웨어 시스템의 핵심을 대변합니다.</p>
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
<h2 id="구성-요소-1" tabindex="-1"><a class="header-anchor" href="#구성-요소-1" aria-hidden="true">#</a> 구성 요소</h2>
<ul>
<li>Entities: 기본 비즈니스 객체나 개념을 나타냅니다.</li>
<li>Use Cases: 응용 프로그램별 비즈니스 규칙을 포함하고 엔티티 간 데이터 흐름을 조정합니다. 특정 작업이나 작업을 실행하는 데 책임이 있습니다.</li>
<li>비즈니스 규칙 및 로직(저장소): 응용 프로그램 도메인에 중요한 핵심 기능입니다.</li>
</ul>
<h2 id="예시-1" tabindex="-1"><a class="header-anchor" href="#예시-1" aria-hidden="true">#</a> 예시</h2>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_8.png" alt="예시 이미지"></p>
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
<h1 id="_3-데이터-계층" tabindex="-1"><a class="header-anchor" href="#_3-데이터-계층" aria-hidden="true">#</a> 3- 데이터 계층</h1>
<h2 id="책임-2" tabindex="-1"><a class="header-anchor" href="#책임-2" aria-hidden="true">#</a> 책임</h2>
<p>데이터 계층은 데이터베이스, 네트워크 서비스 또는 저장소와 같은 외부 데이터 소스와 상호 작용하는 기능을 담당합니다. 데이터의 저장 및 검색을 처리합니다.</p>
<h2 id="구성요소" tabindex="-1"><a class="header-anchor" href="#구성요소" aria-hidden="true">#</a> 구성요소</h2>
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
<li>Repositories 또는 Gateways: 데이터에 액세스하고 저장하는 방식을 정의하는 추상 인터페이스입니다.</li>
<li>Data Models: 외부 데이터 원본에 저장된 데이터 구조를 나타냅니다.</li>
<li>Data Sources: 데이터베이스, API 또는 다른 외부 서비스와 상호 작용하는 저장소의 구현체입니다.</li>
</ul>
<p>시스템을 이 계층적인 방식으로 구성하는 주요 이점은 관심사의 분리, 모듈성 및 테스트 용이성을 촉진한다는 것입니다. 각 계층에는 명확한 책임이 있으며 한 계층에 대한 변경 사항은 다른 계층에 영향을 미치지 않아야 합니다. 이 구조적인 스타일은 시간이 지남에 따라 유연성과 적응성을 제공합니다.</p>
<h2 id="예시-2" tabindex="-1"><a class="header-anchor" href="#예시-2" aria-hidden="true">#</a> 예시</h2>
<img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_9.png" />
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
<h1 id="프로젝트-예시" tabindex="-1"><a class="header-anchor" href="#프로젝트-예시" aria-hidden="true">#</a> 프로젝트 예시</h1>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_10.png" alt="이미지"></p>
<p>저희는 뉴욕 타임스 뉴스 앱을 개발 중이에요. 뉴스 수집과 필터링이 가능해요. BloC를 상태 관리에 사용하고, Dio를 API 호출에 사용하며, json_serializable를 사용하여 json 응답을 모델로 파싱하여 반응성이 뛰어나고 원활한 사용자 경험을 제공하려고 해요.</p>
<p>먼저 <a href="https://developer.nytimes.com/get-started" target="_blank" rel="noopener noreferrer">계정 만들기<ExternalLinkIcon/></a>를 클릭해서 데브 포털로 이동하고, 앱을 생성하고 API 키를 가져오는 단계를 따라가세요.</p>
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
<ol>
<li>계정에 로그인하고 Apps를 클릭하세요</li>
</ol>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_11.png" alt="이미지"></p>
<ol start="2">
<li>페이지 오른쪽 상단의 New App을 클릭하세요</li>
</ol>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_12.png" alt="이미지"></p>
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
<ol start="3">
<li>앱 이름을 입력해주세요</li>
</ol>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_13.png" alt="이미지"></p>
<ol start="4">
<li>가장 인기 있는 API 옵션을 활성화해주세요</li>
</ol>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_14.png" alt="이미지"></p>
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
<p>API 키 생성 과정 중 문제가 발생하면 테스트 목적으로 이 키를 활용할 수 있습니다 'nF2WTVC6ES9SnxES3o0BzPnijV1RMDHl'. 그러나 보안을 확보하고 최상의 관행을 준수하기 위해 제품 또는 계속되는 개발을 위해 새 키를 생성하는 것이 좋습니다.</p>
<p>작업할 기본 API URL: http://api.nytimes.com/svc/mostpopular/v2/mostviewed/</p>
<p>기사 API: http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/period.json?api-key=nF2WTVC6ES9SnxES3o0BzPnijV1RMDHl</p>
<p>기간 값: 1, 7, 30.</p>
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
<p>예시: http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=nF2WTVC6ES9SnxES3o0BzPnijV1RMDHl</p>
<p>GitHub에서 전체 예시를 찾을 수 있습니다. 이 프로젝트에서는 다음을 사용했습니다:</p>
<ul>
<li><strong>get_it | Dart Package (pub.dev)</strong>: DI(의존성 주입)를 위한 패키지로, Flutter에서 서비스 로케이터 패턴을 제공합니다. 이 패키지는 의존성 관리에 간단하면서도 강력한 해결책을 제공합니다. 소프트웨어 개발에서 서비스 로케이터는 객체가 의존성 또는 서비스를 어떻게 구성했는지 알 필요 없이 의존성을 찾아서 얻을 수 있는 디자인 패턴입니다.</li>
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
<p>많은 기능을 가지고 있어요. 그 중에서도 registerSingleton이 가장 중요한 기능 중 하나에요. registerSingleton을 사용하면 특정 클래스의 인스턴스가 한 개만 생성되고 필요할 때 의존성을 지연로드할 수 있어요.</p>
<h2 id="json-serializable-dart-package-pub-dev" tabindex="-1"><a class="header-anchor" href="#json-serializable-dart-package-pub-dev" aria-hidden="true">#</a> json_serializable | Dart Package (pub.dev)</h2>
<p>fromJson 및 toJson 메서드를 생성할 수 있어요.</p>
<h2 id="flutter-bloc-flutter-package-pub-dev" tabindex="-1"><a class="header-anchor" href="#flutter-bloc-flutter-package-pub-dev" aria-hidden="true">#</a> flutter_bloc | Flutter Package (pub.dev)</h2>
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
<p>데이터 소스에서 오는 데이터를 관리하는 상태 관리와 처리</p>
<h2 id="dartz-dart-패키지-pub-dev" tabindex="-1"><a class="header-anchor" href="#dartz-dart-패키지-pub-dev" aria-hidden="true">#</a> dartz | Dart 패키지 (pub.dev)</h2>
<p>이는 clean architecture를 수행하고 오류를 따로 처리하고자 할 때 매우 적합한 Flutter 또는 Dart 패키지입니다.</p>
<p>Either 타입은 두 가지 서로 다른 유형의 값을 나타내기 위해 설계된 다목적 구조로, 특정 유형의 값을 성공을 나타내거나 다른 유형의 값으로 실패를 표시할 수 있습니다. 이 구조는 구조화되고 형식 안전한 방식으로 오류를 관리하는 데 유용하며, 주어진 맥락 내에서 성공적인 결과와 잠재적인 실패를 처리하는 명확하고 표현적인 방법을 제공합니다.</p>
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
<p>그럼 시작해볼까요? 새로운 Flutter 프로젝트를 만들고, pubspec.yaml 파일의 dependencies 및 dev_ependencies에 중요한 패키지를 추가해 보겠습니다:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter

  <span class="token comment"># Api에서 데이터 가져오기</span>
  <span class="token key atrule">dio</span><span class="token punctuation">:</span> ^5.4.0

  <span class="token comment"># BloC 상태 관리</span>
  <span class="token key atrule">flutter_bloc</span><span class="token punctuation">:</span> ^8.1.3

  <span class="token comment"># Json 어노테이션</span>
  <span class="token key atrule">json_annotation</span><span class="token punctuation">:</span> ^4.8.1

  <span class="token comment"># Dart에서 객체 비교 가능하게 하기</span>
  <span class="token key atrule">equatable</span><span class="token punctuation">:</span> ^2.0.5

  <span class="token comment"># 데이터 소스에서 성공/오류 상태 처리</span>
  <span class="token key atrule">dartz</span><span class="token punctuation">:</span> ^0.10.1

<span class="token key atrule">dev_dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter_test</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter
  <span class="token key atrule">build_runner</span><span class="token punctuation">:</span> ^2.4.7
  <span class="token key atrule">json_serializable</span><span class="token punctuation">:</span> ^6.7.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Domain 레이어부터 시작하겠습니다. 먼저, json api 응답을 모델로 구문 분석하기 위해 모델을 생성해야 합니다.</p>
<h2 id="모델-models" tabindex="-1"><a class="header-anchor" href="#모델-models" aria-hidden="true">#</a> 모델 (Models)</h2>
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
<p>도메인 레이어인 모델 작업을 시작합니다. Api에서 가져온 article Json에 대한 모델을 생성하겠습니다. 이것이 우리 Api의 응답입니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_15.png" alt="Api Response"></p>
<p>이제 상기 응답에 해당하는 모델을 만들어 나가겠습니다.</p>
<p>article_model.dart</p>
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
<p>표 태그를 Markdown 형식으로 변경해주세요.</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">part</span> <span class="token string-literal"><span class="token string">'media_meta_data_model.g.dart'</span></span><span class="token punctuation">;</span>

<span class="token metadata function">@JsonSerializable</span><span class="token punctuation">(</span>fieldRename<span class="token punctuation">:</span> <span class="token class-name">FieldRename</span><span class="token punctuation">.</span>snake<span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MediaMetaDataModel</span> <span class="token punctuation">{</span>
  <span class="token class-name">String</span><span class="token operator">?</span> url<span class="token punctuation">;</span>
  <span class="token class-name">String</span><span class="token operator">?</span> format<span class="token punctuation">;</span>
  int<span class="token operator">?</span> height<span class="token punctuation">;</span>
  int<span class="token operator">?</span> width<span class="token punctuation">;</span>

  <span class="token class-name">MediaMetaDataModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>url<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>format<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">factory</span> <span class="token class-name">MediaMetaDataModel</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      _$<span class="token class-name">MediaMetaDataModelFromJson</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> _$<span class="token class-name">MediaMetaDataModelToJson</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">MediaMetaDataModel</span><span class="token punctuation">></span></span> <span class="token function">fromJsonList</span><span class="token punctuation">(</span><span class="token class-name">List</span> json<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> json<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token class-name">MediaMetaDataModel</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 기사 API를 위한 필수 매개변수를 생성합니다:</p>
<p>articles_params.dart</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">ArticlesParams</span> <span class="token punctuation">{</span>
  <span class="token class-name">ArticlesParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>period<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  late <span class="token keyword">final</span> int period<span class="token punctuation">;</span>

  <span class="token class-name">ArticlesParams</span><span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span></span> json<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    period <span class="token operator">=</span> json<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'period'</span></span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span></span> <span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> _data <span class="token operator">=</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    _data<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">'period'</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> period<span class="token punctuation">;</span>
    <span class="token keyword">return</span> _data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>프로젝트의 모델 폴더 구조는 이렇게 될 거에요:</p>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_16.png" alt="이미지"></p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<p>이제 모델 파일을 만든 후에, 데이터 레이어인 데이터 소스로 넘어가서 API를 생성하겠습니다. 이 API는 기사 데이터를 가져오는 역할을 할 거에요.</p>
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
<p>먼저, 추상 클래스를 만들어 API에서 데이터를 가져오는 메서드를 정의할 것입니다.</p>
<p>absract_article_api.dart</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:articles_app/articles/data/models/article_model.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractArticleApi</span> <span class="token punctuation">{</span>
  <span class="token comment">// 모든 기사 가져오기</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">ArticleModel</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">getArticles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 추상 클래스를 구현하여 API에서 데이터를 검색하는 논리를 통합할 것입니다.</p>
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
<p>article_impl_api.dart</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">ArticlesImplApi</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractArticleApi</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Dio</span> dio<span class="token punctuation">;</span>


  <span class="token class-name">ArticlesImplApi</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dio<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Articles Method</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ApiResponse</span><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">ArticleModel</span><span class="token punctuation">></span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">getArticles</span><span class="token punctuation">(</span>
      <span class="token class-name">NyTimesArticlesParams</span> params<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> result <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> dio<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span>
        <span class="token function">getArticlePath</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>period<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>data <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token class-name">ServerException</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Unknown Error"</span></span><span class="token punctuation">,</span> result<span class="token punctuation">.</span>statusCode<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token class-name">ApiResponse</span><span class="token punctuation">.</span>fromJson<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">ArticleModel</span><span class="token punctuation">></span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
          result<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token class-name">ArticleModel</span><span class="token punctuation">.</span>fromJsonList<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">DioError</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token class-name">ServerException</span><span class="token punctuation">(</span><span class="token function">handleDioError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>response<span class="token operator">?</span><span class="token punctuation">.</span>statusCode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">on</span> <span class="token class-name">ServerException</span> <span class="token punctuation">{</span>
      <span class="token keyword">rethrow</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token class-name">ServerException</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 데이터 소스 폴더는 다음과 같을 것입니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_17.png" alt="이미지"></p>
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
<p>데이터 레이어에서 모델 및 데이터 소스를 만든 후에는 애플리케이션 도메인에 중요한 핵심 기능을 달성하기 위해 리포지토리 인터페이스와 그 구현을 만들어야 합니다.</p>
<p>리포지토리는 데이터 레이어와 연결을 설정하며 데이터를 검색하고 내부 로직을 처리하는 데이터 소스 함수를 통해 연결을 설정합니다. 이러한 이유로 리포지토리는 생성자에서 articlesApi 인스턴스를 사용하여 articles Api를 호출합니다.</p>
<h2 id="리포지토리" tabindex="-1"><a class="header-anchor" href="#리포지토리" aria-hidden="true">#</a> 리포지토리</h2>
<p>이제 도메인 레이어 - domain/repositories 폴더 안에 있는 dart 파일 abstract_articles_repository.dart를 만듭니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>abstract <span class="token keyword">class</span> <span class="token class-name">AbstractArticlesRepository</span> <span class="token punctuation">{</span>
  <span class="token comment">// 뉴욕 타임스 기사 가져오기</span>
  Future<span class="token operator">&lt;</span>Either<span class="token operator">&lt;</span>Failure<span class="token punctuation">,</span> List<span class="token operator">&lt;</span>ArticleModel<span class="token operator">>>></span> <span class="token function">getNyTimesArticles</span><span class="token punctuation">(</span>
      NyTimesArticlesParams params<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, 위에 언급된 추상 클래스를 구현하기 위해 데이터/리포지토리 디렉토리로 이동하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">ArticlesRepositoryImpl</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractArticlesRepository</span> <span class="token punctuation">{</span>
  final ArticlesImplApi articlesApi<span class="token punctuation">;</span>

  <span class="token function">ArticlesRepositoryImpl</span><span class="token punctuation">(</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>articlesApi<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 뉴욕 타임스 기사 가져오기</span>
  @override
  Future<span class="token operator">&lt;</span>Either<span class="token operator">&lt;</span>Failure<span class="token punctuation">,</span> List<span class="token operator">&lt;</span>ArticleModel<span class="token operator">>>></span> <span class="token function">getNyTimesArticles</span><span class="token punctuation">(</span>
      NyTimesArticlesParams params<span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      final result <span class="token operator">=</span> <span class="token keyword">await</span> articlesApi<span class="token punctuation">.</span><span class="token function">getArticles</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">Right</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>results <span class="token operator">??</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> on ServerException <span class="token function">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">Left</span><span class="token punctuation">(</span><span class="token function">ServerFailure</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">,</span> e<span class="token punctuation">.</span>statusCode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 데이터 레이어를 통해 API로부터 기사 데이터를 가져오기 위해 사용되는 articlesApi 변수를 소개합니다.</p>
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
<p>그러면 리포지토리 파일이 다음과 같이 구성될 것입니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_18.png" alt="Clean Architecture in Flutter MVVM BloC Dio"></p>
<h2 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases" aria-hidden="true">#</a> Use-Cases</h2>
<p>리포지토리 레이어를 성공적으로 구축한 후, 다음 단계는 유스케이스 파일을 생성하는 것입니다. 이러한 유스케이스는 애플리케이션별 비즈니스 로직을 캡슐화하고 조율하여, 프레젠테이션 레이어와 리포지토리 간을 연결하는 다리 역할을 수행합니다. 이를 통해 깔끔하고 모듈식 아키텍처를 유지할 수 있습니다.</p>
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
<p>각 사용 사례는 특정 작업이나 작업을 실행하도록 지시되어 있으며, 각 새 기능마다 코드를 중복해서 작성할 필요 없이 다양한 기능에 걸쳐 사용할 수 있는 재사용 가능한 솔루션을 제공합니다.</p>
<p>도메인/usecases 폴더에 articles_usecase.dart라는 Dart 파일을 만듭니다:</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">ArticlesUseCase</span> <span class="token keyword">extends</span> <span class="token class-name">UseCase</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">ArticleModel</span><span class="token punctuation">></span><span class="token punctuation">,</span> <span class="token class-name">ArticlesParams</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">AbstractArticlesRepository</span> repository<span class="token punctuation">;</span>

  <span class="token class-name">ArticlesUseCase</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>repository<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Either</span><span class="token punctuation">&lt;</span><span class="token class-name">Failure</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">ArticleModel</span><span class="token punctuation">></span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">call</span><span class="token punctuation">(</span>
      <span class="token class-name">ArticlesParams</span> params<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> result <span class="token operator">=</span> <span class="token keyword">await</span> repository<span class="token punctuation">.</span><span class="token function">getArticles</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token class-name">Left</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token class-name">Right</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>축하합니다! 이제 데이터 및 도메인 레이어를 생성하는 작업을 마쳤습니다. 🎉🎉</p>
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
<p>지금까지 중요한 모델을 파싱하고 json 응답을 사용하는 도메인 레이어를 만들었습니다. 추가로 데이터 레이어를 통해 얻은 데이터를 처리하는 repository를 구현했습니다.</p>
<p>이제 사용자 인터페이스를 구축하기 위해 프리젠테이션 레이어로 넘어갈 수 있습니다. 이를 통해 사용자는 컨트롤러나 매니저를 통해 데이터와 상호 작용할 수 있습니다.</p>
<h2 id="프리젠테이션" tabindex="-1"><a class="header-anchor" href="#프리젠테이션" aria-hidden="true">#</a> 프리젠테이션</h2>
<p>이 레이어에서는 사용 사례를 통해 기사 데이터를 호출하는 데 책임이 있는 페이지와 위젯을 만듭니다. 이 레이어는 응용 프로그램의 기본 로직과 상호 작용하는 사용 사례에 캡슐화된 사용자 인터페이스의 역할을 합니다.</p>
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
<p>기사 폴더 안에 article_injection.dart 파일을 생성합니다. 이 파일은 api, repository, usecases에 대한 모든 기능 의존성 주입을 포함하고 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/network/dio_network.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/utils/injections.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/features/articles/data/data_sources/remote/articles_impl_api.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'data/data_sources/local/articles_shared_prefs.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'data/repositories/articles_repo_impl.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'domain/usecases/articles_usecase.dart'</span><span class="token punctuation">;</span>

<span class="token function">initArticlesInjections</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  sl<span class="token punctuation">.</span><span class="token function">registerSingleton</span><span class="token punctuation">(</span><span class="token function">ArticlesImplApi</span><span class="token punctuation">(</span>DioNetwork<span class="token punctuation">.</span>appAPI<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sl<span class="token punctuation">.</span><span class="token function">registerSingleton</span><span class="token punctuation">(</span><span class="token function">ArticlesSharedPrefs</span><span class="token punctuation">(</span><span class="token function">sl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sl<span class="token punctuation">.</span><span class="token function">registerSingleton</span><span class="token punctuation">(</span><span class="token function">ArticlesUseCase</span><span class="token punctuation">(</span><span class="token function">sl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sl<span class="token punctuation">.</span><span class="token function">registerSingleton</span><span class="token punctuation">(</span><span class="token function">ArticlesRepositoryImpl</span><span class="token punctuation">(</span><span class="token function">sl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 위의 클래스를 호출하여 아무 클래스든 호출할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>getIt<span class="token punctuation">.</span><span class="token function">registerSingleton</span><span class="token punctuation">(</span><span class="token function">ArticlesUseCase</span><span class="token punctuation">(</span><span class="token function">sl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>이제 presentation/blok에서 ArticlesBloc이라는 블록을 만들어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>part <span class="token keyword">of</span> <span class="token string">'articles_bloc.dart'</span><span class="token punctuation">;</span>

abstract <span class="token keyword">class</span> <span class="token class-name">ArticlesEvent</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">ArticlesEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 기사 가져오기 이벤트</span>
<span class="token keyword">class</span> <span class="token class-name">OnGettingArticlesEvent</span> <span class="token keyword">extends</span> <span class="token class-name">ArticlesEvent</span> <span class="token punctuation">{</span>
  final int period<span class="token punctuation">;</span>
  final bool withLoading<span class="token punctuation">;</span>

  <span class="token function">OnGettingArticlesEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>period<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>withLoading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>articles_state.dart</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>part <span class="token keyword">of</span> <span class="token string">'articles_bloc.dart'</span><span class="token punctuation">;</span>

abstract <span class="token keyword">class</span> <span class="token class-name">ArticlesState</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">ArticlesState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">NyTimesInitial</span> <span class="token keyword">extends</span> <span class="token class-name">ArticlesState</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// --------------------기사 가져오기 상태 시작-------------------- //</span>

<span class="token comment">// 기사 가져오는 중 상태</span>
<span class="token keyword">class</span> <span class="token class-name">LoadingGetArticlesState</span> <span class="token keyword">extends</span> <span class="token class-name">ArticlesState</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 기사 가져오기 오류 상태</span>
<span class="token keyword">class</span> <span class="token class-name">ErrorGetArticlesState</span> <span class="token keyword">extends</span> <span class="token class-name">ArticlesState</span> <span class="token punctuation">{</span>
  final String errorMsg<span class="token punctuation">;</span>

  <span class="token function">ErrorGetArticlesState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>errorMsg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 기사 가져오기 성공 상태</span>
<span class="token keyword">class</span> <span class="token class-name">SuccessGetArticlesState</span> <span class="token keyword">extends</span> <span class="token class-name">ArticlesState</span> <span class="token punctuation">{</span>
  final List<span class="token operator">&lt;</span>ArticleModel<span class="token operator">></span> articles<span class="token punctuation">;</span>

  <span class="token function">SuccessGetArticlesState</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>articles<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// --------------------기사 가져오기 상태 끝-------------------- //</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>아티클 블록.dart</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:bloc/bloc.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/network/error/failures.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/util/constant/app_constants.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/features/articles/domain/models/article_model.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/features/articles/domain/models/articles_params.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/features/articles/domain/usecases/articles_usecase.dart'</span><span class="token punctuation">;</span>

part <span class="token string">'articles_event.dart'</span><span class="token punctuation">;</span>

part <span class="token string">'articles_state.dart'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ArticlesBloc</span> <span class="token keyword">extends</span> <span class="token class-name">Bloc</span><span class="token operator">&lt;</span>ArticlesEvent<span class="token punctuation">,</span> ArticlesState<span class="token operator">></span> <span class="token punctuation">{</span>
  final ArticlesUseCase articlesUseCase<span class="token punctuation">;</span>

  <span class="token comment">// Article 리스트</span>
  <span class="token function">ArticlesBloc</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>articlesUseCase<span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token function">LoadingGetArticlesState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    on<span class="token operator">&lt;</span>OnGettingArticlesEvent<span class="token operator">></span><span class="token punctuation">(</span>_onGettingArticlesEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 아티클 가져오기 이벤트</span>
  <span class="token function">_onGettingArticlesEvent</span><span class="token punctuation">(</span>
      OnGettingArticlesEvent event<span class="token punctuation">,</span> Emitter<span class="token operator">&lt;</span>ArticlesState<span class="token operator">></span> emitter<span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>withLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">emitter</span><span class="token punctuation">(</span><span class="token function">LoadingGetArticlesState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    final result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">articlesUseCase</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>
      <span class="token function">ArticlesParams</span><span class="token punctuation">(</span>
        <span class="token literal-property property">period</span><span class="token operator">:</span> event<span class="token punctuation">.</span>period<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    result<span class="token punctuation">.</span><span class="token function">fold</span><span class="token punctuation">(</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">emitter</span><span class="token punctuation">(</span><span class="token function">ErrorGetArticlesState</span><span class="token punctuation">(</span>l<span class="token punctuation">.</span>errorMessage<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">emitter</span><span class="token punctuation">(</span><span class="token function">SuccessGetArticlesState</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>와우! 사용자 작업을 캡쳐하는 블록을 설정했어요. 아티클 유스케이스를 호출하고, 이것은 데이터를 가져오기 위해 저장소 레이어와 통신합니다. 그 후 저장소 레이어는 데이터 소스를 통해 데이터 레이어와 연결하여 정보를 검색해옵니다.</p>
<p>그러면 bloc 폴더는 이렇게 될 거예요:</p>
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
<img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_19.png" />
<p>UI에 대해, 우리는 블록을 통해 기사 목록 페이지를 만들고 기사를 호출할 것입니다.</p>
<p>프레젠테이션/페이지에서 'ArticlesPage'라는 페이지를 만들어 사용자 인터페이스 구성 요소로 사용하겠습니다. 이 페이지는 기사 데이터를 표시하고 상호작용하는 데 책임이 있을 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:flutter/material.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:flutter_bloc/flutter_bloc.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/common_feature/presentation/pages/background_page.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/common_feature/presentation/widgets/app_loader.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/common_feature/presentation/widgets/reload_widget.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/translations/l10n.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/util/helper.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/core/util/injections.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/features/articles/domain/models/article_model.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/features/articles/domain/usecases/articles_usecase.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/features/articles/presentation/bloc/articles_bloc.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:ny_times_app/src/features/articles/presentation/widgets/article_card_widget.dart'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ArticlesPage</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">ArticlesPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>Key<span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token operator">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  State<span class="token operator">&lt;</span>ArticlesPage<span class="token operator">></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">_ArticlesPageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">_ArticlesPageState</span> <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token operator">&lt;</span>ArticlesPage<span class="token operator">></span> <span class="token punctuation">{</span>
  ArticlesBloc _bloc <span class="token operator">=</span> <span class="token function">ArticlesBloc</span><span class="token punctuation">(</span>articlesUseCase<span class="token operator">:</span> sl<span class="token operator">&lt;</span>ArticlesUseCase<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  List<span class="token operator">&lt;</span>ArticleModel<span class="token operator">></span> nyTimesArticles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// 기간</span>
  int selectedPeriod <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

  @override
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 뉴욕 타임즈 기사 가져오는 이벤트 호출</span>
    <span class="token function">callArticles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">BackgroundPage</span><span class="token punctuation">(</span>
      <span class="token literal-property property">withDrawer</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Column</span><span class="token punctuation">(</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token comment">// 여백</span>
          <span class="token function">SizedBox</span><span class="token punctuation">(</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> Helper<span class="token punctuation">.</span><span class="token function">getVerticalSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>

          <span class="token comment">// 기사 목록</span>
          <span class="token function">Expanded</span><span class="token punctuation">(</span>
            <span class="token literal-property property">child</span><span class="token operator">:</span> BlocConsumer<span class="token operator">&lt;</span>ArticlesBloc<span class="token punctuation">,</span> ArticlesState<span class="token operator">></span><span class="token punctuation">(</span>
              <span class="token literal-property property">bloc</span><span class="token operator">:</span> _bloc<span class="token punctuation">,</span>
              <span class="token literal-property property">listener</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>state is SuccessGetArticlesState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  nyTimesArticles<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  nyTimesArticles <span class="token operator">=</span> state<span class="token punctuation">.</span>articles<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>state is LoadingGetArticlesState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">AppLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>state is ErrorGetArticlesState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> ReloadWidget<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
                    <span class="token literal-property property">content</span><span class="token operator">:</span> state<span class="token punctuation">.</span>errorMsg<span class="token punctuation">,</span>
                    <span class="token literal-property property">onPressed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                      <span class="token function">callArticles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// 데이터가 없는지 확인</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>nyTimesArticles<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                  <span class="token keyword">return</span> ReloadWidget<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span>content<span class="token operator">:</span> <span class="token constant">S</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>no_data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">return</span> ListView<span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
                  <span class="token literal-property property">itemCount</span><span class="token operator">:</span> nyTimesArticles<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
                  <span class="token literal-property property">itemBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> <span class="token function">ArticleCardWidget</span><span class="token punctuation">(</span>
                      <span class="token literal-property property">nyTimesModel</span><span class="token operator">:</span> nyTimesArticles<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">,</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 기사 호출</span>
  <span class="token function">callArticles</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>bool withLoading <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _bloc<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>
      <span class="token function">OnGettingArticlesEvent</span><span class="token punctuation">(</span>
        selectedPeriod<span class="token punctuation">,</span>
        <span class="token literal-property property">withLoading</span><span class="token operator">:</span> withLoading<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>ArticleBloc 클래스는 ArticleUseCase 인스턴스를 가져오기 때문에 get_it 인젝터에서 싱글톤 ArticlesUseCase 클래스에 액세스할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ArticlesBloc _bloc <span class="token operator">=</span> <span class="token function">ArticlesBloc</span><span class="token punctuation">(</span>articlesUseCase<span class="token operator">:</span> sl<span class="token operator">&lt;</span>ArticlesUseCase<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이것을 의존성 주입이라고 합니다; 이는 각 레이어에 대한 단위 테스트를 수행하려고 할 때 모의 인스턴스를 제공하는 데 유용합니다. 이를 통해 효율적인 테스트를 보장하고 애플리케이션의 서로 다른 부분의 기능을 독립적으로 확인할 수 있습니다.</p>
<p>총결 구조는 다음과 같습니다:</p>
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
<img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_20.png" />
<h2 id="아래-그림에-이전-코드-흐름이-나와-있습니다" tabindex="-1"><a class="header-anchor" href="#아래-그림에-이전-코드-흐름이-나와-있습니다" aria-hidden="true">#</a> 아래 그림에 이전 코드 흐름이 나와 있습니다:</h2>
<img src="@source/docs/Tech/2024-03-28-CleanArchitectureinFlutterMVVMBloCDio/img/CleanArchitectureinFlutterMVVMBloCDio_21.png" />
<p>축하합니다! 클린 아키텍처를 사용하여 기사 앱을 만들었습니다 🚀</p>
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
<p>플러터의 Clean Architecture는 애플리케이션에 많은 이점을 제공할 수 있지만, 그 적합성은 애플리케이션의 크기와 복잡성을 포함한 다양한 요소에 따라 다릅니다. 아래는 몇 가지 고려해야 할 사항입니다:</p>
<p>학습 곡선: Clean Architecture는 추가적인 개념과 레이어를 소개하는데, 특히 아키텍처에 익숙하지 않은 개발자들에게는 더 가파른 학습 곡선으로 느껴질 수 있습니다.</p>
<p>복잡성 부담: 매우 간단한 앱의 경우, Clean Architecture에 의해 도입된 추가 레이어와 추상화가 불필요한 복잡성으로 인식될 수 있습니다.</p>
<p>개발 속도: 처음에는 개발자들이 Clean Architecture 구조에 적응하며 개발이 더 느릴 수 있습니다.</p>
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
<p>작고 간단한 Flutter 앱의 경우, 빠른 개발을 중시하는 MVC와 같은 간단한 아키텍처나 프레임워크도 고려해 볼 수 있습니다. 깔끔한 아키텍처는 대부분 더 크고 복잡한 애플리케이션에서 더 유익합니다.</p>
<p>요약하면, 깔끔한 아키텍처는 플러터 앱에 잘 맞을 수 있으며, 특히 앱이 성장을 예상하거나 유지 보수 및 테스트 용이성이 요구될 때 유용할 수 있습니다. 그러나 깔끔한 아키텍처의 장점을 프로젝트의 특정 요구사항과 제약사항과 균형을 맞추는 것이 중요합니다.</p>
<p>향후 글에서는 단위 테스트의 중요성에 대해 탐구하고, 그 구현이 유익한 시나리오를 식별하는 것에 대해 논의할 것입니다. 이 프로젝트에 단위 테스트를 통합하는 방법을 살펴보고, 견고하고 신뢰할 수 있는 코드베이스를 보장하겠습니다.</p>
<p>이제 기초가 마련되었으니, 보다 전문적인 구조로 깔끔하고 테스트할 수 있으며, 확장 가능한 프로젝트를 구축할 수 있습니다. 이 체계적인 아키텍처는 미래 개발의 용이성과 코드 유지 보수를 높일 것입니다 🎉😎</p>
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
<p>Github에서 전체 프로젝트 기능 및 코드를 확인할 수 있어요 — 소스 코드. 검색 기능, UI 사용자 정의, 단위 테스트와 같은 추가 코드가 포함되어 있어요.</p>
<p>이 기사를 읽어주셔서 감사합니다. 유용하게 사용하시길 바라요. 궁금한 점이 있으면 언제든지 저에게 연락해주세요.</p>
<p>질문이 있으면 LinkedIn 계정으로 연락해 주세요.</p>
</div></template>
