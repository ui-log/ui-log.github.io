<template><div><p><img src="@source/docs/Tech/2024-03-29-DemystifyingURLParametersAGuideforDevelopers/img/DemystifyingURLParametersAGuideforDevelopers_0.png" alt="이미지"></p>
<p>안녕하세요, 개발자 친구들! 코딩 벨트를 조이세요! 왜냐하면 우리는 URL 파라미터의 야생과 재미있는 세계로 여행을 떠날 것이기 때문이에요.</p>
<p>웹 주소 끝에 걸려 있는 이 작은 물음표 모양의 야만인들은 앰퍼샌드를 마실 때 쉬는 것처럼 보이지만, 웹 페이지를 수정하고 추적하며 즐겁게 만드는 능력을 갖고 있어요.</p>
<h1 id="url-파라미터란-무엇인가요" tabindex="-1"><a class="header-anchor" href="#url-파라미터란-무엇인가요" aria-hidden="true">#</a> URL 파라미터란 무엇인가요?</h1>
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
<p>URL 매개변수란 무엇인가요? 웹 브라우저와 서버 간의 비밀 약속이라고 생각해보세요.</p>
<p>그들은 코드 커리에 향신료처럼, 웹 페이지에 맛과 다양성을 더해주는 것처럼 작용합니다.</p>
<h2 id="액티브-대-패시브-매개변수의-대결" tabindex="-1"><a class="header-anchor" href="#액티브-대-패시브-매개변수의-대결" aria-hidden="true">#</a> 액티브 대 패시브: 매개변수의 대결</h2>
<p>먼저, 이 나쁜 녀석들을 분류해볼까요. 두 팀이 있습니다: 액티브와 패시브.</p>
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
<p>활성 요소들은 문제를 일으키는 사람들이에요. 끊임없이 변화를 가져오고, 한편으로는 소란을 피우지 않는 차분한 사람들인 패시브가 있어요.</p>
<h2 id="활성-매개변수-웹-물약-휘젓기" tabindex="-1"><a class="header-anchor" href="#활성-매개변수-웹-물약-휘젓기" aria-hidden="true">#</a> 활성 매개변수: 웹 물약 휘젓기</h2>
<p>활성 매개변수는 파티의 생각 없는 사람들이죠. 다양한 방식으로 페이지 콘텐츠를 수정해요. 아래 예시를 살펴보세요:</p>
<p>필터:
이들은 일부 콘텐츠를 제외하고 좋은 부분만 남겨요. 디지털 옷장을 정리하는 것과 같아요.</p>
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
<li>예시: ?color=sparkly</li>
</ul>
<p>정렬:
페이지의 내용을 재배치할 수 있을까요? 와! 정렬 매개변수는 정확히 그 역할을 합니다.</p>
<ul>
<li>예시: ?sort=highest_priced</li>
</ul>
<p>페이지네이트:
내용이 너무 길어질 때 페이지네이션이 등장하여 이를 작은 조각으로 나누어줍니다.</p>
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
<li>예시: ?page=42</li>
</ul>
<p>번역:
다양한 언어를 구사하세요? 웹 페이지에 번역 매개변수를 사용하여 대화를 나눠보세요.</p>
<ul>
<li>예시: ?lang=piglatin</li>
</ul>
<p>검색:
인터넷에서 보물을 찾고 계신가요? 상품을 발굴하기 위해 검색 매개변수를 활용하세요.</p>
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
<li>예시: ?query=treasure</li>
</ul>
<h2 id="수동-매개변수-웹의-벽화-꽃" tabindex="-1"><a class="header-anchor" href="#수동-매개변수-웹의-벽화-꽃" aria-hidden="true">#</a> 수동 매개변수: 웹의 벽화 꽃</h2>
<p>자, 이제 Passive들을 만나봅시다. 이 성격 내향적인 사람들은 콘텐츠를 변경하지는 않지만 그림자에서 사물을 주시하고 있습니다.</p>
<p>제휴 ID:
판매량이 어디서 왔는지 추적합니다.</p>
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
<li>예시: ?aff_id=secretsource</li>
</ul>
<p>광고 태그:
당신의 광고 캠페인을 계속 주시기 바랍니다.</p>
<ul>
<li>예시: ?utm_source=awesome_ad</li>
</ul>
<p>세션 ID:
귀하의 사이트를 빠져나가지 못하는 그 사용자를 식별합니다.</p>
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
<li>예시: ?session=12345</li>
</ul>
<p>동영상 타임스탬프:
동영상의 재밌는 부분으로 빠르게 이동하기</p>
<ul>
<li>예시: ?t=42</li>
</ul>
<h1 id="seo와-url-매개변수-딜레마-드라마가-펼쳐진다" tabindex="-1"><a class="header-anchor" href="#seo와-url-매개변수-딜레마-드라마가-펼쳐진다" aria-hidden="true">#</a> SEO와 URL 매개변수 딜레마: 드라마가 펼쳐진다</h1>
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
<p>웹 세계의 드라마 퀸인 SEO. URL 매개변수가 SEO 전문가들에게 오싹한 기색을 띄우기도 해요.</p>
<p>수동적인 매개변수는 중복 콘텐츠 악몽을 초래할 수 있어요. 그건 아무도 원치 않는 일이죠. 이를 방지하기 위해 정주옥매 태그를 설정해야 해요.</p>
<p>활성 매개변수에 대해서는, 새로운 페이지를 만들거나 아니면 완전히 새로운 페이지가 될 수도 있어요. 매개변수가 무엇을 하는지 주의 깊게 지켜보세요!</p>
<h2 id="그런-개발자가-되지-마세요-내부-링크에서-수동적인-매개변수-피하기" tabindex="-1"><a class="header-anchor" href="#그런-개발자가-되지-마세요-내부-링크에서-수동적인-매개변수-피하기" aria-hidden="true">#</a> 그런 개발자가 되지 마세요: 내부 링크에서 수동적인 매개변수 피하기</h2>
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
<p>그냥 알려 드릴게요! 내부 링크에 수동 매개변수를 사용하는 건 저번 시즌의 유행이에요.</p>
<p>현재의 분석 시스템은 URL을 지저분하게하지 않고도 추적하는 더 나은 방법을 갖고 있답니다. 그래요, 변경해 보세요!</p>
<h2 id="미로를-탐험하며-크롤링과-무한한-경로" tabindex="-1"><a class="header-anchor" href="#미로를-탐험하며-크롤링과-무한한-경로" aria-hidden="true">#</a> 미로를 탐험하며: 크롤링과 무한한 경로</h2>
<p>매개변수가 있는 무한한 URL 경로는 검색 엔진에게 미로와 같아요.</p>
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
<p>구글이 웹 크롤링 모험을 떠낼 때, 그것은 경험이 풍부한 탐정처럼 움직입니다. 그것은 끝이 없는 경로와 반복되는 패턴을 잘 찾는 능력이 있죠.</p>
<p>그렇게 되면, 구글은 행동에 옮겨서, 도움이 되지 않을 것으로 여기거나 단순히 반복적인 URL들의 크롤링을 멈춥니다.</p>
<p>모든 것을 깔끔하게 유지하고, 끝없는 조합을 피하세요. SEMRush의 Link Analyzer나 Ahrefs의 Depth 보고서와 같은 도구를 사용하여 잠재적인 문제를 확인하세요.</p>
<h2 id="국제화-매개-변수의-놀이터-사실은-아닙니다" tabindex="-1"><a class="header-anchor" href="#국제화-매개-변수의-놀이터-사실은-아닙니다" aria-hidden="true">#</a> 국제화: 매개 변수의 놀이터? 사실은 아닙니다</h2>
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
<p>국제 웹 사이트들은 때로 파라미터를 사용하지만, 구글의 길이 아닙니다.</p>
<p>어떻게 생각해도 복잡하죠, 하지만 보다 구글스러운 보다 깔끔한 방법들(물론 완벽한 방법은 아닙니다)이 있습니다. 그리고 항상 hreflang 태그를 사용하세요.</p>
<p>예시:</p>
<ul>
<li>국가별 도메인</li>
<li>국가별 서브도메인 또는 서브디렉토리</li>
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
<h2 id="전자-상거래-매개변수-미친듯이-많아요" tabindex="-1"><a class="header-anchor" href="#전자-상거래-매개변수-미친듯이-많아요" aria-hidden="true">#</a> 전자 상거래: 매개변수 미친듯이 많아요</h2>
<p>전자 상거래 사이트는 매개변수를 좋아해요. 이를 추적부터 다양한 탐색 기능까지 사용해요.</p>
<p>간단히 설명하자면:</p>
<ul>
<li>정확한 캐노니컬 태그 설정하기</li>
<li>적절한 페이지네이션 구현하기</li>
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
<h2 id="javascript과-fragment-얽힌-관계" tabindex="-1"><a class="header-anchor" href="#javascript과-fragment-얽힌-관계" aria-hidden="true">#</a> JavaScript과 Fragment: 얽힌 관계</h2>
<p>어떤 사람들은 JavaScript에서 수동 매개 변수로 &quot;?&quot; 대신 &quot;#&quot;을 사용합니다. 이는 사각형 맥대가 둥근 구멍에 맞추려는 듯한 느낌입니다.</p>
<p>문제는 서버에서 # 기호 뒤에 오는 것들을 무시하는 경향이 있고, 많은 시스템이 이를 이해하는 데 도움이 필요하다는 것입니다.</p>
<p>더군다나, 그 신뢰할 만한 # 기호는 이미 특정 페이지 부분으로 부드럽게 스크롤하는 데 필요한 역할을 하고 있습니다. 이는 클라이언트 쪽의 작업이며, JavaScript 전문가들은 종종 그것을 &quot;라우팅&quot; 역할로 활용하여 사용자를 새로운 콘텐츠가 있는 페이지로 안내합니다.</p>
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
<p>그것은 항상 좋은 생각은 아니지만 때로는 필요할 때가 있어요.</p>
<h2 id="감사-파라미터를-위한-셜록-홈즈" tabindex="-1"><a class="header-anchor" href="#감사-파라미터를-위한-셜록-홈즈" aria-hidden="true">#</a> 감사: 파라미터를 위한 셜록 홈즈</h2>
<p>사이트에 돌아다니는 파라미터들이 무엇인지 알고 싶나요?</p>
<p>Screaming Frog, SEMRush, Ahrefs와 같은 도구를 사용하여 그것들을 추적하고 무엇을 하는지 확인해보세요.</p>
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
<h2 id="파라미터-제어-보스처럼-책임지기" tabindex="-1"><a class="header-anchor" href="#파라미터-제어-보스처럼-책임지기" aria-hidden="true">#</a> 파라미터 제어: 보스처럼 책임지기</h2>
<p>구글의 옛 URL 파라미터 도구를 기억하시나요? 그 도구는 없어졌지만 여전히 선택할 수 있는 옵션이 있습니다:</p>
<ul>
<li>캐노니컬 태그
시그널을 통합하는 데 사용하세요.</li>
<li>Noindex
인덱스에서 페이지를 제거하지만 현명하게 사용하세요.</li>
<li>Robots.txt에서 차단
정상적인 검색에서 페이지를 차단하지만 시그널을 통합하지는 않습니다.</li>
<li>사이트 감사의 URL 파라미터 제거
파라미터를 무시하고 크롤을 깨끗하게 유지하세요.</li>
</ul>
<h1 id="마무리-url-파라미터-모험" tabindex="-1"><a class="header-anchor" href="#마무리-url-파라미터-모험" aria-hidden="true">#</a> 마무리: URL 파라미터 모험</h1>
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
<p>URL 매개변수는 할머니의 유명한 비밀 레시피의 비밀 재료와 같습니다. 현명하게 활용하면 웹 페이지에 맛을 더해줄 수 있어요.</p>
<p>잘못 사용하면 코딩 및 SEO 재앙을 초래할 수 있습니다. 뭔가 잘못되면 개발자들이 가장 먼저 알게 되어 많은 압박을 받게 될 거예요.</p>
<p>이 간단한 지침을 따르면 압박이 줄어들고 정리하는 데 소비하는 시간을 아낄 수 있어요.</p>
<p>그러니 동료 개발자 여러분, 조심해서 매개변수화해 보세요!</p>
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
