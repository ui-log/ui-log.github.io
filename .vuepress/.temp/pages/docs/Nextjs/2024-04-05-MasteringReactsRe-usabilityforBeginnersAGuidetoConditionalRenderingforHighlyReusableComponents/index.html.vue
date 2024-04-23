<template><div><p>리액트를 배우기 시작한지 어느 정도 시간이 지났죠. 정말 흥미로운 여정이에요. 대부분의 개발자들처럼, 매 단계마다 리액트의 능력에 더욱 빠져들고 있다는 것을 인정해요.</p>
<p>백엔드 개발에서 시작해서, 노력하며 프론트엔드 기술로 나아가는 과정에서 특히 리액트에 집중하며 계속해서 학습 중이에요.</p>
<p>초보자로서, 재사용 가능한 컴포넌트가 정확히 무엇인지 이해하는 것이 종종 헷갈릴 수 있는데, 리액트에서의 컴포넌트 재사용성은 그 중에서도 가장 사랑받고 인기 있는 측면 중 하나에요.</p>
<p>아래 코드 스니펫을 살펴보면, Component 폴더에 깔끔하게 구성된 Card 컴포넌트를 확인할 수 있고, 이를 Homepage에서 재사용하는 방법을 보실 수 있어요:</p>
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
<p>위의 내용은 카드 컴포넌트를 재사용하는 것처럼 보일 수 있어요, 그렇죠?</p>
<p>하지만,</p>
<p>재사용성의 진정한 가치는 웹사이트의 여러 부분에서 달라진 맥락에 맞게 컴포넌트를 유연하게 사용하여 필요에 따라 변화하는 기능과 디자인에 매끄럽게 적응하는 것에 있어요.</p>
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
<h1 id="재사용성-예제-1" tabindex="-1"><a class="header-anchor" href="#재사용성-예제-1" aria-hidden="true">#</a> 재사용성 예제 #1</h1>
<p>아래 예시를 살펴보세요. 한 가지 Card 구성 요소를 사용하여 서로 다른 스타일과 동적 데이터를 가진 세 가지 유형의 카드를 렌더링할 수 있는 실용적인 예제를 보여줍니다:</p>
<ul>
<li>이벤트 카드</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents/img/MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents_0.png" alt="이미지"></p>
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
<li>광고 카드</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents/img/MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents_1.png" alt="마스터링 리액트: 초보자를 위한 재사용성"></p>
<ul>
<li>컬렉션 카드</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents/img/MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents_2.png" alt="마스터링 리액트: 초보자를 위한 재사용성"></p>
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
<li>모든 세 가지 버전의 단일 카드 구성 요소를 확인해보세요</li>
</ul>
<p>여기가 마법이죠: 단일 카드 구성 요소와 적절한 변형 처리로 위의 세 가지 다양한 유형의 카드를 쉽게 렌더링할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Card variant<span class="token operator">=</span><span class="token string">"event"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>eventsData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>Card variant<span class="token operator">=</span><span class="token string">"advertisement"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>advertisementData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>Card variant<span class="token operator">=</span><span class="token string">"collection"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>collectionData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>인상적이죠, 그렇죠?</p>
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
<p>이 접근 방식을 통해 우리는 변형별로 구성 요소를 확장하여 코드베이스를 중복으로 채우지 않고도 확장성을 가질 수 있게 되었습니다.</p>
<h1 id="재사용-예시-2" tabindex="-1"><a class="header-anchor" href="#재사용-예시-2" aria-hidden="true">#</a> 재사용 예시 #2</h1>
<p>이제, 저는 또 다른 예시로 들어가보겠습니다. 여기서는 두 가지 목적으로 사용되는 프로필 카드 컴포넌트를 사용합니다: 사용자 프로필을 팀에 추가하거나 팀에서 제거하는 것.</p>
<p>두 가지 변형 모두 동일한 사용자 정보를 공유하지만 기능과 버튼 작업에서 차이가 있습니다.</p>
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
<li>팀에 회원을 추가하는 프로필 카드:</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents/img/MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents_3.png" alt="이미지"></p>
<ul>
<li>팀에서 회원을 삭제하는 프로필 카드:</li>
</ul>
<p><img src="@source/docs/Nextjs/2024-04-05-MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents/img/MasteringReactsRe-usabilityforBeginnersAGuidetoConditionalRenderingforHighlyReusableComponents_4.png" alt="이미지"></p>
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
<p>다양한 기능의 차이점에도 불구하고, 코드에서 이러한 변형을 매끄럽게 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ProfileCard variant<span class="token operator">=</span><span class="token string">"addToTeam"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>userData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ProfileCard variant<span class="token operator">=</span><span class="token string">"removeFromTeam"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>userData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="예제에-대한-이야기를-충분히-했으니-이러한-재사용성을-두-가지-간단한-단계로-어떻게-달성할-수-있는지-빠르게-이해해-봅시다" tabindex="-1"><a class="header-anchor" href="#예제에-대한-이야기를-충분히-했으니-이러한-재사용성을-두-가지-간단한-단계로-어떻게-달성할-수-있는지-빠르게-이해해-봅시다" aria-hidden="true">#</a> 예제에 대한 이야기를 충분히 했으니, 이러한 재사용성을 두 가지 간단한 단계로 어떻게 달성할 수 있는지 빠르게 이해해 봅시다:</h1>
<h2 id="단계-1-변형-식별을-위해-프롭스-보내기" tabindex="-1"><a class="header-anchor" href="#단계-1-변형-식별을-위해-프롭스-보내기" aria-hidden="true">#</a> 단계 1: 변형 식별을 위해 프롭스 보내기:</h2>
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
<p>프롭(prop)은 컴포넌트의 다양한 변형을 결정하는 데 중요한 역할을 합니다. &quot;addToTeam&quot; 또는 &quot;removeFromTeam&quot;과 같은 변형별 프롭(prop)을 전달하여 컴포넌트가 해당대로 렌더링되도록 신호를 보냅니다.</p>
<p>아래는 컴포넌트로 프롭(prop)를 보내는 예시입니다(변형과 사용자 데이터로 구성됨):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ProfileCard <span class="token keyword">from</span> <span class="token string">"./ProfileCard"</span><span class="token punctuation">;</span> <span class="token comment">// 컴포넌트가 별도 파일에 있는 것으로 가정합니다</span>

<span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> userData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"John Doe"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">"johndoe@example.com"</span><span class="token punctuation">,</span>
    <span class="token comment">// 다른 사용자 데이터</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"user-profile"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>User Profile<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 변형과 userData 프롭(prop) 보내기 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>ProfileCard variant<span class="token operator">=</span><span class="token string">"addToTeam"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>userData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ProfileCard variant<span class="token operator">=</span><span class="token string">"removeFromTeam"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>userData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UserProfile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-2-프롭-prop-을-기반으로-조건부-렌더링-구현하기" tabindex="-1"><a class="header-anchor" href="#단계-2-프롭-prop-을-기반으로-조건부-렌더링-구현하기" aria-hidden="true">#</a> 단계 2: 프롭(prop)을 기반으로 조건부 렌더링 구현하기</h2>
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
<p>조건부 렌더링은 매우 강력한 기능 중 하나로, 제공된 프롭스(이 경우에는 variant)에 기반하여 컴포넌트를 조건부로 렌더링할 수 있게 해줍니다.</p>
<p>아래는 이 기능을 보여주는 간단한 코드 스니펫입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ProfileCard</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> variant<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">addToTeam</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 팀에 사용자 추가하는 로직을 추가하세요</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">removeFromTeam</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 팀에서 사용자 제거하는 로직을 추가하세요</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"profile-card"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 삼항 연산자를 사용하여 조건부 렌더링하기 <span class="token operator">--</span><span class="token operator">></span>
      <span class="token punctuation">{</span>variant <span class="token operator">===</span> <span class="token string">'addToTeam'</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>addToTeam<span class="token punctuation">}</span><span class="token operator">></span>Add to Team<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>removeFromTeam<span class="token punctuation">}</span><span class="token operator">></span>Remove from Team<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ProfileCard<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예제에서 보이듯이, 우리는 variant 타입과 데이터를 프롭스로 보내고, 삼항 연산자를 기반으로 조건부 렌더링을 구현했습니다. 삼항 연산자 {조건 ? (참 값) : (거짓 값)}은 React에서 콘텐츠를 조건부로 렌더링하는 일반적인 방법 중 하나이며, 특히 간단한 조건에 유용합니다.</p>
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
<h1 id="삼항-연산자-이외에도-react에서-조건부-렌더링을-위한-여러-가지-옵션이-제공됩니다" tabindex="-1"><a class="header-anchor" href="#삼항-연산자-이외에도-react에서-조건부-렌더링을-위한-여러-가지-옵션이-제공됩니다" aria-hidden="true">#</a> 삼항 연산자 이외에도 React에서 조건부 렌더링을 위한 여러 가지 옵션이 제공됩니다:</h1>
<h2 id="if문-사용하기" tabindex="-1"><a class="header-anchor" href="#if문-사용하기" aria-hidden="true">#</a> if문 사용하기</h2>
<p>JSX는 if문을 직접 지원하지는 않지만, 컴포넌트의 JavaScript 부분 내에서 사용할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> variant<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>variant <span class="token operator">===</span> <span class="token string">"addToTeam"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProfileCardAdd data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>variant <span class="token operator">===</span> <span class="token string">"removeFromTeam"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProfileCardRemove data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>변형이 지정되지 않았습니다<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="switch-문-사용하기" tabindex="-1"><a class="header-anchor" href="#switch-문-사용하기" aria-hidden="true">#</a> switch 문 사용하기</h2>
<p>if 문과 유사하게, switch 문을 사용하여 더 복잡한 조건부 렌더링을 할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> variant<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">switch</span> <span class="token punctuation">(</span>variant<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">"addToTeam"</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProfileCardAdd data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">"removeFromTeam"</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProfileCardRemove data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>No variant specified<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="논리-연산자-사용하기" tabindex="-1"><a class="header-anchor" href="#논리-연산자-사용하기" aria-hidden="true">#</a> 논리 &amp;&amp; 연산자 사용하기</h2>
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
<p>논리 'AND' (&amp;&amp;) 연산자를 사용하여 부울 조건에 따라 내용을 조건부로 렌더링할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> isLoggedIn <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>isLoggedIn <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Welcome<span class="token punctuation">,</span> User<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token operator">!</span>isLoggedIn <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Please log <span class="token keyword">in</span><span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단락-평가-사용하기" tabindex="-1"><a class="header-anchor" href="#단락-평가-사용하기" aria-hidden="true">#</a> 단락 평가 사용하기</h2>
<p>논리 'AND' 연산자와 비슷하게, 조건부 렌더링을 위해 단락 평가를 사용할 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> isLoading <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>isLoading <span class="token operator">||</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span><span class="token operator">!</span>isLoading <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>UserProfileContent <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="함수를-사용하여-조건부-렌더링하기" tabindex="-1"><a class="header-anchor" href="#함수를-사용하여-조건부-렌더링하기" aria-hidden="true">#</a> 함수를 사용하여 조건부 렌더링하기</h2>
<p>조건에 따라 JSX를 반환하는 별도의 함수를 생성하고 해당 함수를 컴포넌트의 render 메서드 내에서 호출할 수 있습니다. 이는 복잡한 렌더링 로직에 유용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">renderContent</span><span class="token punctuation">(</span><span class="token parameter">variant<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>variant <span class="token operator">===</span> <span class="token string">"addToTeam"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProfileCardAdd data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>variant <span class="token operator">===</span> <span class="token string">"removeFromTeam"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProfileCardRemove data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>No variant specified<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> variant<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">renderContent</span><span class="token punctuation">(</span>variant<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<h2 id="고차-컴포넌트-hoc-사용하기" tabindex="-1"><a class="header-anchor" href="#고차-컴포넌트-hoc-사용하기" aria-hidden="true">#</a> 고차 컴포넌트(HOC) 사용하기</h2>
<p>특정 조건에 따라 다른 컴포넌트를 조건부로 렌더링하는 고차 컴포넌트를 만들 수 있습니다. HOC는 컴포넌트를 가져와 추가적인 속성이나 기능을 포함한 새로운 컴포넌트를 반환하는 함수입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">withVariant</span><span class="token punctuation">(</span><span class="token parameter">Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">UserProfile</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> variant<span class="token punctuation">,</span> data <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>variant <span class="token operator">===</span> <span class="token string">"addToTeam"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component variant<span class="token operator">=</span><span class="token string">"addToTeam"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>variant <span class="token operator">===</span> <span class="token string">"removeFromTeam"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component variant<span class="token operator">=</span><span class="token string">"removeFromTeam"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>표시할 변형이 없습니다<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> UserProfileWithVariant <span class="token operator">=</span> <span class="token function">withVariant</span><span class="token punctuation">(</span>ProfileCard<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 사용 방법</span>
<span class="token operator">&lt;</span>UserProfileWithVariant variant<span class="token operator">=</span><span class="token string">"addToTeam"</span> data<span class="token operator">=</span><span class="token punctuation">{</span>userData<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위에서는 리액트에서 조건부 렌더링을 다루는 더 많은 유연성과 옵션을 제공하는 방법을 소개했습니다. 이를 통해 우리는 특정 사용 사례와 코딩 스타일 선호도에 가장 잘 맞는 접근 방식을 선택할 수 있습니다.</p>
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
<p>각 조건부 렌더링 접근 방식마다 장단점이 있으니, 스스로 어떤 것이 가장 적합한지 판단하는 것이 중요합니다.</p>
<p>이 간단한 단계를 따라가고 React의 강력한 기능을 활용하면 구성요소 재사용성을 높여 새로운 높이로 이끌 수 있어 코드베이스가 확장 가능하고 유지보수가 쉬워집니다.</p>
</div></template>
