<template><div><h1 id="getstaticprops" tabindex="-1"><a class="header-anchor" href="#getstaticprops" aria-hidden="true">#</a> getStaticProps</h1>
<p>만약 페이지에서 getStaticProps(정적 사이트 생성)라는 함수를 내보내면 Next.js가 이 함수가 반환한 props를 사용하여 해당 페이지를 빌드 시 미리 렌더링합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> InferGetStaticPropsType<span class="token punctuation">,</span> GetStaticProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next"</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Repo</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  stargazers_count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getStaticProps <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.github.com/repos/vercel/next.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> repo <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> props<span class="token operator">:</span> <span class="token punctuation">{</span> repo <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> satisfies GetStaticProps<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  repo<span class="token operator">:</span> Repo<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span> repo <span class="token punctuation">}</span><span class="token operator">:</span> InferGetStaticPropsType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> getStaticProps<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> repo<span class="token punctuation">.</span>stargazers_count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>렌더링 유형과 관계없이 페이지 컴포넌트로 전달된 모든 props는 초기 HTML에서 클라이언트 측에서 볼 수 있습니다. 이것은 페이지가 올바르게 활성화되도록 하기 위함입니다. props에 클라이언트에서 사용할 수 없어야 하는 민감한 정보를 전달하지 않도록 주의하세요.</p>
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
<h2 id="getstaticprops을-언제-사용해야-하나요" tabindex="-1"><a class="header-anchor" href="#getstaticprops을-언제-사용해야-하나요" aria-hidden="true">#</a> <code v-pre>getStaticProps</code>을 언제 사용해야 하나요?</h2>
<p><code v-pre>getStaticProps</code>을 사용해야 하는 경우는 다음과 같습니다:</p>
<ul>
<li>사용자 요청 보다 빌드 시간에 페이지를 렌더링하는 데 필요한 데이터가 이미 사용 가능한 경우</li>
<li>데이터가 headless CMS에서 가져오는 경우</li>
<li>페이지가 사전 렌더링(검색 엔진 최적화)되어야 하며 매우 빨라야 하는 경우 — <code v-pre>getStaticProps</code>은 HTML 및 JSON 파일을 생성하며 이 둘은 성능을 위해 CDN에 캐싱될 수 있습니다</li>
<li>데이터가 공개적으로 캐시될 수 있는 경우 (사용자별이 아닌 경우). 특정 상황에서 Middleware를 사용하여 경로를 변경함으로써 이 조건을 우회할 수 있습니다.</li>
</ul>
<h2 id="언제-getstaticprops이-실행되나요" tabindex="-1"><a class="header-anchor" href="#언제-getstaticprops이-실행되나요" aria-hidden="true">#</a> 언제 <code v-pre>getStaticProps</code>이 실행되나요?</h2>
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
<p>getStaticProps은 항상 서버에서 실행되고 클라이언트에서는 실행되지 않습니다. 이 도구를 사용하여 getStaticProps 안에 작성된 코드가 클라이언트 측 번들에서 제거되는지 확인할 수 있어요.</p>
<ul>
<li>getStaticProps은 항상 next 빌드 중에 실행됩니다.</li>
<li>fallback: true를 사용할 때 getStaticProps는 백그라운드에서 실행됩니다.</li>
<li>fallback: blocking을 사용할 때 getStaticProps는 초반 렌더링 전에 호출됩니다.</li>
<li>revalidate를 사용할 때 getStaticProps는 백그라운드에서 실행됩니다.</li>
<li>revalidate()를 사용할 때 getStaticProps는 필요할 때 백그라운드에서 실행됩니다.</li>
</ul>
<p>Incremental Static Regeneration과 결합하면 getStaticProps은 새로 고침 페이지가 클라이언트로 제공되는 동안 오래된 페이지가 재확인되는 동안 백그라운드에서 실행됩니다.</p>
<p>getStaticProps은 요청(쿼리 매개변수 또는 HTTP 헤더와 같은)에 액세스할 수 없습니다. 정적 HTML을 생성하기 때문입니다. 페이지에 대한 요청에 액세스해야 하는 경우 Middleware를 getStaticProps에 추가하여 사용해 보세요.</p>
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
<h2 id="cms에서-데이터를-가져오는-getstaticprops-사용" tabindex="-1"><a class="header-anchor" href="#cms에서-데이터를-가져오는-getstaticprops-사용" aria-hidden="true">#</a> CMS에서 데이터를 가져오는 getStaticProps 사용</h2>
<p>다음 예제에서는 CMS에서 블로그 포스트 목록을 가져오는 방법을 보여줍니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// posts는 getStaticProps에 의해 빌드 시간에 채워집니다.</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Blog</span><span class="token punctuation">(</span><span class="token punctuation">{</span> posts <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 이 함수는 서버 측에서 빌드 시간에 호출됩니다.</span>
<span class="token comment">// 클라이언트 측에서는 호출되지 않으므로</span>
<span class="token comment">// 직접 데이터베이스 쿼리도 가능합니다.</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 포스트를 가져오기 위해 외부 API 엔드포인트 호출</span>
  <span class="token comment">// 원하는 데이터 가져오는 라이브러리를 사용할 수 있습니다.</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://.../posts"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// { props: { posts } }를 반환함으로써,</span>
  <span class="token comment">// Blog 컴포넌트가 빌드 시간에 'posts'를 속성으로 받게 됩니다.</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    props<span class="token operator">:</span> <span class="token punctuation">{</span>
      posts<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getStaticProps API 참조에서 getStaticProps와 함께 사용할 수 있는 모든 매개변수와 속성을 다루고 있습니다.</p>
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
<h2 id="서버-측-코드를-직접-작성하세요" tabindex="-1"><a class="header-anchor" href="#서버-측-코드를-직접-작성하세요" aria-hidden="true">#</a> 서버 측 코드를 직접 작성하세요</h2>
<p>getStaticProps는 서버 측에서만 실행되기 때문에 클라이언트 측에서는 실행되지 않습니다. 브라우저를 위한 JS 번들에도 포함되지 않으므로 브라우저로 전송되지 않고 직접 데이터베이스 쿼리를 작성할 수 있습니다.</p>
<p>이는 getStaticProps에서 API 경로를 가져오는 대신(자체적으로 외부 소스에서 데이터를 가져오도록 함), getStaticProps에서 서버 측 코드를 직접 작성할 수 있음을 의미합니다.</p>
<p>다음 예제를 살펴보겠습니다. API 경로를 사용하여 CMS에서 데이터를 가져오는 경우가 있습니다. 그런 다음 해당 API 경로가 getStaticProps에서 직접 호출됩니다. 이렇게 하면 성능이 저하되는 추가 호출이 발생합니다. 대신 CMS에서 데이터를 가져오는 로직은 lib/ 디렉토리를 사용하여 공유함으로써 getStaticProps와 공유할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 다음의 함수는 getStaticProps와 API 라우트에서</span>
<span class="token comment">// lib/ 디렉토리로 공유됩니다</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 게시물을 가져오기 위해 외부 API 엔드포인트 호출</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://.../posts/"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// pages/blog.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> loadPosts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../lib/load-posts"</span><span class="token punctuation">;</span>

<span class="token comment">// 이 함수는 서버 측에서만 실행됩니다</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// `/api` 루트를 가져오는 대신에</span>
  <span class="token comment">// `getStaticProps`에서 동일한 함수를 직접 호출할 수 있습니다</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 반환된 props가 페이지 컴포넌트로 전달됩니다</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> posts <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는 데이터를 가져오기 위해 API 라우트를 사용하지 않는 경우, fetch() API를
getStaticProps에서 직접 사용할 수 있습니다.</p>
<p>Next.js가 클라이언트 측 번들에서 제거하는 항목을 확인하려면 next-code-elimination 도구를 사용할 수 있습니다.```</p>
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
<h2 id="정적으로-html과-json을-생성합니다" tabindex="-1"><a class="header-anchor" href="#정적으로-html과-json을-생성합니다" aria-hidden="true">#</a> 정적으로 HTML과 JSON을 생성합니다</h2>
<p>getStaticProps가 포함된 페이지가 빌드 시간에 사전 렌더링될 때, 페이지 HTML 파일 외에도 Next.js는 getStaticProps를 실행한 결과를 보유하는 JSON 파일을 생성합니다.</p>
<p>이 JSON 파일은 next/link 또는 next/router를 통한 클라이언트 측 라우팅에서 사용됩니다. getStaticProps를 사용하여 사전 렌더링된 페이지로 이동하면 Next.js가 JSON 파일 (빌드 시간에 미리 계산된)을 가져와 페이지 구성 요소의 속성(props)으로 사용합니다. 이는 클라이언트 측 페이지 전환에서 getStaticProps가 호출되지 않는다는 것을 의미합니다. 출력된 JSON만 사용됩니다.</p>
<p>증분 정적 생성을 사용할 때, getStaticProps는 클라이언트 측 내비게이션에 필요한 JSON을 생성하기 위해 백그라운드에서 실행됩니다. 동일한 페이지에 대해 여러 요청이 발생할 수 있는 것을 볼 수 있지만, 이는 의도된 동작으로 최종 사용자 성능에 영향을 미치지 않습니다.</p>
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
<h2 id="getstaticprops를-어디에서-사용할-수-있나요" tabindex="-1"><a class="header-anchor" href="#getstaticprops를-어디에서-사용할-수-있나요" aria-hidden="true">#</a> getStaticProps를 어디에서 사용할 수 있나요?</h2>
<p>getStaticProps는 페이지에서만 내보낼 수 있습니다. 비페이지 파일, _app, _document 또는 _error에서는 내보낼 수 없습니다.</p>
<p>이 제약 사항의 하나는 React가 페이지를 렌더링하기 전에 필요한 모든 데이터를 갖고 있어야하기 때문입니다.</p>
<p>또한 getStaticProps를 페이지 컴포넌트의 속성으로 추가하는 대신 독립적인 함수로 내보내야 합니다.</p>
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
<p>좋은 정보: 사용자 정의 앱을 만들었다면, 연결된 문서에 표시된 대로 페이지 구성 요소에 pageProps를 전달하는 것을 확인하십시오. 그렇지 않으면 프롭스가 비어 있을 수 있습니다.</p>
</blockquote>
<h2 id="개발환경에서-실행" tabindex="-1"><a class="header-anchor" href="#개발환경에서-실행" aria-hidden="true">#</a> 개발환경에서 실행</h2>
<p>개발환경에서(next dev), getStaticProps는 매 요청마다 호출됩니다.</p>
<h2 id="미리보기-모드" tabindex="-1"><a class="header-anchor" href="#미리보기-모드" aria-hidden="true">#</a> 미리보기 모드</h2>
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
<p>'미리보기 모드'를 사용하면 정적 생성을 우회하여 페이지를 빌드 시간이 아닌 요청 시간에 렌더링할 수 있습니다. 예를 들어, 머리 없는 CMS를 사용하고 게시하기 전에 드래프트를 미리보고 싶을 수 있습니다.</p>
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
