<template><div><p><img src="@source/docs/Nextjs/2024-03-29-HowtoscaledatafetchingwithSWR/img/HowtoscaledatafetchingwithSWR_0.png" alt="이미지"></p>
<p>저는 주니어 개발자로 BOOM에 합류했을 때 SWR을 처음 알게 되었습니다.</p>
<p>이전에 애플리케이션을 구축할 때는 단일 컴포넌트의 상태에 데이터를 삽입하는 효과를 생성하는 데 제한을 두었습니다. 나중에 SWR을 시도한 이후에, 이 라이브러리 없이는 일부 문제를 해결하기 어려움을 깨달았습니다. 예를 들어, API 엔드포인트를 호출하는 코드를 재사용하려면 많은 동일한 호출이 발생했습니다. 해결책은 두 가지뿐이었습니다:</p>
<ul>
<li>코드의 복잡성 증가와 라이브러리 학습을 수반하는 redux에 전역 상태를 생성하기</li>
<li>데이터를 모든 다른 컴포넌트의 부모 컴포넌트인 &quot;App&quot; 컴포넌트의 전역 상태에 삽입하고, 그 데이터를 필요로 하는 모든 하위 컴포넌트로 전달하기 위해 props를 전달하기</li>
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
<p>SWR는 데이터를 로드할 때 코드를 깔끔하게 유지하고 높은 속도를 유지하는 유일한 방법이었습니다.</p>
<p>게다가 SWR 라이브러리를 중심으로 한 기능들에 대해 양희 시각을 가졌습니다. 이 기능들을 구현하는 것은 초보자(제게 그때는 그랬습니다)에게 매우 어려울 것으로 생각되었기 때문입니다.</p>
<p>예를 들어, 다른 컴포넌트에서 데이터를 업데이트하려면 한 컴포넌트에서 &quot;mutate&quot; 메서드를 호출하기만 하면되는 것이 매우 편리합니다. 이 점이 다른 컴포넌트에 어렵게 접근할 수 있는 데이터를 업데이트할 때 매우 유용합니다.</p>
<p>그래서 SWR은 제게 일을 가속화하고 코드를 깨끗하게 유지하며, 자체 솔루션 없이도 일을 처리할 수 있는 해결책이었습니다.</p>
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
<p>BOOM에서는, 데이터 가져오기에 대한 최적 기술을 찾기 위해 실험을 거쳤고, 결과적으로 SWR이 우리의 요구에 가장 적합하다고 결정했습니다.</p>
<p>SWR은 Stale-While-Revalidate의 약자로, 외부 REST 리소스에서 데이터를 필요로 하는 UI의 로딩과 업데이트를 가속화하는 데 사용되는 패턴입니다.</p>
<p>SWR은 데이터 캐싱 전략을 의미하며, 서버에서 받은 데이터가 로컬 캐시에 저장되어 있고(Stale), 필요한 경우 다시 유효성을 검사(revalidate)하여 미래에 제공될 캐시에 업데이트됩니다.</p>
<p>브라우저는 리소스를 업데이트해야 하는 시기를 알아야 하며, 이를 위해 서버에서의 HTTP 응답의 ‘Cache-Control’ 헤더에 포함된 데이터를 사용합니다.</p>
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
<p>헤더 안에는 여러 가지 속성이 있습니다. 그 중 두 가지를 살펴보겠습니다.</p>
<p>HTTP 응답에서 리소스에 대한 이 헤더를 반환하는 서버의 예를 들어 설명해보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Cache<span class="token operator">-</span>Control<span class="token operator">:</span> max<span class="token operator">-</span>age<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> stale<span class="token operator">-</span><span class="token keyword">while</span><span class="token operator">-</span>revalidate<span class="token operator">=</span><span class="token number">119</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>브라우저가 데이터를 업데이트해야 할 지 여부를 묻기 전에 몇 시간이 지나면, 세 가지 다른 상황이 발생할 수 있습니다.</p>
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
<li>만일 경과된 시간이 &quot;max-age&quot;보다 작은 경우(10초 전) 로컬 캐시에 저장된 데이터는 여전히 유효하며, 업데이트된 데이터를 받기 위해 새로운 호출을 할 필요가 없습니다.</li>
<li>만일 경과된 시간이 &quot;max-age&quot;보다 크고 &quot;stale-while-revalidate&quot;보다 작은 경우(10초부터 119초 사이) 로컬 캐시에 저장된 데이터는 여전히 유효하며 일시적으로 사용할 수 있습니다. 브라우저는 업데이트된 데이터를 받아 캐시를 업데이트하고 새 데이터를 가능한 빨리 표시하기 위해 서버에 요청해야 합니다.</li>
<li>만일 경과된 시간이 &quot;stale-while-revalidate&quot;보다 큰 경우(119초가 지남) 로컬 캐시에 있는 데이터는 더이상 유효하지 않으므로 폐기되어야 합니다. 브라우저는 업데이트된 데이터를 가져와 캐시에 삽입하고 최종적으로 표시하기 위해 새로운 호출을 해야 합니다.</li>
<li>업데이트된 데이터가 필요하고 어느 정도의 구식 정보 수용이 가능하다면, 이 패턴이 여러분의 요구사항을 완벽히 충족합니다!</li>
</ul>
<h1 id="리액트-swr-라이브러리와-장점" tabindex="-1"><a class="header-anchor" href="#리액트-swr-라이브러리와-장점" aria-hidden="true">#</a> 리액트 SWR 라이브러리와 장점</h1>
<p>스테일-와일-리벨리데이트(Stale-While-Revalidate)는 SWR 라이브러리(https://swr.vercel.app/)에서 구현되어 있으며 이 패턴을 리액트 애플리케이션에 적용할 수 있습니다.</p>
<p>가장 큰 장점은 캐시와의 상호작용 없이 데이터를 받아와 업데이트하는 자동화된 프로세스가 존재한다는 것입니다.</p>
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
<p>SWR이 제공하는 다른 기능은 다음과 같습니다:</p>
<ul>
<li>useSWR 훅은 요청 상태에 따라 data 및 error 두 가지 값을 반환합니다.</li>
<li>useSWR 훅은 데이터를 다시 불러오기 위한 변이션 기능도 제공합니다.</li>
<li>데이터는 &quot;포커스 시 자동 업데이트&quot; 됩니다: SWR은 브라우저 탭을 전환하거나 컴퓨터가 중지될 때 데이터를 자동으로 업데이트하여 해당 탭으로 돌아갈 때 데이터를 더 쉽게 찾을 수 있도록 도와줍니다.</li>
<li>연결이 끊겼을 때 데이터 재검증이 자동으로 수행되므로 코드 측에서 관리할 필요가 없습니다; 라이브러리가 대신 처리해 줍니다.</li>
<li>중복 제거: 로컬 캐시에서 동일한 리소스에 액세스하는 구성 요소는 SWR이 하나만 호출하도록 만듭니다. 예를 들어:</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">'swr'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Header</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">"/api/shop"</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">HeroSection</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">"/api/shop"</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Footer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">"/api/shop"</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">App</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Header <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>HeroSection <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>Footer <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>애플리케이션은 &quot;shop&quot; 리소스의 데이터를 3개의 다른 구성 요소에서 사용해야 하며, 각 구성 요소는 내부적으로 해당 리소스에 대한 호출을 SWR을 통해 처리합니다.</p>
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
<p>네트워크 수준에서는 서버에 대한 단일 호출이 실행됩니다. 후크는 같은 데이터를 세 가지 구성 요소에 모두 반환하여 여러 번 호출하는 것을 방지합니다.</p>
<p>이렇게 함으로써 &quot;전역 상태&quot;를 만들지 않고도 (예: React.Context 또는 Redux를 사용하여) 여러 구성 요소 간에 정보를 공유할 수도 있습니다. SWR은 전역 상태로 작용하고 필요로 하는 모든 구성 요소에 값을 반환할 것입니다.</p>
<p>이 기능을 사용하여 어떤 프론트엔드 응용 프로그램이든 확장하고, 몇 줄의 코드만 사용하여 흥미로운 결과를 생성할 수 있습니다.</p>
<p>이 놀라운 기술이 어떻게 작동하는지 설명하기 위해 다른 예를 살펴봅시다. API 메서드는 /api/user 엔드포인트의 GET을 통해 사용자 데이터를 반환하고, 우리는 다음을 해야 합니다:</p>
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
<p>간단하고 자주 사용되는 해결책은 상태를 생성하고 이벤트(예: React 효과 또는 사용자 클릭)를 통해 리소스를 요청하여 상태에 저장하는 것입니다.</p>
<p>SWR을 사용하지 않는 가능한 구현은 다음과 같을 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">'swr'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>fetcher<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'somewhere'</span>

<span class="token keyword">const</span> <span class="token function-variable function">Profile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>error<span class="token punctuation">,</span> setError<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> fetchData <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetcher</span><span class="token punctuation">(</span><span class="token string">"/api/user"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setData</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">setError</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>fetchData<span class="token punctuation">]</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>로드 실패<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>안녕 <span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span>님<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>fetchData<span class="token punctuation">}</span><span class="token operator">></span>새로고침<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>보시다시피, 데이터를 가져오기 위해 첫 번째 호출을 만드는 초기 효과가 필요하며, 데이터와 가능한 오류를 저장하는 두 개의 상태도 필요합니다.</p>
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
<p>이제 SWR을 사용한 솔루션을 시도해 보겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">'swr'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Profile</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error<span class="token punctuation">,</span> mutate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">'/api/user'</span><span class="token punctuation">,</span> fetcher<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>로드 실패<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">></span>로딩 중<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>div<span class="token operator">></span>안녕하세요 <span class="token punctuation">{</span>data<span class="token punctuation">.</span>name<span class="token punctuation">}</span>님<span class="token operator">!</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">mutate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>새로고침<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 솔루션은 한눈에 보기에 보다 깨끗하고 간결합니다. 진행 상황을 저장하기 위해 효과와 상태를 사용할 필요가 없으므로 SWR이 캐시, 가능한 오류, 그리고 초기 호출을 처리해 줍니다.</p>
<p>뿐만 아니라 이 마지막 솔루션을 통해 사용자 경험을 개선하기 위해 위에서 언급한 기능들을 활용할 수 있습니다.</p>
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
<p>요약하자면, SWR을 사용하면 자원을 많이 요청하는 상황을 쉽게 관리할 수 있으며, 캐시가 응용 프로그램을 빠르게 만드는 데 중요한 역할을 합니다.</p>
<p>그러나 동시에, SWR은 프로젝트가 의존하는 라이브러리이기 때문에 시간이 지남에 따라 업데이트 및 유지관리가 필요합니다.</p>
<p>SWR을 사용하도록 솔루션을 마이그레이션하는 것은 매우 간단하며, 유용한 기능을 추가하여 응용 프로그램의 복잡성을 줄입니다.</p>
<p>SWR 외에도 react-query와 같은 SWR을 지원하는 GraphQL 요청이 있는 흥미로운 대안이 있습니다.</p>
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
