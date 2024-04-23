<template><div><p><img src="@source/docs/Nextjs/2024-04-05-MasteringReactQueryFromInstallationtoAdvancedFeatures/img/MasteringReactQueryFromInstallationtoAdvancedFeatures_0.png" alt="이미지"></p>
<p>서버에서 정보를 어떻게 가져오는지 궁금한 적이 있나요? 웹 애플리케이션을 만드는 중요한 부분이죠. 일반적으로, 개발자들은 데이터를 가져오기 위해 'fetch'나 'axios'와 같은 도구를 사용합니다. 하지만 더 간단하고 효율적인 방법이 있다면 어떨까요? 그 방법이 바로 React Query입니다! React 프로젝트에서 데이터를 처리하는데 있어서 슈퍼파워를 가진 것과 같죠. 이 블로그에서 React Query가 왜 멋진지 그리고 데이터 작업 시 어떻게 삶을 더 쉽게 만들 수 있는지 살펴볼 거예요. 준비하세요! React 앱을 더욱 강력하고 사용자 친화적으로 만들 준비가 돼야 해요!</p>
<p>자세한 정보는 제 개인 웹사이트에서 웹 개발에 관한 더 깊은 내용을 확인해보세요:</p>
<h2 id="react-프로젝트에서-react-query-설정하기-⚙️" tabindex="-1"><a class="header-anchor" href="#react-프로젝트에서-react-query-설정하기-⚙️" aria-hidden="true">#</a> React 프로젝트에서 React Query 설정하기 ⚙️</h2>
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
<h2 id="단계-1-react-query-설치하기" tabindex="-1"><a class="header-anchor" href="#단계-1-react-query-설치하기" aria-hidden="true">#</a> 단계 1: React Query 설치하기</h2>
<p>코드 작업에 들어가기 전에, 프로젝트에 React Query를 추가하는 것이 첫 번째 단계입니다. 터미널을 열고 다음 중 하나의 명령을 실행해주세요:</p>
<p>npm을 사용하는 경우:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span>query
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
<p>이렇게 하시면 됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add react<span class="token operator">-</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 React Query를 설치하고 프로젝트의 종속성에 추가하여 사용할 준비를 합니다.</p>
<h2 id="단계-2-기본-구성-💡" tabindex="-1"><a class="header-anchor" href="#단계-2-기본-구성-💡" aria-hidden="true">#</a> 단계 2: 기본 구성 💡</h2>
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
<p>React Query를 설치했다면, 다음 단계는 React 애플리케이션에서 React Query를 구성하는 것입니다. React Query에는 QueryClient와 QueryClientProvider가 포함되어 있어서 React Query 환경을 초기화하고 제공하는 데 중요합니다.</p>
<p>다음은 이를 설정하는 간단한 방법입니다:</p>
<ul>
<li>React Query에서 QueryClient 및 QueryClientProvider를 가져옵니다:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> QueryClient<span class="token punctuation">,</span> QueryClientProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>
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
<ol start="2">
<li>QueryClient의 새 인스턴스를 만듭니다:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>애플리케이션의 루트 컴포넌트를 QueryClientProvider로 감싸고 queryClient 인스턴스를 속성(prop)으로 전달하세요. App 컴포넌트는 다음과 같이 보입니다:</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QueryClient<span class="token punctuation">,</span> QueryClientProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Dashboard <span class="token keyword">from</span> <span class="token string">'./Dashboard'</span><span class="token punctuation">;</span> <span class="token comment">// 대시보드(Dashboard)가 프로젝트에 있는 컴포넌트라고 가정합니다</span>

<span class="token comment">// 클라이언트 생성</span>
<span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>QueryClientProvider client<span class="token operator">=</span><span class="token punctuation">{</span>queryClient<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 대시보드(Dashboard) 컴포넌트는 애플리케이션에 포함되어 있습니다 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Dashboard <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>QueryClientProvider<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 설정은 React Query를 React 애플리케이션에 효과적으로 통합하여 프로젝트 전체에서 해당 기능을 사용할 수 있게 합니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-MasteringReactQueryFromInstallationtoAdvancedFeatures/img/MasteringReactQueryFromInstallationtoAdvancedFeatures_1.png" alt="React Query"></p>
<h2 id="react-query를-사용하여-데이터-가져오기-📡" tabindex="-1"><a class="header-anchor" href="#react-query를-사용하여-데이터-가져오기-📡" aria-hidden="true">#</a> React Query를 사용하여 데이터 가져오기 📡</h2>
<p>React Query는 주로 서버로부터 데이터를 가져오는 읽기 작업에 주로 초점을 맞춘 React 애플리케이션에서 데이터 가져오기를 간소화하는 강력한 도구입니다. 이 섹션에서는 효율적인 데이터 가져오기를 위해 React Query의 useQuery 훅을 사용하는 과정을 안내합니다.</p>
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
<p>useQuery 이해하기</p>
<p>useQuery는 React Query에서 서버 데이터를 가져오고 캐싱 및 업데이트하는 핵심 훅입니다. 이는 API에서 데이터를 가져오는 복잡한 프로세스를 추상화하고 단순화합니다.</p>
<p>먼저, React Query에서 useQuery를 import하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>
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
<p>그럼, 데이터를 가져오는 기능을 만들어보세요. 예를 들어, JSON API에서 데이터를 가져오는 방법입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// JSONPlaceholder API에서 게시물을 가져오는 기능</span>
<span class="token keyword">const</span> <span class="token function-variable function">fetchPosts</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 컴포넌트에서 useQuery 훅을 사용하여 fetchData 함수를 호출하세요. 완성된 코드는 다음과 같이 보일 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Dashboard.js</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>

<span class="token comment">// JSONPlaceholder API에서 게시물을 가져오는 기능</span>
<span class="token keyword">const</span> <span class="token function-variable function">fetchPosts</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// useQuery를 사용하여 데이터를 가져오는 React 컴포넌트</span>
<span class="token keyword">function</span> <span class="token function">Dashboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> posts<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'posts'</span><span class="token punctuation">,</span> fetchPosts<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>에러 발생<span class="token operator">:</span> <span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>posts <span class="token operator">&amp;&amp;</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">post</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
          <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Dashboard<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>리액트 쿼리의 useQuery 훅은 첫 번째 매개변수로 고유 식별자 (<code v-pre>posts</code>)와 두 번째로 데이터 가져오는 함수(fetchPosts)를 사용합니다. 이 훅은 데이터(posts), 로딩 상태(isLoading), 그리고 에러 상세(error)를 포함한 객체를 반환합니다.</p>
<p>useQuery를 활용하면 리액트 애플리케이션에서 데이터 가져오는 프로세스를 향상시켜 보다 효율적이고 사용자 친화적으로 만들 수 있습니다. 이 접근 방식은 비동기 데이터 작업을 처리를 간소화해주어 개발자가 더 많이 풍부한 사용자 인터페이스를 구축하는 데 집중할 수 있게 해줍니다.</p>
<p>기본 설정 외에도, 리액트 쿼리는 데이터 가져오는 프로세스를 향상시키는 강력한 구성을 제공합니다. 여기에는 몇 가지 예시가 있습니다:</p>
<h2 id="_1-polling-data-with-react-query-🔄" tabindex="-1"><a class="header-anchor" href="#_1-polling-data-with-react-query-🔄" aria-hidden="true">#</a> 1. Polling Data with React Query 🔄</h2>
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
<p>폴링은 응용 프로그램이 지정된 간격으로 자동으로 새 데이터를 가져오는 기술입니다. React Query는 pollInterval 옵션을 사용하여 이를 쉽게 구현할 수 있게 해줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetchPosts</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">PollingExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> posts<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'posts'</span><span class="token punctuation">,</span> fetchPosts<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pollInterval</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// 5초마다 데이터 가져오기</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>오류가 발생했습니다<span class="token operator">:</span> <span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>posts <span class="token operator">&amp;&amp;</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">post</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>h3<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
          <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> PollingExample<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서는 pollInterval이 5000밀리초(5초)로 설정되어 있으므로 구성 요소는 해당 간격으로 서버에서 자동으로 데이터를 다시 가져옵니다.</p>
<h2 id="_2-조건부-데이터-가져오기-react-query-🎯" tabindex="-1"><a class="header-anchor" href="#_2-조건부-데이터-가져오기-react-query-🎯" aria-hidden="true">#</a> 2. 조건부 데이터 가져오기 - React Query 🎯</h2>
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
<p>가끔은 사용자 행동과 같은 특정 기준에 따라 데이터를 조건부로 가져오고 싶을 수 있습니다. enabled 옵션을 사용하면 쿼리가 언제 데이터를 가져와야 하는지 제어할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetchUserData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://jsonplaceholder.typicode.com/users/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">ConditionalFetchingExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>userId<span class="token punctuation">,</span> setUserId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> user<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'user'</span><span class="token punctuation">,</span> userId<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetchUserData</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">enabled</span><span class="token operator">:</span> userId <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// userId가 null이 아닐 때만 데이터를 가져옴</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>An error has occurred<span class="token operator">:</span> <span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>User Details<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Name<span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>Email<span class="token operator">:</span> <span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>

      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setUserId</span><span class="token punctuation">(</span>userId <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        Load Next User
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> ConditionalFetchingExample<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예제에서 enabled 옵션은 userId가 null이 아닐 때에만 쿼리가 실행되도록 보장하여 데이터 가져오기가 발생하는 시점을 제어할 수 있습니다.</p>
<h2 id="react-query에서-변경사항-생성-업데이트-삭제-🔄" tabindex="-1"><a class="header-anchor" href="#react-query에서-변경사항-생성-업데이트-삭제-🔄" aria-hidden="true">#</a> React Query에서 변경사항(생성, 업데이트, 삭제) 🔄</h2>
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
<p>React Query에서 useQuery는 데이터를 가져오는 데 훌륭하며, useMutation은 생성, 업데이트 또는 삭제하는 데 사용하는 후크입니다. 즉, 서버의 데이터를 수정하는 모든 작업에 해당합니다. useQuery와 useMutation 간의 구분은 React Query의 설계에서 중요하며, 데이터 관리에서 &quot;읽기&quot; (쿼리)와 &quot;쓰기&quot; (뮤테이션) 사이의 전형적인 구분을 반영합니다.</p>
<p>useQuery와의 차이점:</p>
<ul>
<li>useQuery는 데이터를 가져와 자동으로 캐싱하는 데 사용되지만, useMutation은 데이터 변경(생성, 업데이트, 삭제)을 위해 specifically 설계되었습니다.</li>
<li>useMutation은 부수효과를 보다 더 제어할 수 있으며, 성공 및 에러 시나리오를 보다 명시적으로 처리할 수 있습니다.</li>
</ul>
<p>JSONPlaceholder API를 사용하여 useMutation 구현하기:</p>
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
<p>간단한 예제를 만들어서 useMutation을 사용하여 JSONPlaceholder API에 데이터를 게시해 봅시다.</p>
<ul>
<li>변이 함수 설정:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMutation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">createPost</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">postData</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'Content-type'</span><span class="token operator">:</span> <span class="token string">'application/json; charset=UTF-8'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>postData<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React 컴포넌트에서 useMutation 사용하기:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">NewPostForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> mutate<span class="token punctuation">,</span> isLoading<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMutation</span><span class="token punctuation">(</span>createPost<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 게시물 생성 성공 후 수행할 작업</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'게시물이 성공적으로 생성되었습니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onError</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// 에러 처리</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'게시물 생성 중 에러 발생:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> newPost <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'내 새 게시물'</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'이것은 게시물 내용입니다.'</span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">mutate</span><span class="token punctuation">(</span>newPost<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token punctuation">{</span>error <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>게시물 생성 중 에러 발생<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token punctuation">{</span>isLoading <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>제출 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token comment">/* 여기에 폼 요소 */</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>게시물 생성<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React Query를 사용하면 React 애플리케이션에서 데이터 수정을 효율적으로 다룰 수 있는 체계적이고 효율적인 접근 방법을 제공하여 개발자 경험과 애플리케이션의 전반적인 기능을 향상시킵니다.</p>
<p>기본 설정 외에도 React Query는 데이터 검색 프로세스를 강화하기 위한 강력한 구성을 제공합니다. 이러한 고급 기능을 탐색하기 전에 왜 이러한 기능들이 앱 성능 최적화에 중요한지 알아보겠습니다.</p>
<p>참고: React Query의 고급 기능은 기능적인 측면 뿐만 아니라 애플리케이션을 더 빠르고 반응성이 높은 것으로 만드는 데 중요한 역할을 합니다. 캐싱, 재시도 로직 및 프리패칭은 성능 증대제 같은 역할을 하며 데이터 검색 및 업데이트를 효율적으로 관리하여 앱이 사용자에게 원활한 경험을 제공하도록합니다.</p>
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
<h2 id="🔥react-query의-고급-기능-캐싱-재시도-그리고-프리패칭" tabindex="-1"><a class="header-anchor" href="#🔥react-query의-고급-기능-캐싱-재시도-그리고-프리패칭" aria-hidden="true">#</a> 🔥React Query의 고급 기능: 캐싱, 재시도, 그리고 프리패칭</h2>
<p>React Query는 여러 가지 고급 기능을 제공하는데, 이 기능들은 애플리케이션의 성능과 사용자 경험을 크게 향상시킬 수 있습니다. 캐싱, 재시도 메커니즘, 그리고 프리패칭에 대해 관련 코드 스니펫과 함께 알아봅시다.</p>
<h2 id="react-query를-활용한-캐싱-🌐" tabindex="-1"><a class="header-anchor" href="#react-query를-활용한-캐싱-🌐" aria-hidden="true">#</a> React Query를 활용한 캐싱 🌐</h2>
<p>캐싱은 React Query의 주요 기능 중 하나입니다. 이는 쿼리 결과를 자동으로 캐시하여 불필요한 네트워크 요청의 수를 줄입니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'todos'</span><span class="token punctuation">,</span> fetchTodos<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">staleTime</span><span class="token operator">:</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 5 분</span>
  <span class="token literal-property property">cacheTime</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 30 분</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 예시에서, staleTime은 가져온 데이터가 얼마나 신선한 것으로 간주되는지를 결정하고, cacheTime은 사용되고 있지 않다면 캐시된 데이터를 얼마나 오래 유지해야 하는지를 결정합니다.</p>
<h2 id="react-query에서-재시도-로직-📚" tabindex="-1"><a class="header-anchor" href="#react-query에서-재시도-로직-📚" aria-hidden="true">#</a> React Query에서 재시도 로직 📚</h2>
<p>React Query를 사용하면 쿼리에 대한 재시도 로직을 구현할 수 있어요. 이는 가끔 발생하는 네트워크 문제를 처리하는 데 특히 유용합니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> 데이터 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'todos'</span><span class="token punctuation">,</span> fetchTodos<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// 재시도 횟수</span>
  <span class="token function-variable function">retryDelay</span><span class="token operator">:</span> <span class="token parameter">attemptIndex</span> <span class="token operator">=></span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">**</span> attemptIndex<span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 지수 백오프</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 구성은 각 시도 사이에 증가하는 지연 시간으로 최대 3회까지 쿼리를 다시 시도합니다.</p>
<h2 id="react-query로-데이터-미리-가져오기-🌱" tabindex="-1"><a class="header-anchor" href="#react-query로-데이터-미리-가져오기-🌱" aria-hidden="true">#</a> React Query로 데이터 미리 가져오기 🌱</h2>
<p>미리 가져오기를 통해 필요한 시점보다 데이터를 로드하여 미래의 네비게이션 및 상호작용이 더 빠르게 느껴지도록 사용자 경험을 향상시킬 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token function">useQueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 컴포넌트가 마운트될 때 todos를 미리 가져오도록 prefetchQuery를 사용합니다.</span>
<span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  queryClient<span class="token punctuation">.</span><span class="token function">prefetchQuery</span><span class="token punctuation">(</span><span class="token string">'todos'</span><span class="token punctuation">,</span> fetchTodos<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>queryClient<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 이후 todos를 표시해야 할 때</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token literal-property property">data</span><span class="token operator">:</span> todos <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'todos'</span><span class="token punctuation">,</span> fetchTodos<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드에서 prefetchQuery는 컴포넌트가 마운트될 때 todos를 미리 가져오기 위해 사용됩니다. 따라서 사용자가 todos를 확인해야 할 때 이미 로드되어 있어 즉시 표시할 수 있습니다.</p>
<h2 id="결론-📑" tabindex="-1"><a class="header-anchor" href="#결론-📑" aria-hidden="true">#</a> 결론 📑</h2>
<p>요약하면, React Query는 React 애플리케이션에서 데이터 작업을 효율적으로 처리하는 강력한 도구로 나타납니다. 자동 캐싱, 백그라운드 업데이트, 내장형 로딩 및 오류 처리와 같은 기능을 통해 UI 개발에 우선적으로 주의를 기울일 수 있도록 돕습니다. 데이터를 가져오기 위해 useQuery를 사용하고 수정을 위해 useMutation을 사용하는 구조화된 사용법은 캐싱과 재시도 메커니즘과 같은 고급 기능과 결합하여 성능을 최적화합니다. 초보자든 숙련된 개발자든 React Query는 빠르고 효율적이며 견고한 애플리케이션을 육성하는 필수적인 요소로 입증됩니다.</p>
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
<p>React Query를 프로젝트에서 계속 탐구하고 구현하면, 현대적이고 데이터 중심의 웹 애플리케이션을 만드는 데 필수적인 역할을 발견할 것입니다. 추가 학습을 위해 React Query 문서는 깊이 있는 가이드와 API 참조를 제공하는 훌륭한 자원입니다.</p>
<p>코딩 즐기세요! ❤️</p>
<p>이 기사를 즐겼다면, 웹 개발에 대한 더 심도 있는 토론과 통찰력을 얻기 위해 제 개인 블로그 Program With Jayanth를 방문해보세요.</p>
<h1 id="stackademic" tabindex="-1"><a class="header-anchor" href="#stackademic" aria-hidden="true">#</a> Stackademic</h1>
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
<p>이 글을 끝까지 읽어 주셔서 감사합니다. 떠나시기 전에:</p>
<ul>
<li>작가를 응원하고 팔로우해 주시면 감사하겠습니다! 👏</li>
<li>Twitter(X), LinkedIn, YouTube에서 저희를 팔로우해 주세요.</li>
<li>Stackademic.com을 방문하여 전 세계적으로 무료 프로그래밍 교육을 더 democretize하는 방법에 대해 더 알아보세요.</li>
</ul>
</div></template>
