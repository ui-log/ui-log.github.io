<template><div><p>요즘 디지털 시대에는 브라우저 확장 프로그램이 사용자 경험 및 생산성을 향상시키는 필수 도구로 자리 잡았어요. 특히 Chrome 확장 프로그램은 브라우징 경험을 맞춤화하는 작은 소프트웨어 프로그램입니다. 이를 통해 Chrome 기능과 동작을 개인의 요구사항이나 선호에 맞게 조정할 수 있어요. 이 글에서는 React를 사용하여 Chrome 확장 프로그램을 만드는 방법에 대해 알아보겠습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_0.png" alt="Building a Chrome Extension with React"></p>
<h1 id="매니페스트-파일-이해하기" tabindex="-1"><a class="header-anchor" href="#매니페스트-파일-이해하기" aria-hidden="true">#</a> 매니페스트 파일 이해하기</h1>
<p>manifest.json 파일은 JSON 형식의 메타데이터 파일로, 확장 프로그램의 이름, 버전 등과 같은 속성을 포함합니다. 각 줄을 자세히 살펴보죠:</p>
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
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"확장 프로그램 이름"</span><span class="token punctuation">,</span> <span class="token comment">// 확장 프로그램의 이름입니다.</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"0.1"</span><span class="token punctuation">,</span> <span class="token comment">// 확장 프로그램의 버전입니다.</span>
  <span class="token string-property property">"manifest_version"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// Manifest 파일 형식 버전을 지정합니다. 최신 기능을 사용하려면 3을 사용하십시오.</span>
  <span class="token string-property property">"permissions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"activeTab"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 확장 프로그램이 필요로 하는 권한 목록입니다.</span>
  <span class="token string-property property">"action"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"default_popup"</span><span class="token operator">:</span> <span class="token string">"popup.html"</span> <span class="token comment">// 확장 프로그램 아이콘을 클릭했을 때 표시될 HTML 파일입니다.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"content_scripts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string-property property">"matches"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"&lt;all_urls>"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 콘텐츠 스크립트가 실행될 URL을 지정합니다.</span>
      <span class="token string-property property">"js"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"contentScript.js"</span><span class="token punctuation">]</span> <span class="token comment">// 적용될 JavaScript 파일을 지정합니다.</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="설명" tabindex="-1"><a class="header-anchor" href="#설명" aria-hidden="true">#</a> 설명:</h2>
<ul>
<li>name: 확장 프로그램의 이름입니다.</li>
<li>version: 확장 프로그램의 버전으로 업데이트 시 유용합니다.</li>
<li>manifest_version: Manifest 파일 형식의 버전입니다. 현재 최신 버전은 3입니다.</li>
<li>permissions: 확장 프로그램이 필요로하는 권한의 배열입니다. 여기서 activeTab은 활성 탭과 상호 작용하는 권한을 부여합니다.</li>
<li>action: 확장 프로그램 아이콘을 클릭했을 때 표시되는 팝업의 속성을 정의합니다.</li>
<li>default_popup: 팝업에 표시될 HTML 파일입니다.</li>
<li>content_scripts: 일치하는 페이지에 삽입될 JavaScript 파일을 정의하는 콘텐츠 스크립트 객체의 배열입니다.</li>
<li>matches: 일치 패턴의 배열입니다. <code v-pre>all_urls</code>은 모든 URL에서 콘텐츠 스크립트가 실행됨을 의미합니다.</li>
<li>js: 페이지에 주입될 JavaScript 파일의 배열입니다. 이 예시에서 contentScript.js는 실행되는 JavaScript 파일입니다. 상호작용할 웹 페이지에 확장 프로그램이 활성화된 Logic이 포함된 파일입니다.</li>
</ul>
<p>이것이 Chrome 확장 프로그램을 위한 manifest.json 파일의 기본 구조입니다. 확장 프로그램의 요구에 따라 필드를 추가할 수 있습니다.</p>
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
<h1 id="팝업-html" tabindex="-1"><a class="header-anchor" href="#팝업-html" aria-hidden="true">#</a> 팝업.html</h1>
<p>우리의 팝업.html은 확장 프로그램 아이콘을 클릭했을 때 표시되는 간단한 HTML 파일입니다. 현재 &quot;안녕 익스텐션!&quot; 메시지가 표시됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>
<span class="token operator">&lt;</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"IE=edge"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
<span class="token operator">&lt;</span>body<span class="token operator">></span>
    <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello Extension<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그 다음으로 확장 프로그램 폴더는 다음과 같아야 합니다:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_1.png" alt="Chrome Extension"></p>
<h1 id="확장-프로그램-로드" tabindex="-1"><a class="header-anchor" href="#확장-프로그램-로드" aria-hidden="true">#</a> 확장 프로그램 로드</h1>
<p>테스트를 위해 Chrome에 언팩된 확장 프로그램을 로드하려면 다음 단계를 따르세요:</p>
<ul>
<li>Google Chrome을 열고 chrome://extensions/로 이동합니다.</li>
<li>오른쪽 상단에서 “개발자 모드”를 토글합니다.</li>
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
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_2.png" alt="Building a Chrome Extension with React 2"></p>
<ol start="3">
<li>
<p>나타나는 &quot;압축 해제된 확장 프로그램을 로드합니다.&quot; 버튼을 클릭합니다.</p>
</li>
<li>
<p>확장 프로그램 폴더로 이동하여 선택합니다.</p>
</li>
</ol>
<p><img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_3.png" alt="Building a Chrome Extension with React 3"></p>
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
<p>이 단계를 완료하면 확장 프로그램이 활성화되어 크롬에서 테스트 중입니다.</p>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_4.png" />
<p>이제 확장 프로그램이 로드되었으니 열어서 작동하는 것을 확인해 보겠습니다.</p>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_5.png" />
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
<h1 id="동적-확장을-위한-react-통합" tabindex="-1"><a class="header-anchor" href="#동적-확장을-위한-react-통합" aria-hidden="true">#</a> 동적 확장을 위한 React 통합</h1>
<p>React의 컴포넌트 기반 아키텍처와 상태 관리 기능은 동적 및 상호 작용형 크롬 확장 프로그램을 구축하기에 탁월한 선택입니다. React를 사용하면 재사용 가능한 UI 구성 요소를 쉽게 만들고, 확장 프로그램의 다양한 부분에서 상태를 관리하며, 훅이나 컨텍스트를 사용하여 더 복잡한 로직을 처리할 수 있습니다. 이를 통해 간단한 UI 향상부터 복잡한 웹 조작까지 다양한 가능성이 열리며, 동시에 깔끔하고 관리하기 쉬운 코드베이스를 유지할 수 있습니다.</p>
<h2 id="react-설치하기" tabindex="-1"><a class="header-anchor" href="#react-설치하기" aria-hidden="true">#</a> React 설치하기</h2>
<p>크롬 확장 프로그램에 React를 통합하기 위한 첫 번째 단계는 설치하는 것입니다. Create React App (CRA)를 사용하여 새 React 애플리케이션을 만들어야 합니다. CRA는 합리적인 기본 설정과 바로 사용 가능한 최상의 관행을 갖춘 새 React 프로젝트를 설정해줍니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npx create<span class="token operator">-</span>react<span class="token operator">-</span>app my<span class="token operator">-</span>chrome<span class="token operator">-</span>extension
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령을 실행한 후 my-chrome-extension이라는 새 폴더가 생성되어 React 기반의 Chrome 확장 프로그램을 시작하는 데 필요한 모든 파일이 포함됩니다.</p>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_6.png" />
<h1 id="팝업에-react-추가하기" tabindex="-1"><a class="header-anchor" href="#팝업에-react-추가하기" aria-hidden="true">#</a> 팝업에 React 추가하기</h1>
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
<p>이제 기본 React 앱을 설정했으니 Chrome 확장 프로그램에 통합해 봅시다. 현재 App.js 파일은 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello extension from react<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 간단한 React 컴포넌트는 확장 프로그램 팝업의 콘텐츠로 사용될 것입니다. 이를 위해 React 앱을 빌드하고 manifest.json 파일을 빌드된 HTML 파일로 지정해야 합니다.</p>
<h2 id="react-앱-빌드하기" tabindex="-1"><a class="header-anchor" href="#react-앱-빌드하기" aria-hidden="true">#</a> React 앱 빌드하기</h2>
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
<p>먼저 React 앱을 만들어 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령어를 실행하면 최적화된 버전의 앱이 담긴 build 폴더가 생성됩니다.
보다 편리하게 사용하기 위해 React 프로젝트의 package.json 파일에서 build 스크립트를 수정하여 build 폴더를 직접 확장 프로젝트 폴더로 이동시킬 수 있습니다. 이렇게 하면 파일을 수동으로 옮길 필요가 없어집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token string">"react-scripts build &amp;&amp; mv build ../extension/build"</span>
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
<h2 id="매니페스트-파일-업데이트" tabindex="-1"><a class="header-anchor" href="#매니페스트-파일-업데이트" aria-hidden="true">#</a> 매니페스트 파일 업데이트</h2>
<p>이제 빌드된 HTML 파일을 가리키도록 manifest.json을 업데이트하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token string-property property">"action"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"default_popup"</span><span class="token operator">:</span> <span class="token string">"./build/index.html"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>저희의 폴더 구조는 다음과 같아야 합니다:</p>
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
<img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_7.png" />
<p>위 단계를 마치면 이제 React 앱이 Chrome 확장 프로그램의 팝업으로 작동해야 합니다. 확장 프로그램 아이콘을 클릭하면 React 앱이 표시되어야 합니다.</p>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_8.png" />
<h1 id="향상된-기능을-위한-manifest-사용자-정의" tabindex="-1"><a class="header-anchor" href="#향상된-기능을-위한-manifest-사용자-정의" aria-hidden="true">#</a> 향상된 기능을 위한 Manifest 사용자 정의</h1>
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
<p>manifest.json 파일은 매우 유연하며 확장 프로그램의 요구에 맞게 다양한 사용자 정의를 허용합니다. 권한부터 UI 요소까지 다양한 설정을 지정하여 확장 프로그램을 우리가 원하는 대로 간단하거나 복잡하게 만들 수 있습니다.</p>
<p>더 자세한 내용은 공식 Google Chrome 확장 프로그램 매니페스트 문서를 참조할 수 있습니다.</p>
<h2 id="예시-팝업-너비와-높이-변경" tabindex="-1"><a class="header-anchor" href="#예시-팝업-너비와-높이-변경" aria-hidden="true">#</a> 예시: 팝업 너비와 높이 변경</h2>
<p>가장 흔한 사용자 정의 중 하나는 팝업의 크기를 조정하는 것입니다. 우리는 manifest.json에서 팝업 창의 너비와 높이를 쉽게 변경할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token string-property property">"action"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"default_popup"</span><span class="token operator">:</span> <span class="token string">"./build/index.html"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"default_width"</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
    <span class="token string-property property">"default_height"</span><span class="token operator">:</span> <span class="token number">600</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과:</p>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_9.png" />
<h1 id="chrome-확장-프로그램을-사용하여-dom-조작하기" tabindex="-1"><a class="header-anchor" href="#chrome-확장-프로그램을-사용하여-dom-조작하기" aria-hidden="true">#</a> Chrome 확장 프로그램을 사용하여 DOM 조작하기</h1>
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
<p>Chrome 확장 프로그램의 가장 강력한 기능 중 하나는 웹 페이지의 DOM과 상호작용할 수 있는 능력입니다. 이를 통해 콘텐츠를 수정하거나 스타일을 변경하거나 새로운 기능을 추가할 수 있습니다. 이 예에서는 웹 페이지의 색상을 그레이스케일로 전환하고 다시 원래대로 되돌리는 기능을 구현했습니다.</p>
<h2 id="구현-단계별-안내" tabindex="-1"><a class="header-anchor" href="#구현-단계별-안내" aria-hidden="true">#</a> 구현 단계별 안내</h2>
<p>React 팝업 UI: React 앱에서 '색상 제거' 버튼을 만들어서 그레이스케일 전환을 트리거하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleGrayscale<span class="token punctuation">}</span><span class="token operator">></span>Remove Color<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
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
<p>메시징: 팝업에서 컨텐츠 스크립트로 작업을 전송하려면 Chrome의 메시징 API를 사용하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>chrome<span class="token punctuation">.</span>tabs<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>tab<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'removeColorControl'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>콘텐츠 스크립트: 메시지를 수신하고 해당 기능을 실행합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>chrome<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span>onMessage<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> sender<span class="token punctuation">,</span> sendResponse</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>action <span class="token operator">===</span> <span class="token string">'removeColorControl'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">removeColorControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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
<p>DOM 조작: 그레이스케일을 토글하는 기능을 구현하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> newStyleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"style"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
newStyleElement<span class="token punctuation">.</span>id <span class="token operator">=</span> styleId<span class="token punctuation">;</span>
newStyleElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> styleContent<span class="token punctuation">;</span>
document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newStyleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="중요성" tabindex="-1"><a class="header-anchor" href="#중요성" aria-hidden="true">#</a> 중요성</h2>
<p>DOM을 조작할 수 있는 능력은 크롬 확장 프로그램이 다양성을 띄는 이유입니다. 기능을 향상시키거나 접근성을 향상시키거나 새로운 기능을 제공하는 등, 이 측면을 이해하는 것은 효과적인 확장 프로그램 개발에 필수적입니다.</p>
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
<p>React 프로젝트를 다시 빌드하여 변경 사항이 적용되었는지 확인해보세요.</p>
<p>전체 코드는 이렇게 생겼을 거에요:</p>
<p>App.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">toggleGrayscale</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    chrome<span class="token punctuation">.</span>tabs<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">currentWindow</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">tabs</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> tab <span class="token operator">=</span> tabs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tab <span class="token operator">&amp;&amp;</span> tab<span class="token punctuation">.</span>id <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        chrome<span class="token punctuation">.</span>tabs<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>tab<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'removeColorControl'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h1<span class="token operator">></span>Hello extension from react<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>toggleGrayscale<span class="token punctuation">}</span><span class="token operator">></span>Remove Color<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>contentScript.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">removeColorControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">const</span> styleId <span class="token operator">=</span> <span class="token string">"un-color-display"</span><span class="token punctuation">;</span>
 <span class="token keyword">const</span> styleContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">
        html {
          filter: grayscale(1)!important;
        }
      </span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

 <span class="token keyword">const</span> styleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>styleId<span class="token punctuation">)</span><span class="token punctuation">;</span>

 <span class="token keyword">if</span> <span class="token punctuation">(</span>styleElement<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>styleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> newStyleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"style"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  newStyleElement<span class="token punctuation">.</span>id <span class="token operator">=</span> styleId<span class="token punctuation">;</span>
  newStyleElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> styleContent<span class="token punctuation">;</span>
  document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newStyleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

chrome<span class="token punctuation">.</span>runtime<span class="token punctuation">.</span>onMessage<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> sender<span class="token punctuation">,</span> sendResponse</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>action <span class="token operator">===</span> <span class="token string">'removeColorControl'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">removeColorControl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위키피디아 웹사이트에서 버튼을 클릭한 후 색상이 제거되어 페이지가 회색조로 변환되는 것을 볼 수 있습니다.</p>
<img src="@source/docs/Nextjs/2024-04-05-BuildingaChromeExtensionwithReact/img/BuildingaChromeExtensionwithReact_10.png" />
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
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>React를 활용한 Chrome 확장 프로그램 개발은 웹 브라우징 경험을 향상시키는 강력한 방법을 제공합니다. 팝업의 간단한 UI부터 복잡한 DOM 조작까지, 가능성은 무한합니다. 이 튜토리얼에서는 웹 페이지의 색상을 그레이스케일로 전환하고 다시 되돌릴 수 있는 Chrome 확장 프로그램을 만드는 단계를 안내했습니다. 이 예제는 React와 결합했을 때 Chrome 확장 프로그램의 유연성과 기능을 보여줍니다. 변경 사항이 있는 경우 React 프로젝트를 다시 빌드하고, 더 발전된 유용한 확장 프로그램을 만드는 길에 한 발짝 더 나아갈 수 있을 것입니다.</p>
<h1 id="다음은" tabindex="-1"><a class="header-anchor" href="#다음은" aria-hidden="true">#</a> 다음은?</h1>
<p>즐거운 코딩하세요! 시리즈의 다음 부분에서는 보다 구조화된 DOM 조작에 대해 깊이 파고들 예정입니다. Chrome 확장 프로그램을 더욱 향상시키기 위한 고급 기술들을 소개할 예정이니 기대해 주세요.</p>
</div></template>
