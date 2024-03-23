<template><div><p>당신의 VisionOS 앱에 사용할 SwiftUI 뷰를 만드는 간단한 안내서</p>
<p><img src="@source/docs/Tech/2024-03-22-CreatingViewsinSwiftUIforVisionOS/img/Creating-Views-in-SwiftUI-for-VisionOS_0.png" alt="이미지"></p>
<p>VisionOS는 SwiftUI 기반으로 작성되었기 때문에, Vision Pro 앱을 통해 탐색하기 위해 같은 기술을 활용합니다.</p>
<p>이 글에서는 Vision Pro 앱을 개발하면서 추가할 수 있는 다양한 뷰 및 구성 요소를 살펴보겠습니다. 이를 통해 탐색 및 데이터 표시가 보다 쉬워집니다. 또한 시뮬레이터에서의 모습과 해당 작업에 필요한 적절한 도구 선택 방법에 대해 알아보겠습니다.</p>
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
<p>우리가 탐색할 요소 중 일부는 다음과 같습니다:</p>
<ul>
<li>VStack, HStack 및 ZStack</li>
<li>NavigationStack</li>
<li>NavigationSplitView</li>
</ul>
<p>각각의 예제가 포함되어 있어 다양한 사용 사례를 확인할 수 있습니다.</p>
<p>VStack, HStack 및 ZStack</p>
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
<p>SwiftUI에서는 사용자에게 제시하기 위해 항목을 다양한 미리 정의된 방식으로 정렬하기 위해 (V, H, Z)-Stacks를 사용할 수 있습니다. 스택 안의 다른 문자는 항목이 나열되는 방향을 나타냅니다. 예를 들어, V는 수직을 의미하며, 항목은 위에서 아래로 나열됩니다. 마찬가지로, H 및 Z 스택은 항목을 좌에서 우로, 배경에서 전경으로 순서대로 나열합니다.</p>
<p>Vision Pro의 경우, 이러한 동작은 정확히 같지만 사용 사례가 변경됩니다. 예를 들어 이제 이러한 스택을 항목 선택에 사용할 수 있습니다. 스택의 각 항목은 클릭 시 나타낼 수 있는 주어진 3D 에셋과 대응할 수 있습니다.</p>
<p>예를 들어, 보기의 일부로 이 VStack을 사용하여 클릭 시 에셋을 열 수 있는 버튼 목록을 표시할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>struct StoryView<span class="token operator">:</span> View <span class="token punctuation">{</span>
    <span class="token comment">// 여러 부울 상태 변수들</span>

    <span class="token keyword">var</span> <span class="token literal-property property">body</span><span class="token operator">:</span> some View <span class="token punctuation">{</span>
        NavigationStack <span class="token punctuation">{</span>
            VStack <span class="token punctuation">{</span>
                <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"다양한 미술 시대를 통해 모험을 떠나보세요!"</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            VStack <span class="token punctuation">{</span>
                <span class="token function">Toggle</span><span class="token punctuation">(</span><span class="token string">"선사 시대"</span><span class="token punctuation">,</span> <span class="token literal-property property">isOn</span><span class="token operator">:</span> $showPrehistoric<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>

                <span class="token function">Toggle</span><span class="token punctuation">(</span><span class="token string">"추상적"</span><span class="token punctuation">,</span> <span class="token literal-property property">isOn</span><span class="token operator">:</span> $showAbstract<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>

                <span class="token function">Toggle</span><span class="token punctuation">(</span><span class="token string">"팝 아트"</span><span class="token punctuation">,</span> <span class="token literal-property property">isOn</span><span class="token operator">:</span> $showPopArt<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>

                <span class="token function">Toggle</span><span class="token punctuation">(</span><span class="token string">"초현실주의"</span><span class="token punctuation">,</span> <span class="token literal-property property">isOn</span><span class="token operator">:</span> $showSurrealism<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span>

                <span class="token function">Toggle</span><span class="token punctuation">(</span><span class="token string">"바로크"</span><span class="token punctuation">,</span> <span class="token literal-property property">isOn</span><span class="token operator">:</span> $showBaroque<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span>

                <span class="token function">Toggle</span><span class="token punctuation">(</span><span class="token string">"로맨티시즘"</span><span class="token punctuation">,</span> <span class="token literal-property property">isOn</span><span class="token operator">:</span> $showRomanticism<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>결과물은 다음과 같이 보일 것입니다:</p>
<p><img src="@source/docs/Tech/2024-03-22-CreatingViewsinSwiftUIforVisionOS/img/Creating-Views-in-SwiftUI-for-VisionOS_1.png" alt="Creating-Views-in-SwiftUI-for-VisionOS_1"></p>
<p>VStack과 마찬가지로, HStack은 항목들을 가로로 표시하는 데 사용됩니다. 예를 들어, 다음 코드:</p>
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">FreestyleView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> selectedDifficulty<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span>
    <span class="token keyword">let</span> difficulty <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Easy"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Medium"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Hard"</span></span><span class="token punctuation">]</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span>
            <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"난이도 선택"</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>extraLargeTitle<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                <span class="token class-name">HStack</span> <span class="token punctuation">{</span>
                    <span class="token class-name">ForEach</span><span class="token punctuation">(</span>difficulty<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> option <span class="token keyword">in</span>
                        <span class="token class-name">Button</span><span class="token punctuation">(</span>action<span class="token punctuation">:</span> <span class="token punctuation">{</span>
                            <span class="token keyword">self</span><span class="token punctuation">.</span>selectedDifficulty <span class="token operator">=</span> option
                        <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token class-name">Text</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">foregroundColor</span><span class="token punctuation">(</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token comment">// 필요에 따라 너비와 높이 조정</span>
                                <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span>selectedDifficulty <span class="token operator">==</span> option <span class="token operator">?</span> <span class="token class-name">Color</span><span class="token punctuation">.</span>gray<span class="token punctuation">.</span><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token number">0.7</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token class-name">Color</span><span class="token punctuation">.</span>clear<span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
                        <span class="token punctuation">}</span>
                        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 작은 간격</span>
                        <span class="token punctuation">.</span><span class="token function">buttonStyle</span><span class="token punctuation">(</span><span class="token class-name">PlainButtonStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 버튼 스타일 제거</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"시작"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showFreestyleMode<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>selectedDifficulty <span class="token operator">==</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 내용은 다음과 같이 표시됩니다:</p>
<p><img src="@source/docs/Tech/2024-03-22-CreatingViewsinSwiftUIforVisionOS/img/Creating-Views-in-SwiftUI-for-VisionOS_2.png" alt="Creating Views in SwiftUI for VisionOS"></p>
<p>두 경우 모두 여러 옵션을 선택할 수 있습니다. 중요한 점은 버튼을 초기화하는 다양한 방법을 사용하지만 결국에는 동일한 데이터를 나타낸다는 것입니다. 이들은 두 가지 다른 스택으로 캡슐화되어 있어서 서로 다른 방향으로 항목을 표시할 수 있습니다.</p>
<p>ZStack은 항목들을 &quot;레이어링&quot;할 수 있는 특별한 구조입니다. 개인적으로 이 구성 요소에 대한 사용 사례를 아직 찾지 못했지만, 애플 문서에서는 주로 레이어 형식의 아트를 만드는 능력이라고 설명하고 있습니다.</p>
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
<img src="@source/docs/Tech/2024-03-22-CreatingViewsinSwiftUIforVisionOS/img/Creating-Views-in-SwiftUI-for-VisionOS_3.png" />
<p>Navigation Stack</p>
<p>네비게이션 스택은 사용자에게 다른 보기를 표시하는 것을 전환하고 싶을 때 필수적입니다. 이전에 React / React Native를 사용해본 사람들에게는 스택 내비게이터와 매우 유사합니다.</p>
<p>그러나 SwiftUI가 이를 구현하는 방식은 조금 다릅니다. SwiftUI는 더 유연한 접근 방식을 취합니다. 특정 뷰 내에서 네비게이션 스택을 선언하고 불리언 조건에 따라 런타임에서 다른 창 뷰로 열도록 결정할 수 있습니다. 네비게이션 스택은 또한 네비게이션을 위한 &quot;뒤로&quot; 버튼을 암시적으로 제공합니다.</p>
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
<p>이전 코드를 기반으로 한 예제가 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>struct FreestyleView<span class="token operator">:</span> View <span class="token punctuation">{</span>
    @<span class="token function">Environment</span><span class="token punctuation">(</span>\<span class="token punctuation">.</span>openImmersiveSpace<span class="token punctuation">)</span> <span class="token keyword">var</span> openImmersiveSpace
    @<span class="token function">Environment</span><span class="token punctuation">(</span>\<span class="token punctuation">.</span>dismissImmersiveSpace<span class="token punctuation">)</span> <span class="token keyword">var</span> dismissImmersiveSpace

    @State <span class="token keyword">private</span> <span class="token keyword">var</span> showFreestyleMode <span class="token operator">=</span> <span class="token boolean">false</span>
    @State <span class="token keyword">private</span> <span class="token keyword">var</span> freestyleModeShown <span class="token operator">=</span> <span class="token boolean">false</span>
    @State <span class="token keyword">private</span> <span class="token keyword">var</span> <span class="token literal-property property">selectedDifficulty</span><span class="token operator">:</span> String<span class="token operator">?</span>
    <span class="token keyword">let</span> difficulty <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"쉬움"</span><span class="token punctuation">,</span> <span class="token string">"보통"</span><span class="token punctuation">,</span> <span class="token string">"어려움"</span><span class="token punctuation">]</span>

    <span class="token keyword">var</span> <span class="token literal-property property">body</span><span class="token operator">:</span> some View <span class="token punctuation">{</span>
        NavigationStack <span class="token punctuation">{</span> <span class="token comment">// 여기서 사용된 네비게이션 스택</span>
            VStack <span class="token punctuation">{</span>
                <span class="token operator">...</span>
                <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">of</span><span class="token operator">:</span> showFreestyleMode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> _<span class="token punctuation">,</span> newValue <span class="token keyword">in</span>
                Task <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> newValue <span class="token operator">&amp;&amp;</span> selectedDifficulty <span class="token operator">==</span> <span class="token string">"쉬움"</span> <span class="token punctuation">{</span>
                        <span class="token keyword">switch</span> <span class="token keyword">await</span> <span class="token function">openImmersiveSpace</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token string">"EasyMode"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">case</span> <span class="token punctuation">.</span>opened<span class="token operator">:</span>
                            freestyleModeShown <span class="token operator">=</span> <span class="token boolean">true</span>
                        <span class="token keyword">case</span> <span class="token punctuation">.</span>error<span class="token punctuation">,</span> <span class="token punctuation">.</span>userCancelled<span class="token operator">:</span>
                            fallthrough
                        @unknown <span class="token keyword">default</span><span class="token operator">:</span>
                            freestyleModeShown <span class="token operator">=</span> <span class="token boolean">false</span>
                            showFreestyleMode <span class="token operator">=</span> <span class="token boolean">false</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> freestyleModeShown <span class="token punctuation">{</span>
                        <span class="token keyword">await</span> <span class="token function">dismissImmersiveSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        freestyleModeShown <span class="token operator">=</span> <span class="token boolean">false</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 다른 난이도에 대한 변경 트리거에 대한 자세한 정보</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기에서 우리는 네비게이션 스택에 &quot;onChange&quot; 문을 추가했습니다. 이것은 변수인 showFreestyleMode의 변경을 청취하고 선택한 난이도에 따라 지정된 공간을 엽니다.</p>
<p>네비게이션 분할 보기</p>
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
<p>이 컴포넌트는 좀 더 &quot;특별한&quot; 사용 케이스를 위한 것입니다. 현재 뷰 창을 쪼개어 측면 메뉴와 주 창을 가지도록 합니다. 사용자가 측면에서 선택을 할 수 있게 하고, 주 창 내에서 트리거된 어떤 상호 반응이 있도록 하고 싶을 때 이 뷰가 훌륭합니다.</p>
<p>이 효과는 다음과 같습니다:</p>
<p><img src="@source/docs/Tech/2024-03-22-CreatingViewsinSwiftUIforVisionOS/img/Creating-Views-in-SwiftUI-for-VisionOS_4.png" alt="이미지"></p>
<p>해당 코드는 다음과 같습니다:</p>
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
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token class-name">NavigationView</span> <span class="token punctuation">{</span>
    <span class="token comment">// 상태 변수</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>

        <span class="token comment">// 뷰는 음악 사이드 메뉴와 주 컨트롤 메뉴 사이로 분할됩니다</span>
        <span class="token class-name">NavigationSplitView</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span> <span class="token punctuation">{</span>
                <span class="token class-name">ForEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Jazz"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Classic Rock"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Piano"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Opera"</span></span> <span class="token punctuation">]</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
                    <span class="token class-name">ListItemView</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> item<span class="token punctuation">,</span>
                                 isHovered<span class="token punctuation">:</span> hoveredItem <span class="token operator">==</span> item<span class="token punctuation">,</span>
                                 isSelected<span class="token punctuation">:</span> selectedItem <span class="token operator">==</span> item<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">hoverEffect</span><span class="token punctuation">(</span><span class="token punctuation">.</span>automatic<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span>onTapGesture <span class="token punctuation">{</span>
                        musicPlaying <span class="token operator">=</span> <span class="token boolean">true</span>
                        selectedItem <span class="token operator">=</span> item
                        <span class="token keyword">let</span> state <span class="token operator">=</span> musicSelection<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>musicChoice<span class="token punctuation">:</span> selectedItem<span class="token punctuation">)</span>
                        dataModel<span class="token punctuation">.</span><span class="token function">playMusic</span><span class="token punctuation">(</span>music<span class="token punctuation">:</span> state<span class="token punctuation">,</span> currMusicPlaying<span class="token punctuation">:</span> musicPlaying<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span>
                <span class="token class-name">ToolbarItem</span><span class="token punctuation">(</span>placement<span class="token punctuation">:</span> <span class="token punctuation">.</span>topBarLeading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">VStack</span> <span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"음악 라이브러리"</span></span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// 메인 메뉴 내용</span>
        <span class="token punctuation">}</span> detail<span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"벽난로 표시"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showFireplaceView<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> showFireplaceView<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token omit keyword">_</span><span class="token punctuation">,</span> isShowing <span class="token keyword">in</span>
                    <span class="token keyword">if</span> isShowing <span class="token punctuation">{</span>
                        <span class="token function">openWindow</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"FireplaceView"</span></span><span class="token punctuation">)</span>
                        dataModel<span class="token punctuation">.</span><span class="token function">playFireplaceSounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token function">dismissWindow</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"FireplaceView"</span></span><span class="token punctuation">)</span>
                        dataModel<span class="token punctuation">.</span><span class="token function">stopFireplaceSounds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

            <span class="token comment">// 다른 코드 묶음</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>뷰 본문에서 Navigation Split View를 정의했습니다. 그런 다음 툴바 섹션의 일부로 하이라이팅되는 제목이 있는 것을 볼 수 있습니다. 메인 메뉴 콘텐츠는 &quot;detail&quot; 섹션 내에 정의되어 있으며, 여기에는 벽난로가 나타나는 버튼 및 표시되지 않는 기능이 포함되어 있습니다.</p>
<p>뷰를 사용자 정의하는 데 사용할 수 있는 몇 가지 구성 요소에 대해 이야기했습니다. 이것들은 대부분의 시간을 사용하게 될 중요한 구성 요소입니다. 앱을 최대한 활용하기 위해 Vision Pro 앱 내에서 이러한 뷰의 다양한 유형을 활용하여 사용자 인터페이스를 더 매력적이고 직관적으로 만드는 것을 권장드립니다.</p>
</div></template>
