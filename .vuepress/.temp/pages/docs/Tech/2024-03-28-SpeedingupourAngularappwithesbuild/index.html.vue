<template><div><img src="@source/docs/Tech/2024-03-28-SpeedingupourAngularappwithesbuild/img/SpeedingupourAngularappwithesbuild_0.png" />
<p>카디올로그스(Cardiologs)에서는 인공지능(AI)을 활용하여 의료 전문가들이 심전도(Electrocardiogram, ECG) 분석 시간을 단축할 수 있는 애플리케이션을 개발하고 있습니다.</p>
<p>우리는 다음 기술 스택으로 구축된 SaaS 오퍼링을 개발하고 있습니다:</p>
<img src="@source/docs/Tech/2024-03-28-SpeedingupourAngularappwithesbuild/img/SpeedingupourAngularappwithesbuild_1.png" />
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
<p>최근에 React와 Vite를 사용하여 새 제품을 만들었고, Vite가 개발자 경험을 더 빠르게 만들어 준다는 사실에 깜짝 놀랐습니다.</p>
<p>저희 Angular 앱은 259개의 컴포넌트, 47개의 모듈, 800,000줄의 코드로 꽤 큽니다. React 스택에 비해 시작 속도가 느린 것 같아서 이를 개선하고자 했어요.</p>
<p>v17부터 Angular 팀이 esbuild 지원을 추가했습니다: https://angular.io/guide/esbuild</p>
<p>Webpack에서 esbuild로 전환해보고, 성능 면에서 어떤 변화가 있는지 확인해 봅시다.</p>
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
<h1 id="변경해야-했던-내용" tabindex="-1"><a class="header-anchor" href="#변경해야-했던-내용" aria-hidden="true">#</a> 변경해야 했던 내용</h1>
<p>우리는 Nx를 사용하고 프로젝트.json에서 빌드 실행기를 변경하여 esbuild를 활성화했습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token operator">-</span>      <span class="token string">"executor"</span><span class="token operator">:</span> <span class="token string">"@angular-builders/custom-webpack:browser"</span><span class="token punctuation">,</span>
<span class="token operator">+</span>      <span class="token string">"executor"</span><span class="token operator">:</span> <span class="token string">"@angular-devkit/build-angular:browser-esbuild"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 변경으로 몇 가지가 문제가 발생할 것입니다. 다음은 변경해야 했던 사항입니다:</p>
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
<h1 id="esm-기본-가져오기" tabindex="-1"><a class="header-anchor" href="#esm-기본-가져오기" aria-hidden="true">#</a> ESM 기본 가져오기</h1>
<p>우리는 ES6 모듈 구문을 지원하지 않는 몇 가지 CommonJS 모듈을 가져옵니다, 예를 들어 momentjs:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>▲ <span class="token punctuation">[</span>경고<span class="token punctuation">]</span> <span class="token string">"moment"</span>를 호출하면 실행 시 충돌이 발생할 수 있습니다<span class="token punctuation">.</span> 이는 호출하는 것이 함수가 아닌 가져오기 네임스페이스 객체임을 나타냅니다 <span class="token punctuation">[</span>call<span class="token operator">-</span><span class="token keyword">import</span><span class="token operator">-</span>namespace<span class="token punctuation">]</span>

  대신 기본 가져오기로 <span class="token string">"moment"</span>를 변경하는 것을 고려해 보세요<span class="token operator">:</span>

    libs<span class="token operator">/</span>help<span class="token operator">/</span>src<span class="token operator">/</span>lib<span class="token operator">/</span>help<span class="token operator">/</span>manual<span class="token operator">/</span>manual<span class="token punctuation">.</span>component<span class="token punctuation">.</span>ts<span class="token operator">:</span><span class="token number">5</span><span class="token operator">:</span><span class="token number">7</span><span class="token operator">:</span>
      <span class="token number">5</span> │ <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span><span class="token punctuation">;</span>
        │        <span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span><span class="token operator">~</span>
        ╵        moment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 오류는 tsconfig.json 파일에 이 플래그를 추가하여 수정할 수 있습니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token string-property property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token operator">+</span>     <span class="token string">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이후에 모든 기본 import를 다음과 같이 변경하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span>  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span><span class="token punctuation">;</span>
<span class="token operator">+</span>  <span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">'moment'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 우리는 번들 크기 문제에 대비하여 코드베이스에서 moment를 date-fns로 대체하고 있습니다.</p>
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
<p>https://angular.io/guide/esbuild#esm-default-imports-vs-namespace-imports을(를) 참조하세요.</p>
<h1 id="웹팩과-함께-사용하는-node-환경-변수" tabindex="-1"><a class="header-anchor" href="#웹팩과-함께-사용하는-node-환경-변수" aria-hidden="true">#</a> 웹팩과 함께 사용하는 Node 환경 변수</h1>
<p>저희의 웹팩 빌드는 @angular-builders/custom-webpack 빌더를 사용하여 빌드 시점에 환경 변수를 가져와 브라우저로 전달했습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getClientEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// NX_* 환경 변수를 가져와 응용 프로그램에 주입되도록 웹팩 구성의 DefinePlugin을 통해 준비합니다.</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'process.env'</span><span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">)</span>
     <span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">env<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^NX_</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">return</span> env<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그럼 빌드 중에는 변수를 전달해야 합니다: NX_TAG=pr-123 npx nx build. 위의 사용자 정의 웹팩 구성은 브라우저에서 node 애플리케이션과 같은 방식으로 process.env로 환경 변수를 사용할 수 있도록 합니다.</p>
<p>esbuild에서는 더 이상 이러한 환경 변수를 간단하게 가져올 수 있는 방법이 없습니다. 결과적으로 브라우저에 process.env를 삽입하려고 노력하는 대신에 Github Actions 워크플로우에서 빌드 시간에 간단히 JSON 파일을 작성하는 방법으로 대체합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">-</span> name<span class="token operator">:</span> Pass the build tag into the app without using process<span class="token punctuation">.</span>env
  <span class="token literal-property property">run</span><span class="token operator">:</span> printf <span class="token string">'{"tag":"%s"}\n'</span> <span class="token string">"${ inputs.tag }"</span> <span class="token operator">></span> env<span class="token punctuation">.</span>json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">+</span>  <span class="token keyword">import</span> env <span class="token keyword">from</span> <span class="token string">'./env.json'</span><span class="token punctuation">;</span>
   <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
     <span class="token constant">APP_ENV</span><span class="token operator">:</span> <span class="token function">getEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token operator">-</span>    <span class="token constant">APP_VERSION</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NX_TAG</span> <span class="token operator">??</span> <span class="token string">'dev'</span><span class="token punctuation">,</span>
<span class="token operator">+</span>    <span class="token constant">APP_VERSION</span><span class="token operator">:</span> env<span class="token punctuation">.</span>tag<span class="token punctuation">,</span>
   <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="상대적-scss-가져오기" tabindex="-1"><a class="header-anchor" href="#상대적-scss-가져오기" aria-hidden="true">#</a> 상대적 SCSS 가져오기</h1>
<p>일부 SCSS @import가 작동하지 않았습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>✘ <span class="token punctuation">[</span>에러<span class="token punctuation">]</span> 가져올 스타일시트를 찾을 수 없습니다<span class="token punctuation">.</span>
  ╷
<span class="token number">1</span> │ @<span class="token keyword">import</span> <span class="token string">'libs/heartbeat/src/lib/assets/scss/hb-foundations'</span><span class="token punctuation">;</span>
  │         <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span>
  ╵
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이것들은 한 Nx 라이브러리에서 다른 라이브러리로의 상대적 가져오기이며, libs 폴더는 저장소의 루트에 있습니다.</p>
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
<p>하나의 해결책은 올바른 상대 경로를 사용하는 것이지만, 이는 많은 파일을 업데이트해야 하며 코드를 더럽힐 수 있다고 생각됩니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">+</span> @<span class="token keyword">import</span> <span class="token string">'../../../../heartbeat/src/lib/assets/scss/hb-foundations'</span><span class="token punctuation">;</span>
<span class="token operator">-</span> @<span class="token keyword">import</span> <span class="token string">'libs/heartbeat/src/lib/assets/scss/hb-foundations'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>또 다른 해결책은 프로젝트.json을 사용하여 저장소의 루트를 경로로 추가하는 것입니다. 이는 SCSS 임포트에 사용할 수 있는 경로를 정의합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>      <span class="token string-property property">"build"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"executor"</span><span class="token operator">:</span> <span class="token string">"@angular-devkit/build-angular:browser-esbuild"</span><span class="token punctuation">,</span>
        <span class="token string-property property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span>        
          <span class="token string-property property">"stylePreprocessorOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string-property property">"includePaths"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
               <span class="token string">"node_modules"</span><span class="token punctuation">,</span>
<span class="token operator">+</span>              <span class="token string">""</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="성능-벤치마크" tabindex="-1"><a class="header-anchor" href="#성능-벤치마크" aria-hidden="true">#</a> 성능 벤치마크</h1>
<p>이제 우리가 실행 중이니까, 빌드 성능이 어떻게 영향을 받는지 확인해보겠습니다:</p>
<p><img src="@source/docs/Tech/2024-03-28-SpeedingupourAngularappwithesbuild/img/SpeedingupourAngularappwithesbuild_2.png" alt="Speeding up our Angular app with esbuild"></p>
<p>깃허브 액션에서 빌드에 꽤 많은 시간이 걸리는데요, 여기서 47초를 절약하는 것도 좋지만 크게 변화를 가져다주지는 않을 것 같아요. 대부분의 시간은 결국 CI에서 E2E 테스트에 소요되어요 😅</p>
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
<p><img src="@source/docs/Tech/2024-03-28-SpeedingupourAngularappwithesbuild/img/SpeedingupourAngularappwithesbuild_3.png" alt="SpeedingupourAngularappwithesbuild_3"></p>
<p>여기서 우리는 정말 좋은 향상을 보기 시작했습니다. nx build가 완료될 때까지 컴퓨터 앞에서 1분을 기다리는 것은 매우 고통스럽습니다.</p>
<p>대부분의 사람들은 실제로 빌드하지 않고 서비스를 하려고 하지만 개발 서버가 어떻게 향상되는지 알아볼까요?</p>
<p><img src="@source/docs/Tech/2024-03-28-SpeedingupourAngularappwithesbuild/img/SpeedingupourAngularappwithesbuild_4.png" alt="SpeedingupourAngularappwithesbuild_4"></p>
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
<p>여기서 사용하는 개발 서버는 Vite를 내부적으로 사용하고 있어요. 하지만 설정이나 내부 동작을 외부에 노출하지는 않는군요.</p>
<p>이곳에서 얻는 이점은 정말 뚜렷해요. nx serve의 시작 시간을 20초 이상 절약하면 프로젝트의 모든 개발자들에게 삶의 질이 향상될 거에요.</p>
<p><img src="@source/docs/Tech/2024-03-28-SpeedingupourAngularappwithesbuild/img/SpeedingupourAngularappwithesbuild_5.png" alt="이미지"></p>
<p>개발 중에는 한 번 서버를 시작한 후 소스 코드를 여러 번 편집하게 되는데, 이로 인해 개발 서버가 우리 코드를 다시 빌드하게 될 거에요.</p>
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
<p>여기서 Vite으로는 아무 변화가 없어요:</p>
<ul>
<li>코드 조각이 변경될 때 대략 1초 정도 코드를 다시 빌드합니다.</li>
<li>그런 다음 개발 서버가 브라우저에 전체 페이지를 다시 로드합니다. 앱에 따라 다시로드하는 데 시간이 걸릴 수 있습니다. 대부분의 시간이 여기에 사용됩니다.</li>
</ul>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>새로운 빌더를 사용하는 앱을 업데이트하는 것은 매우 쉬웠고, nx serve의 빌드 시간 및 초기 시작 시간에 빠른 개선을 볼 수 있었어요.</p>
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
<p>만약 Angular 응용 프로그램을 사용 중이고 아직 esbuild로 전환하지 않았다면, 뭔가 소홀한 부분이 있을 수 있어요. Angular에 이런 개선 사항이 도입된 것을 보는 것은 정말 대단해요! 🚀</p>
<p>하지만 Vite가 제공하는 것과 비교할 때 어떤 부분이 아직 부족한 것 같아요: React+Vite 개발 서버에서 코드를 변경하면 전체 페이지가 새로고침되지 않고 즉시 브라우저에서 반영된다는 것을 보면요. Angular은 아직 전체 페이지를 다시로드해야 해요.</p>
<p>앞으로 Angular+Vite에서 Hot Module Replacement (HMR)과 같은 새로운 추가 기능을 볼 수 있기를 기대해 봅니다. 🤔</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component></div></template>
