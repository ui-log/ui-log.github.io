<template><div><p>많은 시간에, 매우 구체적이고 상세한 디자인 시스템이 포함될 수 있습니다. 이것들은 색상, 텍스트 스타일, 그림자, 그라데이션 등을 포함할 수 있습니다.</p>
<p>이상적인 세상에서는 UI 디자이너들이 안드로이드 앱용 재료 가이드 라인이나 iOS 앱용 인터페이스 가이드 라인에 따라 디자인을 할 거라면 Flutter에 내장된 네이밍 컨벤션을 사용할 수 있었을텐데, 그러나 아쉽게도 우리는 이상적인 세상에 살지 않습니다. 그것이 불가능에 가깝겠죠. 그러나 해결 방법이 있습니다.</p>
<p>Flutter은 확장(extension)을 사용하여 테마 클래스의 능력을 확장할 수 있는 옵션을 제공합니다. 이를 활용하는 완벽한 사용 사례는 너무 많은 코드를 작성하지 않고도 밝은 모드와 어두운 모드 간에 전환하는 것입니다.</p>
<p>함께 코드를 살펴보고 themeExtensions가 제공하는 가능성을 탐험해보겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">XDesignSystem</span> <span class="token keyword">extends</span> <span class="token class-name">ThemeExtension</span><span class="token operator">&lt;</span>XDesignSystem<span class="token operator">></span> <span class="token punctuation">{</span>
  Color<span class="token operator">?</span> textColor<span class="token punctuation">;</span>
  BoxDecoration<span class="token operator">?</span> defaultBoxShadow<span class="token punctuation">;</span>
  List<span class="token operator">&lt;</span>Color<span class="token operator">></span><span class="token operator">?</span> defaultGradients<span class="token punctuation">;</span>
  TextStyle<span class="token operator">?</span> defaultTextStyle<span class="token punctuation">;</span>

   <span class="token function">XDesignSystem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>textColor<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>defaultBoxShadow<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>defaultGradients<span class="token punctuation">,</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>defaultTextStyle<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  @override
  ThemeExtension<span class="token operator">&lt;</span>XDesignSystem<span class="token operator">></span> <span class="token function">copyWith</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
    Color<span class="token operator">?</span> textColor<span class="token punctuation">,</span>
    BoxDecoration<span class="token operator">?</span> defaultBoxShadow<span class="token punctuation">,</span>
    List<span class="token operator">&lt;</span>Color<span class="token operator">></span><span class="token operator">?</span> defaultGradients<span class="token punctuation">,</span>
    TextStyle<span class="token operator">?</span> defaultTextStyle<span class="token punctuation">,</span>
  <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">XDesignSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>textColor <span class="token operator">=</span> textColor <span class="token operator">??</span> <span class="token keyword">this</span><span class="token punctuation">.</span>textColor
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultBoxShadow <span class="token operator">=</span> defaultBoxShadow <span class="token operator">??</span> <span class="token keyword">this</span><span class="token punctuation">.</span>defaultBoxShadow
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultGradients <span class="token operator">=</span> defaultGradients <span class="token operator">??</span> <span class="token keyword">this</span><span class="token punctuation">.</span>defaultGradients
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultTextStyle <span class="token operator">=</span> defaultTextStyle <span class="token operator">??</span> <span class="token keyword">this</span><span class="token punctuation">.</span>defaultTextStyle<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  @override
  ThemeExtension<span class="token operator">&lt;</span>XDesignSystem<span class="token operator">></span> <span class="token function">lerp</span><span class="token punctuation">(</span>
      <span class="token parameter">covariant ThemeExtension<span class="token operator">&lt;</span>XDesignSystem<span class="token operator">></span><span class="token operator">?</span> other<span class="token punctuation">,</span> double t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>other is XDesignSystem<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">XDesignSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span>textColor <span class="token operator">=</span> Color<span class="token punctuation">.</span><span class="token function">lerp</span><span class="token punctuation">(</span>textColor<span class="token punctuation">,</span> other<span class="token punctuation">.</span>textColor<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultBoxShadow <span class="token operator">=</span> BoxDecoration<span class="token punctuation">.</span><span class="token function">lerp</span><span class="token punctuation">(</span>defaultBoxShadow<span class="token punctuation">,</span> other<span class="token punctuation">.</span>defaultBoxShadow<span class="token punctuation">,</span> t<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultGradients <span class="token operator">=</span> defaultGradients
        <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultTextStyle <span class="token operator">=</span> TextStyle<span class="token punctuation">.</span><span class="token function">lerp</span><span class="token punctuation">(</span>defaultTextStyle<span class="token punctuation">,</span> other<span class="token punctuation">.</span>defaultTextStyle<span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">XDesignSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>textColor <span class="token operator">=</span> textColor
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultBoxShadow <span class="token operator">=</span> defaultBoxShadow
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultGradients <span class="token operator">=</span> defaultGradients
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultTextStyle <span class="token operator">=</span> defaultTextStyle<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 앱에서 사용할 몇 가지 속성을 포함하는 클래스를 선언했습니다. 이 클래스와 그 속성들은 특정 규칙에 제한되지 않습니다. 다음으로 할 일은 이를 테마에 추가하는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>final lightTheme <span class="token operator">=</span> <span class="token function">ThemeData</span><span class="token punctuation">(</span>
  <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">XDesignSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>textColor <span class="token operator">=</span> Colors<span class="token punctuation">.</span>green
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultBoxShadow <span class="token operator">=</span> <span class="token function">BoxShadow</span><span class="token punctuation">(</span>color<span class="token operator">:</span> <span class="token function">Color</span><span class="token punctuation">(</span><span class="token number">0xff393B3D</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token literal-property property">blurRadius</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">spreadRadius</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">offset</span><span class="token operator">:</span> <span class="token function">Offset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultGradients <span class="token operator">=</span> <span class="token punctuation">[</span>Colors<span class="token punctuation">.</span>green<span class="token punctuation">,</span> Colors<span class="token punctuation">.</span>red<span class="token punctuation">]</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultTextStyle <span class="token operator">=</span> <span class="token function">TextStyle</span><span class="token punctuation">(</span>fontSize<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> Colors<span class="token punctuation">.</span>black<span class="token punctuation">)</span><span class="token punctuation">,</span> 
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 MaterialApp 위젯에 이를 연결하여 계속 진행할 수 있습니다.```</p>
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
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token class-name">ThemeData</span> theme <span class="token operator">=</span> <span class="token class-name">ThemeData</span><span class="token punctuation">(</span>
  extensions<span class="token punctuation">:</span> <span class="token punctuation">[</span>
    <span class="token class-name">XDesignSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>textColor <span class="token operator">=</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>green
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultBoxShadow <span class="token operator">=</span> <span class="token class-name">BoxShadow</span><span class="token punctuation">(</span>color<span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">(</span><span class="token number">0xff393B3D</span><span class="token punctuation">)</span><span class="token punctuation">,</span> blurRadius<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span> spreadRadius<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> offset<span class="token punctuation">:</span> <span class="token class-name">Offset</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultGradients <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Colors</span><span class="token punctuation">.</span>green<span class="token punctuation">,</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>red<span class="token punctuation">]</span>
      <span class="token punctuation">.</span><span class="token punctuation">.</span>defaultTextStyle <span class="token operator">=</span> <span class="token class-name">TextStyle</span><span class="token punctuation">(</span>fontSize<span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token class-name">Colors</span><span class="token punctuation">.</span>black<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyApp</span> <span class="token keyword">extends</span> <span class="token class-name">StatelessWidget</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token class-name">MyApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">Key</span> key<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token keyword">super</span><span class="token punctuation">(</span>key<span class="token punctuation">:</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token metadata function">@override</span>
  <span class="token class-name">Widget</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">BuildContext</span> context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">MaterialApp</span><span class="token punctuation">(</span>
      theme<span class="token punctuation">:</span> theme<span class="token punctuation">,</span> 
      home<span class="token punctuation">:</span> <span class="token class-name">Scaffold</span><span class="token punctuation">(</span>
        body<span class="token punctuation">:</span> <span class="token class-name">Center</span><span class="token punctuation">(</span>
          child<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">'Hello, World!'</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 클래스는 아래 코드를 사용하여 쉽게 액세스할 수 있습니다.</p>
<div class="language-dart ext-dart line-numbers-mode"><pre v-pre class="language-dart"><code><span class="token class-name">Theme</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">extension</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DesignSystem</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>textColor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>하지만 이렇게 하는 것이 그렇게 쉽지는 않죠. 조금 더 깔끔하게 만들기 위해 BuildContext에 확장(extension)을 생성할 수 있습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>확장팩으로 BuildContext에 디자인 시스템을 추가합니다<span class="token punctuation">.</span>

이제 이 확장을 사용하여 어디에서든 컨텍스트를 통해 쉽게 액세스할 수 있습니다<span class="token punctuation">.</span> 아래 예시를 확인해보세요<span class="token operator">!</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`js
<span class="token function">Container</span><span class="token punctuation">(</span>
  <span class="token literal-property property">decoration</span><span class="token operator">:</span> context<span class="token punctuation">.</span>designSystem<span class="token punctuation">.</span>defaultBoxShadow<span class="token punctuation">,</span> 
<span class="token punctuation">)</span>

<span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"일부 텍스트"</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">style</span><span class="token operator">:</span> context<span class="token punctuation">.</span>designSystem<span class="token punctuation">.</span>defaultTextStyle<span class="token punctuation">,</span> 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 완료! 매우 간단하죠?```</p>
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
<p>이 구현은 밝은 테마와 어두운 테마 간의 전환을 쉽게 만들 뿐만 아니라 사용자가 테마로 사용할 색상을 결정할 수 있도록 하는 것도 쉽게 만듭니다.</p>
<p>사용자가 색상 선택기를 사용할 수 있다고 가정하면, 해당 구현 또한 매우 쉽습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>theme<span class="token punctuation">.</span><span class="token function">copyWith</span><span class="token punctuation">(</span>
  <span class="token literal-property property">defaultTextColor</span><span class="token operator">:</span> <span class="token comment">// 사용자가 선택한 색상 뭐시기 </span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>상태 관리 기술은 여러분에게 맡기겠습니다. 그러나 이가 다소 직관적이었기를 희망합니다.</p>
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
<p>내 소셜 미디어 계정을 팔로우하는 걸 잊지 마세요!</p>
<ul>
<li>LinkedIn</li>
<li>Twitter</li>
</ul>
</div></template>
