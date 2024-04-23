<template><div><h2 id="드론-사진을-3d-모델로-변환하고-결과물을-지도상에-표시해보세요" tabindex="-1"><a class="header-anchor" href="#드론-사진을-3d-모델로-변환하고-결과물을-지도상에-표시해보세요" aria-hidden="true">#</a> 드론 사진을 3D 모델로 변환하고 결과물을 지도상에 표시해보세요</h2>
<p><img src="@source/docs/Nextjs/2024-04-05-AnOpenSourcePhotogrammetryPipeline/img/AnOpenSourcePhotogrammetryPipeline_0.png" alt="image"></p>
<h1 id="소개" tabindex="-1"><a class="header-anchor" href="#소개" aria-hidden="true">#</a> 소개</h1>
<p>위키피디아에 따르면:</p>
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
<p>먼저 전문가가 아닌 것을 언급하고 싶습니다. 드론을 활용하여 더 흥미로운 일을 하려는 개발자일 뿐입니다. 그렇지만 포토그래미터리를 사용하여 3D 모델을 만들기 위해서는 서로 겹치는 많은 사진이 필요합니다.</p>
<p>이것이 최종 결과물이 될 것입니다. 그리고 여기에 코드가 있습니다.</p>
<p>코드는 꽤 간단합니다만, 목표를 달성하기 위해 멋진 라이브러리와 서비스 집합이 필요합니다. 단계는 다음과 같습니다:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-AnOpenSourcePhotogrammetryPipeline/img/AnOpenSourcePhotogrammetryPipeline_1.png" alt="img"></p>
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
<h1 id="비행-계획" tabindex="-1"><a class="header-anchor" href="#비행-계획" aria-hidden="true">#</a> 비행 계획</h1>
<p>모든 드론은 고유의 모바일 앱을 함께 제공하며 그 안에 지능적인 비행 모드 옵션이 있습니다. 저는 FIMI X8S2를 가지고 있고, 여기서는 그 앱을 참조로 사용할 것이지만, 모든 드론에 대해 옵션은 거의 동일합니다.</p>
<p>먼저 목표를 선택해야 합니다. 여기서는 제 동네의 오래된 교회를 선택하겠습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-AnOpenSourcePhotogrammetryPipeline/img/AnOpenSourcePhotogrammetryPipeline_2.png" alt="이미지"></p>
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
<p>아이디어는 타겟의 겹친 사진을 다양한 각도에서 촬영하는 것입니다. 그 작업을 하기 위해 두 가지 다른 비행 모드를 사용할 수 있어요: Orbit 또는 Waypoints. Waypoints가 가장 많이 사용되는 모드이지만, 저는 더 직관적인 Orbit 모드를 선택했어요. Orbit 모드에서는 드론을 타겟의 중심에 위치시키고 반지름을 선택해야 해요. 카메라는 항상 타겟을 향하고 있어야 합니다.</p>
<p>비행 계획이 설정되면 카메라 옵션으로 이동하여 &quot;Lapse, 2 seconds&quot;를 선택하세요. 또다른 중요한 설정은 비행 중 드론의 속도입니다. 저는 3m/s를 선택했어요. 속도와 랩스의 조합은 겹쳐진 사진을 얻을 수 있게 해줄 거에요. 이에 대한 멋진 계산법은 있지만, 이 기본값들도 꽤 괜찮아요.</p>
<p>그래, 드론을 날려보세요, 사진 촬영 버튼을 누르고 카메라 각도에 주의를 기울이세요. 그리고 덧붙이자면, 사진을 많이 찍을수록 좋아요. 저는 241장의 사진을 찍었어요.</p>
<h1 id="opendronemap-odm-을-사용한-이미지-처리" tabindex="-1"><a class="header-anchor" href="#opendronemap-odm-을-사용한-이미지-처리" aria-hidden="true">#</a> OpenDroneMap (ODM)을 사용한 이미지 처리</h1>
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
<p>ODM은 놀라운 오픈소스 도구이며, 드론 사진을 가져와 유용한 출력물을 많이 생성합니다.</p>
<p>ODM을 실행하는 데 필요한 유일한 것은 도커입니다. ODM에는 꼭 읽을 가치가 있는 훌륭한 문서가 있습니다. GitHub 링크를 여기에 남겨두겠습니다. 그곳에서 더 자세한 지침을 찾을 수 있을 거예요.</p>
<p>그래서 컴퓨터에 SD 카드를 넣고 이미지를 자세히 살펴보세요. 타겟을 향하지 않은 이미지는 삭제하세요. 프로젝트를 위해 두 개의 폴더를 생성하는 것이 필요합니다. 이렇게요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>├── church
│   ├── images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>교회 폴더 안에서 다음 명령을 실행해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>docker run <span class="token operator">-</span>ti <span class="token operator">-</span> rm <span class="token operator">-</span>v <span class="token punctuation">.</span><span class="token operator">:</span><span class="token operator">/</span>datasets<span class="token operator">/</span>code opendronemap<span class="token operator">/</span>odm <span class="token operator">-</span> project<span class="token operator">-</span>path <span class="token operator">/</span>datasets
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>이 명령은 완료까지 시간이 오래 걸릴 거예요. 이 곳에서는 1시간 이상 걸렸어요. 명령이 끝나면, 교회 폴더 안에 docs에서 언급된 파일들이 나타날 거에요. odm_report 폴더에는 생성된 데이터에 대한 다양한 정보와 미리보기가 많이 포함되어 있어요.</p>
<p>아래 이미지에서 제 오비트 비행 모드와 카메라 촬영 위치를 확인할 수 있어요:</p>
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
<p><img src="@source/docs/Nextjs/2024-04-05-AnOpenSourcePhotogrammetryPipeline/img/AnOpenSourcePhotogrammetryPipeline_3.png" alt="AnOpenSourcePhotogrammetryPipeline_3"></p>
<p>3D 모델은 odm_texturing 폴더에 있습니다. Blender와 같은 소프트웨어를 사용하여 렌더링할 수 있지만, 다음 섹션에서는 CesiumIon에서 생성된 모델을 볼 것입니다.</p>
<h1 id="cesiumion에-데이터-업로드" tabindex="-1"><a class="header-anchor" href="#cesiumion에-데이터-업로드" aria-hidden="true">#</a> CesiumIon에 데이터 업로드</h1>
<p>우리는 CesiumIon을 사용하여 모델을 적절히 호스팅하고 제공할 것입니다. 모델은 3D 타일로 제공될 것입니다. Cesium 계정을 만들어주세요. 개발자용으로 무료입니다. 모델을 CesiumIon에 업로드하는 과정은 매우 간단하며 다음 튜토리얼에서 다룹니다:</p>
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
<p>odm-texturing 폴더의 모든 파일을 업데이트하는 걸 잊지 마세요. 다만 문제가 있었어요. Cesium이 지구 상에 모델 위치를 찾지 못해서 수동으로 설정해야 했어요. Cesium에는 이에 대한 튜토리얼도 있어요.</p>
<p>여기서 한 드론 사진의 좌표를 가져왔어요. 이미지 메타데이터에서 좌표를 찾을 수 있어요.</p>
<h1 id="코딩" tabindex="-1"><a class="header-anchor" href="#코딩" aria-hidden="true">#</a> 코딩</h1>
<p>네, 이제 코딩을 해볼까요? 이 모델을 지도에 렌더링하기 위해 다양한 라이브러리를 사용할 거에요, 하지만 최종 코드는 매우 간단할 거에요. 이것들은 사용할 라이브러리들이에요:</p>
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
<li>Vite — 프로젝트를 부트스트랩합니다</li>
<li>react-map-gl — React 방식으로 베이스 맵을 렌더링합니다</li>
<li>maplibre — react-map-gl에서 사용되며 mapbox-gl을 대체합니다</li>
<li>deck.gl — 3D 모델을 렌더링합니다</li>
<li>loaders.gl — 3D 모델을 로드합니다</li>
</ul>
<p>또한 Tailwind를 사용 중인데, 그냥 습관일 뿐입니다. 이 프로젝트의 CSS는 매우 간단합니다. 현재 pnpm을 사용하고 있지만 npm 또는 yarn도 괜찮습니다. 프로젝트를 생성하는 것부터 시작해 봅시다.</p>
<p>React 및 TypeScript 프로젝트를 부트스트랩하려면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>pnpm create vite your<span class="token operator">-</span>project<span class="token operator">-</span>name <span class="token operator">--</span>template react<span class="token operator">-</span>ts
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
<p>프로젝트 폴더로 이동하여 의존성을 설치하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd your<span class="token operator">-</span>project<span class="token operator">-</span>name
pnpm add @deck<span class="token punctuation">.</span>gl<span class="token operator">/</span>core @deck<span class="token punctuation">.</span>gl<span class="token operator">/</span>layers @deck<span class="token punctuation">.</span>gl<span class="token operator">/</span>react @deck<span class="token punctuation">.</span>gl<span class="token operator">/</span>mesh<span class="token operator">-</span>layers @deck<span class="token punctuation">.</span>gl<span class="token operator">/</span>geo<span class="token operator">-</span>layers @deck<span class="token punctuation">.</span>gl<span class="token operator">/</span>mapbox @loaders<span class="token punctuation">.</span>gl<span class="token operator">/</span>3d<span class="token operator">-</span>tiles react<span class="token operator">-</span>map<span class="token operator">-</span>gl maplibre<span class="token operator">-</span>gl 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 컴포넌트를 보관할 폴더를 만들어봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>cd src
mkdir components
touch components<span class="token operator">/</span>Loading<span class="token punctuation">.</span>tsx components<span class="token operator">/</span>ChurchMap<span class="token punctuation">.</span>tsx
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
<p>app.css 파일과 App.tsx의 모든 보일러플레이트 코드를 삭제할 수 있어요. 그 다음 main.tsx로 이동해서 app.css import를 삭제하고 maplibre CSS import를 추가하세요. 이 CSS는 기본 지도를 올바르게 렌더링하게 해줄 거에요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">"react-dom/client"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">"./App.tsx"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"./index.css"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">"maplibre-gl/dist/maplibre-gl.css"</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"root"</span><span class="token punctuation">)</span> <span class="token keyword">as</span> HTMLElement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
    <span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>React<span class="token punctuation">.</span>StrictMode<span class="token operator">></span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>나중에 오류를 피하기 위해, 먼저 기본 지도만 렌더링합시다. 여기에는 raster base map을 사용하고 있습니다. 벡터 지도가 더 나은데 유료이죠. react-map-gl에서 반드시 mapbox-style 객체가 필요하므로 해당 파일을 만들어 보관합시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>touch src<span class="token operator">/</span>mapHelpers<span class="token punctuation">.</span>tsx
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
<p>이 코드는 Mapbox 스타일 객체입니다. 맵 소스를 지정하고 스타일을 적용하는 등 다양한 작업을 수행할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/mapHelpers.tsx</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MapboxStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-map-gl"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token literal-property property">mapStyle</span><span class="token operator">:</span> MapboxStyle <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sources</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">osm</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"raster"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tiles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">tileSize</span><span class="token operator">:</span> <span class="token number">256</span><span class="token punctuation">,</span>
      <span class="token literal-property property">attribution</span><span class="token operator">:</span> <span class="token string">"&amp;copy; OpenStreetMap Contributors"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">maxzoom</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">layers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"osm"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"raster"</span><span class="token punctuation">,</span>
      <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"osm"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 맵을 생성해봅시다. 먼저 베이스 맵만 렌더링할 것입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/components/ChurchMap.tsx</span>
<span class="token keyword">import</span> Map<span class="token punctuation">,</span> <span class="token punctuation">{</span> NavigationControl<span class="token punctuation">,</span> useControl<span class="token punctuation">,</span> MapRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-map-gl"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> maplibregl <span class="token keyword">from</span> <span class="token string">"maplibre-gl"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../mapHelpers"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">INITIAL_VIEW_STATE</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">48.5495</span><span class="token punctuation">,</span>
  <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">27.5969</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ChurchMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Map
      mapLib<span class="token operator">=</span><span class="token punctuation">{</span>maplibregl<span class="token punctuation">}</span>
      mapStyle<span class="token operator">=</span><span class="token punctuation">{</span>mapStyle<span class="token punctuation">}</span>
      initialViewState<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">INITIAL_VIEW_STATE</span><span class="token punctuation">}</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"100vw"</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"100vh"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token operator">&lt;</span>NavigationControl <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Map<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>작동 중인 베이스 맵이 있으면, Deck.gl을 추가할 수 있어요. Deck.gl은 다른 라이브러리와 통합하는 방법을 가르쳐 주는 좋은 문서가 있어요. 우리의 경우에는 react-map-gl이죠, 그런데 문제가 있어요. 그들의 예시들 중 많은 것들이 react-map-gl의 오래된 버전을 사용하고 있어요. 이 두 라이브러리를 올바르게 통합하려면 다음의 예시를 사용해야 해요:</p>
<p>내 예시에서, CesiumIon 계정에서 asset-id와 access-token을 가져와요. accessToken을 저장할 .env.local 파일을 만들어보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>touch <span class="token punctuation">.</span>env<span class="token punctuation">.</span>local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token punctuation">.</span>env<span class="token punctuation">.</span>local
<span class="token constant">VITE_CESIUM</span> <span class="token operator">=</span> yourAccessToken
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>ChurchMap.tsx 컴포넌트를 Deck.gl과 CesiumIon 데이터로 업데이트해보세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Tile3DLayer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@deck.gl/geo-layers/typed"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CesiumIonLoader <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@loaders.gl/3d-tiles"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> MapboxOverlay<span class="token punctuation">,</span> MapboxOverlayProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@deck.gl/mapbox/typed"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Map<span class="token punctuation">,</span> <span class="token punctuation">{</span> NavigationControl<span class="token punctuation">,</span> useControl<span class="token punctuation">,</span> MapRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react-map-gl"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> maplibregl <span class="token keyword">from</span> <span class="token string">"maplibre-gl"</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> mapStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../mapHelpers"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRef<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>

<span class="token comment">// CESIUM 데이터로 변경해주세요</span>
<span class="token keyword">const</span> <span class="token constant">CESIUM_CONFIG</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">assetId</span><span class="token operator">:</span> <span class="token number">1691493</span><span class="token punctuation">,</span>
  <span class="token literal-property property">tilesetUrl</span><span class="token operator">:</span> <span class="token string">"https://assets.ion.cesium.com/1691493/tileset.json"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">token</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_CESIUM</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">INITIAL_VIEW_STATE</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">48.5495</span><span class="token punctuation">,</span>
  <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">27.5969</span><span class="token punctuation">,</span>
  <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">DeckGLOverlay</span><span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">props</span><span class="token operator">:</span> MapboxOverlayProps <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    interleaved<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  <span class="token punctuation">}</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> overlay <span class="token operator">=</span> useControl<span class="token operator">&lt;</span>MapboxOverlay<span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">MapboxOverlay</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  overlay<span class="token punctuation">.</span><span class="token function">setProps</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ChurchMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> mapRef <span class="token operator">=</span> useRef<span class="token operator">&lt;</span>MapRef<span class="token operator">></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> layer3D <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tile3DLayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"layer-3d"</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pointSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token constant">CESIUM_CONFIG</span><span class="token punctuation">.</span>tilesetUrl<span class="token punctuation">,</span>
    <span class="token literal-property property">loader</span><span class="token operator">:</span> CesiumIonLoader<span class="token punctuation">,</span>
    <span class="token literal-property property">loadOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">"cesium-ion"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">accessToken</span><span class="token operator">:</span> <span class="token constant">CESIUM_CONFIG</span><span class="token punctuation">.</span>token<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">onTilesetLoad</span><span class="token punctuation">(</span><span class="token parameter">tile</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> cartographicCenter <span class="token punctuation">}</span> <span class="token operator">=</span> tile<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cartographicCenter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mapRef<span class="token punctuation">.</span>current<span class="token operator">?.</span><span class="token function">flyTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span>cartographicCenter<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cartographicCenter<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token literal-property property">zoom</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
          <span class="token literal-property property">bearing</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">80</span><span class="token punctuation">,</span>
          <span class="token literal-property property">pitch</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Map
      mapLib<span class="token operator">=</span><span class="token punctuation">{</span>maplibregl<span class="token punctuation">}</span>
      mapStyle<span class="token operator">=</span><span class="token punctuation">{</span>mapStyle<span class="token punctuation">}</span>
      initialViewState<span class="token operator">=</span><span class="token punctuation">{</span><span class="token constant">INITIAL_VIEW_STATE</span><span class="token punctuation">}</span>
      style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">"100vw"</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">"100vh"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
      ref<span class="token operator">=</span><span class="token punctuation">{</span>mapRef<span class="token punctuation">}</span>
    <span class="token operator">></span>
      <span class="token operator">&lt;</span>DeckGLOverlay layers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>layer3D<span class="token punctuation">]</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>NavigationControl <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Map<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>모델이 로드되기까지 시간이 걸리므로 로딩 지시기를 추가했어요.</p>
<img src="@source/docs/Nextjs/2024-04-05-AnOpenSourcePhotogrammetryPipeline/img/AnOpenSourcePhotogrammetryPipeline_4.png" />
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
<p>이상입니다, 모두 여러분. 읽어 주셔서 감사합니다.</p>
</div></template>
