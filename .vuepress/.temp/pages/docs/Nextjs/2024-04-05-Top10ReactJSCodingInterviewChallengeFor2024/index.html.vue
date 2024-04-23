<template><div><img src="@source/docs/Nextjs/2024-04-05-Top10ReactJSCodingInterviewChallengeFor2024/img/Top10ReactJSCodingInterviewChallengeFor2024_0.png" />
<p>이 기사는 코딩 도전 과제를 탐구하고 ReactJS 인터뷰에서 성공하기 위한 필수적인 모베스트 프랙티스를 제공하는 것을 목표로 합니다. 핵심 개념과 실전 시나리오를 탐구함으로써 독자들은 ReactJS 코딩 인터뷰에서 무엇을 기대해야 하는지에 대한 포괄적인 이해를 얻을 것입니다.</p>
<h2 id="작업-1-사용자-목록-가져와서-표시" tabindex="-1"><a class="header-anchor" href="#작업-1-사용자-목록-가져와서-표시" aria-hidden="true">#</a> 작업-1: 사용자 목록 가져와서 표시</h2>
<p>오픈 소스 REST 엔드포인트에서 사용자의 세부 정보를 가져오고 테이블에서 적절한 스타일로 사용자의 세부 정보를 중앙에 표시하는 코드를 작성하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/users'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> result<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"users"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>
        <span class="token function">setUsers</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'사용자 데이터를 불러오는 중 오류 발생:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">textAlign</span><span class="token operator">:</span> <span class="token string">'center'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>사용자 세부 정보 테이블<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>table style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">borderCollapse</span><span class="token operator">:</span> <span class="token string">'collapse'</span><span class="token punctuation">,</span> <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token string">'auto'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'60%'</span><span class="token punctuation">,</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'1px solid #ddd'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>thead<span class="token operator">></span>
          <span class="token operator">&lt;</span>tr style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'1px solid #ddd'</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'black'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'white'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>th<span class="token operator">></span>이름<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
            <span class="token operator">&lt;</span>th<span class="token operator">></span>이메일<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
            <span class="token operator">&lt;</span>th<span class="token operator">></span>전화번호<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>thead<span class="token operator">></span>
        <span class="token operator">&lt;</span>tbody<span class="token operator">></span>
          <span class="token punctuation">{</span>
            users<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>
            users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>tr style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'1px solid #ddd'</span><span class="token punctuation">,</span> <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">'gray'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'white'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
                <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
                <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>phone<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>tbody<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="다른-방법" tabindex="-1"><a class="header-anchor" href="#다른-방법" aria-hidden="true">#</a> 다른 방법:</h2>
<p>만약 Axios 라이브러리를 사용하여 사용자 세부 정보를 불러오고 싶다면?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./UserTable.css'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">UserTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/users'</span><span class="token punctuation">)</span> <span class="token comment">// Axios를 사용하여 사용자 세부 정보 불러오기</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setUsers</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'사용자 데이터를 불러오는 중 오류 발생:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"user-table-container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>사용자 세부 정보<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>table className<span class="token operator">=</span><span class="token string">"user-table"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>thead<span class="token operator">></span>
          <span class="token operator">&lt;</span>tr<span class="token operator">></span>
            <span class="token operator">&lt;</span>th<span class="token operator">></span>이름<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
            <span class="token operator">&lt;</span>th<span class="token operator">></span>이메일<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
            <span class="token operator">&lt;</span>th<span class="token operator">></span>전화번호<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
            <span class="token operator">&lt;</span>th<span class="token operator">></span>웹사이트<span class="token operator">&lt;</span><span class="token operator">/</span>th<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>thead<span class="token operator">></span>
        <span class="token operator">&lt;</span>tbody<span class="token operator">></span>
          <span class="token punctuation">{</span>users<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>tr key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
              <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
              <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>phone<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
              <span class="token operator">&lt;</span>td<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>website<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>td<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>tr<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>tbody<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>table<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UserTable<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="작업-2-검색-기능-구현" tabindex="-1"><a class="header-anchor" href="#작업-2-검색-기능-구현" aria-hidden="true">#</a> 작업-2: 검색 기능 구현</h2>
<p>사용자 세부 정보를 가져와 사용자 이름을 표시합니다. 또한 사용자 이름에 대한 검색 기능을 구현하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">UserList</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>users<span class="token punctuation">,</span> setUsers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchTerm<span class="token punctuation">,</span> setSearchTerm<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/users'</span><span class="token punctuation">)</span> <span class="token comment">// 주어진 엔드포인트에서 사용자 세부 정보 가져오기</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> <span class="token function">setUsers</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'사용자 데이터 가져오기 오류:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> filteredUsers <span class="token operator">=</span> users<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span>
    user<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>searchTerm<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>사용자 목록<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        placeholder<span class="token operator">=</span><span class="token string">"사용자 이름으로 검색"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>searchTerm<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setSearchTerm</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>filteredUsers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">user</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UserList<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="작업-3-디바운스와-취소-가능-기술을-사용한-최적화된-검색" tabindex="-1"><a class="header-anchor" href="#작업-3-디바운스와-취소-가능-기술을-사용한-최적화된-검색" aria-hidden="true">#</a> 작업-3: 디바운스와 취소 가능 기술을 사용한 최적화된 검색</h2>
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
<p>테이블 태그를 Markdown 형식으로 변경하실래요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>usersData<span class="token punctuation">,</span> setUsersData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://jsonplaceholder.typicode.com/users"</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setUsersData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> error<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAscendingSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>usersData<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      a<span class="token punctuation">.</span>username<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>username<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setUsersData</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleDescendingSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> users <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>usersData<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      b<span class="token punctuation">.</span>username<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>username<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setUsersData</span><span class="token punctuation">(</span>users<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>사용자 이름으로 정렬하는 예시<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleAscendingSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        오름차순 정렬
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleDescendingSort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        내림차순 정렬
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token punctuation">{</span>usersData <span class="token operator">&amp;&amp;</span>
        usersData<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>user<span class="token punctuation">.</span>username<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="task-5-회원-가입-양식-제어-구성-요소-만들기" tabindex="-1"><a class="header-anchor" href="#task-5-회원-가입-양식-제어-구성-요소-만들기" aria-hidden="true">#</a> Task-5: 회원 가입 양식 제어 구성 요소 만들기</h2>
<p>사용자 등록 양식을 만들고 사용자 이름, 이메일 및 비밀번호 필드를 포함하도록 해주세요. 입력값을 유효성 검사하고 적절한 오류 메시지를 표시하세요. (입력값을 관리하는 상태를 가진 제어된 양식 컴포넌트를 만드세요.)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Yup <span class="token keyword">from</span> <span class="token string">'yup'</span><span class="token punctuation">;</span> <span class="token comment">// Form validation을 위해 Yup 가져오기</span>
<span class="token keyword">import</span> <span class="token string">'./UserRegistrationForm.css'</span><span class="token punctuation">;</span> <span class="token comment">// 컴포넌트용 CSS 파일 가져오기</span>

<span class="token keyword">const</span> <span class="token function-variable function">UserRegistrationForm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>formData<span class="token punctuation">,</span> setFormData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> <span class="token punctuation">[</span>errors<span class="token punctuation">,</span> setErrors<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>successMessage<span class="token punctuation">,</span> setSuccessMessage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> schema <span class="token operator">=</span> Yup<span class="token punctuation">.</span><span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> Yup<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token string">'이름을 입력해주세요'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> Yup<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token string">'성을 입력해주세요'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">email</span><span class="token operator">:</span> Yup<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">email</span><span class="token punctuation">(</span><span class="token string">'유효하지 않은 이메일입니다'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token string">'이메일을 입력해주세요'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> Yup<span class="token punctuation">.</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">required</span><span class="token punctuation">(</span><span class="token string">'비밀번호를 입력해주세요'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token string">'비밀번호는 최소 6자 이상이어야 합니다'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">validateField</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> schema<span class="token punctuation">.</span><span class="token function">validateAt</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setErrors</span><span class="token punctuation">(</span><span class="token parameter">prevErrors</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>prevErrors<span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">''</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setErrors</span><span class="token punctuation">(</span><span class="token parameter">prevErrors</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>prevErrors<span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> error<span class="token punctuation">.</span>message <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token function">setFormData</span><span class="token punctuation">(</span><span class="token parameter">prevData</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>prevData<span class="token punctuation">,</span> <span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token operator">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">validateField</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token keyword">const</span> <span class="token function-variable function">handleSubmit</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">await</span> schema<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span>formData<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">abortEarly</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 지연을 추가하여 API 호출 시뮬레이션</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setSuccessMessage</span><span class="token punctuation">(</span><span class="token string">'등록 완료!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> validationErrors <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      error<span class="token punctuation">.</span>inner<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fieldError</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        validationErrors<span class="token punctuation">[</span>fieldError<span class="token punctuation">.</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> fieldError<span class="token punctuation">.</span>message<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setErrors</span><span class="token punctuation">(</span>validationErrors<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>사용자 등록<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"firstName"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>formData<span class="token punctuation">.</span>firstName<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">{</span>errors<span class="token punctuation">.</span>firstName <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"error-message"</span><span class="token operator">></span><span class="token punctuation">{</span>errors<span class="token punctuation">.</span>firstName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> name<span class="token operator">=</span><span class="token string">"lastName"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>formData<span class="token punctuation">.</span>lastName<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">{</span>errors<span class="token punctuation">.</span>lastName <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"error-message"</span><span class="token operator">></span><span class="token punctuation">{</span>errors<span class="token punctuation">.</span>lastName<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"email"</span> name<span class="token operator">=</span><span class="token string">"email"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>formData<span class="token punctuation">.</span>email<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">{</span>errors<span class="token punctuation">.</span>email <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"error-message"</span><span class="token operator">></span><span class="token punctuation">{</span>errors<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"password"</span> name<span class="token operator">=</span><span class="token string">"password"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>formData<span class="token punctuation">.</span>password<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token punctuation">{</span>errors<span class="token punctuation">.</span>password <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>span className<span class="token operator">=</span><span class="token string">"error-message"</span><span class="token operator">></span><span class="token punctuation">{</span>errors<span class="token punctuation">.</span>password<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span> disabled<span class="token operator">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>loading <span class="token operator">?</span> <span class="token string">'제출 중...'</span> <span class="token operator">:</span> <span class="token string">'제출'</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token punctuation">{</span>successMessage <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"success-message"</span><span class="token operator">></span><span class="token punctuation">{</span>successMessage<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> UserRegistrationForm<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="작업-6-다크-모드-및-라이트-모드" tabindex="-1"><a class="header-anchor" href="#작업-6-다크-모드-및-라이트-모드" aria-hidden="true">#</a> 작업-6: 다크 모드 및 라이트 모드</h2>
<p>컨텍스트 API를 사용하여 앱 표시 모드를 변경하는 로직을 구현하세요.</p>
<ul>
<li>DisplayModeContext.js 파일</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> createContext<span class="token punctuation">,</span> useState<span class="token punctuation">,</span> useContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token comment">// 표시 모드를 위한 컨텍스트 생성</span>
<span class="token keyword">const</span> DisplayModeContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 표시 모드 컨텍스트를 사용하는 사용자 정의 훅 생성</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useDisplayMode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">useContext</span><span class="token punctuation">(</span>DisplayModeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 표시 모드 컨텍스트를 위한 프로바이더 컴포넌트 생성</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">DisplayModeProvider</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>displayMode<span class="token punctuation">,</span> setDisplayMode<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">"light"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 기본 표시 모드는 'light'입니다</span>

  <span class="token keyword">const</span> <span class="token function-variable function">toggleDisplayMode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setDisplayMode</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevMode</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>prevMode <span class="token operator">===</span> <span class="token string">"light"</span> <span class="token operator">?</span> <span class="token string">"dark"</span> <span class="token operator">:</span> <span class="token string">"light"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'light'와 'dark' 모드를 토글합니다</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>DisplayModeContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>displayMode<span class="token punctuation">,</span> toggleDisplayMode<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span>DisplayModeContext<span class="token punctuation">.</span>Provider<span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>App.js 파일</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDisplayMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./DisplayModeContext"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> displayMode<span class="token punctuation">,</span> toggleDisplayMode <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDisplayMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> appStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> displayMode <span class="token operator">===</span> <span class="token string">"light"</span> <span class="token operator">?</span> <span class="token string">"#ffffff"</span> <span class="token operator">:</span> <span class="token string">"#333333"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> displayMode <span class="token operator">===</span> <span class="token string">"light"</span> <span class="token operator">?</span> <span class="token string">"#333333"</span> <span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token string">"5px"</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>appStyle<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h3<span class="token operator">></span>디스플레이 모드를 변경하려면 아래 버튼을 누르세요<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">toggleDisplayMode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>displayMode <span class="token operator">===</span> <span class="token string">"light"</span> <span class="token operator">?</span> <span class="token string">"다크 모드"</span> <span class="token operator">:</span> <span class="token string">"라이트 모드"</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>index.js 파일</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StrictMode <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-dom/client"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DisplayModeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./DisplayModeContext"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rootElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>rootElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>DisplayModeProvider<span class="token operator">></span>
      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>DisplayModeProvider<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>StrictMode<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="태스크-7-할-일-목록" tabindex="-1"><a class="header-anchor" href="#태스크-7-할-일-목록" aria-hidden="true">#</a> 태스크-7: 할 일 목록</h2>
<p>할 일 목록을 추가하고 삭제할 수 있는 간단한 할 일 목록 애플리케이션을 만드세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>taskList<span class="token punctuation">,</span> setTaskList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>taskDetail<span class="token punctuation">,</span> setTaskDetail<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAddTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTaskList</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>taskList<span class="token punctuation">,</span> taskDetail<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTaskDetail</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleRemoveTask</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newTaskList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>taskList<span class="token punctuation">]</span><span class="token punctuation">;</span>
    newTaskList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTaskList</span><span class="token punctuation">(</span>newTaskList<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleTaskUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setTaskDetail</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h3<span class="token operator">></span>ToDO 목록<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
        <span class="token operator">&lt;</span>input
          type<span class="token operator">=</span><span class="token string">"text"</span>
          placeholder<span class="token operator">=</span><span class="token string">"할 일을 입력하세요"</span>
          value<span class="token operator">=</span><span class="token punctuation">{</span>taskDetail<span class="token punctuation">}</span>
          onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleTaskUpdate</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleAddTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>ul<span class="token operator">></span>
          <span class="token punctuation">{</span>taskList <span class="token operator">&amp;&amp;</span>
            taskList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>li<span class="token operator">></span>
                  <span class="token punctuation">{</span>item<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token string">" "</span><span class="token punctuation">}</span>
                  <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleRemoveTask</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                    삭제
                  <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="태스크-8-쇼핑-카트-컴포넌트" tabindex="-1"><a class="header-anchor" href="#태스크-8-쇼핑-카트-컴포넌트" aria-hidden="true">#</a> 태스크-8: 쇼핑 카트 컴포넌트</h2>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"티셔츠"</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">20</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"청바지"</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">50</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"신발"</span><span class="token punctuation">,</span>
      <span class="token property">"price"</span><span class="token operator">:</span> <span class="token number">80</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> itemsData <span class="token keyword">from</span> <span class="token string">"./items.json"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>items<span class="token punctuation">,</span> setItems<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>itemsData<span class="token punctuation">.</span>items<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>cart<span class="token punctuation">,</span> setCart<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">addToCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">itemId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> selectedItem <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> itemId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> itemInCart <span class="token operator">=</span> cart<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> itemId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>itemInCart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> updatedCart <span class="token operator">=</span> cart<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> itemId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>item<span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>quantity <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> item<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setCart</span><span class="token punctuation">(</span>updatedCart<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setCart</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>cart<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token operator">...</span>selectedItem<span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">removeFromCart</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">itemId</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> updatedCart <span class="token operator">=</span> cart<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> itemId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCart</span><span class="token punctuation">(</span>updatedCart<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">updateQuantity</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">itemId<span class="token punctuation">,</span> newQuantity</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newQuantity <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 5개를 초과하는 수량 업데이트 방지</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> updatedCart <span class="token operator">=</span> cart<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>id <span class="token operator">===</span> itemId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>item<span class="token punctuation">,</span> <span class="token literal-property property">quantity</span><span class="token operator">:</span> newQuantity <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCart</span><span class="token punctuation">(</span>updatedCart<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">calculateTotal</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> cart<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">total<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token operator">=></span> total <span class="token operator">+</span> item<span class="token punctuation">.</span>price <span class="token operator">*</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>quantity <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token number">0</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>장바구니<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>사용 가능한 상품<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>items<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token operator">-</span> $<span class="token punctuation">{</span>item<span class="token punctuation">.</span>price<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">addToCart</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>장바구니에 추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>카트 총액<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>cart<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span> <span class="token operator">-</span> $<span class="token punctuation">{</span>item<span class="token punctuation">.</span>price<span class="token punctuation">}</span> <span class="token operator">-</span>
            <span class="token operator">&lt;</span>select
              value<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>quantity <span class="token operator">||</span> <span class="token number">1</span><span class="token punctuation">}</span>
              onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span>
                <span class="token function">updateQuantity</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
              <span class="token punctuation">}</span>
            <span class="token operator">></span>
              <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>option key<span class="token operator">=</span><span class="token punctuation">{</span>number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span> value<span class="token operator">=</span><span class="token punctuation">{</span>number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token operator">></span>
                  <span class="token punctuation">{</span>number <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>option<span class="token operator">></span>
              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
            <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">removeFromCart</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>제거<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>총액<span class="token operator">:</span> $<span class="token punctuation">{</span><span class="token function">calculateTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="task-9-페이징-컴포넌트" tabindex="-1"><a class="header-anchor" href="#task-9-페이징-컴포넌트" aria-hidden="true">#</a> Task-9: 페이징 컴포넌트</h2>
<p>API에서 데이터를 가져와 고정된 페이지 당 항목 수를 보여주는 페이징 컴포넌트를 구축하십시오</p>
<p>-paginated.js</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">PaginationComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> apiUrl<span class="token punctuation">,</span> itemsPerPage <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>currentPage<span class="token punctuation">,</span> setCurrentPage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>totalPages<span class="token punctuation">,</span> setTotalPages<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
          <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>apiUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?_page=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&amp;_limit=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>itemsPerPage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// API가 JSON 데이터로 응답한다고 가정</span>
        <span class="token keyword">const</span> jsonData <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setData</span><span class="token punctuation">(</span>jsonData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// API 응답 헤더에서 항목의 총 수를 가져옵니다.</span>
        <span class="token keyword">const</span> totalCount <span class="token operator">=</span> response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"X-Total-Count"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setTotalPages</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>totalCount <span class="token operator">/</span> itemsPerPage<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"데이터를 가져오는 중 오류가 발생했습니다:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>apiUrl<span class="token punctuation">,</span> currentPage<span class="token punctuation">,</span> itemsPerPage<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handlePageChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">newPage</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setCurrentPage</span><span class="token punctuation">(</span>newPage<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>ol<span class="token operator">></span>
        <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>li key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span> <span class="token comment">// 'name'이 화면에 표시할 속성임을 가정</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ol<span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handlePageChange</span><span class="token punctuation">(</span>currentPage <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          disabled<span class="token operator">=</span><span class="token punctuation">{</span>currentPage <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">}</span>
        <span class="token operator">></span>
          이전
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
        <span class="token operator">&lt;</span>span<span class="token operator">></span>
          현재 <span class="token punctuation">{</span>currentPage<span class="token punctuation">}</span> 페이지 <span class="token operator">/</span> 총 <span class="token punctuation">{</span>totalPages<span class="token punctuation">}</span> 페이지
        <span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
        <span class="token operator">&lt;</span>button
          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handlePageChange</span><span class="token punctuation">(</span>currentPage <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          disabled<span class="token operator">=</span><span class="token punctuation">{</span>currentPage <span class="token operator">===</span> totalPages<span class="token punctuation">}</span>
        <span class="token operator">></span>
          다음
        <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> PaginationComponent<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-App.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> PaginationComponent <span class="token keyword">from</span> <span class="token string">"./paginated"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>페이징 예제<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>PaginationComponent
        apiUrl<span class="token operator">=</span><span class="token string">"https://jsonplaceholder.typicode.com/posts"</span>
        itemsPerPage<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="task-10-무한-스크롤-갤러리와-지연-로딩" tabindex="-1"><a class="header-anchor" href="#task-10-무한-스크롤-갤러리와-지연-로딩" aria-hidden="true">#</a> Task-10: 무한 스크롤 갤러리와 지연 로딩```</h2>
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
<p>페이지를 스크롤할 때 사용자가 스크롤하면 추가 이미지를 불러오는 이미지 갤러리를 만들어보세요. 성능을 높이기 위해 lazy loading을 구현해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./styles.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>images<span class="token punctuation">,</span> setImages<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>page<span class="token punctuation">,</span> setPage<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">fetchImages</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// 앤스플래쉬에서 개발자 계정을 등록하고 앱을 만든 후에 클라이언트 ID를 사용하세요.</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://api.unsplash.com/photos/?client_id=weJDI4C21OzgEkJD2ZSkb5yt1aBQwiuHh2tVK4tvS5w&amp;page=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>page<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"불러오기 실패"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setImages</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevImages</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevImages<span class="token punctuation">,</span> <span class="token operator">...</span>data<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setPage</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevPage</span><span class="token punctuation">)</span> <span class="token operator">=></span> prevPage <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"잘못된 데이터 형식:"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"이미지 불러오기 오류:"</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">fetchImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      window<span class="token punctuation">.</span>innerHeight <span class="token operator">+</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop <span class="token operator">!==</span>
        document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>offsetHeight <span class="token operator">||</span>
      loading
    <span class="token punctuation">)</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token function">fetchImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"scroll"</span><span class="token punctuation">,</span> handleScroll<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">"scroll"</span><span class="token punctuation">,</span> handleScroll<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>loading<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>이미지 갤러리<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"image-gallery"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>images<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">image</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>img
            key<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            src<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">.</span>urls<span class="token punctuation">.</span>small<span class="token punctuation">}</span>
            alt<span class="token operator">=</span><span class="token punctuation">{</span>image<span class="token punctuation">.</span>alt_description<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>loading <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>p<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 글이 마음에 드시길 바라며, 감사합니다.</p>
<p>Medium에서 더 많은 흥미로운 글을 확인하세요.</p>
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
<p>다른 플랫폼:</p>
<p>LinkedIn에서 나를 팔로우하세요: <a href="https://www.linkedin.com/in/ravics09/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/ravics09/<ExternalLinkIcon/></a></p>
<p>X에서 나를 팔로우하세요: <a href="https://twitter.com/JS_Centric?t=nyKrM6oaUigAUYNtsWkuUw&amp;s=09" target="_blank" rel="noopener noreferrer">https://twitter.com/JS_Centric?t=nyKrM6oaUigAUYNtsWkuUw&amp;s=09<ExternalLinkIcon/></a></p>
<p>내 YouTube 채널을 구독하세요: <a href="https://www.youtube.com/channel/UC9MmyicGIveu0AId8OFAOmQ" target="_blank" rel="noopener noreferrer">https://www.youtube.com/channel/UC9MmyicGIveu0AId8OFAOmQ<ExternalLinkIcon/></a></p>
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
<h1 id="쉽게-이해하는-영어-커뮤니티에-참여해-주셔서-감사합니다-떠나시기-전에" tabindex="-1"><a class="header-anchor" href="#쉽게-이해하는-영어-커뮤니티에-참여해-주셔서-감사합니다-떠나시기-전에" aria-hidden="true">#</a> 쉽게 이해하는 영어 커뮤니티에 참여해 주셔서 감사합니다! 떠나시기 전에:</h1>
<ul>
<li>저자를 클랩하고 팔로우해주세요 ️👏️️</li>
<li>팔로우하기: X | LinkedIn | YouTube | Discord | Newsletter</li>
<li>다른 플랫폼 방문하기: Stackademic | CoFeed | Venture</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠를 만나보세요</li>
</ul>
</div></template>
