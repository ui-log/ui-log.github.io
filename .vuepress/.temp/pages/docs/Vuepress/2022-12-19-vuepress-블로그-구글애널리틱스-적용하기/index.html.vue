<template><div><h1 id="vuepress-블로그-구글애널리틱스-적용하기" tabindex="-1"><a class="header-anchor" href="#vuepress-블로그-구글애널리틱스-적용하기" aria-hidden="true">#</a> vuepress 블로그 구글애널리틱스 적용하기</h1>
<div class="custom-container tip"><p class="custom-container-title">💡이 포스팅을 읽으면</p>
<p>vuepress 블로그에 구글애널리틱스를 적용할 수 있습니다.</p>
</div>
<p>구글애널리틱스를 사용하면 블로그, 쇼핑몰과 같은 사이트의 사용자에 대한 방문, 액션 데이터를 분석해주는데요.
사이트를 더 키워나가고싶은 분들이라면 구글애널리틱스를 사이트에 붙혀서 통계를 통해 마케팅에 이용하고 있습니다.</p>
<p>구글 애널리틱스가 <strong>GA4 에서 GA5로 업데이트되면서 등록하는 방법이 달라졌는데요.</strong>
달라진 내용에 대해서 정리해보도록 하겠습니다.</p>
<h2 id="_1-설정-추가" tabindex="-1"><a class="header-anchor" href="#_1-설정-추가" aria-hidden="true">#</a> 1. 설정 추가</h2>
<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
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
<p>먼저 구글 애널리틱스 사이트로 가서 설정을 추가해주어야합니다.</p>
<p>아래 사진의 왼쪽아래에 있는 관리 버튼을 눌러줍니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/2.png"  />
<p>그 다음에 &quot;+ 속성 만들기&quot; 버튼을 눌러줍니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/3.png"  />
<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
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
<p>원하시는 속석이름과 시간대 통화를 지정해줍니다.
저는 대한민국에 통화는 달러를 선택했습니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/4.png"  />
<p>카테고리와 비즈니스 규모 사용 계획을 선택해줍니다.
이 부분은 큰 의미는 없으니 저처럼 지정해주셔도 상관 없습니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/5.png"  />
<h2 id="_2-사이트-적용" tabindex="-1"><a class="header-anchor" href="#_2-사이트-적용" aria-hidden="true">#</a> 2. 사이트 적용</h2>
<p>속성을 만들었다면 사이트를 적용해야하는데요. 아래 화면에서 웹을 눌러줍니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/6.png"  />
<p>원하시는 vuepress 블로그 주소를 넣어주시면 됩니다.
사실 vuepress 주소가 아닌 어떤 주소를 넣어주셔도 상관 없습니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/7.png"  />
<p>사이트를 적용하고 나면 아래에서 &quot;태그 안내 보기&quot; 버튼을 클릭해줍니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/8.png"  />
<p>거기서 직접 설치 탭을 선택해주시면아래와 같은 코드가 나오는데요. 이 코드를 vuepress 블로그 저장소 설정에 넣어주어야합니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/9.png"  />
<component is="script" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossorigin="anonymous" async></component>
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
<h2 id="_3-vuepress-설정" tabindex="-1"><a class="header-anchor" href="#_3-vuepress-설정" aria-hidden="true">#</a> 3. vuepress 설정</h2>
<p>vuepress 블로그의 head에 script는 아래와 같이 적용하고 있기 때문에 <strong>위 사진에서 src값과 script 사이에 있는 html을 각각 넣어주시면 됩니다.</strong></p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">"ui-log"</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">"Today I leanred"</span><span class="token punctuation">,</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">"script"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> async<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> src<span class="token operator">:</span> <span class="token string">"src값"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">"script"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"> script태그 사이에 있는 html</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위와 같이 작성하고 블로그를 배포하게 되면 아래처럼 구글 애널리틱스 분석을 확인할 수 있습니다.</p>
<img src="@source/docs/Vuepress/2022-12-19-vuepress-블로그-구글애널리틱스-적용하기/img/10.png"  />
</div></template>
