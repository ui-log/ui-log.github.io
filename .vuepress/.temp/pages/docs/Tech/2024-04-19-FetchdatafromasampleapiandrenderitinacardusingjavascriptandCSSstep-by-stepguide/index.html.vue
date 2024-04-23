<template><div><p>샘플 API에서 데이터를 가져와 JavaScript와 CSS를 사용하여 카드에 렌더링하려면 다음 단계를 따라하실 수 있어요:</p>
<p>단계 1: 카드를 위한 HTML 구조를 만들고 데이터를 렌더링할 컨테이너를 포함하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>샘플 <span class="token constant">API</span> 데이터<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
    <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> href<span class="token operator">=</span><span class="token string">"styles.css"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 데이터가 여기에 렌더링됩니다 <span class="token operator">--</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"script.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>단계 2: CSS 파일(styles.css)을 만들어 카드를 스타일링하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>wrap<span class="token operator">:</span> wrap<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>card <span class="token punctuation">{</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid #ddd<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> 0px 4px 6px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>card h2 <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>card p <span class="token punctuation">{</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> 10px <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step 3: 샘플 API에서 데이터를 가져와 카드에 렌더링하는 JavaScript 파일 (script.js)을 생성합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// API에서 데이터를 가져오는 함수</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'데이터 가져오기 오류:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 데이터를 카드에 렌더링하는 함수</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">renderData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    data<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> card <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        card<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">'card'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">const</span> title <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'h2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        title<span class="token punctuation">.</span>textContent <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">;</span>

        <span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'p'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        body<span class="token punctuation">.</span>textContent <span class="token operator">=</span> item<span class="token punctuation">.</span>body<span class="token punctuation">;</span>

        card<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span>
        card<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
        container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>card<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// renderData 함수를 호출하여 데이터를 표시합니다</span>
<span class="token function">renderData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-04-19-FetchdatafromasampleapiandrenderitinacardusingjavascriptandCSSstep-by-stepguide/img/FetchdatafromasampleapiandrenderitinacardusingjavascriptandCSSstep-by-stepguide_0.png" />
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
<p>이 코드에서:</p>
<ul>
<li>우리는 'fetchData' 함수를 만들어 샘플 API에서 데이터를 가져오는데 사용합니다(이 경우 JSONPlaceholder API를 사용하고 있습니다).</li>
<li>'renderData' 함수를 만들어 가져온 데이터를 카드로 렌더링합니다. 먼저 데이터를 가져온 다음 동적으로 카드 요소를 생성하고 컨테이너 div에 추가합니다.</li>
<li>CSS 파일인 'styles.css'는 카드와 컨테이너를 스타일링하는데 사용됩니다.</li>
</ul>
<p>API 엔드포인트와 스타일링을 귀하의 특정 요구사항에 맞게 조정해주세요. 브라우저에서 HTML 파일을 열면 API에서 데이터를 가져와 스타일이 적용된 카드로 렌더링될 것입니다.</p>
<p>실시간 예제는 다음을 확인해주세요:</p>
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
<p>https://codepen.io/gauravprof27/pen/ExGXWXW</p>
</div></template>
