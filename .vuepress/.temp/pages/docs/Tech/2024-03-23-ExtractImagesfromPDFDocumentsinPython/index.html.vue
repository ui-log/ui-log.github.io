<template><div><p><img src="@source/docs/Tech/2024-03-23-ExtractImagesfromPDFDocumentsinPython/img/Extract-Images-from-PDF-Documents-in-Python_0.png" alt="이미지"></p>
<p>PDF 파일에서 이미지를 추출하는 것은 다양한 상황에서 유용하고 실용적 일 수 있습니다. 이미지를 프레젠테이션용으로 재활용하거나 디지털 사진 앨범을 만들거나, 단순히 나중에 참고할 이미지를 저장해야 하는 경우, PDF에서 이미지를 추출할 수 있는 능력은 시간과 노력을 절약할 수 있습니다. 이 기사에서는 Spire.PDF for Python을 사용하여 Python에서 PDF 문서에서 이미지를 추출하는 방법을 배우게 될 것입니다.</p>
<ul>
<li>Python에서 특정 페이지에서 이미지 추출하기</li>
<li>Python에서 PDF 문서에서 모든 이미지 추출하기</li>
</ul>
<h2 id="종속성-설치" tabindex="-1"><a class="header-anchor" href="#종속성-설치" aria-hidden="true">#</a> 종속성 설치</h2>
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
<p>이 솔루션을 사용하려면 Python에서 PDF 문서를 읽고 생성 및 조작하는 Python 라이브러리인 Spire.PDF for Python이 설치되어 있어야 합니다. 다음 pip 명령을 실행하여 설치할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pip install Spire<span class="token punctuation">.</span><span class="token constant">PDF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="파이썬에서-특정-페이지에서-이미지-추출" tabindex="-1"><a class="header-anchor" href="#파이썬에서-특정-페이지에서-이미지-추출" aria-hidden="true">#</a> 파이썬에서 특정 페이지에서 이미지 추출</h2>
<p>Spire.PDF for Python은 지정된 페이지에서 이미지를 추출하기 위한 PdfPageBase.ExtractImages() 메서드를 제공합니다. 아래는 상세한 단계입니다.</p>
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
<li>PdfDocument 객체를 생성합니다.</li>
<li>PdfDocument.LoadFromFile() 메서드를 사용하여 PDF 문서를 로드합니다.</li>
<li>PdfDocument.Pages[index] 속성을 사용하여 특정 페이지를 가져옵니다.</li>
<li>PdfPageBase.ExtractImages() 메서드를 사용하여 페이지에서 이미지를 추출하고 이미지 목록을 반환합니다.</li>
<li>목록에 있는 각 이미지를 PNG 파일로 저장합니다.</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>from spire<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span>common <span class="token keyword">import</span> <span class="token operator">*</span>
from spire<span class="token punctuation">.</span>pdf <span class="token keyword">import</span> <span class="token operator">*</span>

# PdfDocument 객체 생성
doc <span class="token operator">=</span> <span class="token function">PdfDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

# <span class="token constant">PDF</span> 문서 로드
doc<span class="token punctuation">.</span><span class="token function">LoadFromFile</span><span class="token punctuation">(</span><span class="token string">'C:/Users/Administrator/Desktop/input.pdf'</span><span class="token punctuation">)</span>

# 특정 페이지 가져오기
page <span class="token operator">=</span> doc<span class="token punctuation">.</span>Pages<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>

# 페이지에서 이미지 추출
images <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> image <span class="token keyword">in</span> page<span class="token punctuation">.</span><span class="token function">ExtractImages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
    images<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span>

# 이미지를 지정된 위치에 지정된 형식 확장자로 저장
index <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> image <span class="token keyword">in</span> <span class="token literal-property property">images</span><span class="token operator">:</span>
    imageFileName <span class="token operator">=</span> <span class="token string">'C:/Users/Administrator/Desktop/Extracted/Image-{0:d}.png'</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    index <span class="token operator">+=</span> <span class="token number">1</span>
    image<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span>imageFileName<span class="token punctuation">,</span> ImageFormat<span class="token punctuation">.</span><span class="token function">get_Png</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
doc<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-23-ExtractImagesfromPDFDocumentsinPython/img/Extract-Images-from-PDF-Documents-in-Python_1.png" />
<h2 id="python에서-pdf-문서에서-모든-이미지-추출" tabindex="-1"><a class="header-anchor" href="#python에서-pdf-문서에서-모든-이미지-추출" aria-hidden="true">#</a> Python에서 PDF 문서에서 모든 이미지 추출</h2>
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
<p>PDF 문서 전체에서 모든 이미지를 추출하려면 문서의 각 페이지를 순회한 다음 각 페이지에서 이미지를 별도로 가져와야 합니다. 아래는 상세한 단계입니다.</p>
<ul>
<li>PdfDocument 객체를 생성합니다.</li>
<li>PdfDocument.LoadFromFile() 메서드를 사용하여 PDF 문서를 로드합니다.</li>
<li>문서의 페이지를 반복하고 PdfPageBase.ExtractImages() 메서드를 사용하여 각 페이지에서 이미지를 가져옵니다.</li>
<li>추출된 모든 이미지를 개별 PNG 파일로 작성합니다.</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">from</span> spire<span class="token punctuation">.</span>pdf<span class="token punctuation">.</span>common <span class="token keyword">import</span> <span class="token operator">*</span>
<span class="token keyword">from</span> spire<span class="token punctuation">.</span>pdf <span class="token keyword">import</span> <span class="token operator">*</span>

<span class="token comment"># PdfDocument 객체 생성</span>
doc <span class="token operator">=</span> PdfDocument<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># PDF 문서 로드</span>
doc<span class="token punctuation">.</span>LoadFromFile<span class="token punctuation">(</span><span class="token string">'C:/Users/Administrator/Desktop/input.pdf'</span><span class="token punctuation">)</span>

images <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token comment"># 문서의 페이지를 순회</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>doc<span class="token punctuation">.</span>Pages<span class="token punctuation">.</span>Count<span class="token punctuation">)</span><span class="token punctuation">:</span>
    page <span class="token operator">=</span> doc<span class="token punctuation">.</span>Pages<span class="token punctuation">.</span>get_Item<span class="token punctuation">(</span>i<span class="token punctuation">)</span>

    <span class="token comment"># 특정 페이지에서 이미지 추출</span>
    <span class="token keyword">for</span> image <span class="token keyword">in</span> page<span class="token punctuation">.</span>ExtractImages<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        images<span class="token punctuation">.</span>append<span class="token punctuation">(</span>image<span class="token punctuation">)</span>

<span class="token comment"># 추출된 이미지를 지정된 위치에 지정된 형식의 확장자로 저장</span>
index <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">for</span> image <span class="token keyword">in</span> images<span class="token punctuation">:</span>
    imageFileName <span class="token operator">=</span> <span class="token string">'C:/Users/Administrator/Desktop/Extracted/Image-{0:d}.png'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    index <span class="token operator">+=</span> <span class="token number">1</span>
    image<span class="token punctuation">.</span>Save<span class="token punctuation">(</span>imageFileName<span class="token punctuation">,</span> ImageFormat<span class="token punctuation">.</span>get_Png<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
doc<span class="token punctuation">.</span>Close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Tech/2024-03-23-ExtractImagesfromPDFDocumentsinPython/img/Extract-Images-from-PDF-Documents-in-Python_2.png" />
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
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>이 블로그 포스트는 Python을 사용하여 PDF 문서에서 이미지를 추출하는 데 유용한 통찰을 제공합니다. 특정 페이지에서 이미지를 추출하는 방법과 PDF 문서에서 모든 이미지를 추출하는 방법 두 가지 기술을 다룹니다. 이러한 기술은 PDF 파일에서 이미지를 프로그래밍 방식으로 조작하고 추출하려는 개발자와 열련자들에게 실용적인 해결책을 제공합니다.</p>
<h2 id="관련-주제" tabindex="-1"><a class="header-anchor" href="#관련-주제" aria-hidden="true">#</a> 관련 주제</h2>
<p>Python에서 PDF 문서에서 텍스트 추출하기</p>
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
<p>파이썬으로 PDF 메타데이터 추가, 읽기 또는 제거하기</p>
<p>파이썬에서 PDF를 이미지로 변환하거나 이미지를 PDF로 변환하기</p>
</div></template>
