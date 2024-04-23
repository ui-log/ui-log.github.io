<template><div><img src="@source/docs/Nextjs/2024-04-05-Privateroutesinreact/img/Privateroutesinreact_0.png" />
<p>리액트에서는 프라이빗 루트(private routes)를 사용하여 애플리케이션의 특정 부분에 대한 액세스를 제어합니다. 일반적으로 사용자가 인증되었는지 또는 특정 권한을 가지고 있는지에 따라 특정 루트(route)나 구성 요소(components)에 대한 액세스를 제한하려고 합니다. 프라이빗 루트를 구현하려면 라우터 라이브러리(예: 리액트 라우터)를 사용하여 루트 처리를 조합하고, 인증 상태에 따라 조건부 렌더링을 할 수 있습니다.</p>
<p>다음은 React Router를 사용하여 프라이빗 루트를 구현하는 예시입니다.</p>
<h2 id="프라이빗-루트-컴포넌트-생성하기" tabindex="-1"><a class="header-anchor" href="#프라이빗-루트-컴포넌트-생성하기" aria-hidden="true">#</a> 프라이빗 루트 컴포넌트 생성하기</h2>
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
<p>프라이빗 라우트를 렌더링하는 논리를 처리하는 PrivateRoute 컴포넌트를 생성해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Navigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">PrivateRoute</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Component<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isAuthenticated<span class="token punctuation">,</span> setIsAuthenticated<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 여기에 인증 로직을 추가하세요...</span>

  <span class="token keyword">return</span> isAuthenticated <span class="token operator">?</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">"/login"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> PrivateRoute<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 컴포넌트는 component 속성과 다른 속성을 함께 받습니다. 사용자가 인증되었는지 확인하고, 인증되었을 경우 제공된 컴포넌트를 렌더링하며, 그렇지 않으면 로그인 페이지로 리다이렉트합니다.</p>
<h2 id="라우팅-구현하기" tabindex="-1"><a class="header-anchor" href="#라우팅-구현하기" aria-hidden="true">#</a> 라우팅 구현하기</h2>
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
<p>이제 라우팅 설정 내에서 PrivateRoute 컴포넌트를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom/client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./index.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PrivateRoute <span class="token keyword">from</span> <span class="token string">"./components/auth/PrivateRoute"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PageNotFound <span class="token keyword">from</span> <span class="token string">"./components/PagenotFound/PageNotFound"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  createBrowserRouter<span class="token punctuation">,</span>
  createRoutesFromElements<span class="token punctuation">,</span>
  Route<span class="token punctuation">,</span>
  RouterProvider<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"./components/Home/Home"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createBrowserRouter</span><span class="token punctuation">(</span>
  <span class="token function">createRoutesFromElements</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* Private route 구현 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"user"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>PrivateRoute Component<span class="token operator">=</span><span class="token punctuation">{</span>User<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"*"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>PageNotFound <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 /user 경로에 대한 private route가 사용되었습니다. 이는 인증된 상태인지 여부를 확인하여 사용자 컴포넌트를 렌더링할지 또는 로그인 페이지로 리디렉션할지를 결정합니다.</p>
<p>기억하세요, isAuthenticated 상태는 백엔드 API, 토큰 또는 기타 인증 메커니즘을 통해 관리되어야 합니다.</p>
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
<p>이 블로그 포스트가 도움이 되었다면 추가 질문이나 알고 싶은 주제가 있다면 언제든 연락해 주세요.</p>
<p>즐거운 코딩하시고 더 많은 유익한 콘텐츠 기대해 주세요!!!</p>
</div></template>
