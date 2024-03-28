<template><div><h1 id="콘텐츠-보안-정책" tabindex="-1"><a class="header-anchor" href="#콘텐츠-보안-정책" aria-hidden="true">#</a> 콘텐츠 보안 정책</h1>
<p>콘텐츠 보안 정책 (CSP)은 다양한 보안 위협에 대해 Next.js 애플리케이션을 보호하는 데 중요합니다. 크로스 사이트 스크립팅(XSS), 클릭재킹, 그리고 기타 코드 삽입 공격과 같은 위협으로부터 애플리케이션을 보호할 수 있습니다.</p>
<p>CSP를 사용하면, 개발자들은 콘텐츠 소스, 스크립트, 스타일시트, 이미지, 글꼴, 객체, 미디어 (오디오, 비디오), iframes 등에 대해 허용되는 출천지를 명시할 수 있습니다.</p>
<h2 id="논스" tabindex="-1"><a class="header-anchor" href="#논스" aria-hidden="true">#</a> 논스</h2>
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
<p>화폐화하는데 비밀번호가 유일한 랜덤 문자열로 생성되어 일회용으로 사용됩니다. 이는 CSP와 함께 사용되어 일반적인 CSP 지시문을 우회하여 특정 인라인 스크립트 또는 스타일의 실행을 선택적으로 허용합니다.</p>
<h3 id="왜-nonce를-사용해야-할까요" tabindex="-1"><a class="header-anchor" href="#왜-nonce를-사용해야-할까요" aria-hidden="true">#</a> 왜 nonce를 사용해야 할까요?</h3>
<p>CSP는 악의적인 스크립트를 차단하기 위해 설계되었지만, 일부 케이스에서는 인라인 스크립트가 필요한 경우가 있습니다. 이런 경우에 nonce를 사용하면 올바른 nonce를 가진 스크립트만 실행할 수 있도록 허용할 수 있습니다.</p>
<h3 id="미들웨어로-nonce-추가하기" tabindex="-1"><a class="header-anchor" href="#미들웨어로-nonce-추가하기" aria-hidden="true">#</a> 미들웨어로 nonce 추가하기</h3>
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
<p>미들웨어를 사용하면 페이지 렌더링 전에 헤더를 추가하고 논스를 생성할 수 있습니다.</p>
<p>페이지를 볼 때마다 새로운 논스를 생성해야 합니다. 즉, 동적 렌더링을 사용하여 논스를 추가해야 합니다.</p>
<p>예를 들어:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nonce <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>crypto<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token string">"base64"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> cspHeader <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    default-src 'self';
    script-src 'self' 'nonce-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>nonce<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">' 'strict-dynamic';
    style-src 'self' 'nonce-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>nonce<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
  <span class="token comment">// 새 줄 문자와 공백 교체</span>
  <span class="token keyword">const</span> contentSecurityPolicyHeaderValue <span class="token operator">=</span> cspHeader<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\s{2,}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> requestHeaders <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
  requestHeaders<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"x-nonce"</span><span class="token punctuation">,</span> nonce<span class="token punctuation">)</span><span class="token punctuation">;</span>

  requestHeaders<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"Content-Security-Policy"</span><span class="token punctuation">,</span> contentSecurityPolicyHeaderValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> response <span class="token operator">=</span> NextResponse<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    request<span class="token operator">:</span> <span class="token punctuation">{</span>
      headers<span class="token operator">:</span> requestHeaders<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"Content-Security-Policy"</span><span class="token punctuation">,</span> contentSecurityPolicyHeaderValue<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>기본적으로 Middleware는 모든 요청에 실행됩니다. Matcher를 사용하여 특정 경로에서 Middleware를 실행하도록 필터링할 수 있습니다.</p>
<p>우리는 prefetches(다음/link에서 가져온 것)와 CSP 헤더가 필요 없는 정적 에셋을 무시하는 것을 권장합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  matcher<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/*
     * 모든 요청 경로와 일치하지만 다음과 같이 시작하는 경로는 제외:
     * - api (API 라우트들)
     * - _next/static (정적 파일들)
     * - _next/image (이미지 최적화 파일들)
     * - favicon.ico (파비콘 파일)
     */</span>
    <span class="token punctuation">{</span>
      source<span class="token operator">:</span> <span class="token string">"/((?!api|_next/static|_next/image|favicon.ico).*)"</span><span class="token punctuation">,</span>
      missing<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"next-router-prefetch"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">"header"</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">"purpose"</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"prefetch"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nonce-값을-읽는-중" tabindex="-1"><a class="header-anchor" href="#nonce-값을-읽는-중" aria-hidden="true">#</a> nonce 값을 읽는 중</h3>
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
<p>서버 구성요소에서 headers를 사용하여 nonce를 읽을 수 있게 되었습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> headers <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/headers"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Script <span class="token keyword">from</span> <span class="token string">"next/script"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> nonce <span class="token operator">=</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"x-nonce"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Script src<span class="token operator">=</span><span class="token string">"https://www.googletagmanager.com/gtag/js"</span> strategy<span class="token operator">=</span><span class="token string">"afterInteractive"</span> nonce<span class="token operator">=</span><span class="token punctuation">{</span>nonce<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nonces가-필요하지-않은-경우" tabindex="-1"><a class="header-anchor" href="#nonces가-필요하지-않은-경우" aria-hidden="true">#</a> Nonces가 필요하지 않은 경우</h2>
<p>Nonce가 필요하지 않은 애플리케이션을 위해, next.config.js 파일에 직접 CSP 헤더를 설정할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> cspHeader <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"/(.*)"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">"Content-Security-Policy"</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> cspHeader<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\n</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="버전-히스토리" tabindex="-1"><a class="header-anchor" href="#버전-히스토리" aria-hidden="true">#</a> 버전 히스토리</h2>
<p>Next.js를 v13.4.20 이상으로 사용하는 것을 권장합니다. 이는 nonce를 제대로 처리하고 적용할 수 있도록 합니다.</p>
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
