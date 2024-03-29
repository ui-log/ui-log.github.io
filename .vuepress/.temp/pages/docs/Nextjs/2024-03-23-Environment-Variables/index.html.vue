<template><div><h1 id="환경-변수" tabindex="-1"><a class="header-anchor" href="#환경-변수" aria-hidden="true">#</a> 환경 변수</h1>
<p>Next.js에는 환경 변수를 내장 지원하여 다음을 수행할 수 있습니다:</p>
<ul>
<li>.env.local을 사용하여 환경 변수 로드</li>
<li>NEXT<em>PUBLIC</em>로 접두사를 붙여 브라우저용으로 환경 변수 번들링</li>
</ul>
<h2 id="환경-변수-로드" tabindex="-1"><a class="header-anchor" href="#환경-변수-로드" aria-hidden="true">#</a> 환경 변수 로드</h2>
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
<p>Next.js에서는 .env.local에서 환경 변수를 process.env로 로드할 수 있는 내장 지원이 제공됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">DB_HOST</span> <span class="token operator">=</span> localhost<span class="token punctuation">;</span>
<span class="token constant">DB_USER</span> <span class="token operator">=</span> myuser<span class="token punctuation">;</span>
<span class="token constant">DB_PASS</span> <span class="token operator">=</span> mypassword<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이를 통해 process.env.DB_HOST, process.env.DB_USER, 그리고 process.env.DB_PASS가 자동으로 Node.js 환경으로 로드되어 Next.js 데이터 가져오기 메서드와 API 라우트에서 사용할 수 있게 됩니다.</p>
<p>예를 들어, getStaticProps를 사용하는 방법은:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">await</span> myDB<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_HOST</span><span class="token punctuation">,</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_USER</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DB_PASS</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="다른-변수-참조하기" tabindex="-1"><a class="header-anchor" href="#다른-변수-참조하기" aria-hidden="true">#</a> 다른 변수 참조하기</h3>
<p>Next.js는 .env* 파일 안에서 $를 사용하여 다른 변수를 참조하는 변수를 자동으로 확장해줍니다. 이를 통해 다른 비밀을 참조할 수 있습니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">TWITTER_USER</span><span class="token operator">=</span>nextjs
<span class="token constant">TWITTER_URL</span><span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>twitter<span class="token punctuation">.</span>com<span class="token operator">/</span>$<span class="token constant">TWITTER_USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 예시에서 process.env.TWITTER_URL은 https://twitter.com/nextjs로 설정됩니다.</p>
<blockquote>
<p>알아두면 좋은 사실: 실제 값에 $가 포함된 변수를 사용해야 하는 경우에는 $로 이스케이프 처리해야 합니다.</p>
</blockquote>
<h2 id="브라우저용-환경-변수-번들링" tabindex="-1"><a class="header-anchor" href="#브라우저용-환경-변수-번들링" aria-hidden="true">#</a> 브라우저용 환경 변수 번들링</h2>
<p>NEXT<em>PUBLIC</em>로 시작하지 않는 환경 변수는 Node.js 환경에서만 사용할 수 있으며, 이는 브라우저에서 접근할 수 없다는 것을 의미합니다(클라이언트는 다른 환경에서 실행됨).</p>
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
<p>환경 변수 값을 브라우저에서 접근할 수 있도록 하려면, Next.js에서 해당 값을 &quot;inline&quot;하여 js 번들에 빌드 시간에 삽입하여 클라이언트에 전달하면 됩니다. 이때 process.env.[변수]의 모든 참조를 하드 코딩된 값으로 대체합니다. 이를 통해 수행하려면, 변수명 앞에 NEXT<em>PUBLIC</em>를 접두어로 사용하면 됩니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">NEXT_PUBLIC_ANALYTICS_ID</span> <span class="token operator">=</span> abcdefghijk<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이렇게 하면 Next.js가 Node.js 환경에서 process.env.NEXT_PUBLIC_ANALYTICS_ID를 해당 값을 지정한 환경으로 변경하도록 하여 코드 어디에서든 사용할 수 있게 됩니다. 이는 브라우저로 보내는 모든 JavaScript에 인라인 처리될 것입니다.</p>
<blockquote>
<p>참고: 빌드 후 앱은 이러한 환경 변수의 변경에 더 이상 반응하지 않습니다. 예를 들어, 헤로쿠 파이프라인을 사용하여 한 환경에서 빌드된 슬러그를 다른 환경으로 변경하거나, 단일 도커 이미지를 여러 환경에 배포하는 경우, 모든 NEXT<em>PUBLIC</em> 변수는 빌드 시간에 평가된 값으로 동결되므로, 프로젝트 빌드 시 적절히 설정해야 합니다. 런타임 환경 값에 액세스해야 하는 경우, 클라이언트에 제공하기 위해 독자적인 API 설정해야 하며(필요시 또는 초기화 동안), 실행 환경 값을 제공해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> setupAnalyticsService <span class="token keyword">from</span> <span class="token string">"../lib/my-analytics-service"</span><span class="token punctuation">;</span>

<span class="token comment">// 'NEXT_PUBLIC_ANALYTICS_ID'은 앞에 'NEXT_PUBLIC_'이 붙어 있기 때문에 여기서 사용할 수 있습니다.</span>
<span class="token comment">// 빌드 시간에 `setupAnalyticsService('abcdefghijk')`으로 변환될 것입니다.</span>
<span class="token function">setupAnalyticsService</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_ANALYTICS_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">HomePage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HomePage<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>동적 조회는 인라인으로 처리되지 않습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 이 부분은 변수를 사용하기 때문에 인라인으로 처리되지 않습니다.</span>
<span class="token keyword">const</span> varName <span class="token operator">=</span> <span class="token string">"NEXT_PUBLIC_ANALYTICS_ID"</span><span class="token punctuation">;</span>
<span class="token function">setupAnalyticsService</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">[</span>varName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 이 부분은 변수를 사용하기 때문에 인라인으로 처리되지 않습니다.</span>
<span class="token keyword">const</span> env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">;</span>
<span class="token function">setupAnalyticsService</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token constant">NEXT_PUBLIC_ANALYTICS_ID</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="런타임-환경-변수" tabindex="-1"><a class="header-anchor" href="#런타임-환경-변수" aria-hidden="true">#</a> 런타임 환경 변수</h3>
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
<p>Next.js는 빌드 시간과 런타임 환경 변수를 모두 지원할 수 있어요.</p>
<p>기본적으로 환경 변수는 서버에서만 사용할 수 있어요. 브라우저에 환경 변수를 노출하려면 NEXT<em>PUBLIC</em>로 접두사를 붙여야 해요. 하지만, 이러한 공개 환경 변수들은 next build 중에 JavaScript 번들로 인라인 될 거에요.</p>
<p>런타임 환경 변수를 읽기 위해서는 getServerSideProps를 사용하거나 App Router를 점진적으로 도입하는 것을 추천해요. App Router를 사용하면 동적 렌더링 중에 서버에서 환경 변수를 안전하게 읽을 수 있어요. 이를 통해 서로 다른 값으로 여러 환경을 거치면서 단일 도커 이미지를 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_noStore <span class="token keyword">as</span> noStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/cache"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">noStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// cookies(), headers() 같은 다이내믹 함수들</span>
  <span class="token comment">// 또한 동적 렌더링에 참여할 거에요, 즉</span>
  <span class="token comment">// 이 환경 변수는 런타임에서 평가될 거에요</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MY_VALUE</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>좋은 정보입니다:</p>
<ul>
<li>레지스터 함수를 사용하여 서버 시작 시 코드를 실행할 수 있습니다.</li>
<li>단독 출력 모드와 호환되지 않기 때문에 runtimeConfig 옵션을 사용하는 것을 권장하지 않습니다. 대신 App Router를 점진적으로 채택하는 것을 권장합니다.</li>
</ul>
<h2 id="기본-환경-변수" tabindex="-1"><a class="header-anchor" href="#기본-환경-변수" aria-hidden="true">#</a> 기본 환경 변수</h2>
<p>보통 .env.local 파일 하나만 필요합니다. 그러나 개발 (next dev) 또는 프로덕션 (next start) 환경에 대한 일부 기본값을 추가하고 싶을 때가 있습니다.</p>
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
<p>Next.js는 .env (모든 환경), .env.development (개발 환경) 및 .env.production (프로덕션 환경)에서 기본값을 설정할 수 있게 해줍니다.</p>
<p>.env.local은 항상 설정된 기본값을 재정의합니다.</p>
<blockquote>
<p>참고: .env, .env.development 및 .env.production 파일은 기본값을 정의하므로 귀하의 저장소에 포함되어야 합니다. .env*.local은 .gitignore에 추가되어야 합니다. .env.local에는 비밀 정보를 저장할 수 있습니다.</p>
</blockquote>
<h2 id="vercel에서-환경-변수" tabindex="-1"><a class="header-anchor" href="#vercel에서-환경-변수" aria-hidden="true">#</a> Vercel에서 환경 변수</h2>
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
<p>Next.js 애플리케이션을 Vercel에 배포할 때는 프로젝트 설정에서 환경 변수를 구성할 수 있어요.</p>
<p>개발에 사용되는 모든 종류의 환경 변수를 거기에서 설정해야 해요. 그래서 그 환경 변수는 로컬 기기로 다운로드해서 사용할 수 있어요.</p>
<p>만약 개발 환경 변수를 설정했다면, 다음 명령어를 사용하여 그것을 .env.local 파일로 가져와서 로컬 기기에서 사용할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>vercel env pull <span class="token punctuation">.</span>env<span class="token punctuation">.</span>local
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
<blockquote>
<p>좋은 정보: Next.js 애플리케이션을 Vercel에 배포할 때, .env* 파일에 있는 환경 변수는 Edge Runtime에서 사용할 수 없습니다.
이름이 NEXT<em>PUBLIC</em>로 시작하는 변수를 제외하고는 모든 환경 변수가 사용 가능합니다. 모든 환경 변수를 프로젝트 설정에서 관리하는 것을 강력히 권장합니다.</p>
</blockquote>
<h2 id="테스트-환경-변수" tabindex="-1"><a class="header-anchor" href="#테스트-환경-변수" aria-hidden="true">#</a> 테스트 환경 변수</h2>
<p>개발 및 프로덕션 환경 외에도 테스트라는 3번째 옵션이 있습니다. 개발 또는 프로덕션 환경을 위한 기본값을 설정할 수 있는 것처럼, 테스트 환경을 위한 .env.test 파일도 설정할 수 있습니다(이는 이전 두 가지와는 다르게 일반적이지 않습니다). Next.js는 테스트 환경에서 .env.development 또는 .env.production에서 환경 변수를 로드하지 않습니다.</p>
<p>이는 jest 또는 cypress와 같은 도구로 테스트를 실행할 때에만 특정 환경 변수를 설정해야 할 때 유용합니다. NODE_ENV가 test로 설정되어 있으면 테스트 기본값이 로드됩니다. 테스트 도구에서 자동으로 처리하기 때문에 수동으로 설정할 필요는 없지만 필요한 경우 사용할 수 있습니다.</p>
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
<p>테스트 환경과 개발 그리고 프로덕션 간에 주의할 점이 하나 있어요: .env.local 파일은 로드되지 않아요. 모든 테스트 결과가 모두 동일하도록 예상하기 때문에 .env.local은 무시돼요. 그렇게 함으로써 각 실행에서 동일한 환경 기본값이 사용되며 기본 설정을 재정의하려는 .env.local이 무시되도록 되어 있어요.</p>
<blockquote>
<p>기억해 두면 좋을 점: 기본 환경 변수와 비슷하게, .env.test 파일은 저장소에 포함되어야 해요. 그러나 .env.test.local은 포함하지 말아야 해요. .env*.local은 .gitignore를 통해 무시되어야 하는 파일들이에요.</p>
</blockquote>
<p>유닛 테스트를 실행하는 동안, @next/env 패키지의 loadEnvConfig 함수를 활용하여 Next.js가 환경 변수를 로드하는 방식과 동일하게 환경 변수를 로드할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 아래 코드는 Jest 전역 설정 파일 또는 테스트 설정과 유사한 파일에서 사용할 수 있어요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loadEnvConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@next/env"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> projectDir <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">loadEnvConfig</span><span class="token punctuation">(</span>projectDir<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<h2 id="환경-변수-로드-순서" tabindex="-1"><a class="header-anchor" href="#환경-변수-로드-순서" aria-hidden="true">#</a> 환경 변수 로드 순서</h2>
<p>환경 변수는 변수를 찾은 후 다음 위치에서 차례로 조회되며, 변수가 찾아지면 검색을 중지합니다.</p>
<ul>
<li>process.env</li>
<li>.env.$(NODE_ENV).local</li>
<li>.env.local (NODE_ENV가 test인 경우 확인되지 않음.)</li>
<li>.env.$(NODE_ENV)</li>
<li>.env</li>
</ul>
<p>예를 들어, NODE_ENV가 development이고 .env.development.local 및 .env에 변수를 정의한 경우 .env.development.local의 값을 사용합니다.</p>
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
<p>좋은 정보: NODE_ENV에 허용된 값은 production, development 및 test입니다.</p>
</blockquote>
<h2 id="좋은-정보" tabindex="-1"><a class="header-anchor" href="#좋은-정보" aria-hidden="true">#</a> 좋은 정보</h2>
<ul>
<li>만약 /src 디렉토리를 사용 중이라면, .env.* 파일은 프로젝트의 루트에 유지되어야 합니다.</li>
<li>환경 변수 NODE_ENV가 할당되지 않은 경우, Next.js는 next dev 명령을 실행할 때 자동으로 development를 할당하거나, 다른 모든 명령에 대해 production을 할당합니다.</li>
</ul>
<h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
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
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td>v9.4.0</td>
<td>Support <code v-pre>.env</code> and <code v-pre>NEXT_PUBLIC_</code> introduced.</td>
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
