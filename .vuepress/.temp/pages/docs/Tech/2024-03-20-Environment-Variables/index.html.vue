<template><div><h1 id="환경-변수" tabindex="-1"><a class="header-anchor" href="#환경-변수" aria-hidden="true">#</a> 환경 변수</h1>
<p>Next.js에는 환경 변수를 내장 지원하여 다음을 수행할 수 있습니다:</p>
<ul>
<li>.env.local을 사용하여 환경 변수 로드하기</li>
<li>NEXT<em>PUBLIC</em>로 접두사를 붙여 브라우저용 환경 변수 번들링</li>
</ul>
<h2 id="환경-변수-로드하기" tabindex="-1"><a class="header-anchor" href="#환경-변수-로드하기" aria-hidden="true">#</a> 환경 변수 로드하기</h2>
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
<p>Next.js는 .env.local에서 환경 변수를 process.env로 로드하는 내장 지원 기능이 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">DB_HOST</span> <span class="token operator">=</span> localhost<span class="token punctuation">;</span>
<span class="token constant">DB_USER</span> <span class="token operator">=</span> myuser<span class="token punctuation">;</span>
<span class="token constant">DB_PASS</span> <span class="token operator">=</span> mypassword<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>참고: Next.js는 .env* 파일에서 여러 줄 변수도 지원합니다:</p>
</blockquote>
<h1 id="env-local" tabindex="-1"><a class="header-anchor" href="#env-local" aria-hidden="true">#</a> .env.local</h1>
<h1 id="줄-바꿈으로-작성-가능" tabindex="-1"><a class="header-anchor" href="#줄-바꿈으로-작성-가능" aria-hidden="true">#</a> 줄 바꿈으로 작성 가능</h1>
<p>PRIVATE_KEY=&quot;-----BEGIN RSA PRIVATE KEY-----
...
Kh9NV...
...
-----END DSA PRIVATE KEY-----&quot;</p>
<h1 id="또는-이스케이프-문자-n을-이용하여-작성-가능" tabindex="-1"><a class="header-anchor" href="#또는-이스케이프-문자-n을-이용하여-작성-가능" aria-hidden="true">#</a> 또는 이스케이프 문자 <code v-pre>\n</code>을 이용하여 작성 가능</h1>
<p>PRIVATE_KEY=&quot;-----BEGIN RSA PRIVATE KEY-----\nKh9NV...\n-----END DSA PRIVATE KEY-----&quot;</p>
<blockquote>
<p>참고: /src 폴더를 사용하는 경우, Next.js는 .env 파일을 부모 폴더에서만 로드하며 /src 폴더에서는 로드하지 않습니다. 이렇게 함으로써 process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASS가 Node.js 환경으로 자동으로 로드되어 Route Handlers에서 사용할 수 있습니다.</p>
</blockquote>
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
<p>예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token constant">GET</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">await</span> myDB<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_HOST</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_USER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_PASS</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="다른-변수-참조" tabindex="-1"><a class="header-anchor" href="#다른-변수-참조" aria-hidden="true">#</a> 다른 변수 참조</h3>
<p>Next.js는 .env* 파일 내에서 $를 사용하여 다른 변수를 참조하는 변수를 자동으로 확장합니다. 이를 통해 다른 시크릿을 참조할 수 있습니다. 예를 들어:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">TWITTER_USER</span><span class="token operator">=</span>nextjs
<span class="token constant">TWITTER_URL</span><span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>twitter<span class="token punctuation">.</span>com<span class="token operator">/</span>$<span class="token constant">TWITTER_USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예시에서 process.env.TWITTER_URL은 https://twitter.com/nextjs로 설정됩니다.</p>
<blockquote>
<p>알아두면 좋은 사실: 만약 실제 값에 $가 포함된 변수를 사용해야 한다면, 이를 이스케이핑 해야 합니다. 예를 들어 $.</p>
</blockquote>
<h2 id="브라우저용-환경-변수-번들링하기" tabindex="-1"><a class="header-anchor" href="#브라우저용-환경-변수-번들링하기" aria-hidden="true">#</a> 브라우저용 환경 변수 번들링하기</h2>
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
<p>Non-NEXT<em>PUBLIC</em> 환경 변수는 Node.js 환경에서만 사용할 수 있습니다. 이는 브라우저에서 접근할 수 없다는 것을 의미합니다 (클라이언트는 다른 환경에서 실행됩니다).<br>
브라우저에서 환경 변수의 값을 사용할 수 있도록 하려면, Next.js가 빌드 시에 js 번들에 값을 &quot;inline&quot; 할 수 있습니다. 이는 process.env.[변수]에 대한 모든 참조를 하드코딩된 값으로 대체하여 클라이언트에 전달됩니다. 이를 수행하려면 변수를 NEXT<em>PUBLIC</em>로 접두사로 붙이기만 하면 됩니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NEXT_PUBLIC_ANALYTICS_ID</span> <span class="token operator">=</span> abcdefghijk<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 하면 Next.js가 Node.js 환경의 process.env.NEXT_PUBLIC_ANALYTICS_ID에 대한 모든 참조를 다른 환경에서 next build를 실행하는 환경의 값으로 대체하여 코드에서 어디서든 사용할 수 있게 합니다. 이 값은 브라우저로 전송되는 JavaScript에 inline 될 것입니다.</p>
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
<blockquote>
<p>안내: 앱이 구축되면 이 환경 변수에 대한 변경에 더 이상 응답하지 않습니다. 예를 들어, 하나의 환경에서 빌드된 슬러그를 다른 환경으로 프로모션하기 위해 Heroku 파이프라인을 사용하거나 단일 Docker 이미지를 여러 환경으로 배포하는 경우, 모든 NEXT<em>PUBLIC</em> 변수는 빌드 시 평가된 값으로 고정되어 있습니다. 따라서 이러한 값들은 프로젝트가 빌드될 때 적절히 설정해야 합니다. 실행 환경 값에 액세스가 필요하다면, 클라이언트에 제공하기 위해 직접 API를 설정해야 합니다(요청 시 또는 초기화 중).</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> setupAnalyticsService <span class="token keyword">from</span> <span class="token string">"../lib/my-analytics-service"</span><span class="token punctuation">;</span>

<span class="token comment">// 'NEXT_PUBLIC_ANALYTICS_ID'는 여기서 사용할 수 있습니다(S 'NEXT_PUBLIC_'로 접두사가 붙어 있기 때문에).</span>
<span class="token comment">// 빌드할 때 'abcdefghijk'로 변환될 것입니다: `setupAnalyticsService('abcdefghijk')`.</span>
<span class="token function">setupAnalyticsService</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_ANALYTICS_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HomePage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>동적 조회는 인라인으로 처리되지 않음에 유의하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이는 변수를 사용하기 때문에 인라인으로 처리되지 않습니다</span>
<span class="token keyword">const</span> varName <span class="token operator">=</span> <span class="token string">"NEXT_PUBLIC_ANALYTICS_ID"</span><span class="token punctuation">;</span>
<span class="token function">setupAnalyticsService</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">[</span>varName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 이는 변수를 사용하기 때문에 인라인으로 처리되지 않습니다</span>
<span class="token keyword">const</span> env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">;</span>
<span class="token function">setupAnalyticsService</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_ANALYTICS_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h3 id="런타임-환경-변수" tabindex="-1"><a class="header-anchor" href="#런타임-환경-변수" aria-hidden="true">#</a> 런타임 환경 변수</h3>
<p>Next.js는 빌드 시간 및 런타임 환경 변수를 모두 지원할 수 있습니다.
기본적으로 환경 변수는 서버에서만 사용할 수 있습니다. 브라우저에 환경 변수를 노출하려면 NEXT<em>PUBLIC</em>로 접두사를 붙여야 합니다. 그러나 이러한 공개 환경 변수는 다음 빌드 중에 JavaScript 번들에 인라인 처리됩니다.
런타임 환경 변수를 읽기 위해서는 getServerSideProps를 사용하거나 App Router를 점진적으로 도입하는 것이 좋습니다. App Router를 사용하면 동적 렌더링 중 서버에서 환경 변수를 안전하게 읽어올 수 있습니다. 이를 통해 서로 다른 값으로 여러 환경을 통해 확장할 수 있는 하나의 도커 이미지를 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_noStore <span class="token keyword">as</span> noStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">noStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// cookies(), headers(), and other dynamic functions</span>
  <span class="token comment">// will also opt into dynamic rendering, meaning</span>
  <span class="token comment">// this env variable is evaluated at runtime</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MY_VALUE</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>알아두면 좋은 점:</p>
<ul>
<li>register 함수를 사용하여 서버 시작 시 코드를 실행할 수 있습니다.</li>
<li>standalone 출력 모드와 호환되지 않는 runtimeConfig 옵션 사용을 권장하지 않습니다. 대신 App Router를 점진적으로 채택하는 것을 권장합니다.</li>
</ul>
<h2 id="기본-환경-변수" tabindex="-1"><a class="header-anchor" href="#기본-환경-변수" aria-hidden="true">#</a> 기본 환경 변수```</h2>
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
<p>보편적으로는 .env.local 파일 하나만 필요합니다. 하지만 때로는 개발(다음 dev) 또는 프로덕션(다음 start) 환경에 일부 기본값을 추가하고 싶을 수도 있습니다.
Next.js는 .env(모든 환경), .env.development(개발 환경) 및 .env.production(프로덕션 환경)에서 기본값을 설정할 수 있습니다.
.env.local은 항상 설정된 기본값을 덮어씁니다.</p>
<blockquote>
<p>알아두면 좋은 점: .env, .env.development 및 .env.production 파일은 기본값을 정의하므로 리포지토리에 포함되어야 합니다. .env*.local은 무시되어야 하는 파일이므로 .gitignore에 추가해야 합니다. .env.local에는 비밀 정보를 저장할 수 있습니다.</p>
</blockquote>
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
<h2 id="vercel에서의-환경-변수" tabindex="-1"><a class="header-anchor" href="#vercel에서의-환경-변수" aria-hidden="true">#</a> Vercel에서의 환경 변수</h2>
<p>Next.js 애플리케이션을 Vercel에 배포할 때, 프로젝트 설정에서 환경 변수를 구성할 수 있습니다.
개발 환경에서 사용되는 모든 종류의 환경 변수는 그곳에서 구성해야 합니다. 심지어 로컬 장치로 다운로드할 수 있는 개발용 환경 변수도 그렇습니다.
개발 환경 변수를 구성했다면, 아래 명령을 사용하여 로컬 기기에서 사용할 .env.local로 가져올 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vercel env pull <span class="token punctuation">.</span>env<span class="token punctuation">.</span>local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>좋아요: Next.js 애플리케이션을 Vercel에 배포할 때, .env* 파일에 있는 환경 변수는 Edge Runtime에서 사용할 수 없습니다. 이 환경 변수의 이름이 NEXT<em>PUBLIC</em>으로 시작하지 않는 한요. 모든 환경 변수를 사용할 수 있도록 하려면 Project Settings에서 환경 변수를 관리하는 것이 좋습니다.</p>
</blockquote>
<h2 id="테스트-환경-변수" tabindex="-1"><a class="header-anchor" href="#테스트-환경-변수" aria-hidden="true">#</a> 테스트 환경 변수</h2>
<p>개발 및 프로덕션 환경 이외에도 3번째 옵션으로 테스트 환경이 있습니다. 개발 또는 프로덕션 환경에 기본값을 설정할 수 있는 것처럼, 테스트 환경을 위해 .env.test 파일에 동일한 작업을 할 수 있습니다 (이는 이전 두 환경보다는 일반적이지 않습니다). 테스트 환경에서는 Next.js가 .env.development나 .env.production에서 환경 변수를 로드하지 않습니다.```</p>
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
<p>이 기능은 jest나 cypress와 같은 도구를 사용하여 특정 환경 변수를 테스트 목적으로만 설정해야 할 때 유용합니다. NODE_ENV가 test로 설정되면 테스트 기본 값이 로드됩니다. 그러나 보통이 작업을 직접하지 않아도 테스트 도구가 대신 처리할 것이므로 걱정하지 않아도 됩니다.
테스트 환경과 개발 및 프로덕션 간에 고려해야 할 작은 차이가 있습니다: .env.local이 로드되지 않습니다. 테스트가 모두 같은 결과를 생성할 것으로 예상하기 때문입니다. 이렇게 하면 .env.local이 무시되어 각 테스트 실행이 .env.local을 무시하고 동일한 환경 기본값을 사용하게 되며, 이는 기본 설정을 덮어쓰는 목적으로 사용되는 .env.local 파일입니다.</p>
<blockquote>
<p>알아두세요: 기본 환경 변수와 비슷하게 .env.test 파일은 리포지토리에 포함되어야 하지만 .env.test.local은 포함되지 않아야 합니다. 왜냐하면 .env*.local은 .gitignore를 통해 무시되어야 하기 때문입니다.
단위 테스트를 실행하는 동안 @next/env 패키지의 loadEnvConfig 함수를 활용하여 Next.js가 환경 변수를 로드하는 방법과 동일하게 환경 변수를 로드할 수 있습니다.</p>
</blockquote>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 아래 내용은 Jest 글로벌 설정 파일 또는 테스트 설정에 사용할 수 있습니다</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loadEnvConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/env"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> projectDir <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">loadEnvConfig</span><span class="token punctuation">(</span>projectDir<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="환경-변수-로드-순서" tabindex="-1"><a class="header-anchor" href="#환경-변수-로드-순서" aria-hidden="true">#</a> 환경 변수 로드 순서</h2>
<p>환경 변수는 다음 위치에서 찾아집니다. 변수를 찾으면 중지됩니다.</p>
<ul>
<li>process.env</li>
<li>.env.$(NODE_ENV).local</li>
<li>.env.local (NODE_ENV가 test인 경우 확인하지 않음.)</li>
<li>.env.$(NODE_ENV)</li>
<li>.env</li>
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
<p>예를 들어, NODE_ENV 값이 development로 설정되어 있고 .env.development.local과 .env 두 파일 모두에서 변수를 정의한다면 .env.development.local 파일의 값이 사용됩니다.</p>
<blockquote>
<p>알아 두면 좋은 점: NODE_ENV에 허용된 값은 production, development, test입니다.</p>
</blockquote>
<h2 id="알아-두면-좋은-점" tabindex="-1"><a class="header-anchor" href="#알아-두면-좋은-점" aria-hidden="true">#</a> 알아 두면 좋은 점</h2>
<ul>
<li>만일 /src 디렉토리를 사용 중이라면, .env.* 파일들은 프로젝트의 루트에 위치해야 합니다.</li>
<li>환경 변수 NODE_ENV에 값이 할당되어 있지 않다면, Next.js는 next dev 명령을 실행할 때 자동으로 development를 할당하거나 다른 모든 명령에 대해 production을 할당합니다.</li>
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
<h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v9.4.0</code></td>
<td><code v-pre>.env</code> 및 <code v-pre>NEXT_PUBLIC_</code> 지원이 추가되었습니다.</td>
</tr>
</tbody>
</table>
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
