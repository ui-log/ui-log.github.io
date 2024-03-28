<template><div><h1 id="링크-및-탐색" tabindex="-1"><a class="header-anchor" href="#링크-및-탐색" aria-hidden="true">#</a> 링크 및 탐색</h1>
<p>Next.js 라우터를 사용하면 페이지간의 클라이언트 측 경로 전환이 가능하며, 싱글 페이지 애플리케이션과 유사합니다.</p>
<p>이 클라이언트 측 경로 전환을 처리하기 위해 제공되는 React 컴포넌트인 Link를 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">'next/link'</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">-</span> <span class="token punctuation">[</span>Home<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token punctuation">)</span>
    <span class="token operator">-</span> <span class="token punctuation">[</span>About Us<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">/</span>about<span class="token punctuation">)</span>
    <span class="token operator">-</span> <span class="token punctuation">[</span>Blog Post<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">/</span>blog<span class="token operator">/</span>hello<span class="token operator">-</span>world<span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Home
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위 예제에는 여러 링크가 사용되었습니다. 각각은 경로 (href)를 알려진 페이지로 매핑합니다:</p>
<ul>
<li>/ → pages/index.js</li>
<li>/about → pages/about.js</li>
<li>/blog/hello-world → pages/blog/[slug].js</li>
</ul>
<p>Statis Generation을 사용하는 페이지에서는 뷰포트에 있는(처음에든 스크롤을 통해서든) 모든 <code v-pre>Link /</code>가 기본적으로 프리패치됩니다(해당 데이터도 포함하여). 서버 렌더링된 경로의 해당 데이터는 <code v-pre>Link /</code>를 클릭할 때만 가져옵니다.</p>
<h2 id="동적-경로에-링크하기" tabindex="-1"><a class="header-anchor" href="#동적-경로에-링크하기" aria-hidden="true">#</a> 동적 경로에 링크하기</h2>
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
<p>인터폴레이션을 사용하여 동적 루트 세그먼트를 만들 수도 있습니다. 예를 들어, 컴포넌트에 전달된 포스트 목록을 보여주려면 다음과 같이 할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">'next/link'</span>

<span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">-</span> <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">-</span> <span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
        <span class="token operator">-</span> <span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>encodeURIComponent</code>은 이 예제에서 경로를 UTF-8 호환으로 유지하기 위해 사용됩니다.</p>
</blockquote>
<p>또는 URL 객체를 사용하여:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Link
            href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
              <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">"/blog/[slug]"</span><span class="token punctuation">,</span>
              <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">slug</span><span class="token operator">:</span> post<span class="token punctuation">.</span>slug <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token operator">></span>
            <span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Posts<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>지금은 패스를 만들기 위해 보간 대신 href 안에 URL 객체를 사용합니다. 여기서:</p>
<ul>
<li>pathname은 페이지 디렉토리 안의 페이지 이름입니다. 이 경우에는 /blog/[slug].</li>
<li>query는 동적 세그먼트가 포함된 객체입니다. 이 경우에는 slug입니다.</li>
</ul>
<h2 id="라우터-주입하기" tabindex="-1"><a class="header-anchor" href="#라우터-주입하기" aria-hidden="true">#</a> 라우터 주입하기```</h2>
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
<p>리액트 컴포넌트에서 라우터 객체에 액세스하려면 useRouter 또는 withRouter를 사용할 수 있습니다.</p>
<p>일반적으로 useRouter를 사용하는 것이 좋습니다.</p>
<h2 id="명령형-라우팅" tabindex="-1"><a class="header-anchor" href="#명령형-라우팅" aria-hidden="true">#</a> 명령형 라우팅</h2>
<p>next/link는 대부분의 라우팅 요구 사항을 충족할 수 있어야하지만, next/router의 문서를 살펴보면 해당되지 않는 클라이언트 측 탐색도 할 수 있습니다.</p>
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
<p>아래는 useRouter를 사용하여 기본 페이지 탐색을 하는 방법을 보여주는 예시입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/router"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ReadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/about"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>Click here to read more<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shallow-routing" tabindex="-1"><a class="header-anchor" href="#shallow-routing" aria-hidden="true">#</a> Shallow Routing</h2>
<p>얕은 라우팅을 통해 URL을 변경하면 getServerSideProps, getStaticProps 및 getInitialProps를 다시 실행하지 않고도 데이터를 변경할 수 있습니다.</p>
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
<p>업데이트된 경로명과 쿼리를 상태(state)를 잃지 않고 router 객체를 통해 받게 됩니다 (useRouter 또는 withRouter에서 추가됨).</p>
<p>얕은 라우팅을 가능하게 하려면 shallow 옵션을 true로 설정하세요. 다음 예제를 참고하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/router"</span><span class="token punctuation">;</span>

<span class="token comment">// 현재 URL은 '/'</span>
<span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 항상 첫 번째 렌더링 이후에 탐색을 수행합니다</span>
    router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/?counter=10"</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">shallow</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 카운터가 변경되었습니다!</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>router<span class="token punctuation">.</span>query<span class="token punctuation">.</span>counter<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Page<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>URL은 /?counter=10으로 업데이트되며 페이지가 교체되지 않고 경로의 상태만 변경됩니다.</p>
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
<p>아래와 같이 componentDidUpdate를 통해 URL 변경 사항을 감시할 수도 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token parameter">prevProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> pathname<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>router
  <span class="token comment">// 무한 루프를 피하기 위해 프롭스가 변경되었는지 확인</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>query<span class="token punctuation">.</span>counter <span class="token operator">!==</span> prevProps<span class="token punctuation">.</span>router<span class="token punctuation">.</span>query<span class="token punctuation">.</span>counter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 새 쿼리를 기반으로 데이터 가져오기</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="주의사항" tabindex="-1"><a class="header-anchor" href="#주의사항" aria-hidden="true">#</a> 주의사항</h3>
<p>Shallow 라우팅은 현재 페이지에서만 URL 변경 사항에 작동합니다. 예를 들어 다른 페이지인 pages/about.js가 있다고 가정했을 때 다음과 같이 작동해요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"/?counter=10"</span><span class="token punctuation">,</span> <span class="token string">"/about?counter=10"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">shallow</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>새 페이지로 이동하므로 현재 페이지를 언로드하고 새 페이지를 로드하며 데이터 가져오기를 기다립니다. 심지어 얕은 라우팅을 요청했어도 데이터 가져오기를 기다려야 합니다.</p>
<p>미들웨어와 함께 얕은 라우팅을 사용할 때는 이전과 같이 미들웨어 없이 사용될 때와 달리 새 페이지가 현재 페이지와 일치하는지 확인하지 않습니다. 미들웨어가 동적으로 다시 쓰기를 수행할 수 있기 때문에, 클라이언트 측에서 데이터 가져오기를 생략하고 얕은 라우팅으로 변경되므로 얕은 경로 변경은 항상 얕은 것으로 처리되어야 합니다.```</p>
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
