<template><div><h2 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h2>
<p>애니메이션은 웹 애플리케이션에서 사용자 참여도와 경험을 현격하게 향상시킬 수 있습니다. 그러나 미학적 요소와 접근성 및 성능을 균형 있게 유지하는 것이 중요합니다. 이 기사는 React에서 MotionSystem을 구축하는 방법을 설명하며 CSS 애니메이션을 사용하여 동적 상호작용을 제공하면서 사용자의 움직임 감소를 선호하는 사용자를 존중합니다.</p>
<h2 id="react에서-css-애니메이션의-중요성" tabindex="-1"><a class="header-anchor" href="#react에서-css-애니메이션의-중요성" aria-hidden="true">#</a> React에서 CSS 애니메이션의 중요성</h2>
<p>CSS 애니메이션은 React 애플리케이션에서 사용하기에 이상적인 여러 가지 장점을 제공합니다:</p>
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
<li>성능: CSS로 애니메이션을 실행하면 JavaScript 스레드에서 작업을 줄일 수 있어 응용 프로그램이 responsiv하게 유지되는 데 도움이 됩니다.</li>
<li>유지 관리성: CSS 애니메이션을 통해 스타일 관련 변경을 JavaScript 외부로 유지하여 코드베이스가 더 깨끗하고 모듈화되도록 유지할 수 있습니다.</li>
<li>접근성: CSS를 사용하면 움직임에 민감한 사용자들을 위해 움직임을 최소화하는 환경 설정을 쉽게 구현할 수 있어 사용성을 해치지 않도록 합니다.</li>
</ul>
<h2 id="프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#프로젝트-설정" aria-hidden="true">#</a> 프로젝트 설정</h2>
<p>이미 React 프로젝트를 설정하지 않았다면 새 React 프로젝트를 만들기 시작하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app motion<span class="token operator">-</span>system<span class="token operator">-</span>demo
cd motion<span class="token operator">-</span>system<span class="token operator">-</span>demo
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
<h2 id="전문적인-모션-유형-정의하기" tabindex="-1"><a class="header-anchor" href="#전문적인-모션-유형-정의하기" aria-hidden="true">#</a> 전문적인 모션 유형 정의하기</h2>
<p>animations.css에서 다양한 UI 요소에 적용할 수 있는 전문적이고 재사용 가능한 키프레임 애니메이션을 정의할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/* animations.css */</span>
@keyframes fadeIn <span class="token punctuation">{</span>
  from <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  to <span class="token punctuation">{</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
@keyframes slideUp <span class="token punctuation">{</span>
  from <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>20px<span class="token punctuation">)</span><span class="token punctuation">;</span> opacity<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  to <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
@keyframes popIn <span class="token punctuation">{</span>
  <span class="token number">0</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> opacity<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token number">60</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> opacity<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token number">100</span><span class="token operator">%</span> <span class="token punctuation">{</span> <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">.</span>fade<span class="token operator">-</span><span class="token keyword">in</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> fadeIn 1s ease<span class="token operator">-</span>out forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>slide<span class="token operator">-</span>up <span class="token punctuation">{</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> slideUp <span class="token number">0</span><span class="token punctuation">.</span>5s ease<span class="token operator">-</span>out forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>pop<span class="token operator">-</span><span class="token keyword">in</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">animation</span><span class="token operator">:</span> popIn <span class="token number">0</span><span class="token punctuation">.</span>5s ease<span class="token operator">-</span>out forwards<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="motionsystem-컴포넌트-생성하기" tabindex="-1"><a class="header-anchor" href="#motionsystem-컴포넌트-생성하기" aria-hidden="true">#</a> MotionSystem 컴포넌트 생성하기</h2>
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
<p>MotionSystem은 이제 사용자가 움직임을 줄이기를 선호하는지 확인하여 적절한 경우에만 애니메이션을 적용할 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">'./animations.css'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MotionSystem</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> children<span class="token punctuation">,</span> animation <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isActive<span class="token punctuation">,</span> setIsActive<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> prefersReducedMotion <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">matchMedia</span><span class="token punctuation">(</span><span class="token string">'(prefers-reduced-motion: reduce)'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>matches<span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleAnimation</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>prefersReducedMotion<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setIsActive</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>isActive <span class="token operator">?</span> animation <span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">}</span> 
         onAnimationEnd<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setIsActive</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
         onClick<span class="token operator">=</span><span class="token punctuation">{</span>handleAnimation<span class="token punctuation">}</span><span class="token operator">></span>
      <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> MotionSystem<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="motionsystem-구현하기" tabindex="-1"><a class="header-anchor" href="#motionsystem-구현하기" aria-hidden="true">#</a> MotionSystem 구현하기</h2>
<p>디자인 요구에 따라 애니메이션 유형을 지정하여 MotionSystem 구성 요소 내에 요소를 래핑하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MotionSystem <span class="token keyword">from</span> <span class="token string">'./MotionSystem'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>MotionSystem animation<span class="token operator">=</span><span class="token string">"fade-in"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h1<span class="token operator">></span>모션 시스템 데모에 오신 걸 환영합니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MotionSystem<span class="token operator">></span>
      <span class="token operator">&lt;</span>MotionSystem animation<span class="token operator">=</span><span class="token string">"slide-up"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>button<span class="token operator">></span>기능 살펴보기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MotionSystem<span class="token operator">></span>
      <span class="token operator">&lt;</span>MotionSystem animation<span class="token operator">=</span><span class="token string">"pop-in"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>p<span class="token operator">></span>이 문단은 자리에 팝업됩니다<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>MotionSystem<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>React에서 MotionSystem 컴포넌트를 사용하여 CSS 애니메이션을 적용하면 상호 작용이 가능하고 매력적인 애니메이션을 추가하는 강력한 솔루션을 제공할 수 있습니다. 동시에 사용자가 움직임을 줄이도록 선호하는 것을 고려합니다. 이 설정은 접근성을 향상시킬 뿐만 아니라 성능과 청결한 코드 아키텍처를 유지할 수 있습니다.```</p>
</div></template>
