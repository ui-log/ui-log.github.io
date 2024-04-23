<template><div><p>안녕하세요! 이 튜토리얼은 Node.js, Postgres 및 Nginx를 사용하여 React 애플리케이션을 Docker화하는 방법에 대해 설명합니다. 백엔드, 프론트엔드 및 Nginx 서버 설정에 대한 단계별 지침과 도커 파일 및 컨테이너화를 위한 docker-compose.yml 파일이 제공됩니다.</p>
<p>이 프로젝트의 코드는 GitHub에서 찾을 수 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_0.png" alt="DockerizeaReactapplicationwithNodejsPostgresandNginx_0.png"></p>
<h1 id="준비-사항" tabindex="-1"><a class="header-anchor" href="#준비-사항" aria-hidden="true">#</a> 준비 사항</h1>
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
<p>컴퓨터에 Docker와 Node.js가 설치되어 있는지 확인해주세요. 저는 Node 버전 18.13.0 및 Docker 버전 20.10.24를 사용했습니다.</p>
<h1 id="애플리케이션" tabindex="-1"><a class="header-anchor" href="#애플리케이션" aria-hidden="true">#</a> 애플리케이션</h1>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*D0arq3QftV-5v4LK8Em-nA.gif" alt="이미지"></p>
<h1 id="백엔드-빌드" tabindex="-1"><a class="header-anchor" href="#백엔드-빌드" aria-hidden="true">#</a> 백엔드 빌드</h1>
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
<p>간단한 데이터베이스와 통신하며 프론트 엔드에 라우트를 노출하는 간단한 애플리케이션을 만들겠습니다.</p>
<h1 id="프로젝트-시작하기" tabindex="-1"><a class="header-anchor" href="#프로젝트-시작하기" aria-hidden="true">#</a> 프로젝트 시작하기</h1>
<p>프로젝트 폴더를 만들어 시작해봅시다. Project라는 새 폴더를 만들고, 그 안에 node라는 폴더를 생성하세요. 다음 명령어를 사용하여 node 폴더 내에서 Node.js 애플리케이션을 초기화하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm init <span class="token operator">-</span>y
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
<p>이 명령은 패키지 종속성을 추가할 수 있는 package.json 파일을 생성합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_2.png" alt="이미지"></p>
<h1 id="백엔드-종속성" tabindex="-1"><a class="header-anchor" href="#백엔드-종속성" aria-hidden="true">#</a> 백엔드 종속성:</h1>
<ul>
<li>Express: 클라이언트 요청을 처리하는 노드.js 웹 애플리케이션 프레임워크입니다. 자세한 내용은 Express 문서를 참조하세요.</li>
<li>Node-Postgres: PostgreSQL 데이터베이스와 연결을 설정하는 데 사용되는 Node.js의 클라이언트입니다. 자세한 내용은 Node Postgres 문서를 참조하세요.</li>
<li>Nodemon: 파일 변경이 감지되면 Node.js 애플리케이션을 자동으로 다시 시작하는 도구입니다. 자세한 내용은 Nodemon 문서를 참조하세요.</li>
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
<p>이러한 종속성을 설치하려면 노드 폴더로 이동한 다음 다음 명령을 실행하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install express pg nodemon
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 필요한 모든 종속성을 설치합니다. 패키지 관리자가 패키지와 그 종속성을 다운로드하여 node_modules 폴더에 저장합니다. 이 폴더에는 프로젝트 실행에 필요한 모든 종속성과 그 하위 종속성이 포함되어 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_3.png" alt="DockerizeaReactapplicationwithNodejsPostgresandNginx_3"></p>
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
<h1 id="백엔드-코드-작성하기" tabindex="-1"><a class="header-anchor" href="#백엔드-코드-작성하기" aria-hidden="true">#</a> 백엔드 코드 작성하기</h1>
<p>index.js 파일을 만들어서 메인 파일로 사용해요. 파일 안에 다음 코드를 추가해주세요.</p>
<p>파일 안에 필요한 패키지를 불러오기 시작해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> pg <span class="token keyword">from</span> <span class="token string">'pg'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">'express'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> bodyParser <span class="token keyword">from</span> <span class="token string">'body-parser'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>현재 데이터베이스는 아직 가동 중이 아니지만, 이미 node-postgres를 사용하여 PostgreSQL 데이터베이스와 연결을 수립하는 과정에 참여하고 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Client <span class="token punctuation">}</span> <span class="token operator">=</span> pg<span class="token punctuation">;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Client</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">'postgres'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'db'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">database</span><span class="token operator">:</span> <span class="token string">'postgres'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">'1234'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">5432</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자 테이블 생성:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">createTable</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> 
  <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">CREATE TABLE IF NOT EXISTS users 
  (id serial PRIMARY KEY, name VARCHAR (255) UNIQUE NOT NULL, 
  email VARCHAR (255) UNIQUE NOT NULL, age INT NOT NULL);</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">createTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>Express와 미들웨어를 사용하여 POST 메서드를 파싱하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">extended</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hello World 루트를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello World!'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>다음은 사용자 테이블에서 모든 사용자를 검색하는 GET 메서드를 만드는 방법입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/all'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">SELECT * FROM users</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>rows<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'에러'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 사용자를 사용자 테이블에 삽입하는 POST 메서드를 만드는 방법은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/api/form'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> name  <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    <span class="token keyword">const</span> email <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>email<span class="token punctuation">;</span>
    <span class="token keyword">const</span> age   <span class="token operator">=</span> req<span class="token punctuation">.</span>body<span class="token punctuation">.</span>age<span class="token punctuation">;</span>

    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> client<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">INSERT INTO users(name, email, age) VALUES ('</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">', '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>email<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">', </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">);</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">if</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">{</span>
      res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'에러'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>    
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>마지막으로, 서버가 실행될 때 API를 노출할 포트를 추가해주세요. 여기서는 포트 3000에 노출하겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">App running on port 3000.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 우리의 index.js 파일이 준비되었습니다. 코드를 개선하고 다양한 방법을 사용할 수 있습니다. 에러 처리를 더 잘하거나, 컨트롤러, 서비스 및 레포지토리를 활용한 아키텍처 개선, 코드에서 비밀 값들을 제거할 수 있습니다. 하지만 이러한 부분에 초점을 맞추지 않기 때문에, 우리의 백엔드는 가능한 한 간단합니다.</p>
<h1 id="라우트-테스트하기" tabindex="-1"><a class="header-anchor" href="#라우트-테스트하기" aria-hidden="true">#</a> 라우트 테스트하기</h1>
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
<p>package.json 파일 안의 script 섹션에 다음을 추가해 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"nodemon index.js"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그리고 파일 끝에 다음을 추가해 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span>
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
<p>패키지.json 파일은 다음과 같이 보여야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
 <span class="token string-property property">"main"</span><span class="token operator">:</span> <span class="token string">"index.js"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">"test"</span><span class="token operator">:</span> <span class="token string">"echo \"Error: no test specified\" &amp;&amp; exit 1"</span><span class="token punctuation">,</span>
   <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"nodemon index.js"</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token string-property property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token string-property property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
 <span class="token string-property property">"license"</span><span class="token operator">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>
 <span class="token string-property property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token string-property property">"express"</span><span class="token operator">:</span> <span class="token string">"^4.18.2"</span><span class="token punctuation">,</span>
   <span class="token string-property property">"nodemon"</span><span class="token operator">:</span> <span class="token string">"^2.0.22"</span><span class="token punctuation">,</span>
   <span class="token string-property property">"pg"</span><span class="token operator">:</span> <span class="token string">"^8.11.0"</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
 <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"module"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 애플리케이션을 시작하려면 node 폴더 내에서 <code v-pre>npm start</code>를 실행할 수 있습니다. 그러나 아직 데이터베이스가 실행되지 않았기 때문에 애플리케이션이 충돌합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>nodemon<span class="token punctuation">]</span> starting <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">node index.js</span><span class="token template-punctuation string">`</span></span>
App running on port <span class="token number">3000.</span>
<span class="token literal-property property">node</span><span class="token operator">:</span>internal<span class="token operator">/</span>process<span class="token operator">/</span>promises<span class="token operator">:</span><span class="token number">288</span>
            <span class="token function">triggerUncaughtException</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* fromPromise */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token operator">^</span>

<span class="token literal-property property">Error</span><span class="token operator">:</span> getaddrinfo <span class="token constant">EAI_AGAIN</span> db
    at GetAddrInfoReqWrap<span class="token punctuation">.</span>onlookup <span class="token punctuation">[</span><span class="token keyword">as</span> oncomplete<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">node</span><span class="token operator">:</span>dns<span class="token operator">:</span><span class="token number">107</span><span class="token operator">:</span><span class="token number">26</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">errno</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">3001</span><span class="token punctuation">,</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">'EAI_AGAIN'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">syscall</span><span class="token operator">:</span> <span class="token string">'getaddrinfo'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">'db'</span>
<span class="token punctuation">}</span>

Node<span class="token punctuation">.</span>js v18<span class="token punctuation">.</span><span class="token number">13.0</span>
<span class="token punctuation">[</span>nodemon<span class="token punctuation">]</span> app crashed <span class="token operator">-</span> waiting <span class="token keyword">for</span> file changes before starting<span class="token operator">...</span>아래 코드는 새로운 리액트 프로젝트를 생성합니다<span class="token operator">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그래서 이 오류를 피하기 위해 다음 라인들을 주석 처리하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//client.connect();</span>
<span class="token operator">...</span>
<span class="token comment">//createTable();</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 node 폴더 안에서 npm start를 실행하고 브라우저에서 hello world 루트(http://localhost:3000/api)에 접속하여 작동 여부를 확인해주세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_4.png" alt="이미지"></p>
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
<p>테이블 태그를 Markdown 형식으로 변경해주세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm create vite react <span class="token operator">--</span> <span class="token operator">--</span>template react
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령어는 자동으로 새로운 리액트 폴더와 새로운 리액트 프로젝트를 생성합니다.</p>
<p>저는 프로젝트를 만들기 위해 Vite 도구를 선택했습니다. Vite는 31MB의 종속성을 사용하며 프로젝트를 시작하는 시간을 단축해줍니다. Vite 문서를 참조하세요.</p>
<p>다음과 같은 구조로 끝날 것입니다:</p>
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
<img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_5.png" />
<h1 id="프론트엔드-종속성" tabindex="-1"><a class="header-anchor" href="#프론트엔드-종속성" aria-hidden="true">#</a> 프론트엔드 종속성:</h1>
<ul>
<li>Axios: Node.js용 promise 기반 HTTP Client입니다. 더 많은 정보를 원하시면 Axios 문서를 참조해주세요.</li>
<li>React Router: React 애플리케이션용 라우팅 라이브러리입니다. 라우팅 기능을 정의하고 관리할 수 있는 일련의 컴포넌트와 유틸리티를 제공합니다. 더 많은 정보를 원하시면 React Router 문서를 참조해주세요.</li>
</ul>
<p>모든 종속성을 설치하려면 react 폴더 안으로 이동하여 다음 코드를 실행하십시오:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install axios react<span class="token operator">-</span>router<span class="token operator">-</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>애플리케이션을 실행하려면 다음을 실행할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http://localhost:5173에서 브라우저에 액세스하면 아래 페이지를 볼 수 있어요:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_6.png" alt="이미지"></p>
<h1 id="프론트엔드-코드-작성하기" tabindex="-1"><a class="header-anchor" href="#프론트엔드-코드-작성하기" aria-hidden="true">#</a> 프론트엔드 코드 작성하기</h1>
<p>먼저, App.jsx 파일의 내용을 다음 코드로 교체해봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom/client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">"./components/Layout"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">"./components/Home"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PostUser <span class="token keyword">from</span> <span class="token string">"./components/PostUser"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> GetAllUser <span class="token keyword">from</span> <span class="token string">"./components/GetAllUser"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span>
      <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Layout <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route index element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"post"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>PostUser <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"get"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>GetAllUser <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'root'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>앱 파일은 라우팅을 관리하고 특정 엔드포인트에서 특정 컴포넌트를 렌더링합니다. 예를 들어 경로가 &quot;/get&quot;인 경우, 데이터베이스에서 모든 사용자를 검색하는 책임을 지고 있는 GetAllUser 컴포넌트를 반환합니다.</p>
<p>이제 애플리케이션 컴포넌트를 생성해 봅시다. 'src' 폴더 안에 'components'라는 폴더를 만들고 다음 네 가지 파일을 만듭니다:</p>
<ul>
<li>GetAllUser.jsx</li>
<li>Home.jsx</li>
<li>Layout.jsx</li>
<li>PostUser.jsx</li>
</ul>
<p>GetAllUser.jsx</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">GetAllUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setAllUser<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    axios
      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"http://localhost:8000/api/all"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setAllUser</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>All Users<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>users <span class="token operator">&amp;&amp;</span> users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> 
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>br<span class="token operator">></span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>age<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>br<span class="token operator">></span>
            <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>br<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> GetAllUser<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Home.jsx</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">Home</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Layout.jsx</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Outlet<span class="token punctuation">,</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Layout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>nav<span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/post"</span><span class="token operator">></span>사용자 등록<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/get"</span><span class="token operator">></span>모든 사용자 조회<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
      <span class="token operator">&lt;</span>Outlet <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> Layout<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PostUser.jsx</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">PostUser</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  
    <span class="token keyword">const</span> <span class="token punctuation">[</span>user<span class="token punctuation">,</span> setUser<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">createUser</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> axios
      <span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"http://localhost:8000/api/form"</span><span class="token punctuation">,</span> 
      user<span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/x-www-form-urlencoded'</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span>      
          <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
          <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
          <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"사용자가 생성되었습니다: "</span> <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">alert</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onChangeForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'name'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'age'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'email'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setUser</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span>user<span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>h1<span class="token operator">></span>사용자 등록<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
              <span class="token operator">&lt;</span>form<span class="token operator">></span>
                  <span class="token operator">&lt;</span>div<span class="token operator">></span>
                      <span class="token operator">&lt;</span>div<span class="token operator">></span>
                          <span class="token operator">&lt;</span>label<span class="token operator">></span>이름<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                          <span class="token operator">&lt;</span>input 
                            type<span class="token operator">=</span><span class="token string">"text"</span> 
                            value<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onChangeForm</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span> 
                            name<span class="token operator">=</span><span class="token string">"name"</span> 
                            id<span class="token operator">=</span><span class="token string">"name"</span> 
                            placeholder<span class="token operator">=</span><span class="token string">"이름"</span> 
                          <span class="token operator">/</span><span class="token operator">></span>
                      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                      <span class="token operator">&lt;</span>div<span class="token operator">></span>
                          <span class="token operator">&lt;</span>label<span class="token operator">></span>나이<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                          <span class="token operator">&lt;</span>input 
                            type<span class="token operator">=</span><span class="token string">"text"</span> 
                            value<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>age<span class="token punctuation">}</span>
                            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onChangeForm</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span> 
                            name<span class="token operator">=</span><span class="token string">"age"</span> 
                            id<span class="token operator">=</span><span class="token string">"age"</span> 
                            placeholder<span class="token operator">=</span><span class="token string">"나이"</span> 
                          <span class="token operator">/</span><span class="token operator">></span>
                      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span>div<span class="token operator">></span>
                      <span class="token operator">&lt;</span>div<span class="token operator">></span>
                          <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"exampleInputEmail1"</span><span class="token operator">></span>이메일<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                          <span class="token operator">&lt;</span>input 
                            type<span class="token operator">=</span><span class="token string">"text"</span> 
                            value<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span>
                            onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">onChangeForm</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span> 
                            name<span class="token operator">=</span><span class="token string">"email"</span> 
                            id<span class="token operator">=</span><span class="token string">"email"</span> 
                            placeholder<span class="token operator">=</span><span class="token string">"이메일"</span> 
                          <span class="token operator">/</span><span class="token operator">></span>
                      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>생성<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
<span class="token keyword">export</span> <span class="token keyword">default</span> PostUser<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>index.css 파일에서 29번째 줄을 제거하세요. 더 나은 레이아웃을 위해:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>place<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>해당 줄을 제거한 후에 애플리케이션을 시작하려면 npm run dev 명령을 실행할 수 있습니다. 애플리케이션이 실행되면 http://localhost:5173에서 액세스할 수 있습니다.</p>
<img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_7.png" />
<p>마지막으로 Vite에서 모든 주소에서 수신하도록 서버 옵션을 변경해야 합니다. vite.config.js로 이동하여 다음과 같이 파일을 변경하세요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//port: 5173, 도커 컴포즈로 실행하지 않을 때 사용할 포트</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nginx-서버-구성" tabindex="-1"><a class="header-anchor" href="#nginx-서버-구성" aria-hidden="true">#</a> Nginx 서버 구성</h1>
<p>Nginx는 클라이언트로부터의 요청을 처리하고 해당 요청을 적합한 백엔드 서버로 전달하는 역방향 프록시 서버로 사용할 수 있습니다.</p>
<p>Nginx를 역방향 프록시로 구성하려면 프로젝트의 루트 디렉토리로 이동하여 nginx 폴더를 만들어야 합니다. 이 폴더 안에 default.conf라는 파일을 만들고 다음 구성을 추가하세요.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>upstream front<span class="token operator">-</span>end <span class="token punctuation">{</span>
    server front<span class="token operator">-</span>end<span class="token operator">:</span><span class="token number">5173</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

upstream back<span class="token operator">-</span>end <span class="token punctuation">{</span>
    server back<span class="token operator">-</span>end<span class="token operator">:</span><span class="token number">3000</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
server <span class="token punctuation">{</span>
    listen <span class="token number">80</span><span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>front<span class="token operator">-</span>end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">/</span>sockjs<span class="token operator">-</span>node <span class="token punctuation">{</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>front<span class="token operator">-</span>end<span class="token punctuation">;</span>
        proxy_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
        proxy_set_header Upgrade $http_upgrade<span class="token punctuation">;</span>
        proxy_set_header Connection <span class="token string">"Upgrade"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    location <span class="token operator">/</span>api <span class="token punctuation">{</span>
        rewrite <span class="token operator">/</span>back<span class="token operator">-</span>end<span class="token operator">/</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">/</span>$1 <span class="token keyword">break</span><span class="token punctuation">;</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>back<span class="token operator">-</span>end<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>upstream 지시문은 프록시 패스 지시문에서 참조할 수 있는 서버 그룹을 정의합니다. 이 경우에는 React 프론트엔드 서버를 위한 front-end와 Node.js 백엔드 서버를 위한 back-end 두 개의 upstream을 정의하였습니다.</p>
<p>서버 블록은 포트 80에서 들어오는 요청을 처리하는 구성을 담고 있습니다.</p>
<p>위치 / 블록은 프론트엔드 서버로의 요청을 프록시로 전달하는데 사용되며 proxy_pass http://front-end;가 이용됩니다.</p>
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
<p>/sockjs-node 블록은 웹소켓 연결을 처리하고 프론트엔드 서버로 전달합니다.</p>
<p>/api 블록은 백엔드 API 요청을 처리하기 위해 URL을 다시 작성하고 proxy_pass http://back-end;를 사용하여 백엔드 서버로 전달합니다.</p>
<h1 id="dockerfile-생성" tabindex="-1"><a class="header-anchor" href="#dockerfile-생성" aria-hidden="true">#</a> Dockerfile 생성</h1>
<h1 id="프론트엔드-도커-파일" tabindex="-1"><a class="header-anchor" href="#프론트엔드-도커-파일" aria-hidden="true">#</a> 프론트엔드 도커 파일</h1>
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
<p>리액트 폴더 안에 Dockerfile이라는 새 파일을 만들어주세요. 파일에 다음 코드를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">FROM</span> <span class="token literal-property property">node</span><span class="token operator">:</span>alpine

<span class="token constant">WORKDIR</span> <span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app

<span class="token constant">COPY</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>

<span class="token constant">RUN</span> npm install

<span class="token constant">EXPOSE</span> <span class="token number">5173</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>FROM 키워드는 Dockerfile에서 새 Docker 이미지를 빌드하는 데 사용할 기본 이미지를 지정하는 데 사용됩니다. 이 경우에는 기본으로 node:alpine 이미지를 사용하고 있습니다.</p>
<p>WORKDIR 명령은 이후의 RUN, CMD, ENTRYPOINT, COPY, ADD 명령에 대한 작업 디렉토리를 설정합니다.</p>
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
<p>모든 파일을 로컬 컴퓨터에서 Docker 이미지의 /usr/src/app 디렉토리로 복사하는 COPY . . 명령을 사용합니다.</p>
<p>React 애플리케이션에 필요한 의존성을 설치하는 RUN npm install 명령을 실행합니다.</p>
<p>컨테이너화된 애플리케이션이 들어오는 연결을 위해 포트 5173에서 수신 대기하도록 지정하는 EXPOSE 명령을 사용합니다.</p>
<h1 id="백엔드-dockerfile" tabindex="-1"><a class="header-anchor" href="#백엔드-dockerfile" aria-hidden="true">#</a> 백엔드 Dockerfile</h1>
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
<p>프로젝트의 node 폴더 안에 Dockerfile이라는 파일을 생성하고 아래의 코드를 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">FROM</span> <span class="token literal-property property">node</span><span class="token operator">:</span>alpine

<span class="token constant">WORKDIR</span> <span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app

<span class="token constant">COPY</span> <span class="token punctuation">.</span> <span class="token punctuation">.</span>

<span class="token constant">RUN</span> npm install

<span class="token constant">EXPOSE</span> <span class="token number">3000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 Dockerfile은 프론트엔드 Dockerfile과 유사합니다. 작업 디렉터리를 설정하고 파일을 복사하며 종속성을 설치한 뒤 백엔드 애플리케이션을 위해 포트 3000을 공개합니다.</p>
<h1 id="nginx-dockerfile" tabindex="-1"><a class="header-anchor" href="#nginx-dockerfile" aria-hidden="true">#</a> Nginx dockerfile</h1>
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
<p>nginx 폴더 안에 Dockerfile을 만들고 다음 코드를 추가하여 Nginx 이미지를 pull하고 default.conf 파일을 복사합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">FROM</span> nginx
<span class="token constant">COPY</span> <span class="token punctuation">.</span><span class="token operator">/</span><span class="token keyword">default</span><span class="token punctuation">.</span>conf <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span><span class="token keyword">default</span><span class="token punctuation">.</span>conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="docker-compose-yml-구성하기" tabindex="-1"><a class="header-anchor" href="#docker-compose-yml-구성하기" aria-hidden="true">#</a> docker-compose.yml 구성하기</h1>
<p>이제 클라이언트를 구성하고, Nginx 서버에 연결된 서버 API를 구성하고, 모든 것이 정상적으로 작동하는 것을 확인했으므로 docker-compose.yml 파일을 사용하여 모든 것을 통합하는 시간입니다. 이 파일은 모든 구성 요소를 함께 모아주는 것뿐만 아니라 데이터베이스 설정까지 처리할 것입니다.</p>
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
<p>시작하려면 루트 디렉토리로 이동하여 Project 폴더를 찾고 docker-compose.yml이라는 파일을 만드십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'3'</span>

<span class="token literal-property property">services</span><span class="token operator">:</span> 

  back<span class="token operator">-</span>end<span class="token operator">:</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> 
      <span class="token literal-property property">context</span><span class="token operator">:</span> node
    <span class="token literal-property property">container_name</span><span class="token operator">:</span> back<span class="token operator">-</span>end
    <span class="token literal-property property">working_dir</span><span class="token operator">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app
    <span class="token literal-property property">networks</span><span class="token operator">:</span> 
      <span class="token operator">-</span> node<span class="token operator">-</span>network
    <span class="token literal-property property">volumes</span><span class="token operator">:</span> 
      <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>node<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app
      <span class="token operator">-</span> <span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app<span class="token operator">/</span>node_modules
    <span class="token literal-property property">tty</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">ports</span><span class="token operator">:</span> 
      <span class="token operator">-</span> <span class="token string">"3000:3000"</span>
    <span class="token literal-property property">command</span><span class="token operator">:</span> npm run start
    <span class="token literal-property property">depends_on</span><span class="token operator">:</span>
       <span class="token operator">-</span> db

  front<span class="token operator">-</span>end<span class="token operator">:</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> 
      <span class="token literal-property property">context</span><span class="token operator">:</span> react
    <span class="token literal-property property">container_name</span><span class="token operator">:</span> front<span class="token operator">-</span>end
    <span class="token literal-property property">working_dir</span><span class="token operator">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app
    <span class="token literal-property property">networks</span><span class="token operator">:</span> 
      <span class="token operator">-</span> node<span class="token operator">-</span>network
    <span class="token literal-property property">volumes</span><span class="token operator">:</span> 
      <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>react<span class="token operator">:</span><span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app
      <span class="token operator">-</span> <span class="token operator">/</span>usr<span class="token operator">/</span>src<span class="token operator">/</span>app<span class="token operator">/</span>node_modules
    <span class="token literal-property property">tty</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">ports</span><span class="token operator">:</span> 
      <span class="token operator">-</span> <span class="token string">"5173:5173"</span>
    <span class="token literal-property property">command</span><span class="token operator">:</span> npm run dev

  <span class="token literal-property property">db</span><span class="token operator">:</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> postgres
    <span class="token literal-property property">container_name</span><span class="token operator">:</span> db
    <span class="token literal-property property">restart</span><span class="token operator">:</span> always
    <span class="token literal-property property">tty</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">volumes</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>data<span class="token operator">:</span><span class="token operator">/</span><span class="token keyword">var</span><span class="token operator">/</span>lib<span class="token operator">/</span>postgresql<span class="token operator">/</span>data
    <span class="token literal-property property">environment</span><span class="token operator">:</span> 
      <span class="token operator">-</span> <span class="token constant">POSTGRES_PASSWORD</span><span class="token operator">=</span><span class="token number">1234</span>
    <span class="token literal-property property">ports</span><span class="token operator">:</span> 
      <span class="token operator">-</span> <span class="token string">"5432:5432"</span>
    <span class="token literal-property property">networks</span><span class="token operator">:</span> 
      <span class="token operator">-</span> node<span class="token operator">-</span>network

  <span class="token literal-property property">nginx</span><span class="token operator">:</span>
    <span class="token literal-property property">build</span><span class="token operator">:</span> 
      <span class="token literal-property property">context</span><span class="token operator">:</span> nginx
    <span class="token literal-property property">container_name</span><span class="token operator">:</span> nginx
    <span class="token literal-property property">restart</span><span class="token operator">:</span> always
    <span class="token literal-property property">tty</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">ports</span><span class="token operator">:</span> 
      <span class="token operator">-</span> <span class="token string">"8000:80"</span>
    <span class="token literal-property property">networks</span><span class="token operator">:</span> 
      <span class="token operator">-</span> node<span class="token operator">-</span>network
    <span class="token literal-property property">depends_on</span><span class="token operator">:</span>
       <span class="token operator">-</span> back<span class="token operator">-</span>end
       <span class="token operator">-</span> front<span class="token operator">-</span>end
  
<span class="token literal-property property">networks</span><span class="token operator">:</span> 
  node<span class="token operator">-</span>network<span class="token operator">:</span>
    <span class="token literal-property property">driver</span><span class="token operator">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="완전히-컨테이너화된-애플리케이션-실행" tabindex="-1"><a class="header-anchor" href="#완전히-컨테이너화된-애플리케이션-실행" aria-hidden="true">#</a> 완전히 컨테이너화된 애플리케이션 실행</h1>
<p>완전히 컨테이너화된 애플리케이션을 실행하려면 다음 단계를 따르세요:</p>
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
<p>터미널이나 명령 프롬프트에서 루트 디렉토리를 열어주세요.</p>
<p>다음 명령어를 실행하여 docker-compose.yml 파일을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>docker<span class="token operator">-</span>compose up <span class="token operator">--</span>build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>컨테이너가 실행되면 웹 브라우저에서 http://localhost:8000/을 방문하여 애플리케이션에 액세스할 수 있습니다. Nginx가 리액트 애플리케이션으로 리디렉션됩니다.</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_8.png" alt="Dockerize a React application with Node.js, Postgres, and Nginx"></p>
<p>만약 &quot;사용자 등록&quot; 옵션을 선택하면 http://localhost:8000/post로 이동됩니다. 여기에서 새 사용자를 생성할 수 있으며 이는 우리가 실행 중인 Postgres 데이터베이스에 기록됩니다.</p>
<p>요약하자면, 프론트엔드가 Nginx에 요청을 보내면 Nginx가 요청을 백엔드로 프록시하게 됩니다. Nginx는 /api 경로를 가지고 있기 때문에 프록시 역할을 하여 요청을 백엔드로 전달합니다. 백엔드는 요청을 처리하고 데이터를 데이터베이스에 저장하며 응답을 생성합니다. 그리고 응답은 다시 Nginx를 통해 프론트엔드로 전송됩니다.</p>
<p>예제를 만들어 보겠습니다:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_9.png" alt="Dockerize a React application with Node.js, Postgres, and Nginx"></p>
<p>만약 나이 필드에 문자로 사용자를 생성하려고 시도하면, 테이블이 age INT NOT NULL로 정의되었기 때문에 오류가 발생할 것입니다.</p>
<p>모든 것이 잘 진행된다면, 사용자를 생성한 후 &quot;모든 사용자 가져오기&quot; 옵션으로 이동하여 http://localhost:8000/get로 이동할 수 있습니다. 여기에서 방금 생성한 사용자를 볼 수 있습니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_10.png" alt="Dockerize a React application with Node.js, Postgres, and Nginx"></p>
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
<p>도커-컴포즈 업 --빌드를 실행한 후에는 루트 디렉토리에 data라는 새 폴더가 생성된 것을 알 수 있습니다. 이 폴더는 포스트그레스 데이터가 저장되는 곳이며, 컨테이너가 제거되어도 생성한 데이터가 유실되지 않도록 해줍니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-DockerizeaReactapplicationwithNodejsPostgresandNginx/img/DockerizeaReactapplicationwithNodejsPostgresandNginx_11.png" alt="DockerizeaReactapplicationwithNodejsPostgresandNginx_11"></p>
<p>축하합니다! 완전히 컨테이너화된 애플리케이션을 성공적으로 실행하고 사용자 생성 및 검색 기능을 상호 작용하였습니다.</p>
</div></template>
