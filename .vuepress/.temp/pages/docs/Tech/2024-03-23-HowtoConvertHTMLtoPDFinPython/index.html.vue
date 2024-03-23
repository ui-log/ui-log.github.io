<template><div><p>HTML을 PDF로 쉽게 변환하는 방법은 무료 API를 호출하여 보완적인 코드 예제를 사용하는 것입니다.</p>
<p><img src="@source/docs/Tech/2024-03-23-HowtoConvertHTMLtoPDFinPython/img/How-to-Convert-HTML-to-PDF-in-Python_0.png" alt="이미지"></p>
<p>API 호출을 구조화하기 위해 먼저 클라이언트 SDK를 설치해봅시다. 다음 명령어를 사용하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pip install cloudmersive<span class="token operator">-</span>convert<span class="token operator">-</span>api<span class="token operator">-</span>client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그 후에, 가져오기와 함수 호출을 추가하세요. input_file 변수에 HTML 파일 경로를 포함하고, 배경 그래픽을 포함하고 스케일 요소를 설정하는 옵션을 사용자 정의해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>from __future__ <span class="token keyword">import</span> print_function
<span class="token keyword">import</span> time
<span class="token keyword">import</span> cloudmersive_convert_api_client
from cloudmersive_convert_api_client<span class="token punctuation">.</span>rest <span class="token keyword">import</span> ApiException
from pprint <span class="token keyword">import</span> pprint

# <span class="token constant">API</span> 키를 구성합니다<span class="token punctuation">.</span> Apikey로 <span class="token constant">API</span> 키 승인을 설정합니다<span class="token punctuation">.</span>
configuration <span class="token operator">=</span> cloudmersive_convert_api_client<span class="token punctuation">.</span><span class="token function">Configuration</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
configuration<span class="token punctuation">.</span>api_key<span class="token punctuation">[</span><span class="token string">'Apikey'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'YOUR_API_KEY'</span>

# <span class="token constant">API</span> 클래스의 인스턴스를 생성합니다<span class="token punctuation">.</span>
api_instance <span class="token operator">=</span> cloudmersive_convert_api_client<span class="token punctuation">.</span><span class="token function">ConvertDocumentApi</span><span class="token punctuation">(</span>cloudmersive_convert_api_client<span class="token punctuation">.</span><span class="token function">ApiClient</span><span class="token punctuation">(</span>configuration<span class="token punctuation">)</span><span class="token punctuation">)</span>
input_file <span class="token operator">=</span> <span class="token string">'/path/to/inputfile'</span> # file <span class="token operator">|</span> 작업을 수행할 입력 파일<span class="token punctuation">.</span>
include_background_graphics <span class="token operator">=</span> <span class="token boolean">true</span> # bool <span class="token operator">|</span> 선택 사양<span class="token operator">:</span> <span class="token constant">PDF</span>에 배경 그래픽을 포함하려면 <span class="token boolean">true</span>로 설정하거나 포함하지 않으려면 <span class="token boolean">false</span>로 설정하세요<span class="token punctuation">.</span> 기본값은 <span class="token boolean">true</span>입니다<span class="token punctuation">.</span> <span class="token punctuation">(</span>선택 사양<span class="token punctuation">)</span>
scale_factor <span class="token operator">=</span> <span class="token number">56</span> # int <span class="token operator">|</span> 선택 사양<span class="token operator">:</span> <span class="token number">100</span>으로 확대하여 <span class="token number">100</span><span class="token operator">%</span>로 확대하고 <span class="token number">50</span><span class="token operator">%</span>로 축소하려면 <span class="token number">50</span><span class="token operator">%</span>로 설정하고<span class="token punctuation">,</span> <span class="token number">200</span><span class="token operator">%</span>로 확대하려면 <span class="token number">200</span><span class="token operator">%</span>로 설정하세요<span class="token punctuation">.</span> 기본값은 <span class="token number">100</span><span class="token operator">%</span>입니다<span class="token punctuation">.</span> 최대값은 <span class="token number">1000</span><span class="token operator">%</span>입니다<span class="token punctuation">.</span> <span class="token punctuation">(</span>선택 사양<span class="token punctuation">)</span>

<span class="token keyword">try</span><span class="token operator">:</span>
    # <span class="token constant">HTML</span> 문서 파일을 <span class="token constant">PDF</span> 문서로 변환합니다<span class="token punctuation">.</span>
    api_response <span class="token operator">=</span> api_instance<span class="token punctuation">.</span><span class="token function">convert_document_html_to_pdf</span><span class="token punctuation">(</span>input_file<span class="token punctuation">,</span> include_background_graphics<span class="token operator">=</span>include_background_graphics<span class="token punctuation">,</span> scale_factor<span class="token operator">=</span>scale_factor<span class="token punctuation">)</span>
    <span class="token function">pprint</span><span class="token punctuation">(</span>api_response<span class="token punctuation">)</span>
except ApiException <span class="token keyword">as</span> <span class="token literal-property property">e</span><span class="token operator">:</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"ConvertDocumentApi->convert_document_html_to_pdf 호출 시 예외 발생: %s\n"</span> <span class="token operator">%</span> e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>API 호출을 승인하려면 무료 Cloudmersive API 키만 있으면 됩니다. 이를 통해 매월 800회의 API 호출을 제로 요청으로 이용할 수 있습니다.</p>
<p>그렇게 간단히, 모든 준비가 끝났습니다 — 더 이상의 코드 작성은 필요하지 않습니다.</p>
</div></template>
