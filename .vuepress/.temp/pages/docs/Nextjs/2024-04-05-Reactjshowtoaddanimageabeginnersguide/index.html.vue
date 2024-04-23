<template><div><p>리액트 JS에서 이미지를 추가하고 스타일을 지정하는 초보자를 위한 완벽 가이드입니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Reactjshowtoaddanimageabeginnersguide/img/Reactjshowtoaddanimageabeginnersguide_0.png" alt="이미지"></p>
<ul>
<li>이미지 추가하는 방법들</li>
<li>이미지 스타일링</li>
<li>예시 코드</li>
</ul>
<h1 id="이미지-추가" tabindex="-1"><a class="header-anchor" href="#이미지-추가" aria-hidden="true">#</a> 이미지 추가</h1>
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
<p>리액트에서 이미지를 삽입하는 여러 가지 방법이 있어요.</p>
<ul>
<li>이미지 태그 사용하기</li>
</ul>
<p><code v-pre>img/</code> 태그를 사용하면 두 가지 값을 제공해야 해요:</p>
<p>&quot;src&quot; (소스): 이미지의 URL이나 경로.</p>
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
<p>“alt” (alternate): 이미지를 사용할 수 없는 경우 대체 텍스트입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://reactjs.org/logo-og.png"</span> alt<span class="token operator">=</span><span class="token string">"React Image"</span> <span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>배경 이미지 설정</li>
</ul>
<p>CSS를 사용하여 요소의 배경을 설정할 수 있습니다. 이는 이미지 위에 콘텐츠를 표시하고 싶을 때 가장 유용합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>app <span class="token punctuation">{</span>
    background<span class="token operator">-</span>image<span class="token operator">:</span> <span class="token function">url</span><span class="token punctuation">(</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>reactjs<span class="token punctuation">.</span>org<span class="token operator">/</span>logo<span class="token operator">-</span>og<span class="token punctuation">.</span>png<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="컴퓨터에서-이미지-추가하기" tabindex="-1"><a class="header-anchor" href="#컴퓨터에서-이미지-추가하기" aria-hidden="true">#</a> 컴퓨터에서 이미지 추가하기</h1>
<h2 id="태그를-사용" tabindex="-1"><a class="header-anchor" href="#태그를-사용" aria-hidden="true">#</a> <img/> 태그를 사용</h2>
<p>이미지를 프로젝트로 드래그하여 원하는 컴포넌트로 가져옵니다. 그 후에 가져온 이름을 source 속성에 삽입할 수 있습니다.</p>
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
<h2 id="로컬-배경-이미지-삽입하기" tabindex="-1"><a class="header-anchor" href="#로컬-배경-이미지-삽입하기" aria-hidden="true">#</a> 로컬 배경 이미지 삽입하기</h2>
<p>이전과 마찬가지로 이미지를 가져올 것입니다. 그런 다음 CSS URL(…)을 사용하거나 아래에 표시된 것처럼 인라인 스타일링을 사용하여 이미지를 삽입할 수 있습니다.</p>
<h2 id="코드-구조화" tabindex="-1"><a class="header-anchor" href="#코드-구조화" aria-hidden="true">#</a> 코드 구조화</h2>
<p>프로젝트에서 이미지를 구조화하는 올바른 방법은 이미지를 &quot;이미지&quot; 폴더에 추가하는 것입니다. 이미지 이외의 자산을 사용한다면 모든 자산 폴더를 하나로 추가하고 싶을 수 있습니다.</p>
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
<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
</head>
<body>
<div>
  <h1>Welcome to my website</h1>
  <p>This is a simple HTML document.</p>
</div>
</body>
</html>
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
<li>너비와/높이: 요소의 너비와 높이 설정</li>
<li>테두리 반지름: 요소의 가장자리를 둥글게 만들기</li>
<li>필터: 필터에 대해 더 알아보기...</li>
<li>불투명도: 요소의 불투명도를 설명하는 십진수 값</li>
</ul>
<p><code v-pre>img/</code> 특정:</p>
<ul>
<li>수직 정렬: 이미지를 수직으로 맞추기</li>
</ul>
<p>배경 이미지 특정:</p>
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
<li>배경 이미지: 파일 경로 또는 이미지 URL</li>
<li>배경 반복: 이미지 반복 설정을 축별 또는 양 축에 대해 설정</li>
<li>배경 크기: 이미지의 크기 설정</li>
<li>배경 위치: 이미지의 배경 내 위치 설정</li>
</ul>
</div></template>
