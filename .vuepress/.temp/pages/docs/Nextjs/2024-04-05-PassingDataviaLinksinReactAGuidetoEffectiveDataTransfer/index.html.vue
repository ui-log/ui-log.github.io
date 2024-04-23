<template><div><p>리액트에서 컴포넌트 간에 데이터를 전달하는 것은 일반적인 작업이며 다양한 방법으로 수행할 수 있습니다. 가장 간단한 방법 중 하나는 링크를 사용하는 것입니다. 리액트 라우터를 이용해 생성된 링크를 통해 서로 다른 컴포넌트 간을 원활하게 이동하면서 데이터를 전달할 수 있습니다. 이 글에서는 리액트 애플리케이션에서 링크를 통해 데이터를 효과적으로 전달하는 방법을 살펴보겠습니다.</p>
<ol>
<li>리액트 라우터 이해:</li>
</ol>
<p>리액트 라우터는 리액트 애플리케이션에서 네비게이션을 처리하기 위한 인기 있는 라이브러리입니다. 특정 URL에 접근할 때 렌더링되는 라우트와 컴포넌트를 정의할 수 있습니다. 링크를 통해 데이터를 전달하는 작업을 시작하려면 프로젝트에 리액트 라우터를 설치해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>router<span class="token operator">-</span>dom
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
<ol start="2">
<li>라우트 설정하기:</li>
</ol>
<p>링크를 통해 데이터를 전달하려면 먼저 애플리케이션에서 라우트를 설정해야 합니다. 일반적으로 <code v-pre>App.js</code>라고 불리는 주요 컴포넌트에서 필요한 모듈을 가져와 React Router에서 제공하는 <code v-pre>Route</code> 컴포넌트를 사용하여 라우트를 정의하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token keyword">as</span> Router<span class="token punctuation">,</span> Route<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">'./components/Home'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> OtherComponent <span class="token keyword">from</span> <span class="token string">'./components/OtherComponent'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Router<span class="token operator">></span>
      <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/other"</span><span class="token operator">></span>다른 컴포넌트로 이동<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
      <span class="token operator">&lt;</span>Route exact path<span class="token operator">=</span><span class="token string">"/"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/other"</span> component<span class="token operator">=</span><span class="token punctuation">{</span>OtherComponent<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Router<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>링크를 통한 데이터 전달:</li>
</ol>
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
<p>React Router에서는 <code v-pre>Link</code> 컴포넌트의 <code v-pre>to</code> prop을 사용하여 링크와 함께 데이터를 전달할 수 있어요. <code v-pre>to</code> prop은 pathname과 전달하고 싶은 데이터가 포함된 상태 객체가 될 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> dataToPass <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'John Doe'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
 <span class="token operator">&lt;</span>div<span class="token operator">></span>
 <span class="token operator">&lt;</span>h1<span class="token operator">></span>홈 컴포넌트에 오신 것을 환영합니다<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
 <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">'/other'</span><span class="token punctuation">,</span> <span class="token literal-property property">state</span><span class="token operator">:</span> dataToPass <span class="token punctuation">}</span><span class="token operator">></span>다른 컴포넌트로 이동<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
 <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
 <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>목적지 컴포넌트에서 데이터 받기:</li>
</ol>
<p>링크에서 전달된 데이터에 액세스하려면 목적지 컴포넌트에서 <code v-pre>location</code> prop을 사용할 수 있어요. 데이터는 <code v-pre>location</code> prop의 <code v-pre>state</code> 객체에 사용할 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">OtherComponent</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> state <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">.</span>location<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> state<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>다른 컴포넌트에서 안녕하세요<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>이름<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>나이<span class="token operator">:</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> OtherComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결론:</p>
<p>React 애플리케이션에서 링크를 통해 데이터를 전달하는 것은 상태를 유지하고 컴포넌트간 정보를 공유하는 강력한 방법입니다. React Router는 내비게이션 및 데이터 전송을 처리하는 간단한 메커니즘을 제공하여 이 과정을 간소화합니다. 이 글에서 안내된 단계를 따라 React 프로젝트에서 링크를 통해 데이터를 효과적으로 전달하여 보다 동적이고 상호작용적인 사용자 경험을 만들어낼 수 있습니다. 즐거운 코딩하세요!```</p>
</div></template>
