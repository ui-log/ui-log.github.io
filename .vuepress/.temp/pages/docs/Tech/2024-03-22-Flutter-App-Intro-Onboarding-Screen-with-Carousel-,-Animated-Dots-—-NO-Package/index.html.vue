<template><div><p>플러터 앱에서 아래와 같이 보여지는 온보딩 페이지를 만드는 방법을 배워볼 거에요.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:960/1*QTCiaojbDwpoaW8f3COl4g.gif" alt="image"></p>
<p>인디케이터가 애니메이션되는 걸 보면, 놀라울 정도로 단 10줄의 코드만 필요하다구요!</p>
<h2 id="시작하기" tabindex="-1"><a class="header-anchor" href="#시작하기" aria-hidden="true">#</a> 시작하기</h2>
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
<p>OnboardingPage부터 시작해보겠습니다. 이 페이지는 StatefulWidget입니다. 또한 _selectedIndex라는 변수를 정의하고 기본 값을 0으로 설정하세요.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token keyword">class</span> <span class="token class-name">OnboardingPage</span> <span class="token keyword">extends</span> <span class="token class-name">StatefulWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">OnboardingPage</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span><span class="token operator">?</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OnboardingPage</span><span class="token punctuation">></span></span> <span class="token function">createState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">_OnboardingPageState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> _OnboardingPageState <span class="token keyword">extends</span> <span class="token class-name">State</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">OnboardingPage</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  int _selectedIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
      body<span class="token punctuation">:</span> <span class="token class-name">SafeArea</span><span class="token punctuation">(</span>
        child<span class="token punctuation">:</span> <span class="token class-name">Column</span><span class="token punctuation">(</span>
          children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
            <span class="token comment">// TODO: Onboard Content</span>

            <span class="token comment">// TODO: Animated Dots</span>

            <span class="token comment">// TODO: Button</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Map</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token keyword">dynamic</span><span class="token punctuation">></span><span class="token punctuation">></span></span> demoData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">"illustration"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"assets/Illustrations/Illustrations_1.svg"</span></span><span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"title"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"All your favorites"</span></span><span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"text"</span></span><span class="token punctuation">:</span>
        <span class="token string-literal"><span class="token string">"Order from the best local restaurants \nwith easy, on-demand delivery."</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">"illustration"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"assets/Illustrations/Illustrations_2.svg"</span></span><span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"title"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Free delivery offers"</span></span><span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"text"</span></span><span class="token punctuation">:</span>
        <span class="token string-literal"><span class="token string">"Free delivery for new customers via Apple Pay\nand others payment methods."</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token string-literal"><span class="token string">"illustration"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"assets/Illustrations/Illustrations_3.svg"</span></span><span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"title"</span></span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Choose your food"</span></span><span class="token punctuation">,</span>
    <span class="token string-literal"><span class="token string">"text"</span></span><span class="token punctuation">:</span>
        <span class="token string-literal"><span class="token string">"Easily find your type of food craving and\nyou’ll get delivery in wide range."</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="onboard-content" tabindex="-1"><a class="header-anchor" href="#onboard-content" aria-hidden="true">#</a> Onboard Content</h2>
<p>OnboardContent에서는 일러스트레이션부터 시작합니다. 그 다음으로 큰 텍스트로 제목을 설정하고 style을 titleLarge로 설정합니다. 마지막으로 짧은 설명이 있습니다. 이것이 일러스트레이션, 제목 및 설명이라는 세 가지 매개변수가 있는 이유입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">OnboardContent</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">OnboardContent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>illustration<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>title<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>text<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  final String illustration<span class="token punctuation">,</span> title<span class="token punctuation">,</span> text<span class="token punctuation">;</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">Column</span><span class="token punctuation">(</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">Expanded</span><span class="token punctuation">(</span>
          <span class="token literal-property property">child</span><span class="token operator">:</span> <span class="token function">AspectRatio</span><span class="token punctuation">(</span>
            <span class="token literal-property property">aspectRatio</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token literal-property property">child</span><span class="token operator">:</span> SvgPicture<span class="token punctuation">.</span><span class="token function">asset</span><span class="token punctuation">(</span>illustration<span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">const</span> <span class="token function">SizedBox</span><span class="token punctuation">(</span>height<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">Text</span><span class="token punctuation">(</span>
          title<span class="token punctuation">,</span>
          <span class="token literal-property property">style</span><span class="token operator">:</span> Theme<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
              <span class="token punctuation">.</span>textTheme
              <span class="token punctuation">.</span>titleLarge<span class="token operator">!</span>
              <span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>fontWeight<span class="token operator">:</span> FontWeight<span class="token punctuation">.</span>bold<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">const</span> <span class="token function">SizedBox</span><span class="token punctuation">(</span>height<span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">Text</span><span class="token punctuation">(</span>
          text<span class="token punctuation">,</span>
          <span class="token literal-property property">style</span><span class="token operator">:</span> Theme<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span>textTheme<span class="token punctuation">.</span>bodyMedium<span class="token punctuation">,</span>
          <span class="token literal-property property">textAlign</span><span class="token operator">:</span> TextAlign<span class="token punctuation">.</span>center<span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 OnboardContent를 온보딩 페이지에 적용해 봅시다. 미리보기를 살펴보면 사용자가 좌우로 스와이프할 수 있음을 알 수 있습니다. 이것은 PageView를 사용하여 구현합니다. 페이지가 변경될 때 _selectedindex를 업데이트합니다. 이것은 나중에 페이지 위치를 나타내는 애니메이션 도트를 추가할 때 유용합니다. 아래 코드로 TODO: 온보드 컨텐츠를 교체하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function">Spacer</span><span class="token punctuation">(</span>flex<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token function">SizedBox</span><span class="token punctuation">(</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>
  <span class="token literal-property property">child</span><span class="token operator">:</span> PageView<span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
    <span class="token literal-property property">itemCount</span><span class="token operator">:</span> demoData<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    <span class="token literal-property property">onPageChanged</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        _selctedIndex <span class="token operator">=</span> value<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">itemBuilder</span><span class="token operator">:</span> <span class="token punctuation">(</span>context<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">OnboardContent</span><span class="token punctuation">(</span>
        <span class="token literal-property property">illustration</span><span class="token operator">:</span> demoData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'illustration'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> demoData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> demoData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">'text'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">const</span> <span class="token function">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-22-Flutter-App-Intro-Onboarding-Screen-with-Carousel-,-Animated-Dots-—-NO-Package/img/Flutter-App-Intro-Onboarding-Screen-with-Carousel-Animated-Dots-—-NO-Package_1.png" />
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
<h2 id="애니메이션된-점들" tabindex="-1"><a class="header-anchor" href="#애니메이션된-점들" aria-hidden="true">#</a> 애니메이션된 점들</h2>
<p>애니메이션된 점들을 만들 때, 우리는 Implicit 애니메이션을 선택합니다. 컨트롤러나 복잡한 설정이 필요 없어서 간단하고 직관적이기 때문입니다. 우리는 단순히 기간을 정의하기만 하면 됩니다. AnimatedContainer가 그 중 하나입니다. 여기서 점이 활성화되면 너비가 24로 확장되고, 그렇지 않으면 6으로 유지됩니다. 24에서 6으로의 전환은 즉시 일어나지 않고, 지정된 기간 동안 점진적으로 일어납니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">AnimatedDot</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function">AnimatedDot</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span>key<span class="token punctuation">,</span>
    required <span class="token keyword">this</span><span class="token punctuation">.</span>isActive<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  final bool isActive<span class="token punctuation">;</span>

  @override
  Widget <span class="token function">build</span><span class="token punctuation">(</span><span class="token parameter">BuildContext context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">AnimatedContainer</span><span class="token punctuation">(</span>
      <span class="token literal-property property">duration</span><span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Duration</span><span class="token punctuation">(</span>milliseconds<span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> isActive <span class="token operator">?</span> <span class="token number">20</span> <span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
      <span class="token literal-property property">decoration</span><span class="token operator">:</span> <span class="token function">BoxDecoration</span><span class="token punctuation">(</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span>
            isActive <span class="token operator">?</span> primaryColor <span class="token operator">:</span> <span class="token keyword">const</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0xFF868686</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withOpacity</span><span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token keyword">const</span> BorderRadius<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>Radius<span class="token punctuation">.</span><span class="token function">circular</span><span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 페이지에 점들을 표시하려면, 단순히 <code v-pre>TODO: Animated Dots</code>를 아래 코드로 바꿔주세요.</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code>테이블을 <span class="token class-name">Markdown</span> 형식으로 변경하십시오<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="https://miro.medium.com/v2/resize:fit:1000/1*EqZt2mTJcM8dbXJHGFl8UQ.gif" />
<h2 id="버튼" tabindex="-1"><a class="header-anchor" href="#버튼" aria-hidden="true">#</a> 버튼</h2>
<p>거의 다 왔어요! 완성해야 할 유일한 구성 요소는 버튼입니다. 아래 코드로 TODO: 버튼을 대체해 완료하겠습니다.</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token class-name">ElevatedButton</span><span class="token punctuation">(</span>
  onPressed<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span>
    <span class="token string-literal"><span class="token string">"시작하기"</span></span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token keyword">const</span> <span class="token class-name">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="더-흥미로운-것을-탐색해-보세요" tabindex="-1"><a class="header-anchor" href="#더-흥미로운-것을-탐색해-보세요" aria-hidden="true">#</a> 더 흥미로운 것을 탐색해 보세요!</h2>
<p>이 온보딩 페이지는 저희 포괄적인 레스토랑/음식 배달 앱 템플릿의 초기 화면으로 제공됩니다. 전체 템플릿을 살펴보려면 FlutterLibrary.com을 방문해 주세요.</p>
<img src="@source/docs/Tech/2024-03-22-Flutter-App-Intro-Onboarding-Screen-with-Carousel-,-Animated-Dots-—-NO-Package/img/Flutter-App-Intro-Onboarding-Screen-with-Carousel-Animated-Dots-—-NO-Package_3.png" />
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
<p>정말 감사드립니다. 도움이 되셨길 바랍니다. 의견이나 피드백이 있으시면 언제든 알려주세요. 여러분을 위해 더 나은 콘텐츠를 만드는 데 도움이 될 것입니다.</p>
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
