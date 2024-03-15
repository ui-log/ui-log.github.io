<template><div><h1 id="css-모달-오픈시-body-스크롤-막는-방법" tabindex="-1"><a class="header-anchor" href="#css-모달-오픈시-body-스크롤-막는-방법" aria-hidden="true">#</a> [CSS] 모달 오픈시 Body 스크롤 막는 방법</h1>
<div class="custom-container tip"><p class="custom-container-title">💡이 포스팅을 읽으면</p>
<p>모달 오픈시에 body의 스크롤을 막는 방법에 대해서 알 수 있습니다.</p>
</div>
<p>서비스 개발을 하다보면 Body의 스크롤을 막아야하는 경우가 있는데요.
예를 들어 모달을 오픈했을 때 모달의 백그라운드가 스크롤이 발생하지 않도록 막아야 하는 경우가 있습니다.</p>
<img src="@source/docs/Library/2023-01-05-모달-오픈시-Body-스크롤-막는-방법/img/1.gif" width="500" />
<p>이렇게 특정 상황에서 모달의 스크롤을 막는 방법에 대해서 정리하겠습니다.</p>
<br>
<h2 id="body-scroll-lock" tabindex="-1"><a class="header-anchor" href="#body-scroll-lock" aria-hidden="true">#</a> body-scroll-lock</h2>
<h3 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> body-scroll-lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
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
<p>타입 스크립트 사용시 아래 명령어도 실행</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>@types/body-scroll-lock
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br>
<h2 id="코드" tabindex="-1"><a class="header-anchor" href="#코드" aria-hidden="true">#</a> 코드</h2>
<p>body-scroll-lock은 아래와 같이 사용할 수 있는데요.
disableBodyScroll에는 target Element를 넣어주어야합니다.
targetElement는 모달, 네비게이션과 같이 스크롤을 해야하는 요소를 넣어주면 됩니다.
아래 예시에서는 버튼을 타겟 엘리먼트로 잡았지만,
<strong>스크롤을 막지 않아야하는 모달 같은 요소를 넣어주면 됩니다.</strong></p>
<p>아래 예시는 리액트를 사용했기 때문에 useRef를 사용해서 ref를 생성해주고
disableBodyScroll에 useRef.current 로 target Element 를 지정해주었습니다.</p>
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> disableBodyScroll<span class="token punctuation">,</span> clearAllBodyScrollLocks <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"body-scroll-lock"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">BodyScrollLock</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> blockButton <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>blockButton<span class="token punctuation">}</span></span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">disableBodyScroll</span><span class="token punctuation">(</span>blockButton<span class="token punctuation">.</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        바디 스크롤 금지
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">clearAllBodyScrollLocks</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        바디 스크롤 해제
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">"1px solid #000"</span><span class="token punctuation">,</span> <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">긴 텍스트</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> BodyScrollLock<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
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
<p>위와 같이 작성하면 '바디스크롤 금지' 버튼 클릭시 body에 overflow: hidden 속성이 추가된 것을 보실 수 있습니다.</p>
<img src="@source/docs/Library/2023-01-05-모달-오픈시-Body-스크롤-막는-방법/img/2.png" />
<br>
<br>
<img src="@source/docs/Library/2023-01-05-모달-오픈시-Body-스크롤-막는-방법/img/1.gif" width="500" />
<br>
<h2 id="body에-직접-overflow-hidden을-추가하는-방식" tabindex="-1"><a class="header-anchor" href="#body에-직접-overflow-hidden을-추가하는-방식" aria-hidden="true">#</a> body에 직접 overflow: hidden을 추가하는 방식</h2>
<p>바디 스크롤을 막는 방법이 body에 overflow:hidden 속성을 주는 방식이기 때문에
body-scroll-lock을 사용하는 대신에 직접 body요소에 overflow: hidden을 부여하는 방식으로 해결할 수 있습니다.</p>
<p>body에 직접 style을 적용하는 방식은 아래와 같이 할 수 있습니다.</p>
<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
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
<div class="language-tsx ext-tsx line-numbers-mode"><pre v-pre class="language-tsx"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> disableBodyScroll<span class="token punctuation">,</span> enableBodyScroll<span class="token punctuation">,</span> clearAllBodyScrollLocks <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"body-scroll-lock"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">BodyScrollLock</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> refModal <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useRef</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          body<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">"hidden"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        바디 스크롤 금지
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
        <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> body <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          body<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">"auto"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span><span class="token plain-text">
        바디 스크롤 해제
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">border</span><span class="token operator">:</span> <span class="token string">"1px solid #000"</span><span class="token punctuation">,</span> <span class="token literal-property property">overflow</span><span class="token operator">:</span> <span class="token string">"auto"</span><span class="token punctuation">,</span> <span class="token literal-property property">marginTop</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">긴 텍스트</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> BodyScrollLock<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
