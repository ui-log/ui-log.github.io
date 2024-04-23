<template><div><p>웹 UI 개발은 처음 눈에는 간단해 보일 수 있지만, 더 깊게 파고들면 경험이 풍부한 개발자조차도 도전하는 다양한 복잡성을 발견할 수 있습니다. 이 글은 웹 UI 개발의 본질적인 도전 요소들을 해부해 보려 합니다. 웹 언어와 최신 UI 요구 사항 사이의 불일치부터 복잡한 데이터 관리 문제 및 비동기 API 호출에 이르기까지 다루고 있습니다.</p>
<p>또한 로딩 상태, 오류 처리, 보안, 성능 및 접근성을 아우르는 더 넓은 아키텍처 고려 사항을 포함한 종종 간과되는 &quot;비행기 없는 경로&quot;를 탐구할 것입니다.</p>
<h1 id="언어-불일치-탐색" tabindex="-1"><a class="header-anchor" href="#언어-불일치-탐색" aria-hidden="true">#</a> 언어 불일치 탐색</h1>
<p>간단한 문서 형태의 웹 페이지를 만드는 경우에는(예: 검색 상자나 모달과 같은 고급 UI 요소가 없는 기본 기사) 웹 브라우저가 제공하는 내장 언어가 일반적으로 충분하지 않습니다. 대부분의 웹 애플리케이션은 단순한 문서보다 훨씬 복잡합니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-WhyWebUIDevelopmentIsSoHard/img/WhyWebUIDevelopmentIsSoHard_0.png" alt="./img/WhyWebUIDevelopmentIsSoHard_0.png"></p>
<p>웹의 언어와 사람들이 매일 경험하는 UI 경험 사이의 차이는 상당합니다. 티켓 예약 플랫폼, 프로젝트 관리 도구 또는 이미지 갤러리와 같은 현대 웹 UI는 복잡하며, 고유한 웹 언어가 그것들을 쉽게 지원하지 않습니다. 아코디언, 토글 스위치 또는 상호 작용하는 카드와 같은 UI 구성 요소를 &quot;시뮬레이션&quot;하는 추가 작업을 할 수 있지만, 근본적으로 여전히 문서적인 것이 아닌 진정한 UI 구성 요소와 작업 중입니다.</p>
<p>이상적인 세계에서 사용자 인터페이스를 만드는 것은 시각적 UI 디자이너와 함께 작업하는 것과 비슷할 것입니다. C++ Builder나 Delphi와 같은 도구 또는 Figma와 같은 더 현대적인 대안은 구성 요소를 캔버스로 끌어다 놓고 이를 모든 화면에서 매끈하게 렌더링해주는 방식으로 작동합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-WhyWebUIDevelopmentIsSoHard/img/WhyWebUIDevelopmentIsSoHard_1.png" alt="./img/WhyWebUIDevelopmentIsSoHard_1.png"></p>
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
<p>웹 개발에서는 이러한 경우가 없습니다. 예를 들어, 사용자 지정 검색 입력란을 만들려면 추가 요소로 래핑하고 색상을 섬세하게 조정하며 여백과 글꼴을 조정하고 사용자 안내용 아이콘을 추가해야 합니다. 검색 상자 바로 아래에 나타나는 너비가 정확히 일치하는 자동 제안 목록을 만드는 것은 일반적으로 처음에 생각한 것보다 훨씬 더 노동 집약적일 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-WhyWebUIDevelopmentIsSoHard/img/WhyWebUIDevelopmentIsSoHard_2.png" alt="이미지"></p>
<p>위는 Jira 티켓 — 즉 이슈 보기이며, 상대적으로 복잡한 사용자 인터페이스입니다. 이러한 UI에는 네이게이터 컴포넌트, 드롭다운 목록, 아코디언 등이 포함될 것으로 예상할 수 있습니다. 하지만, 실제로는 그렇지 않거나 말해야 할까요.</p>
<p>개발자들은 HTML, CSS 및 JavaScript로 이를 모방하기 위해 열심히 노력했습니다. 사이트의 CSS를 임시로 비활성화하면 다음과 같은 결과물을 얻게됩니다:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-WhyWebUIDevelopmentIsSoHard/img/WhyWebUIDevelopmentIsSoHard_3.png" alt="WhyWebUIDevelopmentIsSoHard_3"></p>
<p>지라 엔지니어들의 힘든 노력 덕분에, 애플리케이션은 외관이 잘못되었음에도 불구하고 여전히 작동합니다. 버튼과 링크를 클릭하여 주변을 탐색하고 티켓에 첨부 이미지를 업로드할 수도 있습니다.</p>
<p>디자인 시스템 라이브러리를 활용하면 이러한 일부 도전에 대처할 수 있으며, 개발자들에게 처음부터 구축하는 대신 미리 준비된 기반을 제공합니다. 그러나 디자인 시스템은 각자의 단점을 가지고 있으며 프로젝트에 통합하기 전에 철저한 평가가 필요합니다.</p>
<p>안타깝게도, 언어 불일치는 문제의 작은 부분일 뿐이며 솔직히 말해서, React와 Vue와 같은 선언적 UI 라이브러리가 있어 상황은 약간 변했습니다. 그러나 프론트엔드 영역에는 다른 도전 과제가 있습니다. 데이터(상태) 관리는 분명히 목록에 포함됩니다.</p>
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
<h1 id="상태-관리-이해하기" tabindex="-1"><a class="header-anchor" href="#상태-관리-이해하기" aria-hidden="true">#</a> 상태 관리 이해하기</h1>
<p>현대 프론트엔드 개발에서 상태를 관리하는 것은 복잡한 작업입니다. 거의 모든 애플리케이션은 네트워크를 통해 원격 서버에서 데이터를 검색해야 합니다. 이 과정에는 API 액세스를 위한 인증 및 프로토콜, 데이터 형식, 그리고 API가 RESTful, GraphQL 또는 RPC 기반인지와 같은 다양한 고려 사항이 포함됩니다.</p>
<p>하지만 이것은 그저 한 가지 측면뿐입니다. 로컬 상태를 관리하는 것도 중요합니다. 예를 들어, 아코디언 컴포넌트는 펼쳐져 있는지 아니면 감춰져 있는지를 추적해야 하며, 폼의 텍스트 필드는 자체 값 관리해야 합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-WhyWebUIDevelopmentIsSoHard/img/WhyWebUIDevelopmentIsSoHard_4.png" alt="이미지"></p>
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
<p>Redux 또는 MobX와 같은 서드 파티 상태 관리 라이브러리를 사용하는 것은 애플리케이션이 상태 추적이 어려운 수준에 도달했을 때 유익할 수 있습니다. 그러나 이 접근 방식에는 주의할 점이 있는데, 신중히 고려해야 합니다.</p>
<p>많은 개발자들은 React의 내장 Context API를 상태 관리에 사용하는 경향이 있습니다. 학습 곡선이 가팔라지고 보일러플레이트 코드와 잠재적인 성능 부담과 같은 추가 복잡성으로 인해 이러한 라이브러리가 모두에게 적합하지 않을 수 있다는 이유가 있습니다.</p>
<h1 id="불행한-경로-탐색" tabindex="-1"><a class="header-anchor" href="#불행한-경로-탐색" aria-hidden="true">#</a> 불행한 경로 탐색</h1>
<p>UI 개발에 있어서 주로 주목하는 부분은 종종 &quot;행복한 경로&quot;입니다. 즉, 모든 것이 계획대로 진행되는 최적의 사용자 여정에 초점이 맞춰져 있습니다. 그러나 &quot;불행한 경로&quot;를 무시하면 UI가 처음에 생각한 것보다 훨씬 복잡해질 수 있습니다. 불행한 경로로 이어질 수 있는 상황들과 결과적으로 UI 개발 노력을 복잡하게 만들 수 있는 일부 시나리오를 살펴보겠습니다.</p>
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
<h2 id="다른-컴포넌트에서의-오류" tabindex="-1"><a class="header-anchor" href="#다른-컴포넌트에서의-오류" aria-hidden="true">#</a> 다른 컴포넌트에서의 오류</h2>
<p>다른 팀의 컴포넌트나 써드파티 컴포넌트를 애플리케이션 내에서 사용 중이라고 상상해봅시다. 만약 해당 컴포넌트에서 오류가 발생하면 UI가 깨지거나 예기치 않은 동작이 발생할 수 있습니다. 그에 대비하기 위해 조건 로직을 추가하거나 오류 처리 경계를 만들어 우아하게 처리해야 할 수도 있습니다. 이러한 작업은 초기 예상보다 UI를 더 복잡하게 만들 수 있습니다.</p>
<p>예를 들어, 아래 코드에서는 전달받은 props에 존재하지 않는 항목에 접근하려고 시도하고 있습니다. 이는 자주 발생하는 TypeError인데, 'undefined'의 속성을 읽을 수 없다는 에러가 발생합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">MenuItem</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  item<span class="token punctuation">,</span>
  onItemClick<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">item</span><span class="token operator">:</span> MenuItemType<span class="token punctuation">;</span>
  <span class="token function-variable function">onItemClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> MenuItemType</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// @ts-ignore</span>
  <span class="token keyword">const</span> information  <span class="token operator">=</span> item<span class="token punctuation">.</span>name <span class="token operator">+</span> item<span class="token punctuation">.</span>something<span class="token punctuation">.</span>doesnt<span class="token punctuation">.</span>exist<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onItemClick</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Add to Cart<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>만약 에러를 ErrorBoundary로 분리하지 않으면 전체 애플리케이션이 충돌할 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-WhyWebUIDevelopmentIsSoHard/img/WhyWebUIDevelopmentIsSoHard_5.png" alt="이미지"></p>
<h2 id="다운스트림-시스템-다운" tabindex="-1"><a class="header-anchor" href="#다운스트림-시스템-다운" aria-hidden="true">#</a> 다운스트림 시스템 다운</h2>
<p>UI가 데이터를 가져 오기 위해 여러 마이크로서비스 또는 API에 의존 할 수 있습니다. 이러한 다운스트림 시스템 중 하나가 다운되면 UI가 적절히 대응해야 합니다. 사용자에게 무엇을 해야 하는지 안내하는 대체 방법, 로딩 지시자 또는 친근한 오류 메시지를 디자인해야 합니다. 이러한 시나리오를 효과적으로 처리하는 것은 대개 프론트엔드 및 백엔드 로직 양측이 필요하기 때문에 UI 개발 작업에 또 다른 복잡성이 추가됩니다.</p>
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
<h2 id="예기치-못한-사용자-행동" tabindex="-1"><a class="header-anchor" href="#예기치-못한-사용자-행동" aria-hidden="true">#</a> 예기치 못한 사용자 행동</h2>
<p>당신이 UI를 완벽하게 디자인하더라도, 사용자는 언제나 당신이 예상하지 못한 방식으로 시스템을 사용할 것입니다. 특수 문자를 입력하거나, 양식을 너무 빨리 제출하려고 시도하거나, 사이트에 간섭하는 브라우저 확장 프로그램을 사용하는 등, 사용자들이 엣지 케이스를 처리할 수 있도록 UI를 디자인해야 합니다. 이는 추가적인 유효성 검사, 체크, 안전장치를 구현하여 UI 코드를 복잡하게 만드는 것을 의미합니다.</p>
<p>이러한 불행한 사건들을 이해하고 효과적으로 관리하는 것은 견고하고 탄력적이며 사용자 친화적인 인터페이스를 만드는 데 중요합니다. 이러한 조치는 당신의 애플리케이션을 더 신뢰할 만하게 만드는데 도움뿐만 아니라 보다 포괄적이고 신중한 사용자 경험을 만드는 데에도 기여합니다.</p>
<p>이전에 이 기사에서 불행한 경로에 대해 논의한 적이 있습니다. 아직 읽지 않으셨다면 한 번 읽어보세요.</p>
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
<h1 id="원격-상태에-네트워크로-액세스하기" tabindex="-1"><a class="header-anchor" href="#원격-상태에-네트워크로-액세스하기" aria-hidden="true">#</a> 원격 상태에 네트워크로 액세스하기</h1>
<p>React에서는 네트워크 프로그래밍이 API 호출을 사용하는 것보다 얼마나 단순한 것처럼 보이는 도전적인 과제를 제기합니다. 행복한 경로는 간단해 보일 수 있지만, 실제로는 에러 처리, 로딩 상태 및 재시도와 같은 다양한 시나리오를 고려할 때 신속하게 복잡해집니다. 그에 추가로 캐싱의 복잡성까지 고려하면 코드가 빨리 복잡해지고 유지보수하기 어려워집니다.</p>
<p>그래서 useEffect 훅을 사용하여 다음과 같이 수행하는 대신(그러나 이게 출발점으로 좋은 시작입니다).</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>User<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">fetchUsers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/users'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setUsers</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">fetchUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
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
<p>실제 코드베이스에서는 fetch 함수를 사용하는 것 이외에도 추가적인 상태를 관리하는 일이 많이 발생하며, 이 과정에서 오류가 발생할 수도 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>string<span class="token operator">></span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">fetchUsers</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/users2'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>status <span class="token operator">&lt;=</span> <span class="token number">299</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setUsers</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">fetchUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ErrorMessage <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>react-query 문서 페이지에는 다양한 고려해야 할 사항들이 장문으로 나열되어 있어요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-WhyWebUIDevelopmentIsSoHard/img/WhyWebUIDevelopmentIsSoHard_6.png" alt="WhyWebUIDevelopmentIsSoHard_6"></p>
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
<h1 id="기타-고려-사항" tabindex="-1"><a class="header-anchor" href="#기타-고려-사항" aria-hidden="true">#</a> 기타 고려 사항</h1>
<p>웹 UI 개발의 주요 도전 과제 몇 가지를 살펴보았지만, 실제 프로젝트에서는 이러한 문제 외에도 많은 복잡성이 있습니다. 이러한 도전 과제들을 해결하는 과정에서 더 많은 요인들을 고려해야 합니다.</p>
<ul>
<li>크로스 브라우저 호환성: 각 브라우저는 다른 렌더링 엔진을 가지고 있으며, 동일한 브라우저의 다른 버전들도 다르게 작동할 수 있습니다. 이로 인해 크로스 브라우저 호환성은 주요 고려 사항이 됩니다.</li>
<li>성능 최적화: 웹사이트가 빠르고 효율적으로 작동하도록 보장하기 위해서는 브라우저가 요소를 렌더링하는 방법, 레이지 로딩, 자산 최적화 등에 대한 심층적인 이해가 필요합니다.</li>
<li>접근성: 장애를 가진 사람을 포함한 모든 개인이 사용할 수 있는 접근성 있는 웹사이트를 구축하기 위해서는 추가적인 지식과 테스트가 필요합니다.</li>
<li>보안 문제: 프론트엔드 애플리케이션의 증가로 클라이언트 측 보안이 더욱 중요해졌습니다. 교차 사이트 스크립팅(XSS), 교차 사이트 요청 위조(CSRF) 등의 문제와 클라이언트 측 로그를 통해 데이터 누설이 발생하는 문제 등을 고려해야 합니다.</li>
</ul>
<p>위에서 언급한 각 항목은 개별 기사나 기사 시리즈로 다룰만큼의 내용을 포함하고 있지만, 글이 너무 길거나 압도적이지 않도록 이만 마치겠습니다. 깊이 파고들고 싶은 분들을 위해 추가 참고 자료가 포함된 참고문헌 목록을 제공했습니다.</p>
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
<h1 id="요약" tabindex="-1"><a class="header-anchor" href="#요약" aria-hidden="true">#</a> 요약</h1>
<p>요약하자면, 웹 UI 개발 분야는 코드 작성과 인터페이스 디자인을 넘어서는 다양한 난관들로 가득 차있습니다. 내재적 언어 제한, 미묘한 데이터 관리, 비동기 복잡성, 종종 무시되는 불행한 상황들은 이를 어렵게 만듭니다.</p>
<p>보안, 성능, 접근성 등에 대한 구조적인 결정은 이를 더욱 복잡하게 만듭니다. 이러한 도전에 대한 이해는 이를 효과적으로 탐험하고, 시각적으로 매력적이면서도 견고하고 안전하며 사용자 친화적인 웹 UI를 만드는 첫걸음입니다.</p>
<h1 id="참고문헌" tabindex="-1"><a class="header-anchor" href="#참고문헌" aria-hidden="true">#</a> 참고문헌</h1>
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
<li>React 네트워크 프로그래밍에 대한 실용적인 가이드</li>
<li>유지보수 가능한 React 코스 마스터하기</li>
<li>React 애플리케이션의 모듈화</li>
</ul>
<p>좋아하신다면, 제 메일링 리스트에 가입해주세요. 매주 클린 코드와 리팩터링 기술을 블로그, 책, 코스 및 비디오를 통해 공유하고 있습니다.</p>
</div></template>
