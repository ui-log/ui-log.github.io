<template><div><p>안녕하세요, 이 게시물에서는 웹 기반 사용자 인터페이스 (UI) 애플리케이션을 위한 종단 간 (End-To-End, E2E) 테스트에 대한 새로운 시각을 제공하는 혁신적인 라이브러리인 SafeTest를 소개하게 되어 기쁩니다.</p>
<h1 id="전통적인-ui-테스트의-어려움" tabindex="-1"><a class="header-anchor" href="#전통적인-ui-테스트의-어려움" aria-hidden="true">#</a> 전통적인 UI 테스트의 어려움</h1>
<p>기존에 UI 테스트는 단위 테스트 또는 통합 테스트(종단 간, E2E 테스트로도 불림) 중 하나를 통해 수행되어 왔습니다. 그러나 각각의 방법은 고유한 Trade-off를 제시합니다: 테스트 픽스처와 설정을 제어하거나 테스트 드라이버를 제어하는 사이에서 선택해야 합니다.</p>
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
<p>예를 들어, react-testing-library를 사용하는 경우, 단위 테스트 솔루션으로 완전한 컨트롤을 유지하여 렌더링할 대상 및 기본 서비스 및 가져온 항목들이 어떻게 동작해야 하는지 제어할 수 있습니다. 그러나 실제 페이지와 상호 작용하는 능력을 잃을 수 있어 다양한 어려움을 겪을 수 있습니다:</p>
<ul>
<li>&quot;Dropdown/&quot; 컴포넌트와 같이 복잡한 UI 요소와 상호 작용하기 어려움.</li>
<li>CORS 설정이나 GraphQL 호출을 테스트할 수 없음.</li>
<li>버튼의 클릭 가능성에 영향을 미치는 z-index 문제에 대한 시각적 표시 부족.</li>
<li>테스트의 복잡하고 직관적이지 않은 작성 및 디버깅.</li>
</ul>
<p>반면에 Cypress나 Playwright와 같은 통합 테스트 도구를 사용하면 페이지에 대한 제어는 가능하지만 앱의 부트스트래핑 코드를 조작할 수 있는 능력을 희생해야 합니다. 이러한 도구들은 브라우저를 원격으로 제어하여 URL을 방문하고 페이지와 상호 작용하는 방식으로 작동합니다. 이 방법에는 다음과 같은 도전 과제가 있습니다:</p>
<ul>
<li>사용자 정의 네트워크 레이어 API 재작성 규칙을 구현하지 않고 대체 API 엔드포인트에 호출할 때 어려움.</li>
<li>감시자/가짜에 단언을 만들거나 앱 내 코드를 실행할 수 없음.</li>
<li>다크 모드와 같은 것을 테스트하는 것이 클릭 스위처를 클릭하거나 localStorage 메커니즘을 재정의하는 방법을 알지 않으면 어려움.</li>
<li>예를 들어 특정 버튼을 클릭하고 60초 타이머를 카운트다운하기를 기다려야만 표시되는 컴포넌트와 같은 앱 세그먼트를 테스트할 수 없음.</li>
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
<p>위기를 인식하면서 Cypress와 Playwright에서 제공하는 E2E 컴포넌트 테스팅과 같은 해결책들이 등장했습니다. 이 도구들은 기존의 통합 테스트 방법의 단점을 해결하려고 노력하지만, 그들만의 아키텍처로 인해 다른 제약 사항이 있습니다. 컴포넌트를 로드하거나 설정 코드를 불러오기 위해 부트스트래핑 코드로 개발 서버를 시작하는데, 이로 인해 OAuth나 복잡한 빌드 파이프라인을 가진 기업 애플리케이션을 처리하는 능력이 제한될 수 있습니다. 게다가 TypeScript 사용법을 업데이트하면 Cypress/Playwright 팀이 러너를 업데이트할 때까지 테스트가 망가질 수도 있습니다.</p>
<h1 id="safetest에-오신-것을-환영합니다" tabindex="-1"><a class="header-anchor" href="#safetest에-오신-것을-환영합니다" aria-hidden="true">#</a> SafeTest에 오신 것을 환영합니다</h1>
<p>SafeTest는 UI 테스트에 혁신적인 접근 방식을 통해 이러한 문제를 해결하고자 합니다. 주요 아이디어는 우리 애플리케이션 부트스트래핑 단계에 코드 스니펫을 넣어 테스트를 실행할 후크를 주입하는 것입니다 (이 동작이 어떤 역할을 하는지에 대한 자세한 내용은 Safetest 작동 방법 섹션을 참조하세요). 이 접근 방식이 어떻게 작동하는지에 대한 부분은 SafeTest가 테스트를 실행할 때에만 테스트를 동적으로 불러오기 위해 레이지 로딩을 활용하므로 앱을 일반적으로 사용하는 데 어떠한 측정 가능한 영향도 없다는 점을 유의하십시오 (README 예제에서 테스트는 제품 번들에 전혀 포함되어 있지 않습니다). 이것이 준비되면 Playwright를 사용하여 정기적인 테스트를 실행하여 테스트에 대해 원하는 이상적인 브라우저 컨트롤을 얻을 수 있습니다.</p>
<p>이 접근 방식은 몇 가지 흥미로운 기능도 잠재적으로 제공합니다:</p>
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
<li>노드 테스트 서버를 실행할 필요 없이 특정 테스트로의 딥 링킹 가능합니다.</li>
<li>브라우저와 테스트(node) 컨텍스트 간 양방향 통신이 가능합니다.</li>
<li>Playwright에서 제공하는 모든 DX 기능에 액세스할 수 있습니다 ( @playwright/test에 딸려오는 기능 제외).</li>
<li>테스트 비디오 녹화, 트레이스 보기, 다양한 페이지 선택기/액션을 시도하기 위한 일시 중지 기능이 제공됩니다.</li>
<li>브라우저 내의 스파이에 대한 어설션을 생성하고, 노드에서 브라우저 내부 호출의 스냅샷을 매치할 수 있습니다.</li>
</ul>
<h1 id="safetest으로-테스트를-작성하는-예제" tabindex="-1"><a class="header-anchor" href="#safetest으로-테스트를-작성하는-예제" aria-hidden="true">#</a> SafeTest으로 테스트를 작성하는 예제</h1>
<p>SafeTest는 UI 테스트를 진행해 본 경험이 있는 모두에게 친숙하게 느껴지도록 설계되었으며, 기존 솔루션의 최상의 부분을 최대한 활용합니다. 다음은 전체 애플리케이션을 테스트하는 방법의 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> describe<span class="token punctuation">,</span> it<span class="token punctuation">,</span> expect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'safetest/jest'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'safetest/react'</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'my app'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'메인 페이지를 로드합니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'앱에 오신 것을 환영합니다'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">screenshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchImageSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리는 특정 컴포넌트를 쉽게 테스트할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> describe<span class="token punctuation">,</span> it<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> browserMock <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'safetest/jest'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'safetest/react'</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Header component'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'일반 모드가 있습니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'Admin'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'관리자 모드가 있습니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Header admin<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'Admin'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'로그아웃을 할 때 로그아웃 핸들러를 호출합니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> spy <span class="token operator">=</span> browserMock<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Header handleLogout<span class="token operator">=</span><span class="token punctuation">{</span>spy<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'logout'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> spy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="override-활용" tabindex="-1"><a class="header-anchor" href="#override-활용" aria-hidden="true">#</a> Override 활용</h2>
<p>SafeTest는 테스트 중에 값 오버라이드를 허용하기 위해 React Context를 활용합니다. 이 작업이 어떻게 이루어지는지 알아보기 위해, 컴포넌트에서 사용되는 fetchPeople 함수가 있다고 가정해 봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">import</span> <span class="token punctuation">{</span> fetchPerson <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./api/person'</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token keyword">import</span> <span class="token punctuation">{</span> createOverride <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'safetest/react'</span><span class="token punctuation">;</span>

<span class="token operator">+</span><span class="token keyword">const</span> FetchPerson <span class="token operator">=</span> <span class="token function">createOverride</span><span class="token punctuation">(</span>fetchPerson<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">People</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token operator">+</span>  <span class="token keyword">const</span> fetchPeople <span class="token operator">=</span> FetchPerson<span class="token punctuation">.</span><span class="token function">useValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> people<span class="token punctuation">,</span> loading<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAsync</span><span class="token punctuation">(</span>fetchPeople<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
   <span class="token keyword">if</span> <span class="token punctuation">(</span>loading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>Loader <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>ErrorPage error<span class="token operator">=</span><span class="token punctuation">{</span>error<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token operator">&lt;</span>Table data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span> rows<span class="token operator">=</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 지금 이 호출에 대한 응답을 덮어쓸 수 있는 테스트를 할 수 있습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> pending <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* 아무것도 안 함 */</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> resolved <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Foo'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Bar'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> error <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'이런'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'People'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'로딩 상태를 가지고 있습니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>FetchPerson<span class="token punctuation">.</span>Override <span class="token keyword">with</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> pending<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>People <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>FetchPerson<span class="token punctuation">.</span>Override<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'로딩'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'로드된 상태를 가지고 있습니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>FetchPerson<span class="token punctuation">.</span>Override <span class="token keyword">with</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> resolved<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>People <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>FetchPerson<span class="token punctuation">.</span>Override<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'User: Foo, name: 23'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'오류 상태를 가지고 있습니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>FetchPerson<span class="token punctuation">.</span>Override <span class="token keyword">with</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> error <span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>People <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>FetchPerson<span class="token punctuation">.</span>Override<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'사용자 가져오기 오류: "이런"'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>render 함수는 초기 앱 컴포넌트가 전달되는 함수도 허용하여 앱 어디에서든 필요한 요소를 삽입할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'사용자가 로드된 상태를 가지고 있습니다'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">app</span> <span class="token operator">=></span>
    <span class="token operator">&lt;</span>FetchPerson<span class="token punctuation">.</span>Override <span class="token keyword">with</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> resolved<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>app<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>FetchPerson<span class="token punctuation">.</span>Override<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'User: Foo, name: 23'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>오버라이드로 /foo, /bar 및 /baz에서 API 요청을 결합하는 서비스 메서드가 올바른 재시도 메커니즘을 가지고 있고 실패한 API 요청에 대해서만 올바르게 반환 값을 매핑하는 등 복잡한 테스트 케이스를 작성할 수 있습니다. 따라서 /bar이 3번 시도해서 해결될 경우 이 방법은 총 5개의 API 호출을 수행할 것입니다.</p>
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
<p>Overrides는 API 호출에만 국한되지 않습니다 (페이지.route도 사용할 수 있기 때문에), 기능 플래그나 일부 정적 값 변경과 같은 특정 앱 레벨 값도 재정의할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">+</span><span class="token keyword">const</span> UseFlags <span class="token operator">=</span> <span class="token function">createOverride</span><span class="token punctuation">(</span>useFlags<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Admin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token operator">+</span>  <span class="token keyword">const</span> useFlags <span class="token operator">=</span> UseFlags<span class="token punctuation">.</span><span class="token function">useValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">const</span> <span class="token punctuation">{</span> isAdmin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFlags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isAdmin<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>권한 오류<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
   <span class="token comment">// ...</span>
 <span class="token punctuation">}</span>

<span class="token operator">+</span><span class="token keyword">const</span> Language <span class="token operator">=</span> <span class="token function">createOverride</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">LanguageChanger</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
<span class="token operator">-</span>  <span class="token keyword">const</span> language <span class="token operator">=</span> navigator<span class="token punctuation">.</span>language<span class="token punctuation">;</span>
<span class="token operator">+</span>  <span class="token keyword">const</span> language <span class="token operator">=</span> Language<span class="token punctuation">.</span><span class="token function">useValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>현재 언어는 <span class="token punctuation">{</span> language <span class="token punctuation">}</span> 입니다<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>

 <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Admin'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'관리자 플래그로 작동'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span>
       <span class="token operator">&lt;</span>UseIsAdmin<span class="token punctuation">.</span>Override <span class="token keyword">with</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">oldHook</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
         <span class="token keyword">const</span> oldFlags <span class="token operator">=</span> <span class="token function">oldHook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>oldFlags<span class="token punctuation">,</span> <span class="token literal-property property">isAdmin</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token operator">></span>
         <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>UseIsAdmin<span class="token punctuation">.</span>Override<span class="token operator">></span>
     <span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'권한 오류'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">'Language'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
   <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">'표시됨'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> <span class="token punctuation">{</span> page <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">render</span><span class="token punctuation">(</span>
       <span class="token operator">&lt;</span>Language<span class="token punctuation">.</span>Override <span class="token keyword">with</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">old</span> <span class="token operator">=></span> <span class="token string">'abc'</span><span class="token punctuation">}</span><span class="token operator">></span>
         <span class="token operator">&lt;</span>MyComponent <span class="token operator">/</span><span class="token operator">></span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>Language<span class="token punctuation">.</span>Override<span class="token operator">></span>
     <span class="token punctuation">)</span><span class="token punctuation">;</span>

     <span class="token keyword">await</span> <span class="token function">expect</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'현재 언어는 abc 입니다'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeVisible</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Overrides는 SafeTest의 강력한 기능이며, 여기서 소개된 예시들은 겉핥기에 불과합니다. 자세한 정보와 예시는 README의 Overrides 섹션을 참조해주세요.</p>
<h1 id="보고서" tabindex="-1"><a class="header-anchor" href="#보고서" aria-hidden="true">#</a> 보고서</h1>
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
<p>SafeTest은 강력한 보고 기능을 기본으로 제공하여, 자동으로 비디오 다시 보기 링킹, Playwright 추적 뷰어, 그리고 테스트된 구성 요소로 직접 딥 링크까지 가능합니다. SafeTest 리포 README에는 모든 예제 앱과 보고서가 링크되어 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-IntroducingSafeTestANovelApproachtoFrontEndTesting/img/IntroducingSafeTestANovelApproachtoFrontEndTesting_0.png" alt="이미지"></p>
<h1 id="기업-환경에서의-safetest" tabindex="-1"><a class="header-anchor" href="#기업-환경에서의-safetest" aria-hidden="true">#</a> 기업 환경에서의 SafeTest</h1>
<p>많은 대기업은 앱을 사용하기 위한 인증 형태가 필요합니다. 일반적으로 localhost:3000으로 이동하면 영원히로딩 페이지만 표시됩니다. localhost:8000과 같은 다른 포트로 이동하여 프록시 서버가 있는 곳으로 이동해야 하며, 이곳에서는 기본 서비스 호출에 인증 자격 증명을 확인하거나 삽입합니다. 이 제한은 Netflix에서 Cypress/Playwright 구성 요소 테스트를 사용할 수 없는 주요 이유 중 하나입니다.</p>
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
<p>그러나 일반적으로 응용 프로그램과 상호 작용하기 위해 사용할 수있는 테스트 사용자를 생성하는 서비스가 있습니다. 이는 SafeTest 주변에 가벼운 래퍼를 생성하여 테스트 사용자를 자동으로 생성하고 가정하는 데 도움이 됩니다. 예를 들어, Netflix에서는 기본적으로 다음과 같이 수행합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> setup <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'safetest/setup'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createTestUser<span class="token punctuation">,</span> addCookies <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'netflix-test-helper'</span><span class="token punctuation">;</span>

type Setup <span class="token operator">=</span> Parameters<span class="token operator">&lt;</span><span class="token keyword">typeof</span> setup<span class="token operator">></span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  extraUserOptions<span class="token operator">?</span><span class="token operator">:</span> UserOptions<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">setupNetflix</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> Setup</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>options<span class="token punctuation">,</span>
    <span class="token literal-property property">hooks</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">beforeNavigate</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">async</span> <span class="token parameter">page</span> <span class="token operator">=></span> <span class="token function">addCookies</span><span class="token punctuation">(</span>page<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">beforeAll</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">createTestUser</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>extraUserOptions<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 설정을 완료한 후, 우리는 safetest/setup 대신에 위의 패키지를 가져와 사용합니다.</p>
<h1 id="react-이상" tabindex="-1"><a class="header-anchor" href="#react-이상" aria-hidden="true">#</a> React 이상</h1>
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
<p>이 게시물은 SafeTest가 React와 어떻게 작동하는지에 중점을 두었지만, 오직 React에만 제한되지는 않습니다. SafeTest는 Vue, Svelte, Angular과 함께 작동하며 때로는 NextJS나 Gatsby에서도 실행할 수 있습니다. 또한 사용 중인 테스트 러너에 따라 Jest 또는 Vitest를 사용하여 실행할 수 있습니다. 예제 폴더는 다양한 도구 조합으로 SafeTest를 사용하는 방법을 보여주며, 더 많은 사례를 추가하는 기여를 권장합니다.</p>
<p>SafeTest는 테스트 러너, UI 라이브러리 및 브라우저 러너를 위한 지능적인 접착제입니다. Netflix에서 가장 일반적으로 사용되는 방식은 Jest/React/Playwright를 사용하는 것이지만, 다른 옵션에 대한 어댑터를 더 추가하는 것도 쉽습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>SafeTest는 Netflix 내에서 채택되고 있는 강력한 테스트 프레임워크입니다. 테스트 작성을 쉽게하고 어떤 실패가 언제 발생했는지에 대한 포괄적인 보고서를 제공하며, 재생 비디오를 보거나 테스트 단계를 수동으로 실행하여 무엇이 실패했는지 확인할 수 있는 링크가 포함되어 있습니다. UI 테스트를 혁신시킬 방법을 기대하며 귀하의 피드백과 기여를 기다리고 있습니다.</p>
</div></template>
