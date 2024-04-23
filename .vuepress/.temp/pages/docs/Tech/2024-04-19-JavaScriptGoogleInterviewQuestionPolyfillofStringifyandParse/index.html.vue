<template><div><h1 id="다루는-주제" tabindex="-1"><a class="header-anchor" href="#다루는-주제" aria-hidden="true">#</a> 다루는 주제:</h1>
<p>프론트엔드 인터뷰 질문: 내 유튜브 채널을 구독해주세요: https://www.youtube.com/channel/UC-elmWUfbcbmvuhlS12nCtg</p>
<h1 id="stringify-myobject-의-폴리필을-작성하여-myobject를-json-문자열로-변환하십시오" tabindex="-1"><a class="header-anchor" href="#stringify-myobject-의-폴리필을-작성하여-myobject를-json-문자열로-변환하십시오" aria-hidden="true">#</a> stringify(myObject)의 폴리필을 작성하여 myObject를 JSON 문자열로 변환하십시오.</h1>
<p>해결 방법:</p>
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
<li>값이 null인 경우 문자열 &quot;null&quot;을 반환합니다.</li>
<li>값이 숫자 또는 부울인 경우 문자열로 변환하여 반환합니다.</li>
<li>값이 문자열인 경우 이를 쌍따옴표로 둘러싸 반환합니다.</li>
<li>값이 배열인 경우 각 요소에 대해 재귀적으로 stringify를 호출하고 결과 문자열을 쉼표와 함께 결합하여 대괄호로 둘러싸 반환합니다.</li>
<li>값이 순수한 객체인 경우 (함수가 아닌 경우 등) 각 값을 재귀적으로 stringify를 호출하고 undefined 및 함수 등 직렬화할 수 없는 값을 무시하며 각 키-값 쌍을 중괄호로 둘러싸 문자열을 구성합니다.</li>
</ul>
<p>입력:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 사용 예:</span>
<span class="token keyword">var</span> myObject <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Alice"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isStudent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hobbies</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"reading"</span><span class="token punctuation">,</span> <span class="token string">"gaming"</span><span class="token punctuation">,</span> <span class="token string">"hiking"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">details</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">hair</span><span class="token operator">:</span> <span class="token string">"brown"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">165</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 직렬화할 수 없는 속성(함수)은 출력에서 무시됩니다</span>
    <span class="token function-variable function">greet</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, my name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>구현:</p>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>```js
function stringify(value) {
    // 만약 값이 null이면 "null" 문자열을 반환합니다
    if (value === null) {
        return "null";
    }

<span class="token code keyword">    // 값이 숫자이거나 boolean이면 문자열로 변환하여 반환합니다
    if (typeof value === 'number' || typeof value === 'boolean') {
        return value.toString();
    }</span>

<span class="token code keyword">    // 값이 문자열이면 쌍따옴표로 둘러싸인 문자열을 반환합니다
    if (typeof value === 'string') {
        return `"${value}"`;
    }</span>
    
<span class="token code keyword">    // 값이 배열이면 각 요소에 대해 재귀적으로 stringify를 호출하여
    // 결과 문자열을 콤마로 연결하고 대괄호로 둘러싸여 반환합니다
    if (Array.isArray(value)) {
        const arrayContents = value.map((element) => stringify(element)).join(',');
        return `[${arrayContents}]`;
    }</span>
    
<span class="token code keyword">    // 값이 함수가 아닌 일반 객체인 경우, 각 값에 대해 재귀적으로 호출하여
    // 직렬화할 수 없는 값(예: undefined 및 함수)은 무시하고 각 키-값 쌍을 중괄호로 둘러싸인 문자열로 구성합니다
    if (typeof value === 'object') {
        const keys = Object.keys(value);
        const keyValuePairStrings = keys.map((key) => {
            const valString = stringify(value[key]);
            if (valString === undefined || typeof value[key] === 'function') {
                // 직렬화할 수 없는 값인 undefined 및 함수를 건너뜁니다 (올바른 JSON이 아니기 때문에)
                return '';
            }
            return `"${key}":${valString}`;
        }).filter(Boolean); // 직렬화할 수 없는 값에 의한 undefined 값 제거
        return `{${keyValuePairStrings.join(',')}`;
    }</span>
    
<span class="token code keyword">    // JSON으로 직렬화할 수 없는 다른 모든 형식(예: undefined 또는 함수)의 경우,
    // 객체 케이스에서 필터링되어 반환될 것입니다
    return undefined;</span>
}


console.log(stringify(myObject)); // myObject의 JSON 문자열 표현을 출력합니다
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="parse-의-폴리필-작성-json-문자열을-자바스크립트-객체로-변환하는-함수" tabindex="-1"><a class="header-anchor" href="#parse-의-폴리필-작성-json-문자열을-자바스크립트-객체로-변환하는-함수" aria-hidden="true">#</a> parse()의 폴리필 작성 - JSON 문자열을 자바스크립트 객체로 변환하는 함수</h1>
<p>입력:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> jsonString <span class="token operator">=</span> <span class="token string">'{"name":"Alice","age":30,"isStudent":false}'</span><span class="token punctuation">;</span>
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
<p>구현:</p>
<p>이 예시는 eval을 사용하는데, 이 함수는 임의의 JavaScript 코드를 실행시킬 수 있는 위험한 함수입니다. JSON을 구문 분석하기 위해 eval을 사용하는 것은 좋은 생각이 아닙니다. JSON 문자열이 제대로 살균되지 않으면 코드 주입 공격을 초래할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token parameter">jsonString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 입력이 문자열인지 확인하기 위한 간단한 체크</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> jsonString <span class="token operator">!==</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'입력값은 문자열이어야 합니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// eval을 사용한 기본 구현은 안전하지 않으며 권장되지 않습니다</span>
    <span class="token comment">// 실제 시나리오에서는 보안 문제를 피하기 위해 적절한 구문 분석 기술을 사용해야 합니다</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token function">eval</span><span class="token punctuation">(</span><span class="token string">'('</span> <span class="token operator">+</span> jsonString <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> json<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SyntaxError</span><span class="token punctuation">(</span><span class="token string">'문자열을 JSON으로 구문 분석할 수 없습니다'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 사용 예시:</span>
<span class="token keyword">var</span> jsonString <span class="token operator">=</span> <span class="token string">'{"name":"Alice","age":30,"isStudent":false}'</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> parsedObject <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parsedObject<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// JSON 문자열에서 구문 분석된 개체를 출력</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 구문 분석 오류 처리</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OR</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token parameter">jsonString</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 현재 문자 인덱스</span>
  <span class="token keyword">let</span> at <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// 현재 문자</span>
  <span class="token keyword">let</span> ch <span class="token operator">=</span> <span class="token string">' '</span><span class="token punctuation">;</span>

  <span class="token comment">// 입력 문자열에서 다음 문자로 이동하는 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">next</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ch <span class="token operator">=</span> jsonString<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>at<span class="token punctuation">)</span><span class="token punctuation">;</span>
    at <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ch<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 숫자 값을 구문 분석하는 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">number</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">'-'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      string <span class="token operator">=</span> <span class="token string">'-'</span><span class="token punctuation">;</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>ch <span class="token operator">>=</span> <span class="token string">'0'</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token string">'9'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      string <span class="token operator">+=</span> ch<span class="token punctuation">;</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">'.'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      string <span class="token operator">+=</span> <span class="token string">'.'</span><span class="token punctuation">;</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">>=</span> <span class="token string">'0'</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token string">'9'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        string <span class="token operator">+=</span> ch<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 문자열 값 구문 분석하는 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">string</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> string <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">'"'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">'"'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> string<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        string <span class="token operator">+=</span> ch<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SyntaxError</span><span class="token punctuation">(</span><span class="token string">"잘못된 문자열"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// JSON 값 구문 분석하는 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">white</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">'{'</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'['</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'"'</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'-'</span><span class="token operator">:</span> <span class="token keyword">return</span> <span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">return</span> ch <span class="token operator">>=</span> <span class="token string">'0'</span> <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token string">'9'</span> <span class="token operator">?</span> <span class="token function">number</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">word</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 입력 문자열에서 공백을 건너뛰는 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">white</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>ch <span class="token operator">&amp;&amp;</span> ch <span class="token operator">&lt;=</span> <span class="token string">' '</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// true, false, null과 같은 리터럴을 구문 분석하는 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">word</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token string">'t'</span><span class="token operator">:</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'f'</span><span class="token operator">:</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token string">'n'</span><span class="token operator">:</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// null</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SyntaxError</span><span class="token punctuation">(</span><span class="token string">"예기치 않은 '"</span> <span class="token operator">+</span> ch <span class="token operator">+</span> <span class="token string">"'"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 배열을 구문 분석하는 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">array</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">'['</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">white</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">']'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> array<span class="token punctuation">;</span> <span class="token comment">// 빈 배열</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">white</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">']'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> array<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SyntaxError</span><span class="token punctuation">(</span><span class="token string">"잘못된 배열"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 객체를 구문 분석하는 함수</span>
  <span class="token keyword">const</span> <span class="token function-variable function">object</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">'{'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">white</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">'}'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span> <span class="token comment">// 빈 객체</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">while</span> <span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">white</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">!==</span> <span class="token string">':'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SyntaxError</span><span class="token punctuation">(</span><span class="token string">"잘못된 객체"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">white</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>ch <span class="token operator">===</span> <span class="token string">'}'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SyntaxError</span><span class="token punctuation">(</span><span class="token string">"잘못된 객체"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// 초기 값을 구문 분석한 후 남은 문자를 확인하여 구문 분석 시작</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">white</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SyntaxError</span><span class="token punctuation">(</span><span class="token string">"구문 오류"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 구문 분석 결과를 반환</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 사용 예시:</span>
<span class="token keyword">var</span> jsonString <span class="token operator">=</span> <span class="token string">'{"name":"Alice","age":30,"isStudent":false}'</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> parsedObject <span class="token operator">=</span> <span class="token function">parse</span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>parsedObject<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// JSON 문자열에서 구문 분석된 객체 출력</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 구문 분석 오류 처리</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>YouTube 채널 구독해주셔서 감사합니다: FrontEnd Interview Preparation: https://www.youtube.com/channel/UC-elmWUfbcbmvuhlS12nCtg</p>
<h1 id="읽어주셔서-감사합니다" tabindex="-1"><a class="header-anchor" href="#읽어주셔서-감사합니다" aria-hidden="true">#</a> 읽어주셔서 감사합니다</h1>
<ul>
<li>장기 멘토십을 위해 Preplaced.com에서 연락해요!</li>
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
<p><strong>무료 체험 수업 예약하기!</strong> — <a href="https://www.preplaced.in/profile/sonika-maheshwari" target="_blank" rel="noopener noreferrer">여기를 클릭하세요<ExternalLinkIcon/></a></p>
<p>📰 코딩 및 디자인 라운드 면접에 대한 더 많은 콘텐츠 보기 - <a href="https://sonikamaheshwari067.medium.com/" target="_blank" rel="noopener noreferrer">여기를 클릭하세요<ExternalLinkIcon/></a></p>
<p>🔔 팔로우하기: LinkedIn! — <a href="https://www.linkedin.com/in/sonika-maheshwari-81542220/" target="_blank" rel="noopener noreferrer">여기를 클릭하세요<ExternalLinkIcon/></a></p>
<p>항상 개선할 점이 있다는 것을 알고 있어요. 의견을 자유롭게 공유해주세요.</p>
</div></template>
