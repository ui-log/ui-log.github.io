<template><div><p>ArgTypes은 args의 동작을 지정합니다. arg의 유형을 지정함으로써 허용할 수 있는 값들을 제한하고 명시적으로 설정되지 않은 args에 대한 정보를 제공합니다(즉, 설명).</p>
<p>argTypes를 사용하여 애드온들이 사용하는 정보로 args를 &quot;주석&quot; 처리할 수도 있습니다. 예를 들어, 컬러 피커를 렌더링하기 위해 제어 애드온에게 명령하려면 <code v-pre>color</code> 제어 유형을 지정할 수 있습니다.</p>
<p>ArgTypes의 가장 구체적인 구현은 ArgTypes 문서 블록입니다(Controls와 유사함). 표의 각 행은 단일 arg 유형과 해당 arg의 현재 값에 해당합니다.</p>
<p><img src="@source/docs/Tech/2024-04-07-ArgTypes/img/ArgTypes_0.png" alt="ArgTypes_0 이미지"></p>
<h2 id="자동-argtype-추론" tabindex="-1"><a class="header-anchor" href="#자동-argtype-추론" aria-hidden="true">#</a> 자동 argType 추론</h2>
<p>Storybook 문서 애드온을 사용 중이라면 (기본으로 essentials의 일부로 설치되었음), Storybook은 CSF 파일의 기본 내보내기에 지정된 컴포넌트를 기반으로 각 스토리에 대한 argTypes 세트를 추론할 것입니다.</p>
<p>이를 위해 Storybook은 귀하의 프레임워크에 따라 다양한 정적 분석 도구를 사용합니다.</p>
<p>argTypes의 데이터 구조는 이러한 도구의 출력과 일치하도록 설계되었습니다. 수동으로 지정된 속성은 추론된 내용을 덮어씁니다.</p>
<h2 id="argtypes-수동-지정하기" tabindex="-1"><a class="header-anchor" href="#argtypes-수동-지정하기" aria-hidden="true">#</a> argTypes 수동 지정하기</h2>
<p>대부분의 Storybook 프로젝트에서 argTypes는 컴포넌트에서 자동으로 유추됩니다. 수동으로 지정된 argTypes는 유추된 값들을 무시합니다.</p>
<p>ArgTypes는 보통 default export 내에서 메타(컴포넌트) 수준에서 지정됩니다. CSF 파일에서 다음과 같이 지정할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러에 맞게 'your-renderer'를 해당 렌더러 이름으로 바꿔주세요. (예: react, vue3, angular 등)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 👇 모든 Button 스토리는 label 인자를 기대합니다</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
      control<span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">'덮어쓴 설명'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트(전역) 수준에서 지정된 경우 모든 이야기에 적용할 수 있습니다. preview.js|ts 설정 파일에서 다음과 같이 작성하면 됩니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러(예: react, vue3, angular 등)로 your-renderer를 바꿉니다.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> preview<span class="token operator">:</span> Preview <span class="token operator">=</span> <span class="token punctuation">{</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 👇 모든 이야기에는 label 인자가 필요합니다.</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
      control<span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">'덮어쓴 설명'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> preview<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또는 특정 이야기에만 적용할 수도 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러(예: react, vue3, angular 등)로 your-renderer를 바꿉니다.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta<span class="token punctuation">,</span> StoryObj <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Button'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Button<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Story</span> <span class="token operator">=</span> StoryObj<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Button<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> Basic<span class="token operator">:</span> Story <span class="token operator">=</span> <span class="token punctuation">{</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 👇 이 이야기에는 label 인자가 필요합니다.</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
      control<span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span>
      description<span class="token operator">:</span> <span class="token string">'덮어쓴 설명'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="argtypes" tabindex="-1"><a class="header-anchor" href="#argtypes" aria-hidden="true">#</a> argTypes</h2>
<p>타입:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    control<span class="token operator">?</span><span class="token operator">:</span> ControlType <span class="token operator">|</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> ControlType<span class="token punctuation">;</span> <span class="token comment">/* 자세한 내용은 아래 참조 */</span> <span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    description<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token operator">?</span><span class="token operator">:</span> Conditional<span class="token punctuation">;</span>
    mapping<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>option<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    name<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    options<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    table<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      category<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">summary</span><span class="token operator">:</span> string<span class="token punctuation">;</span> detail<span class="token operator">?</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">;</span>
      disable<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
      subcategory<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
      type<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> summary<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span> detail<span class="token operator">?</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    type<span class="token operator">?</span><span class="token operator">:</span> SBType <span class="token operator">|</span> SBScalarType<span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>argTypes는 args의 이름과 일치하는 키를 가진 객체를 사용하여 구성합니다. 각 키의 값은 다음 속성을 가진 객체입니다:</p>
<h3 id="컨트롤" tabindex="-1"><a class="header-anchor" href="#컨트롤" aria-hidden="true">#</a> 컨트롤</h3>
<p>유형:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">|</span> ControlType 
<span class="token operator">|</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> ControlType<span class="token punctuation">,</span>
    accept<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    labels<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>option<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token punctuation">;</span>
    max<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    min<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
    presetColors<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    step<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">|</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본값:</p>
<ul>
<li><code v-pre>select</code>이면 옵션이 지정됩니다.</li>
<li>그렇지 않으면 유형에서 유추됩니다.</li>
<li>그렇지 않으면 <code v-pre>object</code>입니다.</li>
</ul>
<p>인수에 대한 컨트롤 애드온의 동작을 지정하세요. 문자열을 지정하면 해당 유형으로 컨트롤이 사용됩니다. 객체를 지정하면 추가 구성을 제공할 수 있습니다. false를 지정하면 컨트롤을 렌더링하는 것을 방지합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러에 맞게 'your-renderer'를 렌더러로 교체하세요 (예: react, vue3, angular 등)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token punctuation">{</span>
      control<span class="token operator">:</span> <span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span>
        min<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        max<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        step<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="control-type" tabindex="-1"><a class="header-anchor" href="#control-type" aria-hidden="true">#</a> control.type</h4>
<p>유형: ControlType | null</p>
<p>기본값: 추론됨; 옵션을 지정했을 때 <code v-pre>select</code>; 그렇지 않으면 <code v-pre>object</code>로 되돌아갑니다.</p>
<p>컨트롤 애드온을 사용하여 인수 값을 변경하는 데 사용되는 컨트롤 유형을 지정합니다. 다음은 처리하는 데이터 유형에 따라 그룹화된 사용 가능한 유형인 ControlType입니다:</p>
<h4 id="control-accept" tabindex="-1"><a class="header-anchor" href="#control-accept" aria-hidden="true">#</a> control.accept</h4>
<p>유형: 문자열</p>
<p><code v-pre>file</code>으로 설정하면 허용되는 파일 유형을 지정할 수 있습니다. 값은 쉼표로 구분된 MIME 유형의 문자열이어야 합니다.</p>
<h4 id="control-labels" tabindex="-1"><a class="header-anchor" href="#control-labels" aria-hidden="true">#</a> control.labels</h4>
<p>유형: { [옵션: 문자열]: 문자열 }</p>
<p>옵션을 레이블에 매핑합니다. 레이블은 모두를 포함할 필요는 없습니다. 옵션이 객체의 키에 없다면 원래대로 사용됩니다.</p>
<h4 id="control-max" tabindex="-1"><a class="header-anchor" href="#control-max" aria-hidden="true">#</a> control.max</h4>
<p>유형: 숫자</p>
<p>유형이 <code v-pre>숫자</code> 또는 <code v-pre>범위</code>일 때 허용되는 최대값을 설정합니다.</p>
<h4 id="control-min" tabindex="-1"><a class="header-anchor" href="#control-min" aria-hidden="true">#</a> control.min</h4>
<p>유형: 숫자</p>
<p>유형이 '숫자' 또는 '범위'인 경우 최소 허용 값으로 설정합니다.</p>
<h4 id="control-presetcolors" tabindex="-1"><a class="header-anchor" href="#control-presetcolors" aria-hidden="true">#</a> control.presetColors</h4>
<p>유형: 문자열[]</p>
<p>유형이 <code v-pre>색상</code>인 경우, 일반적인 색상 선택기에 추가로 사용할 수 있는 색상 집합을 정의합니다. 배열 내의 값은 유효한 CSS 색상 값이어야 합니다.</p>
<h4 id="control-step" tabindex="-1"><a class="header-anchor" href="#control-step" aria-hidden="true">#</a> control.step</h4>
<p>유형: 숫자</p>
<p>type이 <code v-pre>number</code> 또는 <code v-pre>range</code> 일 때, 값 증가/감소 시 허용되는 정밀도를 설정합니다.</p>
<h3 id="설명" tabindex="-1"><a class="header-anchor" href="#설명" aria-hidden="true">#</a> 설명</h3>
<p>유형: 문자열</p>
<p>기본값: 추론됨</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용하는 렌더러(예: 리액트, 뷰3, 앵귤러 등)로 your-renderer을(를) 교체하세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">'The value of the slider'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="인수" tabindex="-1"><a class="header-anchor" href="#인수" aria-hidden="true">#</a> 인수</h3>
<p>타입:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token punctuation">{</span>
  <span class="token punctuation">[</span>predicateType<span class="token operator">:</span> <span class="token string">'arg'</span> <span class="token operator">|</span> <span class="token string">'global'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  eq<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  exists<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  neq<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  truthy<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다른 arg 또는 global 값에 따라 argType을 조건부로 렌더링합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러(예: react, vue3, angular 등)로 교체하세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    parent<span class="token operator">:</span> <span class="token punctuation">{</span> control<span class="token operator">:</span> <span class="token string">'select'</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'one'</span><span class="token punctuation">,</span> <span class="token string">'two'</span><span class="token punctuation">,</span> <span class="token string">'three'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 👇 `parent` arg가 존재할 때만 표시됩니다</span>
    parentExists<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span> arg<span class="token operator">:</span> <span class="token string">'parent'</span><span class="token punctuation">,</span> exists<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 👇 `parent` arg가 없을 때만 표시됩니다</span>
    parentDoesNotExist<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span> arg<span class="token operator">:</span> <span class="token string">'parent'</span><span class="token punctuation">,</span> exists<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 👇 `parent` arg 값이 참일 때만 표시됩니다</span>
    parentIsTruthy<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span> arg<span class="token operator">:</span> <span class="token string">'parent'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    parentIsTruthyVerbose<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span> arg<span class="token operator">:</span> <span class="token string">'parent'</span><span class="token punctuation">,</span> truthy<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 👇 `parent` arg 값이 거짓일 때만 표시됩니다</span>
    parentIsNotTruthy<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span> arg<span class="token operator">:</span> <span class="token string">'parent'</span><span class="token punctuation">,</span> truthy<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 👇 `parent` arg 값이 'three'일 때만 표시됩니다</span>
    parentIsEqToValue<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span> arg<span class="token operator">:</span> <span class="token string">'parent'</span><span class="token punctuation">,</span> eq<span class="token operator">:</span> <span class="token string">'three'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 👇 `parent` arg 값이 'three'이 아닌 경우에만 표시됩니다</span>
    parentIsNotEqToValue<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span> arg<span class="token operator">:</span> <span class="token string">'parent'</span><span class="token punctuation">,</span> neq<span class="token operator">:</span> <span class="token string">'three'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// 위의 각 항목은 globalType의 값에도 종속될 수 있습니다.</span>

    <span class="token comment">// 👇 `theme` global이 존재할 때만 표시됩니다</span>
    parentExists<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token keyword">if</span><span class="token operator">:</span> <span class="token punctuation">{</span> global<span class="token operator">:</span> <span class="token string">'theme'</span><span class="token punctuation">,</span> exists<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="매핑" tabindex="-1"><a class="header-anchor" href="#매핑" aria-hidden="true">#</a> 매핑</h3>
<p>유형: { [키: 문자열]: { [옵션: 문자열]: any } }</p>
<p>값에 옵션을 매핑하세요.</p>
<p>원시 값이 아닌 값을 처리할 때 일부 제한에 부딪힐 수 있다는 사실을 알게 될 거예요. 가장 명백한 문제는 모든 값이 URL의 args 매개변수의 일부로 표현될 수 없다는 것이며, 이는 해당 상태를 공유하고 딥링크할 수 있는 능력을 상실하게 합니다. 또한 JSX와 같은 복잡한 값은 (예: Controls 애드온을 포함한) 관리 도구와 미리보기(당신의 이야기) 간에 동기화되지 않을 수 있습니다.</p>
<p>매핑은 모든 경우를 다 다룰 필요는 없어요. 현재 선택된 옵션이 목록에 없다면 그대로 사용됩니다. control.labels과 함께 사용 가능합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 원하는 렌더러로 교체하십시오 (예: react, vue3, angular 등)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    label<span class="token operator">:</span> <span class="token punctuation">{</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'보통'</span><span class="token punctuation">,</span> <span class="token string">'굵게'</span><span class="token punctuation">,</span> <span class="token string">'기울임꼴'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      mapping<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">'굵게'</span><span class="token operator">:</span> <span class="token operator">&lt;</span>b<span class="token operator">></span>굵게<span class="token operator">&lt;</span><span class="token operator">/</span>b<span class="token operator">></span><span class="token punctuation">,</span>
        <span class="token string-property property">'기울임꼴'</span><span class="token operator">:</span> <span class="token operator">&lt;</span>i<span class="token operator">></span>기울임꼴<span class="token operator">&lt;</span><span class="token operator">/</span>i<span class="token operator">></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="이름" tabindex="-1"><a class="header-anchor" href="#이름" aria-hidden="true">#</a> 이름</h3>
<p>타입: 문자열</p>
<p>argTypes 객체는 arg의 이름을 키로 사용합니다. 기본적으로 해당 키는 Storybook에서 argType을 표시할 때 사용됩니다. 표시된 이름을 재정의하려면 name 속성을 지정하면 됩니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    actualArgName<span class="token operator">:</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'친근한 이름'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3>
<p>타입: 문자열 배열</p>
<p>기본값: 추론됨</p>
<p>arg이 일정한 값 집합을 허용하는 경우, 옵션을 사용하여 해당 값들을 지정할 수 있습니다. 만약 그 값들이 JSX 요소와 같이 복잡하다면, 매핑(mapping)을 사용하여 문자열 값으로 매핑할 수 있습니다. control.labels를 사용하여 옵션에 대한 사용자 정의 레이블을 제공할 수도 있습니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러(예: react, vue3, angular 등)로 your-renderer를 대체합니다.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    icon<span class="token operator">:</span> <span class="token punctuation">{</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'arrow-up'</span><span class="token punctuation">,</span> <span class="token string">'arrow-down'</span><span class="token punctuation">,</span> <span class="token string">'loading'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="markdown-형식으로-변경" tabindex="-1"><a class="header-anchor" href="#markdown-형식으로-변경" aria-hidden="true">#</a> Markdown 형식으로 변경</h3>
<p>Type:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  category<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  defaultValue<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    detail<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">summary</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  disable<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  subcategory<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  type<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    detail<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
    <span class="token literal-property property">summary</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기본값: 추정됨</p>
<p>ArgTypes 문서 블록, Controls 문서 블록 및 Controls 애드온 패널에서 인수가 어떻게 문서화되는지 지정하십시오.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러(예: react, vue3, angular 등)로 your-renderer를 교체하세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token punctuation">{</span>
      table<span class="token operator">:</span> <span class="token punctuation">{</span>
        defaultValue<span class="token operator">:</span> <span class="token punctuation">{</span> summary<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        type<span class="token operator">:</span> <span class="token punctuation">{</span> summary<span class="token operator">:</span> <span class="token string">'number'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="테이블-category" tabindex="-1"><a class="header-anchor" href="#테이블-category" aria-hidden="true">#</a> 테이블.category</h4>
<p>유형: 문자열</p>
<p>기본값: 일부 프레임워크에서 추론됨</p>
<p>argType를 카테고리 제목 아래에 표시하고 레이블은 category로 지정합니다.</p>
<h4 id="table-defaultvalue" tabindex="-1"><a class="header-anchor" href="#table-defaultvalue" aria-hidden="true">#</a> table.defaultValue</h4>
<p>유형: { detail?: string; summary: string }</p>
<p>기본값: 추론됨</p>
<p>argType의 문서화된 기본값입니다. summary는 일반적으로 값 자체에 사용되고, detail은 추가 정보에 사용됩니다.</p>
<h4 id="table-disable" tabindex="-1"><a class="header-anchor" href="#table-disable" aria-hidden="true">#</a> table.disable</h4>
<p>유형: 부울(boolean)</p>
<p>argType 행을 테이블에서 제거하려면 true로 설정하세요.</p>
<h4 id="table-subcategory" tabindex="-1"><a class="header-anchor" href="#table-subcategory" aria-hidden="true">#</a> table.subcategory</h4>
<p>종류: 문자열</p>
<p>[argType]은 하위 카테고리 제목 아래에 표시됩니다 ([category] 제목 아래에 표시). 라벨은 subcategory로 지정됩니다.</p>
<h4 id="table-type" tabindex="-1"><a class="header-anchor" href="#table-type" aria-hidden="true">#</a> table.type</h4>
<p>종류: { detail?: 문자열; summary: 문자열 }</p>
<p>기본값: 타입에 따라 유추됨</p>
<p>argType의 문서화된 타입입니다. summary는 일반적으로 타입 자체에 사용되고, detail은 추가 정보에 사용됩니다.</p>
<p>실제 의미를 명시해야 할 경우 type을 대신 사용해야 합니다.</p>
<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>
<p>타입: <code v-pre>boolean</code> | <code v-pre>function</code> | <code v-pre>number</code> | <code v-pre>string</code> | <code v-pre>symbol</code> | SBType</p>
<p>SBType의 전체 타입은 다음과 같습니다:</p>
<p>기본값: 추론됨</p>
<p>argType의 의미있는 타입을 지정합니다. argType가 추론될 때, 다양한 도구에서 가져온 정보가 이 속성에 요약되고 이 정보를 사용하여 제어 및 table.type과 같은 다른 속성을 추론합니다.</p>
<p>만약 당신이 문서화된 유형만 지정하고 싶다면, table.type 대신 사용해야 합니다.</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러(예: react, vue3, angular 등)로 your-renderer를 대체하세요.</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">'number'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defaultvalue" tabindex="-1"><a class="header-anchor" href="#defaultvalue" aria-hidden="true">#</a> defaultValue</h3>
<p>(⛔️ 사용이 중단된 기능)</p>
<p>이렇게 수정하면 됩니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token comment">// 사용 중인 렌더러에 맞게 'your-renderer'를 해당 렌더러로 바꿔주세요 (예: react, vue3, angular 등)</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Meta <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@storybook/your-renderer'</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Example <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Example'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> meta<span class="token operator">:</span> Meta<span class="token operator">&lt;</span><span class="token keyword">typeof</span> Example<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  component<span class="token operator">:</span> Example<span class="token punctuation">,</span>
  argTypes<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// ⛔️ 사용 중단됨, 사용하지 마세요</span>
      defaultValue<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ✅ 대신 이렇게 하세요</span>
  args<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> meta<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
