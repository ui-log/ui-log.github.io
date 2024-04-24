<template><div><img src="@source/docs/Tech/2024-04-23-ReactNativewithWatermelonDB/img/ReactNativewithWatermelonDB_0.png" />
<p>이전에 일했던 회사에서 흥미로운 것을 발견했어요. React Native와 WatermelonDB를 함께 사용하여 오프라인 데이터 저장을 할 수 있어요.</p>
<h2 id="watermelondb란" tabindex="-1"><a class="header-anchor" href="#watermelondb란" aria-hidden="true">#</a> WatermelonDB란?</h2>
<p>WatermelonDB는 SQLite 기술을 사용하는 React Native와 React 웹 앱을 위한 데이터베이스 프레임워크입니다.</p>
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
<h2 id="왜-watermelondb" tabindex="-1"><a class="header-anchor" href="#왜-watermelondb" aria-hidden="true">#</a> 왜 WatermelonDB?</h2>
<p>WatermelonDB는 React Native 및 React 웹 앱에서 사용자 데이터를 다루는 새로운 방법입니다.</p>
<p>React Native에서 복잡한 애플리케이션을 구축하는 데 최적화되어 있으며, 핵심 목표는 실제 성능입니다. 간단히 말하면, 앱이 빠르게 시작되어야 합니다.</p>
<h1 id="설치" tabindex="-1"><a class="header-anchor" href="#설치" aria-hidden="true">#</a> 설치</h1>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add @nozbe<span class="token operator">/</span>watermelondb

# 또는 npm을 사용할 경우
npm install @nozbe<span class="token operator">/</span>watermelondb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="react-native-설정" tabindex="-1"><a class="header-anchor" href="#react-native-설정" aria-hidden="true">#</a> React Native 설정</h1>
<ul>
<li>아직 설치하지 않은 경우 데코레이터를 위한 Babel 플러그인을 설치하십시오:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>yarn add <span class="token operator">--</span>dev @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>proposal<span class="token operator">-</span>decorators

# 또는 npm을 사용할 경우
npm install <span class="token operator">-</span><span class="token constant">D</span> @babel<span class="token operator">/</span>plugin<span class="token operator">-</span>proposal<span class="token operator">-</span>decorators
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
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
<li>babel.config.js 파일에 ES6 데코레이터 지원 추가하기:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"module:metro-react-native-babel-preset"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string-property property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">"@babel/plugin-proposal-decorators"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">"legacy"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="watermelondb를-위한-앱-설정하기" tabindex="-1"><a class="header-anchor" href="#watermelondb를-위한-앱-설정하기" aria-hidden="true">#</a> WatermelonDB를 위한 앱 설정하기</h1>
<p>루트 폴더에 model/schema.ts, model/migrations.ts 및 model/index.ts를 만드세요.</p>
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
<p>당신의 schema.ts 파일은 다음과 같아야 합니다.</p>
</li>
<li>
<p>당신의 migration.ts 파일은 다음과 같아야 합니다. 한 가지 버전만 사용하는 경우 migrations를 빈 배열로 유지해야 합니다.</p>
</li>
<li>
<p>당신의 index.ts 파일은 다음과 같아야 합니다. 새로운 modelClass를 만든 후에 modelClass를 등록하는 것을 잊지 마세요.</p>
</li>
</ul>
<h1 id="모델" tabindex="-1"><a class="header-anchor" href="#모델" aria-hidden="true">#</a> 모델</h1>
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
<p>모델 클래스는 앱에서 특정 유형의 항목을 나타냅니다. 예를 들어, 제품(Product), 카테고리(Categories) 등이 있습니다.</p>
<h1 id="모델-생성" tabindex="-1"><a class="header-anchor" href="#모델-생성" aria-hidden="true">#</a> 모델 생성</h1>
<p>model/product.ts와 model/categories.ts 파일을 생성해주세요.</p>
<ul>
<li>여기 제가 예시로 드리는 product.ts 모델 클래스는 category.ts 모델 클래스와 일대다 관계를 가지고 있습니다.</li>
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
<ul>
<li>카테고리.ts 모델 클래스</li>
</ul>
<h1 id="사용법" tabindex="-1"><a class="header-anchor" href="#사용법" aria-hidden="true">#</a> 사용법</h1>
<p>이름이 queries인 폴더를 생성하여 이전에 생성된 스키마와 모델을 수정하는 데 사용할 모든 함수를 담아 봅시다.</p>
<p>시작하기 전에 쿼리 캐싱을 처리하기 위해 다음 패키지를 추가해 봅시다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ yarn add @tanstack<span class="token operator">/</span>react<span class="token operator">-</span>query
# 또는 npm을 사용하여
$ npm i @tanstack<span class="token operator">/</span>react<span class="token operator">-</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>queries 폴더에 fileproduct.ts 파일을 추가하여 제품 모델 클래스를 수정하는 모든 로직을 수용합니다.</p>
</li>
<li>
<p>queries 폴더에 file categories.ts 파일을 추가하여 카테고리 모델 클래스를 수정하는 모든 로직을 수용합니다.</p>
</li>
</ul>
<h1 id="컴포넌트에서-사용됨" tabindex="-1"><a class="header-anchor" href="#컴포넌트에서-사용됨" aria-hidden="true">#</a> 컴포넌트에서 사용됨</h1>
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
<p>제품 CRUD 작업에 사용해 보세요.</p>
<p>카테고리 CRUD 작업에서도 동일하게 적용해 보세요.</p>
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>API 없이 복잡한 데이터를 저장할 수 있습니다. 온라인 서버에 데이터를 저장해야 하는 경우 Sync 기능을 사용할 수 있습니다. 더 많은 정보는 공식 WatermelonDB를 확인해보세요.</p>
</div></template>
