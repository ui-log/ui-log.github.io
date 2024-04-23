<template><div><img src="@source/docs/Nextjs/2024-04-05-LaravelInertiajsReactSimpleCRUDExample/img/LaravelInertiajsReactSimpleCRUDExample_0.png" />
<p>여러분 안녕하세요! 라라벨과 이너셔.js 그리고 리액트를 함께 사용하는 기능을 보여주는 가장 좋은 방법 중 하나는 짧은 기사에서 모두 보여주는 것입니다. 그래서, 이 기사의 주제는 여기에 대해입니다. 전통적으로, 새로운 라라벨 앱을 생성하고 여기에 필요한 모든 종속성을 설치하는 것으로 시작하겠습니다.</p>
<h1 id="앱-생성" tabindex="-1"><a class="header-anchor" href="#앱-생성" aria-hidden="true">#</a> 앱 생성</h1>
<p>새로운 라라벨 앱을 생성하는 방법은 원하는대로 사용할 수 있습니다. 제 경우에는 다음과 같은 컴포저 명령어를 사용할 예정입니다:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ composer create<span class="token operator">-</span>project laravel<span class="token operator">/</span>laravel laravel<span class="token operator">-</span>react<span class="token operator">-</span>crud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>새 앱이 생성되면 할 일은 &quot;resources/views/welcome.blade.php&quot; 파일의 이름을 &quot;app.blade.php&quot;로 바꾸고 이 파일 안에 다음 코드를 넣는 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span>
<span class="token operator">&lt;</span>html<span class="token operator">></span>
    <span class="token operator">&lt;</span>head<span class="token operator">></span>
        <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"utf-8"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1"</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>title<span class="token operator">></span>Laravel<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span>
        @viteReactRefresh 
        @<span class="token function">vite</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'resources/css/app.css'</span><span class="token punctuation">,</span> <span class="token string">'resources/js/app.jsx'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 이 글에서는 React 구성요소에 <span class="token constant">JSX</span> 구문을 사용할 것입니다 <span class="token operator">--</span><span class="token operator">></span>
        @inertiaHead
    <span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>
    <span class="token operator">&lt;</span>body<span class="token operator">></span>
        @inertia
    <span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한 Inertia.js의 주요 컴포저 패키지를 설치하는 것을 잊지 마세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ composer require inertiajs<span class="token operator">/</span>inertia<span class="token operator">-</span>laravel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="서버-셋업" tabindex="-1"><a class="header-anchor" href="#서버-셋업" aria-hidden="true">#</a> 서버 셋업</h1>
<p>지금은 Inertia.js의 서버 셋업을 하고 있기 때문에 앱에서 Inertia가 제대로 작동하려면 새로운 미들웨어를 생성해야 합니다. 새로운 미들웨어를 생성하려면 다음 명령을 사용해야 합니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ php artisan inertia<span class="token operator">:</span>middleware
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그 명령 이후에, Kernel.php 파일을 열어서 웹 라우트 그룹으로 이동하고, 그 배열 안에 다음 코드 라인을 넣어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
# app<span class="token operator">/</span>Http<span class="token operator">/</span>Kernel<span class="token punctuation">.</span>php
<span class="token comment">// ...</span>
<span class="token string">'web'</span> <span class="token operator">=></span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    \App\Http\Middleware\HandleInertiaRequests<span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>좋아요, 서버 셋업은 끝났습니다, 이제 클라이언트 셋업을 시작하여 앱에서 React를 사용할 수 있게 해보겠습니다.</p>
<h1 id="클라이언트-셋업" tabindex="-1"><a class="header-anchor" href="#클라이언트-셋업" aria-hidden="true">#</a> 클라이언트 셋업</h1>
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
<p>먼저, NPM이나 Yarn을 사용하여 다음 종속성을 설치하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ npm install @inertiajs<span class="token operator">/</span>inertia<span class="token operator">-</span>react @inertiajs<span class="token operator">/</span>react @vitejs<span class="token operator">/</span>plugin<span class="token operator">-</span>react react react<span class="token operator">-</span>dom
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>모든 종속성이 설치되면 &quot;vite.config.js&quot; 파일을 열고 다음 코드를 해당 파일에 넣어 앱의 클라이언트 측을 위해 React를 구성하십시오:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> laravel <span class="token keyword">from</span> <span class="token string">'laravel-vite-plugin'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> react <span class="token keyword">from</span> <span class="token string">'@vitejs/plugin-react'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token function">react</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// vite.js를 위해 설치한 React 플러그인</span>
        <span class="token function">laravel</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'resources/css/app.css'</span><span class="token punctuation">,</span> <span class="token string">'resources/js/app.jsx'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">refresh</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>알겠어요. 이제 &quot;resources/js&quot; 폴더 안으로 들어가서 app.js 파일을 삭제하고 &quot;app.jsx&quot;라는 새 파일을 만들어주세요. 그리고 다음 코드를 넣어주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createRoot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react-dom/client'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createInertiaApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@inertiajs/inertia-react'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolvePageComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'laravel-vite-plugin/inertia-helpers'</span>

<span class="token function">createInertiaApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 아래에서 볼 수 있듯이, resources/js/Pages 폴더에서 모든 React 컴포넌트를 가져올 것입니다.</span>
    <span class="token function-variable function">resolve</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolvePageComponent</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">./Pages/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.jsx</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span><span class="token function">glob</span><span class="token punctuation">(</span><span class="token string">'./Pages/**/*.jsx'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> el<span class="token punctuation">,</span> App<span class="token punctuation">,</span> props <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">createRoot</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App <span class="token punctuation">{</span><span class="token operator">...</span>props<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>우리는 방금 클라이언트 측 설치를 완료했습니다. 이제 앱의 백엔드 부분을 시작할 차례입니다.</p>
<h1 id="crud-백엔드-로직" tabindex="-1"><a class="header-anchor" href="#crud-백엔드-로직" aria-hidden="true">#</a> CRUD 백엔드 로직</h1>
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
<p>말씀드렸듯이, 이 튜토리얼에서는 간단한 CRUD를 만들고 있습니다. 따라서 포스트 리소스 로직을 갖춘 간단한 어플리케이션을 구축하려고 합니다. 이를 위해 팩토리와 마이그레이션이 적용된 &quot;Post&quot;라는 새 모델을 만들어봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ php artisan make<span class="token operator">:</span>model Post <span class="token operator">-</span>mf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>좋아요, 이제 모델의 마이그레이션 파일을 열어서 posts 테이블 내부에 다음과 같은 열을 정의해봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

# database<span class="token operator">/</span>migrations<span class="token operator">/</span>2023_05_14_151218_create_posts_table<span class="token punctuation">.</span>php
<span class="token operator">&lt;</span><span class="token operator">?</span>php

use Illuminate\Database\Migrations\Migration<span class="token punctuation">;</span>
use Illuminate\Database\Schema\Blueprint<span class="token punctuation">;</span>
use Illuminate\Support\Facades\Schema<span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">class</span> <span class="token keyword">extends</span> <span class="token class-name">Migration</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Run the migrations.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">Schema</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">'posts'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Blueprint $table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $table<span class="token operator">-</span><span class="token operator">></span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $table<span class="token operator">-</span><span class="token operator">></span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'title'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $table<span class="token operator">-</span><span class="token operator">></span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $table<span class="token operator">-</span><span class="token operator">></span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Reverse the migrations.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">Schema</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">dropIfExists</span><span class="token punctuation">(</span><span class="token string">'posts'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>필요한 모든 필드를 입력했어요. 이제 마이그레이션을 실행해볼게요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ php artisan migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>다음 단계는 방금 생성한 모델을 위한 리소스 컨트롤러를 생성해야 해요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ php artisan make<span class="token operator">:</span>controller PostController <span class="token operator">--</span>resource <span class="token operator">--</span>model<span class="token operator">=</span>Post
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>좋아요, 이제 <code v-pre>Post</code> 팩토리를 열어서 시드로 생성할 예시 게시물에 대한 규칙을 설정해봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
# database<span class="token operator">/</span>factories<span class="token operator">/</span>PostFactory<span class="token punctuation">.</span>php

namespace Database\Factories<span class="token punctuation">;</span>

use Illuminate\Database\Eloquent\Factories\Factory<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@extends</span> \Illuminate\Database\Eloquent\Factories\Factory&lt;\App\Models\Post>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">PostFactory</span> <span class="token keyword">extends</span> <span class="token class-name">Factory</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Define the model's default state.
     *
     * <span class="token keyword">@return</span> array&lt;string, mixed>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">definition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> array
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string">'title'</span> <span class="token operator">=></span> <span class="token function">fake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">text</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">'body'</span> <span class="token operator">=></span> <span class="token function">fake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">text</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>이제 데이터베이스 시더를 열고, 예시 게시물 10개를 생성해봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace Database\Seeders<span class="token punctuation">;</span>

<span class="token comment">// use Illuminate\Database\Console\Seeds\WithoutModelEvents;</span>
use Illuminate\Database\Seeder<span class="token punctuation">;</span>
use App\Models\Post<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">DatabaseSeeder</span> <span class="token keyword">extends</span> <span class="token class-name">Seeder</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Seed the application's database.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">Post</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">factory</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그럼 이제 시더 플래그를 사용하여 모든 마이그레이션을 실행해 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ php artisan migrate<span class="token operator">:</span>fresh <span class="token operator">--</span>seed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그래요, 그리고 이제 우리는 데이터베이스에 있는 모든 포스트들을 보여줄 새로운 리액트 컴포넌트를 만들어 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// resources/js/Pages 폴더 안에 새로운 컴포넌트를 생성합니다</span>
<span class="token comment">// 파일 이름은 Index.jsx 로 지정합니다</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span>나의 수퍼 블로그<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">></span>
            <span class="token punctuation">{</span> posts <span class="token operator">&amp;&amp;</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위에서 볼 수 있듯이, 이것은 정말 간단한 컴포넌트입니다. 이제 이미 만든 Post 컨트롤러 내에서 다음 코드로 이 컴포넌트를 렌더링할 시간입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
<span class="token comment">// app\Http\Controllers\PostController.php</span>
namespace App\Http\Controllers<span class="token punctuation">;</span>

use App\Models\Post<span class="token punctuation">;</span>
use Illuminate\Http\Request<span class="token punctuation">;</span>
use Inertia\Inertia<span class="token punctuation">;</span> <span class="token comment">// Inertia 클래스를 렌더링하기 위해 임포트</span>

<span class="token keyword">class</span> <span class="token class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 리소스의 목록 표시
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 데이터베이스에서 포스트를 가져와 컴포넌트에서 생성한 프롭에 제공합니다.</span>
        <span class="token keyword">return</span> <span class="token literal-property property">Inertia</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'Index'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token string">'posts'</span> <span class="token operator">=></span> Post<span class="token operator">:</span><span class="token operator">:</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>마지막으로, 라우트 파일 내에 새로운 라우트를 추가합시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
<span class="token comment">// routes/web.php</span>
use Illuminate\Support\Facades\Route<span class="token punctuation">;</span>
use App\Http\Controllers\PostController<span class="token punctuation">;</span>

<span class="token comment">/*
|--------------------------------------------------------------------------
| 웹 라우트
|--------------------------------------------------------------------------
|
| 여기에서 애플리케이션의 웹 라우트를 등록할 수 있습니다. 이 라우트들은 RouteServiceProvider에 로드되며
| 모두 "web" 미들웨어 그룹에 할당됩니다. 멋진 것을 만들어보세요!
|
*/</span>

<span class="token literal-property property">Route</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string">'welcome'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token literal-property property">Route</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">resource</span><span class="token punctuation">(</span><span class="token string">'/post'</span><span class="token punctuation">,</span> <span class="token literal-property property">PostController</span><span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>로컬 서버 및 Vite.js 서버를 실행하는 것을 잊지 마세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>$ php artisan serve
$ npm run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>브라우저에서 결과를 확인해 보세요:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-LaravelInertiajsReactSimpleCRUDExample/img/LaravelInertiajsReactSimpleCRUDExample_1.png" alt="라벨인털리아 및 리액트 간단한 CRUD 예시"></p>
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
<p>멋지네요! 이제 다음 주제로 넘어가서 폼을 처리해볼게요.</p>
<h1 id="react와-inertia-js로-폼-다루기" tabindex="-1"><a class="header-anchor" href="#react와-inertia-js로-폼-다루기" aria-hidden="true">#</a> React와 Inertia.js로 폼 다루기</h1>
<p>이제 포스트 생성을 위한 새로운 컴포넌트를 만들 시간입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// resources/js/Pages/Create.jsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@inertiajs/react'</span> <span class="token comment">// POST 요청을 만들기 위해 이 라우터를 가져와야 해요</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>values<span class="token punctuation">,</span> setValues<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// 폼 필드</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">""</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 아래 함수를 사용해서</span>
    <span class="token comment">// 폼 입력에서 값을 가져올 거예요</span>
    <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> key <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
        <span class="token function">setValues</span><span class="token punctuation">(</span><span class="token parameter">values</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>values<span class="token punctuation">,</span>
            <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 이 함수는 우리 폼 데이터를</span>
    <span class="token comment">// PostContoller의 store 함수로 보낼 거에요</span>
    <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        router<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">'/post'</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span>포스트 만들기<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token punctuation">{</span><span class="token comment">/* 여기서 input 필드를 만드는 방법에 주목하세요 */</span><span class="token punctuation">}</span>
                <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>제목<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"title"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>values<span class="token punctuation">.</span>title<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

                <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span>내용<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator">&lt;</span>textarea id<span class="token operator">=</span><span class="token string">"body"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>values<span class="token punctuation">.</span>body<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>textarea<span class="token operator">></span>
                <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>만들기<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>우리가 해야 할 다음 일은 포스트 컨트롤러에 함수를 생성하고 저장하는 코드를 작성하는 것입니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Http\Controllers<span class="token punctuation">;</span>

use App\Models\Post<span class="token punctuation">;</span>
use Illuminate\Http\Request<span class="token punctuation">;</span>
use Inertia\Inertia<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 자료 목록을 표시합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token literal-property property">Inertia</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'Index'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token string">'posts'</span> <span class="token operator">=></span> Post<span class="token operator">:</span><span class="token operator">:</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 새 자료를 생성하는 양식을 표시합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token literal-property property">Inertia</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'Create'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 새로운 자료를 저장소에 저장합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">store</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 이 함수는 간단한 CRUD 예제이기 때문에 어떠한 유효성 검사도 하지 않습니다.</span>
        <span class="token literal-property property">Post</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string">'title'</span> <span class="token operator">=></span> $request<span class="token operator">-</span><span class="token operator">></span>title<span class="token punctuation">,</span>
            <span class="token string">'body'</span> <span class="token operator">=></span> $request<span class="token operator">-</span><span class="token operator">></span>body
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>또한, 새 포스트를 저장할 때 모든 변수를 채우기 위해 포스트 모델에 $guarded 변수를 추가하겠습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php
<span class="token comment">// app\Models\Post.php</span>
namespace App\Models<span class="token punctuation">;</span>

use Illuminate\Database\Eloquent\Factories\HasFactory<span class="token punctuation">;</span>
use Illuminate\Database\Eloquent\Model<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Post</span> <span class="token keyword">extends</span> <span class="token class-name">Model</span>
<span class="token punctuation">{</span>
    use HasFactory<span class="token punctuation">;</span>

    <span class="token keyword">protected</span> $guarded <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>Boom! 한 번 테스트해 보자 🔥</p>
<p><img src="@source/docs/Nextjs/2024-04-05-LaravelInertiajsReactSimpleCRUDExample/img/LaravelInertiajsReactSimpleCRUDExample_2.png" alt="이미지"></p>
<p>제출 버튼을 클릭한 후 게시물 페이지로 돌아가서 만든 게시물을 보려면 아래로 스크롤하세요:</p>
<p><img src="@source/docs/Nextjs/2024-04-05-LaravelInertiajsReactSimpleCRUDExample/img/LaravelInertiajsReactSimpleCRUDExample_3.png" alt="이미지"></p>
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
<p>만약 모든 것을 올바르게 했다면 — 당신은 당신의 게시물을 페이지 맨 끝에 볼 것입니다. 그러니 여기에서 양식을 처리하는 방법을 배우고, 우리 CRUD 예제를 마무리해야 합니다. 따라서 편집, 업데이트, 표시, 그리고 삭제 기능을 만들어 봅시다.</p>
<h1 id="게시물-편집-및-업데이트" tabindex="-1"><a class="header-anchor" href="#게시물-편집-및-업데이트" aria-hidden="true">#</a> 게시물 편집 및 업데이트</h1>
<p>우선, Create.jsx 컴포넌트를 복사하여 Edit.jsx라는 새로운 컴포넌트를 만들어 봅시다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// resources/js/Pages/Edit.jsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@inertiajs/react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Edit</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> post <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">[</span>values<span class="token punctuation">,</span> setValues<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// Form fields</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> post<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
        <span class="token literal-property property">body</span><span class="token operator">:</span> post<span class="token punctuation">.</span>title
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">handleChange</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> key <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
        <span class="token keyword">const</span> value <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
        <span class="token function">setValues</span><span class="token punctuation">(</span><span class="token parameter">values</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token operator">...</span>values<span class="token punctuation">,</span>
            <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token operator">:</span> value<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        router<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/post/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>post<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span>Edit Post<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>form onSubmit<span class="token operator">=</span><span class="token punctuation">{</span>handleSubmit<span class="token punctuation">}</span><span class="token operator">></span>
                <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>Title<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator">&lt;</span>input id<span class="token operator">=</span><span class="token string">"title"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>values<span class="token punctuation">.</span>title<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>

                <span class="token operator">&lt;</span>label htmlFor<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span>Body<span class="token operator">:</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
                <span class="token operator">&lt;</span>textarea id<span class="token operator">=</span><span class="token string">"body"</span> value<span class="token operator">=</span><span class="token punctuation">{</span>values<span class="token punctuation">.</span>body<span class="token punctuation">}</span> onChange<span class="token operator">=</span><span class="token punctuation">{</span>handleChange<span class="token punctuation">}</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>textarea<span class="token operator">></span>
                <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span><span class="token operator">></span>Update<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>이제 편집 페이지를 렌더링하고 게시물을 업데이트하는 코드를 작성하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Http\Controllers<span class="token punctuation">;</span>

use App\Models\Post<span class="token punctuation">;</span>
use Illuminate\Http\Request<span class="token punctuation">;</span>
use Inertia\Inertia<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token doc-comment comment">/**
     * 특정 리소스를 편집하는 양식을 보여줍니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">edit</span><span class="token punctuation">(</span><span class="token parameter">Post $post</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token literal-property property">Inertia</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'Edit'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token string">'post'</span> <span class="token operator">=></span> $post
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 스토리지에 있는 특정 리소스를 업데이트합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">Request $request<span class="token punctuation">,</span> Post $post</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $post<span class="token operator">-</span><span class="token operator">></span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string">'title'</span> <span class="token operator">=></span> $request<span class="token operator">-</span><span class="token operator">></span>title<span class="token punctuation">,</span>
            <span class="token string">'body'</span> <span class="token operator">=></span> $request<span class="token operator">-</span><span class="token operator">></span>body
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>테스트를 진행한 후, 쇼 컴포넌트에 대한 코드를 작성하세요 (특별한 것은 없습니다 — 단지 프롭에서 내용을 표시합니다):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// resources/js/Pages/Show.jsx</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> post <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>post<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>다음 코드를 사용하여 함수를 보여주세요(그리고 여기에는 특별한 것이 없습니다, 그냥 간단한 렌더링 호출입니다):</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>namespace App\Http\Controllers<span class="token punctuation">;</span>

use App\Models\Post<span class="token punctuation">;</span>
use Illuminate\Http\Request<span class="token punctuation">;</span>
use Inertia\Inertia<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    
    <span class="token doc-comment comment">/**
     * Display the specified resource.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">Post $post</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token literal-property property">Inertia</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token string">'Show'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token string">'post'</span> <span class="token operator">=></span> $post
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>검토하고 다음 함수인 게시물 삭제에 대한 마지막 기능으로 이동하겠습니다.</p>
<h1 id="게시물-삭제-함수" tabindex="-1"><a class="header-anchor" href="#게시물-삭제-함수" aria-hidden="true">#</a> 게시물 삭제 함수</h1>
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
<p>아무것도 특별한 것은 없을 거에요. 그냥 하나의 함수 호출이 있을 뿐입니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Http\Controllers<span class="token punctuation">;</span>

use App\Models\Post<span class="token punctuation">;</span>
use Illuminate\Http\Request<span class="token punctuation">;</span>
use Inertia\Inertia<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">PostController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token doc-comment comment">/**
     * 저장소에서 지정된 리소스를 삭제합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token parameter">Post $post</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $post<span class="token operator">-</span><span class="token operator">></span><span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>그리고 이 함수를 어디서 호출할 건가요? Index.jsx 컴포넌트에서, 이렇게 호출할 수 있다고 보여드릴게요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@inertiajs/react'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Index</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> posts <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token function">deletePost</span><span class="token punctuation">(</span> <span class="token parameter">id</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        router<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/post/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span><span class="token operator">></span>
            <span class="token operator">&lt;</span>h1<span class="token operator">></span>나의 멋진 블로그<span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>
            <span class="token operator">&lt;</span>hr<span class="token operator">/</span><span class="token operator">></span>
            <span class="token punctuation">{</span> posts <span class="token operator">&amp;&amp;</span> posts<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>
                <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">></span>
                    <span class="token operator">&lt;</span>h2<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">></span>
                    <span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>body<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
                    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"button"</span> onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">deletePost</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">></span>삭제<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>위의 코드를 실행해보시면 요청이 수행되고 게시물이 사라지는 것을 확인할 수 있습니다.</p>
<h1 id="결론" tabindex="-1"><a class="header-anchor" href="#결론" aria-hidden="true">#</a> 결론</h1>
<p>앞서 말했듯이, 이 글에서는 React, Inertia, 그리고 Laravel을 사용한 매우 간단한 CRUD 예제를 만들어보겠습니다. React와 Inertia.js와 같은 주제는 Laravel 애플리케이션을 구축하려는 경우 개발 중에 사용할 수 있는 모든 기능과 기능을 보여주는 별도의 비디오가 필요합니다.</p>
<p>이번 튜토리얼은 여기서 마무리하겠습니다. 읽어주셔서 감사합니다 🤘🔥</p>
</div></template>
