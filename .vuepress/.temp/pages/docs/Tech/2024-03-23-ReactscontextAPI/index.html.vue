<template><div><h1 id="컨텍스트-api란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#컨텍스트-api란-무엇인가요" aria-hidden="true">#</a> 컨텍스트 API란 무엇인가요?</h1>
<p>컨텍스트 API는 React 16.3에서 소개된 기능으로, React 코어 라이브러리의 일부입니다. 이를 통해 컴포넌트 트리의 각 수준을 명시적으로 통과시키지 않아도 컴포넌트 간에 props와 같은 값을 공유할 수 있습니다. 이는 다양한 중첩 수준의 많은 컴포넌트에서 접근해야 하는 데이터에 특히 유용합니다.
Context API 이전에는 데이터를 컴포넌트 트리 아래로 전달하는 주요 방법이 props를 통해 전달하는 것이었습니다. 이를 &quot;prop drilling&quot;이라고 합니다. 부모에서 자식 컴포넌트로 데이터를 전달하는 데 이 기능은 잘 작동하지만 중첩 수준이 여러 개인 경우, 특히 중간 컴포넌트가 데이터를 필요로하지 않을 때 데이터를 전달하는 것이 까다로울 수 있습니다.</p>
<p>컨텍스트 API는 데이터에 대한 &quot;컨텍스트&quot;를 생성하여 이를 컨텍스트의 제공자 내의 모든 컴포넌트가 액세스할 수 있게 함으로써 이 프로세스를 단순화합니다. 이를 통해 중간 컴포넌트를 통해 props를 전달할 필요성이 없어지며, 단순한 코드를 줄이고 코드베이스를 더 유지보수하기 쉽게 만듭니다.</p>
<h1 id="작동-방식은" tabindex="-1"><a class="header-anchor" href="#작동-방식은" aria-hidden="true">#</a> 작동 방식은?</h1>
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
<p>Context API의 핵심은 세 가지 주요 구성 요소로 이루어져 있어요:</p>
<ul>
<li>Context Object: React의 createContext 함수를 사용하여 생성됩니다. 이것은 여러 컴포넌트간에 공유하려는 데이터를 담는 컨테이너 역할을 해요.</li>
<li>Provider Component: 이 컴포넌트는 자식 컴포넌트에 데이터를 제공하는 역할을 합니다. Context.Provider 컴포넌트를 사용하여 생성되며 데이터를 담고 싶은 value prop을 받아들여요.</li>
<li>useContext: 이 훅은 함수형 컴포넌트 내에서 useContext 함수를 사용하여 컨텍스트 데이터에 액세스하는 데 사용됩니다. 이는 컨텍스트 객체를 인수로 받아 현재 컨텍스트 값을 반환해요.</li>
</ul>
<h1 id="예시-사용법" tabindex="-1"><a class="header-anchor" href="#예시-사용법" aria-hidden="true">#</a> 예시 사용법</h1>
<p>여기 ‘테마’ 기능을 추가하는 데모가 있는데요, 실제로 Context API가 어떻게 작동하는지 설명해줍니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 컨텍스트를 생성하고 있어요</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">,</span>
  <span class="token function-variable function">toggleTheme</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ThemeProvider 컴포넌트는 테마 상태를 기본 값 'light'로 초기화하고 'light'와 'dark' 테마 간에 전환하는 toggleTheme 함수를 제공합니다. ThemeProvider로 둘러싸인 자식 컴포넌트는 ThemeContext를 통해 현재 테마와 전환 기능에 액세스할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ThemeProvider</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>theme<span class="token punctuation">,</span> setTheme<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"light"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">toggleTheme</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTheme</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevTheme</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> prevTheme <span class="token operator">===</span> <span class="token string">"light"</span> <span class="token operator">?</span> <span class="token string">"dark"</span> <span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ThemeContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>theme<span class="token punctuation">,</span> toggleTheme<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeContext<span class="token punctuation">.</span>Provider<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서는 Provider를 사용하여 페이지 컴포넌트를 ThemeProvider로 랩핑하여 해당 하위 항목에 사용 가능하도록 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 제공자 사용하기</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ThemeProvider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Page <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


여기서 페이지 컴포넌트는 React의 useContext 훅을 사용하여 테마 콘텍스트를 소비하며<span class="token punctuation">,</span> 현재 테마에 액세스하고 테마를 토글하는 함수에 액세스할 수 있습니다<span class="token punctuation">.</span> 이 함수는 버튼의 onClick 이벤트 핸들러에 의해 트리거 될 것입니다<span class="token punctuation">.</span>

<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token template-punctuation string">`</span></span>`js
<span class="token comment">// useContext 훅을 사용하여 테마 콘텍스트에 액세스하기</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> themeCtx <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>header<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>데모<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>themeCtx<span class="token punctuation">.</span>toggleTheme<span class="token punctuation">}</span><span class="token operator">></span>테마 전환<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="context-api를-언제-사용해야-하나요" tabindex="-1"><a class="header-anchor" href="#context-api를-언제-사용해야-하나요" aria-hidden="true">#</a> Context API를 언제 사용해야 하나요?</h1>
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
<p>Context API는 컴포넌트 간에 데이터를 공유하는 편리한 방법을 제공하지만, 신중하게 사용하는 것이 중요합니다. 여기 Context API를 사용하는 것이 적절한 몇 가지 시나리오가 있습니다:</p>
<ul>
<li>테마 전환: 애플리케이션의 다른 컴포넌트 간에 현재 테마를 공유합니다.</li>
<li>사용자 인증: 사용자 인증 상태 및 정보를 애플리케이션 전반에 걸쳐 전달합니다.</li>
<li>로컬라이제이션: 언어 환경과 같은 지역 정보를 공유합니다.</li>
<li>UI 상태: 모달, 알림, 토스트 또는 알림과 같은 UI 상태를 공유합니다.</li>
</ul>
<h1 id="context-api-사용에-대한-최상의-실천법" tabindex="-1"><a class="header-anchor" href="#context-api-사용에-대한-최상의-실천법" aria-hidden="true">#</a> Context API 사용에 대한 최상의 실천법</h1>
<h2 id="_1-전역-상태-식별하기" tabindex="-1"><a class="header-anchor" href="#_1-전역-상태-식별하기" aria-hidden="true">#</a> 1. 전역 상태 식별하기:</h2>
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
<p>Context API를 구현하기 전에 애플리케이션의 상태 요구 사항을 신중하게 평가하고 어떤 데이터가 전역적으로 관리되어야 하는지 식별해주세요.</p>
<h3 id="_2-context-consumer-중첩-제한" tabindex="-1"><a class="header-anchor" href="#_2-context-consumer-중첩-제한" aria-hidden="true">#</a> 2. Context Consumer 중첩 제한:</h3>
<p>Context API는 데이터 공유를 위한 강력한 메커니즘을 제공하지만, Context Consumer의 과도한 중첩은 불필요한 결합과 컴포넌트 재사용성 감소로 이어질 수 있습니다.</p>
<h3 id="_3-context-값은-간단하게-유지하기" tabindex="-1"><a class="header-anchor" href="#_3-context-값은-간단하게-유지하기" aria-hidden="true">#</a> 3. Context 값은 간단하게 유지하기</h3>
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
<p>표 태그를 Markdown 형식으로 변경해주세요.</p>
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
<p>별도의 파일을 사용하여 컨텍스트 객체를 정의하는 것은 조직화되고 유지보수가 쉬워지기 때문에 좋은 실천 방법입니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>React의 컨텍스트 API는 애플리케이션에서 전역 상태를 관리하는 강력한 메커니즘을 제공합니다. 컴포넌트 간에 데이터를 공유하는 간단하고 직관적인 방법을 제공함으로써 여러 단계의 중첩을 통해 프롭스를 전달하는 복잡성을 줄입니다. 모든 사용 사례에 적합하지는 않을 수 있지만, 컨텍스트 API를 사용하는 방법과 시기를 이해하면 React 애플리케이션의 유지 관리 및 확장성을 크게 향상시킬 수 있습니다.</p>
</div></template>
