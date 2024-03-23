<template><div><h2 id="쉽고-안전한-방법으로-crud-앱-만들기" tabindex="-1"><a class="header-anchor" href="#쉽고-안전한-방법으로-crud-앱-만들기" aria-hidden="true">#</a> 쉽고 안전한 방법으로 CRUD 앱 만들기</h2>
<p><img src="@source/docs/Tech/2024-03-23-BuildinganAdminConsoleWithMinimumCodeUsingReact-AdminPrismaandZenstack/img/Building-an-Admin-Console-With-Minimum-Code-Using-React-Admin-Prisma-and-Zenstack_0.png" alt="image"></p>
<p>고객을 대상으로 하는 애플리케이션을 만드는 것은 흥미롭습니다. 그러나 어드민 콘솔 부분을 다룰 때 재미있지 않을 수도 있습니다. 그러나 실제로는 대부분의 앱이 운영에 필요한 어떤 종류의 어드민 콘솔을 요구합니다. 디자인이 멋지거나 성능이 빠르지 않아도 괜찮습니다. 주요 초점은 신뢰성, 비용 효율성, 확장성에 있어야 합니다.</p>
<p>다양한 유형의 어드민 콘솔이 있습니다. 이 게시물에서는 가장 일반적인 유형의 콘솔에 대해 이야기하겠습니다: 비기술자도 데이터베이스를 변경하고 동시에 적절한 권한 관리를 보장할 수 있는 콘솔입니다.</p>
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
<p>이러한 관리자 콘솔을 구축하려면 세 가지 선택지가 있습니다:</p>
<ul>
<li>구축하지 않습니다. 그냥 데이터베이스 편집기(phpMyAdmin, Prisma Studio 등)를 사용하세요.</li>
<li>고수준 라이브러리와 도구를 결합하여 처음부터 빠르게 구축합니다.</li>
<li>고객을 대상으로 하는 앱을 구축할 때와 동일한 방식으로 구축합니다.</li>
</ul>
<p>각 선택지마다 장단점이 있습니다. 이 글은 대부분의 실제 애플리케이션에 가장 적합한 비용과 품질 사이의 균형을 제공하는 두 번째 선택지에 초점을 맞출 것입니다.</p>
<h1 id="사용할-라이브러리들-간단히-살펴보기" tabindex="-1"><a class="header-anchor" href="#사용할-라이브러리들-간단히-살펴보기" aria-hidden="true">#</a> 사용할 라이브러리들 간단히 살펴보기</h1>
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
<h2 id="react-admin" tabindex="-1"><a class="header-anchor" href="#react-admin" aria-hidden="true">#</a> React-Admin</h2>
<p>React-Admin은 백엔드 데이터 API와 통신하는 관리자 애플리케이션을 빌드하기 위한 React 기반 프론트엔드 프레임워크입니다. 백엔드의 특정 API 스타일에 쉽게 적응할 수 있는 플러그인 메커니즘을 제공합니다.</p>
<h2 id="prisma" tabindex="-1"><a class="header-anchor" href="#prisma" aria-hidden="true">#</a> Prisma</h2>
<p>Prisma는 최신 TypeScript-중심 ORM으로, 데이터베이스 스키마를 쉽게 관리하고 쿼리와 뮤테이션을 높은 유연성으로 수행하며 우수한 유형 안전성을 보장할 수 있습니다.</p>
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
<h2 id="zenstack" tabindex="-1"><a class="header-anchor" href="#zenstack" aria-hidden="true">#</a> ZenStack</h2>
<p>ZenStack은 Prisma 위에 구축된 도구 상자로, 접근 제어, 자동 CRUD 웹 API 등이 추가되어 있습니다. 이를 통해 ORM의 전체 기능을 발휘하여 풀 스택 개발이 가능해집니다.</p>
<h1 id="대상-앱" tabindex="-1"><a class="header-anchor" href="#대상-앱" aria-hidden="true">#</a> 대상 앱</h1>
<p>토론을 용이하게 하기 위해 예시로 판타지 컨텐츠 발행 앱을 사용하겠습니다. 이 앱은 블로그 게시물을 만들고 편집하여 발행하는 내용을 다룹니다. 사용자 역할로는 세 가지가 포함되어 있습니다.</p>
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
<li>작성자: 게시물을 작성하고 편집 검토를 요청할 수 있습니다.</li>
<li>편집자: 기사를 편집하고 게시물을 발행할 수 있습니다.</li>
<li>관리자: 모든 작업을 수행할 수 있습니다.</li>
</ul>
<p>블로그 게시물은 다음 중 하나의 상태에 있을 수 있습니다:</p>
<ul>
<li>초안
작성자가 비공개로 작업 중입니다. 작성자와 관리자만 액세스할 수 있습니다.</li>
<li>제출됨
작성자가 검토를 요청했습니다. 편집자는 읽을 수 있고 업데이트할 수 있습니다.</li>
<li>게시됨
게시물이 게시되어 모두가 읽을 수 있습니다. 편집자는 게시를 취소할 수 있습니다.</li>
</ul>
<p>물론, 관리자 사용자는 모든 상태의 게시물에 대해 어떤 작업이라도 수행할 수 있습니다.</p>
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
<h1 id="작업들을-연결하기" tabindex="-1"><a class="header-anchor" href="#작업들을-연결하기" aria-hidden="true">#</a> 작업들을 연결하기</h1>
<p>관리자 콘솔은 풀 스택 웹 앱이기 때문에 프론트엔드와 백엔드를 하나의 프로젝트로 결합하는 풀 스택 프레임워크를 사용하는 것이 가장 쉬운 방법입니다. 이 포스트에서는 Next.js를 사용할 것이지만, 분리된 프론트엔드와 백엔드(Vite React SPA와 ExpressJS 백엔드)로 진행할 수도 있습니다. 기본 사항은 변경되지 않습니다.</p>
<p>포스트 끝에 완성된 프로젝트의 GitHub 저장소 링크를 찾을 수 있습니다.</p>
<h2 id="앱-뼈대-구성하기" tabindex="-1"><a class="header-anchor" href="#앱-뼈대-구성하기" aria-hidden="true">#</a> 앱 뼈대 구성하기</h2>
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
<p>제가 사용한 create-t3-app은 Next.js 앱을 TypeScript, Prisma 및 &quot;app router&quot;를 옵션으로 활성화한 상태로 생성하였어요. 작업을 위해 create-next-app을 사용하고 Prisma를 수동으로 설치할 수도 있어요.</p>
<p>그리고 react-admin, ZenStack 및 몇 가지 다른 종속성을 설치해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>admin jsonwebtoken
npm install <span class="token operator">-</span><span class="token constant">D</span> tsx
npx zenstack@latest init
npm install @zenstackhq<span class="token operator">/</span>server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>중요한 한 가지는 zenstack init 명령이 prisma/schema.prisma 파일을 /schema.zmodel로 복사한다는 것이에요. ZModel 언어는 ZenStack이 데이터베이스 스키마 및 액세스 제어 정책과 같은 다른 것들을 모델링하는 데 사용하는 DSL입니다. ZModel은 Prisma Schema의 슈퍼셋이에요. 우선은 Prisma 스키마를 작성하는 것처럼 이를 작성할 거예요.</p>
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
<p>데이터베이스 스키마 변경이 필요할 때 기억해 주세요:</p>
<ul>
<li>항상 schema.zmodel을 편집해주세요.</li>
<li>npx prisma generate 대신 npx zenstack generate를 실행해주세요</li>
</ul>
<h1 id="데이터베이스-스키마" tabindex="-1"><a class="header-anchor" href="#데이터베이스-스키마" aria-hidden="true">#</a> 데이터베이스 스키마</h1>
<p>우리 앱의 스키마는 여기 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>generator client <span class="token punctuation">{</span>
    provider <span class="token operator">=</span> <span class="token string">"prisma-client-js"</span>
<span class="token punctuation">}</span>

datasource db <span class="token punctuation">{</span>
    provider <span class="token operator">=</span> <span class="token string">"sqlite"</span>
    url      <span class="token operator">=</span> <span class="token string">"file:./db.sqlite"</span>
<span class="token punctuation">}</span>

model User <span class="token punctuation">{</span>
    id Int @id @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">autoincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    createdAt DateTime @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    updatedAt DateTime @updatedAt
    email String @unique
    password String @password @omit
    name String<span class="token operator">?</span>
    role String @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token string">'Author'</span><span class="token punctuation">)</span> <span class="token comment">// Author, Editor, Admin</span>
    posts Post<span class="token punctuation">[</span><span class="token punctuation">]</span>
    @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'all'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

model Post <span class="token punctuation">{</span>
    id Int @id @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">autoincrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    createdAt DateTime @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    updatedAt DateTime @updatedAt
    title String
    content String
    status String @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token string">'Draft'</span><span class="token punctuation">)</span> <span class="token comment">// Draft, Submitted, Published</span>
    user User @<span class="token function">relation</span><span class="token punctuation">(</span>fields<span class="token operator">:</span> <span class="token punctuation">[</span>userId<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">references</span><span class="token operator">:</span> <span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">onDelete</span><span class="token operator">:</span> Cascade<span class="token punctuation">)</span>
    userId Int

    @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'all'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>간단한 주의 사항:</p>
<ul>
<li>@password 속성은 bcryptjs를 사용하여 데이터베이스에 저장하기 전에 비밀번호 필드를 자동으로 해싱하도록 표시합니다. @omit 속성은 쿼리를 위해 엔티티가 반환되기 전에 해당 필드가 삭제되도록 표시합니다. 이것들은 ZenStack이 Prisma에 추가한 확장 기능입니다.</li>
<li>@@allow 속성은 조작 허용 정책을 정의하여 허용된 작업을 결정합니다. 우리는 일단 아무도 모든 것을 하도록 허용할 것입니다. 접근 제어는 ZenStack이 Prisma에 추가한 가장 중요한 확장 기능입니다. 곧 다시 살펴볼 것입니다.</li>
</ul>
<h2 id="인증-시스템-구축하기" tabindex="-1"><a class="header-anchor" href="#인증-시스템-구축하기" aria-hidden="true">#</a> 인증 시스템 구축하기</h2>
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
<p>React-Admin은 내장된 인증(AuthN) 플로우와 UI를 제공합니다. 백엔드의 인증 메커니즘에 맞게 적응하기 위해 &quot;auth provider&quot;를 구현하는 것만 필요합니다. 간단히 말해서, 우리는 이메일과 비밀번호를 자격 증명으로 사용하는 간단한 JWT 기반의 인증 디자인을 사용할 것입니다. 이를 위해 먼저 /src/app/api/auth/login/route.ts에 API 핸들러를 생성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> compare <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"bcryptjs"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sign <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"jsonwebtoken"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> db <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"~/server/db"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">POST</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> Request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">email</span><span class="token operator">:</span> string<span class="token punctuation">;</span> password<span class="token operator">:</span> string <span class="token punctuation">}</span> <span class="token operator">=</span>
    <span class="token keyword">await</span> request<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">findUnique</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> email <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"잘못된 이메일 및 비밀번호 조합"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">compare</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> user<span class="token punctuation">.</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">"잘못된 이메일 및 비밀번호 조합"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">401</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> Response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">.</span>email<span class="token punctuation">,</span>
    <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token function">sign</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">sub</span><span class="token operator">:</span> user<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> user<span class="token punctuation">.</span>email<span class="token punctuation">,</span> <span class="token literal-property property">role</span><span class="token operator">:</span> user<span class="token punctuation">.</span>role <span class="token punctuation">}</span><span class="token punctuation">,</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">JWT_SECRET</span><span class="token operator">!</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그 다음, 프론트엔드가 백엔드와 상호작용하는 방법을 정의하는 React-Admin auth provider를 구현하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span> AuthProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-admin"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">authProvider</span><span class="token operator">:</span> AuthProvider <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">login</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"/api/auth/login"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
      <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">email</span><span class="token operator">:</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>resp<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">200</span> <span class="token operator">||</span> resp<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">auth</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">"auth"</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">logout</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">"auth"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">checkAuth</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"auth"</span><span class="token punctuation">)</span> <span class="token operator">?</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function-variable function">checkError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access</span>
    <span class="token keyword">const</span> status <span class="token operator">=</span> error<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">"auth"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// other error code (404, 500, etc): no need to log out</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function-variable function">getIdentity</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> auth <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"auth"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>auth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"인증되지 않았습니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> email <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> string <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token punctuation">,</span> email <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">getPermissions</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> authProvider<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>Auth provider는 React-Admin을 사용하여 CRUD UI를 구축할 때 사용됩니다.</p>
<h2 id="데이터-제공자-만들기" tabindex="-1"><a class="header-anchor" href="#데이터-제공자-만들기" aria-hidden="true">#</a> 데이터 제공자 만들기</h2>
<p>우리의 관리자 콘솔은 본질적으로 기본 데이터벘에 쿼리 및 뮤테이션을 수행하는 것입니다. 그를 달성하기 위해 두 가지 작업을 완료해야 합니다:</p>
<ul>
<li>백엔드: CRUD API</li>
<li>프론트엔드: 백엔드 API를 사용하는 데이터 제공자</li>
</ul>
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
<p>ZenStack은 데이터베이스 스키마를 기반으로 자동 RESTful API를 제공하여 백엔드 부분을 거의 손쉽게 처리할 수 있습니다. 다음은 Next.js API 핸들러로 설치하는 방법입니다 (&quot;src/app/api/model/[…path]/router.ts&quot;):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> type AuthUser<span class="token punctuation">,</span> enhance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@zenstackhq/runtime"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> RestApiHandler <span class="token keyword">from</span> <span class="token string">"@zenstackhq/server/api/rest"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequestHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@zenstackhq/server/next"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> type JwtPayload<span class="token punctuation">,</span> verify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"jsonwebtoken"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> db <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"~/server/db"</span><span class="token punctuation">;</span>

<span class="token comment">// 'getPrisma' 콜백은 데이터베이스에 액세스하는 데 사용되는 'PrismaClient' 인스턴스를 반환합니다</span>
<span class="token comment">// 요청에 대해 여기에서는 액세스 제어를 강화하기 위해 ZenStack 향상된 `PrismaClient`를 반환합니다</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getPrisma</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">req</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">user</span><span class="token operator">:</span> AuthUser <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> auth <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"authorization"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>auth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> auth<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">"Bearer "</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> decoded <span class="token operator">=</span> <span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">,</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">JWT_SECRET</span><span class="token operator">!</span><span class="token punctuation">)</span> <span class="token keyword">as</span> JwtPayload<span class="token punctuation">;</span>
      user <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>decoded<span class="token punctuation">.</span>sub<span class="token operator">!</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">role</span><span class="token operator">:</span> decoded<span class="token punctuation">.</span>role <span class="token keyword">as</span> string<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// JWT 토큰에서 추출된 사용자 식별 정보를 사용하여 데이터베이스에 액세스합니다</span>
  <span class="token keyword">return</span> <span class="token function">enhance</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> <span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token function">NextRequestHandler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  getPrisma<span class="token punctuation">,</span>
  <span class="token literal-property property">handler</span><span class="token operator">:</span> <span class="token function">RestApiHandler</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">endpoint</span><span class="token operator">:</span> <span class="token string">"http://localhost:3000"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useAppDir</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  handler <span class="token keyword">as</span> <span class="token constant">DELETE</span><span class="token punctuation">,</span>
  handler <span class="token keyword">as</span> <span class="token constant">GET</span><span class="token punctuation">,</span>
  handler <span class="token keyword">as</span> <span class="token constant">PATCH</span><span class="token punctuation">,</span>
  handler <span class="token keyword">as</span> <span class="token constant">POST</span><span class="token punctuation">,</span>
  handler <span class="token keyword">as</span> <span class="token constant">PUT</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드를 사용하면 &quot;/api/model&quot;에서 완전한 CRUD API 세트를 얻을 수 있습니다. 예를 들어, GET /api/model/user로 모든 사용자를 나열할 수 있습니다. CRUD API의 전체 사양은 여기에서 확인할 수 있습니다. 코드는 Authorization 헤더에 JWT 토큰을 예상하며, React-Admin을 사용하여 CRUD UI 구축 부분에 도달하면 프론트엔드가 토큰을 보내는 방법을 볼 수 있습니다.</p>
<p>이제 React-Admin 데이터 제공자 부분을 다루어 보겠습니다. 이 부분은 매우 직관적입니다. 간략하게 설명하기 위해 여기에서는 일부 코드만 보여주지만, 전체 구현은 이 글의 끝에서 찾으실 수 있습니다.```</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">FetchFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> init<span class="token operator">:</span> RequestInit<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Response<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">createDataProvider</span><span class="token punctuation">(</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  customFetch<span class="token operator">?</span><span class="token operator">:</span> FetchFn<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> DataProvider <span class="token punctuation">{</span>
  <span class="token keyword">const</span> fetcher <span class="token operator">=</span> customFetch <span class="token operator">??</span> fetch<span class="token punctuation">;</span>

  <span class="token comment">// make the API fetch</span>
  <span class="token keyword">const</span> <span class="token function-variable function">doFetch</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> init<span class="token operator">:</span> RequestInit<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> resp <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetcher</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> init<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resp<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">200</span> <span class="token operator">||</span> resp<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpError</span><span class="token punctuation">(</span>resp<span class="token punctuation">.</span>statusText<span class="token punctuation">,</span> resp<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// convert React-Admin query params to URL search params</span>
  <span class="token keyword">const</span> <span class="token function-variable function">getListQuerySearchParams</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    params<span class="token operator">:</span> GetListParams <span class="token operator">|</span> GetManyReferenceParams<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>params<span class="token punctuation">.</span>filter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Object<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">entries</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>filter<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">filter[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> value<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
      <span class="token string">"sort"</span><span class="token punctuation">,</span>
      params<span class="token punctuation">.</span>sort<span class="token punctuation">.</span>order <span class="token operator">===</span> <span class="token string">"ASC"</span> <span class="token operator">?</span> params<span class="token punctuation">.</span>sort<span class="token punctuation">.</span>field <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>sort<span class="token punctuation">.</span>field<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
      <span class="token string">"page[offset]"</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> params<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span>perPage<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"page[limit]"</span><span class="token punctuation">,</span> params<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span>perPage<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> searchParams<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// convert the API response to React-Admin query result</span>
  <span class="token keyword">const</span> <span class="token function-variable function">makeListQueryResult</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span> total<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span> GetListParams <span class="token operator">|</span> GetManyReferenceParams<span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      data<span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">...</span>item<span class="token punctuation">.</span>attributes <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      total<span class="token operator">:</span> meta<span class="token punctuation">.</span>total<span class="token punctuation">,</span>
      pageInfo<span class="token operator">:</span> <span class="token punctuation">{</span>
        hasNextPage<span class="token operator">:</span>
          meta<span class="token punctuation">.</span>total <span class="token operator">></span> params<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span>page <span class="token operator">*</span> params<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span>perPage<span class="token punctuation">,</span>
        hasPreviousPage<span class="token operator">:</span> params<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span>page <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getList</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>resource<span class="token punctuation">,</span> params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> reqUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>resource<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">getListQuerySearchParams</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> meta <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">doFetch</span><span class="token punctuation">(</span>reqUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        method<span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">makeListQueryResult</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> meta<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">getOne</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>resource<span class="token punctuation">,</span> params<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> reqUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>resource<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">doFetch</span><span class="token punctuation">(</span>reqUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        method<span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        data<span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> data<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token operator">...</span>data<span class="token punctuation">.</span>attributes <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token operator">...</span>
  <span class="token punctuation">}</span> satisfies DataProvider<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 필요한 모든 인프라를 갖췄습니다. 이제 UI를 만드는 작업으로 넘어갑시다!</p>
<h2 id="crud-ui-구축" tabindex="-1"><a class="header-anchor" href="#crud-ui-구축" aria-hidden="true">#</a> CRUD UI 구축</h2>
<p>여기서 React-Admin이 빛을 발합니다 - CRUD UI를 만드는 것이 정말 쉽습니다. 이런 방식으로 진행됩니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">AdminApp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Admin dataProvider<span class="token operator">=</span><span class="token punctuation">{</span>dataProvider<span class="token punctuation">}</span> authProvider<span class="token operator">=</span><span class="token punctuation">{</span>authProvider<span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Resource name<span class="token operator">=</span><span class="token string">"user"</span> list<span class="token operator">=</span><span class="token punctuation">{</span>ListGuesser<span class="token punctuation">}</span> edit<span class="token operator">=</span><span class="token punctuation">{</span>EditGuesser<span class="token punctuation">}</span> create<span class="token operator">=</span><span class="token punctuation">{</span>UserCreate<span class="token punctuation">}</span> hasCreate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> recordRepresentation<span class="token operator">=</span><span class="token string">"name"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Resource name<span class="token operator">=</span><span class="token string">"post"</span> list<span class="token operator">=</span><span class="token punctuation">{</span>PostList<span class="token punctuation">}</span> edit<span class="token operator">=</span><span class="token punctuation">{</span>EditGuesser<span class="token punctuation">}</span> create<span class="token operator">=</span><span class="token punctuation">{</span>PostCreate<span class="token punctuation">}</span> hasCreate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> recordRepresentation<span class="token operator">=</span><span class="token string">"title"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Admin<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">UserCreate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Create<span class="token operator">></span>
    <span class="token operator">&lt;</span>SimpleForm<span class="token operator">></span>
      <span class="token operator">&lt;</span>TextInput source<span class="token operator">=</span><span class="token string">"email"</span> type<span class="token operator">=</span><span class="token string">"email"</span> validate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>PasswordInput source<span class="token operator">=</span><span class="token string">"password"</span> validate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>TextInput source<span class="token operator">=</span><span class="token string">"name"</span> validate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>SelectInput
        source<span class="token operator">=</span><span class="token string">"role"</span>
        choices<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"Author"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Author"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"Editor"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Editor"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"Admin"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Admin"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
        defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Author"</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>SimpleForm<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Create<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">PostList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>List<span class="token operator">></span>
    <span class="token operator">&lt;</span>Datagrid rowClick<span class="token operator">=</span><span class="token string">"edit"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>TextField source<span class="token operator">=</span><span class="token string">"id"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>TextField source<span class="token operator">=</span><span class="token string">"title"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>TextField source<span class="token operator">=</span><span class="token string">"content"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>DateField source<span class="token operator">=</span><span class="token string">"createdAt"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>DateField source<span class="token operator">=</span><span class="token string">"updatedAt"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ReferenceField source<span class="token operator">=</span><span class="token string">"userId"</span> reference<span class="token operator">=</span><span class="token string">"user"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Datagrid<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>List<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">PostCreate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Create<span class="token operator">></span>
    <span class="token operator">&lt;</span>SimpleForm<span class="token operator">></span>
      <span class="token operator">&lt;</span>ReferenceInput source<span class="token operator">=</span><span class="token string">"userId"</span> reference<span class="token operator">=</span><span class="token string">"user"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>SelectInput <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ReferenceInput<span class="token operator">></span>
      <span class="token operator">&lt;</span>TextInput source<span class="token operator">=</span><span class="token string">"title"</span> validate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>TextInput source<span class="token operator">=</span><span class="token string">"content"</span> multiline rows<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span> validate<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>SelectInput
        source<span class="token operator">=</span><span class="token string">"status"</span>
        choices<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"Draft"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Draft"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"Submitted"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Submitted"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"Published"</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Published"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
        defaultValue<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">"Draft"</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>SimpleForm<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Create<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> AdminApp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 dataProvider 초기화는 다음과 같이 보입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> dataProvider <span class="token operator">=</span> <span class="token function">createDataProvider</span><span class="token punctuation">(</span><span class="token string">"/api/model"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> init</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// localStorage에서 JWT 토큰 가져와 `Authorization` 헤더에 담아 보내기</span>
  <span class="token keyword">const</span> auth <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"auth"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>auth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> token <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>auth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>init<span class="token punctuation">.</span>headers <span class="token keyword">instanceof</span> <span class="token class-name">Headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      init<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"Authorization"</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      init<span class="token punctuation">.</span>headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> init<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React-Admin은 고수준 컴포넌트를 통해 백엔드 API와 자동으로 통신하여 CRUD UI를 구축하는 과정을 단순화합니다. 대부분의 경우 Guesser 컴포넌트들이 잘 작동하지만, 필요한 경우에는 Grid, List, Input 등을 조합하여 사용자 정의 컴포넌트를 쉽게 만들 수 있습니다.</p>
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
<p>이제 로그인하고 사용자 및 게시물을 만들고 조회하고 수정 및 삭제할 수 있어야 합니다.</p>
<img src="https://miro.medium.com/v2/resize:fit:1400/0*CobPV2w28q7hZ0bD.gif" />
<h1 id="권한에-대해-어떻게-생각하세요" tabindex="-1"><a class="header-anchor" href="#권한에-대해-어떻게-생각하세요" aria-hidden="true">#</a> 권한에 대해 어떻게 생각하세요?</h1>
<p>CRUD가 작동하는 것은 좋은 일입니다. 그러나 우리는 퍼즐에서 아직 하나의 중요한 조각이 빠진 상태입니다: 권한 설정. ZenStack은 스키마에서 규칙을 선언적으로 정의하여 AuthZ를 구현하는 것을 굉장히 쉽게 만들어 줍니다.</p>
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
<p>CRUD API 핸들러를 구축할 때 우리가 &quot;향상된&quot; PrismaClient를 만들어서 현재 요청을 위해 데이터베이스에 액세스하는 것 기억하시나요? 이 향상된 클라이언트는 자동으로 액세스 제어를 강제합니다. 그러나 정책은 우리가 정의하는 것이 책임입니다. 사용자 모델을 보호하기 시작해봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>model User <span class="token punctuation">{</span>
  <span class="token operator">...</span>

  <span class="token comment">// 모든 로그인한 사용자는 모든 사용자를 읽을 수 있습니다</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'read'</span><span class="token punctuation">,</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>

  <span class="token comment">// 사용자는 자신을 업데이트할 수 있고, 관리자는 모든 사용자를 업데이트할 수 있습니다</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'all'</span><span class="token punctuation">,</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">this</span> <span class="token operator">||</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>role <span class="token operator">==</span> <span class="token string">'Admin'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>쉽죠? 정책 규칙에서 특수한 auth() 함수는 현재 요청한 사용자를 나타내며, 이는 우리가 이전에 JWT 토큰에서 추출하여 향상된 호출로 전달한 사용자입니다.</p>
<p>그럼, 이제 포스트 부분으로 넘어가 봅시다. 여러 요구사항을 다루어야 해요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>model Post <span class="token punctuation">{</span>
  <span class="token operator">...</span>

  <span class="token comment">// 관리자는 모든 게시물에 완전한 액세스 권한이 있습니다.</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'all'</span><span class="token punctuation">,</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>role <span class="token operator">==</span> <span class="token string">'Admin'</span><span class="token punctuation">)</span>
  <span class="token comment">// 작성자는 "Draft" 상태로 새 게시물을 생성할 수 있습니다.</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'create'</span><span class="token punctuation">,</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> user <span class="token operator">&amp;&amp;</span> status <span class="token operator">==</span> <span class="token string">'Draft'</span><span class="token punctuation">)</span>
  <span class="token comment">// 게시물 소유자는 자신의 게시물을 읽을 수 있습니다.</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'read'</span><span class="token punctuation">,</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> user<span class="token punctuation">)</span>
  <span class="token comment">// 초안이 아닌 게시물은 모든 로그인한 사용자가 읽을 수 있습니다.</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'read'</span><span class="token punctuation">,</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">!=</span> <span class="token string">'Draft'</span><span class="token punctuation">)</span>
  <span class="token comment">// "Author"를 위한 업데이트 규칙</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'update'</span><span class="token punctuation">,</span>
      <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>role <span class="token operator">==</span> <span class="token string">'Author'</span> <span class="token comment">// 사용자가 작성자인 경우</span>
      <span class="token operator">&amp;&amp;</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> user <span class="token comment">// 사용자가 게시물 소유자인 경우</span>
      <span class="token operator">&amp;&amp;</span> status <span class="token operator">!=</span> <span class="token string">'Published'</span> <span class="token comment">// 게시된 게시물은 업데이트할 수 없음</span>
      <span class="token operator">&amp;&amp;</span> <span class="token function">future</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>status <span class="token operator">!=</span> <span class="token string">'Published'</span> <span class="token comment">// 상태를 "Published"로 변경할 수 없음</span>
  <span class="token punctuation">)</span>
  <span class="token comment">// "Editor"를 위한 업데이트 규칙</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'update'</span><span class="token punctuation">,</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>role <span class="token operator">==</span> <span class="token string">'Editor'</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">!=</span> <span class="token string">'Draft'</span><span class="token punctuation">)</span>
  <span class="token comment">// 소유자 또는 관리자는 발행되지 않은 게시물을 삭제할 수 있습니다.</span>
  @@<span class="token function">allow</span><span class="token punctuation">(</span><span class="token string">'delete'</span><span class="token punctuation">,</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> user <span class="token operator">&amp;&amp;</span> status <span class="token operator">!=</span> <span class="token string">'Published'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 새로운 기능은 future() 함수입니다. &quot;update&quot; 작업은 이전 상태와 후속 상태를 수반합니다. 기본적으로 정책 규칙의 필드는 이전 상태를 참조하지만, future() 함수를 사용하면 후속 상태를 참조할 수 있습니다.</p>
<p>npx zenstack generate를 다시 실행하고 개발 서버를 다시 시작하면 액세스 규정이 적용됩니다. 예를 들어, 작성자로서 게시물 상태를 &quot;Published&quot;로 설정하려고 하면 일부 작업이 거부될 것을 알 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-03-23-BuildinganAdminConsoleWithMinimumCodeUsingReact-AdminPrismaandZenstack/img/Building-an-Admin-Console-With-Minimum-Code-Using-React-Admin-Prisma-and-Zenstack_2.png" alt="./img/Building-an-Admin-Console-With-Minimum-Code-Using-React-Admin-Prisma-and-Zenstack_2.png"></p>
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>이 글을 즐겁게 읽으시고 접근 방식을 흥미롭게 느꼈으면 좋겠어요. 관리자 콘솔을 구축하는 것은 종종 고객 가치를 직접적으로 더하지 않아서 보상적이지 않은 작업일 수 있습니다. 그러나 적절한 도구를 결합함으로써 즐겁고 생산적으로 만들 수 있어요. 이 글에서는 React-Admin과 ZenStack이 할 수 있는 것의 일부만 다뤘습니다. 두 툴 모두 더 많은 것을 제공하고 있으며, 더 깊이 탐색해보시기를 권장합니다.</p>
<p>완성된 샘플 프로젝트는 여기에서 확인할 수 있어요: <a href="https://github.com/ymc9/react-admin-blog" target="_blank" rel="noopener noreferrer">https://github.com/ymc9/react-admin-blog<ExternalLinkIcon/></a>.</p>
</div></template>
