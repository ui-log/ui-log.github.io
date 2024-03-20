<template><div><h1 id="nextjs-14-에러-화면을-위한-error-js-파일" tabindex="-1"><a class="header-anchor" href="#nextjs-14-에러-화면을-위한-error-js-파일" aria-hidden="true">#</a> Nextjs 14 에러 화면을 위한 error.js 파일</h1>
<p>에러 파일은 라우트 세그먼트를 위한 에러 UI 경계를 정의합니다.</p>
<p>서버 컴포넌트와 클라이언트 컴포넌트에서 발생하는 예기치 않은 에러를 잡고 대체 UI를 표시하는 데 유용합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span> <span class="token comment">// 에러 컴포넌트는 클라이언트 컴포넌트여야 합니다</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token punctuation">,</span> reset <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> error<span class="token operator">:</span> Error <span class="token operator">&amp;</span> <span class="token punctuation">{</span> digest<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 에러를 에러 보고 서비스에 기록</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>error<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>h2<span class="token operator">></span>문제가 발생했습니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
      <span class="token operator">&lt;</span>button
        onClick<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token comment">// 세그먼트를 다시 렌더링해 시도하여 복구 시도</span>
          <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token operator">></span>
        다시 시도
      <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<h2 id="속성" tabindex="-1"><a class="header-anchor" href="#속성" aria-hidden="true">#</a> 속성</h2>
<h3 id="error" tabindex="-1"><a class="header-anchor" href="#error" aria-hidden="true">#</a> error</h3>
<p>에러 인스턴스
에러.js 클라이언트 컴포넌트로 전달된 객체입니다.</p>
<h4 id="error-message" tabindex="-1"><a class="header-anchor" href="#error-message" aria-hidden="true">#</a> error.message</h4>
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
<p>에러 메시지입니다.</p>
<ul>
<li>클라이언트 컴포넌트에서 전달된 오류의 경우, 이것은 원래 오류 메시지입니다.</li>
<li>서버 컴포넌트에서 전달된 오류의 경우, 민감한 세부 정보 노출을 피하기 위해 일반적인 에러 메시지가 됩니다. 에러.다이제스트는 서버 측 로그에서 해당 오류를 식별하는 데 사용할 수 있습니다.</li>
</ul>
<h4 id="에러-다이제스트" tabindex="-1"><a class="header-anchor" href="#에러-다이제스트" aria-hidden="true">#</a> 에러.다이제스트</h4>
<p>서버 컴포넌트에서 발생한 오류의 자동 생성된 해시값입니다. 서버 측 로그에서 해당 오류를 식별하는 데 사용할 수 있습니다.</p>
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
<h3 id="리셋" tabindex="-1"><a class="header-anchor" href="#리셋" aria-hidden="true">#</a> 리셋</h3>
<p>에러 바운더리를 재설정하는 함수입니다. 실행되면 함수는 에러 바운더리의 내용을 다시 렌더링하려고 시도합니다. 성공하면, 대체할 에러 컴포넌트가 다시 렌더링된 결과로 교체됩니다.</p>
<p>에러에서 회복을 시도하도록 사용할 수 있습니다.</p>
<blockquote>
<p>좋은 정보:
에러.js 바운더리는 클라이언트 컴포넌트 여야 합니다.
운영 빌드에서 서버 컴포넌트에서 전달된 오류는 민감한 정보가 노출되지 않도록 특정 오류 정보가 제거됩니다.
동일 세그먼트에서 레이아웃.js 컴포넌트에서 발생한 오류는 에러 바운더리가 해당 레이아웃 컴포넌트 내부에 중첩되어 있기 때문에 처리되지 않습니다.
특정 레이아웃의 오류를 처리하려면, 레이아웃의 상위 세그먼트에 에러.js 파일을 배치하십시오.
루트 레이아웃이나 템플릿 내에서 오류를 처리하려면 app/global-error.js라고 불리는 error.js의 변형을 사용하십시오.</p>
</blockquote>
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
<h2 id="global-error-js" tabindex="-1"><a class="header-anchor" href="#global-error-js" aria-hidden="true">#</a> global-error.js</h2>
<p>루트 레이아웃.js에서 발생한 오류를 전용으로 처리하려면 루트 앱 디렉토리에 위치한 error.js의 변형인 app/global-error.js를 사용하십시오.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">GlobalError</span><span class="token punctuation">(</span><span class="token punctuation">{</span> error<span class="token punctuation">,</span> reset <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span> error<span class="token operator">:</span> Error <span class="token operator">&amp;</span> <span class="token punctuation">{</span> digest<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token function-variable function">reset</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>html<span class="token operator">></span>
      <span class="token operator">&lt;</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span>h2<span class="token operator">></span>문제가 발생했습니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
        <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>다시 시도<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 사항:
global-error.js는 활성화될 때 루트 layout.js를 대체하므로 자체적으로 <code v-pre>html</code> 및 <code v-pre>body</code> 태그를 정의해야 합니다.
오류 UI를 디자인하는 동안 React 개발자 도구를 사용하여 오류 경계를 수동으로 토글하는 것이 도움이 될 수 있습니다.</p>
</blockquote>
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
<h2 id="not-found-js" tabindex="-1"><a class="header-anchor" href="#not-found-js" aria-hidden="true">#</a> not-found.js</h2>
<p><code v-pre>not-found</code> 파일은 라우트 세그먼트 내에서 <code v-pre>notFound()</code> 함수가 throw될 때 UI를 렌더링하는 데 사용됩니다.</p>
<h2 id="버전-기록" tabindex="-1"><a class="header-anchor" href="#버전-기록" aria-hidden="true">#</a> 버전 기록</h2>
<table>
<thead>
<tr>
<th>버전</th>
<th>변경 내용</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.1.0</code></td>
<td><code v-pre>global-error</code> 도입</td>
</tr>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>error</code> 도입</td>
</tr>
</tbody>
</table>
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
