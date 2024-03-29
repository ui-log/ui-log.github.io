<template><div><p><img src="@source/docs/Tech/2024-03-28-CompoundComponentsPatterninReact/img/CompoundComponentsPatterninReact_0.png" alt="이미지"></p>
<h2 id="문제" tabindex="-1"><a class="header-anchor" href="#문제" aria-hidden="true">#</a> 문제</h2>
<p>리액트 컴포넌트를 보신 적이 있을 거예요. 거기에는 많은 프롭들이 전달되는데, 대부분의 경우 그 프롭들은 부울 플래그입니다. 이러한 플래그들은 컴포넌트의 특정 부분을 다른 방식으로 조건부로 표시하거나 때로는 그 부분을 렌더 트리에서 완전히 제거하는 데 도움이 됩니다. 그러나 이 방법은 확장이 어려운 악몽입니다. 이 컴포넌트는 이제 &quot;일회성&quot; 조건 블록에 개방되어 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-CompoundComponentsPatterninReact/img/CompoundComponentsPatterninReact_1.png" alt="이미지"></p>
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
<p>예를 들어, 이 카드에서 소셜 액션 버튼의 위치를 간단히 전환하려면 구성 요소 자체에 몇 가지 논리를 추가해야 합니다. 그러나 이것이 매우 특수한 시나리오이며, 앱의 나머지 부분은 카드의 원래 구조를 사용할 것을 알고 있습니다. 하지만 이 시나리오를 처리해야 하기 때문에 구성 요소에 추가적인 논리를 추가해야 합니다. 이제 많은 이러한 플래그가 있는 큰 구성 요소를 상상해 보세요. 깨닫기도 전에 구성 요소가 이미 비대하고 이해하기 어려워지고 있습니다. 이 문제의 해결책은 매우 간단합니다.</p>
<h2 id="복합-컴포넌트-패턴" tabindex="-1"><a class="header-anchor" href="#복합-컴포넌트-패턴" aria-hidden="true">#</a> 복합 컴포넌트 패턴</h2>
<p><img src="@source/docs/Tech/2024-03-28-CompoundComponentsPatterninReact/img/CompoundComponentsPatterninReact_2.png" alt="image"></p>
<p>재사용 가능한 컴포넌트 모음을 구축하고 편리하게 기반으로 원하는 곳에 배치합니다. 심지어 특정 부분을 원하지 않는다면, 논리를 추가하지 않고 삭제만 하면 됩니다. 이는 개발자 관점에서 많은 유연성을 가져다 주며, 이제 구성 요소를 확장하는 것이 훨씬 쉬워집니다.</p>
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
<p>두 개 이상의 구성 요소가 함께 작업하여 작업을 수행하는 아이디어입니다.</p>
<h2 id="이-패턴을-사용한-ui-카드-예제" tabindex="-1"><a class="header-anchor" href="#이-패턴을-사용한-ui-카드-예제" aria-hidden="true">#</a> 이 패턴을 사용한 UI 카드 예제</h2>
<p>이 예제의 전체 코드 기반은 아래 링크에 있습니다. 시각적으로 배우는 사람이라면 YouTube 비디오도 있으니 확인해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> twMerge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'tailwind-merge'</span><span class="token punctuation">;</span>

<span class="token comment">//각 구성 요소를 위한 tailwind 클래스</span>
<span class="token keyword">const</span> cardClasses <span class="token operator">=</span> <span class="token string">'bg-white min-w-[320px]  rounded-lg flex flex-col items-center justify-center p-5'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> headerClasses <span class="token operator">=</span> <span class="token string">'flex justify-between w-full mb-2'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> nameClasses <span class="token operator">=</span> <span class="token string">'text-2xl font-bold text-center text-gray-800'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> roleClasses <span class="token operator">=</span> <span class="token string">'text-md font-medium text-center text-gray-800'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> socialsClasses <span class="token operator">=</span> <span class="token string">'flex items-center justify-center gap-4 my-4'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> socialButtonClasses <span class="token operator">=</span> <span class="token string">'text-xl text-gray-400'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> actionsClasses <span class="token operator">=</span> <span class="token string">'flex items-center justify-center w-full gap-2 mt-2'</span>

<span class="token comment">//개별 구성 요소</span>
<span class="token keyword">const</span> <span class="token function-variable function">actionButtonClasses</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">twMerge</span><span class="token punctuation">(</span><span class="token string">'border-2 px-2 py-1.5 rounded text-sm font-bold w-full'</span><span class="token punctuation">,</span> type <span class="token operator">===</span> <span class="token string">'primary'</span> <span class="token operator">?</span> <span class="token string">'bg-sky-700 text-white'</span> <span class="token operator">:</span> <span class="token string">'text-gray-400 bg-white'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">Card</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>cardClasses<span class="token punctuation">}</span><span class="token operator">></span> <span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">Header</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>headerClasses<span class="token punctuation">}</span><span class="token operator">></span> <span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">Image</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> src<span class="token punctuation">,</span> alt <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token punctuation">{</span>src<span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token punctuation">{</span>alt<span class="token punctuation">}</span> width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span> height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">'rounded-full'</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">Name</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token punctuation">{</span>nameClasses<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">Role</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>h3 className<span class="token operator">=</span><span class="token punctuation">{</span>roleClasses<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">Socials</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>socialsClasses<span class="token punctuation">}</span><span class="token operator">></span> <span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">SocialButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token punctuation">{</span>socialButtonClasses<span class="token punctuation">}</span><span class="token operator">></span> <span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">Actions</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>actionsClasses<span class="token punctuation">}</span><span class="token operator">></span> <span class="token punctuation">{</span>children<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">HeaderButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">'text-gray-400'</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token keyword">const</span> <span class="token function-variable function">ActionButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> type<span class="token punctuation">,</span> onClick <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">actionButtonClasses</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">}</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
    Card<span class="token punctuation">,</span> Header<span class="token punctuation">,</span> ActionButton<span class="token punctuation">,</span> Actions<span class="token punctuation">,</span> HeaderButton<span class="token punctuation">,</span> Image<span class="token punctuation">,</span> Name<span class="token punctuation">,</span> Role<span class="token punctuation">,</span> SocialButton<span class="token punctuation">,</span> Socials<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 패턴을 사용하여 카드 구성 요소가 어떻게 보이는지 알아봤어요. 여기서, 저는 모든 컴포넌트를 children prop으로 개별적으로 생성해요. 태그 사이에 전달하는 내용은 해당 태그의 자식으로 계산돼요. div 태그를 사용하고 그 안에 h1 태그와 p 태그가 있다면, 이 div 태그의 자식으로 카운트돼요.</p>
<p>이 children prop을 활용하면 사용자가 구성 요소 안에 무엇을 렌더링하고 어떻게 하는지에 대한 완전한 제어 권한을 부여해요.</p>
<p>또한, 여기서는 이쁘게 보이도록 몇 가지 tailwind 클래스를 사용했어요. 아래 링크된 코드베이스에서 모든 것을 복사할 수 있어요.</p>
<p>App 파일 내부에서 이러한 모든 컴포넌트를 가져와서 필요에 따라 구조화할 거에요. 사용 사례에 따라 컴포넌트를 구성할 수 있어요. 이동하거나 컴포넌트에서 간단히 제거하고 추가 로직이 없어도 모두 예상대로 작동할 거에요. 최대한 유연하게 사용할 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Card<span class="token operator">></span>
  <span class="token operator">&lt;</span>Image src<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w3NjA4Mjc3NHx8ZW58MHx8fHx8'</span><span class="token punctuation">}</span> alt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'프로필 이미지'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'mt-4 mb-2'</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Name<span class="token operator">></span>John Doe<span class="token operator">&lt;</span><span class="token operator">/</span>Name<span class="token operator">></span>
    <span class="token operator">&lt;</span>Role<span class="token operator">></span><span class="token constant">UX</span> 전문가<span class="token operator">&lt;</span><span class="token operator">/</span>Role<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>Socials<span class="token operator">></span>
    <span class="token operator">&lt;</span>SocialButton<span class="token operator">></span><span class="token operator">&lt;</span>IoLogoInstagram <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>SocialButton<span class="token operator">></span>
    <span class="token operator">&lt;</span>SocialButton<span class="token operator">></span><span class="token operator">&lt;</span>IoLogoLinkedin <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>SocialButton<span class="token operator">></span>
    <span class="token operator">&lt;</span>SocialButton<span class="token operator">></span><span class="token operator">&lt;</span>IoLogoTwitter <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>SocialButton<span class="token operator">></span>
    <span class="token operator">&lt;</span>SocialButton<span class="token operator">></span><span class="token operator">&lt;</span>IoLogoYoutube <span class="token operator">/</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>SocialButton<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Socials<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Card<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="이-예제를-사용하여-탭-구성-요소" tabindex="-1"><a class="header-anchor" href="#이-예제를-사용하여-탭-구성-요소" aria-hidden="true">#</a> 이 예제를 사용하여 탭 구성 요소</h2>
<p>탭 구성 요소를 사용할 때, 현재 활성 탭을 추적하기 위한 상태 변수가 필요합니다. 상태를 프롭스로 전달할 수 있지만 때로는 깊게 중첩된 구성 요소가 있을 수 있고, 각 구성 요소로 프롭을 전달하는 것은 그저 지저분합니다. 대신 컨텍스트를 사용할 것입니다.</p>
<p>그러니 첫 번째로, 주요 탭 컨테이너를 구성해 봅시다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> TabsContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">Tabs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>activeTab<span class="token punctuation">,</span> setActiveTab<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">changeTab</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">tab</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setActiveTab</span><span class="token punctuation">(</span>tab<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>TabsContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span> activeTab<span class="token punctuation">,</span> changeTab <span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"w-[600px] rounded shadow-xl"</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>TabsContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 컴포넌트는 주로 활성 탭 상태와 활성 탭을 변경할 수 있는 함수를 노출하는 래퍼 역할을 합니다. 컨텍스트 제공자는 래퍼 역할을 합니다. 이제 이 컨테이너 내의 모든 자식 요소가 useContext 훅을 사용하여 activeTab 및 setter 함수에 액세스할 수 있습니다.</p>
<p>그런 다음 탭 컴포넌트를 추가해보겠습니다. 이 버튼은 섹션 간전환을 돕는 버튼입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Tab</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> activeTab<span class="token punctuation">,</span> changeTab <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>TabsContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">changeTab</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">twMerge</span><span class="token punctuation">(</span><span class="token string">"py-2 transition tracking-wide text-center w-full bg-gray-200 cursor-pointer px-2 font-black text-gray-600"</span><span class="token punctuation">,</span> index <span class="token operator">===</span> activeTab <span class="token operator">&amp;&amp;</span> <span class="token string">'bg-sky-700 text-gray-100'</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">></span>
            <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span>
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
<p>해당 버튼을 클릭하면 컨텍스트에서 changeTab을 호출하여 activeTab 상태를 변경합니다. 이 상태를 사용하는 다른 컴포넌트는 다시 렌더링됩니다.</p>
<p>마지막으로, 실제 탭 섹션입니다. 컨텍스트에서 activeTab을 기반으로 특정 탭 섹션을 표시합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">TabPanel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> index<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> activeTab <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>TabsContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> index <span class="token operator">===</span> activeTab <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"bg-gray-100 flex justify-center items-center p-10 text-md font-bold tracking-wide text-gray-300"</span><span class="token operator">></span>
            <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最後로, 모두 내보내기를 실행합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> Tabs<span class="token punctuation">,</span> Tab<span class="token punctuation">,</span> TabPanel <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다른 제3자 라이브러리를 주목해보시면, 때로는 그들이 이러한 이른바 복합 컴포넌트를 내보내는 방식이 약간 다를 수 있습니다. radix UI의 hover card를 열어보면, 주요 컨테이너 안에 HoverCard.Trigger 및 HoverCard.Content가 있음을 알 수 있습니다. JavaScript에서 함수는 본질적으로 객체이므로, 우리 컴포넌트에서도 동일한 패턴을 적용할 수 있습니다. 직접 내보내는 대신, 주 탭 컨테이너를 기본 내보내기로 지정하고, 다른 하위 컴포넌트를 이 컨테이너에 추가할 것입니다. 여기에 대단한 내용은 없고, 그저 다른 내보내는 방식뿐입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Tabs<span class="token punctuation">.</span>Tab <span class="token operator">=</span> Tab<span class="token punctuation">;</span>
Tabs<span class="token punctuation">.</span>TabPanel <span class="token operator">=</span> TabPanel<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Tabs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 App 파일 내에서 우리 모든 탭 컴포넌트를 가져와 필요한 대로 사용해 봅시다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Tabs<span class="token operator">></span>
  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'flex'</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>Tab index<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">></span>탭 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token punctuation">.</span>Tab <span class="token operator">></span>
    <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>Tab index<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">></span>탭 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token punctuation">.</span>Tab <span class="token operator">></span>
    <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>Tab index<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">></span>탭 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token punctuation">.</span>Tab <span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>TabPanel index<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token operator">></span>탭패널 <span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token punctuation">.</span>TabPanel<span class="token operator">></span>
  <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>TabPanel index<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">></span>탭패널 <span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token punctuation">.</span>TabPanel<span class="token operator">></span>
  <span class="token operator">&lt;</span>Tabs<span class="token punctuation">.</span>TabPanel index<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">></span>탭패널 <span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token punctuation">.</span>TabPanel<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Tabs<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>그래서 이것이 복합 구성 요소 패턴에 대한 간단한 개요였습니다. 이 방법을 사용하면 기존 컴포넌트를 구축하는 전통적인 방법보다 훨씬 더 유연하고 확장 가능한 견고한 디자인 시스템을 구축할 수 있습니다. 이 패턴을 사용하여 사용자 지정 모달 컴포넌트나 아코디언 컴포넌트를 구축하여 어떤 이점이 있는지 살펴보세요.</p>
<p>Github 링크: https://github.com/AkileshRao/compound-components
Youtube 링크: https://www.youtube.com/watch?v=PPOKvugfi98</p>
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
