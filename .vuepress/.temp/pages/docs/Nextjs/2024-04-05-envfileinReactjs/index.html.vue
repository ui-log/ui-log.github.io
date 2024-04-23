<template><div><img src="@source/docs/Nextjs/2024-04-05-envfileinReactjs/img/envfileinReactjs_0.png" />
<p>React.js 프로젝트에서 .env 파일은 주로 환경 변수를 저장하는 데 사용됩니다. 환경 변수는 API 키, 데이터베이스 연결 및 개발과 프로덕션 환경 간에 변경될 수 있는 기타 설정과 같이 응용 프로그램의 다양한 측면을 구성하는 데 사용됩니다. 이러한 값을 .env 파일에 보관함으로써, 여러 환경에 대한 구성을 쉽게 관리하고 민감한 정보를 안전하게 보호할 수 있습니다.</p>
<h2 id="react-js-프로젝트에서-env-파일을-사용하는-방법" tabindex="-1"><a class="header-anchor" href="#react-js-프로젝트에서-env-파일을-사용하는-방법" aria-hidden="true">#</a> React.js 프로젝트에서 .env 파일을 사용하는 방법</h2>
<ul>
<li>.env 파일 생성: React 프로젝트의 루트 디렉토리에 .env 파일이름으로 파일을 생성합니다. 이 파일은 수동으로 생성하거나 명령줄 도구를 사용하여 생성할 수 있습니다.</li>
<li>환경 변수 정의: .env 파일에서 KEY=VALUE 구문을 사용하여 환경 변수를 정의할 수 있습니다.</li>
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
<h2 id="환경-변수-생성하기" tabindex="-1"><a class="header-anchor" href="#환경-변수-생성하기" aria-hidden="true">#</a> 환경 변수 생성하기</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">REACT_APP_API_KEY</span><span class="token operator">=</span>your<span class="token operator">-</span>api<span class="token operator">-</span>key
<span class="token constant">REACT_APP_API_URL</span><span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>api<span class="token punctuation">.</span>example<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>React를 사용할 때는 환경 변수 이름을 REACT_APP_로 접두어를 붙이는 것이 중요합니다. 이렇게 함으로써 React가 이러한 변수에 액세스할 수 있도록 보장할 수 있습니다.</p>
<h2 id="환경-변수-접근하기" tabindex="-1"><a class="header-anchor" href="#환경-변수-접근하기" aria-hidden="true">#</a> 환경 변수 접근하기</h2>
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
<p>JavaScript 코드에서 process.env를 사용하여 이 환경 변수에 액세스할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> apiKey <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_API_KEY</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> apiUrl <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">REACT_APP_API_URL</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">API Key: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>apiKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">API URL: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>apiUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>환경 변수 로드: .env 파일에 정의된 환경 변수는 react-scripts를 사용하여 React 애플리케이션을 시작할 때 자동으로로드됩니다 (예: npm start 또는 yarn start). 코드에서 .env 파일을 수동으로 로드할 필요가 없습니다.</p>
<p>중요: .env 파일을 버전 관리 (예: Git)에 커밋해서는 안 됩니다. 민감한 정보를 보호하려면 .gitignore 파일에 포함시켜 실수로 커밋되지 않도록 해야 합니다.</p>
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
<h2 id="env-파일을-src-폴더-밖에-배치하세요" tabindex="-1"><a class="header-anchor" href="#env-파일을-src-폴더-밖에-배치하세요" aria-hidden="true">#</a> .env 파일을 src 폴더 밖에 배치하세요.</h2>
<p><img src="@source/docs/Nextjs/2024-04-05-envfileinReactjs/img/envfileinReactjs_1.png" alt="이미지"></p>
</div></template>
