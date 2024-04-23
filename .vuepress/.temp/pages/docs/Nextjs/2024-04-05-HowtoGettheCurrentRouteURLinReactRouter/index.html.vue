<template><div><img src="@source/docs/Nextjs/2024-04-05-HowtoGettheCurrentRouteURLinReactRouter/img/HowtoGettheCurrentRouteURLinReactRouter_0.png" />
<p>React Router에서 현재 경로를 가져오려면 useLocation() route를 사용합니다.</p>
<p>예를 들어:</p>
<p>JavaScript</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> Link<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> useLocation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Products</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>About<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Pricing</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>Pricing<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>Posts<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> hash<span class="token punctuation">,</span> pathname<span class="token punctuation">,</span> search <span class="token punctuation">}</span> <span class="token operator">=</span> location<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/products"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Products <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/posts"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Posts <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/#pricing"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Pricing <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
        <span class="token literal-property property">Pathname</span><span class="token operator">:</span> <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>pathname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        Search params<span class="token operator">:</span> <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>search<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token literal-property property">Hash</span><span class="token operator">:</span> <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>hash<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>
        <span class="token operator">&lt;</span>nav<span class="token operator">></span>
          <span class="token operator">&lt;</span>ul<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span>
              <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>Home<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span>
              <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/products"</span><span class="token operator">></span>Products<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span>
              <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/posts?id=5"</span><span class="token operator">></span>Posts<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
            <span class="token operator">&lt;</span>li<span class="token operator">></span>
              <span class="token operator">&lt;</span>Link to<span class="token operator">=</span><span class="token string">"/#pricing"</span><span class="token operator">></span>Pricing<span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>nav<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>useLocation()</code> 함수는 현재 페이지 URL 정보를 담고 있는 객체를 반환합니다. 이 객체의 몇 가지 프로퍼티는 다음과 같습니다:</p>
<ul>
<li>pathname: 도메인 이름 뒤에 오는 부분, 예: /products.</li>
<li>search: 쿼리 문자열, 예: ?id=5.</li>
<li>hash: 해시, 예: #pricing.</li>
</ul>
<p>참고</p>
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
<p>풀 URL을 얻으려면 useLocation() 대신 location.href를 사용합니다.</p>
<p>JavaScript</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="react에서-현재-페이지-url-가져오기" tabindex="-1"><a class="header-anchor" href="#react에서-현재-페이지-url-가져오기" aria-hidden="true">#</a> React에서 현재 페이지 URL 가져오기</h1>
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
<p>리액트에서 현재 페이지 URL을 가져오고 싶다면 window.location.href를 사용할 수 있어요.</p>
<p>예를 들면:</p>
<p>자바스크립트</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      현재 <span class="token constant">URL</span>에 접속 중이세요<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>window.location.href 속성은 전체 페이지 URL을 포함하는 문자열을 반환합니다.</p>
<p>window.location에는 URL에 대한 더 많은 정보를 제공하는 다른 속성도 있습니다. 일부 예시는 다음과 같습니다:</p>
<ul>
<li>pathname: 도메인 이름 뒤와 선택적 포트 번호 뒤의 URL 경로입니다.</li>
<li>protocol: URL의 프로토콜 스키마입니다.</li>
<li>hostname: URL의 호스트 이름 일부입니다.</li>
</ul>
<p>다음은 이러한 속성을 사용하여 전체 URL 외에도 다양한 URL 속성을 가져오는 예시입니다.</p>
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
<p>JavaScript</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">;</span>
  <span class="token keyword">const</span> pathname <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">;</span>
  <span class="token keyword">const</span> protocol <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>protocol<span class="token punctuation">;</span>
  <span class="token keyword">const</span> hostname <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hostname<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      현재 접속 중인 주소는 <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>url<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>입니다<span class="token punctuation">.</span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token literal-property property">경로</span><span class="token operator">:</span> <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>pathname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token literal-property property">프로토콜</span><span class="token operator">:</span> <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>protocol<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
      <span class="token literal-property property">호스트명</span><span class="token operator">:</span> <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>hostname<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="react-router에서-동적-라우트-변수-얻기" tabindex="-1"><a class="header-anchor" href="#react-router에서-동적-라우트-변수-얻기" aria-hidden="true">#</a> React Router에서 동적 라우트 변수 얻기</h1>
<p>React Router에서 동적 라우트의 변수에 직접 액세스하려면 useParams() 훅을 사용합니다.</p>
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
<p>예를 들어:</p>
<p>JavaScript</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Route<span class="token punctuation">,</span> Routes<span class="token punctuation">,</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">></span>게시물 설정 <span class="token punctuation">{</span>id<span class="token punctuation">}</span> <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
          <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/posts/:id"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Posts <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>id 변수는 /posts/:id 경로의 자리 표시자 값과 일치합니다. 따라서 예제에서 보았듯이, 경로 /posts/5 는 id 값이 5가되도록 합니다.</p>
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
<h1 id="next-js-앱에서-현재-경로-가져오기" tabindex="-1"><a class="header-anchor" href="#next-js-앱에서-현재-경로-가져오기" aria-hidden="true">#</a> Next.js 앱에서 현재 경로 가져오기</h1>
<p>Next.js React 앱에서 현재 경로를 가져오려면 useRouter() 훅을 사용합니다:</p>
<p>useRouter() 함수가 반환하는 객체에는 Next.js 앱의 현재 경로인 asPath 속성이 포함되어 있습니다.</p>
<p>pages/posts.tsx</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Head <span class="token keyword">from</span> <span class="token string">'next/head'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/router'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'글1'</span><span class="token punctuation">,</span> <span class="token string">'글2'</span><span class="token punctuation">,</span> <span class="token string">'글3'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 👇 경로 데이터 가져오기</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> route <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Head<span class="token operator">></span>
        <span class="token operator">&lt;</span>title<span class="token operator">></span>Next<span class="token punctuation">.</span>js <span class="token operator">-</span> Coding Beauty<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"create next app에서 생성됨"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/favicon.ico"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Head<span class="token operator">></span>
      <span class="token operator">&lt;</span>main<span class="token operator">></span>
        <span class="token literal-property property">경로</span><span class="token operator">:</span> <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>router<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">{</span>posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>asPath</code>은 현재 렌더링 중인 경로/경로를 반환합니다.</p>
<p>쿼리 매개변수나 해시를 포함합니다.</p>
<p>현재 앱 경로와 관련된 데이터를 가져오고 조치를 취하기 위해 <code v-pre>useRouter()</code>를 사용합니다.</p>
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
<h1 id="next-js에서-현재-동적-경로-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#next-js에서-현재-동적-경로-데이터-가져오기" aria-hidden="true">#</a> Next.js에서 현재 동적 경로 데이터 가져오기</h1>
<p>동적 경로로 전달된 데이터를 가져오려면, useRouter() 객체의 query 속성을 사용합니다:</p>
<p>예를 들어, /posts/5에 해당하는 route가 있을 수 있는데, 이는 /posts/:id와 동적 경로로 매핑되며, 여기서 5는 id에 전달된 값입니다.</p>
<p>다음은 동적 경로로의 요청을 처리하는 Next.js 파일에서 어떻게 액세스하는지에 대한 예시입니다:</p>
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
<p>pages/posts/[id].tsx</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Head <span class="token keyword">from</span> <span class="token string">'next/head'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/router'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 👇 동적 경로에서 id 값을 가져옵니다</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id <span class="token punctuation">}</span> <span class="token operator">=</span> query<span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Head<span class="token operator">></span>
        <span class="token operator">&lt;</span>title<span class="token operator">></span>Next<span class="token punctuation">.</span>js <span class="token operator">-</span> Coding Beauty<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"Generated by create next app"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/favicon.ico"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Head<span class="token operator">></span>
      <span class="token operator">&lt;</span>main<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>
          Post <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>동적 경로가 작동하려면 페이지 폴더 내의 파일 구조가 다음과 같아야 합니다: /pages/[id].tsx. 우리는 쿼리에서 데이터에 액세스할 때 사용할 속성에 따라 파일 이름을 지정하고 이름을 대괄호로 둘러싸야 합니다.</p>
<p>현재 앱 루트에 대한 데이터를 가져오고 작업을 수행하기 위해 useRouter()를 사용합니다.</p>
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
<h1 id="next-js에서-쿼리-매개변수-데이터-가져오기" tabindex="-1"><a class="header-anchor" href="#next-js에서-쿼리-매개변수-데이터-가져오기" aria-hidden="true">#</a> Next.js에서 쿼리 매개변수 데이터 가져오기</h1>
<p>URL 쿼리 매개변수(예: ?key1=value1)에 접근하는 방법은 query 객체를 사용하는 것입니다:</p>
<p>JavaScript</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Head <span class="token keyword">from</span> <span class="token string">'next/head'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/router'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 👇 쿼리 매개변수에서 소스 가져오기</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> source <span class="token punctuation">}</span> <span class="token operator">=</span> query<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Head<span class="token operator">></span>
        <span class="token operator">&lt;</span>title<span class="token operator">></span>Next<span class="token punctuation">.</span>js <span class="token operator">-</span> Coding Beauty<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"description"</span> content<span class="token operator">=</span><span class="token string">"Generated by create next app"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"icon"</span> href<span class="token operator">=</span><span class="token string">"/favicon.ico"</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Head<span class="token operator">></span>
      <span class="token operator">&lt;</span>main<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>
          Post <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>h3<span class="token operator">></span>You came from <span class="token punctuation">{</span>source<span class="token punctuation">}</span><span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="주요-내용" tabindex="-1"><a class="header-anchor" href="#주요-내용" aria-hidden="true">#</a> 주요 내용</h1>
<ul>
<li>React Router에서 현재 경로를 가져오려면 useLocation() 훅을 사용하세요. 이 훅은 경로명, 검색 및 해시와 같은 속성이 포함된 객체를 반환합니다.</li>
<li>React 앱에서 전체 URL을 가져오려면 window.location.href를 사용하세요.</li>
<li>React Router에서 동적 경로 변수에 액세스하려면 useParams() 훅을 사용하세요.</li>
<li>Next.js 앱에서 현재 경로를 가져오고 동적 경로 데이터에 액세스하려면 useRouter() 훅을 사용하세요.</li>
<li>Next.js의 useRouter() 객체의 query 속성을 사용하면 URL 쿼리 매개변수에 액세스할 수 있습니다.</li>
</ul>
<h1 id="es13의-11가지-놀라운-새로운-javascript-기능" tabindex="-1"><a class="header-anchor" href="#es13의-11가지-놀라운-새로운-javascript-기능" aria-hidden="true">#</a> ES13의 11가지 놀라운 새로운 JavaScript 기능</h1>
<p>이 안내서는 ECMAScript 13에 추가된 모든 최신 기능에 대해 알려드립니다!</p>
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
<p>이 강력한 새로운 기능들은 더 짧고 표현력이 풍부한 코드로 당신의 JavaScript를 현대화할 것입니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtoGettheCurrentRouteURLinReactRouter/img/HowtoGettheCurrentRouteURLinReactRouter_1.png" alt="이미지"></p>
<p>가입하고 즉시 무료 사본을 받아보세요.</p>
</div></template>
