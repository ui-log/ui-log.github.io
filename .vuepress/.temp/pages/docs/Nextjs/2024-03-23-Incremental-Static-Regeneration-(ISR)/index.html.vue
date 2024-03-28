<template><div><h1 id="증분-정적-재생성-isr" tabindex="-1"><a class="header-anchor" href="#증분-정적-재생성-isr" aria-hidden="true">#</a> 증분 정적 재생성 (ISR)</h1>
<p>Next.js를 사용하면 사이트를 빌드한 후에 정적 페이지를 만들거나 업데이트할 수 있습니다. 증분 정적 재생성 (ISR)을 사용하면 전체 사이트를 다시 빌드할 필요 없이 페이지별로 정적 생성을 사용할 수 있습니다. ISR을 사용하면 정적의 이점을 유지하면서 수백만 개의 페이지로 확장할 수 있습니다.</p>
<blockquote>
<p>알아 두면 좋은 사항: Edge 런타임은 현재 ISR과 호환되지 않지만 cache-control 헤더를 수동으로 설정하여 stale-while-revalidate를 활용할 수 있습니다.</p>
</blockquote>
<p>ISR을 사용하려면 getStaticProps에 revalidate 속성을 추가하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 이 함수는 서버 측 빌드 시간에 호출됩니다.</span>
<span class="token comment">// 재유효화가 활성화되어 있고 새 요청이 들어오면</span>
<span class="token comment">// 서버리스 함수에서 다시 호출될 수 있습니다.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://.../posts"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// Next.js는 페이지를 다시 생성하려고 시도합니다:</span>
    <span class="token comment">// - 요청이 들어올 때</span>
    <span class="token comment">// - 최대 10초마다 한 번</span>
    <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 초 단위</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 이 함수는 서버 측 빌드 시간에 호출됩니다.</span>
<span class="token comment">// 경로가 생성되지 않은 경우 서버리스 함수에서 다시 호출될 수 있습니다.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticPaths</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://.../posts"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 포스트에 기반하여 사전 렌더링하려는 경로 가져오기</span>
  <span class="token keyword">const</span> paths <span class="token operator">=</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> post<span class="token punctuation">.</span>id <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 빌드 시간에 이러한 경로만 사전 렌더링됩니다.</span>
  <span class="token comment">// 경로가 존재하지 않는 경우 { fallback: 'blocking' }은 페이지를 서버에서 렌더링합니다.</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> paths<span class="token punctuation">,</span> <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">"blocking"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Blog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사전 렌더링된 빌드 시간에 페이지에 요청이 들어오면 초기로 캐시된 페이지가 표시됩니다.</p>
<ul>
<li>초기 요청 후 10초 이전의 모든 페이지 요청은 캐시되어 빠릅니다.</li>
<li>10초가 경과한 후, 다음 요청은 여전히 캐시된(만료된) 페이지를 표시합니다.</li>
<li>Next.js는 배경에서 페이지를 다시 생성합니다.</li>
<li>페이지가 성공적으로 생성되면 Next.js는 캐시를 무효화하고 업데이트된 페이지를 표시합니다. 배경에서 생성이 실패하면 이전 페이지가 변경되지 않은 채로 유지됩니다.</li>
</ul>
<p>생성되지 않은 경로에 요청이 들어오면 Next.js는 초기 요청 시에 페이지를 서버에서 렌더링합니다. 이후 요청은 캐시에서 정적 파일을 제공합니다. Vercel에서 ISR은 전역적으로 캐시를 유지하고 롤백을 처리합니다.</p>
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
<p>좋은 정보: 상위 데이터 제공 업체가 캐싱을 기본적으로 활성화했는지 확인해 보세요. 그렇지 않으면 (예: useCdn: false처럼) 비활성화해야 할 수도 있습니다. 그렇지 않으면 재확인이 ISR 캐시를 업데이트할 새로운 데이터를 가져오지 못할 수도 있습니다. 캐싱은 Cache-Control 헤더를 반환하는 경우 엔드포인트에 대해 CDN(요청된 엔드포인트에 대해)에서 발생할 수 있습니다.</p>
</blockquote>
<h2 id="요청시-재확인" tabindex="-1"><a class="header-anchor" href="#요청시-재확인" aria-hidden="true">#</a> 요청시 재확인</h2>
<p>재확인 시간을 60으로 설정하면 모든 방문자가 사이트의 생성된 동일한 버전을 1분 동안 보게 됩니다. 캐시를 무효화하는 유일한 방법은 1분이 지난 후 해당 페이지를 방문한 사람입니다.</p>
<p>v12.2.0 이상부터 Next.js는 특정 페이지에 대한 Next.js 캐시를 수동으로 삭제하기 위해 On-Demand Incremental Static Regeneration을 지원합니다. 이로써 사이트를 업데이트하는 과정이 더욱 쉬워집니다.</p>
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
<li>헤들리스 CMS에서 콘텐츠를 생성 또는 업데이트합니다.</li>
<li>전자 상거래 메타데이터 변경 (가격, 설명, 카테고리, 리뷰 등).</li>
</ul>
<p>getStaticProps 내부에서 필요한 경우 온디맨드 재유효화를 사용하려면 revalidate를 명시할 필요가 없습니다. revalidate가 생략된 경우 Next.js는 기본값으로 false(재검증 없음)을 사용하고, revalidate()가 호출될 때에만 페이지를 필요할 때 재검증합니다.</p>
<blockquote>
<p>알아두면 좋은 점: 미들웨어는 온디맨드 ISR 요청에 대해 실행되지 않습니다. 대신 revalidate()를 호출하여 재검증을 원하는 정확한 경로로 이동하십시오. 예를 들어 pages/blog/[slug].js와 /post-1에서/blog/post-1로 리디렉션을 하는 경우, res.revalidate(<code v-pre>/blog/post-1</code>)를 호출해야 합니다.</p>
</blockquote>
<h3 id="온디맨드-재유효화-사용하기" tabindex="-1"><a class="header-anchor" href="#온디맨드-재유효화-사용하기" aria-hidden="true">#</a> 온디맨드 재유효화 사용하기</h3>
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
<p>먼저, Next.js 앱만이 알 수 있는 비밀 토큰을 생성하세요. 이 비밀 토큰은 재유효화 API 라우트에 대한 무단 액세스를 방지하는 데 사용될 것입니다. 다음 URL 구조로 라우트에 액세스할 수 있습니다 (수동 또는 웹훅을 사용하여):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token operator">&lt;</span>your<span class="token operator">-</span>site<span class="token punctuation">.</span>com<span class="token operator">></span><span class="token operator">/</span>api<span class="token operator">/</span>revalidate<span class="token operator">?</span>secret<span class="token operator">=</span><span class="token operator">&lt;</span>token<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그 다음, 앱 환경 변수로 비밀을 추가하세요. 마지막으로, 재유효화 API 라우트를 만드세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 요청이 유효한지 확인하기 위해 비밀을 확인합니다.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>secret <span class="token operator">!==</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MY_SECRET_TOKEN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"잘못된 토큰"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 이 부분은 재유효화할 실제 경로여야 합니다.</span>
    <span class="token comment">// 예: "/blog/[slug]" 대신 this should be "/blog/post-1"</span>
    <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">revalidate</span><span class="token punctuation">(</span><span class="token string">"/path-to-revalidate"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">revalidated</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 오류가 발생한 경우, Next.js는 계속해서</span>
    <span class="token comment">// 마지막으로 성공적으로 생성된 페이지를 표시할 것입니다.</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"재유효화 오류"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리의 데모를 확인해보세요.
실시간 재유효화가 어떻게 작동하는지 확인하고 피드백을 제공해 주세요.</p>
<h3 id="개발-중에-on-demand-isr-테스트하기" tabindex="-1"><a class="header-anchor" href="#개발-중에-on-demand-isr-테스트하기" aria-hidden="true">#</a> 개발 중에 On-Demand ISR 테스트하기</h3>
<p>로컬에서 next dev로 실행할 때 getStaticProps가 모든 요청에 대해 호출됩니다. 실시간 재유효화 구성이 올바른지 확인하려면 제품 빌드를 생성하고 제품 서버를 시작해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ next build
$ next start
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
<p>그럼, 정적 페이지가 성공적으로 재검증되었는지 확인할 수 있습니다.</p>
<h2 id="오류-처리-및-재유효화" tabindex="-1"><a class="header-anchor" href="#오류-처리-및-재유효화" aria-hidden="true">#</a> 오류 처리 및 재유효화</h2>
<p>getStaticProps 내부에서 백그라운드 재생성을 처리할 때 오류가 발생하거나 수동으로 오류를 throw하는 경우, 최근에 성공적으로 생성된 페이지가 계속 표시됩니다. 다음 요청에서 Next.js는 getStaticProps를 다시 호출하려고 할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 만약 이 요청이 처리되지 않는 오류를 throw하면, Next.js는</span>
  <span class="token comment">// 현재 표시된 페이지를 무효화하지 않고,</span>
  <span class="token comment">// 다음 요청에서 getStaticProps를 다시 시도할 것입니다.</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://.../posts"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 서버 오류가 있는 경우 캐시가 업데이트되지 않도록</span>
    <span class="token comment">// 반환하는 대신 오류를 throw할 수도 있습니다.</span>
    <span class="token comment">// 다음 성공적인 요청까지.</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게시물을 불러오는 데 실패했습니다. 상태 코드: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>res<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 요청이 성공했을 경우 게시물을 반환하고,</span>
  <span class="token comment">// 10초마다 재검증합니다.</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="자체-호스팅-isr" tabindex="-1"><a class="header-anchor" href="#자체-호스팅-isr" aria-hidden="true">#</a> 자체 호스팅 ISR</h2>
<p>자체 호스팅된 Next.js 사이트에서는 next start를 사용할 때 증분 정적 재생성(ISR)이 기본적으로 작동합니다.</p>
<p>자체 호스팅 Next.js에 대해 더 알아보기.</p>
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
<td><code v-pre>v14.1.0</code></td>
<td>Custom <code v-pre>cacheHandler</code> is stable.</td>
</tr>
<tr>
<td><code v-pre>v12.2.0</code></td>
<td>On-Demand ISR is stable</td>
</tr>
<tr>
<td><code v-pre>v12.1.0</code></td>
<td>On-Demand ISR added (beta).</td>
</tr>
<tr>
<td><code v-pre>v12.0.0</code></td>
<td><a href="https://nextjs.org/blog/next-12#bot-aware-isr-fallback" target="_blank" rel="noopener noreferrer">Bot-aware ISR fallback<ExternalLinkIcon/></a> added.</td>
</tr>
<tr>
<td><code v-pre>v9.5.0</code></td>
<td>Base Path added.</td>
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
