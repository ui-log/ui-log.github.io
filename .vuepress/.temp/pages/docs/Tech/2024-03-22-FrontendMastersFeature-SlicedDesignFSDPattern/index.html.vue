<template><div><p><img src="@source/docs/Tech/2024-03-22-FrontendMastersFeature-SlicedDesignFSDPattern/img/Frontend-Masters:-Feature-Sliced-Design-(FSD)-Pattern_0.png" alt="Frontend Masters: Feature Sliced Design (FSD) Pattern"></p>
<h2 id="복잡한-프로젝트를-맛있는-피자로-상상해보세요-기능-슬라이싱이-어떻게-작동하는지-이해하려면-한-조각씩-나눠보면-됩니다-쉽게-관리할-수-있고-맛있게-유지할-수-있어요-🍕" tabindex="-1"><a class="header-anchor" href="#복잡한-프로젝트를-맛있는-피자로-상상해보세요-기능-슬라이싱이-어떻게-작동하는지-이해하려면-한-조각씩-나눠보면-됩니다-쉽게-관리할-수-있고-맛있게-유지할-수-있어요-🍕" aria-hidden="true">#</a> 복잡한 프로젝트를 맛있는 피자로 상상해보세요. 기능 슬라이싱이 어떻게 작동하는지 이해하려면 한 조각씩 나눠보면 됩니다. 쉽게 관리할 수 있고 맛있게 유지할 수 있어요! 🍕</h2>
<p>Medium 이야기에서 했던 말을 반복할 거예요. 이 글은 이해하기 어려울 수도 있는 긴 글일 거예요. 하지만 이 글을 읽고 완벽하게 이해한다면, 당신은 이제 10배 더 뛰어난 프론트엔드 개발자가 될 거에요. 😎 커피를 마셔볼까요? ☕️ 충분한 커피를 마시지 않으면 10배 개발자가 되는 데 더 오래 걸릴 거예요. 😅</p>
<p>웹 및 모바일 애플리케이션을 더 작은 부분인 기능 세트로 나누어 간단하게 만들기를 좋아해요. 각 기능 세트에는 자체 사용자 인터페이스, 비즈니스 로직 및 데이터 레이어가 있어서 처리가 쉽습니다. 이 방법은 'Feature-Sliced Design (FSD)'로, 컴포넌트 기반 접근 방식과 같은 이점을 제공해요. FSD에서 가장 강조되는 것은 웹 및 모바일 애플리케이션을 더 관리하기 쉬운 조각으로 분해하는 능력이며, 특히 사용자 중심 기능에 초점을 맞추고 있어요.</p>
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
<h1 id="구조" tabindex="-1"><a class="header-anchor" href="#구조" aria-hidden="true">#</a> 구조</h1>
<p><img src="@source/docs/Tech/2024-03-22-FrontendMastersFeature-SlicedDesignFSDPattern/img/Frontend-Masters:-Feature-Sliced-Design-(FSD)-Pattern_1.png" alt="Frontend Masters: Feature Sliced Design (FSD) Pattern"></p>
<h2 id="레이어-및-슬라이스" tabindex="-1"><a class="header-anchor" href="#레이어-및-슬라이스" aria-hidden="true">#</a> 레이어 및 슬라이스</h2>
<p>당신의 앱을 맛있는 피자로 상상해보세요. 🍕 (도미노 피자에서 일하는 개발자로서, 피자 비유를 사용하는 것이 내 천성적인 권리라고 생각합니다. 😎)</p>
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
<ol>
<li>공유 레이어 (다과실):</li>
</ol>
<ul>
<li>모두를 위한 재료: 여러 조각이 액세스할 수 있는 재사용 가능한 컴포넌트, 유틸리티, 훅, 및 서비스를 보유합니다. (모두가 공통 재료와 도구를 가져 갈 수있는 공유 주방처럼 생각해보세요.)</li>
<li>예시:
<ul>
<li>버튼, 양식, 모달, 네비게이션 바와 같은 공통 UI 요소 ( 사전에 자른 채소와 치즈처럼 생각해보세요.)</li>
<li>데이터 형식화 또는 유효성 검사를 위한 유틸리티 함수 (날카로운 피자 커터와 같은 역할)</li>
<li>일관성을 위한 레시피북인 Redux, Zustand, Tanstack Query 같은 글로벌 상태 관리 솔루션</li>
</ul>
</li>
</ul>
<ol start="2">
<li>프로세스 레이어 (주방 직원):</li>
</ol>
<ul>
<li>열심히 일하는 요리사: 백그라운드 작업 및 데이터 가져오기를 처리하여 피자 주방을 원활하게 운영합니다. (또, 도우, 소스 및 토핑을 준비하고 구운 프로세스를 조율하는 피자 요리사들로 생각해보세요.)</li>
<li>예시:
<ul>
<li>온라인 시스템에서 피자 주문 가져오기</li>
<li>피자가 준비되었을 때 알림 보내기</li>
<li>배송 운전기사와 데이터 동기화하기</li>
</ul>
</li>
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
<ol start="3">
<li>특징 레이어 (피자 조각):</li>
</ol>
<ul>
<li>독립적이고 독립적인: 각 조각은 개별적인 피처를 캡슐화하며, 자체 UI, 로직 및 데이터를 갖추고 있습니다. 마치 각각의 토핑이 올라간 개별적인 피자 조각들처럼.</li>
<li>예시:
<ul>
<li>&quot;피자 주문&quot; 조각: 피자 선택, 맞춤 설정 및 체크아웃을 담당합니다. (페퍼로니, 버섯, 추가 치즈, 수쿡 -소세지- 등 선택 가능!)</li>
<li>&quot;주문 추적&quot; 조각: 주문 상태 및 예상 배달 시간을 표시합니다. (마치 피자 추적기처럼)</li>
<li>&quot;피자 리뷰&quot; 조각: 고객이 경험에 대한 평가 및 의견을 작성할 수 있습니다. (셰프에게 피드백을 제공하는 양식)</li>
</ul>
</li>
</ul>
<ol start="4">
<li>앱 레이어 (피자 셰프):</li>
</ol>
<ul>
<li>주방장: 전체 피자 제조 작업을 감독하며, 어떤 조각을 구워야 할지 및 이를 고객에게 어떻게 제공할지 결정합니다. (메뉴를 디자인하고, 새로운 레시피를 만들고, 각 피자가 완벽하게 조리되도록 하는 마스터 셰프로 생각해보세요.)</li>
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
<ol start="5">
<li>페이지 레이어 (피자 디스플레이):</li>
</ol>
<ul>
<li>조각 조정: 조각을 의미있는 페이지 레이아웃으로 배열합니다. 마치 접시나 딜리버리 박스에 피자 조각을 정리하는 것과 비슷해요.</li>
<li>예시:
<ul>
<li>홈페이지: &quot;추천 피자&quot;와 &quot;주문 내역&quot; 조각을 결합합니다.</li>
<li>내 계정: &quot;개인 정보&quot;와 &quot;주문 선호도&quot; 조각을 포함합니다.</li>
</ul>
</li>
</ul>
<ol start="6">
<li>위젯 레이어 (향신료):</li>
</ol>
<ul>
<li>선택적인 맛 향상제: 작고 재사용 가능한 UI 구성 요소로, 조각이나 페이지/화면에 뒤죽박죽 뿌려 넣을 수 있는데, 마치 피자에 추가 양념을 넣는 듯한 느낌입니다.</li>
<li>예시:
<ul>
<li>검색 바 (좋아하는 피자를 빠르게 찾을 수 있게 해줍니다)</li>
<li>사용자 알림 패널 (피자가 준비되었을 때 알려줍니다)</li>
<li>모달 대화상자 (특별 요청이나 확인에 사용됩니다)</li>
</ul>
</li>
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
<ol start="5">
<li>Entities Layer (The Raw Ingredients):</li>
</ol>
<ul>
<li>데이터의 기본 구성 요소: 피자의 밀가루, 효모 및 토핑과 같은 핵심 비즈니스 개체를 나타냅니다.</li>
<li>예시:
<ul>
<li>사용자 엔티티 (고객 세부 정보 저장)</li>
<li>피자 엔티티 (피자 종류 및 재료 정의)</li>
<li>주문 엔티티 (주문 정보 추적)</li>
</ul>
</li>
</ul>
<p>기억해야 할 중요한 점:</p>
<ul>
<li>각 레이어는 명확한 책임과 종속성 방향을 갖습니다.</li>
<li>조각들은 서로 피자 조각이 공통 크러스트를 공유하는 것처럼 정의된 계약을 사용하여 통신할 수 있습니다.</li>
<li>목표는 모듈식, 독립적이며 쉽게 테스트할 수 있는 조각을 생성하여 “피자” 코드베이스를 더 관리 가능하고 맛있게 만드는 것입니다!</li>
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
<p>여분의 피자 비유 노트:</p>
<ul>
<li>주방 직원(프로세스)들은 준비된 재료들을 처리하고 원활한 피자 제조과정을 보장합니다.</li>
<li>피자 셰프(앱)는 창의적인 사고를 통해 서로 다른 피자(기능)들을 만들어내며, 어떻게 제공할지를 결정합니다.</li>
<li>원재료(엔티티)는 어떤 피자에도 필수적이지만, 고객에게는 항상 보이지 않습니다. 그들은 모든 다른 것이 가능하도록 하는 기반입니다.</li>
</ul>
<p><img src="@source/docs/Tech/2024-03-22-FrontendMastersFeature-SlicedDesignFSDPattern/img/Frontend-Masters:-Feature-Sliced-Design-(FSD)-Pattern_2.png" alt="Frontend-Masters:-Feature-Sliced-Design-(FSD)-Pattern_2.png"></p>
<h2 id="세그먼트-토핑" tabindex="-1"><a class="header-anchor" href="#세그먼트-토핑" aria-hidden="true">#</a> 세그먼트(토핑):</h2>
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
<li>한 조각 안에 들어 있는 재료: 한 조각은 완전체이지만 종종 세그먼트라고 불리는 작은 부분들로 구성됩니다. 이들은 피자 조각을 이루는 개별 토핑과 같이 작용합니다.</li>
<li>특정 작업에 집중: 각 세그먼트는 자신이 담당한 작업에 집중하며, 특정한 UI 요소, 데이터 조작 또는 로직 조각과 같은 역할을 담당합니다.</li>
<li>예시:</li>
<li>&quot;피자 주문&quot; 조각 안에서:</li>
<li>&quot;피자 메뉴&quot; 세그먼트: 이용 가능한 피자 옵션과 가격을 표시합니다.</li>
<li>&quot;토핑 선택기&quot; 세그먼트: 고객이 원하는 토핑을 선택할 수 있게 합니다.</li>
<li>&quot;결제 양식&quot; 세그먼트: 결제 및 배송 정보를 수집합니다.</li>
</ul>
<p>최신 React 방식에 따라:</p>
<p>각 조각은 다음 세그먼트 중 하나 이상으로 나뉩니다:</p>
<ul>
<li>ui/: 사용자 인터페이스 컴포넌트 및 UI 관련 로직</li>
<li>model/: 비즈니스 로직 (스토어, 액션, 이펙트, 리듀서 등)</li>
<li>lib/: 인프라 로직 (유틸리티/도움 함수)</li>
<li>config/: 로컬 구성 (상수, 열거형, 메타 정보)</li>
<li>api/: API 요청 로직 (API 인스턴스, 요청 등)</li>
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
<p>중요 사항을 기억해야 할 부분:</p>
<ul>
<li>슬라이스는 크고 독립적인 기능이며, 세그먼트는 슬라이스 내에서 작고 중점을 두는 부분입니다.</li>
<li>각 슬라이스는 여러 세그먼트를 가질 수 있습니다. 마치 피자 슬라이스에 다양한 토핑이 올라가는 것과 같습니다.</li>
<li>목표는 이해하기 쉽고 개발 및 유지하기 쉬운 잘 구성된 모듈식 코드를 만드는 것입니다. 바로 피자에 환상적으로 배열된 토핑을 올리듯이 각각이 전체 피자에 독특한 맛을 더하는 것과 같습니다!</li>
</ul>
<h2 id="_1-폴더-구조-피자-주방-조직" tabindex="-1"><a class="header-anchor" href="#_1-폴더-구조-피자-주방-조직" aria-hidden="true">#</a> 1. 폴더 구조 (피자 주방 조직):</h2>
<p><img src="@source/docs/Tech/2024-03-22-FrontendMastersFeature-SlicedDesignFSDPattern/img/Frontend-Masters:-Feature-Sliced-Design-(FSD)-Pattern_3.png" alt="이미지"></p>
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
<h2 id="_2-피자-조각-주문하기-더-엑스트라바건자" tabindex="-1"><a class="header-anchor" href="#_2-피자-조각-주문하기-더-엑스트라바건자" aria-hidden="true">#</a> 2. 피자 조각 주문하기 (더 엑스트라바건자):</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// features/order-pizza/slice.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">OrderPizzaSliceProps</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 조각 관련 props</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">OrderPizzaSlice</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>OrderPizzaSliceProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token comment">/* ...props */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 조각 로직 및 상태 관리</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>PizzaMenu <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ToppingSelector <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>CheckoutForm <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> OrderPizzaSlice<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-피자-메뉴-세그먼트-도우-베이스" tabindex="-1"><a class="header-anchor" href="#_3-피자-메뉴-세그먼트-도우-베이스" aria-hidden="true">#</a> 3. 피자 메뉴 세그먼트 (도우 베이스):</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// features/order-pizza/components/PizzaMenu.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">PizzaMenuProps</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 피자 옵션들</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token literal-property property">PizzaMenu</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>PizzaMenuProps<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token comment">/* ...props */</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ... 피자 옵션들을 가져와서 보여주기</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ul<span class="token operator">></span><span class="token punctuation">{</span><span class="token comment">/* 피자 옵션 목록 */</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> PizzaMenu<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="_4-홈페이지-피자-디스플레이-카운터" tabindex="-1"><a class="header-anchor" href="#_4-홈페이지-피자-디스플레이-카운터" aria-hidden="true">#</a> 4. 홈페이지 (피자 디스플레이 카운터):</h2>
<p>Feature-Sliced Design (FSD)는 피자를 개별적이고 청결하게 잘라내는 것처럼, 각각의 토핑과 맛이 있는 조각들로 나누는 것을 의미합니다. 이 방식의 좋은 점과 그렇지 않은 점은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// pages/HomePage.tsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> OrderPizzaSlice <span class="token keyword">from</span> <span class="token string">"../features/order-pizza/slice"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">HomePage</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>도미노피자에 오신 것을 환영합니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>OrderPizzaSlice <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HomePage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>코드에서 주요 포인트:</p>
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
<li>명확한 폴더 구조: 각 조각은 자체 폴더를 가지고 있어 구성 요소와 로직이 정리되어 있습니다.</li>
<li>독립적인 조각: 각 조각은 스스로 포함된 피자처럼 독립적으로 개발하고 테스트할 수 있습니다.</li>
<li>재사용 가능한 구성 요소: 공유 구성 요소 (버튼, 입력 등)는 일관성과 효율성을 위해 조각들 사이에서 사용할 수 있습니다.</li>
<li>페이지 내 조합: 페이지는 조각들을 결합하여 의미 있는 레이아웃을 만들어냅니다. 마치 피자 조각을 접시에 배열하는 것처럼요.</li>
</ul>
<p>기억해 주세요: 이것은 간단한 예제입니다. 실제로 FSD는 더 복잡한 상태 관리, 데이터 가져오기 및 조각들 간 통신을 필요로 합니다. 그러나 이 예제는 FSD를 사용하여 React 앱을 구성하는 핵심 원칙을 보여줍니다.</p>
<h2 id="이-좋은-거-조각들-🍕" tabindex="-1"><a class="header-anchor" href="#이-좋은-거-조각들-🍕" aria-hidden="true">#</a> 이 좋은 거 (조각들): 🍕</h2>
<ul>
<li>쉽게 관리할 수 있음: 분리된 피자 조각처럼 각 기능은 자체적으로 독립적이어서 코드를 이해, 수정 및 업데이트하기 쉽게 만듭니다. 한 부분을 변경할 때 다른 부분에 영향을 주는 도미노 효과는 더 이상 없어요!</li>
<li>점점 더 커질 수 있음: 더 많은 기능이 필요한가요? 그저 더 많은 조각을 추가하세요! FSD는 앱이 새로운 필요에 적응하여 스피노자를 채소 속 달콤한 매운 피망으로 추가하는 것처럼 우아하게 성장할 수 있게 합니다.</li>
<li>개발 속도가 빨라짐: 서로 다른 팀이 동시에 각각의 조각에서 작업할 수 있어, 여러 셰프가 피자를 만드는 것처럼 개발을 가속화할 수 있어요.</li>
<li>명확한 소유권: 각 조각은 “pizzaiolo(피자 요리사)”가 따로 있어, 개발자가 품질과 성능에 대한 책임을 질 것입니다. 각 셰프가 자신의 작품에 자부심을 가지는 것과 유사하죠.</li>
<li>간단한 테스트: 테스트는 각 조각을 완성도에 따라 점검하는 것처럼 되어, 보다 집중적이고 효율적으로 이루어집니다.</li>
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
<h2 id="그다지-좋지-않은-부분-크러스트-👎🏻" tabindex="-1"><a class="header-anchor" href="#그다지-좋지-않은-부분-크러스트-👎🏻" aria-hidden="true">#</a> 그다지 좋지 않은 부분 (크러스트):👎🏻</h2>
<ul>
<li>더 까다로운 계획: 슬라이스들이 매끄럽게 작동되어야 하는데, 치즈가 넘어가지 않도록 조심스러운 계획과 의사 소통이 필요합니다. 치킨 피자를 만들 때 피자가 난잡해지지 않도록 신중한 계획과 의사 소통이 중요합니다.</li>
<li>학습 곡선: 초보자들은 &quot;피자&quot;의 분산된 성격에 대해 처음에 혼동스러워할 수 있습니다. 예를 들어, 소세지 청크를 찾는 방법과 같은 것들. 좋은 문서 작성은 이들이 항해할 수 있도록 돕는데 꼭 필요합니다.</li>
<li>팀워크에 대한 추가 노력: 슬라이스 간의 원활한 통신과 연결을 보장하는 것은 살과 같은 시간과 주의가 필요합니다. 완벽한 피자를 함께 만들기 위해 요리사들을 조율하는 것과 같은 노력이 필요합니다.</li>
<li>잠재적인 중복: 때로는 두 슬라이스에 유사한 재료가 포함될 수 있습니다. 예를 들어, 모짜렐라와 리코타 치즈를 함께 가지고 있는 경우. 신중한 계획과 자원 공유를 통해 불필요한 중복을 방지할 수 있습니다.</li>
<li>한정된 도구: FSD는 아직 상대적으로 새로운 기술이기 때문에 그에 특화된 도구를 찾는 것이 유니콘 모양의 피자 커터를 찾는 것과 같을 수 있습니다. 처음에는 몇 가지 추가 노력이 필요할 수 있습니다.</li>
</ul>
<h2 id="결정" tabindex="-1"><a class="header-anchor" href="#결정" aria-hidden="true">#</a> 결정:</h2>
<p>FSD는 대규모 및 복잡한 앱에 대한 훌륭한 전략처럼 보이지만, 한 사이즈로 모든 프로젝트에 적합한 레시피는 아닙니다. 뛰어들기 전에 프로젝트의 규모, 팀 및 개발 환경을 고려해보세요. 기술과 재료가 적합하지 않으면 가장 맛있는 피자조차 만드는 것이 까다로울 수 있다는 것을 기억해주세요!</p>
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
