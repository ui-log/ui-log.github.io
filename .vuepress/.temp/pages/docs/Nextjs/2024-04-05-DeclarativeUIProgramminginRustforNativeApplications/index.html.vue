<template><div><p><img src="@source/docs/Nextjs/2024-04-05-DeclarativeUIProgramminginRustforNativeApplications/img/DeclarativeUIProgramminginRustforNativeApplications_0.png" alt="image"></p>
<p>지난 몇 주 동안 Rust를 배우는 데 시간을 투자했습니다. Rust가 고성능 응용 프로그램을 구축하는 데 가지는 잠재력과 동시에 고수준 추상화에 매료되었습니다. 웹과 React 세계에서 왔기 때문에 Rust의 UI 프로그래밍 측면의 가능성을 탐험하기로 결정했습니다. 이 탐구의 결과물은 React에서 영감을 받은 실험적인 프레임워크인 Appy입니다. 이 프레임워크는 Rust의 성능 능력을 활용하여 OpenGL을 사용해 컴포넌트를 직접 렌더링합니다.</p>
<p>이 프레임워크는 여전히 초기 단계에 있으며 실험으로 이해해야 합니다. 그러나 지금까지 배운 것을 공유하고 Rust가 UI 프로그래밍을 위한 가능성에 대한 대화를 시작하는 데 흥분을 느낍니다.</p>
<p>Appy는 Rust, RSX, OpenGL 및 Simple DirectMedia Layer (SDL) 라이브러리에 의존하여 그래픽을 렌더링합니다. SDL은 크로스 플랫폼 기능을 제공하므로 Appy로 구축된 응용 프로그램은 여러 플랫폼에 배포될 수 있습니다. 그러나 현재 Android 및 데스크톱 버전의 배포 툴만 완전히 운영 중입니다. 그렇다고 해도 iOS 또는 wasm 도구 체인을 추가하는 것은 간단한 프로세스여야 합니다.</p>
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
<h2 id="안녕-세상아" tabindex="-1"><a class="header-anchor" href="#안녕-세상아" aria-hidden="true">#</a> 안녕, 세상아!</h2>
<p>리액트에 익숙하다면 Appy의 구문을 알아볼 수 있을 겁니다. 이를 통해 HTML 또는 XML 같은 코드를 작성할 수 있습니다. 다음은 &quot;Hello World&quot; 애플리케이션입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>use appy<span class="token operator">:</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

#<span class="token punctuation">[</span>main_window<span class="token punctuation">]</span>
pub fn <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span> Elements <span class="token punctuation">{</span>
    apx<span class="token operator">!</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>bg col<span class="token operator">=</span><span class="token number">0x800000</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>text text<span class="token operator">=</span><span class="token string">"Hello World"</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span> align<span class="token operator">=</span>Align<span class="token operator">:</span><span class="token operator">:</span>Center<span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그러나 리액트와 달리, Appy는 UI 업데이트를 관리하기 위해 가상 DOM을 사용하지 않습니다. 대신 Appy는 OpenGL를 사용하여 구성 요소를 직접 렌더링합니다. 이 접근 방식은 DOM이나 그를 업데이트하는 필요가 없어지므로 전통적인 UI 프레임워크보다 빠르고 효율적인 성능 이점을 제공하는 보다 가벼우며 빠르며 효율적인 프레임워크를 선사합니다.</p>
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
<h2 id="훅" tabindex="-1"><a class="header-anchor" href="#훅" aria-hidden="true">#</a> 훅</h2>
<p>Appy에서는 React 훅의 개념이 여전히 존재합니다. 훅은 클래스 컴포넌트를 사용하지 않고 함수형 컴포넌트에서 상태 및 기타 React 기능을 사용하는 방법입니다. Appy에서는 Rust 클로저를 사용한 유사한 접근 방식을 사용합니다.</p>
<p>예를 들어, 사용자 입력에 기반하여 상태를 업데이트해야 하는 컴포넌트가 있다고 가정해보겠습니다. 업데이트를 처리하는 Rust 클로저를 만들고 해당 클로저를 컴포넌트에 속성으로 전달할 수 있습니다. 사용자 입력이 발생하면 클로저가 호출되어 컴포넌트의 상태가 업데이트됩니다. 예를 들면:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>use appy<span class="token operator">:</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token operator">*</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

#<span class="token punctuation">[</span>main_window<span class="token punctuation">]</span>
pub fn <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span>Elements <span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">(</span>v<span class="token punctuation">,</span>set_v<span class="token punctuation">)</span><span class="token operator">=</span><span class="token function">use_state</span><span class="token punctuation">(</span><span class="token operator">||</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> on_button_click<span class="token operator">=</span>cb_with_clone<span class="token operator">!</span><span class="token punctuation">(</span><span class="token punctuation">[</span>v<span class="token punctuation">,</span>set_v<span class="token punctuation">]</span><span class="token punctuation">,</span>move<span class="token operator">||</span><span class="token punctuation">{</span>
        <span class="token function">set_v</span><span class="token punctuation">(</span><span class="token operator">*</span>v<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> s<span class="token operator">=</span>format<span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">"Hello: {}"</span><span class="token punctuation">,</span><span class="token operator">*</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>

    apx<span class="token operator">!</span><span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>blk top<span class="token operator">=</span><span class="token function">Pc</span><span class="token punctuation">(</span><span class="token number">25.0</span><span class="token punctuation">)</span> height<span class="token operator">=</span><span class="token function">Pc</span><span class="token punctuation">(</span><span class="token number">25.0</span><span class="token punctuation">)</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>text text<span class="token operator">=</span>s<span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span> align<span class="token operator">=</span>Align<span class="token operator">:</span><span class="token operator">:</span>Center size<span class="token operator">=</span><span class="token function">Pc</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>blk<span class="token operator">></span>
        <span class="token operator">&lt;</span>blk top<span class="token operator">=</span><span class="token function">Pc</span><span class="token punctuation">(</span><span class="token number">50.0</span><span class="token punctuation">)</span> height<span class="token operator">=</span><span class="token function">Pc</span><span class="token punctuation">(</span><span class="token number">20.0</span><span class="token punctuation">)</span> width<span class="token operator">=</span><span class="token function">Pc</span><span class="token punctuation">(</span><span class="token number">25.0</span><span class="token punctuation">)</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>bg col<span class="token operator">=</span><span class="token number">0x808080</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>text text<span class="token operator">=</span><span class="token string">"+1"</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span> align<span class="token operator">=</span>Align<span class="token operator">:</span><span class="token operator">:</span>Center size<span class="token operator">=</span><span class="token function">Pc</span><span class="token punctuation">(</span><span class="token number">100.0</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>interaction on_click<span class="token operator">=</span>on_button_click<span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>blk<span class="token operator">></span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="배포" tabindex="-1"><a class="header-anchor" href="#배포" aria-hidden="true">#</a> 배포</h2>
<p>실험의 일환으로 배포 도구도 만들었어요. 안드로이드에 Appy 앱을 배포하는 것은 하나의 명령어를 실행하는 간단한 프로세스에요. 온라인 튜토리얼을 참고하여 SDL을 안드로이드에서 사용하는 방법을 배웠어요. 파일을 번갈아가며 복사하고 Android Studio를 열어 프로젝트를 빌드하는 여러 단계를 거치면서 꽤나 많은 시간이 소요되었어요. 나는 이 프로세스를 자동화하여 프로젝트를 시작할 때 겪는 장벽을 줄이고 더 효율적으로 만들었어요.</p>
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h2>
<p>Appy의 코드는 GitHub에서 확인할 수 있고, 몇 가지 예제도 제공됩니다. 그 중 하나는 간단한 계산기이며, 이 프레임워크를 사용하는 데 어떤 느낌인지 알아보기 위해 만들었어요.</p>
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
<p>Appy를 사용하는 작업 흐름을 매우 즐겁게 느꼈습니다. 함수형 스타일로 코드를 작성할 수 있으면서도 가상 DOM을 다룰 필요 없이 네이티브 성능을 얻을 수 있다는 것은 상쾌했습니다. Rust 클로저를 사용해 상태 업데이트 및 기타 이벤트를 처리하는 것이 자연스럽고 직관적으로 느껴졌어요.</p>
<p>Appy가 여전히 실험 단계에 있지만, 저는 Rust 개발자를 위한 크로스 플랫폼 UI 프레임워크로 잠재력이 있다고 생각해요. 비즈니스 및 생산성 앱에 SDL 및 OpenGL을 활용할 수 있는 능력은 성능과 개발자 생산성 측면에서 게임 체인저가 될 수 있을 거라고 생각해요.</p>
<p>Appy 작업을 계속 진행하고 Rust에서 선언적 UI 프로그래밍의 가능성을 탐색하는 것에 흥분합니다. 시도해보거나 기여하고 싶다면 GitHub에서 코드를 확인하고 대화에 참여해 주세요.</p>
<p>여기까지 오신 분이라면, 제가 현재 흥미로운 프로젝트에 기여할 수 있는 직업 기회를 찾고 있음을 언급하고 싶습니다. 혹시 Appy를 활용하고 발전시킬 수 있는 프로젝트가 있다면? 아니면 다른 흥미로운 것이라도.</p>
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
<p>r/rust와 Rust 포럼에서 토론해보세요.</p>
<h2 id="_2023년-4월-8일-업데이트" tabindex="-1"><a class="header-anchor" href="#_2023년-4월-8일-업데이트" aria-hidden="true">#</a> 2023년 4월 8일 업데이트</h2>
<p>와우, 좋은 응답 감사합니다! 이 프로젝트를 계속 진행하고 어떤 결론에 이를지 알 수 없겠지만 일단 계속해서 작업할 예정입니다. 제가 buymeacoffee.com에 페이지를 만들었는데, 작업이 진행됨에 따라 업데이트를 게시할 예정입니다. 거기서 첫 주간 업데이트도 올렸어요.</p>
<h2 id="참고-자료-및-링크" tabindex="-1"><a class="header-anchor" href="#참고-자료-및-링크" aria-hidden="true">#</a> 참고 자료 및 링크</h2>
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
<li>깃허브에 있는 소스 코드를 확인해보세요. 몇 가지 예제와 빌드 방법에 대한 설명이 포함되어 있어요.</li>
<li>Rust와 SDL을 사용하여 안드로이드 앱을 빌드하는 튜토리얼이 있어요. 제 배포 도구가 이 프로세스를 자동화해줘요.</li>
<li>Yew는 React처럼 브라우저의 DOM으로 렌더링하는 Rust 프레임워크예요. RSX도 사용해요.</li>
<li>Xilem과 Druid는 Rust용 반응형 GUI 프레임워크이지만 RSX, SDL 및 OpenGL과 다른 기술을 사용해요.</li>
</ul>
</div></template>
