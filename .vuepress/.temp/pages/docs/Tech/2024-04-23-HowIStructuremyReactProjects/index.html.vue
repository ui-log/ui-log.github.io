<template><div><p><img src="@source/docs/Tech/2024-04-23-HowIStructuremyReactProjects/img/HowIStructuremyReactProjects_0.png" alt="이미지"></p>
<p>버그에 대해 윙윙 웃거나 코드가 뒤얽힘에 비웃는 React 앱을 꿈꿨던 적이 있나요? 이제 우리 함께 React 앱을 만들어보면, 나쁜 코딩 습관의 아포칼립스에도 버텨낼 수 있는 견고한 React 앱을 만들게 될 겁니다.</p>
<p>초보 시절에는 제 코드가 야생 동물과 같았어요 — 기능적이지만 아주 혼돈스러웠죠. 프로젝트 구조는 널리 알려진 것이라 할 수 없을 정도로 무질서했어요. 저의 초보 시절에는 적당했지만, 프로젝트가 커짐에 따라 복잡성도 높아지고 혼돈이 더 커졌어요.</p>
<p>프로젝트가 확장될수록 특정 코드를 찾는 것이 마치 바늘을 건초더미에서 찾는 것과 같은 모험이 되어, '바늘이라는 이름의 변수'가 코드 깊은 곳 어딘가에 묻혀있었다는 것을 깨닫게 되었죠.</p>
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
<p>React 프로젝트 구조를 배우는 데 시간을 투자하세요. 그 전에 코드베이스가 풀 수 없는 미스터리 소설로 변하지 않도록 해보세요!</p>
<p>프로젝트 구조 예시:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>src
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> assets
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> components
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> config
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> features
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> hooks
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> lib
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> providers
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> routes
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> stores
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> test
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> types
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>components: 전체 킹국을 빛내는 공유 컴포넌트</li>
<li>config: 전역 구성, 환경 변수 및 비밀의 금고</li>
<li>features: 특징별 모듈</li>
<li>hooks: 전체 영역을 통틀어 공유되는 신비한 훅</li>
<li>libs: 애플리케이션에 대해 미리 구성된 다양한 라이브러리 재내보</li>
<li>providers: 애플리케이션의 생명력을 지키는 공급자들</li>
<li>routes: 라우트 구성</li>
<li>stores: 전역 상태 저장소</li>
<li>test: 유틸리티 및 목 서버가 자신을 증명하는 시험의 투기장</li>
<li>types: 애플리케이션 전반에 사용되는 기본 타입</li>
<li>utils: 공유 유틸리티 함수</li>
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
<hr>
<p>이제 기능의 핵심으로 내려가 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>src<span class="token operator">/</span>features<span class="token operator">/</span>my<span class="token operator">-</span><span class="token keyword">new</span><span class="token operator">-</span>feature
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> api         # 선언과 <span class="token constant">API</span> 훅<span class="token punctuation">,</span> 이 기능을 위한 요청의 심포니
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> assets      # 멋진 기능에 특화된 보물들
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> components  # 시각적 아이디티를 조각하는 장인들의 컴포넌트
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> hooks       # 이 기능의 패브릭에 엮인 마법 주문들
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> routes      # 기능 페이지로 이끄는 경로들<span class="token punctuation">,</span> 경이의 지도
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> stores      # 상태를 보호하는 지킴이들<span class="token punctuation">,</span> 기능의 신성한 진실들
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> types       # TypeScript 타입<span class="token punctuation">,</span> 기능 도메인의 어휘
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> utils       # 이 기능에만 특화된 유틸리티 함수를 만드는 장인들
<span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span> index<span class="token punctuation">.</span>ts    # 큰 입구<span class="token punctuation">,</span> 이 기능의 공개 <span class="token constant">API</span><span class="token punctuation">,</span> 본질을 드러내는 곳
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="인덱스-파일" tabindex="-1"><a class="header-anchor" href="#인덱스-파일" aria-hidden="true">#</a> 인덱스 파일</h1>
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
<p>기능에서 모든 것은 기능의 공개 API로 작동하는 index.ts 파일에서 내보내야 합니다.</p>
<p><img src="@source/docs/Tech/2024-04-23-HowIStructuremyReactProjects/img/HowIStructuremyReactProjects_1.png" alt="이미지"></p>
<p>다른 기능에서 물건을 가져올 때는 다음을 사용하여만 가져와야 합니다:</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>AwesomeComponent<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/features/awesome-feature"</span>
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
<div class="language-diff ext-diff line-numbers-mode"><pre v-pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> 그리고 아닙니다.
</span></span>
import { AwesomeComponent } from "@/features/awesome-feature/components/AwesomeComponent"

# 절대 경로 가져오기 설정!

절대 경로 가져오기를 설정하면 import 문이 더 깨끗하고 가독성이 좋아집니다. 또한 긴 상대적인 import 경로를 피하는 데 도움이 됩니다.
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
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token comment">//  jsconfig.json/tsconfig.json</span>
<span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"."</span><span class="token punctuation">,</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"@/*"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./src/*"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>기억해요. 모든 개발자들, 노련한 이든 초보든, 스파게티 코드와 미친듯한 탱고를 춤췄던 적이 있어요. 그러나 구조가 있다면 명확함이 따르고, 명확함이 있다면 React를 미루기 위한 힘을 가질 수 있어요.</p>
<p>그러니, 프론트엔드 개발 영역에서 나만의 길을 걷는 동안, 이 청사진이 여러분을 이끄는 빛이 되어줄 것입니다. 어느 정도 정리된 탁월한 지도가 될 거예요. 여러분의 React 프로젝트가 버그를 비웃고, 혼돈을 비웃고, 코딩 재앙에도 굳건했으면 좋겠어요.</p>
<p>개인 링크.:
웹
GitHub</p>
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
<p>주석:
<a href="https://github.com/alan2207/bulletproof-react" target="_blank" rel="noopener noreferrer">https://github.com/alan2207/bulletproof-react<ExternalLinkIcon/></a></p>
</div></template>
