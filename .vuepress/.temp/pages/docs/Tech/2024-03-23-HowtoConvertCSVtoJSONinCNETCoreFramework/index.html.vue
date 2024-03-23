<template><div><p>CSV를 JSON으로 변환하는 코드를 작성하는 데 시간을 할애하는 것은 다른 긴급한 작업에서 시간을 빼앗아 버릴 수도 있어요. 다행히 모든 코드를 우리가 직접 작성할 필요는 없습니다.</p>
<p>! <a href="./img/How-to-Convert-CSV-to-JSON-in-C#-.NET-Core-Framework_0.png">이미지</a></p>
<p>아래 제공된 준비된 코드 예제를 사용하면 CSV 파일을 JSON 객체로 변환하는 무료 API의 혜택을 받을 수 있어요. API를 사용하면 이 일상적인 변환 작업이 매우 빠르고 쉽게 처리되며, 서버의 일부 처리 부담을 외부 서버로 옮길 수 있어요.</p>
<p>무료 API 키로 API 호출을 승인할 수 있어요. 이를 통해 매월 최대 800회의 변환을 약정없이 사용할 수 있어요.</p>
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
<p>API 호출을 구조화하기 위해 SDK를 설치하여 시작해보겠습니다. NuGet을 통해 설치하려면 Package Manager 콘솔에서 다음 명령을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Install<span class="token operator">-</span>Package Cloudmersive<span class="token punctuation">.</span>APIClient<span class="token punctuation">.</span>NETCore<span class="token punctuation">.</span>DocumentAndDataConvert <span class="token operator">-</span>Version <span class="token number">2.2</span><span class="token number">.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, 아래 코드를 파일에 복사하여 함수를 호출하세요. 지정된 코드 조각에 무료 API 키를 붙여넣고, CSV 파일을 formData 요청에 제공해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>using System<span class="token punctuation">;</span>
using System<span class="token punctuation">.</span>Diagnostics<span class="token punctuation">;</span>
using Cloudmersive<span class="token punctuation">.</span>APIClient<span class="token punctuation">.</span>NETCore<span class="token punctuation">.</span>DocumentAndDataConvert<span class="token punctuation">.</span>Api<span class="token punctuation">;</span>
using Cloudmersive<span class="token punctuation">.</span>APIClient<span class="token punctuation">.</span>NETCore<span class="token punctuation">.</span>DocumentAndDataConvert<span class="token punctuation">.</span>Client<span class="token punctuation">;</span>
using Cloudmersive<span class="token punctuation">.</span>APIClient<span class="token punctuation">.</span>NETCore<span class="token punctuation">.</span>DocumentAndDataConvert<span class="token punctuation">.</span>Model<span class="token punctuation">;</span>

namespace Example
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConvertDataCsvToJsonExample</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// API 키 권한 구성: Apikey</span>
            Configuration<span class="token punctuation">.</span>Default<span class="token punctuation">.</span><span class="token function">AddApiKey</span><span class="token punctuation">(</span><span class="token string">"Apikey"</span><span class="token punctuation">,</span> <span class="token string">"여러분의_API_키"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">var</span> apiInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConvertDataApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> inputFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">System<span class="token punctuation">.</span>IO<span class="token punctuation">.</span>FileStream</span><span class="token punctuation">(</span><span class="token string">"C:\\temp\\inputfile"</span><span class="token punctuation">,</span> System<span class="token punctuation">.</span><span class="token constant">IO</span><span class="token punctuation">.</span>FileMode<span class="token punctuation">.</span>Open<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 작업을 수행할 입력 파일.</span>
            <span class="token keyword">var</span> columnNamesFromFirstRow <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">// bool? | 선택 사항; true로 설정하면 첫 번째 행이 열의 레이블로 사용됩니다. false로 설정하면 열이 Column0, Column1 등으로 명명됩니다. 기본값은 true입니다. Column 헤더를 사용하지 않거나 불규칙한 열 구조를 가지고 있다면 false로 설정하세요. (선택사항)</span>

            <span class="token keyword">try</span>
            <span class="token punctuation">{</span>
                <span class="token comment">// CSV를 JSON으로 변환</span>
                Object result <span class="token operator">=</span> apiInstance<span class="token punctuation">.</span><span class="token function">ConvertDataCsvToJson</span><span class="token punctuation">(</span>inputFile<span class="token punctuation">,</span> columnNamesFromFirstRow<span class="token punctuation">)</span><span class="token punctuation">;</span>
                Debug<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">catch</span> <span class="token punctuation">(</span>Exception e<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                Debug<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">"ConvertDataApi.ConvertDataCsvToJson 호출 시 예외 발생: "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span>Message <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 최소한의 코드로 CSV를 JSON으로 쉽게 변환할 수 있어요.</p>
</div></template>
