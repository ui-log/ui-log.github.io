<template><div><p>오늘은 플러터에서 Rive의 애니메이션 아이콘을 사용하여 사용자 정의 하단 내비게이션 바를 만드는 방법을 보여 드리겠습니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*rZh4nphSSS0QzBmGpK5JVA.gif" alt="Animation"></p>
<h2 id="프로젝트-설정-🛠️" tabindex="-1"><a class="header-anchor" href="#프로젝트-설정-🛠️" aria-hidden="true">#</a> 프로젝트 설정 🛠️</h2>
<p>빈 플러터 프로젝트로 여정을 시작하고, assets 디렉토리를 생성합니다. 첫 번째 단계는 Rive 커뮤니티에서 애니메이션 아이콘을 다운로드하는 것입니다. 그런 다음 파일 이름을 animated-icons.riv로 변경하고 assets 폴더에 추가합니다. 이 파일이 pubspec.yaml에서 assets 하위에 올바르게 참조되었는지 확인하는 것이 중요합니다. 마지막 단계는 프로젝트에 Rive 패키지를 추가하는 것입니다.</p>
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
<h2 id="rivemodel" tabindex="-1"><a class="header-anchor" href="#rivemodel" aria-hidden="true">#</a> RiveModel</h2>
<p><strong>RiveModel</strong> 모델을 생성해 보겠습니다. <strong>src, artboard, stateMachineName</strong>을 가진 모델입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">RiveModel</span> <span class="token punctuation">{</span>
  final String src<span class="token punctuation">,</span> artboard<span class="token punctuation">,</span> stateMachineName<span class="token punctuation">;</span>

  <span class="token function">RiveModel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>src<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>artboard<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>stateMachineName<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>지금, 여러분은 아트보드와 스테이트 머신 이름이 정확히 무엇인지 궁금할 것입니다. 애니메이션 아이콘으로 돌아가 보면, 리믹스 버튼을 클릭하면 마치 청사진을 보는 것과 같죠.</p>
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
<img src="@source/docs/Tech/2024-03-22-Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive/img/Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive_1.png" />
<p>각 아이콘이 이름이 지정되어 있는 것을 알 수 있어요. 이것을 우리는 아트보드(Artboard)라고 부르죠. 각 아트보드는 상태 머신(state machine)에 연결되어 있어요. 여기서 이름은 TIMER_Interactivity에요. 또한 상태 머신에는 두 가지 상태가 있어요: idle(유휴)와 active(활성). 이 상태들은 아이콘의 애니메이션을 제어하게 해줘요.</p>
<p>바텀 네비게이션에 사용할 모든 아이템을 저장할 변수인 bottomNavItems을 만들어 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>List<span class="token operator">&lt;</span>RiveModel<span class="token operator">></span> bottomNavItems <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">RiveModel</span><span class="token punctuation">(</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"assets/animated-icons.riv"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">artboard</span><span class="token operator">:</span> <span class="token string">"CHAT"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stateMachineName</span><span class="token operator">:</span> <span class="token string">"CHAT_Interactivity"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">RiveModel</span><span class="token punctuation">(</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"assets/animated-icons.riv"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">artboard</span><span class="token operator">:</span> <span class="token string">"SEARCH"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stateMachineName</span><span class="token operator">:</span> <span class="token string">"SEARCH_Interactivity"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">RiveModel</span><span class="token punctuation">(</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"assets/animated-icons.riv"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">artboard</span><span class="token operator">:</span> <span class="token string">"TIMER"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stateMachineName</span><span class="token operator">:</span> <span class="token string">"TIMER_Interactivity"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">RiveModel</span><span class="token punctuation">(</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"assets/animated-icons.riv"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">artboard</span><span class="token operator">:</span> <span class="token string">"BELL"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stateMachineName</span><span class="token operator">:</span> <span class="token string">"BELL_Interactivity"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">RiveModel</span><span class="token punctuation">(</span>
      <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">"assets/animated-icons.riv"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">artboard</span><span class="token operator">:</span> <span class="token string">"USER"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">stateMachineName</span><span class="token operator">:</span> <span class="token string">"USER_Interactivity"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>자, 이제 다시 본 코드로 돌아가서 가장 재미있는 부분을 시작해 보겠습니다.</p>
<h2 id="하단-내비게이션-바" tabindex="-1"><a class="header-anchor" href="#하단-내비게이션-바" aria-hidden="true">#</a> 하단 내비게이션 바</h2>
<p>새 StatefulWidget인 BottomNavWithAnimatedIcons를 만들어 보세요. 그리고 main.dart에서 이것을 애플리케이션의 홈으로 설정하세요.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">'package:flutter/material.dart'</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token class-name">Color</span> bottonNavBgColor <span class="token operator">=</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xFF17203A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">BottomNavWithAnimatedIcons</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">BottomNavWithAnimatedIcons</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BottomNavWithAnimatedIcons</span><span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span>
      <span class="token function">_BottomNavWithAnimatedIconsState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _BottomNavWithAnimatedIconsState
    <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BottomNavWithAnimatedIcons</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      <span class="token comment">// TODO: Bottom Nav Bar</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그 대신에 기존의 BottomNavigationBar 위젯을 사용하지 않고 Container를 사용할 거에요. 아래 코드로 ToDo: Bottom Nav Bar를 교체하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">bottomNavigationBar</span><span class="token operator">:</span> <span class="token function">SafeArea</span><span class="token punctuation">(</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Container</span><span class="token punctuation">(</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">56</span><span class="token punctuation">,</span> <span class="token comment">//나중에 높이를 제거하세요</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token keyword">const</span> EdgeInsets<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token keyword">const</span> EdgeInsets<span class="token punctuation">.</span><span class="token function">symmetric</span><span class="token punctuation">(</span>horizontal<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
      <span class="token literal-property property">color</span><span class="token operator">:</span> bottonNavBgColor<span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token keyword">const</span> BorderRadius<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>Radius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">boxShadow</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">BoxShadow</span><span class="token punctuation">(</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> bottonNavBgColor<span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Offset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">blurRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 애니메이션 아이콘 추가,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-22-Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive/img/Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive_2.png" />
<p>이제 아이콘을 표시할 거에요. List.generate를 사용하여 자식으로 설정된 Row를 통해 각 아이콘의 높이와 너비를 36으로 설정하세요. RiveAnimation.asset를 사용하여 소스를 정의하세요. ToDo: Animated Icons을 아래 코드로 교체하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Row</span><span class="token punctuation">(</span>
  <span class="token literal-property property">mainAxisAlignment</span><span class="token operator">:</span> MainAxisAlignment<span class="token punctuation">.</span>spaceBetween<span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> List<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>
    bottomNavItems<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">SizedBox</span><span class="token punctuation">(</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
      <span class="token literal-property property">child</span><span class="token operator">:</span> RiveAnimation<span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span>
        bottomNavItems<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>src<span class="token punctuation">,</span>
        <span class="token literal-property property">artboard</span><span class="token operator">:</span> <span class="token string">'your_artboard_name_here'</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 하나의 아이콘만 표시됩니다.</p>
<img src="@source/docs/Tech/2024-03-22-Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive/img/Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive_3.png" />
<p>이는 파일에 모든 아이콘이 포함되어 있기 때문에 발생하며, 원하는 것을 지정해야 합니다. 아트보드를 사용하여 지정하세요. TO DO: Mention Artboard를 다음으로 바꿔주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">artboard</span><span class="token operator">:</span> bottomNavItems<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>artboard<span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/docs/Tech/2024-03-22-Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive/img/Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive_4.png" alt="Custom Bottom Navigation Bar"></p>
<h2 id="애니메이션-제어하기" tabindex="-1"><a class="header-anchor" href="#애니메이션-제어하기" aria-hidden="true">#</a> 애니메이션 제어하기</h2>
<p>일부 아이콘이 애니메이션되고 일부는 그렇지 않다는 것을 알 수 있습니다. 애니메이션을 관리하려면 컨트롤러를 설정해야 합니다. 이를 위해 riveOnInIt이라는 함수를 생성하고 StateMachineController를 정의한 다음, artboard 및 stateMachineName을 전달해야 합니다. 그런 다음 이 컨트롤러를 artboard에 연결하는 것이 다음 단계입니다.```</p>
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
<p>컨트롤러를 설정하면, 정확히 어떤 것을 컨트롤할 지 궁금할 것입니다. 이를 대답하기 위해 Rive 편집기로 돌아가 보겠습니다.</p>
<p><img src="@source/docs/Tech/2024-03-22-Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive/img/Build-a-Custom-Bottom-Navigation-Bar-in-Flutter-with-Animated-Icons-from-Rive_5.png" alt="이미지"></p>
<p>입력란 아래에 활성화 확인란이 있습니다. 이 활성화를 true로 설정하면 애니메이션이 작동합니다. 이를 통해 애니메이션을 제어할 것입니다. Rive에서는 숫자, 부울(참거짓), 또는 트리거 세 가지 유형의 입력을 사용할 수 있습니다.</p>
<p>코드에서 해당 내용을 액세스하려면 findInput을 사용합니다. 여기에 입력의 이름을 명시해야 합니다. 여기가 바로 우리의 함수입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">void</span> <span class="token function">riveOnInIt</span><span class="token punctuation">(</span><span class="token parameter">Artboard artboard<span class="token punctuation">,</span> <span class="token punctuation">{</span>required String stateMachineName<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    StateMachineController<span class="token operator">?</span> controller <span class="token operator">=</span>
        StateMachineController<span class="token punctuation">.</span><span class="token function">fromArtboard</span><span class="token punctuation">(</span>artboard<span class="token punctuation">,</span> stateMachineName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    artboard<span class="token punctuation">.</span><span class="token function">addController</span><span class="token punctuation">(</span>controller<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    controllers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>

    riveIconInputs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>controller<span class="token punctuation">.</span>findInput<span class="token operator">&lt;</span>bool<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> SMIBool<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 일부 오류가 있는 것을 알게 될 것입니다. 그 이유는 아직 controllers와 riveIconInputs를 정의하지 않았기 때문입니다. 그것을 해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>List<span class="token operator">&lt;</span>SMIBool<span class="token operator">></span> riveIconInputs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
List<span class="token operator">&lt;</span>StateMachineController<span class="token operator">?</span><span class="token operator">></span> controllers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
int selctedNavIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>컨트롤러를 저장하여 더 이상 필요하지 않을 때 삭제할 수 있도록 합니다. 선택된 NavIndex는 이후에 서로 다른 페이지 간을 탐색하고 기타 목적을 위해 사용될 것입니다.```</p>
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
<p>'RiveAnimation'으로 돌아오면 'onInit'에서는 'riveOnInit'을 참조해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">onInit</span><span class="token operator">:</span> <span class="token punctuation">(</span>artboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">riveOnInIt</span><span class="token punctuation">(</span>artboard<span class="token punctuation">,</span> <span class="token literal-property property">stateMachineName</span><span class="token operator">:</span> riveIcon<span class="token punctuation">.</span>stateMachineName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="애니메이션-트리거" tabindex="-1"><a class="header-anchor" href="#애니메이션-트리거" aria-hidden="true">#</a> 애니메이션 트리거</h2>
<p>아이콘이 탭될 때 애니메이션을 트리거하는 마지막 단계입니다. SizedBox를 GestureDetector로 감싸주어야 합니다. 탭할 때 입력 상태가 true로 설정됩니다. 각 아이콘은 애니메이션을 완료하는 데 1초가 걸리며 반복됩니다. 그래서 1초 후에 애니메이션을 멈추려면 Future.delayed를 사용해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">GestureDetector</span><span class="token punctuation">(</span>
  <span class="token literal-property property">onTap</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    riveIconInputs<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Future<span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span>
      <span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>seconds<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        riveIconInputs<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      selctedNavIndex <span class="token operator">=</span> index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">SizedBox</span><span class="token punctuation">(</span> <span class="token operator">...</span><span class="token punctuation">.</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="애니메이션-바" tabindex="-1"><a class="header-anchor" href="#애니메이션-바" aria-hidden="true">#</a> 애니메이션 바</h2>
<p>선택한 아이콘 위에 애니메이션 바가 있는 것을 알 수 있습니다. 이를 만들어 보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">AnimatedBar</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">AnimatedBar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>isActive<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  final bool isActive<span class="token punctuation">;</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">AnimatedContainer</span><span class="token punctuation">(</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token keyword">const</span> EdgeInsets<span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>bottom<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> isActive <span class="token operator">?</span> <span class="token number">20</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0xFF81B4FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> BorderRadius<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>Radius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>마지막 단계는 SizedBox를 Column으로 감싸고 AnimatedBar를 상단에 배치하는 것입니다.</p>
<h2 id="완성된-코드" tabindex="-1"><a class="header-anchor" href="#완성된-코드" aria-hidden="true">#</a> 완성된 코드</h2>
<p>아래는 참고용 완성 코드입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Color bottonNavBgColor <span class="token operator">=</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0xFF17203A</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">BottonNavWithAnimatedIcons</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">BottonNavWithAnimatedIcons</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  State<span class="token operator">&lt;</span>BottonNavWithAnimatedIcons<span class="token operator">></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token function">_BottonNavWithAnimatedIconsState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">_BottonNavWithAnimatedIconsState</span>
    <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token operator">&lt;</span>BottonNavWithAnimatedIcons<span class="token operator">></span> <span class="token punctuation">{</span>
  List<span class="token operator">&lt;</span>SMIBool<span class="token operator">></span> riveIconInputs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  List<span class="token operator">&lt;</span>StateMachineController<span class="token operator">?</span><span class="token operator">></span> controllers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  int selctedNavIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  List<span class="token operator">&lt;</span>String<span class="token operator">></span> pages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Chat"</span><span class="token punctuation">,</span> <span class="token string">"Search"</span><span class="token punctuation">,</span> <span class="token string">"History"</span><span class="token punctuation">,</span> <span class="token string">"Notification"</span><span class="token punctuation">,</span> <span class="token string">"Profile"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">void</span> <span class="token function">animateTheIcon</span><span class="token punctuation">(</span><span class="token parameter">int index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    riveIconInputs<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Future<span class="token punctuation">.</span><span class="token function">delayed</span><span class="token punctuation">(</span>
      <span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>seconds<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        riveIconInputs<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">void</span> <span class="token function">riveOnInIt</span><span class="token punctuation">(</span><span class="token parameter">Artboard artboard<span class="token punctuation">,</span> <span class="token punctuation">{</span>required String stateMachineName<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    StateMachineController<span class="token operator">?</span> controller <span class="token operator">=</span>
        StateMachineController<span class="token punctuation">.</span><span class="token function">fromArtboard</span><span class="token punctuation">(</span>artboard<span class="token punctuation">,</span> stateMachineName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    artboard<span class="token punctuation">.</span><span class="token function">addController</span><span class="token punctuation">(</span>controller<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    controllers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>controller<span class="token punctuation">)</span><span class="token punctuation">;</span>

    riveIconInputs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>controller<span class="token punctuation">.</span>findInput<span class="token operator">&lt;</span>bool<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> SMIBool<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  <span class="token keyword">void</span> <span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> controller <span class="token keyword">in</span> controllers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      controller<span class="token operator">?.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Scaffold</span><span class="token punctuation">(</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token function">Center</span><span class="token punctuation">(</span>child<span class="token operator">:</span> <span class="token function">Text</span><span class="token punctuation">(</span>pages<span class="token punctuation">[</span>selctedNavIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bottomNavigationBar</span><span class="token operator">:</span> <span class="token function">SafeArea</span><span class="token punctuation">(</span>
        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Container</span><span class="token punctuation">(</span>
          <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token keyword">const</span> EdgeInsets<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token keyword">const</span> EdgeInsets<span class="token punctuation">.</span><span class="token function">symmetric</span><span class="token punctuation">(</span>horizontal<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> bottonNavBgColor<span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token keyword">const</span> BorderRadius<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>Radius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token literal-property property">boxShadow</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token function">BoxShadow</span><span class="token punctuation">(</span>
                <span class="token literal-property property">color</span><span class="token operator">:</span> bottonNavBgColor<span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Offset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token literal-property property">blurRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
              <span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Row</span><span class="token punctuation">(</span>
            <span class="token literal-property property">mainAxisAlignment</span><span class="token operator">:</span> MainAxisAlignment<span class="token punctuation">.</span>spaceBetween<span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> List<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span>
              bottomNavItems<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
              <span class="token punctuation">(</span>index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                final riveIcon <span class="token operator">=</span> bottomNavItems<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token function">GestureDetector</span><span class="token punctuation">(</span>
                  <span class="token literal-property property">onTap</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">animateTheIcon</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                      selctedNavIndex <span class="token operator">=</span> index<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Column</span><span class="token punctuation">(</span>
                    <span class="token literal-property property">mainAxisSize</span><span class="token operator">:</span> MainAxisSize<span class="token punctuation">.</span>min<span class="token punctuation">,</span>
                    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                      <span class="token function">AnimatedBar</span><span class="token punctuation">(</span>isActive<span class="token operator">:</span> selctedNavIndex <span class="token operator">==</span> index<span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token function">SizedBox</span><span class="token punctuation">(</span>
                        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
                        <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">Opacity</span><span class="token punctuation">(</span>
                          <span class="token literal-property property">opacity</span><span class="token operator">:</span> selctedNavIndex <span class="token operator">==</span> index <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
                          <span class="token literal-property property">child</span><span class="token operator">:</span> RiveAnimation<span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span>
                            riveIcon<span class="token punctuation">.</span>src<span class="token punctuation">,</span>
                            <span class="token literal-property property">artboard</span><span class="token operator">:</span> riveIcon<span class="token punctuation">.</span>artboard<span class="token punctuation">,</span>
                            <span class="token literal-property property">onInit</span><span class="token operator">:</span> <span class="token punctuation">(</span>artboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                              <span class="token function">riveOnInIt</span><span class="token punctuation">(</span>artboard<span class="token punctuation">,</span>
                                  <span class="token literal-property property">stateMachineName</span><span class="token operator">:</span> riveIcon<span class="token punctuation">.</span>stateMachineName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span><span class="token punctuation">,</span>
                          <span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">)</span><span class="token punctuation">,</span>
                      <span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                  <span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AnimatedBar</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">AnimatedBar</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>isActive<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  final bool isActive<span class="token punctuation">;</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">AnimatedContainer</span><span class="token punctuation">(</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token keyword">const</span> EdgeInsets<span class="token punctuation">.</span><span class="token function">only</span><span class="token punctuation">(</span>bottom<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> isActive <span class="token operator">?</span> <span class="token number">20</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0xFF81B4FF</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> BorderRadius<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>Radius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="더-탐험할-것이-많아요" tabindex="-1"><a class="header-anchor" href="#더-탐험할-것이-많아요" aria-hidden="true">#</a> 더 탐험할 것이 많아요!</h2>
<p>이 하단 네비게이션 바는 Rive와 함께 사용하는 Animated Flutter 앱의 구성 요소 중 하나예요. Flutter에서 더 고급 애니메이션을 원하신다면 꼭 확인해보세요.</p>
<p>읽어 주셔서 정말 감사합니다. 이 내용이 도움이 되었으면 좋겠어요. 제안이나 피드백이 있다면 언제든 알려주세요. 여러분을 위해 더 나은 콘텐츠를 만드는 데 도움이 되는 소중한 의견이에요.</p>
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
