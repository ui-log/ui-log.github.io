<template><div><p>내 수업 프로젝트에서 VSCode와 유사한 코드 편집기를 디자인하고 있던 중, 편집기의 우측 상단에 실행 및 디버그 버튼을 어떻게 표시할지에 문제가 발생했어요.</p>
<p>구글에서 몇 가지 Q&amp;A를 찾아보고 해결 방법을 알아내게 되었어요. Q&amp;A의 링크는 이 글 하단에 있어요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"parent"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"relative h-screen w-screen"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"child-bottom"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"h-full w-full bg-red-100 hover:bg-red-500"</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"child-top"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"absolute t-0 left-0 w-16 h-full bg-green-100 hover:bg-green-500"</span><span class="token operator">/</span><span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>하나의 부모 div가 바깥에 있어요. 부모 div 안에는 두 개의 자식이 있어요: 아래쪽 자식과 위쪽 자식이에요.</p>
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
<p>부모 div에는 &quot;relative&quot;를 클래스에 넣어주세요.</p>
<p>상위 자식 div에는 &quot;absolute&quot;를 클래스에 넣어주세요. 그리고 위치(&quot;t-0&quot;와 &quot;left-0&quot;)도 할당되어야 합니다.</p>
<p><img src="@source/docs/Tech/2024-04-19-TailwindCSSHowtooverlapadivonthetopofanotherdiv/img/TailwindCSSHowtooverlapadivonthetopofanotherdiv_0.png" alt="이미지"></p>
<p>예제 코드는 Tailwind Play에서 확인할 수 있습니다.</p>
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
<p>유용한 링크:</p>
<p>Tailwind CSS를 사용하여 다른 div 위에 div 배치하기 - 스택 오버플로우</p>
<p>Tailwind CSS로 div를 겹치는 방법 - 스택 오버플로우</p>
<p>또한 이 이야기는 내 블로그에서도 찾아볼 수 있어요:</p>
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
<p>TailwindCSS: 다른 div 위에 div를 겹쳐 놓는 방법이 있나요? (xavieryuhanliu.com)</p>
</div></template>
