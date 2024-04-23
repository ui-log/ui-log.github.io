<template><div><p><img src="@source/docs/Nextjs/2024-04-05-EmbeddingSupersetdashboardsinyourReactapplication/img/EmbeddingSupersetdashboardsinyourReactapplication_0.png" alt="Embedding Superset Dashboards in your React application"></p>
<p>슈퍼셋(Superset)은 차트를 빠르게 구축할 수 있는 노코드 웹 기반 인터페이스입니다. 여러 데이터베이스 및 시각화를 지원하여 데이터를 효과적으로 표시할 수 있습니다. 대시보드 임베딩을 통해 슈퍼셋 대시보드를 아이프레임을 통해 자체 애플리케이션에 임베드할 수 있습니다.</p>
<p>임베드된 대시보드는 통찰력 있는 데이터 분석을 웹 애플리케이션에 직접 가져오는 방법을 제공합니다.</p>
<p>임베딩 SDK를 사용하면 앱의 인증을 사용하여 슈퍼셋 대시보드를 자체 웹 앱에 임베드할 수 있습니다.</p>
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
<p>프론트 엔드 개발자입니다. 위의 텍스트를 친근한 톤으로 한국어로 번역해 드리겠습니다.</p>
<p>임베딩(embedding)은 호스트 애플리케이션에 Superset 페이지를 담고 있는 iframe을 삽입하여 수행됩니다. 사용자가 이미 호스트 앱에 로그인되어 있는 경우 통합 대시보드에 다시 로그인할 필요가 없어야 합니다.</p>
<h1 id="목표" tabindex="-1"><a class="header-anchor" href="#목표" aria-hidden="true">#</a> 목표</h1>
<ul>
<li>React 앱에서 Superset 그래프에 액세스</li>
<li>임베드된 대시보드에 다중 테넌시(multi-tenancy) 지원 추가</li>
<li>액세스 제어를 위한 RLS 사용</li>
</ul>
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
<ul>
<li>Docker 또는 Docker Compose</li>
<li>React 기반의 작동 중인 애플리케이션 및 백엔드</li>
</ul>
<h1 id="도커를-사용하여-superset-설치" tabindex="-1"><a class="header-anchor" href="#도커를-사용하여-superset-설치" aria-hidden="true">#</a> 도커를 사용하여 Superset 설치</h1>
<p>주어진 명령어를 사용하여 Superset의 최신 버전을 설치하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>docker run <span class="token operator">-</span>d <span class="token operator">-</span>e <span class="token constant">SUPERSET_FEATURE_EMBEDDED_SUPERSET</span><span class="token operator">=</span><span class="token string">"true"</span> <span class="token operator">-</span>v <span class="token operator">~</span><span class="token operator">/</span>react<span class="token operator">-</span>app<span class="token operator">/</span>superset<span class="token operator">/</span>superset_config_docker<span class="token punctuation">.</span>py<span class="token operator">:</span><span class="token operator">/</span>app<span class="token operator">/</span>pythonpath<span class="token operator">/</span>superset_config<span class="token punctuation">.</span>py <span class="token operator">-</span>p <span class="token number">8088</span><span class="token operator">:</span><span class="token number">8088</span> <span class="token operator">--</span>name superset apache<span class="token operator">/</span>superset
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
<h1 id="도커-컴포즈를-사용하여-superset-설치하기" tabindex="-1"><a class="header-anchor" href="#도커-컴포즈를-사용하여-superset-설치하기" aria-hidden="true">#</a> 도커 컴포즈를 사용하여 Superset 설치하기</h1>
<p>아래와 같이 Superset 서비스를 위한 docker-compose.yaml 파일을 만드세요. 컨테이너를 시작하려면 docker-compose up 명령을 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token string">'2.3'</span>
<span class="token literal-property property">services</span><span class="token operator">:</span>
  <span class="token literal-property property">superset</span><span class="token operator">:</span>
    <span class="token literal-property property">image</span><span class="token operator">:</span> apache<span class="token operator">/</span>superset<span class="token operator">:</span>latest
    <span class="token literal-property property">init</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token literal-property property">ports</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token string">"8088:8088"</span>
    <span class="token literal-property property">extra_hosts</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token string">"host.docker.internal:host-gateway"</span>
    <span class="token literal-property property">networks</span><span class="token operator">:</span>
      <span class="token operator">-</span> react<span class="token operator">-</span>app<span class="token operator">-</span>network
    <span class="token literal-property property">volumes</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token punctuation">.</span><span class="token operator">/</span>superset<span class="token operator">/</span>superset_config_docker<span class="token punctuation">.</span>py<span class="token operator">:</span><span class="token operator">/</span>app<span class="token operator">/</span>pythonpath<span class="token operator">/</span>superset_config<span class="token punctuation">.</span>py
    <span class="token literal-property property">environment</span><span class="token operator">:</span>
      <span class="token operator">-</span> <span class="token constant">SQLALCHEMY_DATABASE_URI</span><span class="token operator">=</span><span class="token string">'postgresql://postgres:postgres@db:5432/superset'</span>
      <span class="token operator">-</span> <span class="token constant">SUPERSET_FEATURE_EMBEDDED_SUPERSET</span><span class="token operator">=</span><span class="token string">'true'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래 명령어를 사용하여 관리자 사용자를 생성하고 Superset을 초기화하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>도커 exec <span class="token operator">-</span>it superset superset fab create<span class="token operator">-</span>admin <span class="token operator">--</span>username admin <span class="token operator">--</span>firstname Superset <span class="token operator">--</span>lastname Admin <span class="token operator">--</span>email admin@superset<span class="token punctuation">.</span>com <span class="token operator">--</span>password admin
도커 exec <span class="token operator">-</span>it superset superset db upgrade
도커 exec <span class="token operator">-</span>it superset superset init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="슈퍼셋-설정" tabindex="-1"><a class="header-anchor" href="#슈퍼셋-설정" aria-hidden="true">#</a> 슈퍼셋 설정</h1>
<p>아래 슈퍼셋 설정을 사용할 것입니다. 가장 중요한 부분은 EMBEDDED_SUPERSET 기능 플래그를 활성화하는 것입니다.</p>
<p>superset_config.py</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">SESSION_COOKIE_SAMESITE</span> <span class="token operator">=</span> None
<span class="token constant">ENABLE_PROXY_FIX</span> <span class="token operator">=</span> True
<span class="token constant">PUBLIC_ROLE_LIKE_GAMMA</span> <span class="token operator">=</span> True
<span class="token constant">FEATURE_FLAGS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"EMBEDDED_SUPERSET"</span><span class="token operator">:</span> True
<span class="token punctuation">}</span>
<span class="token constant">SQLALCHEMY_DATABASE_URI</span> <span class="token operator">=</span> <span class="token string">'postgresql://postgres:postgres@db:5432/superset'</span>

<span class="token constant">CORS_OPTIONS</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'supports_credentials'</span><span class="token operator">:</span> True<span class="token punctuation">,</span>
  <span class="token string-property property">'allow_headers'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'*'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'resources'</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'*'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">'origins'</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'http://localhost:8088'</span><span class="token punctuation">,</span> <span class="token string">'http://localhost:8888'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="superset-차트-및-대시보드-생성" tabindex="-1"><a class="header-anchor" href="#superset-차트-및-대시보드-생성" aria-hidden="true">#</a> Superset 차트 및 대시보드 생성</h1>
<p>도커 이미지가 실행되면 Superset에 로그인하여 다음을 생성할 수 있습니다:</p>
<ul>
<li>Superset 사용자</li>
<li>Superset 대시보드</li>
<li>대시보드 내에서 Superset 차트```</li>
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
<h1 id="임베디드-대시보드-uuid-생성" tabindex="-1"><a class="header-anchor" href="#임베디드-대시보드-uuid-생성" aria-hidden="true">#</a> 임베디드 대시보드 UUID 생성</h1>
<p>우리의 리액트 앱에서 대시보드에 액세스할 수 있도록하려면, 먼저 슈퍼셋 구성에서 &quot;임베디드&quot; 지원 기능을 활성화해야합니다.</p>
<p>활성화 후에는 대시보드를 임베드로 구성해야하며, 앱에서 임베디드 대시보드 UUID를 사용해야합니다. 해당 UUID는 아래 표시된 대시보드의 임베드 구성 화면에서 찾을 수 있습니다.</p>
<p>Client App의 적절한 호스트:포트를 입력해야합니다. 이제 대시보드는 Client App에 임베드 될 준비가 되어 있습니다.</p>
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
<h1 id="새-사용자-및-역할-생성" tabindex="-1"><a class="header-anchor" href="#새-사용자-및-역할-생성" aria-hidden="true">#</a> 새 사용자 및 역할 생성</h1>
<p>임베디드 대시보드에 액세스하도록 허용하려면 새 사용자를 생성하는 것이 좋습니다. 사용자를 생성할 때 다음 매개변수를 사용하세요. 중요한 점은 다음 역할을 부여하는 것입니다: [Public, Gamma]</p>
<p><img src="@source/docs/Nextjs/2024-04-05-EmbeddingSupersetdashboardsinyourReactapplication/img/EmbeddingSupersetdashboardsinyourReactapplication_1.png" alt="이미지 1"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-EmbeddingSupersetdashboardsinyourReactapplication/img/EmbeddingSupersetdashboardsinyourReactapplication_2.png" alt="이미지 2"></p>
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
<h1 id="내장-대시보드-슈퍼셋-api와-상호-작용하기" tabindex="-1"><a class="header-anchor" href="#내장-대시보드-슈퍼셋-api와-상호-작용하기" aria-hidden="true">#</a> 내장 대시보드 슈퍼셋 API와 상호 작용하기</h1>
<h2 id="jwt-액세스-토큰을-가져오는-api" tabindex="-1"><a class="header-anchor" href="#jwt-액세스-토큰을-가져오는-api" aria-hidden="true">#</a> JWT 액세스 토큰을 가져오는 API</h2>
<p>슈퍼셋과 상호 작용하기 위해 API 호출을 하기 전에, 먼저 JWT 액세스 토큰이 필요합니다. 여기에서는 관리자 사용자를 사용하여 액세스/요청 토큰을 가져옵니다. 추가 호출을 위해 &quot;access_token&quot;을 사용할 것입니다. 나중에 사용할 수 있도록 정확히 저장해주시기 바랍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>security<span class="token operator">/</span>login
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
<img src="@source/docs/Nextjs/2024-04-05-EmbeddingSupersetdashboardsinyourReactapplication/img/EmbeddingSupersetdashboardsinyourReactapplication_3.png" />
<h2 id="게스트-토큰을-받는-api" tabindex="-1"><a class="header-anchor" href="#게스트-토큰을-받는-api" aria-hidden="true">#</a> 게스트 토큰을 받는 API</h2>
<p>접근 토큰을 받으면, 임베드된 대시보드 인증을 위해 특별히 사용되는 게스트 토큰(https://github.com/apache/superset/pull/17517)이 필요합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">/</span>api<span class="token operator">/</span>v1<span class="token operator">/</span>security<span class="token operator">/</span>guest_token<span class="token operator">/</span>
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
<p><img src="@source/docs/Nextjs/2024-04-05-EmbeddingSupersetdashboardsinyourReactapplication/img/EmbeddingSupersetdashboardsinyourReactapplication_4.png" alt="Embedding Superset dashboards in your React application"></p>
<h2 id="내장-대시보드에-대한-rls-필터" tabindex="-1"><a class="header-anchor" href="#내장-대시보드에-대한-rls-필터" aria-hidden="true">#</a> 내장 대시보드에 대한 RLS 필터</h2>
<p>RLS 규칙을 사용하면 선택한 데이터셋에서 사용자가 쿼리하고 특정 데이터를 볼 수 있는 세밀한 제어를 할 수 있습니다. 예를 들어 멀티테넌트 애플리케이션에서는 Superset 차트가 인증된 사용자에게 속한 데이터만 표시되어야 합니다. 이러한 수준의 제어는 RLS 필터를 사용하여 가능합니다.</p>
<p>RLS 규칙은 서비스 계정이 토큰을 생성할 때 지정되며, 해당 토큰으로 인증된 게스트 사용자가 분석 데이터베이스에 대해 수행하는 모든 쿼리에 적용됩니다. RLS 절이 없이 guest_token을 생성하는 경우 원본 쿼리에 대한 필터링이 이루어지지 않고 모든 데이터가 차트에 표시됩니다.</p>
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
<p>이 예제에서는 customer_id=4에 대한 RLS 필터를 생성했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token string-property property">"user"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">"username"</span><span class="token operator">:</span> <span class="token string">"myAppUser"</span><span class="token punctuation">,</span> <span class="token string-property property">"first_name"</span><span class="token operator">:</span> <span class="token string">"MyApp User"</span><span class="token punctuation">,</span> <span class="token string-property property">"last_name"</span><span class="token operator">:</span> <span class="token string">"MyApp User"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string-property property">"resources"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"dashboard"</span><span class="token punctuation">,</span> <span class="token string-property property">"id"</span><span class="token operator">:</span> <span class="token string">"0f0c12de-6bf7-48e0-be5e-27e8a08c67de"</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string-property property">"rls"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string-property property">"clause"</span><span class="token operator">:</span> <span class="token string">"customer_id=4"</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-EmbeddingSupersetdashboardsinyourReactapplication/img/EmbeddingSupersetdashboardsinyourReactapplication_5.png" />
<h1 id="클라이언트-앱-react-측-코드" tabindex="-1"><a class="header-anchor" href="#클라이언트-앱-react-측-코드" aria-hidden="true">#</a> 클라이언트 앱 (React) 측 코드</h1>
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
<p>아래는 클라이언트 측에서 슈퍼셋 대시보드를 &quot;임베드&quot;하는 데 필요한 코드 스니펫입니다. 대시보드는 DOM에 사용 가능한 iframe에 임베드될 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> embedDashboard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@superset-ui/embedded-sdk"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchGuestTokenFromBackend</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">embedDashboard</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"abcede-ghifj-xyz"</span><span class="token punctuation">,</span>  <span class="token comment">// 슈퍼셋 임베딩 UI에서 제공</span>
    <span class="token literal-property property">supersetDomain</span><span class="token operator">:</span> <span class="token string">"https://localhost:8088"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">mountPoint</span><span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"superset-container"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// iframe이 렌더링될 HTML 요소</span>
    <span class="token function-variable function">fetchGuestToken</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> token<span class="token punctuation">,</span>
    <span class="token literal-property property">dashboardUiConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">hideTitle</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>fetchGuestTokenFromBackend 함수의 구현에 대한 플로우 다이어그램은 위의 이미지를 참고해주세요.</p>
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
<h1 id="중요한-참고사항" tabindex="-1"><a class="header-anchor" href="#중요한-참고사항" aria-hidden="true">#</a> 중요한 참고사항</h1>
<p>RLS 필터링이 작동하지 않는다면, 동일 브라우저에서 다른 사용자가 로그인되어 있는지 확인해주세요. 저희는 동일 브라우저에서 Superset 관리 도구와 React 앱을 함께 열고 있었는데, 어떤 이유 때문에 RLS 필터가 작동하지 않았습니다. Superset 관리 도구에서 로그아웃 한 후에 React 앱의 RLS 필터가 작동하기 시작했습니다.</p>
</div></template>
