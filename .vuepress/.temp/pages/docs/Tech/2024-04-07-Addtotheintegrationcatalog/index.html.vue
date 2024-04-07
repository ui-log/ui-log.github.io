<template><div><p>Storybook에는 애드온과 레시피 두 가지 유형의 통합이 있습니다. 이들은 통합 카탈로그에 나열되어 있습니다.</p>
<h2 id="애드온" tabindex="-1"><a class="header-anchor" href="#애드온" aria-hidden="true">#</a> 애드온</h2>
<p>Storybook 애드온은 npm을 통해 배포됩니다. 카탈로그는 package.json에서 Storybook에 특화된 메타데이터를 쿼리하여 npm 레지스트리에서 채워집니다.</p>
<p>다음 요구 사항을 준수하는 npm 패키지를 게시하여 애드온을 카탈로그에 추가하세요:</p>
<ul>
<li>module 정보와 애드온 메타데이터가 포함된 package.json 파일</li>
<li>설치 및 구성 지침이 포함된 README.md 파일</li>
<li>/dist 디렉토리에는 변환된 ES5 코드가 포함되어 있습니다.</li>
<li>루트 레벨에 ES5 모듈로 작성된 preset.js 파일</li>
</ul>
<h3 id="애드온-메타데이터" tabindex="-1"><a class="header-anchor" href="#애드온-메타데이터" aria-hidden="true">#</a> 애드온 메타데이터</h3>
<p>카탈로그에서 애드온을 구성하는 데 메타데이터를 사용합니다. storybook-addons를 첫 번째 키워드로 추가한 후 애드온의 카테고리를 따릅니다. 추가 키워드는 검색 및 태그로 사용됩니다.</p>
<p>애드온의 외관을 사용자 정의하려면 아래 필드를 가진 storybook 속성을 추가하세요.</p>
<p>아래 목록을 참조하여 supportedFrameworks와 unsupportedFrameworks 필드의 값을 채울 때 사용하세요.</p>
<ul>
<li>react</li>
<li>vue</li>
<li>angular</li>
<li>web-components</li>
<li>ember</li>
<li>html</li>
<li>svelte</li>
<li>preact</li>
<li>react-native</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// package.json</span>

  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"storybook-addon-outline"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"description"</span><span class="token operator">:</span> <span class="token string">"CSS를 사용하여 모든 요소를 강조하여 레이아웃 배치 및 정렬을 도와줍니다"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"repository"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"type"</span><span class="token operator">:</span> <span class="token string">"git"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"url"</span><span class="token operator">:</span> <span class="token string">"https://github.com/chromaui/storybook-outline"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">"author"</span><span class="token operator">:</span> <span class="token string">"winkerVSbecks"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"storybook-addons"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token punctuation">,</span> <span class="token string">"debug"</span><span class="token punctuation">,</span> <span class="token string">"layout"</span><span class="token punctuation">,</span> <span class="token string">"css"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"storybook"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"displayName"</span><span class="token operator">:</span> <span class="token string">"Outline"</span><span class="token punctuation">,</span>
    <span class="token string-property property">"unsupportedFrameworks"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vue"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"supportedFrameworks"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"react"</span><span class="token punctuation">,</span> <span class="token string">"angular"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">"icon"</span><span class="token operator">:</span> <span class="token string">"https://yoursite.com/outline-icon.png"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>상단의 package.json은 카탈로그에 아래와 같이 나타납니다. 제품용 package.json의 예제는 여기에서 참조하세요.</p>
<img src="@source/docs/Tech/2024-04-07-Addtotheintegrationcatalog/img/Addtotheintegrationcatalog_0.png" />
<h4 id="추가-기능이-카탈로그에-표시되는-데-얼마나-걸릴까요" tabindex="-1"><a class="header-anchor" href="#추가-기능이-카탈로그에-표시되는-데-얼마나-걸릴까요" aria-hidden="true">#</a> 추가 기능이 카탈로그에 표시되는 데 얼마나 걸릴까요?</h4>
<p>추가 기능을 게시하면 카탈로그에 표시됩니다. 추가 기능을 게시한 후에 카탈로그에 나타나는 데 시간이 걸릴 수 있습니다. 추가 기능이 24시간 이내에 나타나지 않는 경우 이슈를 열어주세요.</p>
<h2 id="레시피" tabindex="-1"><a class="header-anchor" href="#레시피" aria-hidden="true">#</a> 레시피</h2>
<p><strong>레시피</strong>는 애드온이 없는 경우나 통합에 수동 작업이 필요한 경우에 Storybook에 서드파티 라이브러리를 통합하는 지침의 집합입니다.</p>
<h3 id="누가-소유하고-있나요" tabindex="-1"><a class="header-anchor" href="#누가-소유하고-있나요" aria-hidden="true">#</a> 누가 소유하고 있나요?</h3>
<p>레시피는 Storybook 팀에 의해 작성되고 유지보수됩니다. 우리는 커뮤니티 인기, 도구 성숙도 및 통합의 안정성에 기초하여 레시피를 작성합니다. 우리의 목표는 레시피가 시간이 지남에도 계속 작동할 수 있도록 하는 것입니다.</p>
<p>원하는 레시피를 찾지 못했나요? 그것이 커뮤니티에서 인기가 있다면, 우리 문서팀이 하나를 작성할 것입니다. 그 사이에 해결책을 찾아보세요 — 당신이 원하는 것과 같은 요구 사항을 가진 사람이 이미 있을 가능성이 높습니다. 또한 자신의 사이트에서 레시피를 작성하여 연구과정을 가속화하는 데 도움을 줄 수 있습니다.</p>
<h3 id="레시피-요청하기" tabindex="-1"><a class="header-anchor" href="#레시피-요청하기" aria-hidden="true">#</a> 레시피 요청하기</h3>
<p>레시피를 요청하려면 GitHub 저장소에서 새로운 토론을 열어주세요. 요청을 검토하고 인기가 있으면 백로그에 추가하여 우선순위를 매길 겁니다.</p>
<p>Storybook 애드온 생태계에 대해 더 알아보기</p>
<ul>
<li>다른 종류의 애드온을 위한 애드온 유형</li>
<li>애드온 개발의 기초를 위한 애드온 작성</li>
<li>프리셋 개발을 위한 프리셋</li>
<li>요구 사항 및 사용 가능한 레시피에 대한 통합 카탈로그</li>
<li>사용 가능한 API에 대해 알아보는 API 참조</li>
</ul>
</div></template>
