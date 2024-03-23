<template><div><p>Apple은 방금 첫 번째 공간 컴퓨터인 VisionPro를 발표했어요! 분명히 벌써 소문을 들었을 거에요 — 어디에서든 대단히 화제가 되고 있었죠! 하지만 최고의 부분은 뭘까요? 개발자들 입장에서 이것은 정말 혁신적인 변화죠! 마치 새로운 가능성의 세계가 열리는 듯해요! 새로운 VisionPro를 위해 앱을 개발할 수 있는 새로운 VisionOS SDK를 포함한 Xcode 15와 함께 우리는 곧바로 앱을 만들 수 있어요. 함께 새로운 모험을 시작하며 VisionOS를 위한 음악 앱을 만들어봅시다.</p>
<p><img src="@source/docs/Tech/2024-03-22-Unleash-Your-Creativity-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!/img/Unleash-Your-Creativity:-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!_0.png" alt="이미지"></p>
<h2 id="시작해봐요" tabindex="-1"><a class="header-anchor" href="#시작해봐요" aria-hidden="true">#</a> 시작해봐요</h2>
<p>VisionOS를 위한 앱을 만들기 위해 필요한 첫 번째 것은 Xcode 15에요. 이 글을 쓰는 지금, Xcode 15의 베타 버전을 다운로드할 수 있어요. 미래에서 이 글을 보고 있다면, 아마도 이미 Xcode 15 이상의 새 버전이 있을 거예요. 아직 다운로드하지 않았다면, 다운로드하고 프로그램을 열어주세요. 새 프로젝트를 만들기를 클릭해주세요. 그리고 VisionOS 탭에 있는지 확인해주세요. 그 후에는 Xcode에서 다른 프로젝트를 만드는 것과 동일한 단계를 따르시면 됩니다.</p>
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
<img src="@source/docs/Tech/2024-03-22-Unleash-Your-Creativity-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!/img/Unleash-Your-Creativity:-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!_1.png" />
<p>VisionPro용 첫 번째 앱을 만든 것을 축하해요! 이제 이 샘플 앱을 우리가 원하는 앱으로 바꿔볼까요? 다음 작업은 ContentView의 기존 코드를 아래의 새 코드로 변경하는 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> SwiftUI

struct ContentView<span class="token operator">:</span> View <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token literal-property property">body</span><span class="token operator">:</span> some View <span class="token punctuation">{</span>
        NavigationSplitView <span class="token punctuation">{</span>
            <span class="token comment">// TODO: 사이드 메뉴</span>
        <span class="token punctuation">}</span> detail<span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">// TODO: 앨범 보기</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

#미리보기 <span class="token punctuation">{</span>
    <span class="token function">ContentView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="사이드-메뉴" tabindex="-1"><a class="header-anchor" href="#사이드-메뉴" aria-hidden="true">#</a> 사이드 메뉴</h2>
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
<p>지금은 빈 화면만 보여요. 먼저 사이드 메뉴를 시작해볼까요? 우선, 메뉴 모델을 만들어야 해요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Foundation

struct SideMenuItem<span class="token operator">:</span> Identifiable<span class="token punctuation">,</span> Hashable <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token constant">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> <span class="token literal-property property">name</span><span class="token operator">:</span> String
    <span class="token keyword">var</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> String
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token literal-property property">sideMenuItems</span><span class="token operator">:</span> <span class="token punctuation">[</span>SideMenuItem<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token function">SideMenuItem</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">"최근 추가된 항목"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"clock"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SideMenuItem</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">"아티스트"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"music.mic"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SideMenuItem</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">"앨범"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"square.stack"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SideMenuItem</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">"노래"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"music.note"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">SideMenuItem</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token string">"당신을 위한 리스트"</span><span class="token punctuation">,</span> <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"person.crop.square"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 우리는 사이드 메뉴 모델을 만들었고 메뉴를 담는 목록을 생성했어요. 이제 사이드 메뉴를 만들어볼게요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> SwiftUI

struct SideMenuView<span class="token operator">:</span> View <span class="token punctuation">{</span>
    @State <span class="token keyword">private</span> <span class="token keyword">var</span> <span class="token literal-property property">selectedMenu</span><span class="token operator">:</span> SideMenuItem<span class="token operator">?</span> <span class="token operator">=</span> sideMenuItems<span class="token punctuation">.</span>first<span class="token operator">!</span>
    <span class="token keyword">var</span> <span class="token literal-property property">body</span><span class="token operator">:</span> some View <span class="token punctuation">{</span>

        <span class="token function">List</span><span class="token punctuation">(</span><span class="token parameter">sideMenuItems</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
            <span class="token function">NavigationLink</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">destination</span><span class="token operator">:</span> <span class="token function">EmptyView</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">Label</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token literal-property property">systemImage</span><span class="token operator">:</span> item<span class="token punctuation">.</span>icon<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>primary<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">navigationDestination</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">for</span><span class="token operator">:</span> SideMenuItem<span class="token punctuation">.</span>self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
            <span class="token comment">// TODO: 앨범 보기</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span>
            <span class="token function">ToolbarItemGroup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">placement</span><span class="token operator">:</span> <span class="token punctuation">.</span>topBarLeading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">VStack</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">alignment</span><span class="token operator">:</span> <span class="token punctuation">.</span>leading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"라이브러리"</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span>
                    <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"모든 음악"</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>tertiary<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>all<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            ToolbarItem <span class="token punctuation">{</span>
                Button <span class="token punctuation">{</span><span class="token punctuation">}</span> label<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function">Image</span><span class="token punctuation">(</span>systemName<span class="token operator">:</span> <span class="token string">"ellipsis"</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>

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
<p>마지막으로 해야 할 일은 <code v-pre>TODO: Side Menu</code>를 <code v-pre>SideMenuView()</code>로 교체하는 것이며, 그럼 우리의 사이드 메뉴 작업이 완료됩니다.</p>
<img src="@source/docs/Tech/2024-03-22-Unleash-Your-Creativity-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!/img/Unleash-Your-Creativity:-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!_2.png" />
<h2 id="앨범-뷰" tabindex="-1"><a class="header-anchor" href="#앨범-뷰" aria-hidden="true">#</a> 앨범 뷰</h2>
<p>우리는 사이드 메뉴를 마무리했고, 멋지게 보이네요! 이제 다음 큰 파트로 넘어가서 <code v-pre>AlbumsView</code>를 만들어봅시다. 이 뷰는 상단에 검색 필드를 가지고 있으며, 앨범 목록이 표시됩니다. 음악이 재생 중이라면 하단에 음악 컨트롤러가 나타납니다. 이제 <code v-pre>AlbumsView</code>를 생성해봅시다.</p>
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
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">AlbumsView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> searchText<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">""</span></span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">ScrollView</span> <span class="token punctuation">{</span>

            <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"앨범에서 검색"</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $searchText<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">textFieldStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>roundedBorder<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>bottom<span class="token punctuation">)</span>

            <span class="token comment">// TODO: 앨범 그리드</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>horizontal<span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span>
            <span class="token class-name">ToolbarItemGroup</span><span class="token punctuation">(</span>placement<span class="token punctuation">:</span> <span class="token punctuation">.</span>topBarLeading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">VStack</span> <span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"앨범"</span></span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span>
                    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"48 곡"</span></span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>tertiary<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>all<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">ToolbarItem</span> <span class="token punctuation">{</span>
                <span class="token class-name">Button</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> label<span class="token punctuation">:</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"line.3.horizontal.decrease"</span></span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token comment">// TODO: 미디어 컨트롤러</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-22-Unleash-Your-Creativity-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!/img/Unleash-Your-Creativity:-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!_3.png" />
<p>앨범 뷰에는 검색 필드와 툴바 아이템이 있습니다. 이제 앨범을 추가할 준비가 되었습니다. 하지만 그 전에 앨범 모델을 만들어야 합니다.</p>
<div class="language-swift ext-swift line-numbers-mode"><pre v-pre class="language-swift"><code><span class="token keyword">import</span> <span class="token class-name">Foundation</span>

<span class="token keyword">struct</span> <span class="token class-name">Album</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> image<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> subTitle<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> albums<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Album</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name">Album</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://i.postimg.cc/ZvLtPzmB/Rectangle-4.png"</span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Sounds of Summer"</span></span><span class="token punctuation">,</span> subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"The Beach Boys"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Album</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://i.postimg.cc/nMKJfBmF/Rectangle-5.png"</span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Overexposed"</span></span><span class="token punctuation">,</span> subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Maroon 5"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Album</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://i.postimg.cc/XpQ6pWxt/Rectangle-6.png"</span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Dreamland"</span></span><span class="token punctuation">,</span> subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Glass Animals"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Album</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://i.postimg.cc/G4twDf5t/Rectangle-7.png"</span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Modern Love (Chennai)"</span></span><span class="token punctuation">,</span> subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Yuvan Shankar Raja, Ila.."</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Album</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://i.postimg.cc/9RZjMqNB/Rectangle-3.png"</span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Formula 1 Theme"</span></span><span class="token punctuation">,</span> subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Brian Tyler"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Album</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://i.postimg.cc/RNMzSh1c/Rectangle-8.png"</span></span><span class="token punctuation">,</span> title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Ved"</span></span><span class="token punctuation">,</span> subTitle<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Ritviz"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
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
<p>우리는 사이드 메뉴에 대해 한 것과 비슷한 작업을 했어요. 변수 이름 columns을 만들어요. 이 변수에 그리드에 원하는 레이아웃을 설명할 거에요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>GridItem<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token function">GridItem</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">adaptive</span><span class="token punctuation">(</span>minimum<span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token literal-property property">maximum</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>TODO: 앨범 그리드를 아래 코드로 대체하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">LazyVGrid</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">columns</span><span class="token operator">:</span> columns<span class="token punctuation">,</span> <span class="token literal-property property">spacing</span><span class="token operator">:</span> <span class="token number">24</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">ForEach</span><span class="token punctuation">(</span><span class="token parameter">albums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> album <span class="token keyword">in</span>
        <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">VStack</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">alignment</span><span class="token operator">:</span> <span class="token punctuation">.</span>leading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">AsyncImage</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token constant">URL</span><span class="token punctuation">(</span>string<span class="token operator">:</span> album<span class="token punctuation">.</span>image<span class="token punctuation">)</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> image <span class="token keyword">in</span>
                    image<span class="token punctuation">.</span><span class="token function">resizable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span> placeholder<span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>tertiary<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">aspectRatio</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">contentMode</span><span class="token operator">:</span> <span class="token punctuation">.</span>fill<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">scaledToFill</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>

                <span class="token function">Text</span><span class="token punctuation">(</span>album<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">lineLimit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
                <span class="token function">Text</span><span class="token punctuation">(</span>album<span class="token punctuation">.</span>subTitle<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>tertiary<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">lineLimit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">.</span><span class="token function">hoverEffect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">buttonStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>plain<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>ContentView로 돌아가서 TODO: Albums View를 AlbumsView()로 교체해주세요.</p>
<h2 id="미디어-컨트롤러" tabindex="-1"><a class="header-anchor" href="#미디어-컨트롤러" aria-hidden="true">#</a> 미디어 컨트롤러</h2>
<img src="@source/docs/Tech/2024-03-22-Unleash-Your-Creativity-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!/img/Unleash-Your-Creativity:-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!_5.png" />
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
<p>VisionOS에서는 툴바를 사용하여 하단 중앙에 부유하게 나타낼 수 있습니다. 이를 위해 ToolbarItemGroup 배치를 bottomOrnament로 설정해야 합니다. 아래 코드로 TODO: 미디어 컨트롤러를 교체하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>toolbar <span class="token punctuation">{</span>
    <span class="token function">ToolbarItemGroup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">placement</span><span class="token operator">:</span> <span class="token punctuation">.</span>bottomOrnament</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        HStack <span class="token punctuation">{</span>
            <span class="token function">Button</span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">Image</span><span class="token punctuation">(</span>systemName<span class="token operator">:</span> <span class="token string">"backward.fill"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token function">Button</span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">Image</span><span class="token punctuation">(</span>systemName<span class="token operator">:</span> <span class="token string">"pause.fill"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token function">Button</span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">Image</span><span class="token punctuation">(</span>systemName<span class="token operator">:</span> <span class="token string">"forward.fill"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token comment">// TODO: 재생 중인 음악 뷰</span>

            <span class="token function">Button</span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">Image</span><span class="token punctuation">(</span>systemName<span class="token operator">:</span> <span class="token string">"quote.bubble"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token function">Button</span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">Image</span><span class="token punctuation">(</span>systemName<span class="token operator">:</span> <span class="token string">"list.bullet"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>

            <span class="token function">Button</span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">Image</span><span class="token punctuation">(</span>systemName<span class="token operator">:</span> <span class="token string">"speaker.wave.3.fill"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>vertical<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PlayingSongCardView를 생성해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>struct PlayingSongCardView<span class="token operator">:</span> View <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token literal-property property">body</span><span class="token operator">:</span> some View <span class="token punctuation">{</span>
        HStack <span class="token punctuation">{</span>
            <span class="token function">AsyncImage</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token constant">URL</span><span class="token punctuation">(</span>string<span class="token operator">:</span> <span class="token string">"https://i.postimg.cc/ZvLtPzmB/Rectangle-4.png"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> image <span class="token keyword">in</span>
                image<span class="token punctuation">.</span><span class="token function">resizable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> placeholder<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>tertiary<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">49</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>

            <span class="token function">VStack</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">alignment</span><span class="token operator">:</span> <span class="token punctuation">.</span>leading</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"Kokomo"</span><span class="token punctuation">)</span>
                <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"The Beach Boys"</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>caption2<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">foregroundStyle</span><span class="token punctuation">(</span><span class="token punctuation">.</span>tertiary<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span> <span class="token literal-property property">alignment</span><span class="token operator">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span>

            <span class="token function">Button</span><span class="token punctuation">(</span>action<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">Image</span><span class="token punctuation">(</span>systemName<span class="token operator">:</span> <span class="token string">"ellipsis"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">buttonBorderShape</span><span class="token punctuation">(</span><span class="token punctuation">.</span>circle<span class="token punctuation">)</span>

        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">.</span>all<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token punctuation">.</span>regularMaterial<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token operator">:</span> <span class="token punctuation">.</span><span class="token function">rect</span><span class="token punctuation">(</span>cornerRadius<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>지금 TODO: Playing Song View를 PlayingSongCardView()로 교체해주세요.</p>
<p><img src="@source/docs/Tech/2024-03-22-Unleash-Your-Creativity-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!/img/Unleash-Your-Creativity:-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!_6.png" alt="이미지"></p>
<h2 id="탭-바" tabindex="-1"><a class="header-anchor" href="#탭-바" aria-hidden="true">#</a> 탭 바</h2>
<p>마지막으로 탭 바를 추가하겠습니다. 이는 VisionOS에서 창의 leading 쪽에 고정된 위치에 떠 있는 수직 탭 바입니다. ContentView에서 NavigationSplitView를 TabView로 감싸세요. 그런 다음 세부 사항에 tabItem을 추가하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>struct ContentView<span class="token operator">:</span> View <span class="token punctuation">{</span>
    <span class="token keyword">var</span> <span class="token literal-property property">body</span><span class="token operator">:</span> some View <span class="token punctuation">{</span>
        TabView <span class="token punctuation">{</span>
            NavigationSplitView <span class="token punctuation">{</span>
                <span class="token function">SideMenuView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> detail<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">AlbumsView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">.</span>tabItem <span class="token punctuation">{</span>
                <span class="token function">Label</span><span class="token punctuation">(</span><span class="token string">"탐색"</span><span class="token punctuation">,</span> <span class="token literal-property property">systemImage</span><span class="token operator">:</span> <span class="token string">"music.note"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">.</span><span class="token function">tag</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"즐겨찾기"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span>tabItem <span class="token punctuation">{</span>
                    <span class="token function">Label</span><span class="token punctuation">(</span><span class="token string">"즐겨찾기"</span><span class="token punctuation">,</span> <span class="token literal-property property">systemImage</span><span class="token operator">:</span> <span class="token string">"heart.fill"</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                <span class="token punctuation">.</span><span class="token function">tag</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token function">Text</span><span class="token punctuation">(</span><span class="token string">"재생 목록"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>tabItem <span class="token punctuation">{</span>
                <span class="token function">Label</span><span class="token punctuation">(</span><span class="token string">"재생 목록"</span><span class="token punctuation">,</span> <span class="token literal-property property">systemImage</span><span class="token operator">:</span> <span class="token string">"play.square.stack"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">.</span><span class="token function">tag</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>#Preview <span class="token punctuation">{</span>
    NavigationStack <span class="token punctuation">{</span>
        <span class="token function">ContentView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-22-Unleash-Your-Creativity-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!/img/Unleash-Your-Creativity:-Building-Your-Own-Music-App-with-SwiftUI-for-VisionPro-—-Step-by-Step-Guide!_7.png" />
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
