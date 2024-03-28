<template><div><h1 id="서버-동작" tabindex="-1"><a class="header-anchor" href="#서버-동작" aria-hidden="true">#</a> 서버 동작</h1>
<p>당신의 Next.js 어플리케이션에서 서버 동작 동작을 구성하는 옵션입니다.</p>
<h2 id="allowedorigins" tabindex="-1"><a class="header-anchor" href="#allowedorigins" aria-hidden="true">#</a> allowedOrigins</h2>
<p>서버 동작이 호출될 수 있는 추가 안전한 오리진 도메인 목록입니다. Next.js는 서버 동작 요청의 오리진과 호스트 도메인을 비교하여 CSRF 공격을 방지하기 위해 일치 여부를 확인합니다. 제공되지 않은 경우 동일한 오리진만 허용됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">serverActions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">allowedOrigins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"my-proxy.com"</span><span class="token punctuation">,</span> <span class="token string">"*.my-proxy.com"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bodysizelimit" tabindex="-1"><a class="header-anchor" href="#bodysizelimit" aria-hidden="true">#</a> bodySizeLimit</h2>
<p>기본적으로 Server Action으로 전송되는 요청 본문의 최대 크기는 1MB입니다. 이는 대량의 데이터를 구문 분석할 때 발생하는 과도한 서버 리소스 소비 및 잠재적인 DDoS 공격을 방지하기 위한 것입니다.</p>
<p>그러나 serverActions.bodySizeLimit 옵션을 사용하여이 제한을 구성할 수 있습니다. 이는 바이트 수 또는 바이트에서 지원하는 어떤 문자열 형식을 사용할 수 있습니다. 예를들어 1000, <code v-pre>500kb</code> 또는 <code v-pre>3mb</code>와 같은 형식이 가능합니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span> */</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">serverActions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">bodySizeLimit</span><span class="token operator">:</span> <span class="token string">"2mb"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="서버-액션-활성화-v13" tabindex="-1"><a class="header-anchor" href="#서버-액션-활성화-v13" aria-hidden="true">#</a> 서버 액션 활성화 (v13)</h2>
<p>서버 액션은 Next.js 14에서 안정적인 기능으로 출시되었으며 기본적으로 활성화되어 있습니다. 그러나 이전 버전의 Next.js를 사용 중이라면 experimental.serverActions를 true로 설정하여 활성화할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'next'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>NextConfig<span class="token punctuation">}</span></span>') */</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">experimental</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">serverActions</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> config<span class="token punctuation">;</span>
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
</div></template>
