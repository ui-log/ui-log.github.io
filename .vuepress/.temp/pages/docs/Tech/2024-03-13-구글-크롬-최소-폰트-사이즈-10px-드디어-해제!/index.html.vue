<template><div><h1 id="구글-크롬-최소-폰트-사이즈-10px-제한-풀리다" tabindex="-1"><a class="header-anchor" href="#구글-크롬-최소-폰트-사이즈-10px-제한-풀리다" aria-hidden="true">#</a> 구글 크롬 최소 폰트 사이즈 10px 제한 풀리다</h1>
<p>구글 크롬 브라우저에서는 한글을 사용하면 기본적으로 최소 폰트 사이즈가 10px로 지정이 되어있었습니다.
이는 구글에서 접근성을 위해서 최소 폰트 사이즈를 보장한 것인데요.
구글의 이런 호의 덕분에(?) 10px이하의 폰트를 지원하기 위해서는 <code v-pre>transform: scale()</code>, 혹은 <code v-pre>zoom()</code>을 사용해서 작업해야했는데요.</p>
<p>이 최소 폰트 사이즈 제한이 이제 해제 되었습니다.</p>
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
<p><a href="https://chromestatus.com/feature/5150487577362432" target="_blank" rel="noopener noreferrer">문서<ExternalLinkIcon/></a></p>
<blockquote>
<p>상호 운용성과 접근성을 향상시키기 위해 7개 언어(아랍어, 페르시아어, 일본어, 한국어, 태국어, 중국어 간체 및 번체)의 &quot;최소 글꼴 크기&quot;에 대한 기본 설정을 기본적으로 꺼지도록 변경합니다. 이 변경 이전에는 7개 언어를 제외한 모든 언어에 대해 이 설정이 기본적으로 꺼져 있습니다. 이러한 변경으로 인해 이러한 언어가 다른 언어와 일관성을 갖게 되었습니다.참고로 이는 &quot;최소 글꼴 크기&quot; 기능 자체를 변경하는 것이 아닙니다. 접근성, 가독성에 있어서는 아무런 변화 없이 사용 가능합니다.</p>
</blockquote>
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
<p>위 문서를 살펴보면, 최소 글꼴 크기 기능을 7개 언어에서 기본적으로 켜져있도록 되어있었는데 이걸 꺼줬다고 합니다.</p>
<p>이제 작은 배지 디자인들도 <code v-pre>transform: scale()</code>, <code v-pre>zoom()</code> 같은 편법을 사용하지 않고 작업할 수 있겠네요.</p>
</div></template>
