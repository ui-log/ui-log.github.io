<template><div><h1 id="css-in-js" tabindex="-1"><a class="header-anchor" href="#css-in-js" aria-hidden="true">#</a> CSS-in-JS</h1>
<p>어떤 CSS-in-JS 솔루션을 사용해도 괜찮아요. 가장 간단한 방법은 인라인 스타일을 이용하는 것이에요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">HiThere</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span> <span class="token punctuation">}</span><span class="token operator">></span>hi there<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HiThere
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 styled-jsx를 번들하여 격리된 범위의 CSS를 지원해요. 목표는 웹 구성 요소와 비슷한 &quot;그림자 CSS&quot;를 지원하는 것이에요. 서버 렌더링을 지원하지 않는 JS만으로 이뤄진 웹 구성 요소와 유사한 기술이라고 할 수 있죠.</p>
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
<p>위의 예제를 참고하여 스타일드 컴포넌트와 같은 인기있는 CSS-in-JS 솔루션을 확인할 수 있습니다.</p>
<p>styled-jsx를 사용한 컴포넌트는 다음과 같이 보입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">HelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      Hello world
      <span class="token operator">&lt;</span>p<span class="token operator">></span>scoped<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>style jsx<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
      <span class="token operator">&lt;</span>style global jsx<span class="token operator">></span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        body {
          background: black;
        }
      </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HelloWorld<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>더 많은 예제를 보려면 styled-jsx 문서를 참고해주세요.</p>
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
<h3 id="자바스크립트-비활성화" tabindex="-1"><a class="header-anchor" href="#자바스크립트-비활성화" aria-hidden="true">#</a> 자바스크립트 비활성화</h3>
<p>네, 자바스크립트를 비활성화하면 CSS는 여전히 프로덕션 빌드(next start)에서 로드됩니다. 개발 중에는 최상의 개발자 경험을 제공하기 위해 자바스크립트를 활성화해야 합니다. Fast Refresh를 사용하려면 JavaScript가 필요합니다.</p>
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
