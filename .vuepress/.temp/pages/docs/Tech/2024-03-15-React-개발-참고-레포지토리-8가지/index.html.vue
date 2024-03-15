<template><div><h1 id="react-개발할-때-참고하면-좋은-레포지토리-8가지" tabindex="-1"><a class="header-anchor" href="#react-개발할-때-참고하면-좋은-레포지토리-8가지" aria-hidden="true">#</a> React 개발할 때 참고하면 좋은 레포지토리 8가지</h1>
<img src="https://miro.medium.com/v2/resize:fit:1400/1*JjBD7KLB6IiQCr4ZdWtrrw.gif" />
<p>안녕하세요! 👋</p>
<p>오늘은 최상위 1%의 개발자들이 사용하는 React 레포지토리 8가지를 살펴보겠습니다. (아마도 들어보지 못한 것들입니다.)</p>
<p>준비되셨나요?</p>
<img src="https://miro.medium.com/v2/resize:fit:960/1*9TkZhE3ZEXnpVtaqgxJnfA.gif" />
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
<p>우리가 최고의 개발자들이 사용하는 것을 어떻게 찾았는지 이야기해드릴게요. Quine에서는 DevRank라는 것을 통해 개발자들을 순위화합니다.</p>
<p>간단히 말하면, DevRank는 개방 소스에 대한 기여를 기반으로 개발자의 중요성을 측정하기 위해 Google의 PageRank 알고리즘을 사용합니다.</p>
<p>이 목록을 만들기 위해 우리는 최상위 1%가 스타를 한 레포지토리를 살펴보았어요. 🌟</p>
<p>그리고, 우리는 최상위 1%가 레포지토리를 스타할 확률과 하위 50%가 그렇지 않을 확률을 계산했습니다.</p>
<p>마지막으로, 조금의 선별 작업을 거친 후에 아래 8개의 레포지토리를 찾았습니다. 👇</p>
<p>이 레포지토리들은 멋진 웹 앱을 만들 때 특히 유용할 것입니다.</p>
<p>만약 작은 앱을 만들고 적용된 AI 쪽을 즐기는 것이 좋다면, ChatGPT, Claude, Gemini 등과 함께 멋진 GenerativeAI 앱을 만들어 개방형 도전을 보상으로 제공하는 오픈소스 챌린지인 Creator Quests를 확인해보세요. 🙃 💰</p>
<p>현재 Creator Quest는 Generative AI를 사용한 개발 도구를 만드는 것을 도전하고 있습니다. 참여하려면 간단히 Quine에 가입하고 퀘스트로 이동하면 됩니다.</p>
<p>현재 상금 풀은 $2028이며, 참가자가 더 많이 참여할수록 상금이 더 늘어납니다! 아래 이미지를 클릭해서 시도해보세요! ⬇️</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_3.png" />
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
<h1 id="🪮-jsxstyle-jsxstyle" tabindex="-1"><a class="header-anchor" href="#🪮-jsxstyle-jsxstyle" aria-hidden="true">#</a> 🪮 jsxstyle/jsxstyle</h1>
<p>JS에서 CSS로의 이동 더 이상 필요 없음</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_4.png" />
<p>왜 중요할까요? React 또는 Preact를 사용한 웹 개발에서 컴포넌트(버튼, 메뉴 등)를 스타일링해야 할 때가 있습니다. 기존에는 별도의 CSS 파일이나 복잡한 스타일링 시스템을 사용하여 이를 처리했는데, 이는 시간이 많이 소요되고 관리하기 번거로울 수 있습니다. jsxstyle은 컴포넌트와 함께 직접 JavaScript 코드 내에서 스타일을 정의할 수 있도록 해줍니다. 다시 말해, JS와 CSS 파일 간에 이동할 필요가 없어집니다.</p>
<p>설치: npm install jsxstyle
예제 사용법: 아래와 같이 코드를 작성할 수 있습니다. 👇</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>Row padding<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Block
    backgroundColor<span class="token operator">=</span><span class="token string">"#EEE"</span>
    boxShadow<span class="token operator">=</span><span class="token string">"inset 0 0 0 1px rgba(0,0,0,0.15)"</span>
    borderRadius<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>
    height<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">64</span><span class="token punctuation">}</span>
    width<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">64</span><span class="token punctuation">}</span>
    marginRight<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">15</span><span class="token punctuation">}</span>
    backgroundSize<span class="token operator">=</span><span class="token string">"contain"</span>
    backgroundImage<span class="token operator">=</span><span class="token string">"url(http://graph.facebook.com/justinbieber/picture?type=large)"</span>
  <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>Col fontFamily<span class="token operator">=</span><span class="token string">"sans-serif"</span> fontSize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">16</span><span class="token punctuation">}</span> lineHeight<span class="token operator">=</span><span class="token string">"24px"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Block fontWeight<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">600</span><span class="token punctuation">}</span><span class="token operator">></span>Justin Bieber<span class="token operator">&lt;</span><span class="token operator">/</span>Block<span class="token operator">></span>
    <span class="token operator">&lt;</span>Block fontStyle<span class="token operator">=</span><span class="token string">"italic"</span><span class="token operator">></span>Canadian<span class="token operator">&lt;</span><span class="token operator">/</span>Block<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Col<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Row<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://github.com/jsxstyle/jsxstyle</p>
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
<h1 id="💨-alangpierce-sucrase" tabindex="-1"><a class="header-anchor" href="#💨-alangpierce-sucrase" aria-hidden="true">#</a> 💨 alangpierce/sucrase</h1>
<p>Babel 대안으로서의 초고속 변환기</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_5.png" />
<p>왜 중요할까요? Babel은 최신 JavaScript 코드를 구형 브라우저가 이해할 수 있는 형식으로 변환하는 데 널리 사용되는 도구입니다. Sucrase는 Babel에 대한 빠른 대안입니다.</p>
<p>설치:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">--</span>dev sucrase
# 또는
npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev sucrase node <span class="token operator">-</span>r sucrase<span class="token operator">/</span>register main<span class="token punctuation">.</span>ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>예제 사용법: Sucrase는 다음과 같이 직접 JS에서 호출할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> transform <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"sucrase"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> compiledCode <span class="token operator">=</span> <span class="token function">transform</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">transforms</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"typescript"</span><span class="token punctuation">,</span> <span class="token string">"imports"</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>code<span class="token punctuation">;</span>
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
<p>https://github.com/alangpierce/sucrase</p>
<h1 id="🎨-wooorm-refractor" tabindex="-1"><a class="header-anchor" href="#🎨-wooorm-refractor" aria-hidden="true">#</a> 🎨 wooorm/refractor</h1>
<p>웹 페이지 코드를 색상으로 표시하여 일상을 더욱 쉽게 만들어줍니다.</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_6.png" />
<p>왜 중요할까요? Refractor는 웹 애플리케이션에 코드 스니펫을 추가할 때 특히 유용한 하이라이팅을 제공합니다. 이는 가독성을 향상시키며, 특히 전통적인 HTML 기반 하이라이팅이 이상적이지 않은 CLI 폼 등과 같은 영역에서 유용합니다.</p>
<p>설치: npm install refractor</p>
<p>예제 사용법:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> refractor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"refractor"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> tree <span class="token operator">=</span> refractor<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span><span class="token string">'"use strict";'</span><span class="token punctuation">,</span> <span class="token string">"js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>결과:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'element'</span><span class="token punctuation">,</span> <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">'span'</span><span class="token punctuation">,</span> <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'token'</span><span class="token punctuation">,</span> <span class="token string">'string'</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'"use strict"'</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'element'</span><span class="token punctuation">,</span> <span class="token literal-property property">tagName</span><span class="token operator">:</span> <span class="token string">'span'</span><span class="token punctuation">,</span> <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">className</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'token'</span><span class="token punctuation">,</span> <span class="token string">'punctuation'</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'text'</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">';'</span><span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token punctuation">}</span> <span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>https://github.com/wooorm/refractor</p>
<h1 id="🐦-transitive-bullshit-react-static-tweets" tabindex="-1"><a class="header-anchor" href="#🐦-transitive-bullshit-react-static-tweets" aria-hidden="true">#</a> 🐦 transitive-bullshit/react-static-tweets</h1>
<p>웹사이트에 트윗을 추가하는 가장 좋은 선택</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_7.png" />
<p>왜 중요할까요? 웹사이트에 트윗을 추가하는 것은 많은 랜딩 페이지에서 볼 수 있는 멋진 기능입니다. React Static Tweets는 웹 프로젝트에 트윗을 쉽게 포함할 수 있는 효율적인 방법을 제공하여 트위터의 표준 포함 방법보다 빠르게 로드되고 성능이 향상됩니다.</p>
<p>설치:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install react<span class="token operator">-</span><span class="token keyword">static</span><span class="token operator">-</span>tweets <span class="token keyword">static</span><span class="token operator">-</span>tweets date<span class="token operator">-</span>fns
# 또는
yarn add react<span class="token operator">-</span><span class="token keyword">static</span><span class="token operator">-</span>tweets <span class="token keyword">static</span><span class="token operator">-</span>tweets date<span class="token operator">-</span>fns
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
<p>예제 사용법:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> fetchTweetAst <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"static-tweets"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tweet <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-static-tweets"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> tweetId <span class="token operator">=</span> <span class="token string">"1358199505280262150"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getStaticProps</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tweetAst <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchTweetAst</span><span class="token punctuation">(</span>tweetId<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        tweetAst<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">revalidate</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"error fetching tweet"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> tweetAst <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Tweet ast<span class="token operator">=</span><span class="token punctuation">{</span>tweetAst<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://github.com/transitive-bullshit/react-static-tweets</p>
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
<h1 id="🖨️-preactjs-preact-render-to-string" tabindex="-1"><a class="header-anchor" href="#🖨️-preactjs-preact-render-to-string" aria-hidden="true">#</a> 🖨️ preactjs/preact-render-to-string</h1>
<p>HTML에 컴포넌트 렌더링</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_8.png" />
<p>왜 중요할까요? &quot;preact-render-to-string&quot;은 웹사이트를 빠르게 로드하고 검색 엔진에서 더 잘 표시할 수 있도록 도와줍니다. Preact와 같은 JS 프레임워크로 구축된 웹사이트는 브라우저가 먼저 JavaScript를 실행해야 하기 때문에 콘텐츠를 표시하는 데 시간이 걸립니다. 이 레포지토리는 컴포넌트를 사용 가능한 HTML로 변환하여 서버 측에서 작업을 처리합니다. 따라서 누군가 웹사이트를 방문하면 인터넷 속도가 느릴지라도 즉시 콘텐츠를 볼 수 있습니다.</p>
<p>설치: npm install preact-render-to-string</p>
<p>예제 사용법:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> render <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"preact-render-to-string"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> h<span class="token punctuation">,</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"preact"</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** <span class="token keyword">@jsx</span> h */</span>

<span class="token comment">// Classical components work</span>
<span class="token keyword">class</span> <span class="token class-name">Fox</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> name <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fox"</span><span class="token operator">></span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// ... and so do pure functional components:</span>
<span class="token keyword">const</span> <span class="token function-variable function">Box</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> type<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">box box-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

<span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>Box type<span class="token operator">=</span><span class="token string">"open"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Fox name<span class="token operator">=</span><span class="token string">"Finn"</span> <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>Box<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &lt;div class="box box-open">&lt;span class="fox">Finn&lt;/span>&lt;/div></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://github.com/preactjs/preact-render-to-string</p>
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
<h1 id="🏆-bikeshaving-crank" tabindex="-1"><a class="header-anchor" href="#🏆-bikeshaving-crank" aria-hidden="true">#</a> 🏆 bikeshaving/crank</h1>
<p>단지 자바스크립트 프레임워크</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_9.png" />
<p>왜 중요할까요? React와 같은 전통적인 웹 프레임워크에서는 웹 컴포넌트가 한 번 설정되고 명시적으로 지정된 경우에만 변경됩니다. 이들은 수동으로 업데이트해야 할 정적 이미지처럼 보입니다. Crank.js는 이를 변경하여 위젯이 새로운 데이터에 응답하여 스스로 업데이트할 수 있도록 합니다. 이는 뉴스 티커가 새로운 뉴스로 갱신되는 것과 같이 실시간 데이터를 관리하는 웹 애플리케이션에 특히 유용합니다.</p>
<p>이 레포지토리는 더 많은 사람들이 이로 마이그레</p>
<p>이션하여 인기를 얻기 위해서는 더 많은 시간이 필요하지만, 여전히 주목할 가치가 있는 매우 멋진 레포지토리입니다. 👀</p>
<p>설치: $ npm i @b9g/crank</p>
<p>예제 사용법:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> renderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@b9g/crank/dom"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Greeting</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name <span class="token operator">=</span> <span class="token string">"World"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>Hello <span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Greeting <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://github.com/bikeshaving/crank</p>
<h1 id="🎯-evoluhq-evolu" tabindex="-1"><a class="header-anchor" href="#🎯-evoluhq-evolu" aria-hidden="true">#</a> 🎯 evoluhq/evolu</h1>
<p>나는 로컬을 중심으로 생각하는 사람</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_10.png" />
<p>왜 중요할까요? 웹 애플리케이션은 일반적으로 사용자 데이터를 서버에 저장하는데, 이는 지속적인 인터넷 연결이 필요하며 개인 정보 보호 및 데이터 보안에 대한 우려를 유발합니다. 이 서버 기반 접근 방식은 성능이 느리고 서버가 다운되거나 회사가 운영을 중단할 경우 데이터 손실이 발생할 수 있습니다.</p>
<p>Evolu는 사용자의 장치에 데이터를 직접 저장하는 &quot;로컬 중심&quot; 접근 방식을 도입합니다. 이는 애플리케이션이 오프라인으로 작동할 수 있고 데이터에 더 빠르게 액세스하며 향상된 개인 정보 보호와 보안을 제공합니다. 이는 오프라인 Chrome/브라우저 앱을 구축하는 경우 유용합니다.</p>
<p>설치: npm install @evolu/react</p>
<p>사용을 시작하려면 여기 훌륭한 가이드를 찾을 수 있습니다.</p>
<p>https://github.com/evoluhq/evolu</p>
<h1 id="📸-jest-community-snapshot-diff" tabindex="-1"><a class="header-anchor" href="#📸-jest-community-snapshot-diff" aria-hidden="true">#</a> 📸 jest-community/snapshot-diff</h1>
<p>Jest를 위한 차이 스냅샷 유틸리티</p>
<img src="@source/docs/Tech/2024-03-15-React-개발-참고-레포지토리-8가지/img/📚-8-repos-used-by-the-top-1%-of-React-devs-🏆_11.png" />
<p>왜 중요할까요? React 컴포넌트 또는 다른 JavaScript 값들을 테스트할 때 개발자들은 일반적으로 전체 상태나 출력을 비교합니다. 이는 큰 데이터 청크를 처리하고 특정 변경 사항을 찾는 것이 바늘을 건너 끈을 찾는 것과 같습니다. Snapshot-diff는 두 컴포넌트 상태(또는 두 JavaScript 값) 간에 차이점만 강조하여 직접 비교할 수 있는 집중 비교 도구입니다.</p>
<p>React 컴포넌트를 테스트할 때 특히 유용하며, 두 상태 사이에 변경된 내용을 정확히 지정하여 코드 변경의 영향을 식별하고 이해하는 데 큰 도움이 됩니다.</p>
<p>설치: yarn add --dev snapshot-diff</p>
<p>예제 사용법: 기본 Jest Matcher</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> snapshotDiff <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"snapshot-diff"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"2개의 문자열 사이의 스냅샷 차이"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">snapshotDiff</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"react"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./Component"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"2개의 React 컴포넌트 상태 사이의 스냅샷 차이"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">snapshotDiff</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Component test<span class="token operator">=</span><span class="token string">"say"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>Component test<span class="token operator">=</span><span class="token string">"my name"</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toMatchSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://github.com/jest-community/snapshot-diff</p>
<p>이러한 발견이 유용하고 더 견고한 React 툴킷을 구축하는 데 도움이 되기를 바랍니다! ⚒️</p>
<p>만약 오늘 이러한 도구를 활용하여 보상을 받고 싶다면, 우리는 방금 Generative AI를 사용한 개발 도구를 만들기 위한 도전을 시작했습니다.</p>
</div></template>
