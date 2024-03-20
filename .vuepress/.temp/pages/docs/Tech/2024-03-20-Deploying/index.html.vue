<template><div><h1 id="nextjs-14-사이트-배포-방법-정리" tabindex="-1"><a class="header-anchor" href="#nextjs-14-사이트-배포-방법-정리" aria-hidden="true">#</a> Nextjs 14 사이트 배포 방법 정리</h1>
<p>축하합니다, 이제 프로덕션 환경으로 배포할 때입니다.
Vercel을 사용하여 Next.js를 관리되는 상태로 배포하거나 Node.js 서버, Docker 이미지 또는 정적 HTML 파일에 직접 호스팅할 수 있습니다. next start를 사용하여 배포할 때는 모든 Next.js 기능이 지원됩니다.</p>
<h2 id="프로덕션-빌드" tabindex="-1"><a class="header-anchor" href="#프로덕션-빌드" aria-hidden="true">#</a> 프로덕션 빌드</h2>
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
<p><code v-pre>next build</code>를 실행하면 프로덕션을 위한 최적화된 버전의 애플리케이션이 생성됩니다. HTML, CSS 및 JavaScript 파일이 페이지에 기반하여 만들어집니다. JavaScript는 컴파일되고 브라우저 번들은 Next.js 컴파일러를 사용하여 최상의 성능을 달성하고 모든 최신 브라우저를 지원합니다. Next.js는 관리 및 자체 호스팅된 Next.js에서 사용하는 표준 배포 출력을 생성합니다. 이렇게 함으로써 배포 방법에 관계없이 모든 기능이 지원됨을 보장합니다. 다음 주요 버전에서는이 출력을 빌드 출력 API 사양으로 변환할 것입니다.</p>
<h2 id="vercel을-사용한-managed-next-js" tabindex="-1"><a class="header-anchor" href="#vercel을-사용한-managed-next-js" aria-hidden="true">#</a> Vercel을 사용한 Managed Next.js</h2>
<p>Next.js의 창조자이자 유지보수자 인 Vercel은 Next.js 애플리케이션을 위한 관리 인프라와 개발자 경험 플랫폼을 제공합니다.</p>
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
<p>벌셀로 배포하는 것은 구성이 필요 없고 전 세계적으로 확장 가능성, 가용성 및 성능을 향상시키는 추가 기능을 제공합니다. 그러나 자체 호스팅할 때도 모든 Next.js 기능이 지원됩니다.
자세히 알아보기: Vercel에서 Next.js
무료로 템플릿을 배포하여
시도해 보세요.</p>
<h2 id="자체-호스팅" tabindex="-1"><a class="header-anchor" href="#자체-호스팅" aria-hidden="true">#</a> 자체 호스팅</h2>
<p>Next.js를 자체 호스팅하는 방법은 세 가지가 있습니다.</p>
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
<li>노드.js 서버</li>
<li>도커 컨테이너</li>
<li>정적 익스포트</li>
</ul>
<h3 id="node-js-서버" tabindex="-1"><a class="header-anchor" href="#node-js-서버" aria-hidden="true">#</a> Node.js 서버</h3>
<p>Next.js는 노드.js를 지원하는 모든 호스팅 공급업체에 배포할 수 있습니다. package.json에 &quot;build&quot; 및 &quot;start&quot; 스크립트가 있는지 확인하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span> <span class="token string">"next dev"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"next build"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"start"</span><span class="token operator">:</span> <span class="token string">"next start"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<p>그런 다음 npm run build를 실행하여 애플리케이션을 빌드합니다. 마지막으로 npm run start를 실행하여 Node.js 서버를 시작합니다. 이 서버는 모든 Next.js 기능을 지원합니다.</p>
<h3 id="도커-이미지" tabindex="-1"><a class="header-anchor" href="#도커-이미지" aria-hidden="true">#</a> 도커 이미지</h3>
<p>Next.js는 Docker 컨테이너를 지원하는 호스팅 제공업체에 배포할 수 있습니다. Kubernetes와 같은 컨테이너 오케스트레이터에 배포하거나, 클라우드 제공업체의 컨테이너 내에서 실행할 때 이 접근 방식을 사용할 수 있습니다.</p>
<ul>
<li>기계에 Docker를 설치합니다.</li>
<li>당사의 예제(또는 다중 환경 예제)를 복제합니다.</li>
<li>컨테이너를 빌드합니다: docker build -t nextjs-docker .</li>
<li>컨테이너를 실행합니다: docker run -p 3000:3000 nextjs-docker</li>
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
<p>Next.js를 통해 Docker를 사용하면 모든 Next.js 기능을 지원합니다.</p>
<h3 id="정적-html-내보내기" tabindex="-1"><a class="header-anchor" href="#정적-html-내보내기" aria-hidden="true">#</a> 정적 HTML 내보내기</h3>
<p>Next.js는 정적 사이트 또는 단일 페이지 응용 프로그램(SPA)으로 시작한 다음 나중에 선택하여 서버가 필요한 기능을 사용할 수 있게 업그레이드할 수 있도록 합니다.
Next.js는 정적 내보내기를 지원하기 때문에 HTML/CSS/JS 정적 자산을 제공할 수 있는 모든 웹 서버에 배포하고 호스팅할 수 있습니다. 이에는 AWS S3, Nginx 또는 Apache와 같은 도구가 포함됩니다.</p>
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
<p>정적 익스포트로 실행하면 서버를 필요로 하는 Next.js 기능을 지원하지 않습니다. 자세한 내용은 참고하세요.</p>
<blockquote>
<p>참고사항:
정적 익스포트로는 서버 구성 요소를 지원합니다.</p>
</blockquote>
<h2 id="특징" tabindex="-1"><a class="header-anchor" href="#특징" aria-hidden="true">#</a> 특징</h2>
<h3 id="이미지-최적화" tabindex="-1"><a class="header-anchor" href="#이미지-최적화" aria-hidden="true">#</a> 이미지 최적화</h3>
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
<p>이미지 최적화는 next/image를 통해 제로 구성으로 자체 호스팅되며 next start를 사용하여 배포 시에 작동합니다. 이미지를 최적화하는 별도의 서비스를 선호하는 경우 이미지 로더를 구성할 수 있습니다.
이미지 최적화는 next.config.js에서 사용자 정의 이미지 로더를 정의하여 정적 익스포트와 함께 사용할 수 있습니다. 이미지가 빌드 중이 아닌 런타임에서 최적화됨을 주의하세요.</p>
<blockquote>
<p>잘 알아두세요:
자체 호스팅 시, 프로젝트 디렉터리에서 npm install sharp 명령을 실행하여 제품 환경에서 더 좋은 성능의 이미지 최적화를 위해 sharp를 설치하는 것이 좋습니다. Linux 플랫폼에서는 sharp가 과도한 메모리 사용을 방지하기 위해 추가 구성이 필요할 수 있습니다.
최적화된 이미지의 캐싱 동작 및 TTL 구성 방법에 대해 더 알아보세요.
이미지 최적화를 비활성화하고도 next/image의 기타 이점을 유지하고 싶다면 가능합니다. 예를 들어, 이미지를 별도로 최적화하는 경우도 있습니다.</p>
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
<p>미들웨어는 next start를 사용하여 배포할 때 구성 없이도 자체 호스팅되므로 사용하기 쉽습니다. 수신 요청에 액세스 권한이 필요하므로 정적 익스포트를 사용할 때는 지원되지 않습니다.
미들웨어는 응용 프로그램의 모든 라우트 또는 에셋 앞에서 실행될 수 있기 때문에 낮은 대기 시간이 보장되도록 사용 가능한 모든 Node.js API의 하위 집합인 런타임을 사용합니다. 이 런타임은 &quot;에지&quot;에서 실행할 필요가 없으며 단일 지역 서버에서 작동합니다. 미들웨어를 여러 지역에서 실행하려면 추가 구성과 인프라가 필요합니다.
만약 모든 Node.js API를 필요로 하는 로직(또는 외부 패키지 사용)을 추가하려면 해당 로직을 Server 구성요소로 이동시킬 수도 있습니다. 예를 들어, 헤더 확인 및 리다이렉팅이 가능합니다. 또한 next.config.js를 통해 헤더, 쿠키 또는 쿼리 매개변수를 사용하여 리디렉트 또는 리라이트할 수도 있습니다. 그렇지 않으면 사용자 정의 서버를 사용할 수도 있습니다.</p>
<h3 id="환경-변수" tabindex="-1"><a class="header-anchor" href="#환경-변수" aria-hidden="true">#</a> 환경 변수</h3>
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
<p>Next.js는 빌드 시간과 런타임 환경 변수를 모두 지원할 수 있어요.
기본적으로 환경 변수는 서버에서만 사용할 수 있어요. 브라우저에 환경 변수를 노출시키려면 NEXT<em>PUBLIC</em>로 접두어를 붙여야 해요. 하지만, 이러한 공개 환경 변수는 next build 중에 JavaScript 번들에 인라인으로 포함될 거에요.
런타임 환경 변수를 읽기 위해서는 getServerSideProps를 사용하거나 App Router를 점진적으로 도입하는 것이 좋아요. App Router를 사용하면 동적 렌더링 중에 서버에서 환경 변수를 안전하게 읽을 수 있어요. 이를 통해 값이 다른 여러 환경을 통해 승격될 수 있는 단일 Docker 이미지를 사용할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> unstable_noStore <span class="token keyword">as</span> noStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/cache'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">noStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// cookies(), headers() 등 다른 동적 함수도</span>
  <span class="token comment">// 동적 렌더링을 하도록 선택될 거에요.</span>
  <span class="token comment">// 이 환경 변수는 런타임에 평가돼요.</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MY_VALUE</span>
  <span class="token operator">...</span>
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
<blockquote>
<p>알아 두면 좋은 사항:
register 함수를 사용하여 서버 시작 시 코드를 실행할 수 있습니다.
standalone 출력 모드와 호환되지 않기 때문에 runtimeConfig 옵션을 사용하는 것을 권장하지 않습니다. 대신 App Router를 점진적으로 채택하는 것을 권장합니다.</p>
</blockquote>
<h3 id="캐싱과-isr" tabindex="-1"><a class="header-anchor" href="#캐싱과-isr" aria-hidden="true">#</a> 캐싱과 ISR</h3>
<p>Next.js는 응답, 생성된 정적 페이지, 빌드 출력 및 이미지, 글꼴, 스크립트와 같은 다른 정적 자산을 캐시할 수 있습니다.
ISR(Incremental Static Regeneration) 또는 App Router의 새로운 기능을 사용하여 페이지를 캐싱하고 재검증하는 경우, 동일한 공유 캐시를 사용합니다. 기본적으로 이 캐시는 Next.js 서버의 파일 시스템(디스크)에 저장됩니다. 이는 Pages와 App Router를 모두 사용하여 자체 호스팅할 때 자동으로 작동합니다.</p>
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
<p>Next.js 캐시 위치를 구성할 수 있습니다. 캐시된 페이지와 데이터를 영구 저장소에 유지하거나 Next.js 애플리케이션의 여러 컨테이너 또는 인스턴스 간에 캐시를 공유하려는 경우 설정할 수 있어요.</p>
<h4 id="자동-캐싱" tabindex="-1"><a class="header-anchor" href="#자동-캐싱" aria-hidden="true">#</a> 자동 캐싱</h4>
<ul>
<li>Next.js는 공용 객체의 Cache-Control 헤더를 public, max-age=31536000, immutable로 설정합니다. 변경할 수 없는 파일에는 SHA 해시가 파일명에 포함돼 있어서 안전하게 무기한 캐시할 수 있어요. 예를 들어 정적 이미지 가져오기입니다. 이미지의 TTL을 구성할 수 있어요.</li>
<li>증분적 정적 재생성(ISR)은 s-maxage: <code v-pre>&lt;getStaticProps에서 재검증 시간&gt;</code>, stale-while-revalidate의 Cache-Control 헤더를 설정합니다. 재검증 시간은 getStaticProps 함수에서 초 단위로 정의돼요. revalidate: false로 설정하면 기본적으로 일년을 캐시 지속 시간으로 설정돼요.</li>
<li>동적으로 렌더링된 페이지는 사용자별 데이터가 캐시되지 않도록 private, no-cache, no-store, max-age=0, must-revalidate의 Cache-Control 헤더를 설정합니다. 이는 앱 라우터와 페이지 라우터 모두 적용돼요. 이는 초안 모드를 포함한 것도 포함돼요.</li>
</ul>
<h4 id="정적-자산" tabindex="-1"><a class="header-anchor" href="#정적-자산" aria-hidden="true">#</a> 정적 자산</h4>
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
<p>만약 다른 도메인이나 CDN에 정적 자산을 호스팅하려면 next.config.js의 assetPrefix 구성을 사용할 수 있어요. Next.js는 JavaScript 또는 CSS 파일을 검색할 때 이 자산 접두사를 사용할 거예요. 자산을 다른 도메인으로 분리하는 것은 DNS 및 TLS 해결에 추가 시간이 소요된다는 단점이 있어요.
assetPrefix에 대해 더 알아보세요.</p>
<h3 id="캐싱-구성하기" tabindex="-1"><a class="header-anchor" href="#캐싱-구성하기" aria-hidden="true">#</a> 캐싱 구성하기</h3>
<p>기본적으로 생성된 캐시 자산은 메모리(defaults to 50mb)와 디스크에 저장될 거예요. 만약 Kubernetes와 같은 컨테이너 오케스트레이션 플랫폼을 사용하여 Next.js를 호스팅한다면, 각 팟에는 캐시의 복사본이 있을 거예요. 기본적으로 팟 간에 캐시가 공유되지 않기 때문에 오래된 데이터가 표시되는 것을 방지하기 위해 Next.js 캐시를 구성하여 캐시 핸들러를 제공하고 인메모리 캐싱을 비활성화할 수 있어요.</p>
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
<p>자체 호스팅할 때 ISR/Data Cache 위치를 구성하려면 next.config.js 파일에 사용자 지정 핸들러를 구성할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">cacheHandler</span><span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"./cache-handler.js"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cacheMaxMemorySize</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 기본 인-메모리 캐싱 비활성화</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 프로젝트 루트에 cache-handler.js 파일을 만듭니다. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">CacheHandler</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 지속 저장소와 같이 어디에 저장할 수 있습니다</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> data<span class="token punctuation">,</span> ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 지속 저장소와 같이 어디에 저장할 수 있습니다</span>
    cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> data<span class="token punctuation">,</span>
      <span class="token literal-property property">lastModified</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tags</span><span class="token operator">:</span> ctx<span class="token punctuation">.</span>tags<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">revalidateTag</span><span class="token punctuation">(</span><span class="token parameter">tag</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 캐시 내 모든 항목 반복</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> cache<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 값의 태그에 지정된 태그가 포함되어 있는 경우 해당 항목 삭제</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>value<span class="token punctuation">.</span>tags<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>tag<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>커스텀 캐시 핸들러를 사용하면 Next.js 애플리케이션을 호스팅하는 모든 pod에서 일관성을 유지할 수 있어요. 예를 들어 Redis나 AWS S3와 같은 곳에 캐시된 값을 저장할 수 있어요.</p>
<blockquote>
<p>알아 두면 좋은 사항:
revalidatePath는 캐시 태그 위에 편리한 레이어입니다. revalidatePath를 호출하면 제공된 페이지에 대해 특별한 기본 태그로 revalidateTag 함수를 호출할 거예요.</p>
</blockquote>
<h3 id="빌드-캐시" tabindex="-1"><a class="header-anchor" href="#빌드-캐시" aria-hidden="true">#</a> 빌드 캐시</h3>
<p>Next.js는 다음 빌드 중에 애플리케이션 버전을 식별하기 위해 ID를 생성해요. 동일한 빌드를 사용하여 여러 컨테이너를 시작할 수 있어야 해요.</p>
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
<p>만약 환경의 각 단계를 다시 빌드해야 한다면, 컨테이너간에 사용할 일관된 빌드 ID를 생성해야 합니다. 다음의 방법을 사용하여 next.config.js 파일에 generateBuildId 명령어를 사용해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">generateBuildId</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 이 부분은 아무 값이나 사용할 수 있습니다. 최신 git 해시값이라고 가정합니다.</span>
    <span class="token keyword">return</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GIT_HASH</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="버전-스큐" tabindex="-1"><a class="header-anchor" href="#버전-스큐" aria-hidden="true">#</a> 버전 스큐</h3>
<p>Next.js는 대부분의 버전 일관성 문제를 자동으로 해결하고, 버전 스큐가 감지되면 새로운 에셋을 가져오기 위해 응용 프로그램을 자동으로 다시로드합니다. 예를 들어, 배포 ID에 불일치가 있는 경우 페이지 간 이동은 하드 네비게이션을 수행하고 사전로드된 값 대신에 사용합니다.</p>
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
<p>애플리케이션이 다시로드될 때, 페이지 탐색 간에 상태가 유지되지 않도록 설계되었을 경우 애플리케이션 상태의 손실이 발생할 수 있습니다. 예를 들어 URL 상태 또는 로컬 스토리지를 사용하면 페이지 새로고침 후에도 상태가 유지됩니다. 그러나 useState와 같은 컴포넌트 상태는 해당 탐색에서 손실될 것입니다.
Vercel은 이전 버전의 에셋 및 기능이 이전 클라이언트에서 사용할 수 있도록 Next.js 애플리케이션에 추가적인 왜곡 보호를 제공합니다. 새 버전이 배포된 후에도 이전 클라이언트에서 여전히 사용할 수 있도록 합니다.
next.config.js 파일에서 deploymentId 속성을 수동으로 구성하여 각 요청이 ?dpl 쿼리 문자열 또는 x-deployment-id 헤더를 사용하도록 할 수 있습니다.</p>
<h3 id="스트리밍과-서스펜스" tabindex="-1"><a class="header-anchor" href="#스트리밍과-서스펜스" aria-hidden="true">#</a> 스트리밍과 서스펜스</h3>
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
<p>Next.js 앱 라우터는 자체 호스팅 시 스트리밍 응답을 지원합니다. Nginx 또는 유사한 프록시를 사용하는 경우 스트리밍을 가능하게 하려면 버퍼링을 비활성화하도록 구성해야 합니다.
예를 들어, Nginx에서 X-Accel-Buffering을 no로 설정하여 버퍼링을 비활성화할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/:path*{/}?"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"X-Accel-Buffering"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"no"</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
