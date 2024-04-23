<template><div><img src="@source/docs/Tech/2024-04-19-HowtoaddTailwindCSStoyourHTMLproject/img/HowtoaddTailwindCSStoyourHTMLproject_0.png" />
<h1 id="tailwind가-훌륭한-이유는-무엇인가요" tabindex="-1"><a class="header-anchor" href="#tailwind가-훌륭한-이유는-무엇인가요" aria-hidden="true">#</a> Tailwind가 훌륭한 이유는 무엇인가요?</h1>
<p>Tailwind는 일반 CSS로는 어려움을 겪는 사람들에게 많은 도움이 됩니다. Tailwind는 낮은 수준의 유틸리티 클래스를 제공하여 HTML 파일을 떠나지 않고도 독특한 디자인을 만들 수 있게 해줍니다. 자세한 정보는 공식 문서를 참조하십시오.</p>
<h1 id="프로젝트에-tailwind를-추가하는-방법은" tabindex="-1"><a class="header-anchor" href="#프로젝트에-tailwind를-추가하는-방법은" aria-hidden="true">#</a> 프로젝트에 Tailwind를 추가하는 방법은?</h1>
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
<h1 id="_1-노드-설치" tabindex="-1"><a class="header-anchor" href="#_1-노드-설치" aria-hidden="true">#</a> 1. 노드 설치</h1>
<p>테일윈드를 설치하기 전에 컴퓨터에 노드가 설치되어 있어야 합니다. 노드에는 종속성을 관리하는 데 사용되는 패키지 관리자(NPM)가 포함되어 있습니다.</p>
<p>노드가 컴퓨터에 설치되어 있는지 확인하려면 터미널을 열고 다음 명령어를 입력하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>node <span class="token operator">-</span>v
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
<p>컴퓨터에 노드가 없는 경우, 공식 노드 웹사이트로 이동하여 다운로드해주세요.</p>
<h2 id="_2-프로젝트-만들기" tabindex="-1"><a class="header-anchor" href="#_2-프로젝트-만들기" aria-hidden="true">#</a> 2. 프로젝트 만들기</h2>
<p>프로젝트를 만들려면 디렉토리를 하나 생성하면 됩니다. 컴퓨터의 터미널을 열고 다음 명령어를 입력하세요:</p>
<p>프로젝트는 데스크탑에 만들 것이므로, 디렉토리 간 이동에 사용하는 cd 명령어를 사용하겠습니다.</p>
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
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>cd Desktop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>mkdir 명령어는 새로운 디렉토리를 생성하는 데 사용됩니다. 이 경우에는 tailwindProject라는 새 폴더를 만들고 있습니다.</p>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>mkdir tailwindProject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>방금 만든 폴더 안에는 몇 가지 더 폴더(src 및 styles 폴더)를 추가해야 합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd tailwindProject
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 tailwindProject 디렉토리 안에 두 개의 폴더를 생성합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>mkdir src styles
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_3-npm을-사용하여-tailwind-css-설치하기" tabindex="-1"><a class="header-anchor" href="#_3-npm을-사용하여-tailwind-css-설치하기" aria-hidden="true">#</a> 3. NPM을 사용하여 Tailwind CSS 설치하기</h1>
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
<p>터미널에 이 명령어를 입력하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">-</span><span class="token constant">D</span> tailwindcss
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Tailwind에는 테일윈드 테마를 사용자 정의하는 구성 파일이 함께 제공됩니다. 사용자 정의 색상, 글꼴 및 기타 다양한 사항을 추가할 수 있습니다. 테일윈드 구성 파일을 만들려면 이 명령어를 실행하면 됩니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx tailwindcss init
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
<p>그리고 가장 좋아하는 코드 편집기로 프로젝트를 열어보세요. Visual Studio Code (VSCode)를 사용 중이라면 터미널에 다음 명령어를 입력하면 프로젝트가 자동으로 열립니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>code <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_4-템플릿-경로-구성하기" tabindex="-1"><a class="header-anchor" href="#_4-템플릿-경로-구성하기" aria-hidden="true">#</a> 4. 템플릿 경로 구성하기</h1>
<p>구성 파일은 tailwind가 tailwind 클래스를 사용하는 템플릿 파일을 어디에서 찾을지 알려주는 데 사용됩니다. 이것은 중요한데, tailwind는 그 경로를 사용하여 HTML 파일을 클래스로 스캔하고 그 클래스를 스타일 시트에 추가합니다.</p>
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
<p>tailwind.config.js 파일 안에, 3단계에서 생성된 파일에 html 파일의 경로를 content에 추가하세요.</p>
<p>내 경우에는 이전 단계에서 생성된 src 폴더 안에 모든 html 파일이 저장될 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/**/*.{html,js}"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_5-css에-tailwind-지시문-추가하기" tabindex="-1"><a class="header-anchor" href="#_5-css에-tailwind-지시문-추가하기" aria-hidden="true">#</a> 5. CSS에 Tailwind 지시문 추가하기</h1>
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
<p>styles 폴더 안에 tailwind.css 또는 원하는 이름으로 CSS 파일을 만들어 주세요. 그리고 다음 내용을 추가해 주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>@tailwind base<span class="token punctuation">;</span>
@tailwind components<span class="token punctuation">;</span>
@tailwind utilities<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tailwind 지시문 이외에도 해당 파일을 사용하여 사용자 정의 CSS를 추가할 수 있습니다.</p>
<h1 id="_6-tailwind-cli-빌드-프로세스-시작" tabindex="-1"><a class="header-anchor" href="#_6-tailwind-cli-빌드-프로세스-시작" aria-hidden="true">#</a> 6. Tailwind CLI 빌드 프로세스 시작</h1>
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
<p>거의 다 왔어요. 다음 단계는 유틸리티 클래스를 포함하는 CSS 파일을 만드는 것입니다.</p>
<h2 id="_6-1-package-json-파일-열기" tabindex="-1"><a class="header-anchor" href="#_6-1-package-json-파일-열기" aria-hidden="true">#</a> 6.1 package.json 파일 열기</h2>
<p>다음 스크립트를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token string-property property">"dev"</span><span class="token operator">:</span><span class="token string">"npx tailwindcss -i ./styles/tailwind.css -o ./styles/output.css --watch"</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
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
<p>위 스크립트는 테일윈드 디렉티브가 포함된 파일을 입력으로 사용하여 프로젝트에서 사용되는 모든 유틸리티 클래스를 포함하는 CSS를 생성합니다.</p>
<h2 id="_6-2-스크립트-실행" tabindex="-1"><a class="header-anchor" href="#_6-2-스크립트-실행" aria-hidden="true">#</a> 6.2 스크립트 실행</h2>
<p>터미널에서 다음 명령을 입력하세요</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run dev
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
<p>거기에 추가로 매번 프로젝트를 시작할 때마다 사용될 것입니다.</p>
<h1 id="_7-html에서-tailwind-사용-시작하기" tabindex="-1"><a class="header-anchor" href="#_7-html에서-tailwind-사용-시작하기" aria-hidden="true">#</a> 7. HTML에서 Tailwind 사용 시작하기</h1>
<p>좋아하는 코드 편집기에서 프로젝트를 열고 일부 HTML 코드를 작성하세요. 무엇보다 중요한 것은 <strong>stylesheet를 output.css 파일에 연결하는 것을 잊지 말아주세요.</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>html
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"IE=edge"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>link  href<span class="token operator">=</span><span class="token string">"/styles/output.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>title<span class="token operator">></span>Tailwind Starter<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"bg-gray-800"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text-center mt-12"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>h1 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text-4xl text-yellow-500 font-bold"</span><span class="token operator">></span>Heap Heap Arrayy<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"text-xl text-white mt-4"</span><span class="token operator">></span> 저는 Tailwind를 사용하여 첫 <span class="token constant">HTML</span> 프로젝트를 만들었습니다<span class="token punctuation">.</span> <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="_8-라이브-서버로-테스트해보세요" tabindex="-1"><a class="header-anchor" href="#_8-라이브-서버로-테스트해보세요" aria-hidden="true">#</a> 8. 라이브 서버로 테스트해보세요</h1>
<p>브라우저에서 코드를 열어서 모든 것이 제대로 작동하는지 확인해보세요. CSS 스타일이 표시되지 않는다면, 어떤 단계를 놓친 것일지도 모릅니다. 이 튜토리얼 생성 시 사용했던 파일 구조와 비교해보세요.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>독서해주셔서 감사합니다. 궁금한 점이 있으시면 언제든지 트위터 @khazifire 에게 연락주세요. 비슷한 컨텐츠를 더 보고 싶으시다면 팔로우도 잊지말고 해주세요.</p>
</div></template>
