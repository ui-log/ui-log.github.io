<template><div><h1 id="사용자-지정-오류" tabindex="-1"><a class="header-anchor" href="#사용자-지정-오류" aria-hidden="true">#</a> 사용자 지정 오류</h1>
<h2 id="_404-페이지" tabindex="-1"><a class="header-anchor" href="#_404-페이지" aria-hidden="true">#</a> 404 페이지</h2>
<p>404 페이지는 매우 자주 액세스될 수 있습니다. 매 방문마다 오류 페이지를 서버 렌더링하는 것은 Next.js 서버의 부하를 증가시킵니다. 이로 인해 비용이 증가하고 경험이 느려질 수 있습니다.</p>
<p>위의 문제를 피하기 위해 Next.js는 추가 파일을 추가하지 않고도 기본적으로 정적 404 페이지를 제공합니다.</p>
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
<h3 id="_404-페이지-사용자-정의하기" tabindex="-1"><a class="header-anchor" href="#_404-페이지-사용자-정의하기" aria-hidden="true">#</a> 404 페이지 사용자 정의하기</h3>
<p>사용자 정의 404 페이지를 만들려면 pages/404.js 파일을 만들면 됩니다. 이 파일은 빌드 시 정적으로 생성됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Custom404</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token number">404</span> <span class="token operator">-</span> 페이지를 찾을 수 없음<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두면 좋은 사실: 필요하다면 이 페이지 내에서 getStaticProps를 사용하여 빌드 시 데이터를 가져올 수 있습니다.</p>
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
<h2 id="_500-페이지" tabindex="-1"><a class="header-anchor" href="#_500-페이지" aria-hidden="true">#</a> 500 페이지</h2>
<p>매 방문마다 오류 페이지를 서버 렌더링하는 것은 오류에 대응하기가 복잡해집니다. 사용자가 오류에 대한 응답을 최대한 빠르게 받을 수 있도록하기 위해 Next.js는 추가 파일을 추가하지 않고도 기본적으로 정적인 500 페이지를 제공합니다.</p>
<h3 id="_500-페이지-사용자-정의" tabindex="-1"><a class="header-anchor" href="#_500-페이지-사용자-정의" aria-hidden="true">#</a> 500 페이지 사용자 정의</h3>
<p>500 페이지를 사용자 정의하려면 pages/500.js 파일을 생성할 수 있습니다. 이 파일은 빌드 시 정적으로 생성됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Custom500</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token number">500</span> <span class="token operator">-</span> 서버 측 오류가 발생했습니다<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>알아두세요: 필요한 경우 빌드 시간에 데이터를 가져오려면 이 페이지 내부에서 getStaticProps를 사용할 수 있습니다.</p>
</blockquote>
<h3 id="더-발전된-오류-페이지-사용자-정의" tabindex="-1"><a class="header-anchor" href="#더-발전된-오류-페이지-사용자-정의" aria-hidden="true">#</a> 더 발전된 오류 페이지 사용자 정의</h3>
<p>500 오류는 클라이언트 측과 서버 측 모두 Error 컴포넌트로 처리됩니다. 오버라이드하려면 파일 pages/_error.js를 정의하고 다음 코드를 추가하십시오:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> statusCode <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>statusCode <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">서버에서 오류 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>statusCode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">가 발생했습니다</span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> <span class="token string">"클라이언트에서 오류가 발생했습니다"</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

Error<span class="token punctuation">.</span><span class="token function-variable function">getInitialProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> res<span class="token punctuation">,</span> err <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> statusCode <span class="token operator">=</span> res <span class="token operator">?</span> res<span class="token punctuation">.</span>statusCode <span class="token operator">:</span> err <span class="token operator">?</span> err<span class="token punctuation">.</span>statusCode <span class="token operator">:</span> <span class="token number">404</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> statusCode <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Error<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>pages/_error.js는 프로덕션에서만 사용됩니다. 개발 중이라면 오류가 발생할 때 오류의 발생 위치를 알 수 있는 콜 스택과 함께 오류를 받게 됩니다.</p>
</blockquote>
<h3 id="내장된-오류-페이지-재사용하기" tabindex="-1"><a class="header-anchor" href="#내장된-오류-페이지-재사용하기" aria-hidden="true">#</a> 내장된 오류 페이지 재사용하기</h3>
<p>내장된 오류 페이지를 렌더링하고 싶다면 Error 컴포넌트를 가져와서 사용할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Error <span class="token keyword">from</span> <span class="token string">"next/error"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">"https://api.github.com/repos/vercel/next.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> errorCode <span class="token operator">=</span> res<span class="token punctuation">.</span>ok <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> res<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
  <span class="token keyword">const</span> json <span class="token operator">=</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> errorCode<span class="token punctuation">,</span> <span class="token literal-property property">stars</span><span class="token operator">:</span> json<span class="token punctuation">.</span>stargazers_count <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> errorCode<span class="token punctuation">,</span> stars <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>errorCode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>Error statusCode<span class="token operator">=</span><span class="token punctuation">{</span>errorCode<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Next stars<span class="token operator">:</span> <span class="token punctuation">{</span>stars<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Error</code> 컴포넌트는 title을 속성으로도 받을 수 있어요. statusCode와 함께 텍스트 메시지를 전달하고 싶다면 title을 사용하세요.</p>
<p>만약 커스텀 Error 컴포넌트가 있다면 그것을 가져와야 해요. next/error는 Next.js에서 사용하는 기본 컴포넌트를 내보냅니다.</p>
<h3 id="주의사항" tabindex="-1"><a class="header-anchor" href="#주의사항" aria-hidden="true">#</a> 주의사항</h3>
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
<li>현재 Error는 getStaticProps 또는 getServerSideProps와 같은 Next.js 데이터 가져오기 방법을 지원하지 않습니다.</li>
<li>_error는 _app과 마찬가지로 예약 된 경로입니다. _error는 오류 페이지의 사용자 정의 레이아웃과 동작을 정의하는 데 사용됩니다. /_error는 라우팅을 통해 직접 액세스하거나 사용자 정의 서버에서 렌더링 할 때 404를 렌더링합니다.</li>
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
</div></template>
