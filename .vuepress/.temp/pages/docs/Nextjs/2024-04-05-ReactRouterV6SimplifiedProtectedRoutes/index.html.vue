<template><div><img src="@source/docs/Nextjs/2024-04-05-ReactRouterV6SimplifiedProtectedRoutes/img/ReactRouterV6SimplifiedProtectedRoutes_0.png" />
<p>React Router v6로 보호된 경로를 만드는 것은 이제 간단합니다. 중첩된 경로 및 레이아웃 컴포넌트를 사용하여 이를 어떻게 구현하는지 살펴봅시다.</p>
<h2 id="단계-1-앱-라우트-설정" tabindex="-1"><a class="header-anchor" href="#단계-1-앱-라우트-설정" aria-hidden="true">#</a> 단계 1: 앱 라우트 설정</h2>
<p>이제 공개 및 보호된 라우트가 모두 포함된 AppRoutes 컴포넌트를 만들어 봅시다. 여기서 ProtectedRoute 컴포넌트가 중심이 되어 &quot;/dashboard&quot; 또는 &quot;/profile&quot;과 같은 보호된 경로 구성 요소 내의 모든 경로의 기본 역할을 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">AppRoutes</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/sign-up"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>SignUp <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/sign-in"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>SignIn <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Route element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>ProtectedRoute <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/dashboard"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Dashboard <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/profile"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>UserProfile <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* Handle other routes */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-2-보호된-경로-구성요소-구현" tabindex="-1"><a class="header-anchor" href="#단계-2-보호된-경로-구성요소-구현" aria-hidden="true">#</a> 단계 2: 보호된 경로 구성요소 구현</h2>
<p>ProtectedRoute 컴포넌트를 구축하기 전에 사용자 인증을 결정할 수 있는 메커니즘이 있는지 확인하십시오. 사용자가 인증되지 않은 경우 &quot;/sign-in&quot; 경로로 리디렉션됩니다.</p>
<p>React Router v6에는 여기서 중요한 Outlet 컴포넌트가 제공됩니다. 이 컴포넌트를 사용하면 부모 경로 내에서 자식 경로 요소를 쉽게 렌더링할 수 있습니다. 이 기능을 활용하여 부모 경로 내에서 중첩된 경로 요소를 로드할 수 있습니다. 또한 모든 중첩된 경로 요소에서 공유할 수 있는 레이아웃 컴포넌트(헤더 및 사이드바와 같은)를 추가할 수도 있습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">ProtectedRoute</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isAuthenticated <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isAuthenticated<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token string">"/sign-in"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Grid container direction<span class="token operator">=</span><span class="token string">"column"</span> width<span class="token operator">=</span><span class="token string">"100%"</span> flexWrap<span class="token operator">=</span><span class="token string">"nowrap"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>DashboardHeader <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Grid container direction<span class="token operator">=</span><span class="token string">"row"</span> flexWrap<span class="token operator">=</span><span class="token string">"nowrap"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Grid item<span class="token operator">></span>
          <span class="token operator">&lt;</span>SideBar <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
        <span class="token operator">&lt;</span>Outlet <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>간단히 말하면, React Router v6은 outlet 컴포넌트와 중첩 라우트를 통해 보호된 경로 구현을 간소화합니다. 이는 보호된 경로를 처리하는 더 간단한 방법으로, 앱의 인증된 섹션을 탐색하는 것을 더 원활하고 직관적으로 만듭니다.</p>
</div></template>
