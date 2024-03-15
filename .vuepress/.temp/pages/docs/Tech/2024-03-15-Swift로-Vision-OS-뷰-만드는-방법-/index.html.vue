<template><div><h1 id="swift로-vision-os-뷰-만드는-방법" tabindex="-1"><a class="header-anchor" href="#swift로-vision-os-뷰-만드는-방법" aria-hidden="true">#</a> Swift로 Vision OS 뷰 만드는 방법</h1>
<p>VisionOS 앱에 사용할 SwiftUI 뷰를 만드는 간단한 글입니다.</p>
<img src="@source/docs/Tech/2024-03-15-Swift로-Vision-OS-뷰-만드는-방법-/img/Creating-Views-in-SwiftUI-for-VisionOS_0.png" />
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
<p>VisionOS는 SwiftUI를 기반으로 구축되었기 때문에, 우리는 Vision Pro 앱을 탐색하기 위해 동일한 기술을 활용합니다.</p>
<p>이 기사에서는 내비게이션 및 데이터 표시를 쉽게 만들기 위해 Vision Pro 앱에 추가할 수 있는 다양한 뷰 및 구성 요소를 살펴보겠습니다. 또한 시뮬레이터에서의 모습과 주어진 작업에 적합한 적절한 도구 선택에 대해 설명하겠습니다.</p>
<p>탐색할 요소 중 일부는 다음과 같습니다:</p>
<ul>
<li>VStack, HStack 및 ZStack</li>
<li>NavigationStack</li>
<li>NavigationSplitView</li>
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
<p>각각에 대한 예제가 포함되어 있으므로 여러 사용 사례를 볼 수 있습니다.</p>
<p>VStack, HStack 및 ZStack</p>
<p>SwiftUI에서는 (V, H, Z)-Stacks을 사용하여 항목을 다양한 사전 정의된 방식으로 정렬하여 사용자에게 제공할 수 있습니다. 스택의 다른 글자는 항목이 나열되는 방향을 나타냅니다. 예를 들어 V는 수직을 나타내며, 항목은 위에서 아래로 나열됩니다. 마찬가지로 H 및 Z 스택은 각각 왼쪽에서 오른쪽으로 및 배경에서 전경으로 항목을 나열합니다.</p>
<p>Vision Pro의 경우, 이러한 동작은 정확히 동일하지만 사용 사례가 변경됩니다. 예를 들어 이제 이러한 스택은 항목 선택에 사용할 수 있습니다. 스택의 각 항목은 클릭시 나타날 수 있는 특정 3D 자산에 해당할 수 있습니다.</p>
<p>예를 들어, 버튼 목록을 표시하기 위한 뷰의 일부로 이 VStack을 사용할 수 있습니다:</p>
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
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">StoryView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token comment">// 다수의 부울 상태 변수</span>

    <span class="token keyword">var</span> body <span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span>
            <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"다양한 미술 시대를 통해 모험을 떠나보세요!"</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
                <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"선사 시대"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showPrehistoric<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>

                <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"추상주의"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showAbstract<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>

                <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"팝 아트"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showPopArt<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>

                <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"초현실주의"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showSurrealism<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span>

                <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"바로크"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showBaroque<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">4</span><span class="token punctuation">)</span>

                <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"로맨티시즘"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showRomanticism<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>dataModel<span class="token punctuation">.</span>stage <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과는 다음과 같습니다:</p>
<img src="@source/docs/Tech/2024-03-15-Swift로-Vision-OS-뷰-만드는-방법-/img/Creating-Views-in-SwiftUI-for-VisionOS_1.png" />
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
<p>VStack과 마찬가지로, HStack은 항목을 수평으로 표시하는 데 사용됩니다. 예를 들어, 다음 코드:</p>
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">FreestyleView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> selectedDifficulty<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span>
    <span class="token keyword">let</span> difficulty <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"쉬움"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"중간"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"어려움"</span></span><span class="token punctuation">]</span>

    <span class="token keyword">var</span> body <span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
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
                        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 더 작은 padding</span>
                        <span class="token punctuation">.</span><span class="token function">buttonStyle</span><span class="token punctuation">(</span><span class="token class-name">PlainButtonStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 버튼 스타일링 제거</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"시작"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showFreestyleMode<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">toggleStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>button<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">disabled</span><span class="token punctuation">(</span>selectedDifficulty <span class="token operator">==</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>대략 다음과 같이 표시됩니다:</p>
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
<img src="@source/docs/Tech/2024-03-15-Swift로-Vision-OS-뷰-만드는-방법-/img/Creating-Views-in-SwiftUI-for-VisionOS_2.png" />
<p>두 경우 모두 여러 옵션을 선택할 수 있습니다. 여기서 중요한 점은 버튼을 초기화하는 다른 방법을 사용하지만 결국 같은 데이터를 나타낸다는 것입니다. 이들은 서로 다른 스택에 의해 캡슐화되어 있으므로 다른 방향으로 항목을 표시할 수 있습니다.</p>
<p>ZStack은 항목을 &quot;레이어링&quot;할 수 있도록 특별합니다. 개인적으로 이 구성 요소에 대한 사용 사례를 아직 찾지 못했지만, Apple 문서에서는 주로 계층화된 아트를 만드는 기능을 강조합니다.</p>
<img src="@source/docs/Tech/2024-03-15-Swift로-Vision-OS-뷰-만드는-방법-/img/Creating-Views-in-SwiftUI-for-VisionOS_3.png" />
<p>Navigation Stack</p>
<p>네비게이션 스택은 사용자에게 다른 뷰를 표시하기 위해 토글할 수 있는 경우에 필수적입니다. React / React Native를 사용해본 사람들에게는 스택 네비게이</p>
<p>터와 매우 유사한 개념입니다.</p>
<p>그러나 SwiftUI가 구현하는 방식은 조금 다릅니다. SwiftUI는 더 유연한 접근 방식을 취합니다. 특정 뷰 내에서 네비게이션 스택을 선언하고, 런타임 시에 조건에 따라 다른 창 뷰로 열 수 있습니다. 네비게이션 스택은 네비게이션을 위한 &quot;뒤로&quot; 버튼도 암시적으로 제공합니다.</p>
<p>이전 코드를 기반으로한 예시를 살펴봅시다:</p>
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">FreestyleView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@Environment</span><span class="token punctuation">(</span><span class="token punctuation">\</span><span class="token punctuation">.</span>openImmersiveSpace<span class="token punctuation">)</span> <span class="token keyword">var</span> openImmersiveSpace
    <span class="token attribute atrule">@Environment</span><span class="token punctuation">(</span><span class="token punctuation">\</span><span class="token punctuation">.</span>dismissImmersiveSpace<span class="token punctuation">)</span> <span class="token keyword">var</span> dismissImmersiveSpace

    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> showFreestyleMode <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> freestyleModeShown <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> selectedDifficulty<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span>
    <span class="token keyword">let</span> difficulty <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"쉬움"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"중간"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"어려움"</span></span><span class="token punctuation">]</span>

    <span class="token keyword">var</span> body <span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">NavigationStack</span> <span class="token punctuation">{</span> <span class="token comment">// navigation stack used here</span>
            <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
                <span class="token operator">...</span>
                <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

            <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">onChange</span><span class="token punctuation">(</span>of<span class="token punctuation">:</span> showFreestyleMode<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token omit keyword">_</span><span class="token punctuation">,</span> newValue <span class="token keyword">in</span>
                <span class="token class-name">Task</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> newValue <span class="token operator">&amp;&amp;</span> selectedDifficulty <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"쉬움"</span></span> <span class="token punctuation">{</span>
                        <span class="token keyword">switch</span> <span class="token keyword">await</span> <span class="token function">openImmersiveSpace</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"EasyMode"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">case</span> <span class="token punctuation">.</span>opened<span class="token punctuation">:</span>
                            freestyleModeShown <span class="token operator">=</span> <span class="token boolean">true</span>
                        <span class="token keyword">case</span> <span class="token punctuation">.</span>error<span class="token punctuation">,</span> <span class="token punctuation">.</span>userCancelled<span class="token punctuation">:</span>
                            <span class="token keyword">fallthrough</span>
                        <span class="token attribute atrule">@unknown</span> <span class="token keyword">default</span><span class="token punctuation">:</span>
                            freestyleModeShown <span class="token operator">=</span> <span class="token boolean">false</span>
                            showFreestyleMode <span class="token operator">=</span> <span class="token boolean">false</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> freestyleModeShown <span class="token punctuation">{</span>
                        <span class="token keyword">await</span> <span class="token function">dismissImmersiveSpace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        freestyleModeShown <span class="token operator">=</span> <span class="token boolean">false</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// other difficulties에 대한 변경 트리거에 대한 내용</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서는 &quot;showFreestyleMode&quot; 변수의 변경을 듣는 &quot;.onChange&quot; 문을 네비게이션 스택에 추가했습니다. 그런 다음 선택한 난이도에 따라 특정 공간을 엽니다.</p>
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
<p>Navigation Split View</p>
<p>이는 좀 더 &quot;특수한&quot; 사용 사례를 위한 구성 요소입니다. 이는 현재 보기 창을 사이드 메뉴와 주요 보기 창으로 &quot;구획화&quot;합니다. 이 뷰는 사용자가 측면에서 선택하고 주요 창에서 해당하는 반응을 트리거하도록 원할 때 훌륭합니다.</p>
<p>효과는 다음과 같습니다:</p>
<img src="@source/docs/Tech/2024-03-15-Swift로-Vision-OS-뷰-만드는-방법-/img/Creating-Views-in-SwiftUI-for-VisionOS_4.png" />
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
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token comment">// state variables</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>

        <span class="token comment">// View is split between music side menu and main control menu</span>
        <span class="token class-name">NavigationSplitView</span> <span class="token punctuation">{</span>
            <span class="token class-name">List</span> <span class="token punctuation">{</span>
                <span class="token class-name">ForEach</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"재즈"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"클래식 록"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"피아노"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"오페라"</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
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

            <span class="token comment">// Main menu content</span>
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

            <span class="token comment">// other code</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 우리는 뷰 본문에서 Navigation Split View를 정의했습니다. 그런 다음 툴바 섹션에서 그것이 어떤 부분에 속하는지 강조하는 제목을 가졌습니다. 주 메뉴 내용은 &quot;detail&quot; 섹션에 정의되어 있으며, 여기에는 벽난로를 나타내는 버튼과 표시되지 않은 기타 기능이 포함됩니다.</p>
<p>당신의 뷰를 사용자 정의하기 위해 사용할 수 있는 몇 가지 구성 요소에 대해 이야기했습니다. 이러한 구성 요소는 대부분의 시간 동안 사용하게 될 주요 구성 요소입니다. 앱을 최대한 활용하려면 Vision Pro 앱 내에서 이러한 뷰의 여러 가지 변형을 사용하여 인터페이스를 사용자에게 더 매력적이고 직관적으로 만드는 것이 좋습니다.</p>
<p>SwiftUI에서 사용할 수 있는 다양한 구성 요소가 많이 있으며, VisionOS 내에서 Vision Pro 앱을 구축하기 위해 이러한 구성 요소를 어떻게 사용할 수 있는지 보여주는 기사를 작성할 예정입니다.</p>
</div></template>
