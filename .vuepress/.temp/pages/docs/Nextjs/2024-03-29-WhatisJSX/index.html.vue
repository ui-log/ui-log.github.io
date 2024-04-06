<template><div><p><img src="@source/docs/Nextjs/2024-03-29-WhatisJSX/img/WhatisJSX_0.png" alt="이미지"></p>
<p>JSX는 React에서 사용되는 JavaScript 확장 구문으로 HTML과 JavaScript를 쉽게 함께 작성할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> hello <span class="token operator">=</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="react-createelement-함수란-무엇인가" tabindex="-1"><a class="header-anchor" href="#react-createelement-함수란-무엇인가" aria-hidden="true">#</a> React.createElement 함수란 무엇인가</h1>
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
<p>모든 JSX는 브라우저가 이해하는 React.createElement 함수 호출로 변환됩니다.</p>
<p>React.createElement는 다음과 같은 구문을 갖습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> <span class="token punctuation">[</span>props<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">...</span>children<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>Type은 h1, p, div 등과 같이 Html 태그일 수 있습니다.</li>
<li>Props는 엘리먼트가 가져야 할 속성입니다.</li>
<li>Children에는 다른 HTML 태그가 포함되거나 컴포넌트가 될 수 있습니다.</li>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
 <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'h2'</span><span class="token punctuation">,</span>
 <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'Hello World'</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예시:-</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># say<span class="token operator">-</span>hello
Hello World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>따라서 React는 JSX를 아래 코드로 변환할 것입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"h2"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> id<span class="token operator">=</span><span class="token string">"say-hello"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>만약에 HTML 태그에 속성을 추가한다면, 우리의 경우와 같이, 해당 속성들은 React.createElement 호출의 두 번째 매개변수로 전달됩니다. 객체 표현은 다음과 같이 보일 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> 
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'h2'</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> 
   <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'say-hello'</span><span class="token punctuation">,</span>
   <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">'Hello World'</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>읽어 주셔서 감사합니다 ❤️</p>
</div></template>
