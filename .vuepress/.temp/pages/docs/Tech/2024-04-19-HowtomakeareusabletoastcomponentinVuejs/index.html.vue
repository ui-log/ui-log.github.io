<template><div><img src="@source/docs/Tech/2024-04-19-HowtomakeareusabletoastcomponentinVuejs/img/HowtomakeareusabletoastcomponentinVuejs_0.png" />
<p>잉! 이 기사는 모달에 관한 다른 글과 닮아 있네요. 함께 확인해보세요! https://medium.com/itnext/how-to-build-a-reusable-modal-component-in-vuejs-f1799ab9b3e</p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>여러분도 이미 알고 계시겠지만, 웹사이트를 구축할 때 사용자 경험은 상당히 중요합니다. 사용자가 버튼이나 양식과 상호작용하거나 뭔가 잘못되었을 때, 사용자에게 그 결과를 어떤 식으로 알려주는 것이 중요하다는 것을 알고 계셔야 합니다. 그래서 작업이 완료되었고 응답이 있는 것처럼 느껴지게끔 사용자에게 통지하는 것이 중요합니다.</p>
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
<p>이러한 종류의 요구 사항에 대한 솔루션 중 하나는 Toast입니다 - 화면의 어딘가에서 부드럽게 알려주는 간단한 팝업 알림입니다. 모든 것이 잘 되었는지 또는 끔찍한 일이 발생했는지 안내하며 최대한 빨리 페이지를 다시로드해야합니다.</p>
<p>그리고 많은 것들과 마찬가지로, Vue 생태계에는 이 기능을 잘 처리하는 멋진 라이브러리인 vue-toastification이 있습니다. 그들은 수많은 옵션이 있고, 초기에 멋진 보기를 제공하며, 라이브러리 자체가 가벼우며 다양한 기능을 제공합니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-HowtomakeareusabletoastcomponentinVuejs/img/HowtomakeareusabletoastcomponentinVuejs_1.png" alt="이미지"></p>
<p>하지만 프로젝트에서 외부 리소스에 의존하지 않는 요구 사항이 있다면 어떨까요? 또는, 나의 경우처럼 해당 라이브러리의 내장 모듈이 없는 Nuxt 웹 사이트를 제작하고 있어서 우리의 모든 시도가 계속 오류를 발생시킨다면 어떨까요? 이 시점에서는 간단한 질문을 해결하기 위해 단순히 차분하고 손에 있는 도구로 직접 처리하는 것이 더 나을 수 있습니다.</p>
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
<h1 id="레시피" tabindex="-1"><a class="header-anchor" href="#레시피" aria-hidden="true">#</a> 레시피</h1>
<p>우리의 토스트 컴포넌트를 구축하려면 두 부분이 필요합니다:</p>
<ul>
<li>토스트에 관한 모든 정보가 저장될 상태 논리.</li>
<li>상태를 이용하여 사용자가 현재 화면에 어떤 토스트를 가져야 하는지 표시하는 인터페이스</li>
</ul>
<p>로직 없이 인터페이스만으로는 작동하지 않기 때문에, 먼저 로직을 작성해 봅시다!</p>
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
<h1 id="pinia-스토어" tabindex="-1"><a class="header-anchor" href="#pinia-스토어" aria-hidden="true">#</a> Pinia 스토어</h1>
<p>저희 앱에서 토스트 기능을 정말 어디서나 사용해야 하기 때문에, 상태를 유지하기 위해 여러분이 이미 많이 알고 계신 개념을 사용할 거에요. Vue 2를 위해서라면 Vuex를 사용해야 하지만, 이 글을 Vue 3 프로젝트에서 작성 중이므로 Pinia를 사용할 거에요. 둘의 차이점은 Vuex가 옛날 상태 관리자로 자신의 흠과 낮은 Typescript 지원을 갖고 있다는 점이고, Pinia는 더 새롭고 커뮤니티에서 공식 Vue 상태 관리자로 인정하고 지원하는 것이죠.</p>
<h2 id="pinia-설치하기" tabindex="-1"><a class="header-anchor" href="#pinia-설치하기" aria-hidden="true">#</a> Pinia 설치하기</h2>
<p>Pinia를 설치하려면:</p>
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
<li>패키지로 설치하세요 (선호하는 패키지 매니저를 선택하세요):</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//npm</span>
npm install pinia
<span class="token comment">//yarn</span>
yarn add pinia
<span class="token comment">//pnpm</span>
pnpm add pinia
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>main.ts 파일에 Pinia 인스턴스를 생성하세요:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<ol start="3">
<li>우리 앱에 사용해 봅시다:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>pinia<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>좋아요! 이제 우리는 스토어를 정의할 수 있어요. Pinia 스토어는 Vuex의 모듈 시스템과 달리 각각 별도의 파일로 작성됩니다. stores라는 폴더를 만들어서 거기에 useToasterStore 파일을 생성해요. 그 파일 안에서 다음과 같이 스토어를 정의할 거에요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useToasterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">"toaster-store"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>첫 번째 인수는 모든 다른 상점들 중에서 그것을 식별하는 데 사용되는 상점의 ID이고, 두 번째 인수는 상태를 보유하는 객체입니다 (중괄호 안에 있는 객체를 반환하는 화살표 함수입니다). 그리고 이 함수 내에서는 클래스의 메소드처럼 작동하는 액션도 포함되어 있습니다.</p>
<h2 id="로직-처리" tabindex="-1"><a class="header-anchor" href="#로직-처리" aria-hidden="true">#</a> 로직 처리</h2>
<p>한 번에 많은 알림이 있을 수 있기 때문에, 저희는 상태를 보관하는 배열을 사용할 것입니다. 미리 TypeScript 인터페이스를 정의할 것입니다. 하지만 순수 JS로 작업 중이라면, 이 인터페이스는 무시하셔도 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 상태는 토스트 색상 및 아이콘을 정의할 것입니다.</span>
<span class="token keyword">export</span> type TToastStatus <span class="token operator">=</span> <span class="token string">"success"</span> <span class="token operator">|</span> <span class="token string">"warning"</span> <span class="token operator">|</span> <span class="token string">"error"</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IToast</span> <span class="token punctuation">{</span>
  <span class="token comment">// 토스트 내용</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> TToastStatus<span class="token punctuation">;</span>
  <span class="token comment">// 토스트 구분을 위한 ID</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">"toaster-store"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">toasts</span><span class="token operator">:</span> IToast<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">toasts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>좋아요! 이제 필요에 따라 상태를 변이시키는 몇 가지 메서드를 정의해 보겠습니다. 나중을 위해 상태의 양이 변경될 수 있기 때문에 먼저, 나중에 재사용할 수 있도록 상점의 핵심인 컨트롤러와 유사한 메서드를 정의해야 합니다.</p>
<p>먼저, 토스트 정보를 전달하는 방법을 정의해야 합니다. 그에 대한 타입을 만듭니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// timeout is conditional because we will define default one</span>
type ToastPayload <span class="token operator">=</span> <span class="token punctuation">{</span> timeout<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span> text<span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, 파일의 맨 위에 위치한 함수(상점 내부가 아닌)로 토스트 객체를 생성하는 방법이 필요합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> createToast <span class="token operator">=</span> <span class="token punctuation">(</span>text<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> TToastStatus<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">IToast</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  text<span class="token punctuation">,</span>
  status<span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>미래에 토스트를 구분하기 위해 ID를 정의했어요. Math.random() * 1000 함수를 사용해서 천 단위 내의 랜덤 숫자를 생성했어요. uuid 라이브러리와 같은 것을 사용할 수도 있지만, 저희 애플리케이션의 범위에서는 필요하지 않다고 생각해요.</p>
<p>마지막으로, 마침내 우리의 메소드를 정의하기 전에, 일반적인 토스트를 생성할 때마다 지속 시간을 전달할 필요가 없도록 상수 기본 시간 초를 만들겠어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">defaultTimeout</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그리고 저희 함수가 여기 나왔어요!</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateState</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">payload</span><span class="token operator">:</span> ToastPayload<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> TToastStatus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// Get text and timeout from payload</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> text<span class="token punctuation">,</span> timeout <span class="token punctuation">}</span> <span class="token operator">=</span> payload<span class="token punctuation">;</span>
<span class="token comment">// We create the toast with function above</span>
      <span class="token keyword">const</span> toast <span class="token operator">=</span> <span class="token function">createToast</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// We push toasts to the state</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>toasts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>toast<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// We create a delay to delete toast after its provided timeout is over</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>toasts <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>toasts<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=></span> t<span class="token punctuation">.</span>id <span class="token operator">!==</span> toast<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout <span class="token operator">??</span> defaultTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 함수가 하는 일:</p>
<ul>
<li>제공된 payload 객체의 값들을 해체</li>
<li>해당 값들을 사용하여 일반적인 토스트 객체를 생성</li>
<li>생성된 토스트를 상태 배열에 추가</li>
<li>제공된 시간이 종료되거나(널 병합 연산자를 사용하여) 제공되지 않은 경우—기본 시간이 지난 후 토스트를 상태 배열에서 제거하기 위해 지연 시간을 설정합니다.</li>
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
<p>그렇게 하면 앱에서 손쉽게 사용할 수 있는 세 가지 독립적인 메서드를 만들 수 있게 됩니다. 이러한 메서드는 상태를 직접 변이(mutate)하는 메서드 위에 추상화된 종류의 역할을 하며, 앞으로 상태가 예측 불가능한 방식으로 변이되지 않도록 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">payload</span><span class="token operator">:</span> ToastPayload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateState</span><span class="token punctuation">(</span>payload<span class="token punctuation">,</span> <span class="token string">"success"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token function">warning</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">payload</span><span class="token operator">:</span> ToastPayload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateState</span><span class="token punctuation">(</span>payload<span class="token punctuation">,</span> <span class="token string">"warning"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

<span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">payload</span><span class="token operator">:</span> ToastPayload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateState</span><span class="token punctuation">(</span>payload<span class="token punctuation">,</span> <span class="token string">"error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>각 메서드에서는 updateState를 사용하며, 각 메서드마다 다른 종류의 토스트를 제공합니다.</p>
<p>마지막으로 useToasterStore 파일은 다음과 같이 보입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"pinia"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type TToastStatus <span class="token operator">=</span> <span class="token string">"success"</span> <span class="token operator">|</span> <span class="token string">"warning"</span> <span class="token operator">|</span> <span class="token string">"error"</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">IToast</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">text</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> TToastStatus<span class="token punctuation">;</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
type ToastPayload <span class="token operator">=</span> <span class="token punctuation">{</span> timeout<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span> text<span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> defaultTimeout <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> createToast <span class="token operator">=</span> <span class="token punctuation">(</span>text<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> TToastStatus<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">IToast</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  text<span class="token punctuation">,</span>
  status<span class="token punctuation">,</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">"toaster-store"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">toasts</span><span class="token operator">:</span> IToast<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">toasts</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">updateState</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">payload</span><span class="token operator">:</span> ToastPayload<span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> TToastStatus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> text<span class="token punctuation">,</span> timeout <span class="token punctuation">}</span> <span class="token operator">=</span> payload<span class="token punctuation">;</span>

      <span class="token keyword">const</span> toast <span class="token operator">=</span> <span class="token function">createToast</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">this</span><span class="token punctuation">.</span>toasts<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>toast<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>toasts <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>toasts<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token operator">=></span> t<span class="token punctuation">.</span>id <span class="token operator">!==</span> toast<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> timeout <span class="token operator">??</span> defaultTimeout<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">payload</span><span class="token operator">:</span> ToastPayload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateState</span><span class="token punctuation">(</span>payload<span class="token punctuation">,</span> <span class="token string">"success"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">warning</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">payload</span><span class="token operator">:</span> ToastPayload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateState</span><span class="token punctuation">(</span>payload<span class="token punctuation">,</span> <span class="token string">"warning"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">payload</span><span class="token operator">:</span> ToastPayload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">updateState</span><span class="token punctuation">(</span>payload<span class="token punctuation">,</span> <span class="token string">"error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그렇게 작성했습니다. 여러분은 이제 토스트에 대한 로직 작성을 완료했습니다! 이제 뷰를 만들어보겠습니다!</p>
<h2 id="뷰-만들기-ui" tabindex="-1"><a class="header-anchor" href="#뷰-만들기-ui" aria-hidden="true">#</a> 뷰 만들기 (UI)</h2>
<p>먼저, 뷰를 만드는 데 필요한 단계를 논의해보겠습니다:```</p>
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
<li>store를 초기화하고 사용할 SFC (Single File Component)을 만듭니다.</li>
<li>화면의 오른쪽 하단에 (우리를 위해 설정되어 있는) 토스트를 위한 컨테이너를 만듭니다. 이후 조정할 수 있으며, 특정 옵션을 추가할 수도 있습니다.</li>
<li>컨테이너에 스타일을 적용하고 각 토스트의 유형에 따라 스타일과 아이콘을 조정합니다.</li>
</ul>
<p>그렇죠! 저희는 애플리케이션 어딘가에 Toaster.vue라는 파일을 만들고, 우리 토스트 컴포넌트의 템플릿 구조를 만드는 것으로 시작합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token operator">&lt;</span>Teleport to<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ul v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"toastStore.toasts.length"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__wrapper"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>li
            v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"toast in toastStore.toasts"</span>
            <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__list"</span>
            <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"toast.text"</span>
          <span class="token operator">></span>
            <span class="token operator">&lt;</span>Icon
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__list-icon"</span>
            <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__list-text"</span><span class="token operator">></span>
              <span class="token punctuation">{</span> toast<span class="token punctuation">.</span>text <span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Teleport<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기에서 우리는 몇 가지를 사용합니다:</p>
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
<li><code v-pre>Teleport</code> 컴포넌트는 우리의 토스트를 #app div 바깥에 렌더링할 수 있게 해줍니다. 모달과 마찬가지로 앱 위에 모든 것을 다른 DOM 노드로 생성하고 싶다는 점이 중요합니다:</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-19-HowtomakeareusabletoastcomponentinVuejs/img/HowtomakeareusabletoastcomponentinVuejs_2.png" alt="image"></p>
<ol start="2">
<li>우리의 상태에 토스트가 있을 때에만 렌더링되는 순서 없는 목록 <code v-pre>ul</code>입니다. 이는 <code v-pre>li</code> 항목에 대한 <code v-pre>v-for</code> 루프를 사용해 토스트를 접근 가능한 방식으로 래핑합니다. 각 항목은 아이콘과 텍스트가 포함된 span을 포함하고 있습니다. Vue에서 svgs를 처리하는 다양한 방법이 있지만(템플릿에 직접 배치, 컴포넌트를 만들어서 사용, NuxtIcon과 Nuxt 또는 Iconify와 Vue를 사용), Vite 앱에서 즐겨 사용하는 방법을 사용하고 있습니다:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"icon"</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"vue"</span><span class="token punctuation">;</span>

<span class="token comment">// 우리가 가진 svg를 정의함</span>
type TIconName <span class="token operator">=</span> <span class="token string">'toast-error'</span> <span class="token operator">|</span> <span class="token string">'toast-warning'</span> <span class="token operator">|</span> <span class="token string">'toast-success'</span>

<span class="token comment">// props에서 svg의 이름을 가져옴</span>
<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> TIconName <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 아이콘을 동적으로 가져옴. 여기서는 해당 폴더까지의 경로를 정의해야 함</span>
<span class="token keyword">const</span> icon <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/assets/icons/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.svg</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이해하기 쉽고 타입 안전하며 재사용 가능하기 때문에 여기저기서도 활용할 수 있어요 😃 기사 맨 아래에서 레포지토리에서 SVG 파일을 받아도 돼요.</p>
<p>기본적인 마크업을 마무리한 후에는 스타일을 살펴봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>toaster <span class="token punctuation">{</span>
  <span class="token operator">&amp;</span>__wrapper <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">3</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">5</span><span class="token operator">%</span><span class="token punctuation">;</span>

    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token operator">&amp;</span>__list <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>

    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3rem<span class="token punctuation">;</span>

    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid transparent<span class="token punctuation">;</span>

    background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>

    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">.</span>2rem <span class="token number">1</span><span class="token punctuation">.</span>6rem<span class="token punctuation">;</span>


    <span class="token operator">&amp;</span><span class="token operator">-</span>icon <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>8rem<span class="token punctuation">;</span>
      aspect<span class="token operator">-</span>ratio<span class="token operator">:</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&amp;</span><span class="token operator">-</span>text <span class="token punctuation">{</span>
      font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>6rem<span class="token punctuation">;</span>
      font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서는 position: fixed와 bottom, right 속성을 적용하여 화면의 오른쪽 하단에 토스트를 위치시켜요. 그리고 z-index를 100으로 지정하여 대부분의 (하지만 modal과 같은 것은 아님) 요소들 위에 나타나도록 해요. 목록에는 패딩을 조금 주고, display: flex 및 flex-direction: column 속성을 주어 토스트가 수직으로 배치되도록 만들었어요. 아이콘과 텍스트도 스타일링했어요.</p>
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
<h2 id="토스트-유형에-따라-색상과-아이콘-결정하기" tabindex="-1"><a class="header-anchor" href="#토스트-유형에-따라-색상과-아이콘-결정하기" aria-hidden="true">#</a> 토스트 유형에 따라 색상과 아이콘 결정하기</h2>
<p>우리의 토스트를 조건부로 렌더링하려면 맵 패턴을 사용할 것입니다. 맵 패턴은 객체의 키가 마치 보물지도처럼 작용하는 곳입니다. 이를 통해 다음과 같은 코드를 피할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'a'</span><span class="token punctuation">)</span> <span class="token operator">...</span>
<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'b'</span><span class="token punctuation">)</span> <span class="token operator">...</span>
<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">'c'</span><span class="token punctuation">)</span> <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>맵은 단순한 객체일 뿐입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token literal-property property">toastColorMap</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>TToastStatus<span class="token punctuation">,</span> string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">toastIconMap</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>TToastStatus<span class="token punctuation">,</span> string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">"toast-error"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">"toast-warning"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">"toast-success"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 key는 useToasterStore 파일에서 정의한 상태 유형이며 값은 간단한 문자열입니다. 여기서 우리는 우리의 토스트에 적용할 클래스를 위한 맵과 Icon 컴포넌트에 제공할 아이콘 이름을 위한 맵을 두 개 정의합니다. 코드에서 사용하기 위해 이렇게 조정합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>li
    v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"toast in toastStore.toasts"</span>
    <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"['toaster__inner', toastClassMap[toast.status]]"</span>
    <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"toast.text"</span>
<span class="token operator">></span>
    <span class="token operator">&lt;</span>Icon
      <span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"toastIconMap[toast.status]"</span>
      <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__inner-icon"</span>
    <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__inner-text"</span><span class="token operator">></span>
      <span class="token punctuation">{</span> toast<span class="token punctuation">.</span>text <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 v-for 루프의 각 항목에서 toast.status 필드를 사용하여 맵에서 해당 값에 액세스합니다. 주의할 점은 div에서 템플릿 리터럴 대신 배열을 사용하고 있습니다. 코드를 읽기 쉽게하는 방법입니다.```</p>
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
<p>마지막으로, 아래 스타일 시트에서 지도에서 사용하는 클래스를 정의해 봅시다. 우리는 매번 중복되는 코드를 재작성하지 않고 토스트의 색상을 동적으로 변경하기 위해 CSS 변수를 사용할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token operator">&amp;</span>__inner <span class="token punctuation">{</span>
<span class="token comment">// CSS 변수 할당</span>
    <span class="token operator">--</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>

    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3rem<span class="token punctuation">;</span>

    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid transparent<span class="token punctuation">;</span>

    background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>

    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">.</span>2rem <span class="token number">1</span><span class="token punctuation">.</span>6rem<span class="token punctuation">;</span>

<span class="token comment">// 색상을 변경하기 위해 사용</span>
    border<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    svg <span class="token punctuation">{</span>
      <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token comment">// 적용된 클래스에 따라 변경</span>
    <span class="token operator">&amp;</span><span class="token punctuation">.</span>success <span class="token punctuation">{</span>
      <span class="token operator">--</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&amp;</span><span class="token punctuation">.</span>warning <span class="token punctuation">{</span>
      <span class="token operator">--</span>color<span class="token operator">:</span> orange<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&amp;</span><span class="token punctuation">.</span>error <span class="token punctuation">{</span>
      <span class="token operator">--</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로 Toaster.vue 파일은 다음과 같이 보입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>Teleport to<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ul v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"toastStore.toasts.length"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__wrapper"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>li
            v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"toast in toastStore.toasts"</span>
            <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"['toaster__inner', toastClassMap[toast.status]]"</span>
            <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"toast.text"</span>
          <span class="token operator">></span>
            <span class="token operator">&lt;</span>Icon
              <span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"toastIconMap[toast.status]"</span>
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__inner-icon"</span>
            <span class="token operator">/</span><span class="token operator">></span>

            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__inner-text"</span><span class="token operator">></span>
              <span class="token punctuation">{</span> toast<span class="token punctuation">.</span>text <span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Teleport<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> useToasterStore<span class="token punctuation">,</span> <span class="token punctuation">{</span> TToastStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/stores/useToasterStore"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">"./Icon.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">toastClassMap</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>TToastStatus<span class="token punctuation">,</span> string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">toastIconMap</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>TToastStatus<span class="token punctuation">,</span> string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">"toast-error"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">"toast-warning"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">"toast-success"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> toastStore <span class="token operator">=</span> <span class="token function">useToasterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
<span class="token punctuation">.</span>toaster <span class="token punctuation">{</span>
  <span class="token operator">&amp;</span>__wrapper <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">3</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">5</span><span class="token operator">%</span><span class="token punctuation">;</span>

    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>

    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token operator">&amp;</span>__inner <span class="token punctuation">{</span>
    <span class="token operator">--</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>

    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3rem<span class="token punctuation">;</span>

    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid transparent<span class="token punctuation">;</span>

    background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>

    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">.</span>2rem <span class="token number">1</span><span class="token punctuation">.</span>6rem<span class="token punctuation">;</span>

    border<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    svg <span class="token punctuation">{</span>
      <span class="token literal-property property">fill</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token literal-property property">stroke</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&amp;</span><span class="token punctuation">.</span>success <span class="token punctuation">{</span>
      <span class="token operator">--</span>color<span class="token operator">:</span> green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&amp;</span><span class="token punctuation">.</span>warning <span class="token punctuation">{</span>
      <span class="token operator">--</span>color<span class="token operator">:</span> orange<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&amp;</span><span class="token punctuation">.</span>error <span class="token punctuation">{</span>
      <span class="token operator">--</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&amp;</span><span class="token operator">-</span>icon <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>8rem<span class="token punctuation">;</span>
      aspect<span class="token operator">-</span>ratio<span class="token operator">:</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">&amp;</span><span class="token operator">-</span>text <span class="token punctuation">{</span>
      font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>6rem<span class="token punctuation">;</span>
      font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>자, 이제 보기 좋지 않게 만든 버튼을 만들고 토스트를 확인해 봅시다!</p>
<p>SomeOtherComponent.vue</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>Toaster <span class="token operator">/</span><span class="token operator">></span>

  <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"successToast"</span><span class="token operator">></span>클릭해주세요<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> Toaster <span class="token keyword">from</span> <span class="token string">"./components/Toaster.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> useToasterStore <span class="token keyword">from</span> <span class="token string">"./stores/useToasterStore"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> toasterStore <span class="token operator">=</span> <span class="token function">useToasterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">successToast</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> toasterStore<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"야후!"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고, 타다!</p>
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
<p><img src="@source/docs/Tech/2024-04-19-HowtomakeareusabletoastcomponentinVuejs/img/HowtomakeareusabletoastcomponentinVuejs_3.png" alt="이미지"></p>
<p>토스트가 몇 개 있더라도 모두 쌓이고 오래된 토스트가 대체됩니다. 잘 했어요!</p>
<h2 id="애니메이션-추가" tabindex="-1"><a class="header-anchor" href="#애니메이션-추가" aria-hidden="true">#</a> 애니메이션 추가</h2>
<p>끝났다고 생각되지만, 한 가지 중요한 부분이 남아있습니다 — 애니메이션. 애니메이션이 없으면 토스트가 정적이고 둔한 느낌이 들어, 이른바 워드프레스 웹사이트에 나타나는 무작위 광고 알림처럼 갑자기 나타납니다. 이것을 고쳐봐요!</p>
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
<p>아이템 목록에 애니메이션을 추가하려면 Vue에서 TransitionGroup이라는 특별한 API가 있어요. 이를 사용하면 아이템이 목록에 들어오거나 나갈 때 애니메이션을 매우 쉽게 정의할 수 있어요. Toaster.vue 컴포넌트에 이를 구현해봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>Teleport to<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Transition name<span class="token operator">=</span><span class="token string">"toast"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"toastStore.toasts.length"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__wrapper"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>TransitionGroup name<span class="token operator">=</span><span class="token string">"toast"</span> tag<span class="token operator">=</span><span class="token string">"ul"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>li
            v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"toast in toastStore.toasts"</span>
            <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"['toaster__inner', toastClassMap[toast.status]]"</span>
            <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"toast.text"</span>
          <span class="token operator">></span>
            <span class="token operator">&lt;</span>Icon
              <span class="token operator">:</span>name<span class="token operator">=</span><span class="token string">"toastIconMap[toast.status]"</span>
              <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__inner-icon"</span>
            <span class="token operator">/</span><span class="token operator">></span>

            <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"toaster__inner-text"</span><span class="token operator">></span>
              <span class="token punctuation">{</span> toast<span class="token punctuation">.</span>text <span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>TransitionGroup<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Transition<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Teleport<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script setup lang<span class="token operator">=</span><span class="token string">"ts"</span><span class="token operator">></span>
<span class="token keyword">import</span> useToasterStore<span class="token punctuation">,</span> <span class="token punctuation">{</span> TToastStatus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/stores/useToasterStore"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Icon <span class="token keyword">from</span> <span class="token string">"./Icon.vue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">toastClassMap</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>TToastStatus<span class="token punctuation">,</span> string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">toastIconMap</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span>TToastStatus<span class="token punctuation">,</span> string<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">"toast-error"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">warning</span><span class="token operator">:</span> <span class="token string">"toast-warning"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">success</span><span class="token operator">:</span> <span class="token string">"toast-success"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> toastStore <span class="token operator">=</span> <span class="token function">useToasterStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style scoped lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
<span class="token punctuation">.</span>toast<span class="token operator">-</span>enter<span class="token operator">-</span>from<span class="token punctuation">,</span>
<span class="token punctuation">.</span>toast<span class="token operator">-</span>leave<span class="token operator">-</span>to <span class="token punctuation">{</span>
  <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>toast<span class="token operator">-</span>enter<span class="token operator">-</span>active<span class="token punctuation">,</span>
<span class="token punctuation">.</span>toast<span class="token operator">-</span>leave<span class="token operator">-</span>active <span class="token punctuation">{</span>
  <span class="token literal-property property">transition</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>25s ease all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>toaster <span class="token punctuation">{</span>
  <span class="token operator">&amp;</span>__wrapper <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">3</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">5</span><span class="token operator">%</span><span class="token punctuation">;</span>

    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span>

    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token operator">&amp;</span>__inner <span class="token punctuation">{</span>
    <span class="token operator">--</span>color<span class="token operator">:</span> black<span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token comment">/* 이하 생략 */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>변경된 사항을 살펴봅시다:</p>
<ul>
<li>상자의 맨 위에 <code v-pre>Transition</code> 컴포넌트가 추가되었어요. 첫번째 토스트가 나타날 때 애니메이션을 적용하기 위해서 그렇게 했어요. <code v-pre>TransitionGroup</code>은 그렇게 하지 않기 때문에요. 그 컴포넌트에는 toast라는 이름이 지정되었는데, 나중에 설명할게요.</li>
<li><code v-pre>TransitionGroup</code>은 순서가 없는 목록 요소(렌더링된 것을 <code v-pre>ul</code>로 표시하도록 tag=&quot;ul&quot;을 추가했어요)로 설정되었습니다. 또한 동일한 이름을 가지고 있어요.</li>
<li>그리고 컴포넌트가 오른쪽에서 슬라이드하여 투명하게 나타날 때 및 이탈할 때 오른쪽으로 슬라이드되고 희미하게 사라지도록 하는 몇 가지 스타일이 추가되었어요. <code v-pre>Transition</code>와 <code v-pre>TransitionGroup</code>는 내부에서 DOM에 진입하거나 나가는 요소에 해당 클래스를 적용할 것이므로 이러한 속성에 스타일을 적용하면 동일하게 애니메이션을 적용하도록 하는 것과 같아요. 다르게 처리하려면 클래스별로 스타일을 조정할 수 있어요(여기에서 자세히 읽기)```</li>
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
<p>자, 이제 토스트를 터트려 봅시다!</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1200/1*e5Nw32YlEopYoLA6glIJZg.gif" alt="이미지"></p>
<h1 id="빵이-움직이고-있어요" tabindex="-1"><a class="header-anchor" href="#빵이-움직이고-있어요" aria-hidden="true">#</a> 빵이 움직이고 있어요!</h1>
<p>안녕하세요, 이 글을 읽어주셔서 감사합니다. 이 글에 대한 코드는 다음 저장소에서 확인할 수 있어요: https://github.com/Serpentarius13/toast-tutorial. 무언가를 배운 것이 있다면 좋아요를 눌러주세요. 이 글을 공유하고 싶다면 함께 공유해주세요. 좋은 하루 되세요!</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:484/1*cRcpROx-HfBUSamYwytqfQ.gif" alt="이미지"></p>
</div></template>
