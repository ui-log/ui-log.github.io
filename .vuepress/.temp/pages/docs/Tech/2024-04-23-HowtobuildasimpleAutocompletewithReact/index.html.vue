<template><div><p>자동완성은 사용자가 입력하는 동안 빠르게 미리 입력된 값 목록에서 찾아 선택할 수 있는 기능을 제공하는 것을 말합니다. 검색 및 필터링을 활용합니다.</p>
<h1 id="역사" tabindex="-1"><a class="header-anchor" href="#역사" aria-hidden="true">#</a> 역사</h1>
<p>사용자가 다양한 데이터를 찾으려고 할 때 유용한 기능입니다. 사용자가 입력란에 입력하면 자동완성이 그들의 생각을 완성시켜 전체 용어나 결과를 제공합니다. 이것이 자동완성 경험의 기본입니다.</p>
<p>가장 널리 활용되는 곳은 검색 엔진입니다. 2004년 구글에서 소개되었지만 이 개념을 개선하고 제품에 통합하는 방법에 대한 산업 표준을 설정했습니다.</p>
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
<h1 id="뷰" tabindex="-1"><a class="header-anchor" href="#뷰" aria-hidden="true">#</a> 뷰</h1>
<p>우리는 이 간단한 자동완성 UI를 구축할 것입니다. 이 입력란에 입력하는 용어에 따라 API에서 과일 목록을 가져옵니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-HowtobuildasimpleAutocompletewithReact/img/HowtobuildasimpleAutocompletewithReact_0.png" alt="이미지"></p>
<p>이 입력란에 문자열을 입력하면 API를 호출하여 쿼리를 전달하여 목록을 받습니다.</p>
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
<img src="@source/docs/Tech/2024-04-23-HowtobuildasimpleAutocompletewithReact/img/HowtobuildasimpleAutocompletewithReact_1.png" />
<h1 id="아키텍처" tabindex="-1"><a class="header-anchor" href="#아키텍처" aria-hidden="true">#</a> 아키텍처</h1>
<img src="@source/docs/Tech/2024-04-23-HowtobuildasimpleAutocompletewithReact/img/HowtobuildasimpleAutocompletewithReact_2.png" />
<ul>
<li>2개의 UI를 가지고 있는 뷰가 있습니다:</li>
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
<ul>
<li>입력 UI</li>
<li>결과 목록 UI</li>
</ul>
<ol start="2">
<li>
<p>캐시 및 서버에서 쿼리를 수행하는 컨트롤러가 있습니다.</p>
</li>
<li>
<p>마지막으로, 서버가 쿼리에 기반하여 결과를 계산하고 반환합니다.</p>
</li>
</ol>
<h2 id="코드" tabindex="-1"><a class="header-anchor" href="#코드" aria-hidden="true">#</a> 코드</h2>
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
<h2 id="서버" tabindex="-1"><a class="header-anchor" href="#서버" aria-hidden="true">#</a> 서버</h2>
<ul>
<li>ExpressJs를 사용하여 백엔드 서버를 만듭니다.</li>
<li>CORS를 허용하여 앱을 사용할 수 있도록 합니다.</li>
<li>목록을 제공하는 get API를 추가합니다.</li>
<li>과일 목록을 준비합니다.</li>
<li>UI에서 제공할 req.query에 기반하여 목록을 필터링합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> itemList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"사과"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍎"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"바나나"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍌"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"오렌지"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍊"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"포도"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍇"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"딸기"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍓"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"수박"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍉"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"파인애플"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍍"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"망고"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🥭"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"복숭아"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍑"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"키위"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🥝"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"블루베리"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🫐"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"라즈베리"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍇"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">13</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"블랙베리"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🫐"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"체리"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍒"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"자두"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍑"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"아프리콧"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍑"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"배"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍐"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"레몬"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍋"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"라임"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🍈"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"코코넛"</span><span class="token punctuation">,</span> <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">"🥥"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 목록을 제공하는 Route</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/api/items"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token operator">?.</span>searchTerm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> searchTerm <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token operator">?.</span>searchTerm<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> filteredItems <span class="token operator">=</span> itemList<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      item<span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>searchTerm<span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>filteredItems<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="클라이언트" tabindex="-1"><a class="header-anchor" href="#클라이언트" aria-hidden="true">#</a> 클라이언트</h2>
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
<li>간단한 React 앱을 만듭니다. 설정에는 Vite를 사용하는 것을 추천합니다.</li>
<li>프레젠테이션용으로 AutoComplete 컴포넌트를 만듭니다.</li>
<li>결과를 표시하는 List 컴포넌트를 만듭니다.</li>
<li>쿼리를 생성하는 컨트롤러인 useFruits라는 이름의 훅을 생성할 것입니다.</li>
</ul>
<p><code v-pre>AutoComplete/</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> Input <span class="token operator">=</span> styled<span class="token punctuation">.</span>input<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ResultContainer <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  padding: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> AutoCompleteContainer <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  padding: 1rem;
  margin-top: 2rem;
  height: 20vh;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">const</span> HelperText <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  font-size: 0.75rem;
  color: #ccc;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">AutoComplete</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>searchTerm<span class="token punctuation">,</span> setSearchTerm<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>activeIndex<span class="token punctuation">,</span> setActiveIndex<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> fruits<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useFruits</span><span class="token punctuation">(</span>
    <span class="token string">"http://localhost:3000/api/items"</span><span class="token punctuation">,</span>
    searchTerm
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ChangeEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSearchTerm</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">fruit</span><span class="token operator">:</span> IFruit</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setSearchTerm</span><span class="token punctuation">(</span>fruit<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onKeyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> React<span class="token punctuation">.</span>KeyboardEvent<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"ArrowDown"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setActiveIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>prev <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> fruits<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"ArrowUp"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setActiveIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prev</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>prev <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> fruits<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">%</span> fruits<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">"Enter"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setSearchTerm</span><span class="token punctuation">(</span>fruits<span class="token punctuation">[</span>activeIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>AutoCompleteContainer<span class="token operator">></span>
      <span class="token operator">&lt;</span>Input
        onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span>
        onKeyDown<span class="token operator">=</span><span class="token punctuation">{</span>onKeyDown<span class="token punctuation">}</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>searchTerm<span class="token punctuation">}</span>
        placeholder<span class="token operator">=</span><span class="token string">"Search Your Fruits"</span>
      <span class="token operator">/</span><span class="token operator">></span>

      <span class="token punctuation">{</span>searchTerm <span class="token operator">?</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>ResultContainer<span class="token operator">></span>
          <span class="token operator">&lt;</span>ResultList
            results<span class="token operator">=</span><span class="token punctuation">{</span>fruits<span class="token punctuation">}</span>
            searchTerm<span class="token operator">=</span><span class="token punctuation">{</span>searchTerm<span class="token punctuation">}</span>
            loading<span class="token operator">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span>
            handleSelect<span class="token operator">=</span><span class="token punctuation">{</span>handleSelect<span class="token punctuation">}</span>
            activeIndex<span class="token operator">=</span><span class="token punctuation">{</span>activeIndex<span class="token punctuation">}</span>
          <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>ResultContainer<span class="token operator">></span>
      <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>HelperText<span class="token operator">></span>Start typing to search<span class="token operator">&lt;</span><span class="token operator">/</span>HelperText<span class="token operator">></span>
      <span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>AutoCompleteContainer<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>프레젠테이션 컴포넌트로, useFruits 훅에서 데이터를 받습니다.</li>
<li>사용자가 입력하고 값이 searchTerm 상태에 의해 단일 진실의 원본에서 값을 얻을 수 있는 제어 Input이 있습니다.</li>
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
<p><code v-pre>ResultList/</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>인터페이스 ResultListProps <span class="token punctuation">{</span>
  <span class="token literal-property property">결과</span><span class="token operator">:</span> IFruit<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token literal-property property">검색어</span><span class="token operator">:</span> 문자열<span class="token punctuation">;</span>
  <span class="token literal-property property">로딩</span><span class="token operator">:</span> 부울<span class="token punctuation">;</span>
  <span class="token function-variable function">핸들선택</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">과일</span><span class="token operator">:</span> IFruit</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">활성인덱스</span><span class="token operator">:</span> 숫자<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

상수 List <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  목록스타일: 없음;
  텍스트정렬: 왼쪽;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

상수 ListItem <span class="token operator">=</span> styled<span class="token punctuation">.</span>li<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
  패딩: 0.5렘;
  커서: 포인터;
  &amp;:hover {
    배경색: #f9f9f9;
    색상: #333;
  }
  &amp;.active {
    배경색: #f9f9f9;
    색상: #333;
  }
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ResultList</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  결과<span class="token punctuation">,</span>
  검색어<span class="token punctuation">,</span>
  로딩<span class="token punctuation">,</span>
  핸들선택<span class="token punctuation">,</span>
  활성인덱스<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> ResultListProps</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">일치하는단어</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">이름</span><span class="token operator">:</span> 문자열<span class="token punctuation">,</span> <span class="token literal-property property">검색어</span><span class="token operator">:</span> 문자열</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> 인덱스 <span class="token operator">=</span> 이름<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>검색어<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>인덱스 <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> 이름<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token punctuation">{</span>이름<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> 인덱스<span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>b<span class="token operator">></span><span class="token punctuation">{</span>이름<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>인덱스<span class="token punctuation">,</span> 인덱스 <span class="token operator">+</span> 검색어<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span>
        <span class="token punctuation">{</span>이름<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>인덱스 <span class="token operator">+</span> 검색어<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>로딩<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>List<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>List<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>결과<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>List<span class="token operator">></span>결과 없음<span class="token operator">&lt;</span><span class="token operator">/</span>List<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>List<span class="token operator">></span>
        <span class="token punctuation">{</span>결과<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">결과<span class="token punctuation">,</span> 인덱스</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>ListItem
            key<span class="token operator">=</span><span class="token punctuation">{</span>결과<span class="token punctuation">.</span>id<span class="token punctuation">}</span>
            onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">핸들선택</span><span class="token punctuation">(</span>결과<span class="token punctuation">)</span><span class="token punctuation">}</span>
            className<span class="token operator">=</span><span class="token punctuation">{</span>활성인덱스 <span class="token operator">===</span> 인덱스 <span class="token operator">?</span> <span class="token string">"active"</span> <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">}</span>
          <span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">></span>
              <span class="token punctuation">{</span><span class="token function">일치하는단어</span><span class="token punctuation">(</span>결과<span class="token punctuation">.</span>name<span class="token punctuation">,</span> 검색어<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">&lt;</span>span<span class="token operator">></span><span class="token punctuation">{</span>결과<span class="token punctuation">.</span>emoji<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>ListItem<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>List<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>이 컴포넌트는 목록으로 결과를 표시하는 역할을 합니다.</li>
<li>결과, 검색어, 로딩 정보 및 handleSelect 콜백을 props로 받습니다.</li>
<li>검색어를 활용하여 정확한 일치 사항을 강조하는 matchedTerm 함수가 있습니다 (멋진 사용자 경험!)</li>
<li>로딩 및 비어있는 결과 상태에 대해도 처리합니다.</li>
</ul>
<p><code v-pre>useFruits/</code></p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useFruits</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">url</span><span class="token operator">:</span> string<span class="token punctuation">,</span> searchTerm<span class="token operator">?</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>fruits<span class="token punctuation">,</span> setFruits<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span>useState<span class="token operator">&lt;</span>IFruit<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>loading<span class="token punctuation">,</span> setLoading<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>searchTerm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token function">setFruits</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> cachedData <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">fruits_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>searchTerm<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setFruits</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>cachedData<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> getFruits <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url <span class="token operator">+</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">?searchTerm=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>searchTerm<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setFruits</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setLoading</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        sessionStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">fruits_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>searchTerm<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>getFruits<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>url<span class="token punctuation">,</span> searchTerm<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> fruits<span class="token punctuation">,</span> loading <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>이 코드는 리액트 훅으로서 데이터를 가져오고 결과를 캐시하며 로딩 정보를 제공하는 역할을 합니다.</li>
<li>먼저 캐시된 데이터를 확인하고 이미 데이터를 가지고 있다면 해당 데이터를 제공하고 fetch 작업을 건너뜁니다!</li>
<li>그렇지 않으면 검색어를 쿼리 매개변수로 사용하여 fetch 작업을 수행합니다.</li>
<li>반드시 디바운싱을 지켜야 합니다! fetch 작업을 작은 시간 단위로 지연시킵니다. 이렇게 하면 사용자의 입력을 기다릴 수 있으며 앱 성능을 향상시킬 수 있습니다.</li>
</ul>
<p>이것은 표준 자동 완성 UI의 몇 가지 기본 기능을 다룹니다. 이 코드는 잘 유지보수되며 구조화되었으며 잘 알려진 소프트웨어 패턴을 사용하며 무엇보다도 성능에 신경을 쓰고 있습니다!</p>
<p>읽어 주셔서 감사합니다. 항상 배우는 것을 멈추지 마세요 :)```</p>
</div></template>
