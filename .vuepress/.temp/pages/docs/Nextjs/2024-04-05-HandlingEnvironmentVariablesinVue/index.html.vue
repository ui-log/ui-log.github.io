<template><div><img src="@source/docs/Nextjs/2024-04-05-HandlingEnvironmentVariablesinVue/img/HandlingEnvironmentVariablesinVue_0.png" />
<p>Vue는 널리 사용되는 dotenv 모듈을 사용하여 환경 디렉토리에서 다음 파일에서 빌드 구성을 로드합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">.</span>env                # 항상 로드됨
<span class="token punctuation">.</span>env<span class="token punctuation">.</span>local          # 항상 로드됨<span class="token punctuation">,</span> git에서 무시됨
<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token punctuation">[</span>mode<span class="token punctuation">]</span>         # 지정된 모드에서만 로드됨
<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token punctuation">[</span>mode<span class="token punctuation">]</span><span class="token punctuation">.</span>local   # 지정된 모드에서만 로드됨<span class="token punctuation">,</span> git에서 무시됨
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>각 파일은 다음 형식을 가지고 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token constant">VITE_SOME_KEY</span><span class="token operator">=</span><span class="token number">123</span>
<span class="token constant">DB_PASSWORD</span><span class="token operator">=</span>secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>VITE_ 접두사가있는 모든 것은 import.meta.env 내의 클라이언트 애플리케이션에서 자동으로 사용할 수 있습니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_SOME_KEY</span><span class="token punctuation">)</span> <span class="token comment">// "123"</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>애플리케이션의 다른 부분은 .dotenv 파일을 사용하여 VITE_ 접두사없이 안전하게 변수를 노출시킬수 있어서 클라이언트로 유출되지 않습니다.```</p>
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
<p>지금까지 쉽죠. 실제로는 각 환경에 대해 여러 구성 파일이 있을 것입니다.</p>
<p>예를 들어 로컬 환경에서</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token punctuation">.</span>env<span class="token punctuation">.</span>local
<span class="token constant">VITE_BACKEND_URL</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">localhost:3000</span><span class="token regex-delimiter">/</span></span>
<span class="token constant">VITE_PUBLIC_URL</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>uploads<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 프로덕션 환경에서</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code># <span class="token punctuation">.</span>env<span class="token punctuation">.</span>production
<span class="token constant">VITE_BACKEND_URL</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">example.com</span><span class="token regex-delimiter">/</span></span>
<span class="token constant">VITE_PUBLIC_URL</span><span class="token operator">=</span>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>example<span class="token punctuation">.</span>cloudflare<span class="token punctuation">.</span>com<span class="token operator">/</span>uploads<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>클라이언트 측에서는 이러한 변수를 직접 사용할 수 있습니다. 전역적으로 사용할 수 있기 때문이에요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// /lib/fetch.ts</span>

<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BACKEND_URL</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>만약 TypeScript를 사용하는 경우 (그래야죠, 그렇죠?), 조금은 도움이 안 될 수도 있는 오류를 볼 수 있을 거에요.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string">'env'</span> 속성은 <span class="token string">'ImportMeta'</span> 타입에 존재하지 않습니다<span class="token punctuation">.</span><span class="token function">ts</span><span class="token punctuation">(</span><span class="token number">2339</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>TypeScript가 만족하도록 아래 내용을 포함한 파일 src/types/vite-env.d.ts를 만드세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">/// &lt;reference types="vite/client" /></span>

<span class="token keyword">interface</span> <span class="token class-name">ImportMetaEnv</span> <span class="token punctuation">{</span>
  readonly <span class="token constant">VITE_PUBLIC_URL</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  readonly <span class="token constant">VITE_BACKEND_URL</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ImportMeta</span> <span class="token punctuation">{</span>
  readonly env<span class="token operator">:</span> ImportMetaEnv<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로, 코드에서 import.meta.env.VITE_BACKEND_URL을 너무 길어 보이는 것 같아요. 일반적으로 중간에 있는 appSettings.ts 파일을 만들어 이를 캡슐화하는 편이에요.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// src/config/appSetings.ts</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_BACKEND_URL</span><span class="token punctuation">,</span>
  <span class="token literal-property property">publicUrl</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_PUBLIC_URL</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>따라서 우리의 원본 코드는 더 간단해 집니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">"axios"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> baseUrl <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@/config/appSetings"</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  baseURL<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
