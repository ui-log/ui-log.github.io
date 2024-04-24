<template><div><p>Next.js의 미들웨어는 개발자가 응용 프로그램의 요청과 응답 흐름을 가로채거나 수정하거나 제어할 수 있는 강력한 도구입니다. 서버 렌더링 웹사이트나 완전한 웹 애플리케이션을 개발하고 있다면, 미들웨어를 효과적으로 활용하는 방법을 이해하는 것이 프로젝트 내 데이터 흐름을 크게 향상시킬 수 있습니다. 이 안내서는 Next.js에서 미들웨어를 기본부터 고급 기술까지 탐색할 것입니다.</p>
<h1 id="목차" tabindex="-1"><a class="header-anchor" href="#목차" aria-hidden="true">#</a> 목차</h1>
<ul>
<li>미들웨어 이해하기</li>
<li>미들웨어 시작하기</li>
<li>Next.js에서 미들웨어</li>
<li>고급 미들웨어 기술</li>
<li>미들웨어 업그레이드 안내</li>
</ul>
<h1 id="_1-미들웨어-이해하기" tabindex="-1"><a class="header-anchor" href="#_1-미들웨어-이해하기" aria-hidden="true">#</a> 1. 미들웨어 이해하기</h1>
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
<h2 id="middleware란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#middleware란-무엇인가요" aria-hidden="true">#</a> Middleware란 무엇인가요?</h2>
<p>웹 사이트나 애플리케이션을 개발할 때, Middleware는 이해할 가치 있는 개념입니다. 간단히 말해서, Middleware는 요청-응답 주기의 다양한 측면을 가로채고 조작하는 메커니즘을 제공합니다. 이 메커니즘에는 들어오는 요청을 조작하거나 나가는 응답을 조작하고 애플리케이션의 요구에 맞게 맞추기 위한 작업이 포함됩니다.</p>
<p>Next.js에 적용된 Middleware를 통해 사용자는 추가 단계 없이 웹 애플리케이션의 동작을 상세하게 조정하고 제어할 수 있습니다.</p>
<p>이제 우리는 핵심 개념을 이해했으니, 언급한 사용 사례를 탐색해 보겠습니다. Next.js 13와 자바스크립트를 모두 사용할 예정입니다.</p>
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
<h2 id="라우팅" tabindex="-1"><a class="header-anchor" href="#라우팅" aria-hidden="true">#</a> 라우팅:</h2>
<p>라우팅 제어를 통해 요청을 다른 URL로 리디렉트하거나 URL 패턴을 다루거나 강제할 수 있습니다. 애플리케이션 내에서 복잡한 라우팅 시나리오를 관리할 때 특히 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Next.js</span>
<span class="token comment">// 이전 URL에서 새 URL로 요청을 리디렉트합니다</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">redirectMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/new-url'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 자바스크립트</span>
<span class="token keyword">function</span> <span class="token function">redirectMiddleware</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 새 URL로 리디렉트합니다</span>
  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'/new-url'</span><span class="token punctuation">;</span>
  <span class="token comment">// 리디렉션 후에는 이 코드가 실행되지 않기 때문에 빈 응답을 반환합니다</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">204</span><span class="token punctuation">,</span> <span class="token comment">// 내용 없음</span>
    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="쿠키-관리" tabindex="-1"><a class="header-anchor" href="#쿠키-관리" aria-hidden="true">#</a> 쿠키 관리:</h2>
<p>미들웨어는 수신 요청과 송신 응답 모두에서 쿠키를 관리할 수 있습니다. 이는 사용자 세션 쿠키 설정, 인증용 쿠키 읽기, 또는 사용자가 로그아웃할 때 쿠키 삭제와 같은 작업에 필수적입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Tyexport <span class="token keyword">function</span> <span class="token function">cookieManagementMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'myCookie'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">cookieManagementMiddleware</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cookies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">myCookie</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="인증" tabindex="-1"><a class="header-anchor" href="#인증" aria-hidden="true">#</a> 인증:</h2>
<p>미들웨어를 사용하여 사용자가 특정 경로나 자원에 액세스하기 전에 인증되었는지 확인할 수 있습니다.</p>
<p>아래 예시에서는 사용자가 보호된 경로에 액세스하려고 시도할 때, 미들웨어 함수가 세션 쿠키를 통해 인증을 확인하여 사용자의 신원을 확인합니다. 사용자가 인증되지 않은 경우 로그인 페이지로 리디렉션되거나 액세스가 거부됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Next.js를 사용하는 경우 </span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">authenticationMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'authenticated=true'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 로그인 페이지로 리다이렉트</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 자바스크립트 사용</span>
<span class="token keyword">function</span> <span class="token function">authenticationMiddleware</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie <span class="token operator">&amp;&amp;</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'authenticated=true'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 로그인 페이지로 리다이렉트</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'/login'</span><span class="token punctuation">;</span>
    <span class="token comment">// 이 코드는 리다이렉션 후에는 실행되지 않으므로 빈 응답 반환</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">204</span><span class="token punctuation">,</span> <span class="token comment">// 컨텐츠 없음</span>
      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 다음 미들웨어 또는 라우트 핸들러로 진행</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="로깅" tabindex="-1"><a class="header-anchor" href="#로깅" aria-hidden="true">#</a> 로깅:</h2>
<p>들어오는 요청의 세부 로깅, 요청 메소드, URL, 헤더 및 타임스탬프 정보를 포함합니다. 이 로그는 문제 진단, 사용자 활동 추적 및 성능 분석에 매우 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">loggingMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Received </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>request<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> request to </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>request<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> at </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">loggingMiddleware</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">요청을 받았어요! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">에 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>request<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 방식으로 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>request<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 주소로부터 받은 요청이에요.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// 다음 미들웨어나 라우트 핸들러로 이동</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="응답-커스터마이징" tabindex="-1"><a class="header-anchor" href="#응답-커스터마이징" aria-hidden="true">#</a> 응답 커스터마이징:</h2>
<p>특정 조건에 따라 사용자 정의 응답 헤더, 상태 코드 또는 응답 내용을 수정할 수 있어요. 예를 들어, 클라이언트에 추가 정보를 제공하기 위해 사용자 지정 헤더를 설정하거나 응답 내용을 동적으로 조정할 수 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">customHeadersMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'X-Custom-Header'</span><span class="token punctuation">,</span> <span class="token string">'안녕하세요, 미들웨어!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'myCookie'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">customHeadersMiddleware</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">'X-Custom-Header'</span><span class="token operator">:</span> <span class="token string">'Hello, Middleware!'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cookies</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">myCookie</span><span class="token operator">:</span> <span class="token string">'123'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 미들웨어가 무엇이고 왜 유용한지 이해했으니, Next.js에서 사용해 보겠습니다.</p>
<h1 id="_2-next-js에서의-미들웨어" tabindex="-1"><a class="header-anchor" href="#_2-next-js에서의-미들웨어" aria-hidden="true">#</a> 2. Next.js에서의 미들웨어</h1>
<h2 id="미들웨어-파일" tabindex="-1"><a class="header-anchor" href="#미들웨어-파일" aria-hidden="true">#</a> 미들웨어 파일</h2>
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
<p>Next.js에서 Middleware은 일반적으로 프로젝트 루트에 위치한 middleware.ts (또는 .js)라는 파일에 정의됩니다. 이 파일은 Middleware 함수를 정의하는 곳입니다. 여기에 기본적인 함수 예시가 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// middleware.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 여기에 Middleware 로직을 작성합니다</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 다음 Middleware 또는 라우트 핸들러에 제어를 전달합니다</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nextresponse-api" tabindex="-1"><a class="header-anchor" href="#nextresponse-api" aria-hidden="true">#</a> NextResponse API</h2>
<p>NextResponse은 Next.js에서 미들웨어 응답을 처리할 수 있는 API입니다. 요청 리디렉션, 응답 재작성, 헤더 설정, 쿠키 설정 등을 위한 메서드를 제공합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 요청을 다른 URL로 리디렉션</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/new-url'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 응답을 다른 URL에서 콘텐츠를 표시하도록 재작성</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span><span class="token string">'/new-content'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 응답 헤더 및 쿠키 설정</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'X-Custom-Header'</span><span class="token punctuation">,</span> <span class="token string">'Hello, Middleware!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'myCookie'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="일치하는-경로" tabindex="-1"><a class="header-anchor" href="#일치하는-경로" aria-hidden="true">#</a> 일치하는 경로</h2>
<h1 id="_3-next-js에서-미들웨어-사용" tabindex="-1"><a class="header-anchor" href="#_3-next-js에서-미들웨어-사용" aria-hidden="true">#</a> 3. Next.js에서 미들웨어 사용</h1>
<p>Next.js의 미들웨어 함수는 들어오는 요청과 응답에 모두 접근할 수 있습니다. 이 객체를 수정하여 응용 프로그램의 동작을 맞춤화할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">authenticationMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 사용자가 인증되었는지 확인합니다</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>cookie<span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'authenticated=true'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 다음 미들웨어나 라우트 핸들러로 이동합니다</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="헤더-및-쿠키-설정" tabindex="-1"><a class="header-anchor" href="#헤더-및-쿠키-설정" aria-hidden="true">#</a> 헤더 및 쿠키 설정</h2>
<p>미들웨어는 들어오는 요청과 나가는 응답의 헤더와 쿠키를 조작할 수 있습니다. 이는 응답을 사용자 정의하거나 사용자 세션을 관리하는 등의 작업에 유용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">customHeadersMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'X-Custom-Header'</span><span class="token punctuation">,</span> <span class="token string">'안녕하세요, 미들웨어!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>cookies<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'myCookie'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="사용자-정의-응답-생성하기" tabindex="-1"><a class="header-anchor" href="#사용자-정의-응답-생성하기" aria-hidden="true">#</a> 사용자 정의 응답 생성하기</h2>
<p>미들웨어는 Response 또는 NextResponse 인스턴스를 반환하여 응답을 직접 생성할 수 있습니다. 이를 통해 사용자 지정 로직에 기반하여 클라이언트에게 전송하는 응답을 제어할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">customResponseMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token comment">/* 어떤 조건 */</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">'사용자 정의 오류 메시지'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">400</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본 사항을 다루었으니, 이제 Next.js에서 미들웨어를 사용하는 고급 기술 몇 가지를 살펴보겠습니다.</p>
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
<h1 id="_4-고급-미들웨어-기술" tabindex="-1"><a class="header-anchor" href="#_4-고급-미들웨어-기술" aria-hidden="true">#</a> 4. 고급 미들웨어 기술</h1>
<h2 id="api-호출-가로채기" tabindex="-1"><a class="header-anchor" href="#api-호출-가로채기" aria-hidden="true">#</a> API 호출 가로채기</h2>
<p>미들웨어의 강력한 사용 사례 중 하나는 API 호출을 가로채는 것입니다. 미들웨어를 사용하여 API 요청 헤더를 수정하거나 응답을 캐시하거나 테스트를 위해 API 호출을 가장하는 등의 작업을 할 수 있습니다.</p>
<h2 id="요청-헤더-수정" tabindex="-1"><a class="header-anchor" href="#요청-헤더-수정" aria-hidden="true">#</a> 요청 헤더 수정</h2>
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
<p>아웃고잉 API 요청의 헤더를 수정하기 위해 미들웨어를 사용할 수 있어요. 이는 요청을 보내기 전에 인증 토큰, API 키 또는 기타 필수 정보를 헤더에 추가하는 일이 종종 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">apiInterceptorMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// API 요청 헤더 수정하기</span>
  request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Authorization'</span><span class="token punctuation">,</span> <span class="token string">'Bearer myAccessToken'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// API 응답을 캐시하여 성능을 향상시킬 수 있어요</span>
  <span class="token comment">// 여기서 캐싱 로직 구현하기</span>

  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-응답-캐싱" tabindex="-1"><a class="header-anchor" href="#api-응답-캐싱" aria-hidden="true">#</a> API 응답 캐싱</h2>
<p>애플리케이션의 성능을 향상시키기 위해 미들웨어 내에서 API 응답을 캐싱할 수 있어요. 이렇게 함으로써 외부 API에 대한 부하를 줄이고 동일한 데이터에 대한 후속 요청 속도를 높일 수 있어요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">apiInterceptorMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 응답이 이미 캐시되었는지 확인합니다.</span>
  <span class="token keyword">const</span> cachedResponse <span class="token operator">=</span> <span class="token comment">/* 여기에 캐싱 로직을 구현하세요 */</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>cachedResponse<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 캐시된 경우, 캐시된 응답을 반환합니다.</span>
    <span class="token keyword">return</span> cachedResponse<span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 캐시되지 않은 경우 API 요청을 수행하고 응답을 캐시합니다.</span>
    <span class="token keyword">const</span> apiResponse <span class="token operator">=</span> <span class="token comment">/* API 요청을 수행합니다 */</span><span class="token punctuation">;</span>

    <span class="token comment">// 미래 사용을 위해 응답을 캐시합니다.</span>
    <span class="token comment">/* 응답을 캐시합니다 */</span>

    <span class="token keyword">return</span> apiResponse<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="테스트를-위한-api-호출-모의화" tabindex="-1"><a class="header-anchor" href="#테스트를-위한-api-호출-모의화" aria-hidden="true">#</a> 테스트를 위한 API 호출 모의화</h2>
<p>미들웨어는 테스트 중에 API 호출을 모의화하는 데에도 사용될 수 있습니다. 이를 통해 테스트가 외부 서비스에 의존하지 않도록하여 보다 신뢰성이 높고 빠른 테스트를 수행할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> NextRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/server'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">apiMockMiddleware</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">request</span><span class="token operator">:</span> NextRequest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">'test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 테스트 환경에서는 모의 응답을 반환합니다.</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">mockData</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
      <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 다른 환경에서는 다음 미들웨어나 route 핸들러로 이동합니다.</span>
    <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
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
<p>이러한 고급 기술들은 Next.js 애플리케이션에서 API 호출을 처리할 때 미들웨어의 유연성과 강력함을 보여줍니다. API 요청의 보안을 강화하거나 캐싱을 통해 성능을 최적화하거나 모의 응답을 통해 테스트를 간편화하는 등의 경우에도 미들웨어가 해결책이 될 수 있습니다.</p>
<h1 id="_5-미들웨어-업그레이드-안내" tabindex="-1"><a class="header-anchor" href="#_5-미들웨어-업그레이드-안내" aria-hidden="true">#</a> 5. 미들웨어 업그레이드 안내</h1>
<p>이전 버전의 Next.js에서 미들웨어를 사용해 왔고 12.2 버전 이상으로 업그레이드하려는 경우, 미들웨어 API에 대한 변경 사항과 개선 사항을 숙지해야 합니다. 이러한 변경 사항으로 기존의 미들웨어 코드를 업데이트해야 할 수도 있습니다. 자세한 업그레이드 지침은 공식 Next.js 문서를 참조해 주세요.</p>
<p>이 문서에서는 웹 애플리케이션의 요청 및 응답 흐름, 인증, 로깅, 응답 사용자 정의, 라우팅 제어 등의 기본 개념과 고급 기술에 대해 다루어야 합니다.</p>
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
<p>Next.js 공식 문서에서 미들웨어 정보와 공식 예제를 살펴볼 수 있습니다.</p>
</div></template>
