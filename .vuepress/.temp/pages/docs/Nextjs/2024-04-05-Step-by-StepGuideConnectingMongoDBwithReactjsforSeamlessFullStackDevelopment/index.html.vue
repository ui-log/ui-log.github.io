<template><div><img src="@source/docs/Nextjs/2024-04-05-Step-by-StepGuideConnectingMongoDBwithReactjsforSeamlessFullStackDevelopment/img/Step-by-StepGuideConnectingMongoDBwithReactjsforSeamlessFullStackDevelopment_0.png" />
<p>안녕하세요! MongoDB와 React.js 애플리케이션을 연결하는 과정을 한 단계씩 안내해 드릴게요. 이 예제에서는 React.js와 MongoDB에 대해 기본적으로 이해하고 있다고 가정하겠습니다. 그렇지 않다면, 먼저 해당 기술들에 대해 알아보시는 것이 좋아요.</p>
<h2 id="step-1-mongodb-데이터베이스-설정하기" tabindex="-1"><a class="header-anchor" href="#step-1-mongodb-데이터베이스-설정하기" aria-hidden="true">#</a> Step 1: MongoDB 데이터베이스 설정하기</h2>
<ul>
<li>MongoDB 설치: MongoDB 공식 웹사이트(https://www.mongodb.com/try/download/community)에서 MongoDB를 다운로드하고 설치해 주세요. 운영 체제에 맞는 설치 지침을 따르세요.</li>
<li>MongoDB 시작: MongoDB 서버를 시작해 주세요. 일반적으로 터미널에서 mongod와 같은 명령을 실행하면 됩니다.</li>
<li>데이터베이스 생성: MongoDB Compass나 명령행과 같은 MongoDB 관리 도구를 사용하여 새 데이터베이스를 생성하세요. 예를 들어, 명령행을 사용하는 방법:</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mongo
<span class="token operator">></span> use your_database_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>컬렉션 생성하기: 데이터를 저장할 컬렉션을 데이터베이스 내에 생성합니다. 예를 들어 다음과 같이:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">></span> db<span class="token punctuation">.</span><span class="token function">createCollection</span><span class="token punctuation">(</span><span class="token string">"items"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="단계-2-react-js-애플리케이션-설정하기" tabindex="-1"><a class="header-anchor" href="#단계-2-react-js-애플리케이션-설정하기" aria-hidden="true">#</a> 단계 2: React.js 애플리케이션 설정하기</h2>
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
<li>React App 만들기: 아직 만들지 않았다면, create-react-app이나 원하는 방법을 사용하여 새로운 React.js 애플리케이션을 만듭니다.</li>
<li>종속성 설치: React.js 프로젝트 폴더 안에서 터미널을 열고 필요한 패키지를 설치합니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install axios mongoose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>axios는 HTTP 요청을 만들기 위한 인기 있는 라이브러리입니다.</li>
<li>mongoose는 MongoDB와 Node.js를 위한 Object Data Modeling (ODM) 라이브러리입니다.</li>
</ul>
<h2 id="단계-3-mongodb에-연결-생성" tabindex="-1"><a class="header-anchor" href="#단계-3-mongodb에-연결-생성" aria-hidden="true">#</a> 단계 3: MongoDB에 연결 생성</h2>
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
<li>서버 사이드 컴포넌트 생성하기: React 프로젝트에서 MongoDB와의 통신을 처리할 서버 사이드 컴포넌트를 설정하세요. 프로젝트 루트에 server.js 파일을 만드시면 됩니다.</li>
<li>Express 설치하기: server.js 내에서 Express를 설치하고 설정하세요. Express는 웹 애플리케이션을 빌드하기 위한 Node.js 프레임워크입니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"express"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">PORT</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">PORT</span> <span class="token operator">||</span> <span class="token number">5000</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token constant">PORT</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">서버가 포트 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">에서 실행 중입니다</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>MongoDB에 연결하기: 다음 코드를 추가하여 Mongoose를 사용하여 MongoDB 데이터베이스에 연결하세요. 실제 데이터베이스 이름으로 your_database_name을 교체해주세요:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mongoose"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">"mongodb://localhost/your_database_name"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="단계-4-api-라우트-생성" tabindex="-1"><a class="header-anchor" href="#단계-4-api-라우트-생성" aria-hidden="true">#</a> 단계 4: API 라우트 생성</h2>
<ul>
<li>API 라우트 생성: server.js 파일에서 MongoDB와 상호 작용하기 위한 API 라우트를 생성하세요. 예를 들어, 컬렉션에서 모든 항목을 가져오는 라우트를 만들 수 있습니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Item <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./models/Item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Item 모델 생성</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/api/items"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> items <span class="token operator">=</span> <span class="token keyword">await</span> Item<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"서버 오류"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>Item 모델 생성: 프로젝트 내에 models라는 새 폴더를 만들고, 그 안에 MongoDB 컬렉션에 대한 스키마를 정의하기 위해 Item.js라는 파일을 생성하세요.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"mongoose"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> itemSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">mongoose<span class="token punctuation">.</span>Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">"Item"</span><span class="token punctuation">,</span> itemSchema<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-5-react에서-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#단계-5-react에서-데이터-가져오기" aria-hidden="true">#</a> 단계 5: React에서 데이터 가져오기</h2>
<ul>
<li>React 컴포넌트에서 데이터 가져오기: React 컴포넌트에서 이전 단계에서 설정한 API에서 데이터를 가져 오도록 Axios를 사용하십시오. useEffect 훅에서 데이터를 가져올 수 있습니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/api/items"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token function">setItems</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Items<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>_id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>description<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그거야! 모든 것이 성공적으로 마무리되었어요! 이제 MongoDB 데이터베이스를 React.js 애플리케이션에 연결했습니다. 이 예시에서는 연결 설정, API 라우트 생성, 데이터 가져오기의 기본 내용을 다뤘어요. 실제 애플리케이션에서는 보통 추가적인 오류 처리, 인증, 그리고 더 고급 기능들을 구현하고 싶을 거예요.</p>
</div></template>
