<template><div><p>저는 최근 MUI DataGrid를 사용한 프로젝트를 진행하면서 컴포넌트에 적용된 기본 스타일을 변경하는 데 어려움을 겪었습니다. MUI 문서를 찾아보니 올바른 스타일링 방법을 찾기 어려웠습니다. 이와 관련하여, MUI DataGrid를 사용자 정의하는 더 쉬운 방법을 공유하고자 합니다. 이 방법에는 행 높이 변경, 열 헤더 색상 수정, 행 색상 조정 등의 작업이 포함됩니다.</p>
<h1 id="데이터-그리드-초기화" tabindex="-1"><a class="header-anchor" href="#데이터-그리드-초기화" aria-hidden="true">#</a> 데이터 그리드 초기화</h1>
<p>우선, DataGrid를 초기화하세요. 아래에는 MUI 문서에서 찾을 수 있는 코딩 예제와 일치하는 일반 예제를 제공하겠습니다. 그런 다음 사용자 정의할 수 있는 측면을 자세히 살펴보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Box <span class="token keyword">from</span> <span class="token string">'@mui/material/Box'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DataGrid<span class="token punctuation">,</span> GridColDef<span class="token punctuation">,</span> GridValueGetterParams <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@mui/x-data-grid'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token literal-property property">columns</span><span class="token operator">:</span> GridColDef<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'id'</span><span class="token punctuation">,</span> <span class="token literal-property property">headerName</span><span class="token operator">:</span> <span class="token string">'ID'</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">90</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'firstName'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headerName</span><span class="token operator">:</span> <span class="token string">'First name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    <span class="token literal-property property">editable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'lastName'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headerName</span><span class="token operator">:</span> <span class="token string">'Last name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span>
    <span class="token literal-property property">editable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headerName</span><span class="token operator">:</span> <span class="token string">'Age'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">110</span><span class="token punctuation">,</span>
    <span class="token literal-property property">editable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'fullName'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">headerName</span><span class="token operator">:</span> <span class="token string">'Full name'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'This column has a value getter and is not sortable.'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">160</span><span class="token punctuation">,</span>
    <span class="token function-variable function">valueGetter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">params</span><span class="token operator">:</span> GridValueGetterParams</span><span class="token punctuation">)</span> <span class="token operator">=></span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>row<span class="token punctuation">.</span>firstName <span class="token operator">||</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>params<span class="token punctuation">.</span>row<span class="token punctuation">.</span>lastName <span class="token operator">||</span> <span class="token string">''</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rows <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Snow'</span><span class="token punctuation">,</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Jon'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">14</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Lannister'</span><span class="token punctuation">,</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Cersei'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">31</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Lannister'</span><span class="token punctuation">,</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Jaime'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">31</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">'Stark'</span><span class="token punctuation">,</span> <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">'Arya'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">11</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">DataGridDemo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Box sx<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'100%'</span> <span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>DataGrid
        rows<span class="token operator">=</span><span class="token punctuation">{</span>rows<span class="token punctuation">}</span>
        columns<span class="token operator">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span>
        initialState<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token literal-property property">pagination</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">paginationModel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
              <span class="token literal-property property">pageSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        pageSizeOptions<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        checkboxSelection
        disableRowSelectionOnClick
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="mui-데이터-그리드-사용자-정의하기" tabindex="-1"><a class="header-anchor" href="#mui-데이터-그리드-사용자-정의하기" aria-hidden="true">#</a> MUI 데이터 그리드 사용자 정의하기</h1>
<p>표시되는 행 수 수정하기</p>
<p>데이터 그리드의 기본으로 표시되는 행 수를 변경하려면 initialState prop을 수정할 수 있습니다. 제공된 예시에서는 pageSize가 5로 설정되어 5개의 행이 초기에 표시됩니다. 이 숫자를 원하는대로 조정할 수 있는 유연성이 있습니다. 또한 pageSizeOptions prop을 사용하여 사용자에게 드롭다운 메뉴를 제공할 수 있으며, 이 메뉴에는 5, 10, 15와 같은 여러 값이 포함되어 사용자가 쉽게 표시 크기를 변경할 수 있습니다.</p>
<p>일부 행 설정 변경하기</p>
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
<p>DataGrid 컴포넌트는 처음에 행 선택이 쉽도록 체크박스를 렌더링합니다. 이러한 체크박스를 비활성화하려면 checkboxSelection={false}로 설정하면 됩니다. 이러한 조정으로 체크박스가 숨겨지며 더 깔끔한 외관을 제공합니다.</p>
<p>초기 DataGrid 설정에서 셀을 선택하면 자동으로 전체 행이 선택됩니다. 이 동작을 비활성화하려면 DataGrid에서 제공하는 disableRowSelection prop을 수정하여 할 수 있습니다. 이 prop을 변경하면 셀을 선택할 때 체크박스가 집곅되거나 선택 표시되지 않습니다.</p>
<p>rowHeight를 사용자 정의하려면 getRowHeight prop을 활용할 수 있습니다. 이 prop은 숫자를 반환해야 합니다. 이를 구현하기 전에 <code v-pre>@mui/x-data-grid</code>에서 GridRowHeightParams를 import하는 것을 잊지마세요. 다양한 행에 대해 변수 높이를 가져오도록 조건을 추가할 수 있으며, getRowHeight를 auto로 설정하면 셀 내용에 따라 자동으로 행 높이가 변경됩니다.</p>
<p>또한 행을 사용자 정의하는 데 사용할 수 있는 다른 prop이 있습니다. getRowSpacing을 사용하면 행 간의 간격을 추가할 수 있습니다.</p>
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
<p>일부 열 설정 변경하기</p>
<p>열 정의에서 필드, 헤더 이름, 폭과 같은 기본 속성을 설정할 수 있습니다. 이외에도 열을 더 자세히 사용자 정의할 수 있습니다. 예를 들어, 사용자 편집을 제한하려면 editable: false로 설정하십시오. 열에서 정렬을 비활성화하려면 sortable: false를 사용하십시오. 게다가 기본 세 점 메뉴를 제거하고 싶다면 disableColumnMenu: true로 설정하십시오.</p>
<p>기본 사용자 상호작용 향상하기</p>
<p>또한, 특정 열에 대해 드롭다운 또는 날짜 선택기를 제공하여 자유 형식의 입력을 허용하는 대신 사용자 상호작용을 향상시킬 수 있습니다. 예를 들어, &quot;성별&quot; 열을 위해 type: <code v-pre>singleSelect</code>를 설정하고 <code v-pre>Male</code> 또는 <code v-pre>Female</code>과 같은 옵션을 드롭다운에서 선택할 수 있습니다. 마찬가지로, 열에 대해 날짜 선택기를 원하는 경우 type: <code v-pre>date</code>로 설정하십시오. 그러면 렌더링된 달력에서 날짜를 선택할 수 있습니다. 또한 숫자 필드의 경우 type: <code v-pre>number</code>를 지정하여 입력을 간소화하고 데이터 일관성을 향상시킬 수 있습니다. 이런 식으로 type 속성을 활용하여 각 열의 입력 방법을 데이터 요구 사항에 최적으로 맞추어 조정할 수 있습니다.</p>
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
<h1 id="데이터-그리드에-스타일-적용하기" tabindex="-1"><a class="header-anchor" href="#데이터-그리드에-스타일-적용하기" aria-hidden="true">#</a> 데이터 그리드에 스타일 적용하기</h1>
<ul>
<li>열 구분선 제거하기:</li>
</ul>
<p>그리드에서 열 구분선을 제거하려면 sx prop을 사용하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sx<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string-property property">'.MuiDataGrid-columnSeparator'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="2">
<li>그리드 테두리 조정 또는 제거하기:</li>
</ol>
<p>sx prop을 사용하여 그리드 테두리를 수정하거나 제거하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sx<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token string-property property">'&amp;.MuiDataGrid-root'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>열 헤더 사용자 정의하기:</li>
</ol>
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
<p>다음과 같이 스타일에 접근하여 열 헤더를 사용자 정의하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sx<span class="token operator">=</span><span class="token punctuation">{</span>
<span class="token string-property property">"&amp; .MuiDataGrid-columnHeaders"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">fontWeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRadius</span><span class="token operator">:</span> <span class="token string">"var(--none, 0px)"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderBottom</span><span class="token operator">:</span> <span class="token string">"1px solid var(--divider, rgba(0, 0, 0, 0.12))"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderLeft</span><span class="token operator">:</span> <span class="token string">"var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderRight</span><span class="token operator">:</span> <span class="token string">"var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderTop</span><span class="token operator">:</span> <span class="token string">"var(--none, 0px) solid var(--divider, rgba(0, 0, 0, 0.12))"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">"var(--primary-selected, rgba(33, 150, 243, 0.08))"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alignItems</span><span class="token operator">:</span> <span class="token string">'space-between !important'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>항상 정렬 아이콘 표시:</li>
</ol>
<p>정렬 상태와 관계없이 항상 정렬 아이콘이 표시되도록 보장하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sx<span class="token operator">=</span><span class="token punctuation">{</span>
<span class="token string-property property">"&amp; .MuiDataGrid-sortIcon"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token string">'inherit !important'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Changing Alignment in Column Header Cell:</li>
</ol>
<p>Adjust alignment and add padding in the column header cell:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sx<span class="token operator">=</span><span class="token punctuation">{</span>
<span class="token string-property property">".MuiDataGrid-iconButtonContainer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">marginLeft</span><span class="token operator">:</span> <span class="token string">'50px !important'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<ol start="6">
<li>셀 선택 시 포커스 제거하기:</li>
</ol>
<p>셀을 선택할 때 포커스를 제거하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>sx<span class="token operator">=</span><span class="token punctuation">{</span>
<span class="token string-property property">"&amp; .MuiDataGrid-cell:focus-within"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> <span class="token string">'none !important'</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>sx 프롭을 사용하여 스타일을 변경하거나 수정할 때 해당 스타일이 컴포넌트에 적용되지 않는 경우, 위의 예시에서와 같이 sx 프롭에 !important를 추가하는 것을 고려해보세요. !important 선언은 지정된 스타일이 컴포넌트 내 다른 소스에서 오는 충돌 스타일보다 우선 적용되도록 보장합니다. 이는 기본 또는 외부 스타일이 커스터마이즈를 방해할 수 있는 경우에 특히 유용합니다. !important를 추가함으로써 지정된 스타일을 우선시함으로써 스타일 충돌을 해결하고 컴포넌트에 정확하게 적용되도록 하여 사용자 정의가 올바르게 적용되도록합니다.</p>
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
<h1 id="더-많은-사용자-정의" tabindex="-1"><a class="header-anchor" href="#더-많은-사용자-정의" aria-hidden="true">#</a> 더 많은 사용자 정의</h1>
<p>만약 블로그 글에서 찾고 있는 스타일링 방법이 없다면 Chrome DevTools를 활용해보세요. 웹 페이지로 이동한 후, 조사하고 싶은 컴포넌트를 마우스 오른쪽 버튼으로 클릭하고 나타나는 메뉴에서 “조사”를 선택하세요. DevTools에서 “스타일” 탭으로 이동하여 선택한 컴포넌트에 적용된 스타일을 확인할 수 있습니다. 필요한 구체적인 스타일과 해당 CSS 선택자를 식별한 후, 위의 예시에 나와 있는 것처럼 해당 스타일을 프로젝트에 추가하여 사용할 수 있습니다. 이 방법을 통해 기존 스타일을 활용하고 쉽게 사용자 정의에 통합하여 일관성 있고 스타일링이 쉬운 결과물을 만들 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-MUIDataGridStyleCustomization/img/MUIDataGridStyleCustomization_0.png" alt="이미지"></p>
<p>마무리로, MaterialUI DataGrid를 사용자 정의하는 것은 다재다능하고 직관적인 프로세스입니다. 행, 열 또는 스타일을 조정하려 할 때 제공된 예시와 sx prop이 도움이 될 것입니다. 기억하세요, 간단함이 사용자 경험을 향상시킵니다. 이제 앞으로 나아가서 실험을 해보고 DataGrid를 독특하게 만들어 보세요!</p>
</div></template>
