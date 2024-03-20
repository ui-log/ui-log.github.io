<template><div><h1 id="nextjs-14-eslint-설정-및-사용-방법" tabindex="-1"><a class="header-anchor" href="#nextjs-14-eslint-설정-및-사용-방법" aria-hidden="true">#</a> Nextjs 14 ESLint 설정 및 사용 방법</h1>
<p>Next.js는 기본적으로 통합된 ESLint 경험을 제공합니다. package.json에 next lint를 스크립트로 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"lint"</span><span class="token operator">:</span> <span class="token string">"next lint"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 npm run lint 또는 yarn lint을 실행하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>만약이 응용 프로그램에 이미 ESLint가 구성되어 있지 않다면 설치 및 구성 프로세스를 안내받을 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>이와 같은 프롬프트가 표시됩니다:
? ESLint를 어떻게 구성 하시겠습니까?
❯ 엄격 (추천)
기본
취소</p>
</blockquote>
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
<p>다음 중 세 가지 옵션 중 하나를 선택할 수 있습니다:</p>
<ul>
<li>엄격(Strict): Next.js의 기본 ESLint 구성에 엄격한 Core Web Vitals 규칙 세트를 포함합니다. 이 옵션은 ESLint를 처음 설정하는 개발자들을 위한 추천 구성입니다.
.eslintrc.json
{
&quot;extends&quot;: &quot;next/core-web-vitals&quot;
}</li>
<li>기본(Base): Next.js의 기본 ESLint 구성을 포함합니다.
.eslintrc.json
{
&quot;extends&quot;: &quot;next&quot;
}</li>
<li>취소(Cancel): 어떤 ESLint 구성도 포함하지 않습니다. 사용자 정의 ESLint 구성을 설정할 계획이라면 이 옵션을 선택하십시오.
두 가지 구성 옵션 중 하나를 선택하면 Next.js가 자동으로 응용 프로그램에 eslint와 eslint-config-next를 종속성으로 설치하고 선택한 구성이 포함된 프로젝트의 루트에 .eslintrc.json 파일을 만듭니다.
ESLint를 실행하고 싶을 때마다 next lint를 실행할 수 있습니다. ESLint가 설정된 후에는 빌드할 때마다 (next build) 자동으로 실행됩니다. 오류는 빌드를 실패시키지만 경고는 그렇지 않습니다.</li>
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
<blockquote>
<p>만약 다음 빌드 중 ESLint를 실행하고 싶지 않다면, ESLint 무시에 대한 문서를 참조해주세요.
개발 중에 코드 에디터에서 경고와 오류를 직접 확인할 수 있는 적절한 통합을 사용하는 것을 권장합니다.</p>
</blockquote>
<h2 id="eslint-구성" tabindex="-1"><a class="header-anchor" href="#eslint-구성" aria-hidden="true">#</a> ESLint 구성</h2>
<p>기본 구성 (eslint-config-next)은 Next.js에서 최적의 '외부 상자' 린팅 경험을 제공하는 데 필요한 모든 것을 포함합니다. 이미 응용 프로그램에 ESLint를 구성하지 않은 경우,이 구성과 함께 ESLint를 설정하기 위해 next lint를 사용하는 것을 권장합니다.</p>
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
<blockquote>
<p>만약 eslint-config-next를 기타 ESLint 구성과 함께 사용하고 싶다면, 간섭을 일으키지 않고 그렇게 하는 방법을 알고 싶다면 추가 구성 섹션을 참조하세요.
다음 ESLint 플러그인에서 권장되는 규칙 집합이 eslint-config-next 내에서 모두 사용됩니다:</p>
</blockquote>
<ul>
<li>eslint-plugin-react</li>
<li>eslint-plugin-react-hooks</li>
<li>eslint-plugin-next
이는 next.config.js에서의 구성보다 우선합니다.</li>
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
<h2 id="eslint-플러그인" tabindex="-1"><a class="header-anchor" href="#eslint-플러그인" aria-hidden="true">#</a> ESLint 플러그인</h2>
<p>Next.js는 ESLint 플러그인인 <code v-pre>eslint-plugin-next</code>을 제공합니다. 이 플러그인은 Next.js 애플리케이션에서 일반적인 문제와 이슈를 발견하는 것이 가능하도록 베이스 구성에 이미 번들되어 있습니다. 전체 규칙 세트는 다음과 같습니다:
추천 구성에서 활성화
Markdown 형식으로 변경되었습니다.</p>
<table>
<thead>
<tr>
<th>Rule</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>@next/next/google-font-display</td>
<td>Enforce font-display behavior with Google Fonts.</td>
</tr>
<tr>
<td>@next/next/google-font-preconnect</td>
<td>Ensure <code v-pre>preconnect</code> is used with Google Fonts.</td>
</tr>
<tr>
<td>@next/next/inline-script-id</td>
<td>Enforce <code v-pre>id</code> attribute on <code v-pre>next/script</code> components with inline content.</td>
</tr>
<tr>
<td>@next/next/next-script-for-ga</td>
<td>Prefer <code v-pre>next/script</code> component when using the inline script for Google Analytics.</td>
</tr>
<tr>
<td>@next/next/no-assign-module-variable</td>
<td>Prevent assignment to the <code v-pre>module</code> variable.</td>
</tr>
<tr>
<td>@next/next/no-async-client-component</td>
<td>Prevent client components from being async functions.</td>
</tr>
<tr>
<td>@next/next/no-before-interactive-script-outside-document</td>
<td>Prevent usage of <code v-pre>next/script</code>'s <code v-pre>beforeInteractive</code> strategy outside of <code v-pre>pages/_document.js</code>.</td>
</tr>
<tr>
<td>@next/next/no-css-tags</td>
<td>Prevent manual stylesheet tags.</td>
</tr>
<tr>
<td>@next/next/no-document-import-in-page</td>
<td>Prevent importing <code v-pre>next/document</code> outside of <code v-pre>pages/_document.js</code>.</td>
</tr>
<tr>
<td>@next/next/no-duplicate-head</td>
<td>Prevent duplicate usage of <code v-pre>&lt;Head&gt;</code> in <code v-pre>pages/_document.js</code>.</td>
</tr>
<tr>
<td>@next/next/no-head-element</td>
<td>Prevent usage of <code v-pre>&lt;head&gt;</code> element.</td>
</tr>
<tr>
<td>@next/next/no-head-import-in-document</td>
<td>Prevent usage of <code v-pre>next/head</code> in <code v-pre>pages/_document.js</code>.</td>
</tr>
<tr>
<td>@next/next/no-html-link-for-pages</td>
<td>Prevent usage of <code v-pre>&lt;a&gt;</code> elements to navigate to internal Next.js pages.</td>
</tr>
<tr>
<td>@next/next/no-img-element</td>
<td>Prevent usage of <code v-pre>&lt;img&gt;</code> element due to slower LCP and higher bandwidth.</td>
</tr>
<tr>
<td>@next/next/no-page-custom-font</td>
<td>Prevent page-only custom fonts.</td>
</tr>
<tr>
<td>@next/next/no-script-component-in-head</td>
<td>Prevent usage of <code v-pre>next/script</code> in <code v-pre>next/head</code> component.</td>
</tr>
<tr>
<td>@next/next/no-styled-jsx-in-document</td>
<td>Prevent usage of <code v-pre>styled-jsx</code> in <code v-pre>pages/_document.js</code>.</td>
</tr>
<tr>
<td>@next/next/no-sync-scripts</td>
<td>Prevent synchronous scripts.</td>
</tr>
<tr>
<td>@next/next/no-title-in-document-head</td>
<td>Prevent usage of <code v-pre>&lt;title&gt;</code> with <code v-pre>Head</code> component from <code v-pre>next/document</code>.</td>
</tr>
<tr>
<td>@next/next/no-typos</td>
<td>Prevent common typos in <a href="/docs/pages/building-your-application/data-fetching">Next.js data fetching functions</a>.</td>
</tr>
<tr>
<td>@next/next/no-unwanted-polyfillio</td>
<td>Prevent duplicate polyfills from Polyfill.io.</td>
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
<p>만약 이미 ESLint가 애플리케이션에 구성되어 있다면, eslint-config-next를 포함하는 대신 이 플러그인을 직접 확장하는 것을 권장합니다. 일부 조건이 충족되지 않는 한. 더 자세한 내용은 권장 플러그인 규칙 세트를 참조하세요.</p>
<h3 id="사용자-정의-설정" tabindex="-1"><a class="header-anchor" href="#사용자-정의-설정" aria-hidden="true">#</a> 사용자 정의 설정</h3>
<h4 id="rootdir" tabindex="-1"><a class="header-anchor" href="#rootdir" aria-hidden="true">#</a> rootDir</h4>
<p>만약 Next.js가 루트 디렉토리(모노레포와 같이)에 설치되어 있지 않은 프로젝트에서 eslint-plugin-next를 사용하고 있다면, .eslintrc 파일의 설정 속성을 사용하여 eslint-plugin-next에게 Next.js 애플리케이션의 위치를 알려줄 수 있습니다:</p>
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
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token string">"next"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"settings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"next"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"rootDir"</span><span class="token operator">:</span> <span class="token string">"packages/my-app/"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rootDir는 경로(상대 또는 절대 경로), 글롭(&quot;packages/*/&quot;) 또는 경로 및/또는 글롭의 배열일 수 있습니다.</p>
<h2 id="사용자-지정-디렉토리-및-파일-린팅" tabindex="-1"><a class="header-anchor" href="#사용자-지정-디렉토리-및-파일-린팅" aria-hidden="true">#</a> 사용자 지정 디렉토리 및 파일 린팅</h2>
<p>기본적으로 Next.js는 pages/, app/, components/, lib/, src/ 디렉토리의 모든 파일에 대해 ESLint를 실행합니다. 그러나 프로덕션 빌드를 위해 next.config.js의 eslint 구성에 dirs 옵션을 사용하여 특정 디렉토리를 지정할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">eslint</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages"</span><span class="token punctuation">,</span> <span class="token string">"utils"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이와 유사하게, --dir 및 --file 플래그를 사용하여 특정 디렉토리 및 파일에 대해 lint할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next lint <span class="token operator">--</span>dir pages <span class="token operator">--</span>dir utils <span class="token operator">--</span>file bar<span class="token punctuation">.</span>js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="캐싱" tabindex="-1"><a class="header-anchor" href="#캐싱" aria-hidden="true">#</a> 캐싱</h2>
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
<p>성능을 향상시키기 위해 ESLint로 처리된 파일의 정보는 기본적으로 캐시됩니다. 이 정보는 .next/cache에 저장되거나 사용자가 정의한 빌드 디렉토리에 저장됩니다. 단일 소스 파일의 내용 이상에 따라 특정 ESLint 규칙이 필요한 경우 캐시를 비활성화해야하는 경우는 --no-cache 플래그를 사용하여 next lint를 실행하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next lint <span class="token operator">--</span>no<span class="token operator">-</span>cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="규칙-비활성화" tabindex="-1"><a class="header-anchor" href="#규칙-비활성화" aria-hidden="true">#</a> 규칙 비활성화</h2>
<p>지원하는 플러그인 (react, react-hooks, next)에서 제공하는 규칙을 수정하거나 비활성화하려면 .eslintrc 파일의 rules 속성을 직접 변경할 수 있습니다.</p>
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
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token string">"next"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"rules"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"react/no-unescaped-entities"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"@next/next/no-page-custom-font"</span><span class="token operator">:</span> <span class="token string">"off"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="core-web-vitals" tabindex="-1"><a class="header-anchor" href="#core-web-vitals" aria-hidden="true">#</a> Core Web Vitals</h3>
<p>next/core-web-vitals 룰 세트는 처음으로 next lint가 실행되고 strict 옵션이 선택된 경우 활성화됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token string">"next/core-web-vitals"</span>
<span class="token punctuation">}</span>
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
<p>next/core-web-vitals 업데이트에서 eslint-plugin-next가 핵심 웹 핵심을 영향을 미치는 경우 경고로 설정된 많은 규칙에서 오류로 설정된다.</p>
<blockquote>
<p>Create Next App으로 새로 만든 응용 프로그램에는 next/core-web-vitals 진입점이 자동으로 포함됩니다.</p>
</blockquote>
<h2 id="다른-도구와-사용" tabindex="-1"><a class="header-anchor" href="#다른-도구와-사용" aria-hidden="true">#</a> 다른 도구와 사용</h2>
<h3 id="prettier" tabindex="-1"><a class="header-anchor" href="#prettier" aria-hidden="true">#</a> Prettier</h3>
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
<p>ESLint에는 코드 서식 지침도 포함되어 있습니다. 그것은 기존의 Prettier 설정과 충돌할 수 있습니다. ESLint와 Prettier가 함께 작동하도록 하는 것을 권장합니다. 먼저 의존성을 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier

yarn add <span class="token operator">--</span>dev eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier

pnpm add <span class="token operator">--</span>save<span class="token operator">-</span>dev eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier

bun add <span class="token operator">--</span>dev eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, prettier를 기존의 ESLint 구성에 추가하세요:</p>
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"next"</span><span class="token punctuation">,</span> <span class="token string">"prettier"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3>
<p>만약 staged 된 git 파일에서 linter를 실행하고 싶다면,
--file 플래그를 사용하도록 프로젝트 루트에 있는 .lintstagedrc.js 파일에 다음을 추가해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"path"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">buildEslintCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">filenames</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">next lint --fix --file </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>filenames<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">" --file "</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"*.{js,jsx,ts,tsx}"</span><span class="token operator">:</span> <span class="token punctuation">[</span>buildEslintCommand<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
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
<h2 id="기존-구성-이전하기" tabindex="-1"><a class="header-anchor" href="#기존-구성-이전하기" aria-hidden="true">#</a> 기존 구성 이전하기</h2>
<h3 id="추천하는-플러그인-규칙-세트" tabindex="-1"><a class="header-anchor" href="#추천하는-플러그인-규칙-세트" aria-hidden="true">#</a> 추천하는 플러그인 규칙 세트</h3>
<p>이미 응용 프로그램에서 ESLint가 구성되어 있고 다음 조건 중 하나 이상이 해당되는 경우:</p>
<ul>
<li>이미 다음 플러그인 중 하나 이상이 설치되어 있음 (별도로 또는 airbnb 또는 react-app과 같은 다른 구성을 통해):
<ul>
<li>react</li>
<li>react-hooks</li>
<li>jsx-a11y</li>
<li>import</li>
</ul>
</li>
<li>react</li>
<li>react-hooks</li>
<li>jsx-a11y</li>
<li>import</li>
<li>Babel이 Next.js 내에서 구성된 방식과 다른 parserOptions를 정의했음 (사용자 지정 Babel 구성이 없는 경우 비권장)</li>
<li>Node.js 및/또는 TypeScript 리졸버를 사용하여 eslint-plugin-import가 설치되어 있고 import를 처리할 때 지정된 경우</li>
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
<p>그럼, eslint-config-next 내에서 구성된 속성을 선호하는 경우, 이러한 설정을 제거하거나 직접 Next.js ESLint 플러그인을 확장하는 것을 권장합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>
    <span class="token string">"plugin:@next/next/recommended"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트에서 next lint를 실행할 필요 없이 플러그인을 보통처럼 설치할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev @next<span class="token operator">/</span>eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>next

yarn add <span class="token operator">--</span>dev @next<span class="token operator">/</span>eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>next

pnpm add <span class="token operator">--</span>save<span class="token operator">-</span>dev @next<span class="token operator">/</span>eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>next

bun add <span class="token operator">--</span>dev @next<span class="token operator">/</span>eslint<span class="token operator">-</span>plugin<span class="token operator">-</span>next
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
<p>이렇게 하면 여러 구성에서 동일한 플러그인이나 구문 분석기를 가져오는 것으로 인해 발생할 수 있는 충돌이나 오류 위험이 제거됩니다.</p>
<h3 id="추가-구성" tabindex="-1"><a class="header-anchor" href="#추가-구성" aria-hidden="true">#</a> 추가 구성</h3>
<p>이미 별도의 ESLint 구성을 사용하고 있고 eslint-config-next를 포함하고 싶다면 다른 구성 후에 마지막으로 확장되도록 하세요. 예를 들어:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span> <span class="token string">"next"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
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
<p>다음 구성은 이미 구문 분석기, 플러그인 및 설정 속성에 대한 기본값을 설정하는 것을 다룹니다. 사용 사례에 따라 다른 구성이 필요한 경우를 제외하고 이러한 속성 중 하나를 수동으로 다시 선언할 필요가 없습니다.
다른 공유 구성을 포함하는 경우, 이러한 속성이 덮어쓰거나 수정되지 않도록해야 합니다. 그렇지 않으면 next 구성과 동일한 동작을 공유하는 구성을 제거하거나 위에 언급된대로 직접 Next.js ESLint 플러그인에서 확장하는 것이 좋습니다.</p>
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
