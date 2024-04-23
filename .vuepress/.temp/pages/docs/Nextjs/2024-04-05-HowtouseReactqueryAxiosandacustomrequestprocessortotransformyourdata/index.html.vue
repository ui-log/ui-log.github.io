<template><div><p><img src="@source/docs/Nextjs/2024-04-05-HowtouseReactqueryAxiosandacustomrequestprocessortotransformyourdata/img/HowtouseReactqueryAxiosandacustomrequestprocessortotransformyourdata_0.png" alt="Screenshot"></p>
<p>React Query는 React 애플리케이션 내에서 데이터를 관리하기 위해 설계된 강력한 라이브러리입니다. 데이터 가져오기, 캐싱, 서버와의 동기화와 같은 작업을 간편하게 처리하며, 우아한 솔루션을 제공합니다. 반면 Axios는 JavaScript 애플리케이션에서 API 요청을 처리하기 위해 널리 사용되는 HTTP 클라이언트입니다. React Query와 Axios를 결합하여 손쉽게 구현하고 유지보수할 수 있는 강력한 데이터 관리 솔루션을 만들 수 있습니다.</p>
<p>본 문서에서는 React Query를 Axios와 통합하는 과정을 안내합니다. 우리는 데이터 관리 접근 방식을 간소화하기 위해 일부 사용자 정의 후크와 함께 Axios인 request processor를 활용할 것입니다. 각 단계는 예제와 함께 제시되어 있어 쉽게 따라할 수 있고 애플리케이션에 솔루션을 구현할 수 있습니다. 이 문서는 React Query 라이브러리의 최신 개선 사항과 요구 사항을 반영하도록 업데이트되었습니다.</p>
<h1 id="단계-1-axios-클라이언트-및-request-processor-설정하기" tabindex="-1"><a class="header-anchor" href="#단계-1-axios-클라이언트-및-request-processor-설정하기" aria-hidden="true">#</a> 단계 1: Axios 클라이언트 및 request processor 설정하기</h1>
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
<p>React Query 코드를 구현하기 전에 프로젝트 구조를 설정하는 것이 중요합니다. Utils 폴더를 만들어 프로젝트 구조를 조직화하세요. 이 폴더 안에 Network.js 파일을 생성해 요청 처리기를 구현하세요. 요청 처리기를 설정하는 단계는 다음과 같습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">BASE_URL</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"./constants"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> client <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token constant">BASE_URL</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> token
    <span class="token keyword">const</span> state <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> userState <span class="token operator">=</span> state<span class="token operator">?.</span>user<span class="token operator">?.</span>currentUser
    <span class="token keyword">if</span> <span class="token punctuation">(</span>userState <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        token <span class="token operator">=</span> <span class="token string">""</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> accessToken <span class="token punctuation">}</span> <span class="token operator">=</span> userState
        token <span class="token operator">=</span> accessToken
    <span class="token punctuation">}</span>
    <span class="token comment">// 인가 헤더 설정</span>
    token <span class="token operator">!==</span> <span class="token string">""</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>client<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onSuccess</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> response<span class="token operator">?.</span>data<span class="token operator">?.</span>data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">onError</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token operator">?.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">client</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>onSuccess<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>onError<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이 코드는 여러 중요한 기능을 수행합니다. 지정된 baseURL로 Axios 클라이언트를 설정하고 요청 처리기를 구축합니다. Redux를 상태 관리에 사용하고 Redux 상태에 토큰이 저장된 경우, 이 코드는 state.getStore()를 사용해 액세스 토큰을 추출하는 데 도움을 줍니다. 또는 토큰을 쿠키나 기타 원하는 방식으로 저장할 수도 있습니다.</p>
<p>요청 함수는 이 설정에서 중심적인 역할을 하며 헤더 설정, 요청 생성, 견고한 오류 처리, 반환된 데이터 형식 변환에 도움을 줍니다. 또한 특정 프로젝트 요구 사항에 따라 맞춤화할 수 있는 여지가 있습니다.</p>
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
<p>요청 기능이 준비되면 React Query 내에서 사용자 정의 훅을 만들어 API 요청을 간편하게 처리하고 데이터를 추가로 변환할 수 있습니다. 구체적으로, 사용자 정의 useApiSend 및 useApiGet 훅을 만들어 외부 및 내부 요청에 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> 
  useQuery<span class="token punctuation">,</span>
  useMutation<span class="token punctuation">,</span> 
  useQueryClient
 <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@tanstack/react-query"</span>


<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useApiGet</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">useQuery</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">queryKey</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
    <span class="token literal-property property">queryFn</span><span class="token operator">:</span> fn<span class="token punctuation">,</span>
    <span class="token operator">...</span>options
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useApiSend</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> success<span class="token punctuation">,</span> error<span class="token punctuation">,</span> invalidateKey<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> queryClient <span class="token operator">=</span> <span class="token function">useQueryClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">useMutation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">mutationFn</span><span class="token operator">:</span> fn<span class="token punctuation">,</span>
        <span class="token function-variable function">onSuccess</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            invalidateKey <span class="token operator">&amp;&amp;</span>
                invalidateKey<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                    queryClient<span class="token punctuation">.</span><span class="token function">invalidateQueries</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            success <span class="token operator">&amp;&amp;</span> <span class="token function">success</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">onError</span><span class="token operator">:</span> error<span class="token punctuation">,</span>
        <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>options<span class="token punctuation">,</span> 
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>useApiGet 코드 스니펫에서는 쿼리 키를 받아들이는 것을 볼 수 있습니다. 이 키는 쿼리를 무효화하거나 쿼리와 관련된 특정 작업을 수행할 수 있습니다. 또한 쿼리 함수 매개변수를 통해 요청 처리기 동작을 반환하는 함수를 받습니다. 마지막으로 options 매개변수는 쿼리에 설정하려는 React Query 옵션으로 구성되어 있습니다. 이 설정은 구현하면 명료하고 간단해집니다.</p>
<p>마찬가지로 useApiSend는 POST, PUT, PATCH, DELETE 등의 외부 요청을 용이하게 처리합니다. useApiGet과 유사하게 fn(함수), 성공 시 작업을 정의하는 success 매개변수, 오류 처리를 담당하는 error 매개변수, 무효화를 위한 쿼리 키 및 React Query 옵션과 같은 매개변수를 받습니다.</p>
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
<h1 id="단계-2-useapiget-사용하기" tabindex="-1"><a class="header-anchor" href="#단계-2-useapiget-사용하기" aria-hidden="true">#</a> 단계 2: useApiGet 사용하기</h1>
<p>우리의 커스텀 후크 주방에서 새롭게 만들어진 useApiGet 커스텀 훅을 활용하여 GET 요청을 수행해 봅시다! 😏 먼저 API 요청을 위한 URL을 반환하는 함수들을 담기 위해 Urls라는 폴더를 만드는 것이 좋습니다. 예를 들어, 서버로부터 포스트 피드를 가져오고 싶다면, API 엔드포인트는 일반적으로 컨트롤러에 따라 구성됩니다. 최고의 방법론으로는 이 폴더의 파일들을 컨트롤러의 이름에 따라 지어주는 것이 좋습니다. 왜냐하면 컨트롤러 내 모든 URL들은 엔드포인트의 시작 이름이 동일하기 때문입니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtouseReactqueryAxiosandacustomrequestprocessortotransformyourdata/img/HowtouseReactqueryAxiosandacustomrequestprocessortotransformyourdata_1.png" alt="이미지1"></p>
<p><img src="@source/docs/Nextjs/2024-04-05-HowtouseReactqueryAxiosandacustomrequestprocessortotransformyourdata/img/HowtouseReactqueryAxiosandacustomrequestprocessortotransformyourdata_2.png" alt="이미지2"></p>
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
<p>위의 이미지는 URL 파일을 구조화하는 방법을 설명하기 위한 것입니다. 이제 토론으로 돌아가 봅시다. &quot;feeds&quot; 엔드포인트에 대한 GET 요청을 만들어보겠습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// feed URL 정의</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../Utils"</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getFeeds</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/feed</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"GET"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 서버로부터 피드를 가져오는 홈페이지</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getFeeds <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../../../Urls'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
        data<span class="token punctuation">,</span>
        isLoading<span class="token punctuation">,</span>
        error<span class="token punctuation">,</span>
        isError<span class="token punctuation">,</span>
        isLoadingError<span class="token punctuation">,</span>
        refetch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useApiGet</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span><span class="token string">"feeds"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            getFeeds<span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">enabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">refetchOnWindowFocus</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">if</span> <span class="token punctuation">(</span>isLoading<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>ScreenLoader <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>isError <span class="token operator">||</span> isLoadingError<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token operator">&lt;</span>ErrorPage
            error<span class="token operator">=</span><span class="token punctuation">{</span>error<span class="token operator">?.</span>message<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token punctuation">(</span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span>
    <span class="token punctuation">{</span>data<span class="token operator">?.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">(</span>item<span class="token punctuation">,</span>index<span class="token punctuation">)</span></span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token operator">&lt;</span>PostCard item<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>위의 코드는 useApiGet을 사용하여 GET 요청을 하는 간단한 설명을 제공합니다.</p>
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
<h1 id="단계-3-데이터-변이" tabindex="-1"><a class="header-anchor" href="#단계-3-데이터-변이" aria-hidden="true">#</a> 단계 3: 데이터 변이</h1>
<p>데이터를 가져오는 것 외에도 서버로 데이터를 보내는 것이 아주 중요합니다. 어떻게 진행할 수 있는지 알아보겠습니다. GET 요청을 처리하는 것과 유사하게, POST 요청을 처리하는 함수를 정의해야 합니다. 이제 POST 요청을 만들어 봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// create post function</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> request <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../Utils"</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">createPost</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span>
    <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/posts</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"POST"</span><span class="token punctuation">,</span>
        data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">AddPost</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>post<span class="token punctuation">,</span> setPost<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> mutate<span class="token punctuation">,</span> isPending <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useApiSend</span><span class="token punctuation">(</span>
        createPost<span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text1</span><span class="token operator">:</span> <span class="token string">"게시물이 성공적으로 추가되었습니다."</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            Toast<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"error"</span><span class="token punctuation">,</span>
                <span class="token literal-property property">text1</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">게시물을 추가할 수 없습니다. </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>Ï
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">onSubmit</span> <span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
   <span class="token function">mutate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">content</span><span class="token operator">:</span>post
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>isPending<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>ScreenLoader<span class="token operator">/</span><span class="token operator">></span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
       <span class="token operator">&lt;</span>input placeholder<span class="token operator">=</span><span class="token string">"게시물 입력"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>post<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token operator">=></span> <span class="token function">setPost</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>
       <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span>onSubmit<span class="token punctuation">}</span><span class="token operator">></span>게시물 추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>여기서는 POST 요청을 만들고 있어요. 먼저 createPost 함수를 정의하여 URL, 메소드 및 데이터를 요청 처리기에 전달하여 요청을 수행합니다. 또한 axios.post, axios.get, axios.patch 등의 Axios 함수를 활용하고 요구 사항에 맞게 더 맞춤화된 API 훅을 만들 수 있어요. useApiSend 훅은 React Query의 useMutation과 유사한 모든 메소드와 변수를 노출하며 요청을 수행하고 로딩 및 오류 상태를 관리하는 데 도움이 되도록 만들어졌어요.</p>
<h1 id="모두-함께-적용해-봅시다" tabindex="-1"><a class="header-anchor" href="#모두-함께-적용해-봅시다" aria-hidden="true">#</a> 모두 함께 적용해 봅시다:</h1>
<p>이 기사에서는 React Query를 효과적으로 활용하여 요청 처리기로 Axios를 사용하고 사용자 정의 훅과 Axios 클라이언트를 함께 사용하는 방법을 보여 드렸어요. 데이터를 가져오고 변경하는 예제를 제공하였으며 React 애플리케이션에 모든 것을 매끄럽게 통합하는 방법을 설명했어요.</p>
<p>React Query를 Axios와 함께 활용함으로써 사용자 친화적이고 유지 보수 가능한 견고한 데이터 관리 솔루션을 구축할 수 있어요. 데이터 가져오기, 캐싱 및 서버와의 동기화를 관리하는 간단하고 우아한 접근 방식을 제공해줘요.</p>
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
<p>감사합니다! 또 봐요!</p>
</div></template>
