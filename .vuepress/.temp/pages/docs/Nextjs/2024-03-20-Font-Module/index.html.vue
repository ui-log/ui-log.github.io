<template><div><h1 id="nextjs-14에서-font-module-사용-하는-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14에서-font-module-사용-하는-방법" aria-hidden="true">#</a> Nextjs 14에서 font module 사용 하는 방법</h1>
<p>이 API 참조는 next/font/google 및 next/font/local을 사용하는 방법을 이해하는 데 도움이 될 것입니다. 기능과 사용법은 글꼴 최적화 페이지를 참조해 주세요.</p>
<h3 id="글꼴-기능-인수" tabindex="-1"><a class="header-anchor" href="#글꼴-기능-인수" aria-hidden="true">#</a> 글꼴 기능 인수</h3>
<p>사용법은 Google 글꼴 및 로컬 글꼴을 검토해 주세요.</p>
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
<h3 id="키" tabindex="-1"><a class="header-anchor" href="#키" aria-hidden="true">#</a> 키</h3>
<p>폰트 로더 함수가 호출되는 디렉토리를 기준으로 한 문자열 또는 객체 배열(<code v-pre>{path: string, weight?: string, style?: string}</code> 유형)의 경로(문자열 또는 객체 배열)입니다.</p>
<p>Used in next/font/local</p>
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
<li>필수 항목</li>
</ul>
<p>예시:</p>
<ul>
<li>src:<code v-pre>./fonts/my-font.woff2</code> 여기서 my-font.woff2은 앱 디렉토리 내에 위치한 fonts라는 디렉토리에 있습니다.</li>
<li>src:[{path: <code v-pre>./inter/Inter-Thin.ttf</code>, weight: <code v-pre>100</code>},{path: <code v-pre>./inter/Inter-Regular.ttf</code>, weight: <code v-pre>400</code>},{path: <code v-pre>./inter/Inter-Bold-Italic.ttf</code>, weight: <code v-pre>700</code>, style: <code v-pre>italic</code>}]</li>
<li>폰트 로더 함수가 src:<code v-pre>../styles/fonts/my-font.ttf</code>을 사용하여 app/page.tsx에서 호출되었을 때, 여기서 my-font.ttf은 프로젝트 루트에 styles/fonts에 위치해야 합니다.</li>
</ul>
<h3 id="weight" tabindex="-1"><a class="header-anchor" href="#weight" aria-hidden="true">#</a> weight</h3>
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
<p>다음과 같은 가능성을 가진 글꼴 두께:</p>
<ul>
<li>특정 글꼴용으로 사용 가능한 두께 값 또는 변수일 경우 값의 범위를 가진 문자열</li>
<li>글꼴이 변수가 아닌 경우 가중치 값의 배열 Google 글꼴
. 다음/글꼴/구글 에만 적용됩니다.</li>
</ul>
<p>다음/글꼴/구글 및 다음/글꼴/로컬 에 사용됩니다.</p>
<ul>
<li>사용 중인 글꼴이 변수가 아닌 경우 필수입니다.</li>
</ul>
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
<p>예시:</p>
<ul>
<li>weight: <code v-pre>400</code>: Inter 폰트의 단일 무게 값에 대한 문자열입니다. 가능한 값은 <code v-pre>100</code>, <code v-pre>200</code>, <code v-pre>300</code>, <code v-pre>400</code>, <code v-pre>500</code>, <code v-pre>600</code>, <code v-pre>700</code>, <code v-pre>800</code>, <code v-pre>900</code> 또는 <code v-pre>variable</code>이며, <code v-pre>variable</code>은 기본값입니다.</li>
<li>weight: <code v-pre>100 900</code>: 변수 글꼴의 100부터 900까지의 범위에 대한 문자열입니다.</li>
<li>weight: [<code v-pre>100</code>,<code v-pre>400</code>,<code v-pre>900</code>]: 비 변수 글꼴의 3가지 가능한 값 배열입니다.</li>
</ul>
<h3 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h3>
<p>폰트 스타일
다음과 같은 가능성을 가집니다:</p>
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
<p>기본값이 <code v-pre>normal</code>인 문자열 값</p>
</li>
<li>
<p>폰트가 변수가 아닌 경우의 스타일 값 배열
다음/font/google에서만 적용됩니다.</p>
<p>next/font/google 및 next/font/local에서 사용됩니다.</p>
</li>
<li>
<p>선택적 요소</p>
</li>
</ul>
<p>예시:</p>
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
<li>style: <code v-pre>italic</code>: 문자열 - 다음/font/google의 경우 일반 또는 이탤릭체일 수 있습니다</li>
<li>style: <code v-pre>oblique</code>: 문자열 - 다음/font/local의 경우 어떤 값을 사용해도 되지만 표준 글꼴 스타일에서 가져온 것으로 예상됩니다</li>
<li>style: [<code v-pre>italic</code>,<code v-pre>normal</code>]: 다음/font/google의 2개 값으로 구성된 배열 - 값은 일반 및 이탤릭체에서 가져옵니다</li>
</ul>
<h3 id="하위-집합" tabindex="-1"><a class="header-anchor" href="#하위-집합" aria-hidden="true">#</a> 하위 집합</h3>
<p>글꼴 하위 집합은
각 세트 이름의 문자열 값 배열로 정의된다. preload 옵션이 true인 경우 preload 태그가 head에 삽입됩니다. 기본값은 true입니다. subsets를 통해 지정된 글꼴은 preload 옵션이 true인 경우 head에 링크 preload 태그가 삽입됩니다.</p>
<p>다음/font/google에서 사용됩니다</p>
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
<li>옵션</li>
</ul>
<p>예시:</p>
<ul>
<li>하위 집합: [<code v-pre>latin</code>]: 라틴 서브셋이 포함된 배열</li>
</ul>
<p>폰트의 Google Fonts 페이지에서 모든 하위 집합의 목록을 찾을 수 있어요.</p>
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
<h3 id="축" tabindex="-1"><a class="header-anchor" href="#축" aria-hidden="true">#</a> 축</h3>
<p>일부 변수 글꼴에는 포함할 수 있는 추가 축이 있을 수 있습니다. 기본적으로 글꼴 무게만 포함되어 파일 크기를 줄입니다. 축의 가능한 값은 특정 글꼴에 따라 다릅니다.</p>
<p>다음 글꼴/구글에서 사용</p>
<ul>
<li>선택사항</li>
</ul>
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
<p>예시:</p>
<ul>
<li>axes: [<code v-pre>slnt</code>]: Inter 변수 글꼴의 추가 축으로 slnt 값을 가진 배열입니다. 가능한 축 값을 구글 변수 글꼴 페이지의 필터를 사용하여 확인하고 wght 외의 축을 찾을 수 있습니다.</li>
</ul>
<h3 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> display</h3>
<p>폰트 디스플레이는 가능한 문자열 값 중 <code v-pre>auto</code>, <code v-pre>block</code>, <code v-pre>swap</code>, <code v-pre>fallback</code> 또는 <code v-pre>optional</code>을 가집니다. 기본 값은 <code v-pre>swap</code>입니다.</p>
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
<p>Used in next/font/google 및 next/font/local</p>
<ul>
<li>선택 사항</li>
</ul>
<p>예시:</p>
<ul>
<li>display: <code v-pre>optional</code>: optional 값에 할당된 문자열</li>
</ul>
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
<h3 id="preload" tabindex="-1"><a class="header-anchor" href="#preload" aria-hidden="true">#</a> preload</h3>
<p>폰트를 미리 로드해야 하는지 여부를 지정하는 부울 값입니다. 기본값은 참입니다.</p>
<p>다음과 같은 곳에서 사용됩니다: next/font/google 및 next/font/local</p>
<ul>
<li>선택 사항</li>
</ul>
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
<p>예시:</p>
<ul>
<li>preload: false</li>
</ul>
<h3 id="대체" tabindex="-1"><a class="header-anchor" href="#대체" aria-hidden="true">#</a> 대체</h3>
<p>만약 글꼴을 불러올 수 없을 때 사용할 대체 글꼴입니다. 기본값 없이 대체 글꼴의 문자열 배열입니다.</p>
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
<li>선택 사항</li>
</ul>
<p>다음/font/google 및 다음/font/local에서 사용됩니다.</p>
<p>예시:</p>
<ul>
<li>대체: [<code v-pre>system-ui</code>, <code v-pre>arial</code>]: 시스템 글꼴 또는 arial로 대체 글꼴을 설정하는 배열</li>
</ul>
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
<h3 id="adjustfontfallback" tabindex="-1"><a class="header-anchor" href="#adjustfontfallback" aria-hidden="true">#</a> adjustFontFallback</h3>
<ul>
<li>For next/font/google: 누적 레이아웃 이동을 줄이기 위해 자동 대체 폰트를 사용해야 하는지 설정하는 부울 값입니다. 기본값은 true입니다.</li>
<li>For next/font/local: 누적 레이아웃 이동을 줄이기 위해 자동 대체 폰트를 사용해야 하는지 설정하는 문자열 또는 부울 false 값입니다. 가능한 값은 <code v-pre>Arial</code>, <code v-pre>Times New Roman</code> 또는 false입니다. 기본값은 <code v-pre>Arial</code>입니다.</li>
</ul>
<p>next/font/google 및 next/font/local에서 사용됩니다.</p>
<ul>
<li>선택 사항</li>
</ul>
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
<p>예시:</p>
<ul>
<li>adjustFontFallback: false: for next/font/google</li>
<li>adjustFontFallback: <code v-pre>Times New Roman</code>: for next/font/local</li>
</ul>
<h3 id="변수" tabindex="-1"><a class="header-anchor" href="#변수" aria-hidden="true">#</a> 변수</h3>
<p>CSS 변수 방식으로 스타일이 적용될 경우 사용할 CSS 변수 이름을 정의하는 문자열 값입니다.</p>
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
<p>다음/font/google 및 next/font/local에 사용됩니다</p>
<ul>
<li>선택 사항</li>
</ul>
<p>예시:</p>
<ul>
<li>변수: <code v-pre>--my-font</code>: CSS 변수 <code v-pre>--my-font</code>이 선언됨</li>
</ul>
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
<h3 id="선언사항" tabindex="-1"><a class="header-anchor" href="#선언사항" aria-hidden="true">#</a> 선언사항</h3>
<p>생성된 @font-face를 정의하는 키-값 쌍 배열로 구성된 폰트 페이스 서술자입니다.</p>
<p>다음/폰트/로컬에서 사용됩니다.</p>
<ul>
<li>선택 사항</li>
</ul>
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
<p>예시:</p>
<ul>
<li>declarations: [{ prop: <code v-pre>ascent-override</code>, value: <code v-pre>90%</code> }]</li>
</ul>
<h2 id="스타일-적용" tabindex="-1"><a class="header-anchor" href="#스타일-적용" aria-hidden="true">#</a> 스타일 적용</h2>
<p>폰트 스타일을 적용하는 방법은 세 가지가 있어요:</p>
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
<li>className</li>
<li>style</li>
<li>CSS 변수</li>
</ul>
<h3 id="classname" tabindex="-1"><a class="header-anchor" href="#classname" aria-hidden="true">#</a> className</h3>
<p>로드된 글꼴에 대한 읽기 전용 CSS className을 반환하여 HTML 엘리먼트로 전달할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>Hello<span class="token punctuation">,</span> Next<span class="token punctuation">.</span>js<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h3 id="스타일" tabindex="-1"><a class="header-anchor" href="#스타일" aria-hidden="true">#</a> 스타일</h3>
<p>로드된 글꼴에 대한 읽기 전용 CSS 스타일 객체를 반환하여 HTML 요소에 전달합니다. 이 객체에는 fontFamily 스타일, 폰트 패밀리 이름 및 대체 글꼴에 액세스할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>style<span class="token punctuation">}</span><span class="token operator">></span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="css-변수" tabindex="-1"><a class="header-anchor" href="#css-변수" aria-hidden="true">#</a> CSS 변수</h3>
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
<p>만일 외부 스타일 시트에서 스타일을 설정하고 추가 옵션을 지정하고 싶다면, CSS 변수 방법을 사용하세요.</p>
<p>글꼴을 가져오는 것 외에도 CSS 변수가 정의된 CSS 파일을 가져와서 글꼴 로더 객체의 변수 옵션을 다음과 같이 설정해야 합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Inter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">"../styles/component.module.css"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  variable<span class="token operator">:</span> <span class="token string">"--font-inter"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>글꼴을 사용하려면, 텍스트를 스타일링 하고 싶은 부모 컨테이너의 className을 글꼴 로더의 변수 값으로, 텍스트의 className을 외부 CSS 파일의 styles 속성으로 설정하세요.</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token operator">&lt;</span>main className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>variable<span class="token punctuation">}</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">></span>안녕하세요<span class="token punctuation">,</span> 세계<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>다음과 같이 component.module.css CSS 파일에 텍스트 셀렉터 클래스를 정의합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>text <span class="token punctuation">{</span>
  font<span class="token operator">-</span>family<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>inter<span class="token punctuation">)</span><span class="token punctuation">;</span>
  font<span class="token operator">-</span>weight<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">;</span>
  font<span class="token operator">-</span>style<span class="token operator">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위 예시에서는 &quot;Hello World&quot; 텍스트가 Inter 글꼴을 사용하여 스타일이 적용되며 font-weight: 200 및 font-style: italic로 생성된 폰트 폴백이 적용됩니다.</p>
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
<h2 id="글꼴-정의-파일-사용하기" tabindex="-1"><a class="header-anchor" href="#글꼴-정의-파일-사용하기" aria-hidden="true">#</a> 글꼴 정의 파일 사용하기</h2>
<p><code v-pre>localFont</code> 또는 <code v-pre>Google font</code> 함수를 호출할 때마다 해당 글꼴이 귀하의 애플리케이션에서 하나의 인스턴스로 호스팅됩니다. 따라서 여러 곳에서 동일한 글꼴을 사용해야 하는 경우, 한 곳에서 해당 글꼴을로드하고 필요한 위치에서 해당 글꼴 객체를 가져와야 합니다. 이는 글꼴 정의 파일을 사용하여 수행됩니다.</p>
<p>예를 들어, 앱 디렉토리의 루트에 있는 styles 폴더에 fonts.ts 파일을 만듭니다.</p>
<p>그런 다음, 아래와 같이 글꼴 정의를 지정합니다:</p>
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
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Inter<span class="token punctuation">,</span> Lora<span class="token punctuation">,</span> Source_Sans_3 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/font/google"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> localFont <span class="token keyword">from</span> <span class="token string">"next/font/local"</span><span class="token punctuation">;</span>

<span class="token comment">// 변수 글꼴을 정의합니다.</span>
<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> lora <span class="token operator">=</span> <span class="token function">Lora</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 변수 글꼴을 사용하여 2개의 무가변 글꼴 두꺼운 정도를 정의합니다.</span>
<span class="token keyword">const</span> sourceCodePro400 <span class="token operator">=</span> <span class="token function">Source_Sans_3</span><span class="token punctuation">(</span><span class="token punctuation">{</span> weight<span class="token operator">:</span> <span class="token string">"400"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sourceCodePro700 <span class="token operator">=</span> <span class="token function">Source_Sans_3</span><span class="token punctuation">(</span><span class="token punctuation">{</span> weight<span class="token operator">:</span> <span class="token string">"700"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// GreatVibes-Regular.ttf 글꼴이 styles 폴더에 저장된 사용자 정의 로컬 글꼴을 정의합니다.</span>
<span class="token keyword">const</span> greatVibes <span class="token operator">=</span> <span class="token function">localFont</span><span class="token punctuation">(</span><span class="token punctuation">{</span> src<span class="token operator">:</span> <span class="token string">"./GreatVibes-Regular.ttf"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> inter<span class="token punctuation">,</span> lora<span class="token punctuation">,</span> sourceCodePro400<span class="token punctuation">,</span> sourceCodePro700<span class="token punctuation">,</span> greatVibes <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 정의를 다음과 같이 코드에서 사용할 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> inter<span class="token punctuation">,</span> lora<span class="token punctuation">,</span> sourceCodePro700<span class="token punctuation">,</span> greatVibes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../styles/fonts"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>인터 글꼴을 사용한 Hello world<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p style<span class="token operator">=</span><span class="token punctuation">{</span>lora<span class="token punctuation">.</span>style<span class="token punctuation">}</span><span class="token operator">></span>Lora 글꼴을 사용한 Hello world<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token punctuation">{</span>sourceCodePro700<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>두꺼운 정도가 <span class="token number">700</span>인 Source_Sans_3 글꼴을 사용한 Hello world<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p className<span class="token operator">=</span><span class="token punctuation">{</span>greatVibes<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>Great Vibes 글꼴 제목<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>코드에서 글꼴 정의를 쉽게 액세스하도록 하려면 tsconfig.json 또는 jsconfig.json 파일에서 다음과 같이 경로 별칭을 정의할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"@/fonts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./styles/fonts"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 다음과 같이 어떤 글꼴 정의든 가져올 수 있습니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> greatVibes<span class="token punctuation">,</span> sourceCodePro400 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/fonts"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="버전-변경" tabindex="-1"><a class="header-anchor" href="#버전-변경" aria-hidden="true">#</a> 버전 변경</h2>
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
<table>
<thead>
<tr>
<th>Version</th>
<th>Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>v13.2.0</code></td>
<td><code v-pre>@next/font</code> renamed to <code v-pre>next/font</code>. Installation no longer required.</td>
</tr>
<tr>
<td><code v-pre>v13.0.0</code></td>
<td><code v-pre>@next/font</code> was added.</td>
</tr>
</tbody>
</table>
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
</div></template>
