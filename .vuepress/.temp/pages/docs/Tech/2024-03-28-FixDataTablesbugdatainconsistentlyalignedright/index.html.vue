<template><div><img src="@source/docs/Tech/2024-03-28-FixDataTablesbugdatainconsistentlyalignedright/img/FixDataTablesbugdatainconsistentlyalignedright_0.png" />
<h1 id="tldr" tabindex="-1"><a class="header-anchor" href="#tldr" aria-hidden="true">#</a> TLDR</h1>
<p>CSS에서 아래 코드를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>table<span class="token punctuation">.</span>dataTable th<span class="token punctuation">.</span>dt<span class="token operator">-</span>type<span class="token operator">-</span>numeric<span class="token punctuation">,</span> table<span class="token punctuation">.</span>dataTable th<span class="token punctuation">.</span>dt<span class="token operator">-</span>type<span class="token operator">-</span>date<span class="token punctuation">,</span> table<span class="token punctuation">.</span>dataTable td<span class="token punctuation">.</span>dt<span class="token operator">-</span>type<span class="token operator">-</span>numeric<span class="token punctuation">,</span> table<span class="token punctuation">.</span>dataTable td<span class="token punctuation">.</span>dt<span class="token operator">-</span>type<span class="token operator">-</span>date <span class="token punctuation">{</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="문제" tabindex="-1"><a class="header-anchor" href="#문제" aria-hidden="true">#</a> 문제</h1>
<p>DataTables 테이블이 때로는 기본적으로 왼쪽이어야 하는 데이터를 오른쪽으로 정렬합니다.</p>
<p>우리가 테이블이 이렇게 보이기를 기대합니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-FixDataTablesbugdatainconsistentlyalignedright/img/FixDataTablesbugdatainconsistentlyalignedright_1.png" alt="예시 테이블"></p>
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
<p>행 요소의 CSS를 조사해 보면 텍스트 정렬이 의도한 대로 왼쪽으로 상속되는 것을 보여줍니다.</p>
<p><img src="@source/docs/Tech/2024-03-28-FixDataTablesbugdatainconsistentlyalignedright/img/FixDataTablesbugdatainconsistentlyalignedright_2.png" alt="이미지"></p>
<p>하지만 때로는 표가 이렇게 보일 수도 있습니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-FixDataTablesbugdatainconsistentlyalignedright/img/FixDataTablesbugdatainconsistentlyalignedright_3.png" alt="이미지"></p>
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
<p>이러한 원치 않는 동작이 발생하는 이유는 DataTables가 열의 모든 데이터를 숫자 값으로 해석할 수 있기 때문이며, 숫자 값은 기본적으로 오른쪽으로 정렬됩니다. CSS를 조사하면 행이 다음 CSS를 상속하고 있음을 알 수 있습니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-FixDataTablesbugdatainconsistentlyalignedright/img/FixDataTablesbugdatainconsistentlyalignedright_4.png" alt="FixDataTablesbugdatainconsistentlyalignedright_4"></p>
<h1 id="해결-방법" tabindex="-1"><a class="header-anchor" href="#해결-방법" aria-hidden="true">#</a> 해결 방법</h1>
<p>DataTables가 숫자로 간주하는 열에 대해 왼쪽 텍스트 정렬을 적용하려면, 자체 스타일시트에서 CSS를 반전시키면 됩니다. DataTables 스타일시트 이후에 이 스타일시트가 로드되도록 해야 합니다.</p>
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
    <span class="token property">"table.dataTable th.dt-type-numeric,table.dataTable th.dt-type-date,table.dataTable td.dt-type-numeric,table.dataTable td.dt-type-date"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"text-align"</span><span class="token operator">:</span> <span class="token string">"left"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
