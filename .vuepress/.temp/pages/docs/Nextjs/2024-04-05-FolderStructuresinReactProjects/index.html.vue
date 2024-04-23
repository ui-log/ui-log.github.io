<template><div><img src="@source/docs/Nextjs/2024-04-05-FolderStructuresinReactProjects/img/FolderStructuresinReactProjects_0.png" />
<p>React 프로젝트 내 파일과 디렉토리를 조직하는 것은 유지보수성, 확장성 및 쉬운 탐색을 위해 중요합니다. 이 기사는 React 프로젝트의 일반 아키텍처와 폴더 구조를 다양한 규모로 탐색하며, 각 레벨에 대한 명확한 데모를 제공합니다.</p>
<h1 id="_1️⃣-레벨-1-파일-유형-별-그룹화" tabindex="-1"><a class="header-anchor" href="#_1️⃣-레벨-1-파일-유형-별-그룹화" aria-hidden="true">#</a> 1️⃣ 레벨 1: &quot;파일 유형&quot;별 그룹화</h1>
<p>이 구조는 간결함을 특징으로 하는데요 — 파일을 유형에 따라 그룹화하는 것입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>└── src<span class="token operator">/</span>
    ├── assets<span class="token operator">/</span>
    ├── api<span class="token operator">/</span>
    ├── configs<span class="token operator">/</span>
    ├── components<span class="token operator">/</span>
    │   ├── SignUpForm<span class="token punctuation">.</span>tsx
    │   ├── Employees<span class="token punctuation">.</span>tsx
    │   ├── PaymentForm<span class="token punctuation">.</span>tsx
    │   └── Button<span class="token punctuation">.</span>tsx
    ├── hooks<span class="token operator">/</span>
    │   ├── usePayment<span class="token punctuation">.</span>ts
    │   ├── useUpdateEmployee<span class="token punctuation">.</span>ts
    │   ├── useEmployees<span class="token punctuation">.</span>ts
    │   └── useAuth<span class="token punctuation">.</span>tsx
    ├── lib<span class="token operator">/</span>
    ├── services<span class="token operator">/</span>
    ├── states<span class="token operator">/</span>
    └── utils<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트 크기: 소형에서 중형</p>
<p>장점: 간단하고 직관적</p>
<p>단점:</p>
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
<li>빠르게 커지고 유지 관리하기 어려워집니다.</li>
<li>비즈니스 관련 사항을 분리하지 않습니다.</li>
</ul>
<p>예를 들어 결제를 중심으로 많은 코드가 있는 경우를 상상해보세요. 어느 날 비즈니스 전체가 바뀌거나 더 이상 필요하지 않을 때, 그것을 대체하거나 제거하기 얼마나 쉬운지요? 이 폴더 구조로는 필요한 변경 사항을 적용하려면 매 폴더와 그 내부 파일을 모두 확인해야 합니다. 그리고 프로젝트가 계속 커진다면, 시간이 지날수록 점점 나빠지는 유지 관리 지옥에 빠질 것입니다.</p>
<h1 id="_2️⃣-레벨-2-파일-유형-및-기능별-그룹화" tabindex="-1"><a class="header-anchor" href="#_2️⃣-레벨-2-파일-유형-및-기능별-그룹화" aria-hidden="true">#</a> 2️⃣ 레벨 2: “파일 유형” 및 기능별 그룹화</h1>
<p>프로젝트가 성장함에 따라 “레벨 2” 구조는 각 유형 내에서 특성별로 그룹화를 소개합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>└── src<span class="token operator">/</span>
    ├── assets<span class="token operator">/</span>
    ├── api<span class="token operator">/</span>
    ├── configs<span class="token operator">/</span>
    ├── components<span class="token operator">/</span>
    │   ├── auth<span class="token operator">/</span>
    │   │   └── SignUpForm<span class="token punctuation">.</span>tsx
    │   ├── payment<span class="token operator">/</span>
    │   │   └── PaymentForm<span class="token punctuation">.</span>tsx
    │   ├── common<span class="token operator">/</span>
    │   │   └── Button<span class="token punctuation">.</span>tsx
    │   └── employees<span class="token operator">/</span>
    │       ├── EmployeeList<span class="token punctuation">.</span>tsx
    │       └── EmployeeSummary<span class="token punctuation">.</span>tsx
    ├── hooks<span class="token operator">/</span>
    │   ├── auth<span class="token operator">/</span>
    │   │   └── useAuth<span class="token punctuation">.</span>ts
    │   ├── payment<span class="token operator">/</span>
    │   │   └── usePayment<span class="token punctuation">.</span>ts
    │   └── employees<span class="token operator">/</span>
    │       ├── useEmployees<span class="token punctuation">.</span>ts
    │       └── useUpdateEmployee<span class="token punctuation">.</span>ts
    ├── lib<span class="token operator">/</span>
    ├── services<span class="token operator">/</span>
    ├── states<span class="token operator">/</span>
    └── utils<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트 규모: 중대형</p>
<p>장점:</p>
<ul>
<li>단순하고 직관적임</li>
<li>기능별로 그룹화돼 있음</li>
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
<p>단점:</p>
<ul>
<li>기능과 관련된 로직이 여전히 여러 폴더 유형에 분산되어 있습니다.</li>
</ul>
<p>이제 결제 모듈을 수정하거나 제거해야 할 문제에 다시 돌아가 봅시다. 이 구조를 사용하면 지금 그 작업이 훨씬 쉬워졌습니다.</p>
<p>&quot;레벨 2&quot; 폴더 구조는 선택할 게 없다면 내가 권장하는 것입니다.</p>
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
<h1 id="_3️⃣-레벨-3-기능-모듈별-그룹화" tabindex="-1"><a class="header-anchor" href="#_3️⃣-레벨-3-기능-모듈별-그룹화" aria-hidden="true">#</a> 3️⃣ 레벨 3: 기능/모듈별 그룹화</h1>
<p>대형 프로젝트의 경우, &quot;레벨 3&quot; 구조는 매우 모듈화된 방식을 제공하며, 각 모듈 내의 응용 프로그램 다른 측면에 대한 명확한 경계를 정의합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>└── src<span class="token operator">/</span>
    ├── assets<span class="token operator">/</span>
    ├── modules<span class="token operator">/</span>
    <span class="token operator">|</span>   ├── core<span class="token operator">/</span>
    │   │   ├── components<span class="token operator">/</span>
    │   │   ├── design<span class="token operator">-</span>system<span class="token operator">/</span>
    │   │   │   └── Button<span class="token punctuation">.</span>tsx
    │   │   ├── hooks<span class="token operator">/</span>
    │   │   ├── lib<span class="token operator">/</span>
    │   │   └── utils<span class="token operator">/</span>
    │   ├── payment<span class="token operator">/</span>
    │   │   ├── components<span class="token operator">/</span>
    │   │   │   └── PaymentForm<span class="token punctuation">.</span>tsx
    │   │   ├── hooks<span class="token operator">/</span>
    │   │   │   └── usePayment<span class="token punctuation">.</span>ts
    │   │   ├── lib<span class="token operator">/</span>
    │   │   ├── services<span class="token operator">/</span>
    │   │   ├── states<span class="token operator">/</span>
    │   │   └── utils<span class="token operator">/</span>
    │   ├── auth<span class="token operator">/</span>
    │   │   ├── components<span class="token operator">/</span>
    │   │   │   └── SignUpForm<span class="token punctuation">.</span>tsx
    │   │   ├── hooks<span class="token operator">/</span>
    │   │   │   └── useAuth<span class="token punctuation">.</span>ts
    │   │   ├── lib<span class="token operator">/</span>
    │   │   ├── services<span class="token operator">/</span>
    │   │   ├── states<span class="token operator">/</span>
    │   │   └── utils<span class="token operator">/</span>
    │   └── employees<span class="token operator">/</span>
    │       ├── components<span class="token operator">/</span>
    │       │   ├── EmployeeList<span class="token punctuation">.</span>tsx
    │       │   └── EmployeeSummary<span class="token punctuation">.</span>tsx
    │       ├── hooks<span class="token operator">/</span>
    │       │   ├── useEmployees<span class="token punctuation">.</span>ts
    │       │   └── useUpdateEmployee<span class="token punctuation">.</span>ts
    │       ├── services<span class="token operator">/</span>
    │       ├── states<span class="token operator">/</span>
    │       └── utils<span class="token operator">/</span>
    └── <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트 규모: 대형 및 복잡</p>
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
<p>장점:</p>
<ul>
<li>기능/모듈로 명확하게 그룹화됩니다.</li>
<li>기능/모듈은 실제 세상의 객체들을 명확하게 대표합니다.</li>
</ul>
<p>단점:</p>
<ul>
<li>올바른 그룹화 결정을 내리기 위해 비즈니스 로직에 대해 잘 알아야 합니다.</li>
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
<p>다음에는 결제 로직을 제거하거나 수정하려면 시작해야 할 위치를 즉시 알 수 있습니다.</p>
<h1 id="폴더-이름에-일관된-의미-부여하기" tabindex="-1"><a class="header-anchor" href="#폴더-이름에-일관된-의미-부여하기" aria-hidden="true">#</a> 폴더 이름에 일관된 의미 부여하기</h1>
<p>구조 수준에 관계없이 특정 폴더 이름은 특정 의미를 가져야 합니다. 폴더 이름이 무엇을 의미하는지는 귀하의 기호나 프로젝트 규칙에 따라 달라질 수 있습니다.</p>
<p>일반적으로 폴더 이름에 대해 고려해야 할 사항은 다음과 같습니다:</p>
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
<h1 id="ui-구성-요소" tabindex="-1"><a class="header-anchor" href="#ui-구성-요소" aria-hidden="true">#</a> UI 구성 요소</h1>
<ul>
<li>components: 주요 UI 구축 블록인 React 구성 요소들.</li>
<li>design-system: 디자인 시스템을 기반으로 한 기본 UI 요소 및 패턴.</li>
<li>icons: 인라인으로 사용되는 SVG 아이콘들.</li>
</ul>
<h1 id="react-특화" tabindex="-1"><a class="header-anchor" href="#react-특화" aria-hidden="true">#</a> React 특화</h1>
<ul>
<li>hooks: 공유 로직을 위한 사용자 정의 React 훅.</li>
<li>hocs: React 고차 구성 요소.</li>
<li>contexts/providers: React 컨텍스트와 프로바이더를 포함합니다.</li>
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
<h1 id="유틸리티-및-외부-연동" tabindex="-1"><a class="header-anchor" href="#유틸리티-및-외부-연동" aria-hidden="true">#</a> 유틸리티 및 외부 연동</h1>
<ul>
<li>utils: 비즈니스 로직이나 특정 기술과 관련이 없는 범용 로직을 위한 유틸리티 (예: 문자열 조작, 수학 계산 등).</li>
<li>lib: 특정 기술과 관련된 유틸리티 (예: DOM 조작, HTML 관련 로직, localStorage, IndexedDB 등).</li>
<li>플러그인: 서드파티 플러그인 (예: i18n, Sentry 등).</li>
</ul>
<h1 id="비즈니스-로직" tabindex="-1"><a class="header-anchor" href="#비즈니스-로직" aria-hidden="true">#</a> 비즈니스 로직</h1>
<ul>
<li>서비스: 주요 비즈니스 및 애플리케이션 로직을 캡슐화합니다.</li>
<li>도우미: 비즈니스에 특화된 유틸리티를 제공합니다.</li>
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
<h1 id="스타일" tabindex="-1"><a class="header-anchor" href="#스타일" aria-hidden="true">#</a> 스타일</h1>
<ul>
<li>styles: (글로벌) CSS 또는 CSS-in-JS 스타일을 포함합니다.</li>
</ul>
<h1 id="typescript-및-설정" tabindex="-1"><a class="header-anchor" href="#typescript-및-설정" aria-hidden="true">#</a> TypeScript 및 설정</h1>
<ul>
<li>types: 일반적인 TypeScript 타입, 열거형 및 인터페이스에 사용됩니다.</li>
<li>configs: 애플리케이션을 위한 설정입니다 (예: 환경 변수).</li>
<li>constants: 변경되지 않는 값들입니다 (예: <code v-pre>export const MINUTES_PER_HOUR = 60</code>).</li>
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
<h1 id="서버-통신" tabindex="-1"><a class="header-anchor" href="#서버-통신" aria-hidden="true">#</a> 서버 통신</h1>
<ul>
<li>api: 서버와 통신하는 논리에 사용합니다.</li>
<li>graphql: GraphQL에 특화된 코드입니다.</li>
</ul>
<h1 id="상태-관리" tabindex="-1"><a class="header-anchor" href="#상태-관리" aria-hidden="true">#</a> 상태 관리</h1>
<ul>
<li>states/store: 전역 상태 관리 논리 (Zustand, Valtio, Jotai 등)</li>
<li>reducers, store, actions, selectors: Redux에 특화된 논리</li>
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
<h1 id="라우팅" tabindex="-1"><a class="header-anchor" href="#라우팅" aria-hidden="true">#</a> 라우팅</h1>
<ul>
<li>routes/router: 라우트를 정의합니다 (React Router나 유사한 도구를 사용하는 경우).</li>
<li>pages: 페이지의 진입 지점 컴포넌트를 정의합니다.</li>
</ul>
<h1 id="테스트" tabindex="-1"><a class="header-anchor" href="#테스트" aria-hidden="true">#</a> 테스트</h1>
<ul>
<li>tests: 코드에 대한 단위 테스트 및 기타 종류의 테스트를 정의합니다.</li>
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
<h1 id="🏁-결론" tabindex="-1"><a class="header-anchor" href="#🏁-결론" aria-hidden="true">#</a> 🏁 결론</h1>
<p>React 프로젝트에서 적절한 폴더 구조를 선택하는 것은 매우 중요하며 프로젝트의 크기와 복잡성에 기반해야 합니다. &quot;레벨 1&quot;은 작은 프로젝트에 적합할 수 있지만, &quot;레벨 2&quot;와 &quot;레벨 3&quot;은 중간 및 대규모 프로젝트에 더 조직적이고 모듈화된 구조를 제공합니다. 저는 개인적으로 &quot;레벨 2&quot; 폴더 구조를 많이 추천합니다. 또한, 흔히 사용되는 폴더 이름을 이해하는 것은 React 애플리케이션 전반에 걸쳐 일관된 및 직관적인 아키텍처를 유지하는 데 도움이 됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-FolderStructuresinReactProjects/img/FolderStructuresinReactProjects_1.png" alt="Folder Structures in React Projects"></p>
<p>만약 제 작업을 지원하고 싶으시다면 아래 링크를 통해 유튜브에서 구독해주시면 감사하겠습니다: [YouTube 채널](YouTube Channel). 여러분의 후원은 제 창의력을 지원하고 유용한 콘텐츠를 계속 공유할 수 있게 해줍니다. 지원해주셔서 감사합니다!</p>
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
<p>저와 연결하세요: LinkedIn.</p>
<p>제 GitHub 프로젝트에 별을 주세요 ⭐️</p>
<p>즐거운 코딩하세요! 🚀</p>
</div></template>
