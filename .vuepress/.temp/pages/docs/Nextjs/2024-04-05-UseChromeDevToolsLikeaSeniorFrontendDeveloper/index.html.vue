<template><div><img src="@source/docs/Nextjs/2024-04-05-UseChromeDevToolsLikeaSeniorFrontendDeveloper/img/UseChromeDevToolsLikeaSeniorFrontendDeveloper_0.png" />
<h1 id="서문" tabindex="-1"><a class="header-anchor" href="#서문" aria-hidden="true">#</a> 서문</h1>
<p>프론트엔드 개발자들에게 가장 가까운 파트너인 Chrome 브라우저에 익숙하시리라고 믿습니다. Chrome을 사용하여 네트워크 요청을 확인하고 웹 페이지 성능을 분석하며 최신 JavaScript 기능을 디버깅할 수 있습니다.</p>
<p>이 외에도, Chrome은 다양한 강력하고 특이한 기능을 제공하는데, 이를 통해 개발 효율을 크게 향상시킬 수 있습니다.</p>
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
<table>
<thead>
<tr>
<th>순서</th>
<th>내용</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.</td>
<td>XHR 요청 재전송</td>
</tr>
<tr>
<td>2.</td>
<td>커뮤니케이션 효율 향상을 위한 디버깅</td>
</tr>
<tr>
<td>3.</td>
<td>백엔드 개발자와의 인터페이스 문제 해결</td>
</tr>
<tr>
<td>4.</td>
<td>도킹 효율성 향상 가능</td>
</tr>
</tbody>
</table>
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
<li>네트워크 패널을 선택하세요</li>
<li>Fetch/XHR을 클릭하세요</li>
<li>다시 전송하고자 하는 요청을 선택하세요</li>
<li>오른쪽 클릭하고 XHR 재전송을 선택하세요</li>
</ul>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*GVUO4O-nE0Rij2hB.gif" alt="이미지"></p>
<h1 id="_2-콘솔에서-빠르게-요청-보내기" tabindex="-1"><a class="header-anchor" href="#_2-콘솔에서-빠르게-요청-보내기" aria-hidden="true">#</a> 2. 콘솔에서 빠르게 요청 보내기</h1>
<p>동일한 요청을 하는 경우 때로는 입력 매개변수를 수정하고 다시 보내야 할 수 있습니다. 이 때 단축키는 무엇인가요?</p>
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
<p>그냥 이 단계들을 따르면 돼요:</p>
<ul>
<li>네트워크 패널을 선택하세요.</li>
<li>Fetch/XHR을 클릭하세요.</li>
<li>다시 전송하고 싶은 요청을 선택하세요.</li>
<li>Fetch 패널로 복사를 선택하세요.</li>
<li>입력 매개변수를 수정하고 다시 전송하세요.</li>
</ul>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*rS0Wg92u5BaOiC0R.gif" alt="이미지"></p>
<h1 id="_3-javascript-변수-복사" tabindex="-1"><a class="header-anchor" href="#_3-javascript-변수-복사" aria-hidden="true">#</a> 3. JavaScript 변수 복사</h1>
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
<p>복잡한 데이터를 클립보드로 복사하는 방법을 알고 계신가요?</p>
<p>진짜 놀라운데요! Chrome 브라우저에서 제공하는 복사 함수를 사용하면 가능합니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*XTo_GM_tePWk8zjH.gif" alt="이미지"></p>
<h2 id="_4-콘솔에서-선택된-dom-요소-가져오기" tabindex="-1"><a class="header-anchor" href="#_4-콘솔에서-선택된-dom-요소-가져오기" aria-hidden="true">#</a> 4. 콘솔에서 선택된 DOM 요소 가져오기</h2>
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
<p>“Elements” 패널을 통해 요소를 선택하면 JavaScript를 통해 너비, 높이, 위치 등 일부 속성을 출력하려면 어떻게 해야 하나요?</p>
<ol>
<li>Elements 패널을 통해 DOM 요소를 선택합니다.</li>
<li>콘솔에서 $0을 사용하여 해당 요소에 액세스합니다.</li>
</ol>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*P8q9HE3fbsoXmZts.gif" alt="image"></p>
<h1 id="_5-전체-크기-스크린샷-캡처하기" tabindex="-1"><a class="header-anchor" href="#_5-전체-크기-스크린샷-캡처하기" aria-hidden="true">#</a> 5. 전체 크기 스크린샷 캡처하기</h1>
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
<p>만약 화면 한 화면을 초과하는 페이지의 스크린샷을 찍고 싶다면 좋은 방법이 있을까요?</p>
<p>강력한 Chrome 브라우저는 이를 쉽게 할 수 있습니다.</p>
<ul>
<li>캡처하고 싶은 페이지의 내용을 준비합니다.</li>
<li>CMD + Shift + P를 눌러 명령어 실행</li>
<li>전체 크기 스크린샷 캡처를 입력하고 Enter 키를 누릅니다.</li>
</ul>
<p>와우, 멋지네요!</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*-8jXl_RMnO7vYi5E.gif" alt="Image 1"></p>
<p>Now there’s a new question. We just want to take a part of the screenshot page. What should we do?</p>
<p>It’s also very easy, just enter “Capture node screenshot” in the third step.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*v-zr3t37PSBdfmQTu-GTmw.gif" alt="Image 2"></p>
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
<h1 id="_6-모든-하위-노드-확장하기" tabindex="-1"><a class="header-anchor" href="#_6-모든-하위-노드-확장하기" aria-hidden="true">#</a> 6. 모든 하위 노드 확장하기</h1>
<p>한 번에 DOM 요소의 모든 하위 노드를 확장하려면 어떻게 해야 할까요? 하나씩이 아닌 모두 한 번에 확장하고 싶어요.</p>
<p>&quot;요소&quot; 패널에서 &quot;Alt + 클릭&quot; 키 조합을 사용하여 모든 하위 노드를 한 번에 확장할 수 있습니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*KliAHGAuG8LjnfTBHwzteA.gif" alt="이미지"></p>
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
<h1 id="_7-마지막-실행의-결과를-참조하기-위해-사용하기" tabindex="-1"><a class="header-anchor" href="#_7-마지막-실행의-결과를-참조하기-위해-사용하기" aria-hidden="true">#</a> 7. 마지막 실행의 결과를 참조하기 위해 “$” 사용하기</h1>
<p>이 장면을 한 번 살펴보자: 우리는 문자열에 대해 다양한 작업을 수행했고, 그런 다음 각 단계의 결과를 알고 싶을 때는 어떻게 해야할까요?</p>
<p>이렇게 할 수도 있습니다</p>
<p><img src="@source/docs/Nextjs/2024-04-05-UseChromeDevToolsLikeaSeniorFrontendDeveloper/img/UseChromeDevToolsLikeaSeniorFrontendDeveloper_8.png" alt="이미지"></p>
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
<p>더 간편한 방법이 있어요:</p>
<p>“$”를 사용하면 매번 복사하지 않고 마지막 작업 결과를 얻을 수 있어요.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-UseChromeDevToolsLikeaSeniorFrontendDeveloper/img/UseChromeDevToolsLikeaSeniorFrontendDeveloper_9.png" alt="이미지"></p>
<h1 id="_8-테마-색상-빠르게-전환하기" tabindex="-1"><a class="header-anchor" href="#_8-테마-색상-빠르게-전환하기" aria-hidden="true">#</a> 8. 테마 색상 빠르게 전환하기</h1>
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
<p>일부 사람들은 Chrome의 흰색 테마를 좋아하고, 다른 사람들은 검정색을 선호합니다. 두 테마 간에 빠르게 전환하기 위해 바로 가기 키를 사용할 수 있어요.</p>
<ul>
<li>cmd + shift + p를 눌러 Command 명령 실행</li>
<li>&quot;Switch to dark theme&quot; 또는 &quot;Switch to light theme&quot;을 입력하여 테마 전환</li>
</ul>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*Z6zycD4mJTWenvbtawnOcw.gif" alt="이미지"></p>
<h2 id="_9-dom-요소를-빠르게-선택할-때-및-를-사용하세요" tabindex="-1"><a class="header-anchor" href="#_9-dom-요소를-빠르게-선택할-때-및-를-사용하세요" aria-hidden="true">#</a> 9. DOM 요소를 빠르게 선택할 때 &quot;$&quot; 및 &quot;$$&quot;를 사용하세요.</h2>
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
<p>현재 페이지의 요소를 선택하려면 대부분 document.querySelector 및 document.querySelectorAll을 사용하는 것이 일반적입니다. 그러나 이것은 너무 길기 때문에 $ 및 $$를 대신 사용할 수 있습니다.</p>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*qFIK_Cb__Dvz_-u1I9Hjjg.gif" alt="image"></p>
<h1 id="_10-콘솔에서-npm-패키지를-설치하려면-i를-사용하세요" tabindex="-1"><a class="header-anchor" href="#_10-콘솔에서-npm-패키지를-설치하려면-i를-사용하세요" aria-hidden="true">#</a> 10. 콘솔에서 npm 패키지를 설치하려면 <code v-pre>$I</code>를 사용하세요</h1>
<p>가끔 dayjs 또는 lodash와 같은 API를 사용하고 싶지만 공식 웹사이트로 이동하여 확인하기 귀찮다면 좋을 것입니다. 콘솔에서 직접 시도해 볼 수 있다면 좋을텐데요.</p>
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
<li>Console Importer 플러그인을 설치해보세요.</li>
<li>$i('name') npm 패키지를 설치하세요.</li>
</ul>
<p><img src="https://miro.medium.com/v2/resize:fit:1400/0*lZxzJfdVl7kkAvKN.gif" alt="image"></p>
<h1 id="_11-조건부-중단점-추가" tabindex="-1"><a class="header-anchor" href="#_11-조건부-중단점-추가" aria-hidden="true">#</a> 11. 조건부 중단점 추가</h1>
<p>다음 코드로 음식 이름이 🍫 인 경우에 중단점이 트리거되길 바랍니다. 어떻게 할 수 있을까요?</p>
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
<p><img src="https://miro.medium.com/v2/resize:fit:1400/1*hhdAUT80OIAgdxGlCcIq3Q.gif" alt="image"></p>
<p>대량의 데이터를 다룰 때 조건부 중단점을 사용하는 것은 개발 작업에 매우 도움이 되며 효율성을 크게 향상시킬 수 있습니다.</p>
<h1 id="마지막으로" tabindex="-1"><a class="header-anchor" href="#마지막으로" aria-hidden="true">#</a> 마지막으로</h1>
<p>읽어 주셔서 감사합니다. 앞으로도 여러분의 팔로우와 높은 품질의 기사를 더 많이 볼 수 있기를 기대합니다.</p>
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
<h1 id="일반어로-표현한-내용" tabindex="-1"><a class="header-anchor" href="#일반어로-표현한-내용" aria-hidden="true">#</a> 일반어로 표현한 내용</h1>
<p>우리 커뮤니티의 일원이 되어 주셔서 감사합니다! 떠나시기 전에:</p>
<ul>
<li>작가를 토끼하고 팔로우해 주세요! 👏</li>
<li>PlainEnglish.io에서 더 많은 콘텐츠를 찾을 수 있어요! 🚀</li>
<li>무료 주간 뉴스레터를 구독해 주세요. 🗞️</li>
<li>트위터(X)를 팔로우하고, 링크드인, 유튜브, 디스코드도 팔로우해 주세요.</li>
</ul>
</div></template>
