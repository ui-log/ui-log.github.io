<template><div><p>바이러스는 사용자가 제출한 콘텐츠뿐만 아니라 때로는 고객이 제출한 콘텐츠와 관련된 주요 문제가 될 수 있습니다. 시스템을 안전하게 유지하는 가장 좋은 방법은 모든 수신 파일을 시스템이 상호 작용하기 전에 스크린하는 것입니다. 이를 위해, 이 튜토리얼에서는 Java를 사용하여 자동 바이러스 스캔 시스템을 빠르고 쉽게 설정하는 방법을 안내할 것입니다. 바로 시작해 봅시다.</p>
<p>먼저, 우리는 Jitpack을 사용하여 라이브러리를 동적으로 컴파일해야 합니다. 이를 위해, Maven POM 파일에 우리의 저장소와 매장소에 대한 참조를 추가해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>repositories<span class="token operator">></span>
  <span class="token operator">&lt;</span>repository<span class="token operator">></span>
    <span class="token operator">&lt;</span>id<span class="token operator">></span>jitpack<span class="token punctuation">.</span>io<span class="token operator">&lt;</span><span class="token operator">/</span>id<span class="token operator">></span>
    <span class="token operator">&lt;</span>url<span class="token operator">></span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>jitpack<span class="token punctuation">.</span>io<span class="token operator">&lt;</span><span class="token operator">/</span>url<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>repository<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>repositories<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>dependencies<span class="token operator">></span>
  <span class="token operator">&lt;</span>dependency<span class="token operator">></span>
    <span class="token operator">&lt;</span>groupId<span class="token operator">></span>com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>Cloudmersive<span class="token operator">&lt;</span><span class="token operator">/</span>groupId<span class="token operator">></span>
    <span class="token operator">&lt;</span>artifactId<span class="token operator">></span>Cloudmersive<span class="token punctuation">.</span>APIClient<span class="token punctuation">.</span>Java<span class="token operator">&lt;</span><span class="token operator">/</span>artifactId<span class="token operator">></span>
    <span class="token operator">&lt;</span>version<span class="token operator">></span>v2<span class="token punctuation">.</span><span class="token number">75</span><span class="token operator">&lt;</span><span class="token operator">/</span>version<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>dependency<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>dependencies<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 scanFile을 호출하기만 하면 됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 클래스 가져 오기:</span>
<span class="token comment">//import com.cloudmersive.client.invoker.ApiClient;</span>
<span class="token comment">//import com.cloudmersive.client.invoker.ApiException;</span>
<span class="token comment">//import com.cloudmersive.client.invoker.Configuration;</span>
<span class="token comment">//import com.cloudmersive.client.invoker.auth.*;</span>
<span class="token comment">//import com.cloudmersive.client.ScanApi;</span>
ApiClient defaultClient <span class="token operator">=</span> Configuration<span class="token punctuation">.</span><span class="token function">getDefaultApiClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// API 키 인증 구성:</span>
ApiKeyAuth Apikey <span class="token operator">=</span> <span class="token punctuation">(</span>ApiKeyAuth<span class="token punctuation">)</span> defaultClient<span class="token punctuation">.</span><span class="token function">getAuthentication</span><span class="token punctuation">(</span><span class="token string">"Apikey"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Apikey<span class="token punctuation">.</span><span class="token function">setApiKey</span><span class="token punctuation">(</span><span class="token string">"YOUR API KEY"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// API 키에 대한 접두사를 설정하려면 다음 줄의 주석을 해제하십시오. 예 : "Token" (기본값은 null입니다)</span>
<span class="token comment">//Apikey.setApiKeyPrefix("Token");</span>
ScanApi apiInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScanApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
File inputFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"/path/to/file"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 수행할 파일의 입력 파일.</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
VirusScanResult result <span class="token operator">=</span> apiInstance<span class="token punctuation">.</span><span class="token function">scanFile</span><span class="token punctuation">(</span>inputFile<span class="token punctuation">)</span><span class="token punctuation">;</span>
System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>ApiException e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
System<span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"ScanApi#scanFile 호출 시 예외 발생"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 이것이 전달된 응답 형식입니다:</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"CleanResult"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"FoundViruses"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"FileName"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
      <span class="token property">"VirusName"</span><span class="token operator">:</span> <span class="token string">"string"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>


저희 바이러스 검사는 <span class="token number">1700</span>만 가지 이상의 바이러스 정의를 지원하며 지속적으로 클라우드 기반 업데이트를 받습니다. 더 많은 사용자 정의를 원하시면 scanFileAdvanced 함수를 사용하실 수도 있습니다. 이 함수를 사용하면 검사 기준을 세밀하게 조정할 수 있어 실행 파일<span class="token punctuation">,</span> 스크립트 및 잘못된 파일을 차단할 수 있습니다.

&lt;img src=<span class="token string">"./img/How-to-scan-a-file-for-viruses-in-Java_0.png"</span> />
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
