<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtoCreateaPrivateRouteinReactTypeScript/img/HowtoCreateaPrivateRouteinReactTypeScript_0.png" alt="이미지"></p>
<p>리액트 프로젝트에서 특정 경로를 보호하고 사용자가 콘텐츠에 액세스하기 전에 가입하거나 로그인해야 하는 것을 보장하기 위해, 우리는 이 블로그에서 바로 그것을 만들어볼 React Private Routes를 활용할 것입니다. React Private Routes를 사용하면 응용 프로그램의 민감하거나 제한된 영역을 보호하기 위해 인증 및 권한 부여 메커니즘을 강요할 수 있습니다.</p>
<p>이 간단한 튜토리얼에서는 React + TypeScript에서 이 기능을 만드는 방법을 가르쳐 드릴 것이며, 이를 프로젝트에서 사용할 수 있도록 해 드리겠습니다.</p>
<p>시작해 봅시다!</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:620/1*-YT_3SovqaKE7fKo5_8ehw.gif" alt="이미지"></p>
<p>우선 사용자 인증을 처리하는 사용자 컨텍스트를 생성해보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> useContext<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">AuthContextProps</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">isAuthenticated</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token function-variable function">loginUser</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function-variable function">logoutUser</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> AuthContext <span class="token operator">=</span> createContext<span class="token operator">&lt;</span>AuthContextProps <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">AuthProvider</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isAuthenticated<span class="token punctuation">,</span> setIsAuthenticated<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">loginUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 인증 로직 수행</span>
    <span class="token function">setIsAuthenticated</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">logoutUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 로그아웃 로직 수행</span>
    <span class="token function">setIsAuthenticated</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AuthContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> isAuthenticated<span class="token punctuation">,</span> loginUser<span class="token punctuation">,</span> logoutUser <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AuthContext<span class="token punctuation">.</span>Provider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> useAuth <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">AuthContextProps</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>AuthContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'useAuth는 AuthProvider 내에서 사용되어야 합니다.'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> context<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 비공개 라우트 컴포넌트를 생성해봅시다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//privateRoute.tsx</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Outlet<span class="token punctuation">,</span> Navigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAuth <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../userContext'</span><span class="token punctuation">;</span>


<span class="token keyword">const</span> <span class="token function-variable function">PrivateRoute</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> isAuthenticated <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useAuth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> isAuthenticated <span class="token operator">?</span> <span class="token operator">&lt;</span>Outlet <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">"/login"</span> replace <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> PrivateRoute<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>개인 라우트 컴포넌트에서는 useAuth 훅에서 isAuthenticated 값으로 사용자가 인증되었는지 확인합니다. 사용자가 인증되었으면 react-router-dom의 Outlet 컴포넌트를 사용하여 하위 컴포넌트를 렌더링합니다. 사용자가 인증되지 않았으면 Navigate 컴포넌트를 사용하여 로그인 페이지로 리디렉션합니다.</p>
<p>마지막으로, private route 컴포넌트를 ourApp 컴포넌트에서 사용합니다.</p>
<p>userContext 파일을 올바르게 import하는지 확인하십시오. 사용자가 로그인없이 보호된 경로에 액세스하려는 경우, 로그인 페이지로 다시 리디렉션됩니다. <code v-pre>Outlet</code> 컴포넌트는 react-router-dom v6에서 소개된 컴포넌트입니다. (v6 이전에 이 방법이 어떻게 수행되었는지 알아보려면 이 문서를 참조하세요.)</p>
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
<p>그리고 마지막으로 app.tsx 파일에서,</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Routes<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PrivateRoute <span class="token keyword">from</span> <span class="token string">'./PrivateRoute'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> HomePage <span class="token keyword">from</span> <span class="token string">'./HomePage'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> LoginPage <span class="token keyword">from</span> <span class="token string">'./LoginPage'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AuthProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./userContext'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">App</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AuthProvider<span class="token operator">></span>
      <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 공개 루트 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/login"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>LoginPage <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

        <span class="token punctuation">{</span><span class="token comment">/* PrivateRoute 컴포넌트를 사용한 비공개 루트 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>PrivateRoute <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/account"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>HomePage <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AuthProvider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>App 컴포넌트에서, 우리는 전체 앱에 인증 컨텍스트를 제공하기 위해 routes를 AuthProvider 컴포넌트로 랩합니다. 로그인 페이지와 같은 공개 루트는 PrivateRoute 컴포넌트 바깥에 정의합니다. 비공개 루트는 PrivateRoute 컴포넌트를 부모로 사용하고 보호된 컴포넌트(이 예에서는 HomePage)를 자식으로 배치합니다. 이로써 사용자가 /account 경로에 액세스하려면 인증되어야 함을 보장합니다.</p>
<p>플레이스홀더 컴포넌트(HomePage 및 LoginPage)를 실제 컴포넌트로 교체해야 합니다.</p>
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
<p>이 설정을 통해 사용자는 인증되지 않은 상태로 비공개 경로에 액세스하려고 시도하면 로그인 페이지로 리디렉션됩니다. 그렇지 않으면 보호된 콘텐츠에 액세스할 수 있습니다.</p>
<p>요약하자면, React Private Routes는 React 프로젝트에서 경로를 보안하는 데 유용한 도구입니다. 인증 및 권한을 강제로 적용하여 인증된 사용자만 민감하거나 제한된 콘텐츠에 액세스할 수 있도록 할 수 있습니다. 비공개 경로를 구현하면 응용 프로그램의 보안성과 무결성을 향상시킬 수 있으며 사용자에게 제어된 환경을 제공할 수 있습니다.</p>
<p>아래에 좋아요, 공유 및 댓글을 자유롭게 남겨주세요. 읽어 주셔서 감사합니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:996/1*XgO-vcD9WTFom8ivoObb4w.gif" alt="image"></p>
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
