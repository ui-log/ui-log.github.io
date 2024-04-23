<template><div><p><img src="@source/docs/Nextjs/2024-04-05-CreatingaDrag-and-DropFileUploadComponentinReactAStep-by-StepGuide/img/CreatingaDrag-and-DropFileUploadComponentinReactAStep-by-StepGuide_0.png" alt="Creating a Drag-and-Drop File Upload Component in React: A Step-by-Step Guide"></p>
<p>현재의 디지털 세계에서 파일과 이미지를 업로드하는 것은 모든 애플리케이션의 중요한 기능입니다.</p>
<p>사진 공유 앱, 문서 관리 시스템 또는 동적 생성 콘텐츠가 포함된 모든 애플리케이션을 구축 중이신 경우, 원활하고 사용자 친화적인 파일 업로드 메커니즘이 필수적입니다. 드래그 앤 드롭 기능을 통해 사용자는 파일 탐색기에서 파일을 드래그하여 지정된 영역으로 끌어다 놓음으로써 손쉽게 파일을 앱에 추가할 수 있습니다.</p>
<p>이 글에서는 웹 앱에 드래그 앤 드롭 컴포넌트를 구현하는 방법을 배웁니다. 또한 사용자가 파일을 놓는 것을 다른 컴포넌트에 props를 사용하여 전달하는 방법도 배우게 됩니다 (자식에서 부모로).</p>
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
<h1 id="목차" tabindex="-1"><a class="header-anchor" href="#목차" aria-hidden="true">#</a> 목차</h1>
<ul>
<li>준비물</li>
<li>드래그 앤 드롭(Drag-and-drop)이란 무엇인가</li>
<li>ReactJS에서 드래그 앤 드롭이 어떻게 작동하는가</li>
<li>ReactJS에서 드래그 앤 드롭 컴포넌트 만들기</li>
<li>결론</li>
</ul>
<h1 id="준비물" tabindex="-1"><a class="header-anchor" href="#준비물" aria-hidden="true">#</a> 준비물</h1>
<p>React JSX에 대한 지식
useState와 같은 React hooks에 대한 지식
어떻게 props이 전달되는지에 대한 이해
코딩 환경!
이미 실행 중인 ReactJS 프로젝트!</p>
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
<h1 id="드래그-앤-드롭이란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#드래그-앤-드롭이란-무엇인가요" aria-hidden="true">#</a> 드래그 앤 드롭이란 무엇인가요?</h1>
<p>드래그 앤 드롭은 현대 시스템에서 제공되는 편리한 기능입니다. 이 기능을 통해 사용자는 쉽게 파일, 텍스트 또는 이미지를 한 창에서 다른 창으로 이동할 수 있습니다. 이 기능은 많은 시스템에서 기본적으로 제공되지만 웹 애플리케이션에서도 큰 성공을 거뒀습니다.</p>
<h1 id="react에서-드래그-앤-드롭은-어떻게-작동하나요" tabindex="-1"><a class="header-anchor" href="#react에서-드래그-앤-드롭은-어떻게-작동하나요" aria-hidden="true">#</a> React에서 드래그 앤 드롭은 어떻게 작동하나요?</h1>
<p>드래그 앤 드롭은 사용자가 마우스 커서로 아이템을 클릭하고, 들고, 그리고 이동시킨 다음 원하는 위치에 놓아놓는 것으로 데이터나 객체를 한 위치에서 다른 위치로 이동시킬 수 있는 사용자 인터페이스 상호작용입니다. 이 상호작용은 주로 목록 항목을 재배열하거나 파일을 폴더 사이에서 이동하는 등의 작업에 사용됩니다. 여기에 보통 드래그 앤 드롭이 작동하는 방식이 있습니다:</p>
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
<li>시작: 드래그 앤 드롭 상호작용은 사용자가 웹 응용 프로그램의 파일, 이미지 또는 요소와 같은 드래그 가능한 항목을 클릭하고 마우스 버튼을 클릭하여 들고 있을 때 시작됩니다. 이 단계에서 드래그하는 항목을 '드래그 소스'라고합니다.</li>
<li>드래깅: 사용자가 마우스 버튼을 누른 채로 커서를 이동하면 드래그 된 항목이 커서의 움직임을 따라 이동합니다. 이렇게하면 화면을 통해 항목이 이동되는 시각적 효과가 생성됩니다.</li>
<li>드롭 타겟: 드래그 앤 드롭 작업을 완료하려면 사용자가 유효한 '드롭 타겟' 위로 커서를 이동합니다. 드롭 타겟은 일반적으로 드롭된 항목을 수락할 수있는 영역 또는 요소입니다. 예를 들어 파일 브라우저의 폴더이거나 웹 응용 프로그램에서 항목을 배치해야하는 특정 위치가 될 수 있습니다.</li>
<li>피드백: 커서가 드롭 타겟 위에 위치할 때, 드롭 타겟은 종종 드래그된 항목을 수락할 수 있다는 것을 나타내는 시각적 피드백을 제공합니다. 이 피드백에는 강조 표시, 애니메이션 또는 기타 시각적 신호가 포함될 수 있습니다.</li>
<li>릴리스: 항목을 드롭하려면 사용자가 마우스 버튼을 놓습니다. 이 시점에서 시스템 또는 애플리케이션이 드롭 이벤트를 감지하고 처리합니다.</li>
<li>드롭 처리: 시스템 또는 애플리케이션이 드롭 이벤트에 응답합니다. 일반적으로 이는 항목을 새 위치로 이동하거나 복사하는 것(파일 관리의 경우)이나 특정 작업(웹 응용 프로그램의 경우)을 트리거하는 것을 포함합니다.</li>
</ul>
<h1 id="reactjs에서-드래그-앤-드롭-컴포넌트-생성" tabindex="-1"><a class="header-anchor" href="#reactjs에서-드래그-앤-드롭-컴포넌트-생성" aria-hidden="true">#</a> ReactJS에서 드래그 앤 드롭 컴포넌트 생성</h1>
<p>DragNDrop 컴포넌트와 해당 CSS 파일을 생성하려면 프로젝트 폴더로 이동하여 DragNDrop.jsx와 drag-drop.css라는 두 개의 새 파일을 만듭니다. 이 문서는 이미 ReactJS 프로젝트가 설정되어 있다고 가정하므로 새 프로젝트를 만드는 방법에 대해 다루지 않겠습니다.</p>
<p>아래 CSS 코드를 복사하여 새로 만든 CSS 파일에 붙여넣으세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>drag<span class="token operator">-</span>drop <span class="token punctuation">{</span>
  <span class="token literal-property property">background</span><span class="token operator">:</span> #fff<span class="token punctuation">;</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>border<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>document<span class="token operator">-</span>uploader <span class="token punctuation">{</span>
  <span class="token literal-property property">border</span><span class="token operator">:</span> 2px dashed #4282fe<span class="token punctuation">;</span>
  background<span class="token operator">-</span>color<span class="token operator">:</span> #f4fbff<span class="token punctuation">;</span>
  <span class="token literal-property property">padding</span><span class="token operator">:</span> 10px<span class="token punctuation">;</span>
  <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
  flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
  align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
  justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
  border<span class="token operator">-</span>radius<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
  <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>

  <span class="token operator">&amp;</span><span class="token punctuation">.</span>active <span class="token punctuation">{</span>
    border<span class="token operator">-</span>color<span class="token operator">:</span> #6dc24b<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>upload<span class="token operator">-</span>info <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    margin<span class="token operator">-</span>bottom<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>

    svg <span class="token punctuation">{</span>
      font<span class="token operator">-</span>size<span class="token operator">:</span> 36px<span class="token punctuation">;</span>
      margin<span class="token operator">-</span>right<span class="token operator">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    div <span class="token punctuation">{</span>
      p <span class="token punctuation">{</span>
        <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token literal-property property">p</span><span class="token operator">:</span>first<span class="token operator">-</span>child <span class="token punctuation">{</span>
        font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>file<span class="token operator">-</span>list <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 30vh<span class="token punctuation">;</span>
    <span class="token operator">&amp;</span>__container <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
      <span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>file<span class="token operator">-</span>item <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> space<span class="token operator">-</span>between<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>border<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 8px<span class="token punctuation">;</span>

    <span class="token punctuation">.</span>file<span class="token operator">-</span>info <span class="token punctuation">{</span>
      <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
      flex<span class="token operator">-</span>direction<span class="token operator">:</span> column<span class="token punctuation">;</span>
      <span class="token literal-property property">gap</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span>
      <span class="token literal-property property">flex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>

      p <span class="token punctuation">{</span>
        <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">333</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>file<span class="token operator">-</span>actions <span class="token punctuation">{</span>
      <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>

      svg <span class="token punctuation">{</span>
        font<span class="token operator">-</span>size<span class="token operator">:</span> 18px<span class="token punctuation">;</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> #<span class="token number">888</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token operator">&amp;</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
        svg <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> #d44<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>browse<span class="token operator">-</span>btn <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem 1rem<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>border<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> 8px<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>primary<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token operator">&amp;</span><span class="token operator">:</span>hover <span class="token punctuation">{</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> transparent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token punctuation">.</span>success<span class="token operator">-</span>file <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> #6dc24b<span class="token punctuation">;</span>

    p <span class="token punctuation">{</span>
      <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
      font<span class="token operator">-</span>size<span class="token operator">:</span> 14px<span class="token punctuation">;</span>
      font<span class="token operator">-</span>weight<span class="token operator">:</span> bold<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  input<span class="token punctuation">[</span>type<span class="token operator">=</span><span class="token string">"file"</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>애플리케이션 스킨에 맞게 스타일을 사용자 정의해야 합니다.</p>
<p>그런 다음, jsx 파일을 열고 아래 코드를 붙여 넣으세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineCheckCircle<span class="token punctuation">,</span> AiOutlineCloudUpload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/ai"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MdClear <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/md"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./drag-drop.css"</span><span class="token punctuation">;</span>
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
<p>위의 코드 스니펫에서는 리액트 훅, 아이콘 및 스타일시트와 같은 모든 필요한 파일을 가져와서 시작합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">DragNdrop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  onFilesSelected<span class="token punctuation">,</span>
  width<span class="token punctuation">,</span>
  height<span class="token punctuation">,</span>
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>files<span class="token punctuation">,</span> setFiles<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleDrop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> droppedFiles <span class="token operator">=</span> event<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>droppedFiles<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newFiles <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>droppedFiles<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setFiles</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevFiles</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevFiles<span class="token punctuation">,</span> <span class="token operator">...</span>newFiles<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 컴포넌트의 다양성을 향상시키기 위해 파일을 이 컴포넌트에서 다른 필요한 컴포넌트로 전달할 수 있습니다. 또한 사용자는이 컴포넌트의 크기를 사용자 정의할 수 있습니다. 이를 위해 사용자가 드롭한 파일을 저장하는 단일 useState 훅을 생성해야합니다.</p>
<p>이러한 드롭된 파일을 캡처하려면 handleDrop이라는 이름의 함수를 만듭니다. 이 함수는 드롭된 파일을 캡처하고 저장합니다. 전통적인 폼 요소는 폼 변경 시 페이지를 새로 고침하므로 이를 피하기 위해 이벤트 매개변수에 prevent 메서드를 호출합니다. 파일이 드롭되면 event.dataTransfer.files 메서드를 사용하여 해당 파일에 액세스 할 수 있습니다. 이 수신되는 객체를 array.from ()을 사용하여 배열로 변환합니다. 마지막으로이 새 파일 배열로 상태를 업데이트합니다.</p>
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
<p>위의 코드 스니펫은 두 개의 함수를 선언합니다. 첫 번째 함수는 파일 목록에서 주어진 파일을 제거하고, 두 번째 함수는 파일 변경이 있는 경우 새 파일로 프롭을 업데이트합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"drag-drop"</span> style<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> width<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> height <span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div
        className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document-uploader </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
          files<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">"upload-box active"</span> <span class="token operator">:</span> <span class="token string">"upload-box"</span>
        <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
        onDrop<span class="token operator">=</span><span class="token punctuation">{</span>handleDrop<span class="token punctuation">}</span>
        onDragOver<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"upload-info"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>AiOutlineCloudUpload <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>p<span class="token operator">></span>여기에 파일을 끌어다 놓거나 여기를 클릭하세요<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p<span class="token operator">></span>
               지원되는 파일 형식<span class="token operator">:</span> <span class="token punctuation">.</span><span class="token constant">JPG</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">PNG</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">JPEEG</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">PDF</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">DOCX</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">PPTX</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">TXT</span><span class="token punctuation">,</span>
                <span class="token punctuation">.</span><span class="token constant">XLSX</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

        <span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-list"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-list__container"</span><span class="token operator">></span>
              <span class="token punctuation">{</span>files<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-item"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-info"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>file<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                    <span class="token punctuation">{</span><span class="token comment">/* &lt;p>{file.type}&lt;/p> */</span><span class="token punctuation">}</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-actions"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>MdClear onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleRemoveFile</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DragNdrop<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 함수들을 사용하려면 각 HTML div 요소에 onDrop, onDrag 등의 속성이 있습니다. 이러한 속성들은 마우스 포인터에서의 드래깅 이벤트를 감지합니다. 우리는 HTML의 onDrop 속성에 handleDrop 함수를 전달하여 드롭된 파일을 캐치합니다.</p>
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
<p>위의 함수들을 사용하면 드래그 앤 드롭 컴포넌트가 준비됐어요. 하지만, 더 있어요! 사용자에게 파일을 드래그 앤 드롭할 수 있는 기능은 선택 사항이에요. 언제든지 파일을 수동으로 선택할 수 있는 버튼이 있어요. 그렇다면, 코드를 업데이트해야 해요;</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">handleFileChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> selectedFiles <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selectedFiles <span class="token operator">&amp;&amp;</span> selectedFiles<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newFiles <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>selectedFiles<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setFiles</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevFiles</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevFiles<span class="token punctuation">,</span> <span class="token operator">...</span>newFiles<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드 스니펫에서 우리는 HTML 입력 요소에 파일을 다루는 함수를 선언하고 있어요. 우리의 handleDrop 함수와 비슷하게, target.files에서의 변화를 감지하고 있어요. 선택한 새 파일로 상태를 업데이트하고 있어요. 마지막으로 JSX 입력 요소를 반환하고, handleFileChange 함수를 연결하고 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"drag-drop"</span> style<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> width<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> height <span class="token punctuation">}</span><span class="token operator">></span>

      <span class="token comment">// 다른 JSX</span>

          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"file"</span>
            hidden
            id<span class="token operator">=</span><span class="token string">"browse"</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleFileChange<span class="token punctuation">}</span>
            accept<span class="token operator">=</span><span class="token string">".png, .jpg, .jpeg .pdf,.docx,.pptx,.txt,.xlsx"</span>
            multiple
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"browse"</span> className<span class="token operator">=</span><span class="token string">"browse-btn"</span><span class="token operator">></span>
            Browse files
          <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>

    <span class="token comment">// 다른 JSX</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>아래에 전체 컴포넌트 코드가 있어요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineCheckCircle<span class="token punctuation">,</span> AiOutlineCloudUpload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/ai"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MdClear <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-icons/md"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./drag-drop.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">DragNdrop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
  onFilesSelected<span class="token punctuation">,</span>
  width<span class="token punctuation">,</span>
  height<span class="token punctuation">,</span>
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>files<span class="token punctuation">,</span> setFiles<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>File<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleFileChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> selectedFiles <span class="token operator">=</span> event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>selectedFiles <span class="token operator">&amp;&amp;</span> selectedFiles<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newFiles <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>selectedFiles<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setFiles</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevFiles</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevFiles<span class="token punctuation">,</span> <span class="token operator">...</span>newFiles<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleDrop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> droppedFiles <span class="token operator">=</span> event<span class="token punctuation">.</span>dataTransfer<span class="token punctuation">.</span>files<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>droppedFiles<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> newFiles <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>droppedFiles<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setFiles</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevFiles</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">[</span><span class="token operator">...</span>prevFiles<span class="token punctuation">,</span> <span class="token operator">...</span>newFiles<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleRemoveFile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">index</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setFiles</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">prevFiles</span><span class="token punctuation">)</span> <span class="token operator">=></span> prevFiles<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> i <span class="token operator">!==</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">onFilesSelected</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>files<span class="token punctuation">,</span> onFilesSelected<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section className<span class="token operator">=</span><span class="token string">"drag-drop"</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> width<span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> height<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div
        className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document-uploader </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>
          files<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">"upload-box active"</span> <span class="token operator">:</span> <span class="token string">"upload-box"</span>
        <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
        onDrop<span class="token operator">=</span><span class="token punctuation">{</span>handleDrop<span class="token punctuation">}</span>
        onDragOver<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> event<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"upload-info"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>AiOutlineCloudUpload <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span>p<span class="token operator">></span>Drag and drop your files here<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
              <span class="token operator">&lt;</span>p<span class="token operator">></span>
                Limit 15MB per file<span class="token punctuation">.</span> Supported files<span class="token operator">:</span> <span class="token punctuation">.</span><span class="token constant">PDF</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">DOCX</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">PPTX</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token constant">TXT</span><span class="token punctuation">,</span>
                <span class="token punctuation">.</span><span class="token constant">XLSX</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>input
            type<span class="token operator">=</span><span class="token string">"file"</span>
            hidden
            id<span class="token operator">=</span><span class="token string">"browse"</span>
            onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleFileChange<span class="token punctuation">}</span>
            accept<span class="token operator">=</span><span class="token string">".pdf,.docx,.pptx,.txt,.xlsx"</span>
            multiple
          <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"browse"</span> className<span class="token operator">=</span><span class="token string">"browse-btn"</span><span class="token operator">></span>
            Browse files
          <span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>

        <span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-list"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-list__container"</span><span class="token operator">></span>
              <span class="token punctuation">{</span>files<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-item"</span> key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-info"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>file<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                    <span class="token punctuation">{</span><span class="token comment">/* &lt;p>{file.type}&lt;/p> */</span><span class="token punctuation">}</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                  <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"file-actions"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>MdClear onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">handleRemoveFile</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>

        <span class="token punctuation">{</span>files<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"success-file"</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>AiOutlineCheckCircle
              style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"#6DC24B"</span><span class="token punctuation">,</span> <span class="token literal-property property">marginRight</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span>
            <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>files<span class="token punctuation">.</span>length<span class="token punctuation">}</span> <span class="token function">file</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> selected<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token punctuation">)</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> DragNdrop<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="다른-컴포넌트에서-드래그-앤-드롭-컴포넌트-사용하기" tabindex="-1"><a class="header-anchor" href="#다른-컴포넌트에서-드래그-앤-드롭-컴포넌트-사용하기" aria-hidden="true">#</a> 다른 컴포넌트에서 드래그 앤 드롭 컴포넌트 사용하기</h1>
<p>React의 아름다움은 컴포넌트 재사용과 모듈성을 가능하게 한다는 점이에요. 이것은 코드베이스를 깨끗하게 유지하고 중복을 피하는 데 도움이 됩니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> DragNdrop <span class="token keyword">from</span> <span class="token string">"@/components/DragNdrop"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>files<span class="token punctuation">,</span> setFiles<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'section'</span><span class="token operator">></span>
    <span class="token comment">// other jsx</span>
     <span class="token operator">&lt;</span>DragNdrop onFilesSelected<span class="token operator">=</span><span class="token punctuation">{</span>setFiles<span class="token punctuation">}</span> width<span class="token operator">=</span><span class="token string">"300px"</span> height<span class="token operator">=</span><span class="token string">'400px'</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token comment">// other jsx</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 위의 코드 조각을 올바르게 따르셨면 아래 결과가 유사할 것입니다!</p>
<img src="@source/docs/Nextjs/2024-04-05-CreatingaDrag-and-DropFileUploadComponentinReactAStep-by-StepGuide/img/CreatingaDrag-and-DropFileUploadComponentinReactAStep-by-StepGuide_1.png" />
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
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
<p>결론적으로, 드래그 앤 드롭 기능을 통해 웹 애플리케이션에서 파일을 쉽게 업로드할 수 있으며, 이를 통해 사용자들은 목표를 더 빨리 달성할 수 있고 사용자 경험에 좋은 인상을 줄 수 있습니다. 게다가, 이는 더 직관적이고 사용자 친화적인 인터페이스를 제공하여 사용자 경험을 향상시킵니다.</p>
<p>자, 여기까지입니다! 피드백은 댓글 섹션에 남겨주세요!</p>
</div></template>
