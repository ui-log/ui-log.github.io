<template><div><h1 id="eslint" tabindex="-1"><a class="header-anchor" href="#eslint" aria-hidden="true">#</a> ESLint</h1>
<p>Next.js는 기본적으로 통합된 ESLint 경험을 제공합니다. package.json에 다음과 같이 next lint를 스크립트로 추가하세요:</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"lint"</span><span class="token operator">:</span> <span class="token string">"next lint"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음 npm run lint 또는 yarn lint를 실행하세요:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이미 애플리케이션에 ESLint가 구성되어 있지 않은 경우, 설치 및 구성 프로세스를 안내 받을 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn lint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>다음과 같은 프롬프트가 표시됩니다:
? ESLint를 어떻게 구성하시겠습니까?
❯ 엄격 (권장)
Base
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
<p>다음 세 가지 옵션 중 하나를 선택할 수 있습니다:</p>
<ul>
<li>엄격 모드: Next.js의 기본 ESLint 구성과 더 엄격한 Core Web Vitals rule-set을 포함합니다. ESLint를 처음 설정하는 개발자를 위한 권장 구성입니다.</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>.eslintrc.json
<span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"next/core-web-vitals"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>기본 설정: Next.js의 기본 ESLint 구성을 포함합니다.</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>.eslintrc.json
<span class="token punctuation">{</span>
  <span class="token property">"extends"</span><span class="token operator">:</span> <span class="token string">"next"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>취소: 어떠한 ESLint 구성도 포함되지 않습니다. 사용자 맞춤 ESLint 구성을 설정할 계획이라면 이 옵션을 선택하세요.</li>
</ul>
<p>두 가지 구성 옵션 중 하나를 선택하면 Next.js가 자동으로 설치하고 앱에 의존성으로 eslint와 eslint-config-next를 설치하며 프로젝트 루트에 .eslintrc.json 파일을 생성하여 선택한 구성을 포함시킵니다.</p>
<p>ESLint를 실행하여 오류를 잡고 싶을 때마다 next lint를 실행할 수 있습니다. ESLint가 설정되면 빌드 중에도 자동으로 실행됩니다(next build). 오류는 빌드를 실패하게 하고 경고는 그렇지 않습니다.</p>
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
<p>다음 빌드 시 ESLint가 실행되지 않도록 하려면, ESLint를 무시하는 방법에 대해 문서를 참조하십시오.</p>
</blockquote>
<p>개발 중에 코드 편집기에서 경고와 오류를 직접 확인할 수 있는 적절한 통합을 사용하는 것을 권장합니다.</p>
<h2 id="eslint-구성" tabindex="-1"><a class="header-anchor" href="#eslint-구성" aria-hidden="true">#</a> ESLint 구성</h2>
<p>기본 구성 (eslint-config-next)은 Next.js에서 최적의 즉시 사용 가능한 린트 경험을 갖도록 필요한 모든 것을 포함합니다. 애플리케이션에 이미 ESLint가 구성되어 있지 않은 경우, 이 구성과 함께 ESLint 설정을 설정하기 위해 next lint를 사용하는 것을 권장합니다.</p>
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
<p>다른 ESLint 구성과 함께 eslint-config-next를 사용하려면 충돌을 일으키지 않고 어떻게 사용할 수 있는지 알아보려면 추가 구성 섹션을 참조해 주세요.</p>
</blockquote>
<p>다음 ESLint 플러그인에서 권장되는 rule 세트가 eslint-config-next 내에서 모두 사용됩니다:</p>
<ul>
<li>eslint-plugin-react</li>
<li>eslint-plugin-react-hooks</li>
<li>eslint-plugin-next</li>
</ul>
<p>이 구성은 next.config.js에서의 구성보다 우선시됩니다.</p>
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
<p>Next.js는 ESLint 플러그인인 eslint-plugin-next을 제공합니다. 이미 기본 구성에 번들로 포함되어 있어 Next.js 애플리케이션에서 일반적인 문제와 문제를 감지할 수 있게 해줍니다. 모든 규칙 목록은 다음과 같습니다:</p>
<p>추천 구성에서 활성화됨</p>
<table>
<thead>
<tr>
<th>Rule</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/docs/messages/google-font-display">@next/next/google-font-display</a></td>
<td>Google Fonts의 font-display 동작 강제시키기</td>
</tr>
<tr>
<td><a href="/docs/messages/google-font-preconnect">@next/next/google-font-preconnect</a></td>
<td>Google Fonts와 함께 preconnect 사용 보장</td>
</tr>
<tr>
<td><a href="/docs/messages/inline-script-id">@next/next/inline-script-id</a></td>
<td>inline 콘텐트를 사용하는 <code>next/script</code> 컴포넌트에 <code>id</code> 속성 강제하기</td>
</tr>
<tr>
<td><a href="/docs/messages/next-script-for-ga">@next/next/next-script-for-ga</a></td>
<td>Google Analytics에 대한 인라인 스크립트 사용 시 <code>next/script</code> 컴포넌트 선호하기</td>
</tr>
<tr>
<td><a href="/docs/messages/no-assign-module-variable">@next/next/no-assign-module-variable</a></td>
<td><code>module</code> 변수에 할당 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-async-client-component">@next/next/no-async-client-component</a></td>
<td>클라이언트 컴포넌트가 async 함수로 되지 않도록 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-before-interactive-script-outside-document">@next/next/no-before-interactive-script-outside-document</a></td>
<td><code>pages/_document.js</code> 외부에서 <code>next/script</code>의 <code>beforeInteractive</code> 전략 사용 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-css-tags">@next/next/no-css-tags</a></td>
<td>수동 스타일시트 태그 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-document-import-in-page">@next/next/no-document-import-in-page</a></td>
<td><code>pages/_document.js</code> 외부에서 <code>next/document</code> 임포트 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-duplicate-head">@next/next/no-duplicate-head</a></td>
<td><code>pages/_document.js</code>에서 <code>&lt;Head&gt;</code> 중복 사용 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-head-element">@next/next/no-head-element</a></td>
<td><code>&lt;head&gt;</code> 요소 사용 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-head-import-in-document">@next/next/no-head-import-in-document</a></td>
<td><code>pages/_document.js</code>에서 <code>next/head</code> 사용 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-html-link-for-pages">@next/next/no-html-link-for-pages</a></td>
<td>내부 Next.js 페이지로 이동하기 위해 <code>&lt;a&gt;</code> 요소 사용 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-img-element">@next/next/no-img-element</a></td>
<td>더 느린 LCP와 더 높은 대역폭으로 인해 <code>&lt;img&gt;</code> 요소 사용 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-page-custom-font">@next/next/no-page-custom-font</a></td>
<td>페이지 전용 사용자 지정 글꼴 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-script-component-in-head">@next/next/no-script-component-in-head</a></td>
<td><code>next/head</code> 컴포넌트에서 <code>next/script</code> 사용 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-styled-jsx-in-document">@next/next/no-styled-jsx-in-document</a></td>
<td><code>pages/_document.js</code>에서 <code>styled-jsx</code> 사용 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-sync-scripts">@next/next/no-sync-scripts</a></td>
<td>동기 스크립트 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-title-in-document-head">@next/next/no-title-in-document-head</a></td>
<td><code>next/document</code>의 <code>Head</code> 컴포넌트와 함께 <code>&lt;title&gt;</code> 사용 방지</td>
</tr>
<tr>
<td><a href="https://nextjs.org/docs/pages/building-your-application/data-fetching" target="_blank" rel="noopener noreferrer">@next/next/no-typos<ExternalLinkIcon/></a></td>
<td>Next.js의 데이터 가져오기 함수에서 일반적인 오타 방지</td>
</tr>
<tr>
<td><a href="/docs/messages/no-unwanted-polyfillio">@next/next/no-unwanted-polyfillio</a></td>
<td>Polyfill.io에서 중복 폴리필 방지</td>
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
<p>만약 이미 당신의 앱에 ESLint를 구성해 놓았다면, eslint-config-next를 포함하는 대신 이 플러그인을 직접 확장하는 것을 권장합니다. 특정 조건들이 충족되지 않는 한입니다. 더 자세한 정보는 권장 플러그인 룰셋을 참고해주세요.</p>
<h3 id="사용자-정의-설정" tabindex="-1"><a class="header-anchor" href="#사용자-정의-설정" aria-hidden="true">#</a> 사용자 정의 설정</h3>
<h4 id="rootdir" tabindex="-1"><a class="header-anchor" href="#rootdir" aria-hidden="true">#</a> rootDir</h4>
<p>만약 ESLint 플러그인(next)을 사용하는 프로젝트에서 Next.js가 당신의 루트 디렉터리에 설치되지 않았을 경우(예: 모노레포), .eslintrc 파일의 settings 속성을 사용하여 eslint-plugin-next에게 Next.js 애플리케이션의 위치를 알려줄 수 있습니다:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>rootDir은 경로(상대 또는 절대), 글로브(&quot;packages/*/&quot;) 또는 경로 및/또는 글로브의 배열일 수 있습니다.</p>
<h2 id="사용자-정의-디렉토리와-파일-린팅" tabindex="-1"><a class="header-anchor" href="#사용자-정의-디렉토리와-파일-린팅" aria-hidden="true">#</a> 사용자 정의 디렉토리와 파일 린팅</h2>
<p>기본적으로 Next.js는 pages/, app/, components/, lib/ 및 src/ 디렉토리의 모든 파일에 대해 ESLint를 실행합니다. 그러나 production 빌드를 위해 eslint 구성의 dirs 옵션을 사용하여 특정 디렉토리를 지정할 수 있습니다:```</p>
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
    <span class="token literal-property property">dirs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"pages"</span><span class="token punctuation">,</span> <span class="token string">"utils"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 프로덕션 빌드(다음 빌드) 중 'pages' 및 'utils' 디렉터리에서만 ESLint를 실행합니다.</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>비슷하게, --dir 및 --file 플래그를 사용하여 특정 디렉터리 및 파일을 lint하는 데 next lint를 사용할 수 있습니다:</p>
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
<p>성능을 향상시키기 위해 ESLint로 처리된 파일의 정보는 기본적으로 캐싱됩니다. 이는 .next/cache에 저장되거나 정의된 빌드 디렉터리에 저장됩니다. 단일 소스 파일의 내용 이상에 의존하는 ESLint 규칙을 포함하고 캐시를 비활성화해야하는 경우, next lint에 --no-cache 플래그를 사용하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>next lint <span class="token operator">--</span>no<span class="token operator">-</span>cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="규칙-비활성화" tabindex="-1"><a class="header-anchor" href="#규칙-비활성화" aria-hidden="true">#</a> 규칙 비활성화</h2>
<p>지원되는 플러그인 (react, react-hooks, next)에서 제공되는 규칙을 수정하거나 비활성화하려면 .eslintrc의 rules 속성을 직접 변경할 수 있습니다:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="핵심-웹-핵심지표" tabindex="-1"><a class="header-anchor" href="#핵심-웹-핵심지표" aria-hidden="true">#</a> 핵심 웹 핵심지표</h3>
<p>next/core-web-vitals 규칙 집합은 첫 번째로 next lint를 실행하고 strict 옵션이 선택된 경우 활성화됩니다.</p>
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
<p>새 버전의 <code v-pre>eslint-plugin-next</code>에서는 일부 Core Web Vitals에 영향을 주는 규칙이 기본적으로 경고가 아닌 오류로 설정되어 있습니다.</p>
<blockquote>
<p>Create Next App으로 새 애플리케이션을 빌드할 때 <code v-pre>next/core-web-vitals</code> 엔트리 포인트가 자동으로 포함됩니다.</p>
</blockquote>
<h2 id="기타-도구-사용-방법" tabindex="-1"><a class="header-anchor" href="#기타-도구-사용-방법" aria-hidden="true">#</a> 기타 도구 사용 방법</h2>
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
<p>ESLint에는 코드 형식 지침도 포함되어 있습니다. 이는 기존 Prettier 설정과 충돌할 수 있습니다. ESLint와 Prettier가 함께 작동하도록 하려면 ESLint 구성에 eslint-config-prettier를 포함하는 것이 좋습니다.</p>
<p>먼저 종속성을 설치합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install <span class="token operator">--</span>save<span class="token operator">-</span>dev eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier

yarn add <span class="token operator">--</span>dev eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier

pnpm add <span class="token operator">--</span>save<span class="token operator">-</span>dev eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier

bun add <span class="token operator">--</span>dev eslint<span class="token operator">-</span>config<span class="token operator">-</span>prettier
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그런 다음, 기존 ESLint 구성에 prettier를 추가하세요:</p>
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
  <span class="token string-property property">"extends"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"next"</span><span class="token punctuation">,</span> <span class="token string">"prettier"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3>
<p>만일 lint-staged를 사용하여 git 파일의 linter를 실행하고 싶다면, 프로젝트 루트 디렉토리에 있는 .lintstagedrc.js 파일에 다음을 추가해야 합니다. 이때 --file 플래그를 사용하도록 지정해야 합니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">buildEslintCommand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">filenames</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  `next lint <span class="token operator">--</span>fix <span class="token operator">--</span>file $<span class="token punctuation">{</span>filenames
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=></span> path<span class="token punctuation">.</span><span class="token function">relative</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">' --file '</span><span class="token punctuation">)</span>`

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-property property">'*.{js,jsx,ts,tsx}'</span><span class="token operator">:</span> <span class="token punctuation">[</span>buildEslintCommand<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
      style="display:block"
      data-ad-client="ca-pub-4877378276818686"
      data-ad-slot="9743150776"
      data-ad-format="auto"
      data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="기존-설정-이전" tabindex="-1"><a class="header-anchor" href="#기존-설정-이전" aria-hidden="true">#</a> 기존 설정 이전</h2>
<h3 id="권장되는-플러그인-규칙-세트" tabindex="-1"><a class="header-anchor" href="#권장되는-플러그인-규칙-세트" aria-hidden="true">#</a> 권장되는 플러그인 규칙 세트</h3>
<p>이미 응용 프로그램에 ESLint가 구성되어 있고 다음 조건 중 하나 이상을 만족하는 경우:</p>
<ul>
<li>이미 다음 플러그인 중 하나 이상이 설치되어 있는 경우(별도로 또는 airbnb 또는 react-app과 같은 다른 구성을 통해):
<ul>
<li>react</li>
<li>react-hooks</li>
<li>jsx-a11y</li>
<li>import</li>
</ul>
</li>
<li>특정 parserOptions를 Next.js 내에서 Babel이 구성된 방식과 다르게 정의했을 경우(사용자 지정 Babel 구성을 한 경우를 제외하고 이것은 권장되지 않음)</li>
<li>Node.js 및/또는 TypeScript resolver와 함께 eslint-plugin-import가 설치되어 있고 import 처리를 다루도록 정의되어 있는 경우</li>
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
<p>그러면 이러한 설정을 삭제하거나 eslint-config-next 내에서 설정된 방식을 선호하는 경우에 대해 권장합니다. 혹은 Next.js ESLint 플러그인을 직접 확장할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">//...</span>
    <span class="token string">"plugin:@next/next/recommended"</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트에서 next lint를 실행할 필요 없이 플러그인을 일반적으로 설치할 수 있습니다:</p>
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
<p>이렇게 하면 동일한 플러그인이나 구문 분석기가 다른 구성에서 여러 번 가져와서 발생할 수 있는 충돌이나 오류의 위험이 제거됩니다.</p>
<h3 id="추가-구성" tabindex="-1"><a class="header-anchor" href="#추가-구성" aria-hidden="true">#</a> 추가 구성</h3>
<p>이미 별도의 ESLint 구성을 사용 중이고 eslint-config-next를 포함하려는 경우, 다른 구성 뒤에 가장 마지막에 확장되었는지 확인하세요. 예를 들어:</p>
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
<p>다음 구성은 이미 구문 분석기, 플러그인 및 설정 속성의 기본값을 설정하는 것을 처리합니다. 귀하의 사용 사례에 대해 다른 구성이 필요하지 않은 한, 이러한 속성을 다시 선언할 필요가 없습니다.</p>
<p>다른 공유 구성을 포함하는 경우, 이러한 속성이 덮어쓰지거나 수정되지 않도록해야 합니다. 그렇지 않으면 다음 구성과 행동을 공유하는 구성을 제거하거나 위에서 언급한대로 직접 Next.js ESLint 플러그인을 확장하는 것이 좋습니다.</p>
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
