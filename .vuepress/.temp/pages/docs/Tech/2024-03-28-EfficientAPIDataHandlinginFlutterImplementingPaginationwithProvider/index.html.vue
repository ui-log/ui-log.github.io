<template><div><img src="@source/docs/Tech/2024-03-28-EfficientAPIDataHandlinginFlutterImplementingPaginationwithProvider/img/EfficientAPIDataHandlinginFlutterImplementingPaginationwithProvider_0.png" />
<p>소개</p>
<p>현대 앱 개발에서는 대량의 데이터 세트를 다룰 때 데이터 처리 효율이 매우 중요합니다. Flutter는 강력한 프레임워크를 통해 데이터를 효과적으로 처리할 수 있는 다양한 상태 관리 솔루션을 제공합니다. 그 중에서도 Provider는 간편성과 확장성으로 눈에 띕니다. 이 글에서는 Flutter에서 Provider를 사용하여 API 데이터를 효율적으로 처리하기 위해 페이지네이션을 구현하는 방법을 살펴보겠습니다.</p>
<p>페이지네이션 이해하기</p>
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
<p>페이지네이션은 대규모 데이터 집합을 작은 관리 가능한 청크로 분할하여 성능과 사용자 경험을 향상시키는 기술입니다. 한꺼번에 모든 데이터를 불러오는 대신, 페이지네이션은 일반적으로 스크롤링이나 버튼 클릭과 같은 사용자 상호작용에 응답하여 데이터를 점진적으로 가져옵니다.</p>
<p>프로젝트 설정하기</p>
<p>구현에 들어가기 전에, Flutter 프로젝트를 설정하고 필요한 종속성을 설치해 보겠습니다. 시스템에 Flutter SDK가 설치되어 있는지 확인해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>flutter create pagination<span class="token operator">-</span>simple<span class="token operator">-</span>provider
cd pagination<span class="token operator">-</span>simple<span class="token operator">-</span>provider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음으로, <code v-pre>pubspec.yaml</code> 파일에 필요한 종속성을 추가해주세요:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">flutter</span><span class="token punctuation">:</span>
    <span class="token key atrule">sdk</span><span class="token punctuation">:</span> flutter
  <span class="token key atrule">cupertino_icons</span><span class="token punctuation">:</span> ^1.0.6
  <span class="token key atrule">provider</span><span class="token punctuation">:</span> ^6.1.2
  <span class="token key atrule">http</span><span class="token punctuation">:</span> ^1.2.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>의존성을 설치하려면 <code v-pre>flutter pub get</code> 명령어를 실행해주세요.</p>
<p>Provider를 이용한 페이지네이션 구현</p>
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
<p>우리의 페이지네이션 구현을 위한 상태 관리 설정을 이해하는 것으로 시작해봅시다. home_state.dart 파일에서 HomeState 클래스를 정의합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">enum</span> HomeStatus <span class="token punctuation">{</span> initial<span class="token punctuation">,</span> success<span class="token punctuation">,</span> error <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">HomeState</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
  final HomeStatus status<span class="token punctuation">;</span>
  final List<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> contacts<span class="token punctuation">;</span>
  final bool hasReachedMax<span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function">HomeState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> HomeStatus<span class="token punctuation">.</span>initial<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>contacts <span class="token operator">=</span> <span class="token keyword">const</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>hasReachedMax <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  HomeState<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token function">copyWith</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    HomeStatus<span class="token operator">?</span> status<span class="token punctuation">,</span>
    List<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token operator">?</span> contacts<span class="token punctuation">,</span>
    bool<span class="token operator">?</span> hasReachedMax<span class="token punctuation">,</span>
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">HomeState</span><span class="token punctuation">(</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> status <span class="token operator">??</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status<span class="token punctuation">,</span>
      <span class="token literal-property property">contacts</span><span class="token operator">:</span> contacts <span class="token operator">??</span> <span class="token keyword">this</span><span class="token punctuation">.</span>contacts<span class="token punctuation">,</span>
      <span class="token literal-property property">hasReachedMax</span><span class="token operator">:</span> hasReachedMax <span class="token operator">??</span> <span class="token keyword">this</span><span class="token punctuation">.</span>hasReachedMax<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HomeState 클래스는 홈 화면의 상태를 캡슐화합니다. 다음 세 가지 주요 속성을 포함합니다:</p>
<ul>
<li>status: HomeStatus enum에 정의된 데이터 검색의 현재 상태를 나타냅니다.</li>
<li>contacts: 데이터 항목의 목록을 저장하며, 이 경우 연락처와 같은 연락처를 parameterized by type T로 제공하여 저장되는 데이터 유형에 대한 유연성을 제공합니다.</li>
<li>hasReachedMax: 데이터의 최대 제한이 도달되었는지를 나타냅니다.</li>
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
<p>생성자는 상태를 초기값으로 설정하며, status는 초기값으로 설정되어 있고, contacts는 빈 목록으로 설정되며, hasReachedMax는 기본적으로 false로 설정됩니다. copyWith 메서드는 속성을 선택적으로 업데이트하여 HomeState의 새 인스턴스를 만드는 데 사용됩니다.</p>
<p>플러터(Flutter)에서 HomePage 클래스는 응용 프로그램의 주 화면을 나타냅니다. 이 클래스는 UI 요소를 표시하고 사용자 상호작용을 처리하는 역할을 담당합니다.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">HomePage</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomePage</span><span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">_HomePageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _HomePageState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomePage</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> _scrollController <span class="token operator">=</span> <span class="token class-name">ScrollController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">initState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    _scrollController<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span>_onScroll<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _scrollController
      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span>_onScroll<span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">_onScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>_isBottom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      context<span class="token punctuation">.</span>read<span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HomeProvider</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContacts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  bool <span class="token keyword">get</span> _isBottom <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>_scrollController<span class="token punctuation">.</span>hasClients<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> maxScroll <span class="token operator">=</span> _scrollController<span class="token punctuation">.</span>position<span class="token punctuation">.</span>maxScrollExtent<span class="token punctuation">;</span>
    <span class="token keyword">final</span> currentScroll <span class="token operator">=</span> _scrollController<span class="token punctuation">.</span>offset<span class="token punctuation">;</span>
    <span class="token keyword">return</span> currentScroll <span class="token operator">>=</span> <span class="token punctuation">(</span>maxScroll <span class="token operator">*</span> <span class="token number">0.99</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// UI 구현</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HomePage 클래스는 StatefulWidget으로 정의되어 있으며, 홈 페이지의 상태를 관리하고 UI를 구성하는 로직을 포함하고 있습니다. 주요 요소에 대한 자세한 설명은 다음과 같습니다:</p>
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
<p>스크롤 컨트롤러:</p>
<ul>
<li>스크롤 동작을 관리하기 위해 ScrollController 인스턴스가 생성됩니다.</li>
<li>initState 메서드에서 스크롤 컨트롤러를 초기화하고 스크롤 이벤트를 수신 대기하도록 설정합니다.</li>
<li>dispose 메서드에서 위젯 트리에서 해당 위젯이 제거될 때 리소스를 해제하기 위해 스크롤 컨트롤러가 해제됩니다.</li>
</ul>
<p>스크롤 이벤트 처리:</p>
<ul>
<li>사용자가 페이지를 스크롤할 때 _onScroll 메서드가 호출됩니다.</li>
<li>사용자가 페이지의 맨 아래로 스크롤했을 경우 (_isBottom), HomeManager의 getContacts 메서드가 호출되어 추가 데이터를 가져옵니다.</li>
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
<p>도움말 메소드:</p>
<ul>
<li>_isBottom은 사용자가 페이지 하단으로 스크롤했는지를 확인하는 도우미 메소드입니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
      <span class="token comment">// 앱바 구현</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> Consumer<span class="token operator">&lt;</span>HomeProvider<span class="token operator">></span><span class="token punctuation">(</span>
        <span class="token literal-property property">builder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> state<span class="token punctuation">,</span> child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>status <span class="token operator">==</span> HomeStatus<span class="token punctuation">.</span>initial<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">Center</span><span class="token punctuation">(</span>child<span class="token operator">:</span> <span class="token function">CircularProgressIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>status <span class="token operator">==</span> HomeStatus<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">Center</span><span class="token punctuation">(</span>child<span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"게시물을 가져오는 데 실패했습니다"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>status <span class="token operator">==</span> HomeStatus<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span>isEmpty<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">Center</span><span class="token punctuation">(</span>child<span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"게시물이 없습니다"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> ListView<span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
              <span class="token literal-property property">controller</span><span class="token operator">:</span> _scrollController<span class="token punctuation">,</span>
              <span class="token literal-property property">itemCount</span><span class="token operator">:</span> state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>hasReachedMax
                  <span class="token operator">?</span> state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span>length
                  <span class="token operator">:</span> state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
              <span class="token literal-property property">itemBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> index <span class="token operator">>=</span> state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span>length
                    <span class="token operator">?</span> <span class="token keyword">const</span> <span class="token function">Center</span><span class="token punctuation">(</span>
                        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">CircularProgressIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span>
                    <span class="token operator">:</span> <span class="token function">Card</span><span class="token punctuation">(</span>
                        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">ListTile</span><span class="token punctuation">(</span>
                          <span class="token literal-property property">leading</span><span class="token operator">:</span> <span class="token function">CircleAvatar</span><span class="token punctuation">(</span>
                            <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span>
                                state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>contacts<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>homeState<span class="token punctuation">.</span>contacts<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token keyword">return</span> <span class="token keyword">const</span> <span class="token function">Center</span><span class="token punctuation">(</span>child<span class="token operator">:</span> <span class="token function">CircularProgressIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>구체적으로는 provider 패키지에서 Consumer 위젯을 활용하여 HomeProvider 상태의 변화를 감지하고 UI를 다시 구축합니다.</p>
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
<p>이니셜 상태</p>
<ul>
<li>HomeProvider 내의 HomeState 상태가 초기 상태인지 확인합니다.</li>
<li>상태가 초기 상태인 경우, 데이터를 가져오는 중임을 나타내는 화면 중앙에 배치된 CircularProgressIndicator 위젯을 반환합니다.</li>
</ul>
<p>에러 상태</p>
<ul>
<li>HomeState의 상태가 오류 상태인지 확인합니다.</li>
<li>상태가 오류 상태인 경우, 데이터를 가져오는 동안 오류가 발생했음을 나타내는 &quot;게시물을 가져오는 데 실패했습니다&quot; 메시지가 화면 중앙에 있는 Text 위젯으로 반환됩니다.</li>
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
<p>성공 상태</p>
<ul>
<li>상태가 성공이고 표시할 게시물이 있는 경우, ListView.builder 위젯을 반환합니다.</li>
<li>ListView.builder는 연락처 리스트의 길이에 기반하여 위젯 목록을 동적으로 생성합니다.</li>
<li>사용자가 목록 끝까지 스크롤하면(인덱스<code v-pre>= state.homeState.contacts.length</code>), 데이터가 더 가져와지고 있다는 의미로 중앙에 CircularProgressIndicator 위젯이 표시됩니다.</li>
<li>그 외의 경우, 각 게시물에 대해 Card 위젯을 구성하며, 게시물의 ID와 제목을 각각 CircleAvatar와 Text 위젯을 사용하여 표시합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">HomeProvider</span> <span class="token keyword">with</span> ChangeNotifier <span class="token punctuation">{</span>
  final _postLimit <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> homeState <span class="token operator">=</span> <span class="token keyword">const</span> HomeState<span class="token operator">&lt;</span>Post<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  Future<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token function">getContacts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    <span class="token comment">// 연락처 목록을 가져오는 구현</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// api 데이터 가져오기</span>
  Future<span class="token operator">&lt;</span>List<span class="token operator">&lt;</span>Post<span class="token operator">>></span> <span class="token function">_fetchPosts</span><span class="token punctuation">(</span><span class="token punctuation">[</span>int startIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
    <span class="token comment">// http 클라이언트를 사용하여 api 데이터를 가져오는 구현</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>HomeProvider 클래스는 ChangeNotifier로 정의되어 있어 상태가 변경될 때 청취자(일반적으로 UI 구성 요소)에게 알릴 수 있습니다.</li>
<li>가져올 게시물의 최대 수를 나타내는 _postLimit 상수가 있습니다.</li>
<li>homeState 변수는 홈 화면의 현재 상태를 유지합니다. 초기에는 비어 있는 상태(HomeStatus.initial)로 설정되어 있으며, 연락처가 없고 최대 제한에 도달하지 않습니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Future<span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token function">getContacts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>homeState<span class="token punctuation">.</span>status <span class="token operator">==</span> HomeStatus<span class="token punctuation">.</span>initial<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      final posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">_fetchPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      homeState <span class="token operator">=</span> homeState<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> HomeStatus<span class="token punctuation">.</span>success<span class="token punctuation">,</span>
        <span class="token literal-property property">contacts</span><span class="token operator">:</span> posts<span class="token punctuation">,</span>
        <span class="token literal-property property">hasReachedMax</span><span class="token operator">:</span> posts<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> _postLimit<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      final posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">_fetchPosts</span><span class="token punctuation">(</span>homeState<span class="token punctuation">.</span>contacts<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
      homeState <span class="token operator">=</span> homeState<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> HomeStatus<span class="token punctuation">.</span>success<span class="token punctuation">,</span>
        <span class="token literal-property property">contacts</span><span class="token operator">:</span> List<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>homeState<span class="token punctuation">.</span>contacts<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">hasReachedMax</span><span class="token operator">:</span> posts<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> _postLimit<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">notifyListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    homeState <span class="token operator">=</span> homeState<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> HomeStatus<span class="token punctuation">.</span>error<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">notifyListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>getContacts 메서드는 데이터를 가져오는 역할을 합니다. 이 메서드는 비동기적으로 작동하여 데이터를 가져올 때 메인 UI 스레드를 차단하지 않습니다.</li>
<li>이 메서드 내부에서는 homeState의 현재 상태를 확인합니다. 초기 상태인 경우, _fetchPosts를 사용하여 초기 데이터를 가져와 homeState를 업데이트합니다. 그렇지 않은 경우, 현재 연락처 목록을 기반으로 추가 데이터를 가져옵니다.</li>
<li>homeState를 업데이트한 후, notifyListeners()를 사용하여 상태 변경을 청취자에게 알립니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Future<span class="token operator">&lt;</span>List<span class="token operator">&lt;</span>Post<span class="token operator">>></span> <span class="token function">_fetchPosts</span><span class="token punctuation">(</span><span class="token punctuation">[</span>int startIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> async <span class="token punctuation">{</span>
  <span class="token keyword">await</span> Future<span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>seconds<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  final response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>
    Uri<span class="token punctuation">.</span><span class="token function">https</span><span class="token punctuation">(</span>
      <span class="token string">'jsonplaceholder.typicode.com'</span><span class="token punctuation">,</span>
      <span class="token string">'/posts'</span><span class="token punctuation">,</span>
      <span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">></span><span class="token punctuation">{</span><span class="token string-property property">'_start'</span><span class="token operator">:</span> <span class="token string">'$startIndex'</span><span class="token punctuation">,</span> <span class="token string-property property">'_limit'</span><span class="token operator">:</span> <span class="token string">'$_postLimit'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusCode <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    final body <span class="token operator">=</span> json<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>body<span class="token punctuation">)</span> <span class="token keyword">as</span> List<span class="token punctuation">;</span>
    <span class="token keyword">return</span> body
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">dynamic json</span><span class="token punctuation">)</span> <span class="token operator">=></span> Post<span class="token punctuation">.</span><span class="token function">fromJson</span><span class="token punctuation">(</span>json <span class="token keyword">as</span> Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> dynamic<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">throw</span> <span class="token function">Exception</span><span class="token punctuation">(</span><span class="token string">'error fetching posts'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>_fetchPosts 메서드는 API에서 게시물을 가져오기 위해 HTTP 요청을 수행하는 비공개 메서드입니다.</li>
<li>응답 상태 코드가 200인 경우 (성공을 나타냄), 응답 본문을 JSON에서 게시물 목록으로 디코딩합니다.</li>
<li>그런 다음 각 JSON 객체를 Post.fromJson을 사용하여 Post 객체로 매핑합니다.```</li>
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
<p>요약하면, HomeProvider 클래스는 홈 화면과 관련된 데이터를 가져오고 관리하는 로직을 캡슐화합니다. 이 클래스는 ChangeNotifier 패턴을 사용하여 상태 변화 시 해당 리스너(UI 구성 요소)에게 알림을 보내어 반응형 UI 업데이트를 가능하게 합니다.</p>
<p>어플리케이션을 실행하기 전에 메인 함수 내에서 클래스와 프로바이더를 설정하는 것이 중요합니다. 이렇게 함으로써 어플리케이션을 원활하게 실행하고 충돌이나 버그 없는 경험을 제공할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token function">MaterialApp</span><span class="token punctuation">(</span>
  <span class="token literal-property property">home</span><span class="token operator">:</span> <span class="token function">ChangeNotifierProvider</span><span class="token punctuation">(</span>
    <span class="token function-variable function">create</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">HomeProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token function">getContacts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ChangeNotifierProvider의 create 매개변수는 HomeProvider 클래스를 인스턴스화하고 즉시 초기 데이터를 가져 오기 위해 그 getContacts() 메서드를 호출하는 데 사용됩니다. 이 create 매개변수는 제공된 클래스(여기서는 HomeProvider)의 인스턴스를 반환하는 함수를 기대합니다.</p>
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
<p>자 이제 앱을 시험해봄으로써 우리가 구현한 것을 확인해 보겠습니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*dJoh_kZJ7Pt5-MeidhtEhg.gif" alt="image"></p>
<p>결론</p>
<p>페이지네이션을 채택함으로써 개발자들은 다음과 같은 이점을 얻을 수 있습니다:</p>
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
<li>성능 향상: 페이지네이션을 통해 데이터를 작은 청크로 가져와 표시함으로써 앱과 서버에 가해지는 부하를 줄여 응답 시간을 빠르게 하고 사용자 상호작용을 더 부드럽게 만들 수 있습니다.</li>
<li>사용자 경험 향상: 데이터를 관리 가능한 페이지로 분할함으로써 사용자가 콘텐츠를 더 쉽게 탐색할 수 있게 되어 정보 과부하를 방지하고 더 즐거운 탐색 경험을 제공할 수 있습니다.</li>
<li>유지보수 간단화: 데이터 검색 및 표시 로직을 작은 모듈화된 구성 요소로 분리하여 코드를 이해하고 유지보수하고 디버깅하기 쉽게 하여 종합적으로 프로젝트의 확장성에 기여합니다.</li>
</ul>
<p>그러나 잠재적인 단점을 고려하는 것도 중요합니다:</p>
<ul>
<li>복잡성: 페이지네이션을 구현하기 위해서는 페이지 상태와 내비게이션을 관리하는 추가 로직이 필요할 수 있습니다. 특히 큰 프로젝트에서는 복잡성이 증가할 수 있습니다.</li>
<li>서버 측 요구 사항: 페이지네이션은 데이터를 효율적으로 검색하기 위해 서버 측 지원을 필요로 합니다. 백엔드 API가 페이지별 요청을 처리할 수 있는지 확인해야 합니다.</li>
</ul>
<p>마지막으로, Flutter 애플리케이션에서 API 데이터를 관리하기 위한 Provider를 사용한 페이지네이션은 많은 이점을 제공하지만, 개발자는 잠재적인 복잡성과 백엔드 요구 사항과 대조해야 합니다. 애플리케이션의 요구 사항을 신중하게 고려하고 Flutter의 유연성을 활용하여 사용자에게 효율적이고 사용하기 쉬운 경험을 제공할 수 있습니다. 즐거운 코딩 되세요!</p>
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
</div></template>
