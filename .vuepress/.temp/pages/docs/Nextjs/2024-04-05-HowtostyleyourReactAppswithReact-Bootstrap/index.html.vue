<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_0.png" alt="React 앱을 React-Bootstrap 스타일링으로 어떻게 만들까요?"></p>
<p>안녕하세요! 이번 튜토리얼에서는 React-Bootstrap 스타일링을 활용하여 기본 React 앱을 만드는 방법을 보여드릴 거예요. 이를 통해 웹사이트 방문자에게 환영받는 느낌을 전달할 수 있어요!</p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>React-Bootstrap은 React를 위한 프론트엔드 스타일링 플러그인으로, 몇 줄의 코드로 미리 스타일이 적용된 컴포넌트를 쉽게 가져와 활용할 수 있게 해줘요. React-Bootstrap의 간단하고 직관적인 라이브러리는 개발하기 쉽고 미적으로 매력적인 프로젝트를 만들 수 있도록 도와줍니다. 이 프레임워크는 많은 전통적 JavaScript 프로젝트에서 사용되는 오픈 소스 Bootstrap CSS 프레임워크의 구조를 크게 따르고 있어요. (더 많은 정보는 여기에서 전통적 Bootstrap 링크에서 확인할 수 있어요).</p>
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
<h1 id="설정" tabindex="-1"><a class="header-anchor" href="#설정" aria-hidden="true">#</a> 설정</h1>
<p>이 설정 튜토리얼은 현재 컴퓨터에 npm이 설치되어 있는 것으로 가정합니다. 그렇지 않은 경우 공식 npm 문서를 참조할 수 있습니다. 이 시점부터는 npm을 사용하여 react-bootstrap 패키지를 설치해야만 스타일 지침과 내장 기능을 활용할 수 있습니다.</p>
<p>npx와 react가 설치되어 있다고 가정하면 선택한 코드 편집기 또는 IDE를 열어야 합니다 (본 문서에서는 구문 강조 기능이 설치된 Visual Studio Code를 사용할 예정입니다).</p>
<p>먼저, 코드 편집기에서 새 터미널을 엽니다. 프레임워크의 기능을 테스트하기 위해 새로운 React 프로젝트를 생성해볼까요? 다음 명령을 입력하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app react<span class="token operator">-</span>bootstrap<span class="token operator">-</span>demo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이제 새로 만든 프로젝트 폴더를 편집기에서 열어야 합니다. 동일한 터미널에서 이 디렉토리로 이동하고 다음 명령을 입력하여 React Bootstrap을 위한 노드 모듈을 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd react<span class="token operator">-</span>bootstrap<span class="token operator">-</span>demo\
npm install react<span class="token operator">-</span>bootstrap bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이 단계에서 프레임워크를 프로젝트에 실제로 가져올 수 있습니다. 'index.js' 파일을 편집하고 파일의 시작 부분에 다음을 추가하세요:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'bootstrap/dist/css/bootstrap.min.css'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(이 import 문을 App.js와 같은 랜딩 페이지 컴포넌트에 추가하는 것이 좋습니다).</p>
<h1 id="버튼-및-폼" tabindex="-1"><a class="header-anchor" href="#버튼-및-폼" aria-hidden="true">#</a> 버튼 및 폼</h1>
<p>가장 먼저, 우리의 예제 애플리케이션에는 거의 모든 웹사이트와 웹 앱에서 사용되는 컴포넌트가 추가될 것입니다: 버튼! 이 컴포넌트는 이미 표준 HTML을 통해 간단하게 통합할 수 있지만 CSS를 향상시키기 위해 전용 클래스나 ID를 추가해야 합니다. React Bootstrap을 통해 색상, 외곽선, 크기 조절을 쉽게 할 수 있으며 많은 양의 텍스트 없이 인라인으로 처리할 수 있습니다. 첫 번째 단계는 import 문입니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Button'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, 반환된 HTML에 Button의 인스턴스를 삽입해야 합니다. 버튼 사이에 공간을 두기 위해 따옴표로 묶은 대괄호를 권장합니다. 그런 다음 버튼의 variant를 애플리케이션의 스킴에 맞게 변경해야 합니다. Variants로는 primary, secondary, success, warning, danger, info 등이 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>Primary Example<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"secondary"</span><span class="token operator">></span>Secondary Example<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"warning"</span><span class="token operator">></span>Warning Example<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_1.png" />
```
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
<p>앞서 언급된 변형 디자이너들은 응용프로그램에 다채로운 색상을 제공하고 있어요. 그런데 만약 버튼의 외곽선만을 원하고, 마우스가 호버되었을 때 색상이 나타나게 하고 싶다면 어떨까요? 이는 변형 유형을 'outline'로 수정하여 다음과 같이 구현할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"outline-primary"</span><span class="token operator">></span>Primary Example<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"outline-secondary"</span><span class="token operator">></span>Secondary Example<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token punctuation">{</span><span class="token string">' '</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"outline-warning"</span><span class="token operator">></span>Warning Example<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_2.png" />
<p>가장 최근에 클릭된 것을 나타내는 버튼 세트가 필요하다면 어떨까요? React 상태와 라디오 버튼을 사용하여 이를 수행할 수 있어요. 이를 위해 몇 가지 추가적인 import 문이 필요합니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Button'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ButtonGroup <span class="token keyword">from</span> <span class="token string">'react-bootstrap/ButtonGroup'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ToggleButton <span class="token keyword">from</span> <span class="token string">'react-bootstrap/ToggleButton'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이러한 것들은 각 버튼의 상태를 추적하고, 버튼을 그룹화하며, 스타일 변경을 보여주기 위해 토글하는 데 도움이 될 것입니다. 그런 다음, React 버튼 구성 요소 내에 다음 내용을 포함하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>radioValue<span class="token punctuation">,</span> setRadioValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> radios <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Active'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Radio'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Radio'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'3'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>radioValue와 setRadioValue를 사용하여 각 버튼의 값을 추적하고 필요할 때 변경할 수 있습니다. radios 변수를 사용하여 다음 예제에서 각 버튼을 매핑할 수 있습니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>ButtonGroup<span class="token operator">></span>
    <span class="token punctuation">{</span>radios<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">radio<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ToggleButton
        key<span class="token operator">=</span><span class="token punctuation">{</span>idx<span class="token punctuation">}</span>
        id<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">radio-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>idx<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span>
        type<span class="token operator">=</span><span class="token string">"radio"</span>
        variant<span class="token operator">=</span><span class="token punctuation">{</span>idx <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">?</span> <span class="token string">'outline-success'</span> <span class="token operator">:</span> <span class="token string">'outline-danger'</span><span class="token punctuation">}</span>
        name<span class="token operator">=</span><span class="token string">"radio"</span>
        value<span class="token operator">=</span><span class="token punctuation">{</span>radio<span class="token punctuation">.</span>value<span class="token punctuation">}</span>
        checked<span class="token operator">=</span><span class="token punctuation">{</span>radioValue <span class="token operator">===</span> radio<span class="token punctuation">.</span>value<span class="token punctuation">}</span>
        onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setRadioValue</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
        <span class="token punctuation">{</span>radio<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ToggleButton<span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ButtonGroup<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드 조각은 각 버튼을 반복하는 것으로, 이름이 'radio'이고 idx가 각 버튼의 'value'인 경우입니다. 이렇게 하면 각 버튼마다 고유한 id가 제공됩니다. 버튼의 변형은 중간 버튼과 구별하기 위해 첫 번째와 세 번째 버튼에 다른 스타일을 적용하여 모두 고유한 라디오 버튼 그룹임을 보여줍니다. 'checked'는 현재 '1' 값을 갖는 버튼을 평가하고 'onChange'는 새 버튼을 클릭할 때 라디오 버튼의 값을 '1'로 변경합니다. 아래에 있는 것이 라디오 버튼이 보여야 하는 모습입니다:</p>
<img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_3.png" />
<p>좋아요! 이제 첫 번째 컴포넌트를 실용적인 애플리케이션에 통합해 봅시다. 전통적인 HTML 폼 컨테이너는 사용자 데이터를 수집하고 정보를 서버로 보내는 데 여러 가지 요소를 포함합니다. React Bootstrap 폼도 약간의 구문 조정을 통해 거의 동일하게 작동합니다. 시작하려면 다음과 같이 추가 컴포넌트 클래스를 가져와야 합니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Form <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Form'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음으로, 컴포넌트 내에서 <code v-pre>Form</code> 요소의 인스턴스를 생성해야합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Form<span class="token operator">></span>       
<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 사용자의 텍스트 입력 필드, 버튼 및 드롭다운 메뉴와 같은 모든 요소를 보유할 것입니다. 다음으로, 단일 텍스트 입력란과 폼을 제출하는 버튼을 추가할 것입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Form<span class="token operator">></span>
<span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Group controlId<span class="token operator">=</span><span class="token string">"formBasicName"</span><span class="token operator">></span>
       <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Label<span class="token operator">></span>이름을 입력하세요<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Label<span class="token operator">></span>
       <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Control type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"여기에 이름을 입력해주세요"</span> <span class="token operator">/</span><span class="token operator">></span>
       <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Text className<span class="token operator">=</span><span class="token string">"text-muted"</span><span class="token operator">></span>
             여기에 어떤 면책 조항 텍스트를 넣어주세요<span class="token operator">!</span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Text<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Group<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"primary"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>
       제출
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_4.png" />
<p><code v-pre>Form.Control</code> 요소의 목적은 주어진 <code v-pre>Form.Group</code> 내에서 그 다음에 나오는 요소들을 직접 렌더링하여 <code v-pre>input</code>과 같은 표준 HTML 컨테이너를 대체하는 것입니다. 특정 필드를 어떤 이유로 인해 비활성화해야 하는 경우, 비활성화될 예정인 그룹을 단순히 아래와 같이 <code v-pre>fieldset</code> 컨테이너로 감싸기만 하면 됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Form<span class="token operator">></span>
<span class="token operator">&lt;</span>fieldset disabled<span class="token operator">></span>
       <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Group controlId<span class="token operator">=</span><span class="token string">"formBasicName"</span><span class="token operator">></span>
             <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Label<span class="token operator">></span>이름을 입력하세요<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Label<span class="token operator">></span>
                  <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Control type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"여기에 이름을 입력해주세요"</span> <span class="token operator">/</span><span class="token operator">></span>
                 <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Text className<span class="token operator">=</span><span class="token string">"text-muted"</span><span class="token operator">></span>
                   여기에 어떤 면책 조항 텍스트를 넣어주세요<span class="token operator">!</span>
                 <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Text<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token punctuation">.</span>Group<span class="token operator">></span>
   <span class="token operator">&lt;</span><span class="token operator">/</span>fieldset<span class="token operator">></span>
      <span class="token operator">&lt;</span>Button variant<span class="token operator">=</span><span class="token string">"primary"</span> type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>
       제출
      <span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_5.png" />
<h1 id="carousel-컴포넌트" tabindex="-1"><a class="header-anchor" href="#carousel-컴포넌트" aria-hidden="true">#</a> 'Carousel' 컴포넌트</h1>
<p>이제 React에서 캐러셀 컴포넌트를 사용하는 방법을 배우게 될 거에요. 이 컴포넌트는 이미지 슬라이드 덱과 유사하게 작동하며 사용자가 각 슬라이드마다 헤더 텍스트와 함께 이미지 간을 전환할 수 있어요.</p>
<p>이 새로운 컴포넌트를 더 잘 구성하기 위해 독립적인 .jsx 파일로 분리하는 것이 좋아요. 저희는 이를 'Carousel.jsx'로 간단히 명명하고 CSS 파일인 'Carousel.module.css'에서 추가 스타일링 규칙을 가져왔어요. React Bootstrap으로부터의 모든 컴포넌트와 마찬가지로 첫 번째 단계는 이를 import 하는 것이에요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Carousel <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Carousel'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>Form</code> 컴포넌트 작업 방식과 비슷하게 캐러셀 내에 표시 및 조작할 모든 항목은 부모 <code v-pre>Carousel</code> 태그 안에 중첩되어 있어야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Carousel<span class="token operator">></span>     
<span class="token operator">&lt;</span><span class="token operator">/</span>Carousel<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>캐러셀에 &quot;슬라이드&quot;를 추가하려면 <code v-pre>Carousel.Item</code> 태그를 추가해야 합니다. 일반적으로 이 안에 이미지 및 이미지 위에 배치할 텍스트 두 부분이 포함됩니다. 아이템 내에 <code v-pre>img</code> 태그와 <code v-pre>Carousel.Caption</code> 태그를 추가하여 첫 번째 슬라이드를 만드세요!</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>카루셀<span class="token operator">></span>
      <span class="token operator">&lt;</span>카루셀<span class="token punctuation">.</span>항목<span class="token operator">></span>
        <span class="token operator">&lt;</span>이미지 src <span class="token operator">=</span> <span class="token string">'https://upload.wikimedia.org/wikipedia/commons/5/5d/Green_Grotto_Caves_-_Jamaica.jpg'</span> alt<span class="token operator">=</span><span class="token string">'동굴1'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>이미지<span class="token operator">></span>
        <span class="token operator">&lt;</span>카루셀<span class="token punctuation">.</span>캡션<span class="token operator">></span>
          <span class="token operator">&lt;</span>h3<span class="token operator">></span>예시 헤더<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
          <span class="token operator">&lt;</span>p<span class="token operator">></span>예시 서브텍스트<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>카루셀<span class="token punctuation">.</span>캡션<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>카루셀<span class="token punctuation">.</span>항목<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>카루셀<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>아래에 표시된 결과와 유사한 결과로 이어져야 합니다:</p>
<img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_6.png" />
<p>코드 스니펫의 캡션 태그에 나타나는 것처럼 헤더 및 서브헤더 텍스트에 여러 가지 변형을 추가하여 추가할 수 있습니다. 이 예제는 태그를 새로운 구성 요소로 래핑하여 웹 앱에 세련된 기능을 추가할 때 React Bootstrap이 제공하는 간단함을 입증합니다. 이제 프레임워크에서 더 복잡한 기능을 살펴보겠습니다.</p>
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
<h1 id="navbar-구성요소" tabindex="-1"><a class="header-anchor" href="#navbar-구성요소" aria-hidden="true">#</a> 'Navbar' 구성요소</h1>
<p>웹 앱 내 모든 페이지에서 공유되는 구성 요소가 있으면 어떨까요? 이것은 내비게이션 바가 위치할 완벽한 장소가 됩니다. 이전에 논의한 구성 요소들과 마찬가지로, 첫 번째 단계는 필요한 import 문을 추가하는 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Container <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Container'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Nav <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Nav'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Navbar <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Navbar'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-router-dom'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이를 통해 각 항목이 다른 페이지나 구성 요소로 이동하는 클릭 가능한 링크가 되는 내비게이션 바를 쉽게 만들 수 있습니다. 이 내비게이션 바를 앱 전체에서 공유하려면 이를 별도의 React 파일에 중첩시켜야 합니다 ('Navbar.jsx' 파일이 우리의 것입니다). 여기서 &quot;react-router-dom&quot; 패키지를 사용하고 있는데, 이를 통해 사용자가 Link 구성 요소를 클릭하고 페이지 일부가 새로 고쳐지는 동안 페이지를 다시로드하지 않을 수 있습니다. 패키지의 전체 구성을 보려면 설명서나 src 폴더의 index.js 및 App.js를 참고하세요.</p>
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
<p>내비게이션 바에 표시할 모든 항목은 다음과 같이 <code v-pre>Navbar</code> 컴포넌트 내에 중첩되어야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Navbar expand<span class="token operator">=</span><span class="token string">"lg"</span> className<span class="token operator">=</span><span class="token string">"bg-body-tertiary"</span> sticky<span class="token operator">=</span><span class="token string">"top"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>추가된 'expand', 'className', 'sticky' 태그는 전통적인 전체 너비의 내비게이션 바를 화면 상단에 부착하면서 애플리케이션 전반에 걸쳐 탐색할 수 있도록 합니다. 내비게이션 바 내 모든 항목을 한 행에 정렬하는 것이 안전하고 전통적이므로 모든 자식 요소를 보유하는 <code v-pre>Container</code> 태그도 추가해야 합니다.</p>
<p>간단하게 시작해서 내비게이션 바에 링크를 구현해 보겠습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Navbar expand<span class="token operator">=</span><span class="token string">"lg"</span> className<span class="token operator">=</span><span class="token string">"bg-body-tertiary"</span> sticky<span class="token operator">=</span><span class="token string">"top"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Container<span class="token operator">></span>
        <span class="token operator">&lt;</span>Nav<span class="token operator">></span>
          <span class="token operator">&lt;</span>Nav<span class="token punctuation">.</span>Link <span class="token keyword">as</span><span class="token operator">=</span><span class="token punctuation">{</span>Link<span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>Nav<span class="token punctuation">.</span>Link<span class="token operator">></span>
          <span class="token operator">&lt;</span>Nav<span class="token punctuation">.</span>Link <span class="token keyword">as</span><span class="token operator">=</span><span class="token punctuation">{</span>Link<span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token string">"/myform"</span><span class="token operator">></span>내 폼<span class="token operator">&lt;</span><span class="token operator">/</span>Nav<span class="token punctuation">.</span>Link<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Nav<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_7.png" />
<p>이 예제는 쉽게 이해할 수 있습니다. 그러나 이 컴포넌트가 제공하는 다른 기능은 무엇일까요? '브랜드', '드롭다운'과 같은 나란히 구현된 컴포넌트에 대한 다중 하위 요소가 있습니다. 내비게이션 바 뒤로 콘텐츠가 축소되도록 하려면 <code v-pre>Navbar.Toggle</code> 및 <code v-pre>Navbar.Collapse</code> 컴포넌트를 삽입할 수도 있습니다.</p>
<p>이러한 항목들을 함께 사용하여 사용자 정의 내비게이션 바를 만들어보겠습니다. 앱의 브랜드, 간단한 링크, 링크가 포함된 드롭다운 메뉴 및 검색 기능으로 작동하는 폼 요소를 표시할 것입니다. 먼저 일부 추가로 가져와야 할 구성 요소가 필요합니다:```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> NavDropdown <span class="token keyword">from</span> <span class="token string">'react-bootstrap/NavDropdown'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Form <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Form'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Button'</span><span class="token punctuation">;</span>
Row <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Row'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Col <span class="token keyword">from</span> <span class="token string">'react-bootstrap/Col'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 이것들을 네비게이션 바에 넣는다면, 최종 결과물은 다음과 같을 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Navbar expand<span class="token operator">=</span><span class="token string">"lg"</span> className<span class="token operator">=</span><span class="token string">"bg-body-tertiary"</span> sticky<span class="token operator">=</span><span class="token string">"top"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Container<span class="token operator">></span>
        <span class="token operator">&lt;</span>Navbar<span class="token punctuation">.</span>Brand<span class="token operator">></span>React<span class="token operator">-</span>Bootstrap 데모<span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token punctuation">.</span>Brand<span class="token operator">></span>
        <span class="token operator">&lt;</span>Navbar<span class="token punctuation">.</span>Toggle aria<span class="token operator">-</span>controls<span class="token operator">=</span><span class="token string">"basic-navbar-nav"</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>Navbar<span class="token punctuation">.</span>Collapse id<span class="token operator">=</span><span class="token string">"basic-navbar-nav"</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>Nav<span class="token operator">></span>
            <span class="token operator">&lt;</span>Nav<span class="token punctuation">.</span>Link <span class="token keyword">as</span><span class="token operator">=</span><span class="token punctuation">{</span>Link<span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>Nav<span class="token punctuation">.</span>Link<span class="token operator">></span>
            <span class="token operator">&lt;</span>Nav<span class="token punctuation">.</span>Link <span class="token keyword">as</span><span class="token operator">=</span><span class="token punctuation">{</span>Link<span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token string">"/myform"</span><span class="token operator">></span>내 폼<span class="token operator">&lt;</span><span class="token operator">/</span>Nav<span class="token punctuation">.</span>Link<span class="token operator">></span>
            <span class="token operator">&lt;</span>NavDropdown title<span class="token operator">=</span><span class="token string">"드롭다운 메뉴"</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>NavDropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
              <span class="token operator">&lt;</span>Nav<span class="token punctuation">.</span>Link <span class="token keyword">as</span><span class="token operator">=</span><span class="token punctuation">{</span>Link<span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token string">"/myform"</span><span class="token operator">></span>내 폼<span class="token operator">&lt;</span><span class="token operator">/</span>Nav<span class="token punctuation">.</span>Link<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>NavDropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
              <span class="token operator">&lt;</span>NavDropdown<span class="token punctuation">.</span>Divider <span class="token operator">/</span><span class="token operator">></span>
              <span class="token operator">&lt;</span>NavDropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
              <span class="token operator">&lt;</span>Nav<span class="token punctuation">.</span>Link <span class="token keyword">as</span><span class="token operator">=</span><span class="token punctuation">{</span>Link<span class="token punctuation">}</span> to<span class="token operator">=</span><span class="token string">"/"</span><span class="token operator">></span>홈<span class="token operator">&lt;</span><span class="token operator">/</span>Nav<span class="token punctuation">.</span>Link<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>NavDropdown<span class="token punctuation">.</span>Item<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>NavDropdown<span class="token operator">></span>
            <span class="token operator">&lt;</span>Form inline<span class="token operator">></span>
              <span class="token operator">&lt;</span>Row<span class="token operator">></span>
                <span class="token operator">&lt;</span>Col xs<span class="token operator">=</span><span class="token string">"auto"</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>Form<span class="token punctuation">.</span>Control type<span class="token operator">=</span><span class="token string">"text"</span> placeholder<span class="token operator">=</span><span class="token string">"검색 바"</span><span class="token operator">/</span><span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">></span>
                <span class="token operator">&lt;</span>Col xs<span class="token operator">=</span><span class="token string">"auto"</span><span class="token operator">></span>
                  <span class="token operator">&lt;</span>Button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>검색 버튼<span class="token operator">&lt;</span><span class="token operator">/</span>Button<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>Form<span class="token operator">></span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>Nav<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token punctuation">.</span>Collapse<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Container<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Navbar<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>처음에는 복잡해 보일 수 있지만, 개별 항목 기능과 링크로 분해하면 이것이 어떻게 출력되는지 이해하는 데 도움이 됩니다:```</p>
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
<img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_8.png" />
<p>여기에서 React Bootstrap을 React Router와 함께 사용하려면, &quot;as&quot; 속성에 Link 구성 요소를 전달해야 하며, &quot;to&quot; 속성의 URL은 React Router에 의해 결정된 상대 경로가 됩니다.</p>
<p>이 예제에서 사용된 구성 요소에 대한 추가 정보 링크는 게시물의 끝에 위치하게 될 것입니다.</p>
<h1 id="페이지에-진행-표시-막대-구현하기" tabindex="-1"><a class="header-anchor" href="#페이지에-진행-표시-막대-구현하기" aria-hidden="true">#</a> 페이지에 '진행 표시 막대' 구현하기</h1>
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
<p>이제 사이트에 매력적인 추가 사례로 더 엄밀한 예제를 살펴보겠습니다. 이를 위해 프레임워크 내에서 프로그래스 바 구성 요소를 살펴볼 것입니다. 이전 컴포넌트 가져오기와 동일하게, 문서 상단에 다음을 추가해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ProgressBar <span class="token keyword">from</span> <span class="token string">'react-bootstrap/ProgressBar'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>프로그래스 바의 &quot;progress&quot; 부분은 일정한 숫자 값에 의해 정의될 것입니다. 이 값은 정적으로 설정되거나 변수에 기반을 둘 수 있습니다. 먼저, 고정된 값 사용 시 어떻게 나타나는지 살펴보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> scrollPos <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token operator">&lt;</span>ProgressBar className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>progressBar<span class="token punctuation">}</span> now<span class="token operator">=</span><span class="token punctuation">{</span>scrollPos<span class="token punctuation">}</span> animated<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
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
<img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_9.png" />
<p>여기를 보면 페이지의 스크롤 위치에 관계없이 진행 막대의 상태가 '진행 수준'에 고정됨을 알 수 있습니다. 그렇다면 이 기능에 동적 속성을 부여해 볼까요?</p>
<p>먼저 페이지를 스크롤하는 동안 진행 막대가 화면에 고정되도록 해야 합니다. 아래와 같이 새 .css 파일에 명시적인 속성을 추가하여 이를 권장합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>progressBar <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 100vw<span class="token punctuation">;</span>
    <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음으로, 주어진 웹페이지의 스크롤 위치를 기반으로 이벤트 리스너를 설정하기 위해 일반 리액트의 ‘useEffect’ 훅을 활용할 것입니다. 이제 import 문은 다음과 같이 수정되어야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ProgressBar <span class="token keyword">from</span> <span class="token string">'react-bootstrap/ProgressBar'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">'../Common/ScrollProgressBar.module.css'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그 다음으로는 좌표 변수를 기반으로한 웹페이지의 상태를 추적해야 합니다. 컴포넌트 함수 내에 다음을 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> setY<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>scrollY<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>scrollPos<span class="token punctuation">,</span> setScrollPos<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>마침내 프로그래스 바 내의 값 변경을 위해 useEffect() 함수를 'scroll' 작업을 기반으로 구현해야 합니다. 아래와 같이 약간 복잡합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token comment">// 창 스크롤 이벤트 리스너 설정</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">scrollEventLis</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setY</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>scrollY<span class="token punctuation">)</span>
    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> scrollEventLis<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> scrollEventLis<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> e <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">setScrollPos</span><span class="token punctuation">(</span>y<span class="token operator">/</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>clientHeight<span class="token operator">-</span>window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">)</span>


  <span class="token keyword">return</span> <span class="token operator">&lt;</span>ProgressBar className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>progressBar<span class="token punctuation">}</span> now<span class="token operator">=</span><span class="token punctuation">{</span>scrollPos<span class="token punctuation">}</span> animated<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 결과로 사용자가 페이지를 스크롤한 위치에 따라 자동으로 조절되는 프로그래스 바가 생성됩니다:</p>
<img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_10.png" />
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
<img src="@source/docs/Nextjs/2024-04-05-HowtostyleyourReactAppswithReact-Bootstrap/img/HowtostyleyourReactAppswithReact-Bootstrap_11.png" />
<p>참고: 이러한 컴포넌트를 구현한 최종 결과물에 대해 궁금하다면, 이 게시물 전체에 표시된 웹 앱에 대한 리포지토리 링크를 제공해드립니다:</p>
<p>csci5117s24/the-flask-fusion-force-tech-share (github.com)</p>
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
<p>이전에 표시된 예제들은 React Bootstrap 프레임워크의 일부 기본 기능을 보여주기 위해 제공되었습니다. 일반적으로, 이 프레임워크는 개발자가 명시적인 CSS로 작성해야 하는 번거로운 작업을 통합하여 웹 응용 프로그램에 아름다운 구성 요소를 통합할 수 있도록 합니다. 이러한 기능은 웹 응용 프로그램에서 스타일링 구성 요소를 활용하는 데 훨씬 간편함을 제공하지만 전체 앱을 빌드하는 데 이르지는 않습니다. 이제부터는 기능성 웹 앱을 만들기 위해 다른 기사들과 웹 개발 기술을 알아보는 시간을 할애해야 합니다. 이 글의 마지막에는 사용자 경험을 향상시키고 주어진 애플리케이션을 유지하는 데 권장되는 기술 목록이 포함될 것입니다.</p>
<p>추가 자료:</p>
<p>React-Bootstrap 메인 웹사이트: https://react-bootstrap.netlify.app/</p>
<p>React 라우터 기능: https://reactrouter.com/en/main/start/tutorial</p>
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
<p>부가적인 리액트 부트스트랩 컴포넌트: <a href="https://react-bootstrap.netlify.app/docs/components/accordion/" target="_blank" rel="noopener noreferrer">https://react-bootstrap.netlify.app/docs/components/accordion/<ExternalLinkIcon/></a></p>
</div></template>
