<template><div><img src="@source/docs/Nextjs/2024-04-05-NextJSAuthenticationwithNextAuthPrismaandPostgres/img/NextJSAuthenticationwithNextAuthPrismaandPostgres_0.png" />
<p>애플리케이션을 안전하고 신뢰할 수 있는 방법으로 구축할 때 인증은 매우 중요합니다. 때로는 간과되기 쉬우나 애플리케이션을 안전하게 유지하기 위해서는 권한이 있는 사용자만 액세스할 수 있도록 보장해야 합니다.</p>
<p>애플리케이션의 사용자는 다양한 방법으로 인증될 수 있습니다. NextAuth를 사용하면 Next.js 애플리케이션에 인증을 쉽게 추가할 수 있는 강력한 패키지입니다. 이 글에서는 Next.js 앱의 인증에 중점을 두어 설명하겠습니다. NextAuth를 통해 Google, AWS Cognito, Facebook, 자격 증명 제공자(사용자 이름, 암호) 등 NextAuth의 다양한 인증 제공자를 사용하여 인증을 관리할 수 있습니다. 이 글에서는 사용자 이름, 이메일 주소, 암호와 같은 자격 증명을 사용한 방법에 초점을 맞추겠습니다.</p>
<p>본 자습서에서는 NextAuth를 사용하여 Prisma(Node.js 및 TypeScript ORM)와 PostgreSQL을 이용해 사용자를 인증하는 방법을 안내합니다. 이 가이드를 읽으면 Next.js 앱을 생성하고 사용자를 인증할 수 있습니다.</p>
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
<p>시작해봅시다.</p>
<p>우리는 다음 주제들을 단계적으로 다룰 거에요.</p>
<ul>
<li>create next-app을 이용하여 Next.js 프로젝트 설정</li>
<li>Postgres 데이터베이스 설정 (선택사항: Supabase에서 호스팅)</li>
<li>Prisma ORM을 사용하여 앱을 PostgreSQL 데이터베이스에 연결</li>
<li>로그인 및 가입을 위한 엔드포인트 생성</li>
<li>회원가입 및 로그인 페이지 작성 및 구현</li>
</ul>
<h2 id="next-js-프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#next-js-프로젝트-설정" aria-hidden="true">#</a> Next.js 프로젝트 설정</h2>
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
<p>Next.js 프로젝트를 설정하려면 작업 디렉토리로 이동한 다음 터미널을 열고 아래 명령을 실행하세요. 저희는 앱을 authapp이라고 부를 건데, 이는 선택 사항이에요. 마음에 드는 이름을 원하시면 아무 이름으로 하셔도 돼요.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> create next-app authapp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>페이지 스타일링을 위해 Tailwind CSS를 사용할 거예요. 프로젝트에 Tailwind CSS를 설정하려면 공식 Tailwind CSS 문서를 따라가세요.</p>
<h2 id="supabase에서-호스팅된-postgresql-데이터베이스를-설정-선택-사항" tabindex="-1"><a class="header-anchor" href="#supabase에서-호스팅된-postgresql-데이터베이스를-설정-선택-사항" aria-hidden="true">#</a> Supabase에서 호스팅된 PostgreSQL 데이터베이스를 설정(선택 사항)</h2>
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
<p>Supabase는 Firebase 대안으로 제공되는 플랫폼으로, Postgres 데이터베이스, 인증, 저장소 등 다양한 기능을 제공합니다. 서버를 관리할 필요없이 프로젝트를 생성하고 데이터베이스를 구성할 수 있습니다.</p>
<p>자, 데이터베이스를 구성해 봅시다.</p>
<p>Supabase에 계정을 만듭니다.</p>
<p>로그인한 상태에서 새 프로젝트를 선택하여 새 프로젝트를 시작합니다. 프로젝트 이름을 제공하고 데이터베이스 비밀번호를 설정하세요.</p>
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
<img src="@source/docs/Nextjs/2024-04-05-NextJSAuthenticationwithNextAuthPrismaandPostgres/img/NextJSAuthenticationwithNextAuthPrismaandPostgres_1.png" />
<p>데이터베이스 URI를 얻으려면 프로젝트 설정으로 이동한 다음 데이터베이스를 클릭하여 아래에서 볼 수 있는 데이터베이스 URI를 복사하세요. URI에서 [YOUR PASSWORD]를 이전에 설정한 데이터베이스 비밀번호로 바꿔주세요.</p>
<img src="@source/docs/Nextjs/2024-04-05-NextJSAuthenticationwithNextAuthPrismaandPostgres/img/NextJSAuthenticationwithNextAuthPrismaandPostgres_2.png" />
<p>PostgreSQL 데이터베이스 서버가 성공적으로 생성되었습니다.</p>
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
<h2 id="prisma-orm을-사용하여-우리의-애플리케이션을-postgres-데이터베이스에-연결하는-방법" tabindex="-1"><a class="header-anchor" href="#prisma-orm을-사용하여-우리의-애플리케이션을-postgres-데이터베이스에-연결하는-방법" aria-hidden="true">#</a> Prisma ORM을 사용하여 우리의 애플리케이션을 Postgres 데이터베이스에 연결하는 방법</h2>
<p>이제 이전에 생성한 데이터베이스와 프로젝트를 연결해 봅시다. 다음을 진행해 보세요.</p>
<p>프로젝트 루트 디렉토리로 이동하고 아래 명령을 사용하여 Prisma CLI를 설치해 보세요.</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> prisma --save-dev
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
<p>이제 Prisma CLI 명령을 사용하여 Prisma 설정을 설정해보세요.</p>
<p>npx prisma init</p>
<p>이 명령은 프로젝트 디렉토리에 두 개의 파일을 생성합니다.</p>
<ul>
<li>schema.prisma: 데이터베이스 스키마가 포함된 파일입니다.</li>
<li>.env: 데이터베이스 연결 URI 및 응용 프로그램의 다른 환경 변수를 정의하는 dotenv 파일입니다.</li>
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
<p>.env 파일을 열고 앞에서 설정한 데이터베이스 연결 URI를 추가하세요.
DATABASE_URL=<code v-pre>postgresql://postgres:[YOUR-PASSWORD]@db.ObubJTKrJYcPSkdsWqms.supabase.co:5432/postgres</code></p>
<p>다음 단계는 Prisma를 사용하여 데이터베이스 스키마를 생성하는 것입니다. schema.prisma 파일을 열고 아래 내용을 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>datasource db <span class="token punctuation">{</span>
  provider <span class="token operator">=</span> <span class="token string">"postgresql"</span>
  url      <span class="token operator">=</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string">"DATABASE_URL"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

generator client <span class="token punctuation">{</span>
  provider <span class="token operator">=</span> <span class="token string">"prisma-client-js"</span>
<span class="token punctuation">}</span>

model User <span class="token punctuation">{</span>
  id            String    @id @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">cuid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  name          String<span class="token operator">?</span>
  email         String<span class="token operator">?</span>   @unique
  password      String<span class="token operator">?</span>
  emailVerified DateTime<span class="token operator">?</span>
  image         String<span class="token operator">?</span>
  createdAt     DateTime  @<span class="token keyword">default</span><span class="token punctuation">(</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  updatedAt     DateTime  @updatedAt
  accounts      Account<span class="token punctuation">[</span><span class="token punctuation">]</span>
  sessions      Session<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>참고: 원하는대로 사용자에 대한 더 많은 정보를 캡처하기 위해 필드를 추가할 수 있습니다. 여기 스키마 가이드라인을 따르는지 확인해주세요.</p>
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
<p>이제 데이터베이스를 구성했으니, 해당 데이터베이스에 테이블을 만들 수 있습니다. 이를 위해서는 다음 명령을 사용합니다.</p>
<p>npx prisma db push</p>
<p>아래와 같은 결과를 보게 될 것입니다;</p>
<img src="@source/docs/Nextjs/2024-04-05-NextJSAuthenticationwithNextAuthPrismaandPostgres/img/NextJSAuthenticationwithNextAuthPrismaandPostgres_3.png" />
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
<p>이 경우에는 User 테이블 하나만 있는데, 이 테이블은 User 모델에 정의된 사용자 정보를 저장할 것입니다. 테이블을 생성한 후에는 Prisma 클라이언트를 사용하여 데이터베이스와 상호 작용을 시작할 수 있습니다.</p>
<p>다음 단계는 Prisma 클라이언트 라이브러리를 설치하는 것입니다. 이 라이브러리를 사용하여 데이터베이스와 상호 작용할 수 있습니다. 라이브러리가 설치되면 Prisma 클라이언트 객체의 단일 인스턴스를 생성할 수 있습니다. 이 객체는 애플리케이션 전체에서 데이터베이스와 상호 작용하는 데 사용될 것입니다.</p>
<p>mkdir lib &amp;&amp; touch lib/prisma.js</p>
<p>스키마를 업데이트할 때마다 Prisma 클라이언트를 업데이트하려면 다음 내용이 필요합니다.</p>
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
<p>안녕하세요! 아래의 코드는 Prisma 클라이언트 객체의 새 인스턴스를 생성하고 해당 파일에서 내보낼 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// lib/prisma.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> PrismaClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@prisma/client"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> prisma <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrismaClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> prisma <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드를 사용하여 lib 디렉토리로 이동한 다음 prisma.js 파일을 열어서 위의 코드를 추가해주세요.</p>
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
<p>프로젝트와 데이터베이스를 성공적으로 연결했습니다.</p>
<h2 id="로그인-및-가입을-위한-엔드포인트-생성" tabindex="-1"><a class="header-anchor" href="#로그인-및-가입을-위한-엔드포인트-생성" aria-hidden="true">#</a> 로그인 및 가입을 위한 엔드포인트 생성</h2>
<p>pages/api/user 폴더에 두 개의 파일을 생성하세요.</p>
<ul>
<li>create.js: 새 사용자를 생성하기 위한 엔드포인트입니다.</li>
<li>auth.js: 사용자 로그인을 위한 엔드포인트입니다.</li>
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
<p>create.js 파일을 열고 아래 코드를 추가해주세요.</p>
<p>프로젝트를 데이터베이스에 성공적으로 연결했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SHA256</span> <span class="token keyword">as</span> sha256 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"crypto-js"</span><span class="token punctuation">;</span>
<span class="token comment">// 우리의 Prisma 클라이언트를 가져옵니다</span>
<span class="token keyword">import</span> prisma <span class="token keyword">from</span> <span class="token string">"../lib/prisma"</span><span class="token punctuation">;</span>
<span class="token comment">// Prisma는 오류를 처리하고 잡는 데 도움이 됩니다</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Prisma <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@prisma/client"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">"POST"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자 생성</span>
    <span class="token keyword">await</span> <span class="token function">createUserHandler</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">405</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"허용되지 않은 메소드"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// crypto.js를 사용하여 사용자가 입력한 암호를 해싱합니다</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">hashPassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">sha256</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 데이터베이스에 사용자 생성하는 함수</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createUserHandler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> errors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
 
  <span class="token keyword">if</span> <span class="token punctuation">(</span>password<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    errors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"암호 길이는 6자 이상이어야 합니다"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> errors <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> prisma<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span>req<span class="token punctuation">.</span>body<span class="token punctuation">,</span> <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token function">hashPassword</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>password<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> user <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">Prisma<span class="token punctuation">.</span>PrismaClientKnownRequestError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token string">"P2002"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> e<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> e<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 코드는 다음과 같은 속성을 가진 새로운 사용자를 데이터베이스에 생성합니다.</p>
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
<li>이름</li>
<li>이메일</li>
<li>비밀번호</li>
</ul>
<p>비밀번호 해싱에 사용하는 crypto-js를 설치해 주세요. 아래 명령어를 사용하세요.</p>
<p>npm install crypto-js</p>
<p>다음으로 로그인 엔드포인트를 생성합니다. api/user/auth.js 파일을 열고 아래 코드를 추가해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">SHA256</span> <span class="token keyword">as</span> sha256 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"crypto-js"</span><span class="token punctuation">;</span>
<span class="token comment">// prisma client 불러오기</span>
<span class="token keyword">import</span> prisma <span class="token keyword">from</span> <span class="token string">"./lib/prisma"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> hashPassword <span class="token keyword">from</span> <span class="token string">"./create"</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handle</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">"POST"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 사용자 로그인</span>
    <span class="token keyword">await</span> <span class="token function">loginUserHandler</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">405</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loginUserHandler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> email<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>email <span class="token operator">||</span> <span class="token operator">!</span>password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"유효하지 않은 입력"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">await</span> prisma<span class="token punctuation">.</span>user<span class="token punctuation">.</span><span class="token function">findUnique</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">email</span><span class="token operator">:</span> email <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">image</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span>password <span class="token operator">===</span> <span class="token function">hashPassword</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 응답에서 비밀번호 제외</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token function">exclude</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"password"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"유효하지 않은 자격 증명"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// prisma로부터 반환된 사용자 비밀번호를 제외하는 함수</span>
<span class="token keyword">function</span> <span class="token function">exclude</span><span class="token punctuation">(</span><span class="token parameter">user<span class="token punctuation">,</span> keys</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span> user<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>인증 엔드포인트를 만들었으므로 이제 우리 응용 프로그램에 CredentialsProvider를 추가하겠습니다.</p>
<p>pages/api/auth 폴더에 [...nextauth].js라는 파일을 만듭니다. 이 파일에서는 이 경우 CredentialsProvider인 인증 제공 업체를 구성할 것입니다. CredentialsProvider는 NextAuth 제공 업체로 사용자가 사용자 이름과 비밀번호와 같은 임의의 자격 증명으로 등록할 수 있게 합니다.</p>
<p>[...nextauth].js 파일을 열고 다음 코드를 추가하세요.</p>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>큰 영향을 미치는 작업은 아니지만 HTML에서 table 태그를 Markdown 형식으로 바꾸면 더 읽기 쉽고 편리합니다. 
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
<p>Register.js.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">SignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>name<span class="token punctuation">,</span> setName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> setEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>confirmPassword<span class="token punctuation">,</span> setConfirmPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>passError<span class="token punctuation">,</span> setPassError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">validatePassword</span><span class="token punctuation">(</span>password<span class="token punctuation">,</span> confirmPassword<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> confirmPassword<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">validatePassword</span><span class="token punctuation">(</span><span class="token parameter">pass<span class="token punctuation">,</span> confirmPass</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> isValid <span class="token operator">=</span> confirmPass <span class="token operator">===</span> pass<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setPassError</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> userData <span class="token operator">=</span> <span class="token punctuation">{</span>
      name<span class="token punctuation">,</span>
      email<span class="token punctuation">,</span>
      password<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 백엔드 호출하여 사용자 생성</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"http://localhost:3000/api/user/create"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>userData<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"Content-Type"</span><span class="token operator">:</span> <span class="token string">"application/json"</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// 등록 성공</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 등록 실패</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex justify-center items-center m-auto p-3"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>form
          onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token string">"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"</span>
        <span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mb-4"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"block text-gray-700 text-sm font-bold mb-2"</span> htmlFor<span class="token operator">=</span><span class="token string">"name"</span>  <span class="token operator">></span>
              이름
            <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input
              className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> id<span class="token operator">=</span><span class="token string">"name"</span> type<span class="token operator">=</span><span class="token string">"text"</span> laceholder<span class="token operator">=</span><span class="token string">"이름"</span> 
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setName</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mb-4"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"block text-gray-700 text-sm font-bold mb-2"</span>  htmlFor<span class="token operator">=</span><span class="token string">"email"</span>  <span class="token operator">></span>
              이메일
            <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input
              className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>  id<span class="token operator">=</span><span class="token string">"email"</span> type<span class="token operator">=</span><span class="token string">"email"</span> placeholder<span class="token operator">=</span><span class="token string">"이메일"</span>
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setEmail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mb-6"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label className<span class="token operator">=</span><span class="token string">"block text-gray-700 text-sm font-bold mb-2"</span> htmlFor<span class="token operator">=</span><span class="token string">"password"</span> <span class="token operator">></span>
              비밀번호
            <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input
              className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> id<span class="token operator">=</span><span class="token string">"password"</span> type<span class="token operator">=</span><span class="token string">"password"</span>  placeholder<span class="token operator">=</span><span class="token string">"***********"</span>
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setPassword</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mb-6"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label  className<span class="token operator">=</span><span class="token string">"block text-gray-700 text-sm font-bold mb-2"</span> htmlFor<span class="token operator">=</span><span class="token string">"confirm-password"</span>   <span class="token operator">></span>
              비밀번호 확인
            <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input
              className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span> id<span class="token operator">=</span><span class="token string">"confirm-password"</span>  type<span class="token operator">=</span><span class="token string">"password"</span> placeholder<span class="token operator">=</span><span class="token string">"***********"</span>
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setConfirmPassword</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
            <span class="token punctuation">{</span>passError <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-red-500 text-xs italic"</span><span class="token operator">></span>
                비밀번호가 일치하지 않습니다<span class="token operator">!</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex items-center justify-between"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>button className<span class="token operator">=</span><span class="token string">"bg-blue-500  hover:bg-blue-700 text-white font-bold py-2  px-4 rounded  focus:outline-none  focus:shadow-outline"</span> type<span class="token operator">=</span><span class="token string">"submit"</span> <span class="token operator">></span>
              가입하기
            <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span>a className<span class="token operator">=</span><span class="token string">"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"</span> href<span class="token operator">=</span><span class="token string">"#"</span> <span class="token operator">></span>
              계정이 있으신가요<span class="token operator">?</span> 로그인하기
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> SignIn<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Login.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> validateEmail <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../../lib/utils"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> signIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next-auth/react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/router"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">LoginPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> setEmail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>password<span class="token punctuation">,</span> setPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>emailInPutError<span class="token punctuation">,</span> setEmailInputError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>passwordInPutError<span class="token punctuation">,</span> setPasswordInputError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>email<span class="token punctuation">,</span> password<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">signIn</span><span class="token punctuation">(</span><span class="token string">"credentials"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      email<span class="token punctuation">,</span>
      password<span class="token punctuation">,</span>
      <span class="token literal-property property">callbackUrl</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_NEXTAUTH_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token operator">?.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 토스트 성공</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"성공"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 토스트 실패</span>
      <span class="token function">setError</span><span class="token punctuation">(</span><span class="token string">"실패! 입력을 확인하고 다시 시도하세요."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// return;</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"실패"</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> emailIsValid <span class="token operator">=</span> <span class="token function">validateEmail</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>emailIsValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setEmailInputError</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>password<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setPasswordInputError</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setEmailInputError</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setPasswordInputError</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex justify-center items-center m-auto p-3"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>form
          onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span>
          className<span class="token operator">=</span><span class="token string">"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"</span>
        <span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mb-4"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label
              className<span class="token operator">=</span><span class="token string">"block text-gray-700 text-sm font-bold mb-2"</span>
              htmlFor<span class="token operator">=</span><span class="token string">"email"</span>
            <span class="token operator">></span>
              이메일
            <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input
              className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">border-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                emailInPutError <span class="token operator">?</span> <span class="token string">"red-500"</span> <span class="token operator">:</span> <span class="token string">""</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
              id<span class="token operator">=</span><span class="token string">"email"</span>
              type<span class="token operator">=</span><span class="token string">"text"</span>
              placeholder<span class="token operator">=</span><span class="token string">"이메일"</span>
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setEmail</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"mb-6"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>label
              className<span class="token operator">=</span><span class="token string">"block text-gray-700 text-sm font-bold mb-2"</span>
              htmlFor<span class="token operator">=</span><span class="token string">"password"</span>
            <span class="token operator">></span>
              비밀번호
            <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
            <span class="token operator">&lt;</span>input
              className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"> border-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
                passwordInPutError <span class="token operator">?</span> <span class="token string">"red-500"</span> <span class="token operator">:</span> <span class="token string">""</span>
              <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
              id<span class="token operator">=</span><span class="token string">"password"</span>
              type<span class="token operator">=</span><span class="token string">"password"</span>
              placeholder<span class="token operator">=</span><span class="token string">"******************"</span>
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setPassword</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"text-red-500 text-xs italic"</span><span class="token operator">></span>
              비밀번호를 선택해주세요<span class="token punctuation">.</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex items-center justify-between"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>button
              className<span class="token operator">=</span><span class="token string">"bg-blue-500  hover:bg-blue-700 text-white font-bold py-2  px-4 rounded  focus:outline-none  focus:shadow-outline"</span>
              type<span class="token operator">=</span><span class="token string">"submit"</span>
              disabled<span class="token operator">=</span><span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token boolean">true</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span>
            <span class="token operator">></span>
              <span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token string">"로딩중..."</span> <span class="token operator">:</span> <span class="token string">"로그인"</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span>a
              className<span class="token operator">=</span><span class="token string">"inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"</span>
              href<span class="token operator">=</span><span class="token string">"#"</span>
            <span class="token operator">></span>
              비밀번호를 잊으셨나요<span class="token operator">?</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> LoginPage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="마무리하며" tabindex="-1"><a class="header-anchor" href="#마무리하며" aria-hidden="true">#</a> 마무리하며</h2>
<p>Next.js를 사용하면 모든 기능을 갖춘 풀스택 애플리케이션을 만들 수 있습니다. NextAuth 라이브러리를 사용하여 애플리케이션의 사용자 인증을 쉽게 처리할 수 있습니다. NextAuth를 사용할 때 다양한 인증 제공업체를 사용할 수 있습니다. 앱에 적합한 것을 선택하여 사용해보세요.</p>
<p>다음으로는 NextAuth AWS Cognito 인증 제공자를 사용하는 방법에 대해 알아보겠습니다. 기대해주세요.</p>
<p>GitHub 저장소 링크: <a href="github">github</a></p>
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
<p>더 많은 내용을 보려면 팔로우해 주세요. 코딩을 즐기세요!</p>
</div></template>
