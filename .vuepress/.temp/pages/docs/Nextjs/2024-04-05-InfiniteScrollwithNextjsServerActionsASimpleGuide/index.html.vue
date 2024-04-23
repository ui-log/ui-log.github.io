<template><div><p>대량의 데이터를 처리할 때, 효과적인 프론트엔드 페이지네이션은 성능과 가독성을 유지하는 데 중요합니다. 특히 더 느린 장치에서는 더 그렇습니다. 페이지네이션에 현대적인 감각을 더하려면, 무한 스크롤을 살펴보고 Next.js 서버 액션의 강점을 활용하는 방법에 대해 알아보겠습니다.</p>
<h1 id="단계-1-—-프로젝트-초기화" tabindex="-1"><a class="header-anchor" href="#단계-1-—-프로젝트-초기화" aria-hidden="true">#</a> 단계 1 — 프로젝트 초기화</h1>
<p>완성된 데모 프로젝트는 여기에서 찾을 수 있습니다. 새로운 Next.js 프로젝트를 생성하려면 다음 명령을 실행하고 지시에 따르세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>next<span class="token operator">-</span>app@latest
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
<p>이 예제에서는 TypeScript, Tailwind 및 Next.js 앱 라우터를 사용했어요.</p>
<p>저희 요구사항은 다음과 같아요:</p>
<ul>
<li>무료 가짜 API sling academy에서 사용자 목록을 표시합니다.</li>
<li>빌드 시점에 처음 10명의 사용자를 정적으로 로드합니다.</li>
<li>페이지 하단으로 스크롤 할 때 추가 사용자 10명을 로드합니다.</li>
</ul>
<h1 id="단계-2-—-초기-사용자-표시" tabindex="-1"><a class="header-anchor" href="#단계-2-—-초기-사용자-표시" aria-hidden="true">#</a> 단계 2 — 초기 사용자 표시</h1>
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
<h2 id="사용자-가져오기-함수" tabindex="-1"><a class="header-anchor" href="#사용자-가져오기-함수" aria-hidden="true">#</a> 사용자 가져오기 함수</h2>
<p>먼저 사용자를 가져오는 함수를 만들어보세요. <code v-pre>actions/getUsers.ts</code> 파일을 만들어주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// actions/getUsers.ts</span>

<span class="token string">'use server'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> UserAPIResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types/User'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getUsers</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">offset</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">limit</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.slingacademy.com/v1/sample-data/users?offset=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>offset<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;limit=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>limit<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> UserAPIResponse
    <span class="token keyword">return</span> data<span class="token punctuation">.</span>users
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> unknown<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">An error happened: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="사용자-ui-구성요소" tabindex="-1"><a class="header-anchor" href="#사용자-ui-구성요소" aria-hidden="true">#</a> 사용자 UI 구성요소</h1>
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
<p>사용자 데이터를 표시하는 간단한 카드 컴포넌트를 만들어주세요. 이를 위해 src/components/UserCard.tsx 파일을 작성해주세요.</p>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> User <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types/User'</span>
 
type UserProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> User
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserCard</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token operator">:</span> UserProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">'</span>bg-indigo-400 text-white rounded w-96 p-3<span class="token punctuation">'</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>first_name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>last_name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>phone<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="사용자-페이지" tabindex="-1"><a class="header-anchor" href="#사용자-페이지" aria-hidden="true">#</a> 사용자 페이지</h1>
<p>src/app/page.tsx 파일에 있는 Next.js 홈페이지를 사용자 페이지로 대체하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> UserCard <span class="token keyword">from</span> <span class="token string">'@/components/UserCard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUsers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/actions/getUsers'</span>

<span class="token keyword">const</span> <span class="token constant">INITIAL_NUMBER_OF_USERS</span> <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> initialUsers <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">INITIAL_NUMBER_OF_USERS</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'flex flex-col gap-3'</span><span class="token operator">></span>
      <span class="token punctuation">{</span>initialUsers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>UserCard key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-3-—-무한-스크롤로-더-많은-사용자-로드하기" tabindex="-1"><a class="header-anchor" href="#단계-3-—-무한-스크롤로-더-많은-사용자-로드하기" aria-hidden="true">#</a> 단계 3 — 무한 스크롤로 더 많은 사용자 로드하기</h2>
<h3 id="사용자-목록을-자식-클라이언트-컴포넌트로-이동" tabindex="-1"><a class="header-anchor" href="#사용자-목록을-자식-클라이언트-컴포넌트로-이동" aria-hidden="true">#</a> 사용자 목록을 자식 클라이언트 컴포넌트로 이동</h3>
<p>사용자 페이지의 내용을 자식 클라이언트 컴포넌트로 이동하십시오. src/components/UserList.tsx를 생성하고 src/app/page.tsx에 포함시킵니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// components/UserList.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> User <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types/User'</span>
<span class="token keyword">import</span> UserCard <span class="token keyword">from</span> <span class="token string">'./UserCard'</span>

type UserListProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">initialUsers</span><span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> initialUsers <span class="token punctuation">}</span><span class="token operator">:</span> UserListProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'flex flex-col gap-3'</span><span class="token operator">></span>
      <span class="token punctuation">{</span>initialUsers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>UserCard key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//app/page.tsx</span>
<span class="token keyword">import</span> UserList <span class="token keyword">from</span> <span class="token string">'@/components/UserList'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUsers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/actions/getUsers'</span>

<span class="token keyword">const</span> <span class="token constant">INITIAL_NUMBER_OF_USERS</span> <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> initialUsers <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUsers</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token constant">INITIAL_NUMBER_OF_USERS</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>UserList initialUsers<span class="token operator">=</span><span class="token punctuation">{</span>initialUsers<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="사용자를-상태로-이동" tabindex="-1"><a class="header-anchor" href="#사용자를-상태로-이동" aria-hidden="true">#</a> 사용자를 상태로 이동</h2>
<p>사용자 목록 컴포넌트에서 사용자 목록은 이제 React 상태입니다. 초기 값은 부모 페이지에서 정적으로 로드된 10명의 사용자로 설정되어 있습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// components/UserList.tsx</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> 사용자 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types/User'</span>
<span class="token keyword">import</span> UserCard <span class="token keyword">from</span> <span class="token string">'./UserCard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>

type UserListProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">initialUsers</span><span class="token operator">:</span> 사용자<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> initialUsers <span class="token punctuation">}</span><span class="token operator">:</span> UserListProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>사용자<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span>initialUsers<span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'flex flex-col gap-3'</span><span class="token operator">></span>
      <span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>UserCard key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="오프셋-상태-생성-및-추가-사용자-로드-기능-만들기" tabindex="-1"><a class="header-anchor" href="#오프셋-상태-생성-및-추가-사용자-로드-기능-만들기" aria-hidden="true">#</a> 오프셋 상태 생성 및 추가 사용자 로드 기능 만들기</h2>
<p>아래 코드 스니펫에서, 초기값이 10으로 설정된 데이터 오프셋을 추적하는 시스템을 설정했습니다. 이 오프셋은 사용자가 추가 데이터를 요청할 때마다 10씩 증가합니다. 추가로, 현재 오프셋을 기반으로 추가 사용자를 검색하고 이를 사용자 상태에 추가하는 기능을 정의했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// components/UserList.tsx</span>

<span class="token string">'use client'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> 사용자 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types/User'</span>
<span class="token keyword">import</span> UserCard <span class="token keyword">from</span> <span class="token string">'./UserCard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUsers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/actions/getUsers'</span>

type UserListProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">initialUsers</span><span class="token operator">:</span> 사용자<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> 가져올_사용자_수 <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> initialUsers <span class="token punctuation">}</span><span class="token operator">:</span> UserListProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>offset<span class="token punctuation">,</span> setOffset<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>가져올_사용자_수<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>사용자<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span>initialUsers<span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">loadMoreUsers</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> apiUsers <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUsers</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> 가져올_사용자_수<span class="token punctuation">)</span>
    <span class="token function">setUsers</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>users<span class="token punctuation">,</span> <span class="token operator">...</span>apiUsers<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">setOffset</span><span class="token punctuation">(</span>offset <span class="token operator">+</span> 가져올_사용자_수<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'flex flex-col gap-3'</span><span class="token operator">></span>
      <span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>UserCard key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>loadMoreUsers<span class="token punctuation">}</span><span class="token operator">></span>더 불러오기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>🥳 우리는 이제 사용자를 더 불러오는 버튼으로 활성화된 완전히 기능적인 페이징 기능을 갖추었습니다.</p>
<p>&quot;getUsers&quot; 함수가 NextJS 서버 액션인 점을 감안하면, 이 함수는 클라이언트 측이 아닌 서버에서 실행됩니다. 사용자가 처음으로 더 많은 사용자를 불러올 때, 정보는 API에서 가져와 캐시됩니다. 다른 사용자들이 더 많은 데이터를 요청해도 추가적인 API 호출이 필요하지 않으며, 데이터가 이미 NextJS 캐시에 저장되어 있기 때문에 그냥 사용할 수 있습니다! 이는 페이지 성능과 사용자 경험을 크게 향상시킵니다. 게다가 이는 동일한 결과를 얻기 위해 필요한 백엔드 호출을 줄일 수 있어 호스팅 비용을 절감할 수도 있습니다.</p>
<h2 id="스크롤로-더-많은-사용자-불러오기" tabindex="-1"><a class="header-anchor" href="#스크롤로-더-많은-사용자-불러오기" aria-hidden="true">#</a> 스크롤로 더 많은 사용자 불러오기</h2>
<p>프로젝트에 마지막 손질로 사용자의 스크롤을 감지하고 loadMoreUsers 함수를 활성화하는 작업이 필요합니다.</p>
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
<p>이를 위해 react-intersection-observer 라이브러리를 설치할 것입니다. 이 라이브러리는 컴포넌트가 뷰포트 내에 있는지 모니터링하는 프로세스를 간소화합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>intersection<span class="token operator">-</span>observer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// components/UserList.tsx</span>

<span class="token string">'use client'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> User <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/types/User'</span>
<span class="token keyword">import</span> UserCard <span class="token keyword">from</span> <span class="token string">'./UserCard'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getUsers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/actions/getUsers'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useInView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-intersection-observer'</span>

type UserListProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">initialUsers</span><span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token constant">NUMBER_OF_USERS_TO_FETCH</span> <span class="token operator">=</span> <span class="token number">10</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">UserList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> initialUsers <span class="token punctuation">}</span><span class="token operator">:</span> UserListProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>offset<span class="token punctuation">,</span> setOffset<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token constant">NUMBER_OF_USERS_TO_FETCH</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>User<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span>initialUsers<span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> inView <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useInView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">loadMoreUsers</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> apiUsers <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUsers</span><span class="token punctuation">(</span>offset<span class="token punctuation">,</span> <span class="token constant">NUMBER_OF_USERS_TO_FETCH</span><span class="token punctuation">)</span>
    <span class="token function">setUsers</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>users<span class="token punctuation">,</span> <span class="token operator">...</span>apiUsers<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">setOffset</span><span class="token punctuation">(</span>offset <span class="token operator">+</span> <span class="token constant">NUMBER_OF_USERS_TO_FETCH</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>inView<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loadMoreUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>inView<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'flex flex-col gap-3'</span><span class="token operator">></span>
      <span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>UserCard key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> user<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span><span class="token operator">></span>
        Loading<span class="token operator">...</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* &lt;button onClick={loadMoreUsers}>Load more&lt;/button> */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>축하합니다! 우리는 사용자 친화적인 무한 스크롤 기능을 구현했습니다. 이는 우리 애플리케이션을 더 현대적으로 만들어주는 것뿐만 아니라 성능도 향상시킵니다. Next.js 서버 액션 및 캐싱을 사용하여 데이터 검색을 세밀하게 조정하여 모든 것이 원활하게 작동하고 사용자에게 전반적으로 긍정적인 경험을 제공합니다! 🚀</p>
</div></template>
