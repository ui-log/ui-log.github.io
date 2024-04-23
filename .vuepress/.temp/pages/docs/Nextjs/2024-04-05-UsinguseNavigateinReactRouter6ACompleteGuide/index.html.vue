<template><div><p><img src="@source/docs/Nextjs/2024-04-05-UsinguseNavigateinReactRouter6ACompleteGuide/img/UsinguseNavigateinReactRouter6ACompleteGuide_0.png" alt="이미지"></p>
<p>React Router은 React 애플리케이션을 위한 인기 있는 라우팅 라이브러리입니다. 라우팅을 위한 선언적 API를 제공하여 페이지 간 탐색 및 URL 변경을 쉽게 처리할 수 있습니다. React Router의 6버전에서 useHistory와 useLocation 훅을 대체하는 useNavigate라는 새로운 훅이 소개되었습니다. 이 글에서 React 애플리케이션에서 페이지 간 탐색을 어떻게 처리하는지 알아보겠습니다.</p>
<h1 id="usenavigate란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#usenavigate란-무엇인가요" aria-hidden="true">#</a> useNavigate란 무엇인가요?</h1>
<p>useNavigate 훅은 React Router 6의 새로운 기능입니다. 이전 버전의 React Router에서 useHistory와 useLocation 훅을 대체합니다. useNavigate 훅은 React 애플리케이션에서 페이지 간 탐색을 위한 간단하고 직관적인 API를 제공합니다. 함수형 컴포넌트와 훅과 함께 사용할 수 있도록 설계되었으며, 애플리케이션에서 URL 변경을 처리하는 과정을 간소화합니다.</p>
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
<h1 id="react-애플리케이션에서-usenavigate-사용-방법" tabindex="-1"><a class="header-anchor" href="#react-애플리케이션에서-usenavigate-사용-방법" aria-hidden="true">#</a> React 애플리케이션에서 useNavigate 사용 방법</h1>
<p>useNavigate를 사용하려면 먼저 React Router 6를 설치하고 프로젝트에 추가해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>router<span class="token operator">-</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>React Router 6를 설치한 후에는 react-router-dom 패키지에서 useNavigate 훅을 가져올 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>함수 컴포넌트 내에서 페이지를 이동할 수 있는 useNavigate 훅을 사용할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'/other-page'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>다른 페이지로 이동<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 useNavigate 훅을 사용하여 다른 페이지로 이동할 수 있는 navigate 함수를 생성합니다. 그리고 버튼을 클릭했을 때 handleClick 함수 내에서 /other-page URL로 이동하도록 navigate 함수를 사용합니다.</p>
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
<p>navigate 함수는 두 번째 매개변수로 옵션 객체를 전달받아 네비게이션 동작을 제어할 수도 있습니다. 예를 들어, replace 옵션을 사용하여 현재 URL을 히스토리 스택에 새 항목을 추가하는 대신 바꿀 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">'/other-page'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">replace</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span><span class="token operator">></span>다른 페이지로 이동<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 replace 옵션을 사용하여 현재 URL을 히스토리 스택에 새 항목을 추가하는 대신 교체합니다. 이 방법은 새 항목을 히스토리 스택에 추가하지 않고 새 페이지로 이동하고 싶을 때 유용합니다.</p>
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
<p><code v-pre>useNavigate</code> 훅은 React 애플리케이션에서 페이지 간 이동하는 강력하고 직관적인 방법입니다. URL 변경을 처리하는 과정을 간소화하고 페이지 간 이동을 위한 일관된 API를 제공합니다. <code v-pre>useNavigate</code> 훅을 사용하면 애플리케이션의 사용자 경험을 개선하고 라우팅 코드를 유지하기 쉽게 만들 수 있습니다.</p>
<hr>
<p>나의 설정:</p>
<p>💻 Apple 2023 맥북 프로 M2 — https://amzn.to/3N4uuQA</p>
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
<p>⌨️ Apple Magic Keyboard — https://amzn.to/40yo8vM</p>
<p>🖱 Apple Magic Mouse — https://amzn.to/40szCkx</p>
<p>🎧 Beats by Dr. Dre Studio3 — https://amzn.to/3mUxgx8</p>
</div></template>
