<template><div><table>
  <tr>
    <th>예시</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>ComponentDidMount</td>
    <td>컴포넌트가 처음으로 렌더링될 때 실행</td>
  </tr>
  <tr>
    <td>ComponentDidUpdate</td>
    <td>컴포넌트가 업데이트될 때 실행</td>
  </tr>
  <tr>
    <td>ComponentWillUnmount</td>
    <td>컴포넌트가 제거될 때 실행</td>
  </tr>
</table>
<p>라이프사이클 메서드는 React 컴포넌트의 다양한 단계에서 실행되는 함수입니다. 언제 어떤 메서드를 사용해야 하는지 알고 있으면 React 애플리케이션을 더 잘 관리할 수 있습니다.</p>
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
<h1 id="javascript-함수에-데이터-전달하는-방법" tabindex="-1"><a class="header-anchor" href="#javascript-함수에-데이터-전달하는-방법" aria-hidden="true">#</a> JavaScript 함수에 데이터 전달하는 방법</h1>
<p>다음 JavaScript 함수가 잘못되어 있습니다. 이 함수를 사용하려고 하면 무슨 일이 일어날까요?</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Reference Error: a is not defined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1400/0*MjzLHJIBue3LqvKa.gif" alt="이미지"></p>
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
<p>만약 이 함수를 호출하면 “a is not defined”라는 참조 오류가 발생합니다.</p>
<p>아래와 같이 a와 b를 매개변수로 추가하고 두 개의 숫자를 전달해주는 것으로 이 문제를 해결할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*BfPuSsS8eyUF2St4.gif" alt="image"></p>
<p>이것이 자바스크립트 함수에 데이터를 전달하는 방법입니다. 그렇다면 React 컴포넌트에는 어떻게 데이터를 전달할까요?</p>
<h1 id="react-컴포넌트에-데이터-전달하는-방법" tabindex="-1"><a class="header-anchor" href="#react-컴포넌트에-데이터-전달하는-방법" aria-hidden="true">#</a> React 컴포넌트에 데이터 전달하는 방법</h1>
<p>React 컴포넌트는 일반 자바스크립트 함수와 매우 비슷해 보입니다. 그러나 JS 함수와는 달리 React 요소(예: 버튼)를 반환하고 렌더링합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://miro.medium.com/v2/resize:fit:1400/0*1onn3hVlLqUG0iey.gif" />
<p>리액트 컴포넌트를 호출하여 해당 요소를 표시하려면 사용자 정의 HTML 요소처럼 사용하지만 JavaScript로 작성된 것처럼 사용합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*kQ4W8yxFNwnWGub8.gif" alt="image"></p>
<p>하지만 이렇게 호출될 때 함수에 데이터를 전달하는 방법은 무엇인가요?</p>
<p>이 HTML 유사 구문을 사용하여 사용자 정의 HTML 속성처럼 마음대로 데이터를 전달할 수 있습니다.</p>
<p>예를 들어, 버튼에 우리만의 사용자 정의 텍스트를 추가하려면 텍스트 속성을 추가하고 그 값을 일부 문자열로 설정할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button text<span class="token operator">=</span><span class="token string">"⭐️"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span>Click me<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1400/0*-v4TyOkONcLDH_Ih.gif" alt="Example"></p>
<p>리액트 세계에서, 이러한 사용자 정의 속성을 &quot;prop&quot;이라고 합니다.</p>
<p>우리는 우리의 컴포넌트에 원하는 만큼 많은 prop을 추가할 수 있습니다. 이들은 모든 JavaScript 데이터 유형이 될 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button text<span class="token operator">=</span><span class="token string">"⭐️"</span> color<span class="token operator">=</span><span class="token string">"green"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span>나를 클릭해봐<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1400/0*Xu32NYTN-17n1hSO.gif" alt="이미지"></p>
<p>만약 우리가 컴포넌트에 전달한 props를 사용하려고 한다면, 각각이 별도의 인수로 전달된다고 생각할 수 있습니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*PkbojCpS9Ta9ogwX.gif" alt="이미지"></p>
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
<p>하지만 이 경우는 그렇지 않아요. 일반 JavaScript 함수와 달리, 이러한 모든 속성은 하나의 값으로 모두 모이는데, 이 값 자체가 객체입니다.</p>
<p>이 하나의 매개변수는 &quot;props&quot;로 참조되고 이름이 지정됩니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*7z3ed4qxD_lvp7T4.gif" alt="props"></p>
<p>아무 이름을 지정할 수 있지만, 일반적으로 이 매개변수를 &quot;props&quot;로 지칭하는 것이 관습입니다. 왜냐하면 이것이 포함하는 것이 &quot;props&quot;라고 불리우면서, 이 컴포넌트로 전달된 모든 값들입니다.</p>
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
<p>당신이 넘겨준 데이터를 컴포넌트 내부에서 중괄호로 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button text<span class="token operator">=</span><span class="token string">"⭐️"</span> color<span class="token operator">=</span><span class="token string">"green"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">background</span><span class="token operator">:</span> props<span class="token punctuation">.</span>color <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1400/0*Z4dTebIx9NGZlpor.gif" alt="image"></p>
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
<p>만약 컴포넌트가 작은 경우 유용한 패턴 중 하나는 프롭스(props) 객체를 구조 분해하는 것입니다.</p>
<p>파라미터에 중괄호를 추가하여 프롭스를 개별 변수로 구조 분해할 수 있어서 직접 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Button text<span class="token operator">=</span><span class="token string">"⭐️"</span> color<span class="token operator">=</span><span class="token string">"green"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Button</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> color<span class="token punctuation">,</span> text <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>button style<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">background</span><span class="token operator">:</span> color <span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>text<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://miro.medium.com/v2/resize:fit:1400/0*N08oUMcmAfDjQvvr.gif" alt="이미지"></p>
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
<h1 id="🏆-프로-페셔널-react-개발자가-되어-보세요" tabindex="-1"><a class="header-anchor" href="#🏆-프로-페셔널-react-개발자가-되어-보세요" aria-hidden="true">#</a> 🏆 프로 페셔널 React 개발자가 되어 보세요</h1>
<p>React를 처음부터 끝까지 배울 수 있는 최고의 자원을 찾고 계신가요?</p>
<p>✨ 소개합니다: React 부트캠프</p>
<p>부트캠프에는 React로 성공을 이룰 수 있도록 도와주는 모든 자원이 제공됩니다:</p>
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
<li>🕹️ 100개 이상의 실전 React 도전 과제</li>
<li>🎬 100개 이상의 심층 영상</li>
<li>🛠️ 4개 이상의 실제 Next.js 프로젝트</li>
<li>📄 10개 이상의 필수 React 치트시트</li>
<li>🥾 Next.js 미니 부트캠프 완료 (앱 라우터)</li>
<li>🖼️ 이 기사와 같은 애니메이션 비디오 시리즈 완료</li>
</ul>
<p>아래를 클릭하여 React 부트캠프를 직접 체험해보세요.</p>
<p><img src="@source/docs/Tech/2024-03-23-ReactPropsTheAnimatedGuide/img/React-Props-—-The-Animated-Guide_11.png" alt="React Bootcamp"></p>
<p>시작하려면 클릭하세요.</p>
</div></template>
