<template><div><p><img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_0.png" alt="이미지"></p>
<p>리버포드 좋아하세요?</p>
<p>최근에 시작한 새로운 플러터 프로젝트에서 상태 관리를 위해 리버포드 패키지를 사용해 왔어요. 이전에는 주로 Provider나 GetX와 같은 패키지를 사용했기 때문에 리버포드에 익숙하지 않았죠. 그런데 최근 플러터 사용자들이 왜 리버포드에 열광하는지 궁금했어요. 그래서 프로젝트에 대담하게 리버포드를 선택했어요.</p>
<p>하지만 그 후로, 나도 리버포드의 매력에 깊이 빠졌어요.</p>
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
<img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_1.png" />
<p>리버포드를 사용하여 프로젝트를 구현하는 동안, 패키지의 반응적 메커니즘과 다양한 기능들로 대체로 만족했어요. 그러나 하나의 측면에서는 만족스럽지 못한 경험이 있었습니다.</p>
<p>전역 변수로 선언된 제공자(provider)가 항상 나쁜 것을 의미하는 것은 아니에요. (게다가 제공자의 상태는 ProviderContainer 내에서 관리되므로 실제로 전역이라고 할 수 없어요)</p>
<img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_2.png" />
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
<p>리버포드 공식 문서에서 언급했듯이 전역으로 선언된 프로바이더들은 불변의 특성을 가지고 있어 앱 라이프사이클에 간섭하지 않거나 테스트 코드 작성 시 문제를 일으키지 않습니다. 그러나, 어디서든지 임포트만으로 프로바이더에 액세스할 수 있는 이점은 특정 페이지에서 어떤 프로바이더들이 사용되고 있는지 파악하기 어렵게 만듭니다.</p>
<h1 id="전역으로-선언된-리버포드로-인한-문제점" tabindex="-1"><a class="header-anchor" href="#전역으로-선언된-리버포드로-인한-문제점" aria-hidden="true">#</a> 전역으로 선언된 리버포드로 인한 문제점</h1>
<p>이러한 단점은 다양한 도전을 수반합니다.</p>
<p>예를 들어, 리버포드를 활용하는 플러터 프로젝트에 합류하게 되고, 상사가 다음과 같은 작업을 할당한다고 상상해 봅시다.</p>
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
<p>프로젝트에 막 참여하셨다니, 홈페이지에서 사용된 프로바이더 상태 값 및 이벤트 메서드를 파악하는 것이 조금 어려울 것 같네요. 그러면 테스트 코드를 이해하고 작성하는 데 더 많은 시간이 걸릴 수 있어요.</p>
<p>게다가, 여러 팀원이 참여하는 협업 프로젝트에서 특정 페이지에 사용된 프로바이더를 이해하는 것이 중요해요. 프로바이더 사용 범위를 명확히 이해하지 못하면 이미 생성된 프로바이더를 재사용할 수 있는 기회를 놓칠 수도 있고, 불필요한 추가 프로바이더를 소개하여 잠재적인 부작용을 불러올 수도 있어요.</p>
<p>이 문제들에 더해, 특히 더 크고 복잡한 앱에서 프로바이더 사용 범위를 이해하는 것이 어려워지면 프로젝트 유지 보수가 어려워질 수 있어요.</p>
<h1 id="rivepod-global-미신" tabindex="-1"><a class="header-anchor" href="#rivepod-global-미신" aria-hidden="true">#</a> Rivepod &quot;Global&quot; 미신</h1>
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
<p>상기 문제를 완화하기 위해서는 공급 업체 사용 범위를 구조화하는 것이 중요합니다. 다시 말해, 특정 섹션에서 어떤 공급 업체를 사용하는지 쉽게 구별할 수 있어야 합니다. 공급 업체 사용 범위를 어떻게 구조화해야 하는지 고민하던 중 Randal L. Schwartz의 <code v-pre>The Riverpod &quot;Global&quot; Myth</code>라는 YouTube 비디오를 발견했습니다.</p>
<p>이 비디오에서는 Riverpod이 전역 변수만 사용하는 것은 오해임을 해소하는 방법 뿐만 아니라 공급 업체 사용 범위를 구조화하는 다양한 방법이 자세히 설명되어 있습니다.</p>
<p>본 포스트에서는 비디오에서 설명된 두 가지 방법을 간단히 소개하겠습니다:</p>
<ul>
<li>로컬 변수 (밑줄로 시작)</li>
<li>클래스 정적 로컬 변수</li>
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
<img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_3.png" />
<p>더불어, provider 사용 범위를 구조화하는 측면에서, 이전에 Randal이 소개한 것과 다소 유사한 방법을 설명하겠습니다. 다만, Dart 3.0에서 소개된 mixin 클래스를 활용합니다. 이 기술은 provider 사용 범위에 대해 명확하고 테스트 가능한 구조를 제공합니다. 자유롭게 살펴보세요.</p>
<img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_4.png" />
<h1 id="로컬-변수" tabindex="-1"><a class="header-anchor" href="#로컬-변수" aria-hidden="true">#</a> 로컬 변수</h1>
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
<p>먼저 페이지 섹션 내에서 개별로 제공자를 선언하여 로컬라이징하는 방법을 살펴보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>final _uncompletedTodosCount <span class="token operator">=</span> Provider<span class="token operator">&lt;</span>int<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span>ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token keyword">return</span> ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>todoListProvider<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Toolbar</span> <span class="token keyword">extends</span> <span class="token class-name">HookConsumerWidget</span> <span class="token punctuation">{</span>  
  <span class="token keyword">const</span> <span class="token function">Toolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
    Key<span class="token operator">?</span> key<span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token operator">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  @override  
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context<span class="token punctuation">,</span> WidgetRef ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">return</span> <span class="token function">Material</span><span class="token punctuation">(</span>  
      <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Row</span><span class="token punctuation">(</span>  
        <span class="token literal-property property">mainAxisAlignment</span><span class="token operator">:</span> MainAxisAlignment<span class="token punctuation">.</span>spaceBetween<span class="token punctuation">,</span>  
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>  
          <span class="token function">Text</span><span class="token punctuation">(</span>  
            <span class="token string">'${ref.watch(_uncompletedTodosCount)}'</span><span class="token punctuation">,</span> <span class="token comment">// &lt;- 로컬로 제공자에 접근</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
         <span class="token operator">...</span>
         
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>특정 소스 파일 내에서 제공자의 액세스 범위를 비공개로 제한함으로써 해당 파일 내에서만 해당 제공자에 액세스할 수 있습니다. 이는 제공자의 사용 범위를 명시적으로 관리할 수 있도록 합니다.</p>
<p>하지만 이 제공자를 서로 다른 클래스로 분리된 여러 하위 위젯에서 액세스해야 할 경우 코드가 다소 복잡해질 수 있습니다.</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">final</span> _uncompletedTodosCount <span class="token operator">=</span> <span class="token class-name">Provider</span><span class="token generics"><span class="token punctuation">&lt;</span>int<span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  <span class="token keyword">return</span> ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>todoListProvider<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">(</span>todo<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">part</span> <span class="token string-literal"><span class="token string">'tool_bar3.dart'</span></span><span class="token punctuation">;</span> <span class="token comment">// &lt;- 파트 파일로 분리되었습니다</span>

<span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">HookConsumerWidget</span> <span class="token keyword">with</span> <span class="token class-name">HomeEvent</span><span class="token punctuation">,</span> <span class="token class-name">HomeState</span> <span class="token punctuation">{</span>  
  <span class="token keyword">const</span> <span class="token class-name">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token metadata function">@override</span>  
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">,</span> <span class="token class-name">WidgetRef</span> ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>  
      body<span class="token punctuation">:</span> <span class="token class-name">ListView</span><span class="token punctuation">(</span>  
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>  
          <span class="token class-name">Toolbar1</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>_uncompletedTodosCount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token class-name">Toolbar2</span><span class="token punctuation">(</span>ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>_uncompletedTodosCount<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token keyword">const</span> <span class="token function">_Toolbar3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
          
      <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예를 들어, HomePage에 Toolbar1, Toolbar2 및 Toolbar3와 같은 자식 위젯이 있다고 가정하고, 모두 _uncompletedTodosCount 프로바이더에 액세스해야 하는 경우에는 매번 로컬화된 프로바이더의 상태 값을 인수로 전달하거나 자식 위젯을 파트 파일로 분리하는 것이 불편할 수 있습니다.</p>
<h1 id="클래스-정적-로컬" tabindex="-1"><a class="header-anchor" href="#클래스-정적-로컬" aria-hidden="true">#</a> 클래스 정적 로컬</h1>
<p>이전에 언급한 문제를 해결하는 또 다른 방법은 클래스 내의 정적 변수에 프로바이더를 할당하는 것입니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>abstract <span class="token keyword">class</span> <span class="token class-name">HomeProviders</span> <span class="token punctuation">{</span>  
  HomeProviders<span class="token punctuation">.</span><span class="token function">_</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token keyword">static</span> final todoListFilter <span class="token operator">=</span> <span class="token function">StateProvider</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_</span><span class="token punctuation">)</span> <span class="token operator">=></span> TodoListFilter<span class="token punctuation">.</span>all<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token keyword">static</span> final uncompletedTodosCount <span class="token operator">=</span> Provider<span class="token operator">&lt;</span>int<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span>ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">return</span> ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>todoListProvider<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>todo<span class="token punctuation">.</span>completed<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드에서 홈 섹션에서 사용되는 모든 프로바이더들은 해당 클래스 내의 static 변수로 할당됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Toolbar</span> <span class="token keyword">extends</span> <span class="token class-name">ConsumwerWidget</span> <span class="token punctuation">{</span>  
  <span class="token keyword">const</span> <span class="token function">Toolbar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>  
    Key<span class="token operator">?</span> key<span class="token punctuation">,</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token operator">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  @override  
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context<span class="token punctuation">,</span> WidgetRef ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">return</span> <span class="token function">Material</span><span class="token punctuation">(</span>  
      <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Row</span><span class="token punctuation">(</span>  
        <span class="token literal-property property">mainAxisAlignment</span><span class="token operator">:</span> MainAxisAlignment<span class="token punctuation">.</span>spaceBetween<span class="token punctuation">,</span>  
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>  
          <span class="token function">Text</span><span class="token punctuation">(</span>  
            <span class="token string">'${ref.watch(HomeProviders.uncompletedTodosCount)}'</span><span class="token punctuation">,</span> 
            <span class="token comment">// static 변수를 통해 프로바이더에 액세스</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span> 
         <span class="token operator">...</span>
         
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로 위젯에서 필요한 프로바이더들을 이 클래스를 통해 참조할 수 있습니다. 프로바이더가 클래스 내의 static 변수로 할당되어 있기 때문에, 불필요한 인스턴스를 생성하지 않거나 프로바이더의 라이프사이클에 간섭하지 않고 프로바이더 사용의 범위를 구조화할 수 있습니다.```</p>
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
<h1 id="믹신-클래스를-사용하여-프로바이더-사용-범위-구조화하기" tabindex="-1"><a class="header-anchor" href="#믹신-클래스를-사용하여-프로바이더-사용-범위-구조화하기" aria-hidden="true">#</a> 믹신 클래스를 사용하여 프로바이더 사용 범위 구조화하기</h1>
<p>이미 소개된 두 가지 방법으로 프로바이더 사용 범위를 명시적으로 정의할 수 있지만, 믹신 클래스를 사용하여 좀 더 명시적이고 테스트하기 쉬운 방법을 살펴보겠습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_5.png" alt="이미지"></p>
<p>이 접근 방식은 두 가지 형식의 믹신 클래스를 활용합니다.</p>
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
<h1 id="상태-믹신-클래스" tabindex="-1"><a class="header-anchor" href="#상태-믹신-클래스" aria-hidden="true">#</a> 상태 믹신 클래스</h1>
<p>먼저, 상태 믹신 클래스에 대해 알아봅시다. 이 클래스는 특정 페이지에서 사용되는 모든 프로바이더의 상태 값을 반환하는 메서드들로 구성되어 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mixin <span class="token keyword">class</span> <span class="token class-name">HomeState</span> <span class="token punctuation">{</span>  
  int <span class="token function">uncompletedTodosCount</span><span class="token punctuation">(</span><span class="token parameter">WidgetRef ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>uncompletedTodosCountProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  List<span class="token operator">&lt;</span>Todo<span class="token operator">></span> <span class="token function">filteredTodos</span><span class="token punctuation">(</span><span class="token parameter">WidgetRef ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>filteredTodosProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 HomeState 믹신 클래스는 홈페이지 섹션에서 사용되는 프로바이더들의 상태 값을 관리합니다. 각 메서드는 WidgetRef를 인자로 받고, WidgetRef의 watch 확장 메서드를 사용하여 상태를 전달합니다.</p>
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
<p>WidgetRef ref를 전달받아 AsyncValue<code v-pre>&lt;Todo&gt;</code> todoAsync(WidgetRef ref) 함수를 실행합니다. 이는 값을 AsyncValue 타입으로 감싸는 방법입니다.</p>
<img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_6.png" />
<p>위와 같이 구성된 State Mixin Class는 위젯 클래스에 섞여지며, 이를 통해 위젯이 프로바이더의 상태 값을 액세스할 수 있습니다.</p>
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
<h1 id="이벤트-믹신-클래스" tabindex="-1"><a class="header-anchor" href="#이벤트-믹신-클래스" aria-hidden="true">#</a> 이벤트 믹신 클래스</h1>
<p>다음으로, 이벤트 믹신 클래스를 살펴봅시다. 이벤트 믹신 클래스는 특정 섹션에서 사용되는 모든 이벤트 로직을 효율적으로 관리합니다. State 믹신 클래스와 마찬가지로 WidgetRef를 인자로 받아서 제공자 메서드에 쉽게 액세스할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mixin <span class="token keyword">class</span> <span class="token class-name">HomeEvent</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">addTodo</span><span class="token punctuation">(</span>
    <span class="token parameter">WidgetRef ref<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    required TextEditingController textEditingController<span class="token punctuation">,</span>
    required String value<span class="token punctuation">,</span>
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ref<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>todoListProvider<span class="token punctuation">.</span>notifier<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    textEditingController<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">requestTextFieldsFocus</span><span class="token punctuation">(</span>
    <span class="token parameter"><span class="token punctuation">{</span>required FocusNode textFieldFocusNode<span class="token punctuation">,</span>
    required FocusNode itemFocusNode<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    itemFocusNode<span class="token punctuation">.</span><span class="token function">requestFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    textFieldFocusNode<span class="token punctuation">.</span><span class="token function">requestFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예를 들어, 위의 addTodo 메서드는 WidgetRef 객체를 통해 todoListProvider라는 이름의 Notifier 제공자에 액세스하여 현재 목록에 새 항목을 추가하는 메서드를 실행합니다.</p>
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
<p>위의 표를 아래와 같이 변경해주세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_7.png" alt="image"></p>
<p>마찬가지로, 위에서 보듯이 Event Mixin Class는 이벤트 메서드가 필요한 위젯에 혼합되어 이벤트 메서드를 전달하기 쉽게 만듭니다.</p>
<h1 id="핵심-개념" tabindex="-1"><a class="header-anchor" href="#핵심-개념" aria-hidden="true">#</a> 핵심 개념</h1>
<p>조금 복잡해 보일 수 있지만, 개념은 간단합니다.</p>
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
<img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_8.png" />
<p>위젯에서 프로바이더에 직접 액세스하지 않고 상태 및 이벤트 믹신 클래스를 통한 프로바이더에 액세스할 새로운 채널을 제공하는 것이 중요합니다.</p>
<h1 id="장점" tabindex="-1"><a class="header-anchor" href="#장점" aria-hidden="true">#</a> 장점</h1>
<p>지금, Riverpod 프로바이더 상태 값 및 이벤트 메서드를 믹신 클래스에서 관리하는 장점은 무엇인가요? 다섯 가지 주요 이점을 살펴보겠습니다.</p>
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
<h1 id="_1-쉬운-유지보수" tabindex="-1"><a class="header-anchor" href="#_1-쉬운-유지보수" aria-hidden="true">#</a> 1. 쉬운 유지보수</h1>
<p>특정 페이지 섹션에서 사용된 제공자들의 로직은 단일 Mixin Class에서 중앙으로 관리되어 유지보수가 용이합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mixin <span class="token keyword">class</span> <span class="token class-name">HomeState</span> <span class="token punctuation">{</span>  
  List<span class="token operator">&lt;</span>Todo<span class="token operator">></span> <span class="token function">todos</span><span class="token punctuation">(</span><span class="token parameter">WidgetRef ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>todoListFromRemoteProvider<span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예를 들어, 위의 코드에서는 todoListFromRemoteProvider 제공자를 통해 원격 데이터를 검색하고, 특정 페이지의 여러 위젯이 이 값을 참조하도록 설정될 수 있다고 가정해 봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mixin <span class="token keyword">class</span> <span class="token class-name">HomeState</span> <span class="token punctuation">{</span>
  List<span class="token operator">&lt;</span>Todo<span class="token operator">></span> <span class="token function">todos</span><span class="token punctuation">(</span><span class="token parameter">WidgetRef ref</span><span class="token punctuation">)</span> <span class="token operator">=></span> ref<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>todoListFromLocal<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 기존 프로바이더에서 원격 데이터 호출을 로컬 데이터 로딩으로 변경해야 한다면 HomeState 클래스에서 프로바이더를 todoListFromLocal로 교체하는 것으로 간단하게 변경할 수 있습니다.</p>
<p>하지만 Mixin State Class를 사용하지 않고 각 위젯이 직접 프로바이더를 사용하는 구조라면, 각 위젯의 기존 프로바이더를 새 프로바이더로 수동으로 변경해야 하는 불편함이 있을 수 있습니다.</p>
<h1 id="_2-가독성-향상" tabindex="-1"><a class="header-anchor" href="#_2-가독성-향상" aria-hidden="true">#</a> 2. 가독성 향상</h1>
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
<p>Mixin 클래스를 사용하여 제공자 리소스를 관리할 때 특정 페이지에서 사용되는 제공자 상태 값 및 이벤트 로직을 한눈에 쉽게 이해할 수 있습니다. 이는 Mixin 클래스가 부모 페이지 위젯이나 자식 위젯에 섞이며 명확한 종속성을 설정하기 때문입니다.</p>
<p>게다가 이벤트 믹스인 클래스에서 이벤트 로직을 관리함으로써 UI 코드와 이벤트 메서드를 완벽하게 분리하여 가독성을 향상시킬 수 있습니다.</p>
<h1 id="_3-단위-테스트-코드-작성의-장점" tabindex="-1"><a class="header-anchor" href="#_3-단위-테스트-코드-작성의-장점" aria-hidden="true">#</a> 3. 단위 테스트 코드 작성의 장점</h1>
<p>State 및 Event 믹스인 클래스를 사용하면 단위 테스트 코드 작성이 더 편리해집니다.</p>
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
<h2 id="테스트-범위-이해하기" tabindex="-1"><a class="header-anchor" href="#테스트-범위-이해하기" aria-hidden="true">#</a> 테스트 범위 이해하기</h2>
<p>테스트 범위를 설정하는 것은 어렵기도 하며, 특히 앱이 커질수록 단위 테스트 코드를 작성하기 전에 어디까지 테스트해야 하는지 항상 고민이 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mixin <span class="token keyword">class</span> <span class="token class-name">HomeEvent</span> <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token function">addTodo</span><span class="token punctuation">(</span>
    <span class="token parameter">WidgetRef ref<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    required TextEditingController textEditingController<span class="token punctuation">,</span>
    required String value<span class="token punctuation">,</span>
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  
  <span class="token keyword">void</span> <span class="token function">removeTodo</span><span class="token punctuation">(</span><span class="token parameter">WidgetRef ref<span class="token punctuation">,</span> <span class="token punctuation">{</span>required Todo selectedTodo<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  
  <span class="token keyword">void</span> <span class="token function">changeFilterCategory</span><span class="token punctuation">(</span><span class="token parameter">WidgetRef ref<span class="token punctuation">,</span> <span class="token punctuation">{</span>required TodoListFilter filter<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  
  <span class="token keyword">void</span> <span class="token function">toggleTodoState</span><span class="token punctuation">(</span><span class="token parameter">WidgetRef ref<span class="token punctuation">,</span> <span class="token punctuation">{</span>required String todoId<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  
  <span class="token keyword">void</span> <span class="token function">editTodoDesc</span><span class="token punctuation">(</span><span class="token parameter">WidgetRef ref<span class="token punctuation">,</span>
      <span class="token punctuation">{</span>required bool isFocused<span class="token punctuation">,</span>
      required TextEditingController textEditingController<span class="token punctuation">,</span>
      required Todo selectedTodo<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 특정 페이지에서 사용된 이벤트 로직을 Event Mixin Class에서 한눈에 이해할 수 있다면 테스트 범위를 설정하고 테스트 시나리오를 구성하는 데 매우 도움이 될 수 있습니다.</p>
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
<h2 id="간결한-단위-테스트-코드" tabindex="-1"><a class="header-anchor" href="#간결한-단위-테스트-코드" aria-hidden="true">#</a> 간결한 단위 테스트 코드</h2>
<p>기존 State 및 Event Mixin 모듈을 활용하면 단위 테스트 코드를 훨씬 간결하게 작성할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mixin <span class="token keyword">class</span> <span class="token class-name">HomeEventTest</span> <span class="token punctuation">{</span>  
  <span class="token keyword">void</span> <span class="token function">addTodo</span><span class="token punctuation">(</span>  
    <span class="token parameter">ProviderContainer container<span class="token punctuation">,</span> <span class="token punctuation">{</span>  
    required TextEditingController textEditingController<span class="token punctuation">,</span>  
    required String value<span class="token punctuation">,</span>  
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    container<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>todoListProvider<span class="token punctuation">.</span>notifier<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    textEditingController<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
  
  <span class="token keyword">void</span> <span class="token function">removeTodo</span><span class="token punctuation">(</span><span class="token parameter">ProviderContainer container<span class="token punctuation">,</span> <span class="token punctuation">{</span>required Todo selectedTodo<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    container<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>todoListProvider<span class="token punctuation">.</span>notifier<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>selectedTodo<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>

mixin <span class="token keyword">class</span> <span class="token class-name">HomeStateTest</span> <span class="token punctuation">{</span>  
  List<span class="token operator">&lt;</span>Todo<span class="token operator">></span> <span class="token function">filteredTodos</span><span class="token punctuation">(</span><span class="token parameter">ProviderContainer container</span><span class="token punctuation">)</span> <span class="token operator">=></span>  
      container<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>filteredTodosProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  int <span class="token function">uncompletedTodosCount</span><span class="token punctuation">(</span><span class="token parameter">ProviderContainer container</span><span class="token punctuation">)</span> <span class="token operator">=></span>  
      container<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>uncompletedTodosCountProvider<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>먼저 기존 State 및 Event Mixin 모듈의 코드를 복사하여 새로운 Test Mixin Class를 생성합니다. 이 경우에는 WidgetRef에서 ProviderContainer 타입으로 인자를 변경하고 기존의 .watch 메서드를 .read로 대체하여 테스트 코드를 실행합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  final homeEvent <span class="token operator">=</span> <span class="token function">HomeEventTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  final homeState <span class="token operator">=</span> <span class="token function">HomeStateTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'할 일 추가하기'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    final container <span class="token operator">=</span> <span class="token function">createContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token keyword">const</span> String todoDescription <span class="token operator">=</span> <span class="token string">'Riverpod 테스트 코드 작성'</span><span class="token punctuation">;</span>  
    homeEvent<span class="token punctuation">.</span><span class="token function">onTodoSubmitted</span><span class="token punctuation">(</span>container<span class="token punctuation">,</span>  
        <span class="token literal-property property">textEditingController</span><span class="token operator">:</span> <span class="token function">TextEditingController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> todoDescription<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token function">expect</span><span class="token punctuation">(</span>  
        homeState<span class="token punctuation">.</span><span class="token function">filteredTodos</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">.</span>last<span class="token punctuation">.</span>description<span class="token punctuation">,</span> todoDescription<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, 테스트 main 메서드 내에서 각 State 및 Event Mixin 클래스의 인스턴스를 초기화하고, 이러한 인스턴스를 사용하여 테스트 코드를 작성하세요.</p>
<p><img src="@source/docs/Tech/2024-03-28-OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass/img/OrganizeYourGlobalProvidersinFlutterRiverpodwithMixinClass_9.png" alt="이미지"></p>
<p>단계별로 설명:</p>
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
<li>초기화: 필요한 테스트 상태 및 이벤트 Mixin 인스턴스를 초기화합니다.</li>
<li>조작: 테스트 이벤트 Mixin을 사용하여 이벤트 로직을 실행하고 상태를 조작하고 변경합니다.</li>
<li>확인: 예상된 값 확인을 위해 테스트 상태 Mixin을 활용합니다.</li>
</ul>
<p>이벤트 Mixin 클래스에는 테스트할 이벤트 메서드가 포함되어 있고 상태 Mixin 클래스에는 예상된 테스트 결과 값이 정의되어 있어, 이를 활용하면 복잡한 시나리오를 포함한 유닛 테스트 코드 작성이 간편해집니다.</p>
<h1 id="_4-업무-효율성-향상" tabindex="-1"><a class="header-anchor" href="#_4-업무-효율성-향상" aria-hidden="true">#</a> 4. 업무 효율성 향상</h1>
<p>실제 프로젝트 진행 중, 개발자들은 종종 디자인이 완료되지 않은 상황에서 기능 명세 및 API 사양을 받을 수 있습니다. 이런 상황에서는 디자인이 완료될 때까지 기다리지 않고 미리 상태 및 이벤트 Mixin 클래스 모듈을 준비하는 작업을 수행할 수 있습니다. 미리 만들어진 Mixin 클래스를 활용하여 개발자들은 완료된 디자인을 받은 후에 UI 위젯을 구현하고 이미 생성된 Mixin 클래스를 통합함으로써 프로젝트를 원활하게 진행할 수 있습니다. 이를 통해 프로세스에서 발생하는 빈틈을 없애고 프로젝트를 순조롭게 진행할 수 있습니다.</p>
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
<h1 id="_5-협업-프로세스에서의-오류-최소화" tabindex="-1"><a class="header-anchor" href="#_5-협업-프로세스에서의-오류-최소화" aria-hidden="true">#</a> 5. 협업 프로세스에서의 오류 최소화</h1>
<p>이전에 언급했듯이, 특정 페이지에서 사용된 공급자를 이해하는 것은 특히 여러 팀 멤버가 참여하는 협업 프로젝트에서 중요해집니다. 이 측면을 무시하면 같은 기능을 가진 다른 이름의 공급자가 부주의하게 생성되어 예기치 않은 부작용이 발생할 수 있습니다(개인 경험에 기초함). 따라서 협업 프로젝트에서 여러 기여자가 참여할 때 이러한 실수를 최소화하는 것이 중요합니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 게시물에서는 Mixin 클래스를 사용하여 Riverpod에서 공급자 범위를 구조화하는 방법을 탐구했습니다. 이 접근 방식은 작은 애플리케이션에는 너무 무리한 것으로 볼 수 있지만, 앱이 확장되고 관리하는 공급자 수가 늘어날수록 더 유리해지는 것으로 입증되었습니다. 개인적으로는 이 접근 방식으로 유닛 테스트 코드를 작성하기가 특별히 매력적으로 느껴집니다.</p>
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
<p>또한, 이전 게시물인 &quot;플러터에서 UI 코드 정리하기&quot;에서 소개한 방법과 조합되었을 때, Mixin 클래스를 사용하여 공급 업체의 범위를 구조화하는 기술은 더욱 빛을 발합니다.</p>
<p>해당 게시물에서는 각 섹션별로 클래스 위젯으로 Flutter UI 코드를 구성하는 방법과 구조화된 UI 위젯에 믹신 클래스를 쉽게 적용할 수 있는 유연성에 대해 논의하였습니다. 이 두 가지 기법을 함께 사용하면 시너지 효과가 발생합니다.</p>
<p>이 게시물에서 소개한 Todo 앱 예제 프로젝트에 관심이 있는 분들은</p>
<p>내 GitHub 저장소를 참조하실 수 있습니다. Riverpod 공식 문서의 기존 예제 코드에 상태(State) 및 이벤트(Event) Mixin 클래스를 적용하는 로직 및 일부 간단한 테스트 코드를 추가했습니다.</p>
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
</div></template>
