<template><div><p>다음과 같이 친절하게 번역해보겠습니다.</p>
<hr>
<p>당신의 Next.js 애플리케이션에 맞게 설정 가능한 모달 컴포넌트를 어떻게 효율적으로 통합할 수 있는지 알아보세요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-CreateamodalthatcanbeopenedfromanywhereinNextjs13/img/CreateamodalthatcanbeopenedfromanywhereinNextjs13_0.png" alt="Next.js 13.0에서 어디에서든 열 수 있는 모달 만들기"></p>
<h1 id="_1-새로운-next-js-애플리케이션-만들기" tabindex="-1"><a class="header-anchor" href="#_1-새로운-next-js-애플리케이션-만들기" aria-hidden="true">#</a> 1. 새로운 Next.js 애플리케이션 만들기.</h1>
<h2 id="먼저-page-tsx-와-globals-css-를-정리하는-것으로-시작하세요" tabindex="-1"><a class="header-anchor" href="#먼저-page-tsx-와-globals-css-를-정리하는-것으로-시작하세요" aria-hidden="true">#</a> 먼저 'page.tsx'와 'globals.css'를 정리하는 것으로 시작하세요.</h2>
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
<h1 id="_2-모달-컴포넌트-만들기" tabindex="-1"><a class="header-anchor" href="#_2-모달-컴포넌트-만들기" aria-hidden="true">#</a> 2. 모달 컴포넌트 만들기</h1>
<p>'앱' 폴더에 'components' 폴더를 생성하고 'Modal.tsx' 파일을 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Modal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>dialog
                className<span class="token operator">=</span><span class="token string">"fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"bg-white m-auto p-8"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-col items-center"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>h3<span class="token operator">></span>모달 내용<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">></span>
                        <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> className<span class="token operator">=</span><span class="token string">"bg-red-500 text-white p-2 "</span><span class="token operator">></span>모달 닫기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>

                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>dialog<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Modal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것은 간단한 모달 컴포넌트입니다. '모달 닫기' 버튼을 추가했지만 아직 기능이 작동하지는 않습니다.</p>
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
<h1 id="_3-레이아웃에-모달-구현하기" tabindex="-1"><a class="header-anchor" href="#_3-레이아웃에-모달-구현하기" aria-hidden="true">#</a> 3. 레이아웃에 모달 구현하기</h1>
<p>'Modal' 컴포넌트를 'layout.tsx'에 통합하여 애플리케이션 전반에서 모달의 모습을 시각화하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">'./globals.css'</span>
<span class="token keyword">import</span> type <span class="token punctuation">{</span>Metadata<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Inter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'next/font/google'</span>
<span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">"./components/Modal"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> inter <span class="token operator">=</span> <span class="token function">Inter</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">subsets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'latin'</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">metadata</span><span class="token operator">:</span> Metadata <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Create Next App'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">'Generated by create next app'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">RootLayout</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>
                                       children<span class="token punctuation">,</span>
                                   <span class="token punctuation">}</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode
<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>body className<span class="token operator">=</span><span class="token punctuation">{</span>inter<span class="token punctuation">.</span>className<span class="token punctuation">}</span><span class="token operator">></span>
        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
        <span class="token operator">&lt;</span>Modal<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-이제-자습서를-클릭한-이유인-부분에-대해-알아보겠습니다-모달을-열고-닫는-논리를-구현하는-방법입니다" tabindex="-1"><a class="header-anchor" href="#_4-이제-자습서를-클릭한-이유인-부분에-대해-알아보겠습니다-모달을-열고-닫는-논리를-구현하는-방법입니다" aria-hidden="true">#</a> 4. 이제 자습서를 클릭한 이유인 부분에 대해 알아보겠습니다: 모달을 열고 닫는 논리를 구현하는 방법입니다.</h1>
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
<p>modal.</p>
<p>모달을 열어야 한다는 것을 나타내는 쿼리 매개변수를 만드는 것을 제안합니다.</p>
<p>모달 기능 구성 요소 내에서는 'useSearchParams()' 훅을 사용하여 우리의 경로에 쿼리가 있는지 확인한 후, 해당하는 경우에만 모달을 표시하는 조건을 만듭니다. 훅을 사용할 수 있도록 페이지 상단에 &quot;useClient&quot;를 추가하는 것을 잊지 마세요.</p>
<p>모달을 닫으려면 URL에서 'modal' 쿼리 매개변수를 삭제해야 합니다. 'usePathname' 훅을 사용하여 이를 수행해봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">"use client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>useSearchParams<span class="token punctuation">,</span> usePathname<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"next/navigation"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Modal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> searchParams <span class="token operator">=</span> <span class="token function">useSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> modal <span class="token operator">=</span> searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"modal"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> pathname <span class="token operator">=</span> <span class="token function">usePathname</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token punctuation">{</span>modal <span class="token operator">&amp;&amp;</span>
                <span class="token operator">&lt;</span>dialog
                    className<span class="token operator">=</span><span class="token string">"fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"bg-white m-auto p-8"</span><span class="token operator">></span>
                        <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"flex flex-col items-center"</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>p<span class="token operator">></span>모달 콘텐츠<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                            <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">></span>
                            <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token punctuation">{</span>pathname<span class="token punctuation">}</span><span class="token operator">></span>
                                <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> className<span class="token operator">=</span><span class="token string">"bg-red-500 text-white p-2"</span><span class="token operator">></span>모달 닫기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
                            <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
                        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>dialog<span class="token operator">></span>
            <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Modal<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-모달-열기" tabindex="-1"><a class="header-anchor" href="#_5-모달-열기" aria-hidden="true">#</a> 5. 모달 열기</h1>
<p>모달을 열려면 쿼리 파라미터에 modal=true을 추가하세요. 트리거 역할을 하는 요소 (버튼 또는 다른 구성 요소)를 감싸는 href=&quot;?modal=true&quot;을 사용한 Link 구성 요소를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">"next/link"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"p-4"</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>p<span class="token operator">></span>홈페이지<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                <span class="token operator">&lt;</span>Link href<span class="token operator">=</span><span class="token string">"?modal=true"</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> className<span class="token operator">=</span><span class="token string">"bg-blue-500 text-white p-2"</span><span class="token operator">></span>모달 열기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>Link<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
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
<p>이제 이 쿼리 매개변수를 웹사이트의 어떤 페이지나 구성 요소에 추가할 수 있어요! 특정 페이지에서만 작동하도록하려면 전역 'layout.tsx' 대신 원하는 페이지에 '’를 추가하세요.</p>
<p>P.S. &quot;전체 페이지 / 클라이언트 측 렌더링으로 전환&quot; 경고를 받으면 간단한 해결책이 있어요: <code v-pre>Modal /</code> 구성 요소를 Suspense 경계로 감싸세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Suspense<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token operator">...</span>
<span class="token operator">&lt;</span>Suspense fallback<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span><span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>Modal<span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">></span>
<span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://miro.medium.com/v2/resize:fit:1400/1*tSHdv1oj5LslFNJfoe2ohg.gif" />
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
<p>제 튜토리얼을 참고해 주셔서 감사합니다. 정말 도움이 되었기를 진심으로 바라요!</p>
<p>이 프로젝트의 소스 코드는 GitHub에서 찾을 수 있어요.</p>
<p>LinkedIn이나 GitHub에서도 연락 주시면 감사하겠어요! 제 웹사이트도 방문해 주세요. 여기서 더 많은 튜토리얼을 공유할 거에요.</p>
</div></template>
