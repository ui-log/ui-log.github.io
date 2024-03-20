<template><div><h1 id="nextjs-14에서-user-agent-알아내는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-user-agent-알아내는-방법" aria-hidden="true">#</a> Nextjs 14에서 user agent 알아내는 방법</h1>
<p>사용자 에이전트 도우미는 Web Request API를 확장하여 요청의 사용자 에이전트 객체와 상호 작용하기 위한 추가 속성 및 메서드를 제공합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> NextRequest<span class="token punctuation">,</span> NextResponse<span class="token punctuation">,</span> userAgent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/server"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">middleware</span><span class="token punctuation">(</span>request<span class="token operator">:</span> NextRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> url <span class="token operator">=</span> request<span class="token punctuation">.</span>nextUrl<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> device <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">userAgent</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> viewport <span class="token operator">=</span> device<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">"mobile"</span> <span class="token operator">?</span> <span class="token string">"mobile"</span> <span class="token operator">:</span> <span class="token string">"desktop"</span><span class="token punctuation">;</span>
  url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"viewport"</span><span class="token punctuation">,</span> viewport<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> NextResponse<span class="token punctuation">.</span><span class="token function">rewrite</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isbot" tabindex="-1"><a class="header-anchor" href="#isbot" aria-hidden="true">#</a> isBot</h2>
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
<p>알려진 봇에서 요청이 왔는지를 나타내는 부울 값입니다.</p>
<h2 id="브라우저" tabindex="-1"><a class="header-anchor" href="#브라우저" aria-hidden="true">#</a> 브라우저</h2>
<p>요청에 사용된 브라우저에 관한 정보를 포함하는 객체입니다.</p>
<ul>
<li>name: 브라우저의 이름을 나타내는 문자열 또는 식별할 수 없는 경우에는 정의되지 않습니다.</li>
<li>version: 브라우저의 버전을 나타내는 문자열이거나 정의되지 않은 경우입니다.</li>
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
<h2 id="디바이스" tabindex="-1"><a class="header-anchor" href="#디바이스" aria-hidden="true">#</a> 디바이스</h2>
<p>요청에 사용된 기기에 관한 정보를 포함하는 객체입니다.</p>
<ul>
<li>model: 기기 모델을 나타내는 문자열 또는 정의되지 않음.</li>
<li>type: 콘솔, 모바일, 태블릿, 스마트 TV, 웨어러블, 임베디드 또는 정의되지 않은 기기 유형을 나타내는 문자열.</li>
<li>vendor: 기기의 제조사를 나타내는 문자열 또는 정의되지 않음.</li>
</ul>
<h2 id="엔진" tabindex="-1"><a class="header-anchor" href="#엔진" aria-hidden="true">#</a> 엔진</h2>
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
<p>브라우저 엔진에 관한 정보를 담고 있는 객체입니다.</p>
<ul>
<li>이름: 엔진의 이름을 나타내는 문자열입니다. 가능한 값으로는 Amaya, Blink, EdgeHTML, Flow, Gecko, Goanna, iCab, KHTML, Links, Lynx, NetFront, NetSurf, Presto, Tasman, Trident, w3m, WebKit, 또는 undefined가 있습니다.</li>
<li>버전: 엔진의 버전을 나타내는 문자열이거나 undefined입니다.</li>
</ul>
<h2 id="운영-체제" tabindex="-1"><a class="header-anchor" href="#운영-체제" aria-hidden="true">#</a> 운영 체제</h2>
<p>운영 체제에 관한 정보를 담고 있는 객체입니다.</p>
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
<li>name: 운영 체제의 이름을 나타내는 문자열 또는 정의되지 않은 값.</li>
<li>version: 운영 체제의 버전을 나타내는 문자열 또는 정의되지 않은 값.</li>
</ul>
<h2 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> cpu</h2>
<p>CPU 아키텍처에 대한 정보를 포함하는 객체입니다.</p>
<ul>
<li>architecture: CPU 아키텍처를 나타내는 문자열. 가능한 값은 68k, amd64, arm, arm64, armhf, avr, ia32, ia64, irix, irix64, mips, mips64, pa-risc, ppc, sparc, sparc64 또는 정의되지 않은 값입니다.</li>
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
