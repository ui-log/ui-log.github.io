<template><div><p><img src="@source/docs/Nextjs/2024-04-05-RepeatingFailedRequestsAfterTokenRefreshinAxiosInterceptorsforReactjsApps/img/RepeatingFailedRequestsAfterTokenRefreshinAxiosInterceptorsforReactjsApps_0.png" alt="RepeatingFailedRequestsAfterTokenRefreshinAxiosInterceptorsforReactjsApps_0.png"></p>
<p>현대 웹 애플리케이션에서 API에 HTTP 요청을 보내는 것은 개발 프로세스의 중요한 부분입니다. 인기 있는 JavaScript 라이브러리 중 하나인 Axios는 React.js 애플리케이션에서 HTTP 요청을 보내는 과정을 간소화합니다. 그러나 안전한 API 및 토큰 기반 인증과 관련된 경우 토큰 만료를 원활하게 처리하는 것이 중요합니다. 이 기사에서는 토큰 새로 고침 프로세스 중에 발생한 모든 요청이 새로운 액세스 토큰으로 자동으로 반복되도록 하는 방법을 살펴봅니다.</p>
<h2 id="axios-interceptors-이해하기" tabindex="-1"><a class="header-anchor" href="#axios-interceptors-이해하기" aria-hidden="true">#</a> Axios Interceptors 이해하기</h2>
<p>Axios 인터셉터는 HTTP 요청과 응답을 전역적으로 가로채고 변환할 수 있는 미들웨어입니다. 이는 요청에 인증 헤더를 추가하거나 오류 처리, 토큰 관리와 같은 작업을 처리할 때 특히 유용합니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// React.js 프로젝트에서 Axios 설정하기</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://api.example.com'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 전역 요청 인터셉터 추가</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 요청 구성 수정하기, 예: 헤더 추가</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 전역 응답 인터셉터 추가</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">// 필요에 따라 응답 데이터 수정하기</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> instance<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="토큰과-리프레시-토큰" tabindex="-1"><a class="header-anchor" href="#토큰과-리프레시-토큰" aria-hidden="true">#</a> 토큰과 리프레시 토큰</h2>
<p>액세스 토큰과 리프레시 토큰은 웹 애플리케이션을 보호하는 데 필수적입니다. 액세스 토큰은 보호된 리소스에 액세스할 수 있는 짧은 수명의 토큰입니다. 반면에 리프레시 토큰은 새로운 액세스 토큰을 얻기 위해 사용할 수 있는 장기간 수명의 토큰입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 백엔드에서 토큰과 리프레시 토큰을 생성하고 관리하기</span>
<span class="token comment">// 이 코드는 일반적으로 서버 측 로직의 일부입니다</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateAccessToken</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 액세스 토큰 생성 및 서명하기</span>
  <span class="token comment">// 액세스 토큰 반환</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateRefreshToken</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 리프레시 토큰 생성 및 서명하기</span>
  <span class="token comment">// 리프레시 토큰 반환</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="axios-인터셉터를-사용하여-토큰-만료-처리하기" tabindex="-1"><a class="header-anchor" href="#axios-인터셉터를-사용하여-토큰-만료-처리하기" aria-hidden="true">#</a> Axios 인터셉터를 사용하여 토큰 만료 처리하기</h2>
<p>접근 토큰이 만료되었을 때, Axios 인터셉터를 사용하여 토큰 만료를 자동으로 감지하고 토큰 갱신을 시작할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 자동 토큰 갱신을 위한 Axios 인터셉터 구현</span>
<span class="token keyword">const</span> axiosInstance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'https://api.example.com'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

axiosInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 접근 토큰이 만료되었습니다. 토큰을 갱신합니다.</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> newAccessToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">refreshAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 새 접근 토큰으로 요청 헤더를 업데이트합니다.</span>
        error<span class="token punctuation">.</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">'Authorization'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newAccessToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
        <span class="token comment">// 원래 요청을 다시 시도합니다.</span>
        <span class="token keyword">return</span> <span class="token function">axiosInstance</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>refreshError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 토큰 갱신 오류를 처리합니다.</span>
        <span class="token keyword">throw</span> refreshError<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="토큰-갱신-후-실패한-요청-다시-시도하기" tabindex="-1"><a class="header-anchor" href="#토큰-갱신-후-실패한-요청-다시-시도하기" aria-hidden="true">#</a> 토큰 갱신 후 실패한 요청 다시 시도하기</h2>
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
<p>토큰 갱신 중에는 토큰 만료로 인해 일부 요청이 실패할 수 있습니다. 이 문제를 해결하기 위해 우리는 실패한 요청을 저장하고 새로운 액세스 토큰을 획득한 후 다시 시도할 수 있는 요청 대기열을 구현할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// Axios 인터셉터에서 요청 대기열 구현하기</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AxiosRequestConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'axios'</span><span class="token punctuation">;</span>

<span class="token comment">// 다시 시도 대기열 항목의 구조를 정의합니다.</span>
<span class="token keyword">interface</span> <span class="token class-name">RetryQueueItem</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">resolve</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token operator">?</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token function-variable function">reject</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">error<span class="token operator">?</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 요청 대기열을 보유할 목록을 생성합니다.</span>
<span class="token keyword">const</span> <span class="token literal-property property">refreshAndRetryQueue</span><span class="token operator">:</span> RetryQueueItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 여러 토큰 갱신 요청을 방지하기 위한 플래그</span>
<span class="token keyword">let</span> isRefreshing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

axiosInstance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">,</span>
  <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">originalRequest</span><span class="token operator">:</span> AxiosRequestConfig <span class="token operator">=</span> error<span class="token punctuation">.</span>config<span class="token punctuation">;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>response <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isRefreshing<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isRefreshing <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// 액세스 토큰을 갱신합니다.</span>
          <span class="token keyword">const</span> newAccessToken <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">refreshAccessToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          
          <span class="token comment">// 새로운 액세스 토큰으로 요청 헤더를 업데이트합니다.</span>
          error<span class="token punctuation">.</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">'Authorization'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>newAccessToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
          
          <span class="token comment">// 새 토큰으로 대기열에 있는 모든 요청을 다시 시도합니다.</span>
          refreshAndRetryQueue<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> config<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            axiosInstance
              <span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">)</span>
              <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

          <span class="token comment">// 대기열을 비웁니다.</span>
          refreshAndRetryQueue<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

          <span class="token comment">// 원래 요청을 다시 시도합니다.</span>
          <span class="token keyword">return</span> <span class="token function">axiosInstance</span><span class="token punctuation">(</span>originalRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>refreshError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// 토큰 갱신 오류를 처리합니다.</span>
          <span class="token comment">// 모든 저장소를 지우고 사용자를 로그인 페이지로 리다이렉션할 수 있습니다.</span>
          <span class="token keyword">throw</span> refreshError<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
          isRefreshing <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// 원래 요청을 대기열에 추가합니다.</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        refreshAndRetryQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">config</span><span class="token operator">:</span> originalRequest<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 상태 코드가 401이 아닌 경우에는 Promise 거부를 반환합니다.</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="설명" tabindex="-1"><a class="header-anchor" href="#설명" aria-hidden="true">#</a> 설명:</h2>
<ul>
<li>다시 시도 대기열 항목 구조: 다시 시도 대기열 항목(RetryQueueItem)의 구조를 정의합니다. 이는 해당 요청과 연결된 프라미스를 해결하거나 거부하는 resolve 및 reject 함수(요청과 관련된 프라미스를 해결하거나 거부하는 데 사용됨)와 원래 요청 구성(config)을 포함합니다.</li>
<li>요청 대기열 초기화: 토큰 갱신 후 다시 시도해야 하는 실패한 요청을 보유하기 위해 refreshAndRetryQueue라는 배열을 생성합니다.</li>
<li>토큰 갱신 플래그: isRefreshing 플래그는 여러 토큰 갱신 요청이 동시에 발생하는 것을 방지하는 데 사용됩니다. 한 번에 하나의 토큰 갱신 요청만 실행되도록 보장합니다.</li>
<li>응답 인터셉트: 응답을 받을 때 Axios가 인터셉트하여 상태 코드가 401인지 확인하여 액세스 토큰이 만료되었는지를 확인합니다.</li>
<li>토큰 갱신 프로세스: 액세스 토큰이 만료되었고 토큰 갱신이 이미 진행 중이지 않은 경우 (!isRefreshing), 토큰 갱신 프로세스를 시작합니다. 새 액세스 토큰을 기다리고 실패한 요청의 헤더를 새 토큰으로 업데이트합니다.</li>
<li>실패한 요청 다시 시도: 새 액세스 토큰을 획들한 후 refreshAndRetryQueue를 반복하며 업데이트된 구성을 사용하여 각 요청을 다시 시도합니다. 모든 요청을 다시 시도한 후 대기열을 비웁니다.</li>
<li>원래 요청 대기열에 추가: 요청이 토큰 갱신 중 401 오류를 만난 경우 토큰 갱신이 진행 중이므로 원래 요청 구성을 대기열에 추가합니다. 이러한 요청은 새 액세스 토큰을 사용할 수 있을 때 다시 시도됩니다.</li>
<li>401이 아닌 경우 거부: 상태 코드가 401이 아닌 경우 에러를 전파하기 위해 프로미스를 거부합니다.</li>
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
<p>이 코드는 모든 실패한 요청이 새 액세스 토큰으로 성공적인 토큰 새로 고침 후 자동으로 다시 시도되도록하며, 동시성을 효과적으로 관리하여 중복된 토큰 새로 고침 요청을 피합니다.</p>
<h2 id="react-js-애플리케이션에서-모두-통합하기" tabindex="-1"><a class="header-anchor" href="#react-js-애플리케이션에서-모두-통합하기" aria-hidden="true">#</a> React.js 애플리케이션에서 모두 통합하기</h2>
<p>Axios 인터셉터를 React.js 프로젝트에 통합하여 토큰 만료를 처리하고 실패한 요청을 자동으로 반복하는 방법을 알아봅시다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// React.js 애플리케이션에서 Axios 인터셉터 설정</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useEffect<span class="token punctuation">,</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axiosInstance <span class="token keyword">from</span> <span class="token string">'./axiosInstance'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>data<span class="token punctuation">,</span> setData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    axiosInstance
      <span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/data'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setData</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 에러 처리, 토큰 새로고침 오류 포함</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">"App"</span><span class="token operator">></span>
      <span class="token punctuation">{</span><span class="token comment">/* 앱을 렌더링하세요 */</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론:</h2>
<p>인증, 엑세스 토큰, 토큰 갱신, 그리고 자동으로 실패한 요청을 반복하는 처리는 안전하고 신뢰할 수 있는 React.js 애플리케이션을 구축하는 데 중요합니다. Axios 인터셉터는 이러한 측면을 관리하기 위한 강력한 솔루션을 제공하여 원활하고 안전한 사용자 경험을 보장합니다.</p>
<p>샘플 코드는 <a href="https://github.com/SinaMAlizadeh/axios-interceptors" target="_blank" rel="noopener noreferrer">여기<ExternalLinkIcon/></a>에서 찾을 수 있습니다.</p>
</div></template>
