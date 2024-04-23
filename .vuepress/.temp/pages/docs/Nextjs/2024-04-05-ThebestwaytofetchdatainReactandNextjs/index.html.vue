<template><div><p>웹 개발 세계에서 HTTP 요청을 하는 것은 기본적인 작업입니다. 개발자들은 종종 이를 위해 어떤 라이브러리 또는 도구를 사용할지 선택해야 합니다. 이 글에서는 TypeScript에서 HTTP 요청을 처리하는 세 가지 인기 있는 옵션인 fetch, axios, 그리고 tanstack react-query를 비교해 보겠습니다.</p>
<p>fetch
Fetch는 HTTP 요청을 보내고 받는 간단하고 네이티브한 방법을 제공하는 내장된 JavaScript 메서드입니다. TypeScript에서 Fetch를 사용하여 GET 요청을 보내는 방법은 다음과 같습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>fetch는 내장되어 있어 가벼운 편이지만 캐싱 및 오류 상태 처리를 적절히 하지 못합니다. 그리고 포스트를 작성할 때 헤더와 콘텐츠 유형 등을 전달해야 합니다. 아래 예제를 확인해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://api.example.com/postData'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key1</span><span class="token operator">:</span> <span class="token string">'value1'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key2</span><span class="token operator">:</span> <span class="token string">'value2'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> requestOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> requestOptions<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'네트워크 응답이 문제가 있습니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'에러 발생:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 매우 난잡한 구문이지만 axios는 fetch보다 훨씬 더 깔끔한 구문을 가지고 있으니 함께 살펴보겠습니다.</p>
<p>axios</p>
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
<p>Axios는 HTTP 요청을 보다 간단하게 만들어주는 인기 있는 JavaScript 라이브러리입니다. 요청을 보내는 과정을 간소화하고 요청 및 응답 인터셉터와 같은 추가 기능을 제공합니다. axios를 사용하여 동일한 GET 요청을 하는 방법은 다음과 같습니다:</p>
<p>먼저 설치해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>포스트 요청을 할 때</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token string">'https://api.example.com/postData'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
  <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token string">'Bearer YOUR_ACCESS_TOKEN'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">key1</span><span class="token operator">:</span> <span class="token string">'value1'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">key2</span><span class="token operator">:</span> <span class="token string">'value2'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token punctuation">{</span> headers <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여러분은 분명히 axios가 fetch보다 훨씬 깔끔한 구문을 가지고 있고, fetch보다 효율적이지만 에러 및 로딩 상태를 관리하지 못한다는 것을 알 수 있습니다. 따라서 로딩 및 에러 상태를 수동으로 관리해야 합니다. 하지만 걱정하지 마세요! 오늘의 주제, 히어로 @tanstack-react-query가 등장합니다.</p>
<p>React Query</p>
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
<p>React-Query은 데이터 가져오기 및 상태 관리, 오류 처리, 캐싱을 전문으로 하는 강력한 라이브러리입니다. 최근 5.0에서는 optimistic updates라는 새로운 기능이 추가되었어요. 이는 데이터 관리의 복잡성을 추상화하여 매우 효율적이고 개발자 친화적인 경험을 제공합니다. React-Query를 사용하여 데이터를 가져오는 예시를 보여드리겠습니다.</p>
<p>먼저 설치한 후 사용해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install @tanstack<span class="token operator">/</span>react<span class="token operator">-</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-query'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Error<span class="token operator">:</span> <span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token punctuation">{</span>loading <span class="token operator">?</span> <span class="token operator">&lt;</span>Text<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>Text<span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Data<span class="token operator">:</span> <span class="token punctuation">{</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>게시물 또는 다른 변경 요청에 대해</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMutation <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-query'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span>

<span class="token keyword">const</span> <span class="token function-variable function">PostData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 뮤테이션 함수를 정의합니다</span>
  <span class="token keyword">const</span> postMutation <span class="token operator">=</span> <span class="token function">useMutation</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">newData</span><span class="token punctuation">)</span> <span class="token operator">=></span>
     axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">"url"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handlePost</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 여기에 데이터를 넣어주세요</span>
    <span class="token keyword">const</span> newData <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">key1</span><span class="token operator">:</span> <span class="token string">'value1'</span><span class="token punctuation">,</span>
      <span class="token literal-property property">key2</span><span class="token operator">:</span> <span class="token string">'value2'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 뮤테이션 실행</span>
    <span class="token keyword">await</span> postMutation<span class="token punctuation">.</span><span class="token function">mutateAsync</span><span class="token punctuation">(</span>newData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>handlePost<span class="token punctuation">}</span> disabled<span class="token operator">=</span><span class="token punctuation">{</span>postMutation<span class="token punctuation">.</span>isLoading<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>postMutation<span class="token punctuation">.</span>isLoading <span class="token operator">?</span> <span class="token string">'게시 중...'</span> <span class="token operator">:</span> <span class="token string">'데이터 게시'</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

      <span class="token punctuation">{</span>postMutation<span class="token punctuation">.</span>isError <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>오류 발생<span class="token operator">:</span> <span class="token punctuation">{</span>postMutation<span class="token punctuation">.</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>

      <span class="token punctuation">{</span>postMutation<span class="token punctuation">.</span>isSuccess <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>데이터가 성공적으로 게시되었습니다<span class="token operator">:</span> <span class="token punctuation">{</span>postMutation<span class="token punctuation">.</span>data<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React Query를 통해 다양한 로딩 및 오류 상태를 아름답게 처리하는 방법을 명확히 볼 수 있습니다. 더 많은 정보를 원하시면 공식 문서를 방문해보세요.</p>
<p>낙관적 업데이트</p>
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
<p>상태를 낙관적으로 업데이트한 후 변경 사항을 수행하기 전에 뮤테이션이 실패할 수 있습니다. 이러한 실패 경우 대부분에서 낙관적 쿼리를 되돌릴 수 있는 재요청만으로 문제를 해결할 수 있습니다. 그러나 때로는, 재요청이 제대로 작동하지 않아 뮤테이션 오류가 서버 문제와 관련된 경우 낙관적 업데이트를 되돌리는 것이 더 나을 수 있습니다.</p>
<p>아래 예시를 확인해보세요. 사용자가 추가 버튼을 클릭하면 즉시 항목이 추가되고, 해당 작업의 프로미스가 성공적으로 처리되었는지 확인한 후 계속해서 추가됩니다. 반면 프로미스가 거부되면 요청이 반환된 후 자동으로 사라집니다. 이 강력한 기능이 좋은 사용자 경험을 제공할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMutation<span class="token punctuation">,</span> useQuery <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@tanstack/react-query"</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
type Todo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">task</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">todos</span><span class="token operator">:</span> Todo<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">task</span><span class="token operator">:</span> <span class="token string">'사과 사기'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">task</span><span class="token operator">:</span> <span class="token string">'바나나 사기'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token literal-property property">task</span><span class="token operator">:</span> <span class="token string">'오렌지 사기'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token literal-property property">task</span><span class="token operator">:</span> <span class="token string">'딸기 사기'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> mutate<span class="token punctuation">,</span> isPending<span class="token punctuation">,</span> variables <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMutation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">mutationFn</span><span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newTodo</span><span class="token operator">:</span> Todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      todos<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newTodo<span class="token punctuation">)</span><span class="token punctuation">;</span>
      index<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">queryKey</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'todos'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token function-variable function">queryFn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> todos
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>

    <span class="token operator">&lt;</span>div className<span class="token operator">=</span>"flex items<span class="token operator">-</span>start justify<span class="token operator">-</span>start min<span class="token operator">-</span>h<span class="token operator">-</span>screen 
                      py<span class="token operator">-</span><span class="token number">2</span> mt<span class="token operator">-</span><span class="token number">20</span> px<span class="token operator">-</span><span class="token number">20</span> gap<span class="token operator">-</span><span class="token number">8</span>"<span class="token operator">></span>

      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token function">mutate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> index<span class="token punctuation">,</span> <span class="token literal-property property">task</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">수박</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        className<span class="token operator">=</span><span class="token string">"bg-purple-600 px-6 py-3 text-white"</span><span class="token operator">></span>
        추가
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>data<span class="token operator">?.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>todo<span class="token punctuation">.</span>task<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>

        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>isPending <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>li className<span class="token operator">=</span><span class="token string">"opacity-50 text-white"</span><span class="token operator">></span>
          <span class="token punctuation">{</span>variables<span class="token punctuation">.</span>task<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>

    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>무한 스크롤링과 페이지네이션</p>
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
<p>위는 React Query를 사용한 무한 스크롤 및 페이지네이션 예제입니다. 곧 관련 블로그 글을 작성할 예정이니 함께 지켜봐 주세요.</p>
</div></template>
