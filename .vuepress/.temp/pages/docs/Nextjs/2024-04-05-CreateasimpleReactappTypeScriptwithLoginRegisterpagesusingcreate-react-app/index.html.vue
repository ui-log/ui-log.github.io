<template><div><p>이것은 풀 스택 애플리케이션의 인증 및 권한 부여 프로세스를 구현하는 시리즈의 첫 번째 부분입니다.</p>
<p>여기서는 TypeScript를 사용하여 React 앱을 만들고 UI를 작성하기 위해 MUI를 사용하며 클라이언트 측 라우팅을 위해 React Router V6를 사용할 것입니다. React 앱을 만드는 데 create-react-app을 사용하고 있습니다.</p>
<h2 id="_1-react-앱-만들기" tabindex="-1"><a class="header-anchor" href="#_1-react-앱-만들기" aria-hidden="true">#</a> 1. React 앱 만들기</h2>
<p>터미널을 열고 앱을 만들 폴더로 이동하세요. 아래 명령을 실행하세요. 이 명령은 TypeScript로 &quot;frontend&quot;라는 이름의 React 앱을 생성합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app frontend <span class="token operator">--</span>template typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>애플리케이션을 VS Code에서 열어주세요. VS Code 터미널을 열고 아래 명령어를 실행해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>앱은 http://localhost:3000/ 에서 실행됩니다.</p>
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
<p>저희 애플리케이션 폴더 아래 생성된 일부 파일은 필요하지 않습니다. 이 파일들 (App.css, App.test.tsx, index.css, logo.svg)을 제거하고 파일 구조를 아래와 같이 유지하십시오.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreateasimpleReactappTypeScriptwithLoginRegisterpagesusingcreate-react-app/img/CreateasimpleReactappTypeScriptwithLogin-Registerpagesusingcreate-react-app_0.png" alt="이미지"></p>
<p>index.tsx 파일에서 index.css를 가져오는 부분을 제거하세요. App.tsx 파일을 아래와 같이 업데이트 해주세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreateasimpleReactappTypeScriptwithLoginRegisterpagesusingcreate-react-app/img/CreateasimpleReactappTypeScriptwithLogin-Registerpagesusingcreate-react-app_1.png" alt="이미지"></p>
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
<p>이제 앱 구현을 계속할 수 있습니다.</p>
<h2 id="_2-react-router를-사용한-클라이언트-측-라우팅" tabindex="-1"><a class="header-anchor" href="#_2-react-router를-사용한-클라이언트-측-라우팅" aria-hidden="true">#</a> 2. React Router를 사용한 클라이언트 측 라우팅</h2>
<p>다음 명령을 실행하여 패키지를 설치하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i react<span class="token operator">-</span>router<span class="token operator">-</span>dom
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
<p>아래와 같이 pages 폴더 아래에 3개의 파일을 만들어 기본 구현을 하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreateasimpleReactappTypeScriptwithLoginRegisterpagesusingcreate-react-app/img/CreateasimpleReactappTypeScriptwithLogin-Registerpagesusingcreate-react-app_2.png" alt="이미지1"></p>
<p>index.tsx 파일에서 BrowserRouter를 import하고 아래와 같이 App 컴포넌트를 감싸세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreateasimpleReactappTypeScriptwithLoginRegisterpagesusingcreate-react-app/img/CreateasimpleReactappTypeScriptwithLogin-Registerpagesusingcreate-react-app_3.png" alt="이미지2"></p>
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
<p>App.tsx 파일에서 페이지에 대한 구성 요소를 가져와 아래와 같이 라우팅을 구현하세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreateasimpleReactappTypeScriptwithLoginRegisterpagesusingcreate-react-app/img/CreateasimpleReactappTypeScriptwithLogin-Registerpagesusingcreate-react-app_4.png" alt="이미지"></p>
<p>이제 앱을 다시 시작하면(npm start), 주소 표시줄에 링크를 입력하여 각 페이지를 볼 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreateasimpleReactappTypeScriptwithLoginRegisterpagesusingcreate-react-app/img/CreateasimpleReactappTypeScriptwithLogin-Registerpagesusingcreate-react-app_5.png" alt="이미지"></p>
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
<h2 id="_3-ui-구현-로그인-회원가입" tabindex="-1"><a class="header-anchor" href="#_3-ui-구현-로그인-회원가입" aria-hidden="true">#</a> 3. UI 구현 (로그인 / 회원가입)</h2>
<p>로그인 및 회원가입 페이지에 대해 MUI 무료 템플릿을 사용 중이에요, 몇 가지 업데이트를 했어요.</p>
<p>첫째로, 아래 명령어를 사용하여 mui 및 종속 항목 및 아이콘을 설치하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm i @mui<span class="token operator">/</span>material @emotion<span class="token operator">/</span>react @emotion<span class="token operator">/</span>styled @mui<span class="token operator">/</span>icons<span class="token operator">-</span>material
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
<p>로그인 페이지를 구현하고 입력 필드 데이터를 처리하기 위해 Login.tsx에 아래 코드를 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> LockOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/icons-material"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Container<span class="token punctuation">,</span>
  CssBaseline<span class="token punctuation">,</span>
  Box<span class="token punctuation">,</span>
  Avatar<span class="token punctuation">,</span>
  Typography<span class="token punctuation">,</span>
  TextField<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  Grid<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/material"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> setEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleLogin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Container maxWidth<span class="token operator">=</span><span class="token string">"xs"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>CssBaseline <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Box
          sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">"column"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          <span class="token operator">&lt;</span>Avatar sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">bgcolor</span><span class="token operator">:</span> <span class="token string">"primary.light"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>LockOutlined <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Avatar<span class="token operator">></span>
          <span class="token operator">&lt;</span>Typography variant<span class="token operator">=</span><span class="token string">"h5"</span><span class="token operator">></span>로그인<span class="token operator">&lt;</span><span class="token operator">/</span>Typography<span class="token operator">></span>
          <span class="token operator">&lt;</span>Box sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>TextField
              margin<span class="token operator">=</span><span class="token string">"normal"</span>
              required
              fullWidth
              id<span class="token operator">=</span><span class="token string">"email"</span>
              label<span class="token operator">=</span><span class="token string">"이메일 주소"</span>
              name<span class="token operator">=</span><span class="token string">"email"</span>
              autoFocus
              value<span class="token operator">=</span><span class="token punctuation">{</span>email<span class="token punctuation">}</span>
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setEmail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>

            <span class="token operator">&lt;</span>TextField
              margin<span class="token operator">=</span><span class="token string">"normal"</span>
              required
              fullWidth
              id<span class="token operator">=</span><span class="token string">"password"</span>
              name<span class="token operator">=</span><span class="token string">"password"</span>
              label<span class="token operator">=</span><span class="token string">"비밀번호"</span>
              type<span class="token operator">=</span><span class="token string">"password"</span>
              value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setPassword</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>

            <span class="token operator">&lt;</span>Button
              fullWidth
              variant<span class="token operator">=</span><span class="token string">"contained"</span>
              sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleLogin<span class="token punctuation">}</span>
            <span class="token operator">></span>
              로그인
            <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
            <span class="token operator">&lt;</span>Grid container justifyContent<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"flex-end"</span><span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Grid item<span class="token operator">></span>
                <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/register"</span><span class="token operator">></span>계정이 없으신가요<span class="token operator">?</span> 회원가입<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Login<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>회원가입 페이지를 구현하고 입력 필드 데이터를 처리하기 위해 Register.tsx에 아래 코드를 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  Avatar<span class="token punctuation">,</span>
  Box<span class="token punctuation">,</span>
  Button<span class="token punctuation">,</span>
  Container<span class="token punctuation">,</span>
  CssBaseline<span class="token punctuation">,</span>
  Grid<span class="token punctuation">,</span>
  TextField<span class="token punctuation">,</span>
  Typography<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/material"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> LockOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@mui/icons-material"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Register</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> setEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleRegister</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Container maxWidth<span class="token operator">=</span><span class="token string">"xs"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>CssBaseline <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Box
          sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
            <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
            <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">"flex"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">flexDirection</span><span class="token operator">:</span> <span class="token string">"column"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">"center"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          <span class="token operator">&lt;</span>Avatar sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">bgcolor</span><span class="token operator">:</span> <span class="token string">"primary.light"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>LockOutlined <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Avatar<span class="token operator">></span>
          <span class="token operator">&lt;</span>Typography variant<span class="token operator">=</span><span class="token string">"h5"</span><span class="token operator">></span>회원가입<span class="token operator">&lt;</span><span class="token operator">/</span>Typography<span class="token operator">></span>
          <span class="token operator">&lt;</span>Box sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>Grid container spacing<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Grid item xs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>TextField
                  name<span class="token operator">=</span><span class="token string">"name"</span>
                  required
                  fullWidth
                  id<span class="token operator">=</span><span class="token string">"name"</span>
                  label<span class="token operator">=</span><span class="token string">"이름"</span>
                  autoFocus
                  value<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token punctuation">}</span>
                  onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>

              <span class="token operator">&lt;</span>Grid item xs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>TextField
                  required
                  fullWidth
                  id<span class="token operator">=</span><span class="token string">"email"</span>
                  label<span class="token operator">=</span><span class="token string">"이메일 주소"</span>
                  name<span class="token operator">=</span><span class="token string">"email"</span>
                  value<span class="token operator">=</span><span class="token punctuation">{</span>email<span class="token punctuation">}</span>
                  onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setEmail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
              <span class="token operator">&lt;</span>Grid item xs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>TextField
                  required
                  fullWidth
                  name<span class="token operator">=</span><span class="token string">"password"</span>
                  label<span class="token operator">=</span><span class="token string">"비밀번호"</span>
                  type<span class="token operator">=</span><span class="token string">"password"</span>
                  id<span class="token operator">=</span><span class="token string">"password"</span>
                  value<span class="token operator">=</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span>
                  onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setPassword</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
                <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
            <span class="token operator">&lt;</span>Button
              fullWidth
              variant<span class="token operator">=</span><span class="token string">"contained"</span>
              sx<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">marginBottom</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleRegister<span class="token punctuation">}</span>
            <span class="token operator">></span>
              회원가입
            <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
            <span class="token operator">&lt;</span>Grid container justifyContent<span class="token operator">=</span><span class="token string">"flex-end"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Grid item<span class="token operator">></span>
                <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/login"</span><span class="token operator">></span>이미 계정이 있으신가요<span class="token operator">?</span> 로그인<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Grid<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Register<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음은 UI가 업데이트됩니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreateasimpleReactappTypeScriptwithLoginRegisterpagesusingcreate-react-app/img/CreateasimpleReactappTypeScriptwithLogin-Registerpagesusingcreate-react-app_6.png" alt="image"></p>
<p>로그인 / 등록 버튼을 클릭하면 handleLogin() / handleRegister() 함수가 호출됩니다. 아직 이 함수들 내부에는 아무 것도 포함되어 있지 않습니다.</p>
<p>양식 필드를 유효성 검사하고, 유효성 검사가 실패하면 오류 메시지를 표시해야 합니다. 유효성 검사가 성공하면 이 기능을 처리하기 위해 백엔드로 API 요청을 시작해야 합니다.</p>
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
<p>저를 따라오세요! 궁금한 점이 있으면 댓글로 알려주세요!</p>
<h2 id="다음-단계" tabindex="-1"><a class="header-anchor" href="#다음-단계" aria-hidden="true">#</a> 다음 단계</h2>
<p>애플리케이션의 상태 관리에 Redux Toolkit을 사용하고, API 요청 (로그인, 등록, 로그아웃, 프로필)을 시작하기 위해 Axios를 사용할 것입니다.</p>
<p>다음으로는 오류/성공 메시지 알림을 중앙에서 처리할 것입니다 (Redux Toolkit 및 MUI를 사용하여 메시지 UI 구성).</p>
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
<p>그 다음으로, 사용자가 로그인했는지 여부에 따라 리다이렉트와 보호된 경로로 프론트엔드 코드를 업데이트할 거에요 (인증된 사용자인지 아닌지).</p>
<p>백엔드는 TypeScript로 Express를 사용하여 구현하고, 데이터베이스로 MongoDB를 사용할 거에요.</p>
<p>마지막으로, 프론트엔드와 백엔드 애플리케이션에 대한 권한 부여를 처리할 거에요. 역할 기반 액세스 제어를 사용할 거에요.</p>
<p>그런 다음에 애플리케이션에 더 많은 기능을 계속 추가할 거에요.</p>
</div></template>
