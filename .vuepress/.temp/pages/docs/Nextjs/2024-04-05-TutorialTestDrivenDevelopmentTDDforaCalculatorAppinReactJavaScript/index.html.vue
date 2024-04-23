<template><div><p><img src="@source/docs/Nextjs/2024-04-05-TutorialTestDrivenDevelopmentTDDforaCalculatorAppinReactJavaScript/img/TutorialTestDrivenDevelopmentTDDforaCalculatorAppinReactJavaScript_0.png" alt="Tutorial Test Driven Development TDD for a Calculator App in React JavaScript"></p>
<h2 id="prerequisites" tabindex="-1"><a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a> Prerequisites</h2>
<ul>
<li>JavaScript 기본 이해</li>
<li>React 개념에 익숙함</li>
</ul>
<h2 id="tools-used" tabindex="-1"><a class="header-anchor" href="#tools-used" aria-hidden="true">#</a> Tools Used</h2>
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
<li>React</li>
<li>Jest (테스트용)</li>
<li>React Testing Library</li>
</ul>
<h1 id="단계-1-react-프로젝트-설정하기" tabindex="-1"><a class="header-anchor" href="#단계-1-react-프로젝트-설정하기" aria-hidden="true">#</a> 단계 1: React 프로젝트 설정하기</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app my<span class="token operator">-</span>tdd<span class="token operator">-</span>app
cd my<span class="token operator">-</span>tdd<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @testing<span class="token operator">-</span>library<span class="token operator">/</span>react @testing<span class="token operator">-</span>library<span class="token operator">/</span>jest<span class="token operator">-</span>dom jest
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
<h1 id="단계-2-첫-번째-테스트-작성" tabindex="-1"><a class="header-anchor" href="#단계-2-첫-번째-테스트-작성" aria-hidden="true">#</a> 단계 2: 첫 번째 테스트 작성</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>touch src<span class="token operator">/</span>Calculator<span class="token punctuation">.</span>test<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/Calculator.test.js</span>

<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> screen<span class="token punctuation">,</span> fireEvent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@testing-library/react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Calculator <span class="token keyword">from</span> <span class="token string">'./Calculator'</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">'1 + 2를 더한 결과가 3이 되어야 합니다'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Calculator <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> number1Input <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">'Number 1:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> number2Input <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByLabelText</span><span class="token punctuation">(</span><span class="token string">'Number 2:'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> addButton <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">'Add'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  fireEvent<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>number1Input<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fireEvent<span class="token punctuation">.</span><span class="token function">change</span><span class="token punctuation">(</span>number2Input<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>addButton<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> screen<span class="token punctuation">.</span><span class="token function">getByTestId</span><span class="token punctuation">(</span><span class="token string">'result'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">expect</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveTextContent</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-계산기-컴포넌트-생성" tabindex="-1"><a class="header-anchor" href="#단계-3-계산기-컴포넌트-생성" aria-hidden="true">#</a> 단계 3: 계산기 컴포넌트 생성</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/Calculator.js</span>

<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Calculator</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number1<span class="token punctuation">,</span> setNumber1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>number2<span class="token punctuation">,</span> setNumber2<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>result<span class="token punctuation">,</span> setResult<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAdd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>number1<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>number2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setResult</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>number1<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setNumber1</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"Number 1:"</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>number2<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setNumber2</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        aria<span class="token operator">-</span>label<span class="token operator">=</span><span class="token string">"Number 2:"</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleAdd<span class="token punctuation">}</span><span class="token operator">></span>더하기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>p data<span class="token operator">-</span>testid<span class="token operator">=</span><span class="token string">"result"</span><span class="token operator">></span>결과<span class="token operator">:</span> <span class="token punctuation">{</span>result<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Calculator<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-4-테스트-실행" tabindex="-1"><a class="header-anchor" href="#단계-4-테스트-실행" aria-hidden="true">#</a> 단계 4: 테스트 실행</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm test
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
<img src="@source/docs/Nextjs/2024-04-05-TutorialTestDrivenDevelopmentTDDforaCalculatorAppinReactJavaScript/img/TutorialTestDrivenDevelopmentTDDforaCalculatorAppinReactJavaScript_1.png" />
<h1 id="단계-5-리팩터링-및-반복" tabindex="-1"><a class="header-anchor" href="#단계-5-리팩터링-및-반복" aria-hidden="true">#</a> 단계 5: 리팩터링 및 반복</h1>
<ul>
<li>필요에 따라 코드를 리팩터링합니다.</li>
<li>추가 기능이나 경계 케이스에 대한 더 많은 테스트를 작성합니다.</li>
<li>계산기 앱이 완성될 때까지 테스트 작성, 코드 구현, 리팩터링 프로세스를 반복합니다.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>이 튜토리얼에서는 React JavaScript에서 간단한 계산기 애플리케이션을 구축함으로써 Test Driven Development (TDD)를 적용하는 방법을 배웠어요. 테스트를 먼저 작성함으로써 코드가 원하는 요구사항을 충족하고 철저히 테스트되었음을 보장할 수 있어요. 지속적으로 테스트를 작성하고 코드를 구현하며 리팩토링하여 견고하고 신뢰할 수 있는 React 애플리케이션을 만들어 나가세요.</p>
</div></template>
