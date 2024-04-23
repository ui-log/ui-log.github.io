<template><div><h2 id="당신이-필요로-할-마지막-테이블-컴포넌트" tabindex="-1"><a class="header-anchor" href="#당신이-필요로-할-마지막-테이블-컴포넌트" aria-hidden="true">#</a> 당신이 필요로 할 마지막 테이블 컴포넌트</h2>
<p>최근에, 프로젝트 UI 킷을 위한 새로운 테이블 컴포넌트를 만들라는 업무를 맡게 되었어. 나는 곧이어 행동에 나서 코드를 작성하기 시작했지만, 곧이어 그보다 더 복잡한 어려움이 숨어 있다는 것을 깨닫게 되었어.</p>
<p>결국, 재사용 가능하고 견고한 컴포넌트를 만들 수 있었지만, 막대한 양의 시간과 노력을 들였어. 내가 만든 것을 나누고 싶어서 이야기하고 싶은데, 아마 이것이 당신에게 시간을 절약해 줄 수 있길 희망해.</p>
<p>이 글에서는 우리는 내가 만든 컴포넌트를 처음부터 만들어가면서 검토해 볼 거야. 시작하기 전에, 이 해결방안을 더 나아지게 할 여지가 아직 있다는 것과, 당신이 도움을 줄 수 있다는 점을 말씀드리고 싶어. 만약 제안이나 생각이 있다면, 댓글에서 자유롭게 공유해 주세요!</p>
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
<h1 id="디자인-개요-및-기능" tabindex="-1"><a class="header-anchor" href="#디자인-개요-및-기능" aria-hidden="true">#</a> 디자인 개요 및 기능</h1>
<p>이 글에서는 스타일에 중점을 두지는 않지만, 디자인에서 몇 가지 스크린샷을 보여드리려고 합니다. 이렇게 하면 우리가 만들고 있는 것에 대략적인 그림을 볼 수 있을 것입니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingThePerfectReactTable/img/BuildingThePerfectReactTable_0.png" alt="BuildingThePerfectReactTable_0"></p>
<p>테이블에서 행을 선택하는 내용을 보여주는 또 다른 한 장면입니다.</p>
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
<img src="@source/docs/Nextjs/2024-04-05-BuildingThePerfectReactTable/img/BuildingThePerfectReactTable_1.png" />
<p>처음에는 간단한 컴포넌트처럼 보일지 모르지만 너무 서두르지 마세요. 특히 공유 컴포넌트를 만들고 싶을 때는 세부 사항에 주의해야 합니다. 이 컴포넌트가 가지고 있는 기능 목록을 전체적으로 살펴보겠습니다:</p>
<ul>
<li>행과 열의 기본 렌더링</li>
<li>행 확장</li>
<li>행 선택</li>
<li>정렬 및 필터링</li>
<li>무한 스크롤(하단 스크롤 감지)</li>
<li>행 가상화</li>
</ul>
<h1 id="사용할-라이브러리" tabindex="-1"><a class="header-anchor" href="#사용할-라이브러리" aria-hidden="true">#</a> 사용할 라이브러리</h1>
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
<p>우리 컴포넌트에 필수 라이브러리는 Tanstack Table입니다. 이 패키지는 유연성과 맞춤 설정으로 유명하며, 지금까지 발견한 최고의 솔루션 중 하나입니다.</p>
<p>Tanstack 생태계가 익숙하지 않다면, 이들이 무엇을 만들고 있는지 꼭 확인하시기를 권장합니다. 거기에 많은 유용한 것들을 찾을 수 있을 거예요.</p>
<p>테이블의 나머지 기능에 대해서는, 두 라이브러리만 필요합니다: react-bottom-scroll-listener로 하단 스크롤을 추적하고, react-virtual로 행 렌더링을 최적화합니다.</p>
<p>또한, 언제든지 소스 코드를 여기서 찾으실 수 있습니다.</p>
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
<h1 id="행과-열의-기본-렌더링" tabindex="-1"><a class="header-anchor" href="#행과-열의-기본-렌더링" aria-hidden="true">#</a> 행과 열의 기본 렌더링</h1>
<p>우선 테이블에 대한 속성을 정의해 봅시다. 현재로서는 매우 기본적인 내용입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span>TableOptions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-table'</span><span class="token punctuation">;</span>

<span class="token comment">// 라이브러리에서 필수적인 속성만 선택합니다</span>
<span class="token keyword">export</span> type TableProps<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>
  <span class="token comment">// 더 나은 타입을 얻기 위해 제네릭을 사용하고 싶습니다</span>
  TableOptions<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token string">'columns'</span> <span class="token operator">|</span> <span class="token string">'data'</span>
<span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 필수는 아니지만 가지고 있는 것이 좋습니다. 테이블의 컨테이너에 적용될 것입니다</span>
  className<span class="token operator">?</span><span class="token operator">:</span> string
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 컴포넌트로 변경하여 기본 기능을 작성해 봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>flexRender<span class="token punctuation">,</span> getCoreRowModel<span class="token punctuation">,</span> useReactTable<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-table'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Flex<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'reflexbox'</span><span class="token punctuation">;</span>

<span class="token comment">// 소스 코드에서 스타일을 찾을 수 있어요 :)</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  StyledTable<span class="token punctuation">,</span>
  StyledTableBody<span class="token punctuation">,</span>
  StyledTableBodyCell<span class="token punctuation">,</span>
  StyledTableBodyRow<span class="token punctuation">,</span>
  StyledTableHead<span class="token punctuation">,</span>
  StyledTableHeadCell<span class="token punctuation">,</span>
  StyledTableWrap<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./styled'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>TableSpinner<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./TableSpinner'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span>TableProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./types'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>getTableCellStyle<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../lib'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>type TableProps<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>TableSpinner<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 다시 한 번, 프롭스에 제네릭을 전달해야 해요</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> Table<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  className<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  columns<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> TableProps<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 라이브러리에서 기본 코드</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>getHeaderGroups<span class="token punctuation">,</span> getRowModel<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useReactTable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    data<span class="token punctuation">,</span>
    columns<span class="token punctuation">,</span>
    <span class="token literal-property property">getCoreRowModel</span><span class="token operator">:</span> <span class="token function">getCoreRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>StyledTableWrap className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>StyledTable<span class="token operator">></span>
        <span class="token operator">&lt;</span>StyledTableHead<span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token function">getHeaderGroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">headerGroup</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>Flex key<span class="token operator">=</span><span class="token punctuation">{</span>headerGroup<span class="token punctuation">.</span>id<span class="token punctuation">}</span> alignItems<span class="token operator">=</span><span class="token string">"center"</span><span class="token operator">></span>
              <span class="token punctuation">{</span>headerGroup<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">header</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token comment">// 이러한 프롭스들은 라이브러리에 정의되어 있고</span>
                <span class="token comment">// 컬럼 크기를 조절하는 데 사용돼요</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span>size<span class="token punctuation">,</span> minSize<span class="token punctuation">,</span> maxSize<span class="token punctuation">}</span> <span class="token operator">=</span> header<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                  <span class="token comment">// getTableCellStyleNew은 값들을 CSS 속성으로 재매핑하는 역할을 해요</span>
                  <span class="token comment">// 아래 코드를 보면 알 수 있을 거예요</span>
                  <span class="token operator">&lt;</span>StyledTableHeadCell key<span class="token operator">=</span><span class="token punctuation">{</span>header<span class="token punctuation">.</span>id<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">getTableCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                    <span class="token comment">// flexRender를 사용하는 것이 좋은 습관이에요</span>
                    <span class="token comment">// 아래에서 왜 그런지 설명할게요</span>
                    <span class="token punctuation">{</span><span class="token function">flexRender</span><span class="token punctuation">(</span>header<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">.</span>header<span class="token punctuation">,</span> header<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableHeadCell<span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Flex<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableHead<span class="token operator">></span>
        <span class="token comment">// 여기서도 같은 로직이 적용돼요</span>
        <span class="token operator">&lt;</span>StyledTableBody<span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token function">getRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rows<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">row</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>StyledTableBodyRow key<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Flex<span class="token operator">></span>
                <span class="token punctuation">{</span>row<span class="token punctuation">.</span><span class="token function">getVisibleCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">cell</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  <span class="token keyword">const</span> <span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span> <span class="token operator">=</span> cell<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">;</span>
                  <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>StyledTableBodyCell key<span class="token operator">=</span><span class="token punctuation">{</span>cell<span class="token punctuation">.</span>id<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">getTableCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                      <span class="token punctuation">{</span><span class="token function">flexRender</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">.</span>cell<span class="token punctuation">,</span> cell<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyCell<span class="token operator">></span>
                  <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Flex<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyRow<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBody<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTable<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableWrap<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그래서, flexRender는 셀 컴포넌트를 렌더링하는 데 도움이 되는 작은 유틸리티에요. React Table에서 셀을 React 컴포넌트, 문자열 또는 숫자로 정의할 수 있어요. 이 함수는 컴포넌트인 경우 props를 전달하거나 간단히 원시값을 반환해요.</p>
<p>아래 소스 코드를 보고 모든 것을 이해할 수 있어요. 개발자들의 원래 코멘트를 주목해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 만약 사용자 정의 마크업으로 헤더, 셀 또는 푸터를 렌더링한다면,</span>
<span class="token comment">// `cell.getValue()`나 `cell.renderValue()` 대신 flexRender를 사용해야 해요.</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> flexRender<span class="token operator">&lt;</span>TProps <span class="token keyword">extends</span> <span class="token class-name">object</span><span class="token operator">></span><span class="token punctuation">(</span>
  <span class="token literal-property property">Comp</span><span class="token operator">:</span> Renderable<span class="token operator">&lt;</span>TProps<span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> TProps
<span class="token punctuation">)</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode <span class="token operator">|</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span>Comp <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> isReactComponent<span class="token operator">&lt;</span>TProps<span class="token operator">></span><span class="token punctuation">(</span>Comp<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Comp <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
    Comp
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리는 곧 utils를 저장할 공간도 필요할 것이므로 그들을 위한 별도의 파일을 만들어 보겠습니다. 현재는 작은 getTableCellStyle 함수만 포함하게 될 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 솔직히 말해서, 이 함수는 필수적이지 않을 수 있어요.</span>
<span class="token comment">// 그러나 명확성을 위해 분리하는 것을 선호합니다.</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> getTableCellStyle <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  size<span class="token punctuation">,</span>
  minSize<span class="token punctuation">,</span>
  maxSize<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  size<span class="token operator">?</span><span class="token operator">:</span> number <span class="token operator">|</span> string<span class="token punctuation">;</span>
  minSize<span class="token operator">?</span><span class="token operator">:</span> number <span class="token operator">|</span> string<span class="token punctuation">;</span>
  maxSize<span class="token operator">?</span><span class="token operator">:</span> number <span class="token operator">|</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">CSSProperties</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> size<span class="token punctuation">,</span>
  <span class="token literal-property property">maxWidth</span><span class="token operator">:</span> maxSize<span class="token punctuation">,</span>
  <span class="token literal-property property">minWidth</span><span class="token operator">:</span> minSize<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리의 Table 컴포넌트의 기반이 마련되었습니다! 그러나 아직 한가할 시간은 아닙니다, 가장 흥미로운 부분이 곧 시작됩니다)</p>
<h1 id="행-확장" tabindex="-1"><a class="header-anchor" href="#행-확장" aria-hidden="true">#</a> 행 확장</h1>
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
<p>리액트 테이블에는 상자 밖으로 행을 확장하는 API가 내장되어 있어서 우리는 얼마나 운이 좋은지요! 그러나 제가 이해한 바로는, 이 기능은 하위 테이블을 렌더링할 때만 작동한다고 합니다. 저희 경우에는 좀 더 유연하고 예상치 못한 미래에 대비할 준비가 돼 있어야 한다고 생각했습니다. 그래서 '공식' 방법을 조금 바꾸기로 결심했습니다. 이렇게 하면 우리가 원하는 모든 것을 확장할 수 있게 될 거예요!</p>
<p>그래서 저는 테이블에 함수를 전달하기로 결정했습니다. 이 함수는 첫 번째 매개변수로 현재 행을받고 React 노드를 반환합니다. 이제 우리의 타입을 업데이트하겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> type TableProps<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>TableOptions<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">'columns'</span> <span class="token operator">|</span> <span class="token string">'data'</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  className<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token comment">// 특히 이런 상황에서 일반화가 특히 유용합니다</span>
  renderExpandedRow<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">row</span><span class="token operator">:</span> Row<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> ReactNode<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>자, 이제 우리의 주요 컴포넌트로 넘어가보겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> Table<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  className<span class="token punctuation">,</span>
  data<span class="token punctuation">,</span>
  columns<span class="token punctuation">,</span>
  renderExpandedRow
<span class="token punctuation">}</span><span class="token operator">:</span> TableProps<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 컴포넌트 외부에서 이 상태에 접근할 필요가 없어요.</span>
  <span class="token comment">// 그래서 이곳에 정의했어요. 언제든지 props로 옮길 수 있어요 :)</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expanded<span class="token punctuation">,</span> setExpanded<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>ExpandedState<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span>getHeaderGroups<span class="token punctuation">,</span> getRowModel<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useReactTable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    data<span class="token punctuation">,</span>
    columns<span class="token punctuation">,</span>
    <span class="token literal-property property">getCoreRowModel</span><span class="token operator">:</span> <span class="token function">getCoreRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// 라이브러리의 API에 따른 새로운 props</span>
    <span class="token literal-property property">getExpandedRowModel</span><span class="token operator">:</span> <span class="token function">getExpandedRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onExpandedChange</span><span class="token operator">:</span> setExpanded<span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      expanded<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>StyledTableWrap className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>StyledTable<span class="token operator">></span>
        <span class="token operator">&lt;</span>StyledTableHead<span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token function">getHeaderGroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">headerGroup</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>Flex key<span class="token operator">=</span><span class="token punctuation">{</span>headerGroup<span class="token punctuation">.</span>id<span class="token punctuation">}</span> alignItems<span class="token operator">=</span><span class="token string">"center"</span><span class="token operator">></span>
              <span class="token punctuation">{</span>headerGroup<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">header</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span>size<span class="token punctuation">,</span> minSize<span class="token punctuation">,</span> maxSize<span class="token punctuation">}</span> <span class="token operator">=</span> header<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">;</span>

                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>StyledTableHeadCell key<span class="token operator">=</span><span class="token punctuation">{</span>header<span class="token punctuation">.</span>id<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">getTableCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                    <span class="token punctuation">{</span><span class="token function">flexRender</span><span class="token punctuation">(</span>header<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">.</span>header<span class="token punctuation">,</span> header<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableHeadCell<span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

              <span class="token comment">// 우리의 열기 버튼이 특정 위치를 차지하기 때문에</span>
              <span class="token comment">// 레이아웃 이동을 위해 이 자리 표시자를 배치해야 해요.</span>
              <span class="token comment">// 더 나은 방법을 알고 계시다면 알려주세요!</span>
              <span class="token punctuation">{</span>renderExpandedRow <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>StyledTableHeadCell style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Flex<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableHead<span class="token operator">></span>

        <span class="token operator">&lt;</span>StyledTableBody<span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token function">getRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rows<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">row</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>StyledTableBodyRow key<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Flex<span class="token operator">></span>
                <span class="token punctuation">{</span>row<span class="token punctuation">.</span><span class="token function">getVisibleCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">cell</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  <span class="token keyword">const</span> <span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span> <span class="token operator">=</span> cell<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">;</span>

                  <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>StyledTableBodyCell key<span class="token operator">=</span><span class="token punctuation">{</span>cell<span class="token punctuation">.</span>id<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">getTableCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                      <span class="token punctuation">{</span><span class="token function">flexRender</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">.</span>cell<span class="token punctuation">,</span> cell<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyCell<span class="token operator">></span>
                  <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                
                <span class="token punctuation">{</span>renderExpandedRow <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>StyledTableBodyCell style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'flex-end'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>Button
                      onlyIcon
                      size<span class="token operator">=</span><span class="token string">"s"</span>
                      variant<span class="token operator">=</span><span class="token string">"secondary"</span>
                      onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        <span class="token comment">// 라이브러리의 API에 따르면</span>
                        row<span class="token punctuation">.</span><span class="token function">toggleExpanded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                      <span class="token punctuation">}</span>
                    <span class="token operator">></span>
                      <span class="token comment">// 여기서 행이 확장되면 아이콘을 회전시킵니다.</span>
                      <span class="token operator">&lt;</span>StyledChevron $isExpanded<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span><span class="token function">getIsExpanded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyCell<span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Flex<span class="token operator">></span>

              <span class="token punctuation">{</span>row<span class="token punctuation">.</span><span class="token function">getIsExpanded</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> renderExpandedRow <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>Spacer size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>StyledTableBodySubRow<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">renderExpandedRow</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodySubRow<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyRow<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBody<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTable<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableWrap<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기는 renderExpandedRow를 사용하는 내 프로젝트 코드입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>BaseTable
  columns<span class="token operator">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span>
  data<span class="token operator">=</span><span class="token punctuation">{</span>bets<span class="token punctuation">}</span>
  renderExpandedRow<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">row</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token comment">// 여기서 행에 접근하고 원하는 내용을 반환할 수 있어요!</span>
    <span class="token operator">&lt;</span>BetOutcomesTable
      bet<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span>original<span class="token punctuation">.</span>bet<span class="token punctuation">}</span>
      tableData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">getBetOutcomesTableData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">outcomes</span><span class="token operator">:</span> row<span class="token punctuation">.</span>original<span class="token punctuation">.</span>bet<span class="token punctuation">.</span>outcomes<span class="token punctuation">,</span>
        outcomeCategories<span class="token punctuation">,</span>
        groups<span class="token punctuation">,</span>
        sports<span class="token punctuation">,</span>
        outcomeTypes<span class="token punctuation">,</span>
        reasons<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
      onUpdateBet<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">updatedBet</span> <span class="token operator">=></span> <span class="token function">onUpdateBet</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">client</span><span class="token operator">:</span> row<span class="token punctuation">.</span>original<span class="token punctuation">.</span>client<span class="token punctuation">,</span> <span class="token literal-property property">bet</span><span class="token operator">:</span> updatedBet<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="행-선택" tabindex="-1"><a class="header-anchor" href="#행-선택" aria-hidden="true">#</a> 행 선택```</h1>
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
<p>React Table은 기본적으로 행 선택 기능을 갖추고 있어 설정이 매우 간답합니다. 행 선택을 위한 사용자 지정 체크박스를 만들고 선택 상태를 테이블 컴포넌트로 전달하기만 하면 됩니다.</p>
<p>먼저 타입을 업데이트해봅시다!</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> type <span class="token punctuation">{</span>Row<span class="token punctuation">,</span> RowSelectionState<span class="token punctuation">,</span> TableOptions<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-table'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span>ReactNode<span class="token punctuation">,</span> Dispatch<span class="token punctuation">,</span> SetStateAction<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> type TableProps<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>TableOptions<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token string">'columns'</span> <span class="token operator">|</span> <span class="token string">'data'</span><span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token comment">//...old props</span>
  rowSelection<span class="token operator">?</span><span class="token operator">:</span> RowSelectionState<span class="token punctuation">;</span>
  setRowSelection<span class="token operator">?</span><span class="token operator">:</span> Dispatch<span class="token operator">&lt;</span>SetStateAction<span class="token operator">&lt;</span>RowSelectionState<span class="token operator">>></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 행 선택 기능을 구현해봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> Table<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//...동일한 코드</span>
  rowSelection<span class="token punctuation">,</span>
  setRowSelection<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> TableProps<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expanded<span class="token punctuation">,</span> setExpanded<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>ExpandedState<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 새로운 핸들러를 추출해야 합니다.</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>getHeaderGroups<span class="token punctuation">,</span> getRowModel<span class="token punctuation">,</span> getIsAllRowsSelected<span class="token punctuation">,</span> toggleAllRowsSelected<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useReactTable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    data<span class="token punctuation">,</span>
    columns<span class="token punctuation">,</span>
    <span class="token literal-property property">getCoreRowModel</span><span class="token operator">:</span> <span class="token function">getCoreRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">getExpandedRowModel</span><span class="token operator">:</span> <span class="token function">getExpandedRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">onExpandedChange</span><span class="token operator">:</span> setExpanded<span class="token punctuation">,</span>
    <span class="token comment">// 문서에 따라 새로운 상태와 핸들러</span>
    <span class="token literal-property property">onRowSelectionChange</span><span class="token operator">:</span> setRowSelection<span class="token punctuation">,</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      expanded<span class="token punctuation">,</span>
      rowSelection<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>StyledTableWrap className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>StyledTable<span class="token operator">></span>
        <span class="token operator">&lt;</span>StyledTableHead<span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token function">getHeaderGroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">headerGroup</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>Flex key<span class="token operator">=</span><span class="token punctuation">{</span>headerGroup<span class="token punctuation">.</span>id<span class="token punctuation">}</span> alignItems<span class="token operator">=</span><span class="token string">"center"</span><span class="token operator">></span>
              <span class="token comment">// 전역 선택 체크박스로 한 번에 모든 행 전환</span>
              <span class="token punctuation">{</span>setRowSelection <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>StyledTableHeadCell<span class="token operator">></span>
                  <span class="token operator">&lt;</span>Checkbox
                    checked<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">getIsAllRowsSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                    onCheckedChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> <span class="token function">toggleAllRowsSelected</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
                  <span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableHeadCell<span class="token operator">></span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span>

              <span class="token punctuation">{</span>headerGroup<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">header</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> <span class="token punctuation">{</span>size<span class="token punctuation">,</span> minSize<span class="token punctuation">,</span> maxSize<span class="token punctuation">}</span> <span class="token operator">=</span> header<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">;</span>

                <span class="token keyword">return</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>StyledTableHeadCell key<span class="token operator">=</span><span class="token punctuation">{</span>header<span class="token punctuation">.</span>id<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">getTableCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                    <span class="token punctuation">{</span><span class="token function">flexRender</span><span class="token punctuation">(</span>header<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">.</span>header<span class="token punctuation">,</span> header<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableHeadCell<span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

              <span class="token punctuation">{</span>renderExpandedRow <span class="token operator">&amp;&amp;</span> <span class="token operator">&lt;</span>StyledTableHeadCell style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token literal-property property">minWidth</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Flex<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableHead<span class="token operator">></span>

        <span class="token operator">&lt;</span>StyledTableBody<span class="token operator">></span>
          <span class="token punctuation">{</span><span class="token function">getRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rows<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">row</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
            <span class="token operator">&lt;</span>StyledTableBodyRow key<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>Flex<span class="token operator">></span>
                <span class="token comment">// 행 선택 체크박스</span>
                <span class="token punctuation">{</span>setRowSelection <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>StyledTableBodyCell<span class="token operator">></span>
                    <span class="token operator">&lt;</span>Checkbox
                      checked<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span><span class="token function">getIsSelected</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                      disabled<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">!</span>row<span class="token punctuation">.</span><span class="token function">getCanSelect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                      onCheckedChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token parameter">value</span> <span class="token operator">=></span> row<span class="token punctuation">.</span><span class="token function">toggleSelected</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
                    <span class="token operator">/</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyCell<span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>

                <span class="token punctuation">{</span>row<span class="token punctuation">.</span><span class="token function">getVisibleCells</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">cell</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                  <span class="token keyword">const</span> <span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span> <span class="token operator">=</span> cell<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">;</span>

                  <span class="token keyword">return</span> <span class="token punctuation">(</span>
                    <span class="token operator">&lt;</span>StyledTableBodyCell key<span class="token operator">=</span><span class="token punctuation">{</span>cell<span class="token punctuation">.</span>id<span class="token punctuation">}</span> style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token function">getTableCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>size<span class="token punctuation">,</span> maxSize<span class="token punctuation">,</span> minSize<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>
                      <span class="token punctuation">{</span><span class="token function">flexRender</span><span class="token punctuation">(</span>cell<span class="token punctuation">.</span>column<span class="token punctuation">.</span>columnDef<span class="token punctuation">.</span>cell<span class="token punctuation">,</span> cell<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyCell<span class="token operator">></span>
                  <span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

                <span class="token punctuation">{</span>renderExpandedRow <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                  <span class="token operator">&lt;</span>StyledTableBodyCell style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">justifyContent</span><span class="token operator">:</span> <span class="token string">'flex-end'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">66</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>Button
                      onlyIcon
                      size<span class="token operator">=</span><span class="token string">"s"</span>
                      variant<span class="token operator">=</span><span class="token string">"secondary"</span>
                      onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                        row<span class="token punctuation">.</span><span class="token function">toggleExpanded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                      <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
                      <span class="token operator">&lt;</span>StyledChevron $isExpanded<span class="token operator">=</span><span class="token punctuation">{</span>row<span class="token punctuation">.</span><span class="token function">getIsExpanded</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
                  <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyCell<span class="token operator">></span>
                <span class="token punctuation">)</span><span class="token punctuation">}</span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Flex<span class="token operator">></span>

              <span class="token punctuation">{</span>row<span class="token punctuation">.</span><span class="token function">getIsExpanded</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> renderExpandedRow <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>Spacer size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">12</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>StyledTableBodySubRow<span class="token operator">></span><span class="token punctuation">{</span><span class="token function">renderExpandedRow</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodySubRow<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
              <span class="token punctuation">)</span><span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBodyRow<span class="token operator">></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBody<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTable<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableWrap<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그래, 그래서 난 Tanstack Table을 좋아해. 너무 유연하고 거의 모든 비즈니스 시나리오에 적응할 수 있어!</p>
<h1 id="정렬-및-필터링" tabindex="-1"><a class="header-anchor" href="#정렬-및-필터링" aria-hidden="true">#</a> 정렬 및 필터링</h1>
<p>당연히 React Table에는 정렬 및 필터링을 위한 API가 있지만 클라이언트 측에서만 사용할 수 있습니다. 나의 경우에는 React-Query 라이브러리를 사용하여 백엔드와 상호작용할 수 있는 시스템이 필요했어.```</p>
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
<p>그래서, 저는 내 버전을 만들기로 결정했고 useReactTable 훅에서 meta 필드를 발견했습니다. 이 필드를 통해 원하는 메타데이터를 테이블 인스턴스로 전달할 수 있고 이 메타데이터는 사실상 모든 것이 될 수 있습니다. 우리 경우처럼 사용자 정의 동작을 구현하는 데 매우 유용합니다.</p>
<p>우리의 필터와 정렬기는 일반 객체에 상태를 가지게 될 것이며, 여기서 키는 특정 엔티티의 이름이고 값은 필요한 것이 될 것입니다.</p>
<p>그래서 Table 컴포넌트 내부에 두 가지 새로운 메서드가 있을 것입니다: 필터의 상태를 가져오기 위한 하나와 이 상태를 설정하기 위한 다른 하나입니다. 우리는 테이블 열에서 상태를 가져오고 설정할 수 있도록 이를 필요로 합니다. 하지만 먼저, 이것이 완전히 사용자 정의이며 주 패키지에는 존재하지 않기 때문에 라이브러리 인터페이스를 확장해야 합니다.</p>
<p>저는 custom.d.ts라는 파일을 만들었지만, 여러분은 귀하만의 이름을 생각해내실 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 여기서 모듈을 확장합니다</span>
declare module <span class="token string">'@tanstack/table-core'</span> <span class="token punctuation">{</span>
  <span class="token comment">// 기본 인터페이스를 확장합니다</span>
  <span class="token keyword">interface</span> <span class="token class-name">TableMeta</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getExtraData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> Record<span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token function-variable function">updateExtraData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 테이블의 속성에 새로운 메소드를 추가해 봅시다. 이 상태는 컴포넌트 외부에 있어야 하므로 API 요청과 연결할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 새로운 generic 타입 ED (Extra Data)를 주목하세요</span>
<span class="token keyword">export</span> type TableProps<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">></span><span class="token punctuation">,</span> <span class="token constant">ED</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>
  TableOptions<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token string">'columns'</span> <span class="token operator">|</span> <span class="token string">'data'</span>
<span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token comment">//...이전 속성들</span>
  extraData<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">ED</span><span class="token punctuation">;</span>
  updateExtraData<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> keyof <span class="token constant">ED</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">ED</span><span class="token punctuation">[</span>keyof <span class="token constant">ED</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 새로운 속성을 useReactTable 훅에 전달하여 라이브러리 코어 내에서 사용할 수 있도록 해야 합니다. 업데이트 이후 이 훅이 이렇게 보입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>getHeaderGroups<span class="token punctuation">,</span> getRowModel<span class="token punctuation">,</span> getIsAllRowsSelected<span class="token punctuation">,</span> toggleAllRowsSelected<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useReactTable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">//...동일한 코드</span>
    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">getExtraData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> extraData<span class="token punctuation">,</span>
      updateExtraData<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>알겠어요. 하지만 이 상태와 input을 어떻게 연결할 수 있을까요? 이 질문에 대답하기 위해서 먼저 React Table을 위한 컬럼을 어떻게 선언하는지 알아야 합니다. 한 예제를 살펴보죠.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createColumnHelper<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@tanstack/react-table'</span><span class="token punctuation">;</span>

<span class="token comment">// 서버에서 오는 데이터의 유형 및 테이블에 전달되는 유형</span>
<span class="token keyword">export</span> type TypeOfData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 컬럼을 생성하는 데 책임을지는 도우미 함수</span>
<span class="token keyword">const</span> columnHelper <span class="token operator">=</span> createColumnHelper<span class="token operator">&lt;</span>TypeOfData<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">COLUMNS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token comment">// 엔티티의 ID를 렌더링하는 간단한 컬럼.</span>
  columnHelper<span class="token punctuation">.</span><span class="token function">accessor</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">header</span><span class="token operator">:</span> <span class="token string">'ID'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">cell</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>getValue<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위는 가능한 가장 간단한 컬럼 정의입니다. 필터의 예로, 이 컬럼의 헤더에 있는 id 필드별 필터를 구현하고 이를 extraData에 연결해보겠습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">COLUMNS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  columnHelper<span class="token punctuation">.</span><span class="token function">accessor</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">header</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>table<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> nameInTheState <span class="token operator">=</span> <span class="token string">'extraData 안의 필드명'</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> inputValue <span class="token operator">=</span> table<span class="token punctuation">.</span>options<span class="token punctuation">.</span>meta<span class="token operator">?.</span><span class="token function">getExtraData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>nameInTheState<span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token function-variable function">onChangeInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newValue</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        table<span class="token punctuation">.</span>options<span class="token punctuation">.</span>meta<span class="token operator">?.</span><span class="token function">updateExtraData</span><span class="token punctuation">(</span>nameInTheState<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Input value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChangeInput<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">cell</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>getValue<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 필터, 테이블 및 API 요청을 결합해 보겠습니다. 실제 코드는 아니지만 아이디어를 충분히 잘 보여줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 서버에서 가져오는 데이터 유형을 정의하고 테이블로 전달합니다.</span>
<span class="token keyword">export</span> type TypeOfData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> columnHelper <span class="token operator">=</span> createColumnHelper<span class="token operator">&lt;</span>TypeOfData<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">COLUMNS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  columnHelper<span class="token punctuation">.</span><span class="token function">accessor</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">header</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>table<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> inputValue <span class="token operator">=</span> table<span class="token punctuation">.</span>options<span class="token punctuation">.</span>meta<span class="token operator">?.</span><span class="token function">getExtraData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span>
      <span class="token keyword">const</span> <span class="token function-variable function">onChangeInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">newValue</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        table<span class="token punctuation">.</span>options<span class="token punctuation">.</span>meta<span class="token operator">?.</span><span class="token function">updateExtraData</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Input value<span class="token operator">=</span><span class="token punctuation">{</span>inputValue<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChangeInput<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">cell</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>getValue<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

type ExtraData <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">IdTable</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>extraData<span class="token punctuation">,</span> setExtraData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token function">useApi</span><span class="token punctuation">(</span><span class="token string">'BetsApi'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 데이터는 TypeOfData의 유형임</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'bets'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> api<span class="token punctuation">.</span><span class="token function">getBets</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">betId</span><span class="token operator">:</span> extraData<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleUpdateExtraData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> keyof ExtraData<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> ExtraData<span class="token punctuation">[</span>keyof ExtraData<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setExtraData</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>x<span class="token punctuation">,</span>
      <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Table
      columns<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">COLUMNS</span><span class="token punctuation">}</span> 
      data<span class="token operator">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span>
      extraData<span class="token operator">=</span><span class="token punctuation">{</span>extraData<span class="token punctuation">}</span> 
      updateExtraData<span class="token operator">=</span><span class="token punctuation">{</span>handleUpdateExtraData<span class="token punctuation">}</span>
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 테이블에 필터를 연결하는 로직을 별도의 유틸리티로 이동하기로 결정했습니다. 이 방법을 사용하면 훨씬 쉽습니다.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> getTableExtraDataModel <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">table</span><span class="token operator">:</span> Table<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> table<span class="token punctuation">.</span>options<span class="token punctuation">.</span>meta<span class="token operator">?.</span><span class="token function">getExtraData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">onChange</span><span class="token operator">:</span> <span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token keyword">extends</span> <span class="token class-name">any</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">V</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    table<span class="token punctuation">.</span>options<span class="token punctuation">.</span>meta<span class="token operator">?.</span><span class="token function">updateExtraData</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">COLUMNS</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  columnHelper<span class="token punctuation">.</span><span class="token function">accessor</span><span class="token punctuation">(</span><span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">header</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>table<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>value<span class="token punctuation">,</span> onChange<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getTableExtraDataModel</span><span class="token punctuation">(</span>table<span class="token punctuation">,</span> <span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token operator">&lt;</span>Input value<span class="token operator">=</span><span class="token punctuation">{</span>value<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">cell</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>getValue<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 테이블 필터를 백엔드와 유연하게 연결하는 시스템이 준비되었습니다. 정렬 예제를 살펴보지 않았지만, 쉽게 직접 구현할 수 있다고 생각합니다.</p>
<h1 id="무한-스크롤-맨-아래-스크롤-감지" tabindex="-1"><a class="header-anchor" href="#무한-스크롤-맨-아래-스크롤-감지" aria-hidden="true">#</a> 무한 스크롤 (맨 아래 스크롤 감지)</h1>
<p>무한 스크롤의 구현은 대부분 백엔드와 비즈니스 요구에 따라 달라집니다. 하지만 제 경우에는 사용자가 일정 오프셋으로 테이블을 아래로 스크롤할 때 알림을 받아야 할 뿐입니다.```</p>
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
<p>먼저, 우리는 페이지 하단 스크롤을 추적하는 데 도움을 주는 라이브러리를 설치해야 합니다. 저는 react-bottom-scroll-listener를 선택했지만, 다른 패키지를 사용하거나 이 기능을 직접 구축할 수도 있어요.</p>
<p>항상 그랬던 것처럼, 우리는 우선 프롭스 유형을 업데이트하는 것부터 시작할 거예요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> type TableProps<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">></span><span class="token punctuation">,</span> <span class="token constant">ED</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>
  TableOptions<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token string">'columns'</span> <span class="token operator">|</span> <span class="token string">'data'</span>
<span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...이전 프롭스</span>
  onBottom<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  bottomOffset<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  isLoadingMore<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 남은 일은 새 라이브러리를 테이블에 연결하는 것 뿐이에요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> Table<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">></span><span class="token punctuation">,</span> <span class="token constant">ED</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//...이전에 사용된 속성</span>
  <span class="token comment">// 이것은 설정하기 좋은 기본값입니다.</span>
  bottomOffset <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
  onBottom<span class="token punctuation">,</span>
  isLoadingMore<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> TableProps<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">ED</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//...동일한 코드</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleBottom</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 이미 뭔가를 다운로드 중일 때는 알림을 받고 싶지 않습니다.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isLoadingMore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      onBottom<span class="token operator">?.</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> parentRef <span class="token operator">=</span> useBottomScrollListener<span class="token operator">&lt;</span>HTMLDivElement<span class="token operator">></span><span class="token punctuation">(</span>handleBottom<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">offset</span><span class="token operator">:</span> bottomOffset<span class="token punctuation">,</span>
    <span class="token literal-property property">debounceOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">leading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>StyledTableWrap
      <span class="token comment">// 주의해 주세요. ref를 wrapper에 연결해야 합니다.</span>
      ref<span class="token operator">=</span><span class="token punctuation">{</span>parentRef<span class="token punctuation">}</span>
      className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token operator">&lt;</span>StyledTable<span class="token operator">></span>
        <span class="token comment">//...동일한 코드</span>

        <span class="token operator">&lt;</span>StyledTableBody<span class="token operator">></span>
          <span class="token comment">//...동일한 코드</span>

          <span class="token comment">// 테이블에 추가 행을 로드할 때 표시하는 간단한 스피너</span>
          <span class="token operator">&lt;</span>TableSpinner isShown<span class="token operator">=</span><span class="token punctuation">{</span>isLoadingMore<span class="token punctuation">}</span> scrollRef<span class="token operator">=</span><span class="token punctuation">{</span>parentRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBody<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTable<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableWrap<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>React-Query와 함께 사용하는 방법입니다. 비즈니스 로직은 테이블에 대한 속성을 반환하는 후크에서 분리했습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useGetBetsTableData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// ...코드</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>data<span class="token punctuation">,</span> isFetchingNextPage<span class="token punctuation">,</span> fetchNextPage<span class="token punctuation">,</span> hasNextPage<span class="token punctuation">}</span> <span class="token operator">=</span> useInfiniteQuery<span class="token operator">&lt;</span>
    BetWithClientList<span class="token punctuation">,</span>
    unknown<span class="token punctuation">,</span>
    BetWithClientList
  <span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'bets'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>pageParam <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> api<span class="token punctuation">.</span><span class="token function">getBets</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">offset</span><span class="token operator">:</span> pageParam <span class="token operator">*</span> <span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getNextPageParam</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">lastPage<span class="token punctuation">,</span> pages</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>lastPage<span class="token punctuation">.</span>hasMore <span class="token operator">?</span> pages<span class="token punctuation">.</span>length <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...코드</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onLoadMore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hasNextPage<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>

    <span class="token function">fetchNextPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">bets</span><span class="token operator">:</span> data<span class="token operator">?.</span>pages<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token parameter">page</span> <span class="token operator">=></span> page<span class="token punctuation">.</span>items<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isLoadingRows</span><span class="token operator">:</span> isFetchingNextPage<span class="token punctuation">,</span>
    onLoadMore<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 이 후크를 메인 컴포넌트에서 이렇게 간단하게 사용하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> Bets <span class="token operator">=</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">Bets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>bets<span class="token punctuation">,</span> isLoadingRows<span class="token punctuation">,</span> onLoadMore<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useGetBetsTableData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ...code</span>
  <span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token function">useMemo</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token function">getBetsTableColumns</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        t<span class="token punctuation">,</span>
        onUpdateBet<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>t<span class="token punctuation">,</span> onUpdateBet<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleUpdateExtraData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">key</span><span class="token operator">:</span> BetsFiltersStateKey<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> BetsFiltersStateValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    betsFiltersState<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>x<span class="token punctuation">,</span>
      <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// ...code</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token comment">// ...code</span>
      <span class="token operator">&lt;</span>BaseTable
        columns<span class="token operator">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span>
        data<span class="token operator">=</span><span class="token punctuation">{</span>bets<span class="token punctuation">}</span>
        extraData<span class="token operator">=</span><span class="token punctuation">{</span>betsFiltersState<span class="token punctuation">.</span>state<span class="token punctuation">}</span>
        isLoadingRows<span class="token operator">=</span><span class="token punctuation">{</span>isLoadingRows<span class="token punctuation">}</span>
        updateExtraData<span class="token operator">=</span><span class="token punctuation">{</span>handleUpdateExtraData<span class="token punctuation">}</span>
        onBottom<span class="token operator">=</span><span class="token punctuation">{</span>onLoadMore<span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 기능은 프로젝트마다 다를 수 있음을 반복하고 싶습니다. 그러나 어찌됐든 거의 모든 경우에 하단 스크롤을 추적하고 싶어할 것입니다.</p>
<h1 id="행-가상화" tabindex="-1"><a class="header-anchor" href="#행-가상화" aria-hidden="true">#</a> 행 가상화</h1>
<p>가상화는 화면에 표시되는 목록이나 테이블의 일부분만 렌더링되는 기술입니다. 이 방법은 브라우저의 작업 부하를 줄여 사용자 경험을 빠르고 부드럽게 만들어줍니다. 스크롤할 때 보여야 할 항목만 신속하게 로드하고 나머지는 숨기는 방식으로 동작합니다.```</p>
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
<p>일반적으로, 가상화는 테이블 구성 요소에서 수행할 수있는 최상의 최적화 중 하나입니다. 특히 무한 스크롤이 있고 테이블에 수천 개의 행이 포함 될 수있는 우리의 경우에는 더욱 그렇습니다.</p>
<p>물론, 이 기능을 우리가 직접 구현하지는 않을 것입니다. 코드 작성에 시간이 많이 걸리기 때문이죠. react-virtual이라는 훌륭한 패키지가 있습니다. 직접 살펴보시기 바랍니다!</p>
<p>가상화를 올바르게 작동하려면 테이블에 새로운 속성 하나만 전달하면 됩니다. 이 속성은 행의 대략적인 크기를 담당하며, 이 정보가 라이브러리에서 특별히 필요합니다. 아래에 사용 방법을 볼 수 있을 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> type TableProps<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">></span><span class="token punctuation">,</span> <span class="token constant">ED</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span>
  TableOptions<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">></span><span class="token punctuation">,</span>
  <span class="token string">'columns'</span> <span class="token operator">|</span> <span class="token string">'data'</span>
<span class="token operator">></span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...이전 속성</span>
  <span class="token comment">// 이 속성을 항상 정의해야 합니다.</span>
  <span class="token literal-property property">estimatedRowSize</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<p>테이블 내부에 적용할 변경 사항은 꽤 흥미로운데요. 먼저 코드를 살펴보고 이해할 수 있도록 설명할게요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> Table<span class="token operator">&lt;</span><span class="token constant">D</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">></span><span class="token punctuation">,</span> <span class="token constant">ED</span> <span class="token keyword">extends</span> <span class="token class-name">Record</span><span class="token operator">&lt;</span>string<span class="token punctuation">,</span> any<span class="token operator">>></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...동일한 props들</span>
  estimatedRowSize<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> TableProps<span class="token operator">&lt;</span><span class="token constant">D</span><span class="token punctuation">,</span> <span class="token constant">ED</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...동일한 코드</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>virtualItems<span class="token punctuation">,</span> totalSize<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useVirtual</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// useBottomScrollListener로부터 가져온 ref를 사용하는 것에 주목해주세요</span>
    parentRef<span class="token punctuation">,</span>
    <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token function">getRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rows<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
    <span class="token comment">// 여기서는 estimatedSize를 전달합니다</span>
    <span class="token literal-property property">estimateSize</span><span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> estimatedRowSize<span class="token punctuation">,</span> <span class="token punctuation">[</span>estimatedRowSize<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 이 상수들을 주목해주세요</span>
  <span class="token keyword">const</span> paddingTop <span class="token operator">=</span> virtualItems<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> virtualItems<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>start <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> paddingBottom <span class="token operator">=</span> virtualItems<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> totalSize <span class="token operator">-</span> virtualItems<span class="token punctuation">[</span>virtualItems<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>end <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>StyledTableWrap ref<span class="token operator">=</span><span class="token punctuation">{</span>parentRef<span class="token punctuation">}</span> className<span class="token operator">=</span><span class="token punctuation">{</span>className<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>StyledTable<span class="token operator">></span>
        <span class="token comment">// ...동일한 코드</span>
        <span class="token operator">&lt;</span>StyledTableBody<span class="token operator">></span>
          <span class="token comment">// 여기서 계산된 패딩을 전달합니다</span>
          <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>paddingTop<span class="token punctuation">,</span> paddingBottom<span class="token punctuation">}</span><span class="token operator">></span>
            <span class="token comment">// 이제 실제 행 대신 가상 행들을 반복합니다</span>
            <span class="token punctuation">{</span>virtualItems<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">virtualRow</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token comment">// 실제 행을 가져올 수 있는 방법입니다</span>
              <span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token function">getRowModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rows<span class="token punctuation">[</span>virtualRow<span class="token punctuation">.</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>

              <span class="token keyword">return</span> <span class="token punctuation">(</span>
                <span class="token comment">// 나머지 코드는 동일합니다</span>
              <span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
          <span class="token operator">&lt;</span>TableSpinner isShown<span class="token operator">=</span><span class="token punctuation">{</span>isLoadingMore<span class="token punctuation">}</span> scrollRef<span class="token operator">=</span><span class="token punctuation">{</span>parentRef<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableBody<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTable<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>StyledTableWrap<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그렇죠, 왜 상단 및 하단 패딩을 계산해야 할까요? 렌더링되지 않은 행의 높이를 모방하여 뷰포트에 보이는 행만 표시할 수 있도록 하기 위해서입니다.</p>
<p>이제 우리의 테이블을 완전히 사용할 준비가 되었어요. 더 개선할 점이 있다고 생각되거나 제안 사항이 있다면, 꼭 댓글로 남겨주세요. 내용을 업데이트하고 여러분의 도움이 다른 사람들에게 도움이 될 것입니다!</p>
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
<p>만약 데모를 자세히 살펴보고 싶다면, 소스 코드를 확인해보세요.</p>
<p>읽어주셔서 감사합니다!</p>
<h1 id="더-알아보기" tabindex="-1"><a class="header-anchor" href="#더-알아보기" aria-hidden="true">#</a> 더 알아보기</h1>
</div></template>
