<template><div><p><img src="https://miro.medium.com/v2/resize:fit:1400/1*b1MmVu5Ivb6BgNhzESNO2g.gif" alt="image"></p>
<h1 id="요구-사항과-전제-조건" tabindex="-1"><a class="header-anchor" href="#요구-사항과-전제-조건" aria-hidden="true">#</a> 요구 사항과 전제 조건</h1>
<p>React에 초심자가 아니라고 가정하고 있습니다. 제어 컴포넌트, 라이프사이클, 훅, 조건부 렌더링 및 상태를 다루는 컴포넌트에 익숙하다고 가정하고 있습니다.</p>
<p>이외에도 React 전문 개발자이신 경우 의견을 환영합니다.</p>
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
<p>준비 사항</p>
<ul>
<li>React 앱이 생성되고 브라우저에서 렌더링되는 IDE</li>
<li>App.jsx와 CSS 파일과 같은 React의 보일러플레이트 코드 지우기</li>
<li>주어진 디펜던시 설치하기: npm i react-router-dom</li>
<li>해당 파일 및 경로에 스타터 코드 복사하기</li>
<li>필요한 경우 파일 생성하기</li>
</ul>
<p>스타터 코드</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//경로: src/index.css</span>
body <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> blanchedalmond<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>App <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> sans<span class="token operator">-</span>serif<span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

a <span class="token punctuation">{</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> rebeccapurple<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">a</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
  text<span class="token operator">-</span>decoration<span class="token operator">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">a</span><span class="token operator">:</span>visited <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> blueviolet<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">a</span><span class="token operator">:</span>active <span class="token punctuation">{</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>search<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">80</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>top<span class="token operator">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>search<span class="token operator">-</span>container input <span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 12px 20px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 8px <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> inline<span class="token operator">-</span>block<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ccc<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 4px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>sizing<span class="token operator">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> auto <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>search<span class="token operator">-</span>container ul <span class="token punctuation">{</span>
  list<span class="token operator">-</span>style<span class="token operator">-</span>type<span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  text<span class="token operator">-</span>align<span class="token operator">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>search<span class="token operator">-</span>container li <span class="token punctuation">{</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  margin<span class="token operator">-</span>left<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>search<span class="token operator">-</span>container <span class="token punctuation">.</span>active <span class="token punctuation">{</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> yellow<span class="token punctuation">;</span>
  <span class="token literal-property property">color</span><span class="token operator">:</span> black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>search<span class="token operator">-</span>container <span class="token punctuation">.</span>active<span class="token operator">:</span>hover <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> gray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>search<span class="token operator">-</span>container li<span class="token operator">:</span>hover <span class="token punctuation">{</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> gray<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>card<span class="token operator">-</span>container <span class="token punctuation">{</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>user<span class="token operator">-</span>card <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid gray<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
  box<span class="token operator">-</span>shadow<span class="token operator">:</span>
    <span class="token number">0</span> 4px 8px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token number">0</span> 6px 20px <span class="token number">0</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.19</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>card<span class="token operator">-</span>title <span class="token punctuation">{</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>card<span class="token operator">-</span>text <span class="token punctuation">{</span>
  font<span class="token operator">-</span>style<span class="token operator">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 경로: src/components/Search.jsx</span>
<span class="token comment">// 주로 이 파일에 초점을 맞출 거에요</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>search<span class="token punctuation">,</span> setSearch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"search-container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"검색..."</span> value<span class="token operator">=</span><span class="token punctuation">{</span>search<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setSearch</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Search<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 경로: src/components/Dashboard.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Dashboard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// useParams를 사용하여 URL에서 id와 name을 추출</span>
  <span class="token comment">// useParams는 URL 매개변수의 키/값 쌍 객체를 반환합니다.</span>
  <span class="token comment">// 예: { id: '123', name: 'John Doe' }</span>
  <span class="token comment">// API 호출로 대시보드 표시하는 데 사용합니다</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> id<span class="token punctuation">,</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>대시보드<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span>id<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>이름<span class="token operator">:</span> <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Dashboard<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 경로: src/App.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Routes<span class="token punctuation">,</span> Route <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Search <span class="token keyword">from</span> <span class="token string">"./components/Search"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Dashboard <span class="token keyword">from</span> <span class="token string">"./components/Dashboard"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Routes<span class="token operator">></span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Search <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* id와 name을 매개변수로 전달 */</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">"/user/:id/:name"</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Dashboard <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Routes<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 경로: src/index.jsx 또는 main.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom/client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.jsx"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./index.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>BrowserRouter<span class="token operator">></span>
      <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>BrowserRouter<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>서버를 실행하면 입력란으로 검색 상자가 나타납니다.</p>
<h1 id="_1-filter-data-onchange" tabindex="-1"><a class="header-anchor" href="#_1-filter-data-onchange" aria-hidden="true">#</a> 1. Filter Data onChange</h1>
<p>여기서 우리는 간단한 것을 만들 것입니다.</p>
<ul>
<li>사용자가 검색 상자에 무언가를 입력할 때 해당 입력 값을 캡처합니다.</li>
<li>입력 값을 가져와 데이터 배열을 필터링합니다.</li>
<li>검색 값과 일치하는 처음 6개 항목을 반환합니다.</li>
<li>현재, 우리는 &quot;id&quot;와 &quot;name&quot;이 키인 색을 나타내는 객체 배열을 사용하고 있습니다.</li>
<li>마지막으로 이러한 필터링된 결과를 사용자에게 드롭다운으로 표시합니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//경로: src/components/Search.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> colors <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../lib/data"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>search<span class="token punctuation">,</span> setSearch<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>firstSixMatching<span class="token punctuation">,</span> setFirstSixMatching<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 변경 이벤트 처리</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSearch</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 검색 값에 따라 색상 배열 필터링</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> matchingColors <span class="token operator">=</span> colors<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">color</span><span class="token punctuation">)</span> <span class="token operator">=></span>
        <span class="token comment">// 색상 이름이 검색 값을 포함하는지 확인 (대소문자 구분 없음)</span>
        color<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 마지막으로, 첫 6개의 일치하는 색상 설정</span>
      <span class="token function">setFirstSixMatching</span><span class="token punctuation">(</span>matchingColors<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 검색 값이 비어 있으면, 처음 6개의 일치하는 색상 초기화</span>
      <span class="token function">setFirstSixMatching</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"search-container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"검색..."</span> value<span class="token operator">=</span><span class="token punctuation">{</span>search<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span><span class="token comment">/* 검색 기준으로 필터링된 것을 드롭다운으로 표시 */</span><span class="token punctuation">}</span>
        <span class="token punctuation">{</span>firstSixMatching <span class="token operator">&amp;&amp;</span>
          firstSixMatching<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li
              key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">setSearch</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span>
              className<span class="token operator">=</span><span class="token punctuation">{</span>search <span class="token operator">===</span> item<span class="token punctuation">.</span>name <span class="token operator">?</span> <span class="token string">"active"</span> <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">}</span>
            <span class="token operator">></span>
              <span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Search<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 경로: src/lib/data.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> colors <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#f00"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"green"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#0f0"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"blue"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#00f"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"cyan"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#0ff"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"magenta"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#f0f"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"yellow"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#ff0"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"black"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#000"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"white"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#fff"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"purple"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#800080"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"brown"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#a52a2a"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"pink"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#ffc0cb"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"orange"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#ffa500"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"gray"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#808080"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lime"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#00ff00"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"teal"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#008080"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"navy"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#000080"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"silver"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#c0c0c0"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"gold"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#ffd700"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"indigo"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#4b0082"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"maroon"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#800000"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"olive"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#808000"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"aqua"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#00ffff"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"violet"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#ee82ee"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"coral"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#ff7f50"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"sky blue"</span><span class="token punctuation">,</span> <span class="token literal-property property">hex</span><span class="token operator">:</span> <span class="token string">"#87ceeb"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 설정 후 브라우저에서 다음과 같은 것을 찾을 수 있습니다</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*F9v4zCtWJddPW_QHgAf9Ng.gif" />```</p>
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
<h1 id="_2-key-down-이벤트-리스너-및-enter-키에서-함수-실행" tabindex="-1"><a class="header-anchor" href="#_2-key-down-이벤트-리스너-및-enter-키에서-함수-실행" aria-hidden="true">#</a> 2. Key Down 이벤트 리스너 및 &quot;ENTER&quot; 키에서 함수 실행</h1>
<p>현재는 필터링 및 표시가 가능하지만, 화살표 키를 사용하여 입력 상태를 변경할 수도 있으면 좋겠습니다. 현재는 아래 화살표 키를 위해 이 기능을 구현하는 데 집중하고 있지만, 위 화살표 키를 지원하도록 조건문을 쉽게 수정할 수 있습니다.</p>
<p>주어진 주석에 맞게 코드를 수정하는 데 필요한 변경 사항은 다음과 같습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//pautth : src/components/Search.jsx</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleKeyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"Enter"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Enter 키가 눌렸습니다: 이 로그 문 대신 함수를 실행할 수 있습니다."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"ArrowDown"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// index를 1씩 증가시키고 해당 인덱스에서의 컬러 이름으로 검색 값을 설정합니다.</span>
      <span class="token function">setSearch</span><span class="token punctuation">(</span>firstSixMatching<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setIndex</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> firstSixMatching<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 리스트의 끝에 도달하면, 다시 처음부터 시작하도록 인덱스를 0으로 재설정합니다.</span>
        <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"search-container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input
        type<span class="token operator">=</span><span class="token string">"text"</span>
        placeholder<span class="token operator">=</span><span class="token string">"검색..."</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>search<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
        <span class="token comment">// keydown 이벤트 처리</span>
        onKeyDown<span class="token operator">=</span><span class="token punctuation">{</span>handleKeyDown<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*eK3gk3QV0ZwFVqDJOQUbqg.gif" alt="Image"></p>
<h1 id="_3-api-통합-및-대시보드-페이지로-이동" tabindex="-1"><a class="header-anchor" href="#_3-api-통합-및-대시보드-페이지로-이동" aria-hidden="true">#</a> 3. API 통합 및 대시보드 페이지로 이동</h1>
<p>이제 로직을 이해하고 엔터키에서 작동하는 함수를 실행했으니, 준비가 되셨다면 떠나는 시간이군요. 하지만, 아직 저의 카드 속에 숨겨진 것들이 있습니다.</p>
<p>이제 실제 API를 사용하여 테스트하고 사용자를 대시보드 페이지로 이동하도록 안내할 것입니다. 또한 필터링된 컴포넌트를 표시할 것이기 때문에 속도가 조금 빨라질 것입니다. 빠르게 진행되므로 놓친 부분이나 이해하지 못한 부분에 대해 댓글을 남겨주시고 걱정하지 마세요. 주석이 달린 코드도 준비되어 있을 겁니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 경로: src/lib/hooks/useFetch.jsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useMemo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">useFetch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isLoading<span class="token punctuation">,</span> setIsLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>
            `문제 발생 $<span class="token punctuation">{</span>res<span class="token punctuation">.</span>status<span class="token punctuation">}</span> $<span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">switch</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span>
                  <span class="token keyword">return</span> <span class="token string">"찾을 수 없음"</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span>
                  <span class="token keyword">return</span> <span class="token string">"내부 서버 오류"</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span>
                  <span class="token keyword">return</span> <span class="token string">"금지됨"</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span>
                  <span class="token keyword">return</span> <span class="token string">"인증되지 않음"</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span>
                  <span class="token keyword">return</span> <span class="token string">"잘못된 요청"</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                  <span class="token keyword">return</span> <span class="token string">"알 수 없는 오류"</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>`<span class="token punctuation">,</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">setData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token function">setIsLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"취소"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">useMemo</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useFetch<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 경로: src/components/Search.jsx</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useNavigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-router-dom"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> useFetch <span class="token keyword">from</span> <span class="token string">"../lib/hooks/useFetch"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// useFetch로 API에서 데이터, 오류 및 로딩 상태 가져오기</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> isLoading<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useFetch</span><span class="token punctuation">(</span><span class="token string">"https://jsonplaceholder.typicode.com/users"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> navigate <span class="token operator">=</span> <span class="token function">useNavigate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>index<span class="token punctuation">,</span> setIndex<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>search<span class="token punctuation">,</span> setSearch<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>firstSixMatching<span class="token punctuation">,</span> setFirstSixMatching<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSearch</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value <span class="token operator">!==</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> matching <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setFirstSixMatching</span><span class="token punctuation">(</span>matching<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setFirstSixMatching</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleKeyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>search <span class="token operator">===</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"Enter"</span> <span class="token operator">&amp;&amp;</span> search <span class="token operator">!==</span> <span class="token string">""</span> <span class="token operator">&amp;&amp;</span> firstSixMatching<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/user/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>firstSixMatching<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>firstSixMatching<span class="token punctuation">[</span>index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"ArrowDown"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setSearch</span><span class="token punctuation">(</span>firstSixMatching<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setIndex</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">>=</span> firstSixMatching<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setIndex</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>error<span class="token punctuation">.</span>message<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"search-container"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"Search..."</span> value<span class="token operator">=</span><span class="token punctuation">{</span>search<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> onKeyDown<span class="token operator">=</span><span class="token punctuation">{</span>handleKeyDown<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>ul<span class="token operator">></span>
        <span class="token punctuation">{</span>firstSixMatching <span class="token operator">&amp;&amp;</span>
          firstSixMatching<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>li
              key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span>
              onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">navigate</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/user/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token function">setSearch</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">}</span>
              className<span class="token operator">=</span><span class="token punctuation">{</span>search <span class="token operator">===</span> item<span class="token punctuation">.</span>name <span class="token operator">?</span> <span class="token string">"active"</span> <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">}</span>
            <span class="token operator">></span>
              <span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">></span>
      <span class="token punctuation">{</span>firstSixMatching<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Users List based on search<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">}</span>

      <span class="token punctuation">{</span>firstSixMatching<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> search <span class="token operator">!==</span> <span class="token string">""</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>No Users Found<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"card-container"</span><span class="token operator">></span>
        <span class="token punctuation">{</span>firstSixMatching<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>Link key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/user/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>item<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"user-card"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>h1 className<span class="token operator">=</span><span class="token string">"card-title"</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"card-text"</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>email<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token string">"card-text"</span><span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>phone<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Search<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리가 가진 내용을 검토해보고 궁금한 점이 있으면 알려주세요. 그리고 마음에 드신다면 기립 박수를 추가해 주세요.</p>
<img src="https://miro.medium.com/v2/resize:fit:904/1*6h2-hGeAdwENKl2c5cXCTg.gif" />  
```
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
