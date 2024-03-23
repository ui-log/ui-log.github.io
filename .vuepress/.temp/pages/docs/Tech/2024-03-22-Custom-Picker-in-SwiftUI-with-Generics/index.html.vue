<template><div><p>우리는 Apple의 구현을 모방한 자체 Picker를 만들 것입니다. 이 Picker는 미리 정의된 모델이 필요하지 않아 더 유연하고 재사용 가능합니다.</p>
<p>이를 위해 우리의 사용자 정의 picker가 특정 요구 사항을 충족하는 모든 유형을 처리할 수 있어야 합니다. 여기서 제네릭이 중요한 역할을 합니다.</p>
<p>첫 번째로 구현할 것은 기본 Picker를 구현하여 해당 구현에 대한 힌트를 얻을 수 있는지 확인하는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">enum</span> <span class="token literal-property property">Fruit</span><span class="token operator">:</span> String<span class="token punctuation">,</span> CaseIterable<span class="token punctuation">,</span> Identifiable <span class="token punctuation">{</span>
    <span class="token keyword">case</span> apple<span class="token punctuation">,</span> banana<span class="token punctuation">,</span> mango<span class="token punctuation">,</span> orange<span class="token punctuation">,</span> strawberry<span class="token punctuation">,</span> grape
    <span class="token keyword">var</span> <span class="token literal-property property">id</span><span class="token operator">:</span> String <span class="token punctuation">{</span> self<span class="token punctuation">.</span>rawValue <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

struct ContentView<span class="token operator">:</span> View <span class="token punctuation">{</span>

    @State <span class="token keyword">var</span> <span class="token literal-property property">selectedFruit</span><span class="token operator">:</span> Fruit<span class="token operator">?</span>

    <span class="token keyword">var</span> <span class="token literal-property property">body</span><span class="token operator">:</span> some View <span class="token punctuation">{</span>
        VStack <span class="token punctuation">{</span>
            <span class="token function">Picker</span><span class="token punctuation">(</span><span class="token string">"선택"</span><span class="token punctuation">,</span> <span class="token literal-property property">selection</span><span class="token operator">:</span> $selectedFruit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">ForEach</span><span class="token punctuation">(</span><span class="token parameter">Fruit<span class="token punctuation">.</span>allCases</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> fruit <span class="token keyword">in</span>
                    <span class="token function">Text</span><span class="token punctuation">(</span>fruit<span class="token punctuation">.</span>rawValue<span class="token punctuation">.</span>capitalized<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">tag</span><span class="token punctuation">(</span>fruit <span class="token keyword">as</span> Fruit<span class="token operator">?</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">.</span><span class="token function">pickerStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>inline<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
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
<p>피커에 대한 빠른 도움은 초기화자에 대한 정보를 제공합니다.</p>
<p><img src="@source/docs/Tech/2024-03-22-Custom-Picker-in-SwiftUI-with-Generics/img/Custom-Picker-in-SwiftUI-with-Generics_0.png" alt="image"></p>
<p>피커 초기화자는 현재 선택 사항을 나타내는 정의되지 않은 SelectionValue 유형과 클로저를 취하는 Content 또 다른 유형을 사용합니다. 나중에 구조체 정의에서 이러한 정의되지 않은 유형이 일부 제약 사항을 받는 것을 볼 수 있습니다. SelectionValue는 Hashable을 준수해야 하며 Content는 View를 준수해야 합니다. 이는 Picker View가 내부적으로 이러한 유형을 해당 프로토콜을 준수하는 유형으로 처리할 것을 의미합니다.</p>
<p>자체 CustomPicker를 위한 구조체 정의를 만들어 봅시다.</p>
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
<p><img src="@source/docs/Tech/2024-03-22-Custom-Picker-in-SwiftUI-with-Generics/img/Custom-Picker-in-SwiftUI-with-Generics_1.png" alt="Custom Picker in SwiftUI with Generics - Image 1"></p>
<p>여기서 우리는 기본적으로 Content가 RandomAccessCollection을 준수하는 모든 유형일 수 있다고 말하고, SelectionValue가 Content의 요소와 동일한 유형이라고 말합니다. 그리고 또한 CustomPicker에 대해 Content.Element나 SelectionValue가 Equatable &amp; Identifiable을 준수해야 한다는 요구 사항을 설정합니다. 이제 이 유형이 Identifiable이므로 ID 속성이 있을 것이라는 것을 알고 있습니다. 또한 Content.Element.ID가 String과 같아야 한다는 새로운 제약을 정의할 수 있습니다.</p>
<p>이 시점에서 우리는 View를 구축하기 시작할 수 있습니다. 여기에 내부 속성을 선언하는 방법입니다.</p>
<p><img src="@source/docs/Tech/2024-03-22-Custom-Picker-in-SwiftUI-with-Generics/img/Custom-Picker-in-SwiftUI-with-Generics_2.png" alt="Custom Picker in SwiftUI with Generics - Image 2"></p>
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
<p>그리고 명심해 주세요, SelectionValue와 Content는 위에서 선언된 속성을 갖는 제네릭 타입이라는 것을 알고 있습니다. 그래서 ForEach와 items를 함께 사용할 수 있다는 것을 알고 있습니다. 왜냐하면 RandomAccessCollection을 준수하기 때문이죠. 그리고 선택한 selection.ID는 String이거나 nil일 것이라는 것도 알고 있습니다.</p>
<p>이제 우리가 원하는 대로 View를 구성해보겠습니다. 접근 방식은 꽤 간단합니다.</p>
<ul>
<li>초기 텍스트가 &quot;Select&quot;로 설정된 버튼 또는 원하는 어떤 뷰 하나, 이 뷰의 상태를 변경하는 @State var isPicking: Bool을 가집니다.</li>
<li>이 버튼 바로 아래에 표시되는 오버레이</li>
<li>전체 View에 zIndex를 설정하여 오버레이가 그려지면 현재 보기의 다른 요소들 위에 표시되도록 합니다.</li>
</ul>
<p>이제 항상 연습하다보니 이렇게 만들었습니다. 디자인에 따라, Petyka의 멋진 폰트를 사용하여 극적이고 레트로한 느낌으로 선택했습니다. 사용자 정의 색상 세트를 사용했고 몇 가지 애니메이션도 도입했습니다.</p>
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
<p>Picker는 iOS와 macOS에서 모두 작동합니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:634/1*6gTUUqpCaYyJXviQ_OpsbA.gif" alt="image"></p>
<p><img src="https://miro.medium.com/v2/resize:fit:634/1*CWPtkjEjsgMEnMeg2mkD1w.gif" alt="image"></p>
<h2 id="swiftui-코드" tabindex="-1"><a class="header-anchor" href="#swiftui-코드" aria-hidden="true">#</a> SwiftUI 코드</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 선택 버튼-선택된 항목</span>
        HStack <span class="token punctuation">{</span>
            <span class="token function">Text</span><span class="token punctuation">(</span>selection<span class="token operator">?.</span>id<span class="token punctuation">.</span>capitalized <span class="token operator">??</span> <span class="token string">"선택"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">lineLimit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">minimumScaleFactor</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">)</span>
            <span class="token function">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">">"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">rotationEffect</span><span class="token punctuation">(</span>isPicking <span class="token operator">?</span> <span class="token function">Angle</span><span class="token punctuation">(</span>degrees<span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">Angle</span><span class="token punctuation">(</span>degrees<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">90</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 피커</span>
        <span class="token punctuation">.</span><span class="token function">overlay</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">alignment</span><span class="token operator">:</span> <span class="token punctuation">.</span>topLeading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            VStack <span class="token punctuation">{</span>
                <span class="token keyword">if</span> isPicking <span class="token punctuation">{</span>
                    <span class="token function">Spacer</span><span class="token punctuation">(</span>minLength<span class="token operator">:</span> buttonHeight <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span>

                    ScrollView <span class="token punctuation">{</span>
                        <span class="token function">VStack</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token function">ForEach</span><span class="token punctuation">(</span><span class="token parameter"><span class="token function">items</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>

                                <span class="token function">Divider</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                                Button <span class="token punctuation">{</span>

                                    selection <span class="token operator">=</span> item
                                    isPicking<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

                                <span class="token punctuation">}</span> label<span class="token operator">:</span> <span class="token punctuation">{</span>

                                    <span class="token function">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">.</span>capitalized<span class="token punctuation">)</span>
                                        <span class="token punctuation">.</span><span class="token function">lineLimit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
                                        <span class="token punctuation">.</span><span class="token function">minimumScaleFactor</span><span class="token punctuation">(</span><span class="token number">0.7</span><span class="token punctuation">)</span>
                                        <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>height<span class="token operator">:</span> buttonHeight<span class="token punctuation">)</span>
                                        <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>maxWidth<span class="token operator">:</span> <span class="token punctuation">.</span>infinity<span class="token punctuation">,</span> <span class="token literal-property property">alignment</span><span class="token operator">:</span> <span class="token punctuation">.</span>center<span class="token punctuation">)</span>
                                        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>horizontal<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
                                        <span class="token punctuation">.</span>background <span class="token punctuation">{</span>
                                            <span class="token function">RoundedRectangle</span><span class="token punctuation">(</span>cornerRadius<span class="token operator">:</span> cornerRadius<span class="token punctuation">)</span>
                                                <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>hoveredItem <span class="token operator">==</span> item <span class="token operator">?</span> Color<span class="token punctuation">.</span>accentColor<span class="token punctuation">.</span><span class="token function">opacity</span><span class="token punctuation">(</span><span class="token number">0.8</span><span class="token punctuation">)</span> <span class="token operator">:</span> Color<span class="token punctuation">.</span>clear<span class="token punctuation">)</span>
                                                <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>horizontal<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
                                                <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>bottom<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
                                                <span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span>y<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">)</span>
                                        <span class="token punctuation">}</span>
                                        <span class="token punctuation">.</span>onHover <span class="token punctuation">{</span> isHovered <span class="token keyword">in</span>
                                            <span class="token keyword">if</span> isHovered <span class="token punctuation">{</span>
                                                hoveredItem <span class="token operator">=</span> item
                                            <span class="token punctuation">}</span>
                                        <span class="token punctuation">}</span>
                                <span class="token punctuation">}</span>
                                <span class="token punctuation">.</span><span class="token function">buttonStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>plain<span class="token punctuation">)</span>

                                <span class="token function">Divider</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                        <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>maxWidth<span class="token operator">:</span> <span class="token punctuation">.</span>infinity<span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                    <span class="token punctuation">.</span><span class="token function">scrollIndicators</span><span class="token punctuation">(</span><span class="token punctuation">.</span>never<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>height<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token function">Color</span><span class="token punctuation">(</span><span class="token string">"PickerColor"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">clipShape</span><span class="token punctuation">(</span><span class="token function">RoundedRectangle</span><span class="token punctuation">(</span>cornerRadius<span class="token operator">:</span> cornerRadius<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">overlay</span><span class="token punctuation">(</span>
                        <span class="token function">RoundedRectangle</span><span class="token punctuation">(</span>cornerRadius<span class="token operator">:</span> cornerRadius<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">stroke</span><span class="token punctuation">(</span>Color<span class="token punctuation">.</span>primary<span class="token punctuation">,</span> <span class="token literal-property property">lineWidth</span><span class="token operator">:</span> <span class="token number">2.2</span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">scale</span><span class="token punctuation">(</span>scale<span class="token operator">:</span> <span class="token number">0.8</span><span class="token punctuation">,</span> <span class="token literal-property property">anchor</span><span class="token operator">:</span> <span class="token punctuation">.</span>top<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">combined</span><span class="token punctuation">(</span><span class="token keyword">with</span><span class="token operator">:</span> <span class="token punctuation">.</span>opacity<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">combined</span><span class="token punctuation">(</span><span class="token keyword">with</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span>y<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, <code v-pre>Fruit</code> enum의 모든 케이스를 제공해서 바인딩만 지정하여 <code v-pre>CustomPicker</code>를 초기화합니다. 얼마나 간단한지 확인해보세요!</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">CustomPicker</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">selection</span><span class="token operator">:</span> $selectedFruit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                Fruit<span class="token punctuation">.</span>allCases
            <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Tech/2024-03-22-Custom-Picker-in-SwiftUI-with-Generics/img/Custom-Picker-in-SwiftUI-with-Generics_5.png" />
<p>저는 전체 Xcode 프로젝트를 깃허브에 업로드했어요. 마음껏 사용해보세요.</p>
</div></template>
