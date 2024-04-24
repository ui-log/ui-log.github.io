<template><div><p>이 기사의 내용은 @VisActor/VTable 사용자 인터뷰를 기반으로 합니다.</p>
<h1 id="비즈니스-시나리오-소개" tabindex="-1"><a class="header-anchor" href="#비즈니스-시나리오-소개" aria-hidden="true">#</a> 비즈니스 시나리오 소개</h1>
<p>전통적인 평가 시스템에서 여러 리뷰어들은 주로 Feishu 양식에서 동일한 데이터 세트에 주석을 달기 위해 협업해야 합니다. 이 프로세스에는 여러 사용자가 동일한 문서를 편집하고 주석이 달린 데이터를 평가 플랫폼에 업로드하는 것이 포함됩니다. 그러나 이 방식에는 특정한 단점이 있습니다. 먼저, 원본 데이터가 효과적으로 플랫폼에 축적되지 않아 데이터 세트 작성을 위한 완전한 폐쇄 루프 형성이 불가능하며, 둘째로 사용자들은 주석이 달린 데이터를 수동으로 업로드해야 하는데, 이는 효율성을 줄이고 부적절한 사용자 경험으로 이어집니다.</p>
<p>이 문제를 해결하고 사용자 주석 효율성을 향상시키고 오프라인 Feishu 양식에 대한 의존성을 줄이기 위해 우리 플랫폼은 VTable 비주얼 편집 솔루션을 채택했습니다. 이 솔루션을 통해 사용자들은 우리 시스템의 테이블 양식에서 데이터를 직접 편집할 수 있어서 직접적인 데이터 저장, 역사적 기록 저장 및 기타 기능이 가능해졌습니다.</p>
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
<p>VTable 편집기 인터페이스와 관련 이벤트 리스너를 통해 HTML 또는 React/Vue 구성 요소를 통합하여 편집 기능을 확장하는 것이 쉽습니다. 이 문서는 예제를 통해 범용적인 솔루션을 보여줍니다.</p>
<h1 id="vtable-소개" tabindex="-1"><a class="header-anchor" href="#vtable-소개" aria-hidden="true">#</a> VTable 소개</h1>
<p>VTable은 ByteDance에 의해 출시된 VisActor 오픈 소스 시각화 솔루션의 주요 구성 요소이며 고성능 테이블 컴포넌트입니다. 뛰어난 성능과 풍부한 시각화 기능으로 유명합니다. 자세한 내용은 아래 링크를 참조해 주세요:</p>
<ol>
<li>공식 웹사이트: https://www.visactor.io/vtable</li>
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
<ul>
<li>
<ol start="2">
<li>Github: https://github.com/VisActor/VTable</li>
</ol>
</li>
</ul>
<p><img src="@source/docs/Tech/2024-04-23-DevelopingVTableCustomEditComponentwithReact/img/DevelopingVTableCustomEditComponentwithReact_0.png" alt="image"></p>
<h1 id="vtable의-편집-기능" tabindex="-1"><a class="header-anchor" href="#vtable의-편집-기능" aria-hidden="true">#</a> VTable의 편집 기능</h1>
<p>VTable은 현재 두 가지 주요 편집 기능을 제공합니다.</p>
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
<li>셀 편집</li>
<li>데이터 채우기</li>
</ul>
<p>데이터 채우기는 fill handle 구성 요소를 사용합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-DevelopingVTableCustomEditComponentwithReact/img/DevelopingVTableCustomEditComponentwithReact_1.png" alt="image"></p>
<p>셀 편집은 @visactor/vtable-editors 구성 요소를 기반으로 합니다. 이 글은 주로 @visactor/vtable-editors 구성 요소를 기반으로 한 사용자 정의 테이블 편집 기능을 소개합니다.</p>
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
<h1 id="visactor-vtable-editors" tabindex="-1"><a class="header-anchor" href="#visactor-vtable-editors" aria-hidden="true">#</a> @visactor/vtable-editors</h1>
<p>이 컴포넌트에는 사용자가 직접 사용하거나 확장하고 사용자 정의할 수 있는 텍스트 입력 상자, 날짜 선택기, 드롭다운 목록 등이 내장되어 있습니다.</p>
<p>먼저, VTable 라이브러리 @visactor/vtable과 관련된 편집기 패키지 @visactor/vtable-editors가 올바르게 설치되었는지 확인하세요. 다음 명령어를 사용하여 설치할 수 있습니다:</p>
<p>VTable을 설치하려면:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// npm을 사용하여 설치</span>
npm install @visactor<span class="token operator">/</span>vtable
<span class="token comment">// yarn을 사용하여 설치</span>
yarn add @visactor<span class="token operator">/</span>vtable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@visactor/vtable-editors를 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// npm을 사용하여 설치</span>
npm install @visactor<span class="token operator">/</span>vtable<span class="token operator">-</span>editors
<span class="token comment">// yarn을 사용하여 설치</span>
yarn add @visactor<span class="token operator">/</span>vtable<span class="token operator">-</span>editors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>코드에서 필요한 유형의 편집기 모듈을 가져와서 사용하세요(구현을 사용자 정의하거나 vtable-editors 패키지의 편집기 클래스를 참조할 수 있습니다):```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// vtable-editors에서 제공하는 에디터 클래스 가져오기</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DateInputEditor<span class="token punctuation">,</span> InputEditor<span class="token punctuation">,</span> ListEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@visactor/vtable-editors'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로 사용해야 할 에디터 인스턴스를 만들어 보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> inputEditor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">InputEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> dateInputEditor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateInputEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> listEditor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListEditor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">values</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'女'</span><span class="token punctuation">,</span> <span class="token string">'男'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예제에서는 텍스트 입력 상자 에디터(InputEditor), 날짜 선택기 에디터(DateInputEditor), 그리고 드롭다운 목록 에디터(ListEditor)를 생성했습니다. 실제 필요에 따라 적절한 에디터 유형을 선택할 수 있습니다.```</p>
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
<p>만든 편집기 인스턴스를 사용하려면 VTable에 등록해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 편집기를 VTable에 등록</span>
VTable<span class="token punctuation">.</span>register<span class="token punctuation">.</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string">'name-editor'</span><span class="token punctuation">,</span> inputEditor<span class="token punctuation">)</span><span class="token punctuation">;</span>
VTable<span class="token punctuation">.</span>register<span class="token punctuation">.</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string">'name-editor2'</span><span class="token punctuation">,</span> inputEditor2<span class="token punctuation">)</span><span class="token punctuation">;</span>
VTable<span class="token punctuation">.</span>register<span class="token punctuation">.</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string">'number-editor'</span><span class="token punctuation">,</span> numberEditor<span class="token punctuation">)</span><span class="token punctuation">;</span>
VTable<span class="token punctuation">.</span>register<span class="token punctuation">.</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string">'date-editor'</span><span class="token punctuation">,</span> dateInputEditor<span class="token punctuation">)</span><span class="token punctuation">;</span>
VTable<span class="token punctuation">.</span>register<span class="token punctuation">.</span><span class="token function">editor</span><span class="token punctuation">(</span><span class="token string">'list-editor'</span><span class="token punctuation">,</span> listEditor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, 열 구성에 사용할 편집기를 지정해야 합니다 (피벗 테이블인 경우 지표에서 편집기를 구성):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">columns</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'이름'</span><span class="token punctuation">,</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token function">editor</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span>row<span class="token operator">%</span><span class="token number">2</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token string">'name-editor'</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
      <span class="token keyword">return</span> <span class="token string">'name-editor2'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'나이'</span><span class="token punctuation">,</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token string">'number-editor'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'성별'</span><span class="token punctuation">,</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'gender'</span><span class="token punctuation">,</span> <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token string">'list-editor'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'생년월일'</span><span class="token punctuation">,</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'birthDate'</span><span class="token punctuation">,</span> <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token string">'date-editor'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 사용자들은 셀을 더블 클릭하여 편집을 시작하고, 그 후 편집기를 선택하여 입력할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-DevelopingVTableCustomEditComponentwithReact/img/DevelopingVTableCustomEditComponentwithReact_2.png" alt="image"></p>
<h1 id="에디터-사용자-지정" tabindex="-1"><a class="header-anchor" href="#에디터-사용자-지정" aria-hidden="true">#</a> 에디터 사용자 지정</h1>
<p>VTable-editors 라이브러리에서 제공하는 몇 가지 에디터가 필요에 부합하지 않는 경우, 에디터를 사용자 지정할 수 있습니다. 이를 위해 클래스를 만들고, 에디터 인터페이스(IEditor)의 요구 사항을 구현하고 필요한 메서드와 로직을 제공해야 합니다.</p>
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
<p>편집기와 VTable 간의 관계를 이해하려면 다음 플로차트를 결합해 보세요:</p>
<p><img src="@source/docs/Tech/2024-04-23-DevelopingVTableCustomEditComponentwithReact/img/DevelopingVTableCustomEditComponentwithReact_3.png" alt="flowchart"></p>
<p>여기 @visactor/vtable-editors에서 IEditor 인터페이스를 상속하는 비교적 복잡한 캐스케이딩 목록 선택기인 사용자 정의 편집기의 예시 코드가 있습니다. IEditor에서 구현해야 하는 인터페이스는 onStart, onEnd, getValue입니다.</p>
<p>IEditor 인터페이스는 다음과 같이 정의됩니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IEditor</span><span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token operator">=</span> any<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/** * 셀이 편집 모드로 전환될 때 호출됩니다. */</span>
  <span class="token function-variable function">onStart</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">context</span><span class="token operator">:</span> EditContext<span class="token operator">&lt;</span><span class="token constant">V</span><span class="token operator">></span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** * 셀이 편집 모드에서 나올 때 호출됩니다. */</span>
  <span class="token function-variable function">onEnd</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
만약 이 함수가 제공된다면, VTable은 사용자가 다른 곳을 클릭했을 때 이 함수를 호출합니다.
만약 이 함수가 false 값을 반환하면, VTable은 onEnd를 호출하여 편집 모드를 종료합니다.
만약 이 함수가 정의되지 않았거나 이 함수가 true 값을 반환하면, VTable은 아무것도 하지 않습니다.
즉, 편집 모드를 종료하려면 onStart에서 제공된 endEdit를 수동으로 호출해야 합니다.
   */</span>
  isEditorElement<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> HTMLElement</span><span class="token punctuation">)</span> <span class="token operator">=></span> boolean<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 편집기의 현재 값 가져오기. onEnd 호출 이후 호출됩니다.*/</span>
  <span class="token function-variable function">getValue</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token constant">V</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
새 입력 값이 유효한지 확인합니다.
   */</span>
  validateValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> boolean<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">EditContext</span><span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token operator">=</span> any<span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**  VTable 인스턴스가 위치한 컨테이너 요소 */</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 편집 중인 셀의 위치 정보 */</span>
  <span class="token literal-property property">referencePosition</span><span class="token operator">:</span> ReferencePosition<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/** 편집 모드로 진입 중인 셀의 현재 값 */</span>
  <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">V</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
편집 모드를 종료하는 데 사용되는 콜백함수.
   *
대부분의 경우, Enter 키를 눌러 편집 모드를 종료하는 VTable의 동작이 이미 제공되므로
 마우스로 다른 곳을 클릭하여 편집 모드를 종료하는 행동 또한 isEditorElement 함수를 통해 얻을 수 있습니다.
   *
그러나 "완료" 버튼을 편집기 내부에 제공하고 싶거나
 툴팁과 같은 외부 요소를 얻을 수 없는 경우와 같이 특수 요구 사항이 있는 경우,
이 콜백을 저장하고 필요할 때 편집 모드를 수동으로 종료할 수 있습니다.
   */</span>
  <span class="token function-variable function">endEdit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">col</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">row</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="에디터의-실용적인-사용자-정의" tabindex="-1"><a class="header-anchor" href="#에디터의-실용적인-사용자-정의" aria-hidden="true">#</a> 에디터의 실용적인 사용자 정의</h1>
<h2 id="함수-정의" tabindex="-1"><a class="header-anchor" href="#함수-정의" aria-hidden="true">#</a> 함수 정의</h2>
<p>우리의 목표는 React 캐스케이딩 컴포넌트 Cascader를 정의하여, 이 컴포넌트를 통해 편집 상호작용을 수행하고 결과를 VTable에 업데이트하는 것입니다.</p>
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
<p>편의를 위해 arco-design의 Cascader 구성 요소를 직접 사용합니다. 다른 React 구성 요소의 통합 방법도 비슷합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-DevelopingVTableCustomEditComponentwithReact/img/DevelopingVTableCustomEditComponentwithReact_4.png" alt="image"></p>
<h2 id="코드-구현" tabindex="-1"><a class="header-anchor" href="#코드-구현" aria-hidden="true">#</a> 코드 구현</h2>
<p>먼저 필요한 구성 요소와 관련 정의를 가져와서, @visactor/vtable-editors에서 IEditor 인터페이스 정의를 가져옵니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Cascader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@arco-design/web-react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> Root <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span> IEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@visactor/vtable-editors'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, CascaderEditor 클래스를 구현하겠습니다. 전체적인 정의는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">CascaderEditor</span> <span class="token keyword">extends</span> <span class="token class-name">IEditor</span><span class="token punctuation">{</span>
  <span class="token literal-property property">editorType</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">cascaderOptions</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 모든 열 정보</span>
  <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> string<span class="token punctuation">;</span> <span class="token comment">// 선택된 셀의 필드</span>
  <span class="token literal-property property">inputRef</span><span class="token operator">:</span> React<span class="token punctuation">.</span>RefObject<span class="token operator">&lt;</span>HTMLInputElement<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token literal-property property">root</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> Root<span class="token punctuation">;</span> <span class="token comment">// reactDOM을 마운트하기 위한 것</span>
  <span class="token literal-property property">container</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>
  <span class="token literal-property property">element</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">editorConfig</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>editorType <span class="token operator">=</span> <span class="token string">'Cascader'</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cascaderOptions <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>field <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>editorConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">editorConfig</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> options<span class="token punctuation">,</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> editorConfig<span class="token punctuation">;</span>
    <span class="token keyword">const</span> filed <span class="token operator">=</span> value<span class="token punctuation">.</span>field<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cascaderOptions <span class="token operator">=</span> options<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>field <span class="token operator">=</span> filed<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">onStart</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">editorContext</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">container</span><span class="token operator">:</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">referencePosition</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
  
  <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">selectMode</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">Options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token punctuation">(</span>string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
  
  <span class="token function">adjustPosition</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">rect</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">top</span><span class="token operator">:</span> string<span class="token punctuation">;</span> left<span class="token operator">:</span> string<span class="token punctuation">;</span> width<span class="token operator">:</span> string<span class="token punctuation">;</span> height<span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>
  
  <span class="token function">onEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'endEditing cascader'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span>  <span class="token punctuation">}</span>
  
  <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">(</span>string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
  
  <span class="token function">isEditorElement</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
  
  <span class="token function">bindSuccessCallback</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">successCallback</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>successCallback <span class="token operator">=</span> successCallback<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token function">changeValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
  
  <span class="token function">getCascaderOptions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> string<span class="token punctuation">,</span> <span class="token literal-property property">cascaderOptions</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
  
  <span class="token function">findValuesAndParents</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">searchTexts</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
  
  <span class="token function">isClickPopUp</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">classList</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token function-variable function">contains</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg0</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=></span> any <span class="token punctuation">}</span><span class="token punctuation">;</span> parentNode<span class="token operator">:</span> any <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>사용자가 상호 작용을 통해 편집 상태를 트리거하면, VTable은 onStart 메서드를 호출합니다. onStart 메서드에서 React 컴포넌트를 초기화하고 editorContext를 사용하여 셀의 위치를 가져와 컴포넌트를 위치시킵니다. onStart 메서드는 다음과 같습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 에디터의 내장 메서드를 덮어쓰기
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>HTMLElement<span class="token punctuation">}</span></span> <span class="token parameter">container</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">referencePosition</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">onStart</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">editorContext</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token literal-property property">container</span><span class="token operator">:</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">referencePosition</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>container<span class="token punctuation">,</span>referencePosition<span class="token punctuation">}</span> <span class="token operator">=</span> editorContext<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> container<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> selectMode<span class="token punctuation">,</span> options <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCascaderOptions</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>field<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cascaderOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> defaultOptions <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findValuesAndParents</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>selectMode<span class="token punctuation">,</span> options<span class="token punctuation">,</span> defaultOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      value <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> referencePosition <span class="token operator">?</span> <span class="token keyword">void</span> <span class="token number">0</span> <span class="token operator">:</span> referencePosition<span class="token punctuation">.</span>rect<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">adjustPosition</span><span class="token punctuation">(</span>referencePosition<span class="token punctuation">.</span>rect<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token operator">?.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>onStart 메서드는 먼저 getCascaderOptions 메서드를 호출하여 구성 요소의 옵션 및 selectMode를 반환합니다. 이 메서드의 구현은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 필드를 기준으로 전체 cascaderOptions에서 해당 옵션을 필터링합니다.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">Value</span> - 편집 상태에 진입할 때 입력 상자의 텍스트도 레코드의 값입니다.
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">field</span>
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span> <span class="token parameter">cascaderOptions</span> 전체 옵션
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getCascaderOptions</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> string<span class="token punctuation">,</span> <span class="token literal-property property">cascaderOptions</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> advancedConfig <span class="token operator">=</span> cascaderOptions<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token operator">=></span> option<span class="token punctuation">.</span>name <span class="token operator">===</span> field<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> selectMode <span class="token operator">=</span> advancedConfig<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>advancedConfig<span class="token operator">?.</span>selectMode<span class="token punctuation">;</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> advancedConfig<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">?.</span>advancedConfig<span class="token operator">?.</span>Cascader<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> selectMode<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 findValuesAndParents 메서드를 호출하여 사용자가 구성 요소에서 선택한 값을 반환합니다. findValuesAndParents 메서드의 구현은 다음과 같습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * @설명: 텍스트를 기반으로 해당 값 반환
   * @매개변수 <span class="token punctuation">{</span>*<span class="token punctuation">}</span> options
   * @매개변수 <span class="token punctuation">{</span>*<span class="token punctuation">}</span> searchTexts
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">findValuesAndParents</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">searchTexts</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> searchLabels <span class="token operator">=</span> searchTexts<span class="token operator">?.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token operator">=></span> text<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">results</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">function</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> <span class="token literal-property property">parents</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> option <span class="token keyword">of</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 현재 노드의 값을 및 부모 ID 기록</span>
        <span class="token keyword">const</span> currentParents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>parents<span class="token punctuation">,</span> option<span class="token punctuation">.</span>value<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 일치하는 레이블이 발견되면 그 값 및 부모 ID를 결과에 추가</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>searchLabels<span class="token operator">?.</span><span class="token function">includes</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>label<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>currentParents<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 하위 노드가 있는 경우 재귀적으로 검색</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>option<span class="token operator">?.</span>children <span class="token operator">&amp;&amp;</span> option<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">search</span><span class="token punctuation">(</span>option<span class="token punctuation">.</span>children<span class="token punctuation">,</span> currentParents<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">search</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> results<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음으로, createElement 메서드를 호출하여 컴포넌트를 로드합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * @설명: 에디터의 기본 메서드 덮어쓰기,
   * @매개변수 <span class="token punctuation">{</span>string<span class="token punctuation">}</span> 선택모드
   * @매개변수 <span class="token punctuation">{</span>*<span class="token punctuation">}</span> 옵션
   * @매개변수 <span class="token punctuation">{</span>*<span class="token punctuation">}</span> 기본값
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">selectMode</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token literal-property property">Options</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">defaultValue</span><span class="token operator">:</span> <span class="token punctuation">(</span>string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">'absolute'</span><span class="token punctuation">;</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">'100%'</span><span class="token punctuation">;</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>padding <span class="token operator">=</span> <span class="token string">'4px'</span><span class="token punctuation">;</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>boxSizing <span class="token operator">=</span> <span class="token string">'border-box'</span><span class="token punctuation">;</span>
    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token string">'#232324'</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token operator">?.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>root <span class="token operator">=</span> <span class="token function">createRoot</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Cascader
        ref<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">}</span>
        options<span class="token operator">=</span><span class="token punctuation">{</span>Options<span class="token punctuation">}</span>
        expandTrigger<span class="token operator">=</span><span class="token string">"hover"</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">changeValue</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        mode<span class="token operator">=</span><span class="token punctuation">{</span>selectMode<span class="token punctuation">}</span>
        defaultValue<span class="token operator">=</span><span class="token punctuation">{</span>defaultValue<span class="token punctuation">}</span>
        maxTagCount<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span>
        style<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">'none'</span> <span class="token punctuation">}</span>
        bordered<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>element <span class="token operator">=</span> div<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이 시점에서 리액트 컴포넌트가 표시되었으며 setValue 메서드를 통해 VTable의 값을 업데이트합니다. setValue의 구현은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>:에디터의 기본 메서드를 덮어쓰기
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">rect</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">setValue</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token punctuation">(</span>string <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token punctuation">.</span>current<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>adjustPosition 메서드를 호출하여 구성 요소의 위치를 조정합니다. adjustPosition 메서드의 구현은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>:에디터의 기본 메서드를 덮어쓰기
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">rect</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">adjustPosition</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">rect</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">top</span><span class="token operator">:</span> string<span class="token punctuation">;</span> left<span class="token operator">:</span> string<span class="token punctuation">;</span> width<span class="token operator">:</span> string<span class="token punctuation">;</span> height<span class="token operator">:</span> string <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> rect<span class="token punctuation">.</span>top <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>left <span class="token operator">=</span> rect<span class="token punctuation">.</span>left <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> rect<span class="token punctuation">.</span>width <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> rect<span class="token punctuation">.</span>height <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>VTable이 자동으로 편집 모드를 종료하려면 구성 요소 내부에서 마우스 클릭이 발생했는지를 결정하는 isEditorElement 메서드를 제공해야 합니다. 구현은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 클릭할 때마다 실행되며, 현재 클릭한 영역이 편집기 범위 내에 있는지 판단하는 목적
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">target</span> 클릭한 요소
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Boolean<span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">isEditorElement</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Node <span class="token operator">|</span> <span class="token keyword">null</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 캐스케이더가 생성될 때 캔버스 다음에 DOM이 추가되고, 팝업이 본문의 끝에 추가됩니다. 팝업인지 DOM인지 여부에 상관없이 이를 편집 영역으로 클릭으로 간주해야 합니다.</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>element<span class="token operator">?.</span><span class="token function">contains</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isClickPopUp</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>셀 값을 업데이트해야 할 때 VTable은 getValue 메서드를 호출합니다. 이 예시에서는 해당 메서드의 구현이 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token doc-comment comment">/**
   * <span class="token keyword">@description</span>: 편집기의 내장 메서드를 덮어씁니다,
   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>object<span class="token punctuation">}</span></span> <span class="token parameter">rect</span>
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span></span>
   */</span>
  <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>inputRef<span class="token operator">?.</span>current<span class="token operator">?.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
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
<h2 id="에디터-등록-및-사용하기" tabindex="-1"><a class="header-anchor" href="#에디터-등록-및-사용하기" aria-hidden="true">#</a> 에디터 등록 및 사용하기</h2>
<p>먼저 사용자 정의 에디터 정의를 참조하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 사용자 정의 에디터 클래스</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CascaderEditor<span class="token punctuation">,</span> InputNumberEditor<span class="token punctuation">,</span> SelectEditor<span class="token punctuation">,</span> TextAreaEditor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/client/components/TableEditor'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>에디터를 사용하기 전에 VTable에 에디터 인스턴스를 등록해야 합니다.</p>
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
<p>위 예제에서는 dataTable?.datasetQueryDataList?.columns를 인터페이스에 따라 반환하고 현재 사용자가 클릭한 셀 데이터인 clickedCellValue를 설정하여 사용자 정의 CascaderEditor의 매개변수를 설정한 다음, 에디터를 초기화한 후 등록하고 사용했습니다. 위의 VTable?.register?.editor('cascader-editor', cascaderEditor)입니다.</p>
<p>다음으로, 열 구성에서 사용할 에디터를 지정해야 합니다 (피벗 테이블인 경우 지표에서 에디터를 구성):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> buildTableColumns <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">columns</span><span class="token operator">:</span> DatasetColumnSchema<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token literal-property property">isView</span><span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> temp <span class="token operator">=</span> columns<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">colItem</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dataType <span class="token operator">=</span> colItem<span class="token operator">?.</span>dataType<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dataType <span class="token operator">===</span> DatasetColumnDataType<span class="token punctuation">.</span>Category<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">field</span><span class="token operator">:</span> colItem<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> colItem<span class="token punctuation">.</span>displayName<span class="token punctuation">,</span>
            <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token string">'cascader-editor'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'edit'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dataType <span class="token operator">===</span> DatasetColumnDataType<span class="token punctuation">.</span>Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">field</span><span class="token operator">:</span> colItem<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> colItem<span class="token punctuation">.</span>displayName<span class="token punctuation">,</span>
            <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token string">'input-number-editor'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'edit'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>dataType <span class="token operator">===</span> DatasetColumnDataType<span class="token punctuation">.</span>Boolean<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">field</span><span class="token operator">:</span> colItem<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> colItem<span class="token punctuation">.</span>displayName<span class="token punctuation">,</span>
            <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token string">'list-editor'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'edit'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">field</span><span class="token operator">:</span> colItem<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> colItem<span class="token punctuation">.</span>displayName<span class="token punctuation">,</span>
            <span class="token literal-property property">editor</span><span class="token operator">:</span> <span class="token string">'text-editor'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'edit'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">!</span>isView <span class="token operator">&amp;&amp;</span>
        temp<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">field</span><span class="token operator">:</span> <span class="token string">'isCheck'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
          <span class="token literal-property property">headerType</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
          <span class="token literal-property property">cellType</span><span class="token operator">:</span> <span class="token string">'checkbox'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> temp<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>dataTable<span class="token operator">?.</span>datasetQueryDataList<span class="token punctuation">]</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="수정-이벤트-듣기" tabindex="-1"><a class="header-anchor" href="#수정-이벤트-듣기" aria-hidden="true">#</a> 수정 이벤트 듣기</h1>
<p>VTable은 수정 이벤트를 듣는 기능을 제공합니다. 수정 데이터 이벤트를 듣고 해당 로직을 실행할 수 있습니다.</p>
<p>아래는 수정 이벤트를 듣는 예제 코드입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> tableInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VTable<span class="token punctuation">.</span>ListTable</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
tableInstance<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'change_cell_value'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 셀 데이터 수정</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<h2 id="수정-후-데이터-획득" tabindex="-1"><a class="header-anchor" href="#수정-후-데이터-획득" aria-hidden="true">#</a> 수정 후 데이터 획득</h2>
<p>사용자가 편집을 완료하고 데이터를 제출한 후, 편집된 데이터를 가져와서 후속 처리에 사용할 수 있습니다. 레코드의 값을 직접 가져올 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 현재 테이블의 전체 데이터 가져오기</span>
tableInstance<span class="token punctuation">.</span>records<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="전체-코드" tabindex="-1"><a class="header-anchor" href="#전체-코드" aria-hidden="true">#</a> 전체 코드</h2>
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
<p>전체 코드:</p>
<p>https://visactor.io/vtable/demo-react/functional-components/arco-select-editor</p>
<h1 id="구현-효과" tabindex="-1"><a class="header-anchor" href="#구현-효과" aria-hidden="true">#</a> 구현 효과</h1>
<p>셀을 두 번 클릭하여 편집 모드로 진입합니다. 아래와 같이 표시됩니다:</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*XusAGfv7-IzHOvGamRa88w.gif" alt="이미지"></p>
<h1 id="일부-기대사항" tabindex="-1"><a class="header-anchor" href="#일부-기대사항" aria-hidden="true">#</a> 일부 기대사항</h1>
<p>VTable은 React-VTable 컴포넌트도 제공합니다. 팝업 형태의 React 컴포넌트를 통합하는 전체 솔루션은 React-VTable에서 더욱 개선될 것이며, React 컴포넌트와 VTable의 조합이 더 사용자 친화적이고 강력해질 것입니다.</p>
<h1 id="테이블-요구사항과-실제-시나리오-모음" tabindex="-1"><a class="header-anchor" href="#테이블-요구사항과-실제-시나리오-모음" aria-hidden="true">#</a> 테이블 요구사항과 실제 시나리오 모음</h1>
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
<p>이 실용적 시나리오의 비즈니스 파티가 VisActor로부터 아름다운 선물을 받았어요.</p>
<p><img src="@source/docs/Tech/2024-04-23-DevelopingVTableCustomEditComponentwithReact/img/DevelopingVTableCustomEditComponentwithReact_6.png" alt="이미지"></p>
<p>테이블에 관련된 전형적인 비즈니스 시나리오와 케이스를 계속 수집하고 있으며, 요구 사항을 포함하고 있습니다. 누구든지 연락할 수 있도록 환영합니다.</p>
<p>디스코드: https://discord.gg/3wPyxVyH6m</p>
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
<p>트위터: https://twitter.com/xuanhun1</p>
<p>VisActor 공식 웹사이트: www.visactor.io/</p>
<p>어두운 밤, 나는 당신이 별빛을 밝혀주는 것을 기대합니다. 우리에게 별을 선물해줘서 감사합니다.：</p>
<p>깃허브: https://github.com/VisActor/VTable</p>
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
<img src="@source/docs/Tech/2024-04-23-DevelopingVTableCustomEditComponentwithReact/img/DevelopingVTableCustomEditComponentwithReact_7.png" />
<p>더 많은 참고 자료:</p>
<ul>
<li>VTable - 고성능 데이터 분석 테이블이 아닌</li>
<li>VisActor - 스토리 중심의 지능적 시각화 솔루션</li>
<li>Volcano Engine에서 DataWind 제품의 시각화 능력 공개</li>
<li>더 많은 데모</li>
</ul>
</div></template>
