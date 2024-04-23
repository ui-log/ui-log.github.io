<template><div><h2 id="사용자-정의-입력과-버튼을-활용한-양식-디자인-최적화" tabindex="-1"><a class="header-anchor" href="#사용자-정의-입력과-버튼을-활용한-양식-디자인-최적화" aria-hidden="true">#</a> 사용자 정의 입력과 버튼을 활용한 양식 디자인 최적화</h2>
<img src="@source/docs/Tech/2024-04-19-ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS/img/ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS_0.png" />
<p>온라인 애플리케이션과 웹사이트는 사용자가 시스템과 데이터를 입력하기 위한 방법을 제공하기 때문에 양식이 필요합니다. 그러나 기본적인 양식 요소는 디자인과 기능 측면에서 제약이 있을 수 있으며, 이는 사용자 경험에 부정적인 영향을 미칠 수 있습니다.</p>
<p>여기서 사용자 정의 입력 디자인이 중요합니다. 양식에 대한 사용자 정의 입력과 버튼을 디자인함으로써 사용자 경험을 개선하고 보다 매력적이고 직관적인 인터페이스를 만들 수 있습니다. 사용자 정의 입력과 버튼을 통해 웹사이트나 애플리케이션의 브랜딩에 맞는 디자인을 수정하고, 사용자가 양식 작성 프로세스를 보다 원활하게 진행할 수 있도록 지원할 수 있습니다.</p>
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
<p>이 글에서는 React 양식을 위해 재사용 가능한 사용자 정의 입력란과 버튼을 만들 것입니다. 주요 목표는 아이콘이 포함된 입력란과 비밀번호 필드 및 텍스트 값을 볼 수 있는 토글 버튼을 만드는 것입니다.</p>
<p>최종 결과물은 다음과 같이 보일 것입니다:</p>
<p><img src="@source/docs/Tech/2024-04-19-ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS/img/ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS_1.png" alt="React Form Design"></p>
<p>그리고 &quot;눈&quot; 버튼을 클릭하면 입력의 상태가 &quot;비밀번호&quot;에서 &quot;텍스트&quot;로 토글되어 사용자가 어떤 값을 보고 있는지 볼 수 있습니다.</p>
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
<h2 id="입력-필드-생성하기" tabindex="-1"><a class="header-anchor" href="#입력-필드-생성하기" aria-hidden="true">#</a> 입력 필드 생성하기:</h2>
<p>먼저 component 라는 폴더를 만들고 그 안에 CustomInput.jsx 라는 파일을 만듭니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">const</span> <span class="token function-variable function">CustomInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"input_wrapp"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>input
                    type<span class="token operator">=</span><span class="token punctuation">{</span>type<span class="token punctuation">}</span>
                    placeholder<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>placeholder<span class="token punctuation">}</span>
                    value<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span>
                    onChange<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>
                    name<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                <span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> CustomInput 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 사용자 정의 입력 컴포넌트는 입력 유형, 플레이스홀더 텍스트, 값, onChange 함수 및 이름을 포함한 여러 속성을 받습니다. 이 CustomInput을 앱 어디에서든 가져와서 사용할 수 있으며, 속성으로 이름을 포함하기 때문에 네이티브 Input 태그처럼 작동합니다.</p>
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
<h2 id="입력란에-아이콘-추가하기" tabindex="-1"><a class="header-anchor" href="#입력란에-아이콘-추가하기" aria-hidden="true">#</a> 입력란에 아이콘 추가하기:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">const</span> <span class="token function-variable function">CustomInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"input_wrapp"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'input_container'</span><span class="token operator">></span>
                    <span class="token punctuation">{</span>props<span class="token punctuation">.</span>icon <span class="token operator">&amp;&amp;</span>
                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"input_icon"</span><span class="token operator">></span>
                            <span class="token punctuation">{</span>props<span class="token punctuation">.</span>icon<span class="token punctuation">}</span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token punctuation">}</span>

                    <span class="token operator">&lt;</span>input
                        type<span class="token operator">=</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span>
                        placeholder<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>placeholder<span class="token punctuation">}</span>
                        value<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span>
                        onChange<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>
                        name<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                    <span class="token operator">/</span><span class="token operator">></span>

                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> CustomInput 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>여기서 input 필드에 input_container 라는 또 다른 div를 만들었고 App.css 파일에 CSS 스타일링을 추가했습니다. 그리고 렌더링 중에 사용하고 싶은 선택적인 {props.icon}을 지정했습니다.</p>
<p>이제 이 CustomInput 컴포넌트를 앱에서 사용할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./App.css'</span>
<span class="token keyword">import</span> CustomInput <span class="token keyword">from</span> <span class="token string">'./components/CustomInput'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineMail<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-icons/ai'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>main<span class="token operator">></span>
        <span class="token operator">&lt;</span>form <span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiOutlineMail <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'text'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'이메일을 입력하세요'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CustomInput을 가져와서 아이콘으로 AiOutlineMail을 설정했어요. 여기에서는 react-icons 라이브러리를 사용하고 있지만, 원하는 라이브러리를 사용할 수 있어요.</p>
<img src="@source/docs/Tech/2024-04-19-ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS/img/ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS_2.png" />
<p>이 아이콘으로 쓸만하고 사용자 친화적으로 보여요.
간단한 텍스트 타입을 위한 커스텀 입력을 생성했으니 이제 비밀번호 타입을 받도록 코드를 수정하고 아이콘을 조건부로 토글해봐요.```</p>
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
<h2 id="패스워드-토글-아이콘-추가" tabindex="-1"><a class="header-anchor" href="#패스워드-토글-아이콘-추가" aria-hidden="true">#</a> 패스워드 토글 아이콘 추가:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineEye<span class="token punctuation">,</span> AiOutlineEyeInvisible <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-icons/ai'</span>

<span class="token keyword">const</span> <span class="token function-variable function">CustomInput</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> <span class="token punctuation">[</span>showPassword<span class="token punctuation">,</span> setShowPassword<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleTogglePassword</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setShowPassword</span><span class="token punctuation">(</span><span class="token operator">!</span>showPassword<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"input_wrapp"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'input_container'</span><span class="token operator">></span>
                    <span class="token punctuation">{</span>props<span class="token punctuation">.</span>icon <span class="token operator">&amp;&amp;</span>
                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"input_icon"</span><span class="token operator">></span>
                            <span class="token punctuation">{</span>props<span class="token punctuation">.</span>icon<span class="token punctuation">}</span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token punctuation">}</span>

                    <span class="token operator">&lt;</span>input
                        type<span class="token operator">=</span><span class="token punctuation">{</span>showPassword <span class="token operator">?</span> <span class="token string">'text'</span> <span class="token operator">:</span> props<span class="token punctuation">.</span>type<span class="token punctuation">}</span>
                        placeholder<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>placeholder<span class="token punctuation">}</span>
                        value<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span>
                        onChange<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onChange<span class="token punctuation">}</span>
                        name<span class="token operator">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span>
                    <span class="token operator">/</span><span class="token operator">></span>
                    <span class="token punctuation">{</span>
                        props<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'password'</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>
                            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"input_icon"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleTogglePassword<span class="token punctuation">}</span><span class="token operator">></span>
                                <span class="token punctuation">{</span>showPassword <span class="token operator">?</span> <span class="token operator">&lt;</span>AiOutlineEye <span class="token operator">/</span><span class="token operator">></span> <span class="token operator">:</span> <span class="token operator">&lt;</span>AiOutlineEyeInvisible <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
                            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                        <span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> CustomInput 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 보시다시피, 입력란의 타입을 조건부로 설정하고 있습니다. 입력 타입이 &quot;password&quot;로 설정된 경우 입력란에 패스워드 가시성 토글 아이콘이 추가됩니다. 이는 입력 타입이 &quot;password&quot;와 같은지를 확인하는 조건문을 사용하여 구현되었습니다. 입력 타입이 &quot;password&quot;와 동일한 경우 “input_icon”이라는 클래스명의 추가적인 <code v-pre>div</code> 요소가 생성되고, React-icons 패키지를 사용하여 이 요소에 눈 아이콘이 추가됩니다.</p>
<p>패스워드 가시성 토글 아이콘을 클릭하면 handleTogglePassword 함수가 호출됩니다. 이 함수는 패스워드가 표시되는지 숨겨지는지를 결정하는 showPassword 상태 변수의 값을 토글합니다. showPassword 변수의 값은 입력 필드의 타입을 결정하는 데 사용됩니다. showPassword가 true이면 입력 필드가 “text”로 설정되어 패스워드가 표시됩니다. false이면 입력 필드가 “password”로 설정되어 패스워드가 숨겨집니다.</p>
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
<p>이제 이 사용자 정의 입력 구성 요소를 사용하여 양식을 만들 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./App.css'</span>
<span class="token keyword">import</span> CustomInput <span class="token keyword">from</span> <span class="token string">'./components/CustomInput'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineMail<span class="token punctuation">,</span> AiFillLock<span class="token punctuation">,</span> AiOutlineUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-icons/ai'</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>main<span class="token operator">></span>
        <span class="token operator">&lt;</span>form <span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiOutlineUser <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'text'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'사용자 이름을 입력하세요'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiOutlineUser <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'text'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'비즈니스 이름을 입력하세요'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiOutlineMail <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'text'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'이메일을 입력하세요'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiFillLock <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'password'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'비밀번호를 입력하세요'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<img src="@source/docs/Tech/2024-04-19-ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS/img/ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS_3.png" />
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
<p>우리 양식은 사용자 정의 입력란이 준비되었고 이제 앱 브랜딩과 일치하는 사용자 정의 버튼을 만들 수 있습니다.</p>
<h2 id="사용자-정의-버튼-만들기" tabindex="-1"><a class="header-anchor" href="#사용자-정의-버튼-만들기" aria-hidden="true">#</a> 사용자 정의 버튼 만들기:</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">const</span> <span class="token function-variable function">FormButton</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token operator">...</span>props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">'form_btn'</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">'submit'</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>btnText<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> FormButton
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Components 폴더에 FormButton이라는 파일을 만들었습니다.<br>
이 컴포넌트는 'form_btn' 클래스 이름을 가진 <code v-pre>div</code> 요소를 반환하는 함수형 컴포넌트로 생성되었습니다. <code v-pre>div</code> 요소 내부에 실제 버튼을 만들기 위해 <code v-pre>button</code> 태그가 사용되었습니다. 버튼의 유형은 기본적으로 &quot;submit&quot;으로 설정되어 있어 양식에서 사용하기 적합합니다.</p>
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
<p>비로소 사용자 정의 버튼 구성 요소가 내보내어지고 필요한 속성을 전달하여 React 애플리케이션에서 사용할 수 있게 됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./App.css'</span>
<span class="token keyword">import</span> CustomInput <span class="token keyword">from</span> <span class="token string">'./components/CustomInput'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AiOutlineMail<span class="token punctuation">,</span> AiFillLock<span class="token punctuation">,</span> AiOutlineUser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-icons/ai'</span>
<span class="token keyword">import</span> FormButton <span class="token keyword">from</span> <span class="token string">'./components/FormButton'</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>main<span class="token operator">></span>
        <span class="token operator">&lt;</span>form<span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiOutlineUser <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'text'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'사용자 이름 입력'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiOutlineUser <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'text'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'기업 이름 입력'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiOutlineMail <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'text'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'이메일 입력'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>CustomInput icon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>AiFillLock <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span> type<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'password'</span><span class="token punctuation">}</span> placeholder<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'비밀번호 입력'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
          <span class="token operator">&lt;</span>FormButton btnText<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'계속하기 클릭'</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> App
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Css 스타일을 추가한 후 최종 결과는 아래 이미지와 같이 나타날 것입니다:</p>
<p><img src="@source/docs/Tech/2024-04-19-ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS/img/ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS_4.png" alt="ReactFormDesignCreatingCustomReusableInputsandButtonsinReactJS_4.png"></p>
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
<p>위 코드는 다음과 같은 CSS 부분을 포함하고 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">:</span>root <span class="token punctuation">{</span>
    <span class="token operator">--</span>primary_color<span class="token operator">:</span> #0D0033<span class="token punctuation">;</span>
    <span class="token operator">--</span>primary_lite<span class="token operator">:</span> #c0bec5<span class="token punctuation">;</span>
    <span class="token operator">--</span>sec_color<span class="token operator">:</span> #3bed24<span class="token punctuation">;</span>
    <span class="token operator">--</span>bg_color<span class="token operator">:</span> #<span class="token constant">F2F2F3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

main <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 4rem 2rem<span class="token punctuation">;</span>
    <span class="token literal-property property">gap</span><span class="token operator">:</span> 25px<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    justify<span class="token operator">-</span>content<span class="token operator">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

input <span class="token punctuation">{</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    box<span class="token operator">-</span>shadow<span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>primary_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 16px<span class="token punctuation">;</span>
    flex<span class="token operator">-</span>grow<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2rem <span class="token number">0</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">248</span><span class="token punctuation">,</span> <span class="token number">248</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token literal-property property">input</span><span class="token operator">:</span><span class="token operator">:</span>placeholder <span class="token punctuation">{</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> lighter<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>primary_lite<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>input_wrapp <span class="token punctuation">{</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>input_container<span class="token operator">:</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">input</span><span class="token operator">:</span>focus</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>sec_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token punctuation">.</span>input_container <span class="token punctuation">{</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>primary_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">display</span><span class="token operator">:</span> flex<span class="token punctuation">;</span>
    align<span class="token operator">-</span>items<span class="token operator">:</span> center<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">248</span><span class="token punctuation">,</span> <span class="token number">248</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">.</span>5rem <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">0</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>input_container <span class="token punctuation">.</span>input_icon <span class="token punctuation">{</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>primary_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    padding<span class="token operator">-</span>right<span class="token operator">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token punctuation">.</span>input_wrapper <span class="token punctuation">{</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> 1rem <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>form_btn <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>sec_color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    flex<span class="token operator">-</span>grow<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> relative<span class="token punctuation">;</span>
    <span class="token literal-property property">padding</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>2rem 2rem<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
    text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>form_btn button <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> transparent<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    <span class="token literal-property property">outline</span><span class="token operator">:</span> none<span class="token punctuation">;</span>
    font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>25rem<span class="token punctuation">;</span>
    font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">;</span>
    <span class="token literal-property property">cursor</span><span class="token operator">:</span> pointer<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token punctuation">.</span>form_btn<span class="token operator">:</span><span class="token operator">:</span>after<span class="token punctuation">,</span>
<span class="token punctuation">.</span>form_btn<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
    border<span class="token operator">-</span>radius<span class="token operator">:</span> <span class="token number">50</span><span class="token operator">%</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>form_btn<span class="token operator">:</span><span class="token operator">:</span>after <span class="token punctuation">{</span>
    <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token operator">-</span>10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>form_btn<span class="token operator">:</span><span class="token operator">:</span>before <span class="token punctuation">{</span>
    <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token operator">-</span>10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 구성 요소를 사용하면 React 애플리케이션에서 버튼의 외양과 동작에 대한 세부적인 제어를 허용하며 지정된 텍스트와 스타일을 사용하여 사용자 정의 버튼을 쉽게 만들 수 있습니다.</p>
<p>결론적으로, ReactJS에서 사용자 정의 입력 컴포넌트는 동적이고 유연한 사용자 인터페이스를 만들 수 있는 강력한 도구입니다. ReactJS를 사용하면 개발자가 각종 형식과 스타일로 데이터를 입력할 수 있는 복잡하고 사용자 정의 가능한 입력 컴포넌트를 만들 수 있습니다. 간단한 연락처 양식이나 복잡한 데이터 입력 시스템을 구축하더라도 사용자 정의 입력 컴포넌트를 사용하여 더 직관적이고 사용자 친화적인 인터페이스를 만들 수 있습니다.</p>
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
<p>큰 양식에서 여러 입력 필드의 상태를 관리하는 방법에 대해 더 자세히 알아보겠습니다.</p>
<p>프론트엔드 개발자이시라면 JavaScript의 고급 개념 중 몇 가지를 꼭 확인하고 싶을 것입니다 -</p>
<p>명시적인 바인딩</p>
<p>배열 메서드</p>
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
<p>자바스크립트에서의 메모이제이션</p>
</div></template>
