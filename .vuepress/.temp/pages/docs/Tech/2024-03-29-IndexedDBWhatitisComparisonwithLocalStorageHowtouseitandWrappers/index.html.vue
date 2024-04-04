<template><div><h1 id="인덱스된-db에-대해-알아볼까요" tabindex="-1"><a class="header-anchor" href="#인덱스된-db에-대해-알아볼까요" aria-hidden="true">#</a> 인덱스된 DB에 대해 알아볼까요?</h1>
<p>그럼요! 기본부터 시작해볼게요.</p>
<p>인덱스된 DB는 &quot;DB&quot;로 표시되는 데이터베이스로, 웹에서 대량의 구조화된 데이터를 저장할 수 있게 해 줍니다.</p>
<p>이는 SQL 기반의 데이터베이스로, 고정된 열의 양이 아닌 자바스크립트 객체를 저장하고 검색할 수 있게 해 줍니다.</p>
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
<p>대부분의 데이터베이스와 마찬가지로이 데이터베이스는 초고속 액세스 속도를 위해 데이터베이스 인덱스를 사용합니다.</p>
<h1 id="localstorage-대신-indexeddb를-사용하는-이유는" tabindex="-1"><a class="header-anchor" href="#localstorage-대신-indexeddb를-사용하는-이유는" aria-hidden="true">#</a> LocalStorage 대신 IndexedDB를 사용하는 이유는?</h1>
<p><img src="@source/docs/Tech/2024-03-29-IndexedDBWhatitisComparisonwithLocalStorageHowtouseitandWrappers/img/IndexedDBWhatitisComparisonwithLocalStorageHowtouseitandWrappers_0.png" alt="이미지"></p>
<h2 id="저장-용량-제한" tabindex="-1"><a class="header-anchor" href="#저장-용량-제한" aria-hidden="true">#</a> 저장 용량 제한</h2>
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
<p>웹에서 저장소에 대해 이야기할 때 고려해야 할 첫 번째 사항은 저장할 수 있는 데이터의 양입니다.</p>
<p>LocalStorage의 기본 최대 저장 용량은 브라우저 및 버전에 따라 5MB에서 10MB 사이로 범위가 있습니다.</p>
<p>반면에 IndexedDB에서는 일반적으로 제한이 없거나 대부분의 경우 거의 걱정할 필요가 없을 정도로 높은 제한이 있습니다.</p>
<p>이렇게 보면 IndexedDB가 수천 개의 이미지를 로컬 사용자 지정 캐시에 저장하는 등 LocalStorage로는 일반적으로 불가능했던 새로운 가능성의 세계를 열어준다는 것을 이미 알 수 있습니다.</p>
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
<h2 id="작업-순서" tabindex="-1"><a class="header-anchor" href="#작업-순서" aria-hidden="true">#</a> 작업 순서</h2>
<p>이 내용은 간단합니다. LocalStorage의 작업은 동기적으로, 그러나 IndexedDB의 작업은 비동기적으로 처리됩니다.</p>
<p>예를 들어, React 18.2 애플리케이션에서 작은 데이터를 다루고 있다면, 현재 React는 비동기 컴포넌트를 지원하지 않기 때문에 작업이 필요한 경우 기다릴 수 없기 때문에 LocalStorage를 사용하는 것이 더 현명한 선택일 수 있습니다. 다만, React 19에서는 마침내 use hook이라는 다음으로 좋은 대안을 제공하게 될 것입니다.</p>
<h2 id="브라우저-지원" tabindex="-1"><a class="header-anchor" href="#브라우저-지원" aria-hidden="true">#</a> 브라우저 지원</h2>
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
<p>LocalStorage가 여기에서 분명한 우승자입니다.</p>
<p>브라우저에 가장 먼저 나온 저장소 API 중 하나이기 때문에 대부분의 브라우저에서 LocalStorage를 아주 초기 버전부터 지원하고 있습니다. 예를 들어 Chrome은 버전 4부터 지원합니다!</p>
<p>IndexedDB도 브라우저 지원이 훌륭하지만 일부 브라우저는 비교적 최근에 채택했습니다. Edge는 버전 79부터 완전한 지원을 제공하며 Safari는 버전 10부터 지원합니다. 그러나 버전 14.1에서 일부 기능이 부분적으로 동작하지 않는 버그가 있습니다.</p>
<h1 id="사용-방법" tabindex="-1"><a class="header-anchor" href="#사용-방법" aria-hidden="true">#</a> 사용 방법</h1>
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
<p>일부 웹 개발자는 IndexedDB를 별로 좋아하지 않을 수 있습니다. 왜냐하면 브라우저에서 실행되는 전체 SQL 데이터베이스이기 때문이죠! 하지만 그들이 생각하는 것과는 달리, 고급 API에 접근할 필요가 없다면 실제로는 IndexedDB를 사용하는 것이 정말 간단합니다.</p>
<p>먼저 데이터베이스를 만들어 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> openRequest <span class="token operator">=</span> window<span class="token punctuation">.</span>indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"MediumExampleDatabase"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그런 다음, IndexedDB 작업이 비동기적임을 감안하여, 성공/실패 이벤트를 청취해야 합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>openRequest<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Game Over 💀"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 데이터베이스가 초기화되거나 버전이 업데이트 될 때 호출됩니다</span>
openRequest<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> db <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 IndexedDB에서 객체 저장소로 알려진 테이블을 생성해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> objectStore <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span><span class="token string">"users"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>마지막으로 &quot;users&quot; 데이터베이스에서 데이터를 추가하고 검색해 봅시다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 데이터 추가하기</span>
<span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token string">"9bfe59ff-00a1-4170-8375-bf0c1bf92e94"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> addRequest <span class="token operator">=</span> objectStore<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span>
  <span class="token literal-property property">interests</span><span class="token operator">:</span> <span class="token string">"programmingtales.com 을 둘러보기"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 데이터 가져오기</span>
addRequest<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> getRequest <span class="token operator">=</span> objectStore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
  getRequest<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 출력:</span>
    <span class="token comment">// {</span>
    <span class="token comment">//   firstName: "John",</span>
    <span class="token comment">//   lastName: "Doe",</span>
    <span class="token comment">//   age: 54,</span>
    <span class="token comment">//   interests: "programmingtales.com 을 둘러보기"</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 예제의 전체 코드는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> openRequest <span class="token operator">=</span> window<span class="token punctuation">.</span>indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">"MediumExampleDatabase"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

openRequest<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Game Over 💀"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

openRequest<span class="token punctuation">.</span><span class="token function-variable function">onupgradeneeded</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> db <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>
  <span class="token keyword">const</span> objectStore <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span><span class="token string">"users"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 데이터 추가하기</span>
  <span class="token keyword">const</span> userId <span class="token operator">=</span> <span class="token string">"9bfe59ff-00a1-4170-8375-bf0c1bf92e94"</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> addRequest <span class="token operator">=</span> objectStore<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">"John"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">"Doe"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">54</span><span class="token punctuation">,</span>
    <span class="token literal-property property">interests</span><span class="token operator">:</span> <span class="token string">"programmingtales.com 을 둘러보기"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 데이터 가져오기</span>
  addRequest<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> getRequest <span class="token operator">=</span> objectStore<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    getRequest<span class="token punctuation">.</span><span class="token function-variable function">onsuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> result <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">;</span>

      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 출력:</span>
      <span class="token comment">// {</span>
      <span class="token comment">//   firstName: "John",</span>
      <span class="token comment">//   lastName: "Doe",</span>
      <span class="token comment">//   age: 54,</span>
      <span class="token comment">//   interests: "programmingtales.com 을 둘러보기"</span>
      <span class="token comment">// }</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="indexeddb-wrapper" tabindex="-1"><a class="header-anchor" href="#indexeddb-wrapper" aria-hidden="true">#</a> IndexedDB Wrapper</h1>
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
<p>만약 IndexedDB 작업이 많은 보일러플레이트로 느껴진다거나 이벤트 기반 아키텍처를 싫어한다면, 나도 이해해요. 실제로 이는 매우 흔한 불평 중 하나라서 NPM에 약속 기반(IndexedDB) 래퍼가 많이 있답니다. 그러니 몇 가지 살펴봐 볼까요!</p>
<p>참고: 이 글은 IndexedDB 래퍼 목록과 함께 예시 코드가 포함되어 있어요. 이 코드는 제가 작성한 것이 아니라 각 래퍼의 공식 문서에서 가져온 것이에요.</p>
<h2 id="dexie-js" tabindex="-1"><a class="header-anchor" href="#dexie-js" aria-hidden="true">#</a> Dexie.js</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token comment">/*
 |----------------------------|
 | 데이터베이스 선언          |
 |----------------------------|
 */</span>

 <span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dexie</span><span class="token punctuation">(</span><span class="token string">'MyDatabase'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">// 테이블, ID 및 인덱스 선언</span>
 db<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stores</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token string">'++id, name, age'</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


 <span class="token comment">/*
 |-----------------------|
 | 쿼리 실행               |
 |-----------------------|
 */</span>

 <span class="token comment">// 오래된 친구들 찾기</span>
 <span class="token keyword">const</span> oldFriends <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span>friends
  <span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">'age'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">above</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token comment">// 혹은 새로운 친구 만들기</span>
 <span class="token keyword">await</span> db<span class="token punctuation">.</span>friends<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Camilla'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
  <span class="token literal-property property">street</span><span class="token operator">:</span> <span class="token string">'East 13:th Street'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">picture</span><span class="token operator">:</span> <span class="token keyword">await</span> <span class="token function">getBlob</span><span class="token punctuation">(</span><span class="token string">'camilla.png'</span><span class="token punctuation">)</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="idb" tabindex="-1"><a class="header-anchor" href="#idb" aria-hidden="true">#</a> idb</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">openDB</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span>storeName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span>storeName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 상점에서 값 가져오기:</span>
<span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>storeName<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 상점에 값 설정하기:</span>
<span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>storeName<span class="token punctuation">,</span> value<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="jsstore" tabindex="-1"><a class="header-anchor" href="#jsstore" aria-hidden="true">#</a> jsstore</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> dbName <span class="token operator">=</span><span class="token string">'JsStore_Demo'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> tblProduct <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Product'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 여기서 "Id"는 열의 이름입니다.</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token punctuation">{</span> <span class="token literal-property property">primaryKey</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">autoIncrement</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">itemName</span><span class="token operator">:</span>  <span class="token punctuation">{</span> <span class="token literal-property property">notNull</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">"string"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">price</span><span class="token operator">:</span>  <span class="token punctuation">{</span> <span class="token literal-property property">notNull</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">"number"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">quantity</span> <span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">notNull</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">"number"</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> database <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> dbName<span class="token punctuation">,</span>
    <span class="token literal-property property">tables</span><span class="token operator">:</span> <span class="token punctuation">[</span>tblProduct<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> isDbCreated <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">initDb</span><span class="token punctuation">(</span>database<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isDbCreated <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"데이터베이스가 생성되었습니다."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 여기에 데이터베이스를 일부 데이터로 미리 채울 수 있습니다.</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"데이터베이스가 열렸습니다."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">itemName</span><span class="token operator">:</span> <span class="token string">'청바지'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">price</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">quantity</span><span class="token operator">:</span> <span class="token number">1000</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> insertCount <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">into</span><span class="token operator">:</span> <span class="token string">'Product'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">values</span><span class="token operator">:</span> <span class="token punctuation">[</span>value<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>insertCount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 행이 삽입되었습니다.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 결과는 객체의 배열로 반환됩니다.</span>
<span class="token keyword">var</span> results <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">'Product'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">where</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">alert</span><span class="token punctuation">(</span>results<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token string">'개의 레코드 찾음'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="여기까지-입니다" tabindex="-1"><a class="header-anchor" href="#여기까지-입니다" aria-hidden="true">#</a> 여기까지 입니다!</h2>
<p>IndexedDB에 대해 하루 종일 이야기할 수 있어요. 많은 저수준 메소드들이 있어요. 그러나 이 소개/튜토리얼은 IndexedDB에서 간단한 작업을 수행하는 방법을 보여주기 위한 것이었기 때문에, 그로 인해 여기서 마치는 것이 최선일 것 같아요.</p>
</div></template>
