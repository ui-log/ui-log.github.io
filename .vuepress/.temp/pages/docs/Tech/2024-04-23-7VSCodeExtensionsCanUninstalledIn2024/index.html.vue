<template><div><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_0.png" />
<p>안녕하세요! VS Code에서는 다양한 확장 기능을 제공하여 코딩 경험과 효율성을 향상시킬 수 있습니다. 그러나 너무 많은 확장을 설치하면 다음과 같은 문제가 발생할 수 있습니다:</p>
<ul>
<li>성능 저하: 너무 많은 확장을 설치하면 VS Code의 시작 속도가 느려질 수 있습니다. 특히 대규모 프로젝트를 시작하거나 열 때 느려질 수 있습니다. 각 확장은 별도의 코드와 자원을 로드해야 하며, 이는 더 많은 메모리와 프로세서 자원을 소비할 수 있습니다.</li>
<li>충돌 및 호환성 문제: 일부 확장은 다른 확장이나 VS Code의 특정 기능과 충돌할 수 있습니다. 이로 인해 불안정한 동작, 오류 또는 기능 실패가 발생할 수 있습니다.</li>
<li>인터페이스 혼란: 많은 확장을 설치하면 VS Code 인터페이스가 복잡해질 수 있습니다. 각 확장은 자체 명령, 설정 또는 뷰를 추가할 수 있어 인터페이스를 혼란스럽고 관리하기 어렵게 만들 수 있습니다.</li>
</ul>
<p>VS Code 기능의 지속적인 향상으로 인해 이제는 공식적으로 통합된 많은 기능이 이전에 확장에서 제공되었던 것과 동일하게 제공됩니다. 따라서 이 기사에서는 안전하게 제거할 수 있는 VS Code 확장 프로그램을 살펴보겠습니다. 이를 통해 개발 환경을 더 가볍고 효율적으로 만들 수 있습니다!</p>
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
<h1 id="auto-close-tag" tabindex="-1"><a class="header-anchor" href="#auto-close-tag" aria-hidden="true">#</a> Auto Close Tag</h1>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_1.png" alt="image 1"></p>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_2.png" alt="image 2"></p>
<p>HTML 태그를 자동으로 닫아주는 Auto Close Tag 확장 기능입니다.</p>
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
<p>기본적으로 VS Code는 HTML, JSX 및 TSX 태그의 자동 닫힘을 지원하므로 이 플러그인을 제거할 수 있습니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_3.png" alt="이미지"></p>
<p>현재 VS Code는 .vue 파일에서 태그의 자동 닫힘이 아직 지원되지 않습니다. Vue의 공식 언어 플러그인인 Vue — Official의 도움을 받아 이를 구현할 수 있습니다.</p>
<h1 id="자동-가져오기" tabindex="-1"><a class="header-anchor" href="#자동-가져오기" aria-hidden="true">#</a> 자동 가져오기</h1>
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
<img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_4.png" />
<p>자동 가져오기 플러그인을 사용하면 파일에서 모듈의 함수, 변수 또는 기타 멤버를 참조할 때 해당 모듈이 파일로 자동으로 가져와져 효율을 높일 수 있습니다. 만약 모듈 파일이 옮겨진다면, 플러그인이 자동으로 업데이트해 줍니다.</p>
<p>지금, VS Code는 기본적으로 이러한 기능들을 지원합니다:</p>
<img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_5.png" />
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
<h1 id="bracket-pair-colorizer와-rainbow-brackets" tabindex="-1"><a class="header-anchor" href="#bracket-pair-colorizer와-rainbow-brackets" aria-hidden="true">#</a> Bracket Pair Colorizer와 Rainbow Brackets</h1>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_6.png" alt="extension 6"></p>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_7.png" alt="extension 7"></p>
<p>Bracket Pair Colorizer와 Rainbow Brackets 플러그인은 모두 일치하는 괄호 쌍(예: {, }, (, ), [, ])에 무지개 색상을 제공하기 위해 사용됩니다. 복잡한 중첩 구조에서 코딩할 때 도움이 되며 코드의 구조를 추적하고 이해할 수 있습니다. 서로 다른 색상은 서로 다른 중첩 레벨을 나타내므로 동일한 쌍에 속하는 괄호를 명확히 볼 수 있습니다.</p>
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
<p>브라켓 색상 처리의 필요성과 해당 기능을 확장 프로그램으로 추가할 때의 성능 문제를 본 후, VSCode 팀은 이를 편집기에 통합하기로 결정했습니다. 네이티브 브라켓 색상 처리 기능은 Bracket Pair Colorizer 2보다 10,000배 이상 빠르다는 결과가 나왔어요.</p>
<p>이 기능은 기본적으로 활성화되어 있습니다:</p>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_8.png" alt="VSCode bracket coloring"></p>
<p>다양한 VS Code 테마는 다른 수의 괄호 색상을 지원합니다. 예를 들어 Dracula 테마는 기본적으로 6가지 색상을 제공하지만, One Dark Pro 테마는 오직 3가지 색상만을 가지고 있습니다.</p>
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
<p>위의 설정에서 워크벤치 색상 사용자 지정을 클릭하여 테마에 대한 괄호 색상 설정을 할 수 있어요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"workbench.colorCustomizations"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"[내 테마 이름]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"editorBracketHighlight.foreground1"</span><span class="token operator">:</span> <span class="token string">"#e78009"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"editorBracketHighlight.foreground2"</span><span class="token operator">:</span> <span class="token string">"#22990a"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"editorBracketHighlight.foreground3"</span><span class="token operator">:</span> <span class="token string">"#1411c4"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"editorBracketHighlight.foreground4"</span><span class="token operator">:</span> <span class="token string">"#ddcf11"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"editorBracketHighlight.foreground5"</span><span class="token operator">:</span> <span class="token string">"#9c15c5"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"editorBracketHighlight.foreground6"</span><span class="token operator">:</span> <span class="token string">"#ffffff"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"editorBracketHighlight.unexpectedBracket.foreground"</span><span class="token operator">:</span> <span class="token string">"#FF2C6D"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="html-스니펫-html-보일러플레이트-css-스니펫" tabindex="-1"><a class="header-anchor" href="#html-스니펫-html-보일러플레이트-css-스니펫" aria-hidden="true">#</a> HTML 스니펫, HTML 보일러플레이트, CSS 스니펫</h1>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_9.png" alt="이미지"></p>
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
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_10.png" alt="이미지"></p>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_11.png" alt="이미지"></p>
<p>HTML Snippets, HTML Boilerplate 및 CSS Snippets 플러그인은 모두 약어를 사용하여 일반적인 HTML 및 CSS 스니펫을 추가할 수 있습니다.</p>
<p>이제 VS Code에는 이러한 확장 기능과 유사한 HTML 및 CSS 스니펫을 제공하는 내장 Emmet 기능이 있습니다. Emmet은 html, haml, pug, slim, jsx, xml, xsl, css, scss, sass, less 및 stylus 파일에서 기본적으로 활성화되어 있습니다.</p>
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
<p>예를 들어, 다음 약어를 입력하여 해당 HTML을 생성합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span> <span class="token operator">--</span> 약어 <span class="token operator">--</span><span class="token operator">></span>
<span class="token literal-property property">입력</span><span class="token operator">:</span> ol<span class="token operator">></span>li<span class="token operator">*</span><span class="token number">3</span><span class="token operator">></span>p<span class="token punctuation">.</span>rul 

<span class="token operator">&lt;</span><span class="token operator">!</span> <span class="token operator">--</span> 생성된 결과는 다음과 같습니다 <span class="token operator">--</span><span class="token operator">></span>
<span class="token operator">&lt;</span>ol<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"rule1"</span><span class="token operator">></span>r<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"rule2"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"rule3"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>ol<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="설정-동기화" tabindex="-1"><a class="header-anchor" href="#설정-동기화" aria-hidden="true">#</a> 설정 동기화</h1>
<img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_12.png" />
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
<p>VS Code에는 기기간 동기화 기능이 내장되어 있어, 제3자 확장 프로그램인 Settings Sync를 사용할 필요가 없어요.</p>
<p>다른 기기 간에 동기화를 위해 계정에 로그인하기만 하면 돼요:</p>
<h1 id="trailing-spaces" tabindex="-1"><a class="header-anchor" href="#trailing-spaces" aria-hidden="true">#</a> Trailing Spaces</h1>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_13.png" alt="이미지"></p>
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
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_14.png" alt="이미지"></p>
<p>&quot;Trailing Spaces&quot; 플러그인은 파일의 모든 줄에서 뒤에 있는 공백을 제거하여 일관된 형식을 유지합니다.</p>
<p>VS Code는 이제 파일에서 뒤에 있는 공백을 자동으로 제거하는 기능을 지원합니다. 이 기능을 사용하려면 명령이나 강조 표시가 필요하지 않으며, 파일을 저장할 때 파일의 줄 끝에 있는 공백을 자동으로 제거합니다. 그러나 이 기능은 기본적으로 활성화되어 있지 않습니다. 설정에서 &quot;Files: Trim Trailing Whitespace&quot;를 선택할 수 있습니다.</p>
<p>VS Code는 이제 파일에서 뒤에 있는 공백을 자동으로 제거하는 기능을 지원합니다. 이 기능을 사용하려면 명령이나 강조 표시가 필요하지 않으며, 파일을 저장할 때 파일의 줄 끝에 있는 공백을 자동으로 제거합니다. 그러나 이 기능은 기본적으로 활성화되어 있지 않습니다. 설정에서 &quot;Files: Trim Trailing Whitespace&quot;를 선택할 수 있습니다.</p>
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
<h1 id="typescript-vue-플러그인" tabindex="-1"><a class="header-anchor" href="#typescript-vue-플러그인" aria-hidden="true">#</a> TypeScript Vue 플러그인</h1>
<p><img src="@source/docs/Tech/2024-04-23-7VSCodeExtensionsCanUninstalledIn2024/img/7VSCodeExtensionsCanUninstalledIn2024_15.png" alt="이미지"></p>
<p>Vue는 공식 2.0 버전 확장을 출시했습니다. 이제 완전한 Vue 언어 지원을 별도로 제공합니다. 따라서 TypeScript Vue 플러그인 확장 프로그램이 더 이상 필요하지 않습니다.</p>
<p>다음은 제가 정리한 삭제할 수 있는 7개 확장 프로그램입니다. 이제 이들을 VS Code에 내장된 새로운 기능으로 대체할 수 있습니다. 추가할 수 있는 확장 프로그램이 더 있다면 알려주세요. 🌹</p>
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
<p>제게 팔로우하고 격려와 박수를 보내주세요. 글 쓰기를 시작했어요. 미래에 여러분을 위해 더 좋은 기사를 쓸 수 있기를 희망해요.</p>
<p>여기를 구독하세요!</p>
</div></template>
