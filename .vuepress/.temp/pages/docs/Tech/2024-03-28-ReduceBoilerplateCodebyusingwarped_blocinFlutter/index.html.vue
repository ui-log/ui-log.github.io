<template><div><img src="@source/docs/Tech/2024-03-28-ReduceBoilerplateCodebyusingwarped_blocinFlutter/img/ReduceBoilerplateCodebyusingwarped_blocinFlutter_0.png" />
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>[warped_bloc]은 저의 플러터(Flutter)에서 BLoC 패턴을 사용할 때 보일러플레이트 코드를 제거하기 위해 만든 패키지입니다. Felix Angelov가 만든 [flutter_bloc] 위에 구축되었습니다. [warped_bloc]은 특히 API 호출의 보일러플레이트 코드를 줄이기 위한 것입니다.</p>
<h1 id="아이디어" tabindex="-1"><a class="header-anchor" href="#아이디어" aria-hidden="true">#</a> 아이디어</h1>
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
<p>보일러플레이트 감소 아이디어는 BLoC와 같은 상태 관리 솔루션을 사용할 때 매번 API 호출을 처리할 때 세 가지 특정 상태가 연관되어 있다는 것입니다:</p>
<ul>
<li>로딩 상태 (요청 처리 중 일 때)</li>
<li>데이터 상태 (요청이 성공하고 일부 데이터를 반환할 때)</li>
<li>오류 상태 (오류가 발생한 경우)</li>
</ul>
<p>이러한 상태를 매번 작성하고, 이러한 상태를 if 문을 사용하거나 sealed 클래스를 사용할 때 .when()을 사용하여 처리하게 됩니다.</p>
<p>이는 모든 API 호출에 대해 일반화할 수 있어야 합니다.</p>
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
<p>그래서 [warped_bloc]이 탄생되었어요.</p>
<h1 id="사용-방법은" tabindex="-1"><a class="header-anchor" href="#사용-방법은" aria-hidden="true">#</a> 사용 방법은?</h1>
<p>[warped_bloc]은 미리 작성된 상태와 함께 제공됩니다:</p>
<ul>
<li>InitialState 클래스</li>
<li>LoadingState 클래스</li>
<li>ErrorState<code v-pre>T</code> 클래스</li>
<li>DataState<code v-pre>T</code> 클래스</li>
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
<p>아래는 BlocListener와 BlocBuilder를 사용하는 데 도움이 되는 유틸리티가 함께 제공됩니다:</p>
<ul>
<li>defaultBuilder 함수</li>
<li>defaultListener 함수</li>
</ul>
<p>확장할 수 있는 기본 클래스도 제공됩니다:</p>
<ul>
<li>AsyncCubit 클래스</li>
<li>PaginatedAsyncCubit 클래스</li>
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
<p>다음은 API 호출 시나리오에 대한 코드입니다 :</p>
<h2 id="get-request" tabindex="-1"><a class="header-anchor" href="#get-request" aria-hidden="true">#</a> Get Request</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'package:example/repo/home_repo.dart'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'package:warped_bloc/warped_bloc.dart'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HomeLoaded</span> <span class="token keyword">extends</span> <span class="token class-name">DataState</span><span class="token operator">&lt;</span>List<span class="token operator">&lt;</span>String<span class="token operator">>></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">HomeLoaded</span><span class="token punctuation">(</span>List<span class="token operator">&lt;</span>String<span class="token operator">></span> data<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token operator">:</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HomeCubit</span> <span class="token keyword">extends</span> <span class="token class-name">AsyncCubit</span> <span class="token punctuation">{</span>
  final HomeRepo repo<span class="token punctuation">;</span>

  <span class="token function">HomeCubit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>repo<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 이 함수는 로딩 및 오류 상태를 처리합니다.</span>
    <span class="token function">handleDefaultStates</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
      final data <span class="token operator">=</span> <span class="token keyword">await</span> repo<span class="token punctuation">.</span><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token function">HomeLoaded</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">HomeRepo</span> <span class="token punctuation">{</span>
  final Dio dio<span class="token punctuation">;</span>

  Future<span class="token operator">&lt;</span>List<span class="token operator">&lt;</span>String<span class="token operator">>></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    final res <span class="token operator">=</span> <span class="token keyword">await</span> dio<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> List<span class="token operator">&lt;</span>String<span class="token operator">></span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<p>이제 UI를 다음과 같이 간단하게 처리할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>BlocBuilder<span class="token operator">&lt;</span>HomeCubit<span class="token punctuation">,</span> BlocState<span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token literal-property property">bloc</span><span class="token operator">:</span> cubit<span class="token punctuation">,</span>
  
  <span class="token comment">// defaultBuilder()가 로딩 및 오류 상태를 처리합니다</span>
  <span class="token literal-property property">builder</span><span class="token operator">:</span> defaultBuilder<span class="token operator">&lt;</span>HomeLoaded<span class="token punctuation">,</span> <span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token literal-property property">onData</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      final data <span class="token operator">=</span> state<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token keyword">return</span> ListView<span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
        <span class="token literal-property property">itemCount</span><span class="token operator">:</span> data<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
        <span class="token literal-property property">itemBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>c<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">var</span> e <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token function">Text</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[warped_bloc] 패키지에서 제공하는 defaultBuilder를 사용했음을 알 수 있습니다. 이는 두 개의 제네릭 인자 defaultBuilder<code v-pre>T, E</code>를 사용합니다. T는 cubit에서 방출되는 데이터 상태의 유형을 나타내고, E는 ErrorState에서 데이터 변수의 유형입니다. E를 무시하고 항상 void를 데이터 유형으로 사용할 수 있습니다.</p>
<h2 id="포스트-요청" tabindex="-1"><a class="header-anchor" href="#포스트-요청" aria-hidden="true">#</a> 포스트 요청</h2>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:warped_bloc/warped_bloc.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">HomeActionSuccess</span> <span class="token keyword">extends</span> <span class="token class-name">DataState</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">void</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">HomeActionSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HomeActionCubit</span> <span class="token keyword">extends</span> <span class="token class-name">AsyncCubit</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">HomeRepo</span> repo<span class="token punctuation">;</span>

  <span class="token class-name">HomeActionCubit</span><span class="token punctuation">(</span><span class="token punctuation">{</span>required <span class="token keyword">this</span><span class="token punctuation">.</span>repo<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">updateProfile</span><span class="token punctuation">(</span><span class="token class-name">ProfileRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">handleDefaultStates</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> repo<span class="token punctuation">.</span><span class="token function">updateProfile</span><span class="token punctuation">(</span>profile<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token class-name">HomeActionSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">HomeRepo</span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token class-name">Dio</span> dio<span class="token punctuation">;</span>

  <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">updateProfile</span><span class="token punctuation">(</span><span class="token class-name">ProfileRequest</span> request<span class="token punctuation">)</span> <span class="token keyword">async</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> res <span class="token operator">=</span> <span class="token keyword">await</span> dio<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'/profile'</span></span><span class="token punctuation">,</span> data<span class="token punctuation">:</span> request<span class="token punctuation">.</span><span class="token function">toMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 UI를 다음과 같이 간단하게 처리할 수 있습니다:</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">final</span> actionCubit <span class="token operator">=</span> <span class="token class-name">HomeActionCubit</span><span class="token punctuation">(</span>repo<span class="token punctuation">:</span> <span class="token class-name">HomeRepo</span><span class="token punctuation">(</span>dio<span class="token punctuation">:</span> <span class="token class-name">Dio</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">BlocListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeActionCubit</span><span class="token punctuation">,</span> <span class="token class-name">BlocState</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>
  listener<span class="token punctuation">:</span> defaultListener<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeActionSuccess</span><span class="token punctuation">,</span> <span class="token keyword">void</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">FloatingActionButton</span><span class="token punctuation">(</span>
    onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// actionCubit.someAction();</span>
      actionCubit<span class="token punctuation">.</span><span class="token function">someFailedAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    child<span class="token punctuation">:</span> <span class="token keyword">const</span> <span class="token class-name">Icon</span><span class="token punctuation">(</span><span class="token class-name">Icons</span><span class="token punctuation">.</span>add<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">PaginationParam</span> <span class="token punctuation">{</span>
  final int page<span class="token punctuation">;</span>
  final int perPage<span class="token punctuation">;</span>

  <span class="token function">PaginationParam</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>page<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>perPage<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> dynamic<span class="token operator">></span> <span class="token function">toMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"page"</span><span class="token operator">:</span> page<span class="token punctuation">,</span>
      <span class="token string-property property">"per_page"</span><span class="token operator">:</span> perPage<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 UI에서 처리할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">...</span>
BlocBuilder<span class="token operator">&lt;</span>PaginatedHomeCubit<span class="token punctuation">,</span> BlocState<span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token literal-property property">builder</span><span class="token operator">:</span> defaultBuilder<span class="token operator">&lt;</span>PaginatedHomeLoaded<span class="token punctuation">,</span> <span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">(</span>
    <span class="token literal-property property">onData</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      final data <span class="token operator">=</span> state<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">PaginatedBuilder</span><span class="token punctuation">(</span>
        <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>c<span class="token punctuation">,</span> controller<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> ListView<span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
            <span class="token literal-property property">controller</span><span class="token operator">:</span> controller<span class="token punctuation">,</span>
            <span class="token literal-property property">itemCount</span><span class="token operator">:</span> data<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
            <span class="token literal-property property">itemBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>c<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">var</span> e <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span> <span class="token function">ListTile</span><span class="token punctuation">(</span>
                <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"${i + 1}$e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">onFetchMore</span><span class="token operator">:</span> context<span class="token punctuation">.</span>read<span class="token operator">&lt;</span>PaginatedHomeCubit<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onFetchMore<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 [warped_bloc] 패키지로 할 수있는 일 중 막연한 한 부분에 불과합니다.</p>
</div></template>
