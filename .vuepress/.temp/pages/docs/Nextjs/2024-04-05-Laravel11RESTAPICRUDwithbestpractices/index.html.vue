<template><div><p><img src="@source/docs/Nextjs/2024-04-05-Laravel11RESTAPICRUDwithbestpractices/img/Laravel11RESTAPICRUDwithbestpractices_0.png" alt="이미지"></p>
<p>라라벨 11에서 RESTful API CRUD 애플리케이션을 만드는 것은 라라벨 애플리케이션 설정, 라우트 정의, 유효성 검사, 모델, 리소스 정의, 컨트롤러 생성, Repository 디자인 패턴 구현 및 모델 작업을 포함합니다. 이를 달성하는 방법에 대한 단계별 가이드는 다음과 같습니다:</p>
<h2 id="단계-1-라라벨-설정" tabindex="-1"><a class="header-anchor" href="#단계-1-라라벨-설정" aria-hidden="true">#</a> 단계 1: 라라벨 설정</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>composer create<span class="token operator">-</span>project <span class="token operator">--</span>prefer<span class="token operator">-</span>dist laravel<span class="token operator">/</span>laravel rest<span class="token operator">-</span>api<span class="token operator">-</span>crud
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
<h2 id="단계-2-mysql-데이터베이스-구성" tabindex="-1"><a class="header-anchor" href="#단계-2-mysql-데이터베이스-구성" aria-hidden="true">#</a> 단계 2: Mysql 데이터베이스 구성</h2>
<p>Laravel 11의 기본 DB_CONNECTION은 sqlite입니다. 이를 DB_CONNECTION=mysql로 변경해야 env 파일에 있습니다.</p>
<p><img src="@source/docs/Nextjs/2024-04-05-Laravel11RESTAPICRUDwithbestpractices/img/Laravel11RESTAPICRUDwithbestpractices_1.png" alt="이미지"></p>
<h2 id="단계-03-마이그레이션과-함께-product-model-생성" tabindex="-1"><a class="header-anchor" href="#단계-03-마이그레이션과-함께-product-model-생성" aria-hidden="true">#</a> 단계 03: 마이그레이션과 함께 Product Model 생성</h2>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>php artisan make<span class="token operator">:</span>model Product <span class="token operator">-</span>a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="단계-04-마이그레이션" tabindex="-1"><a class="header-anchor" href="#단계-04-마이그레이션" aria-hidden="true">#</a> 단계 04: 마이그레이션</h2>
<p>database/migrations/YYYY_MM_DD_HHMMSS_create_products_table.php에서 다음과 일치하도록 up 함수를 업데이트하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code> <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">up</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">Schema</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">'products'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Blueprint $table</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            $table<span class="token operator">-</span><span class="token operator">></span><span class="token function">id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $table<span class="token operator">-</span><span class="token operator">></span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $table<span class="token operator">-</span><span class="token operator">></span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">'details'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            $table<span class="token operator">-</span><span class="token operator">></span><span class="token function">timestamps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="단계-05-제품-인터페이스-생성" tabindex="-1"><a class="header-anchor" href="#단계-05-제품-인터페이스-생성" aria-hidden="true">#</a> 단계 05: 제품 인터페이스 생성</h2>
<p>제품 모델을 위한 저장소 인터페이스를 생성하세요. 이 분리는 더 깨끗하고 유지보수가 쉬운 코드를 작성할 수 있게 도와줍니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>php artisan make<span class="token operator">:</span><span class="token keyword">interface</span> <span class="token operator">/</span>Interfaces<span class="token operator">/</span>ProductRepositoryInterface
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Interfaces 폴더 안에 ProductRepositoryInterface.php라는 새 파일을 생성하고 다음 코드를 추가하세요.```</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Interfaces<span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">ProductRepositoryInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token parameter">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">store</span><span class="token punctuation">(</span><span class="token parameter">array $data</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">array $data<span class="token punctuation">,</span>$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token parameter">$id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="step-06-제품-리포지토리-클래스-만들기" tabindex="-1"><a class="header-anchor" href="#step-06-제품-리포지토리-클래스-만들기" aria-hidden="true">#</a> Step 06: 제품 리포지토리 클래스 만들기</h2>
<p>Product 모델을 위한 리포지토리 클래스를 만듭니다.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>php artisan make<span class="token operator">:</span><span class="token keyword">class</span> <span class="token operator">/</span>Repositories<span class="token operator">/</span>ProductRepository
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
<p>수업에서 ProductRepository.php라는 새 파일을 만들고 다음 코드를 추가하십시오.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Repository<span class="token punctuation">;</span>
use App\Models\Product<span class="token punctuation">;</span>
use App\Interfaces\ProductRepositoryInterface<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">ProductReposiotry</span> <span class="token keyword">implements</span> <span class="token class-name">ProductRepositoryInterface</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token literal-property property">Product</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">getById</span><span class="token punctuation">(</span><span class="token parameter">$id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token literal-property property">Product</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">findOrFail</span><span class="token punctuation">(</span>$id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">store</span><span class="token punctuation">(</span><span class="token parameter">array $data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token literal-property property">Product</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">create</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">array $data<span class="token punctuation">,</span>$id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token literal-property property">Product</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">whereId</span><span class="token punctuation">(</span>$id<span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">update</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token parameter">$id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token literal-property property">Product</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">destroy</span><span class="token punctuation">(</span>$id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-07-인터페이스와-구현체를-바인딩하기" tabindex="-1"><a class="header-anchor" href="#단계-07-인터페이스와-구현체를-바인딩하기" aria-hidden="true">#</a> 단계 07: 인터페이스와 구현체를 바인딩하기</h2>
<p>해야 할 일은 ProductRepository를 ProductRepositoryInterface에 바인딩하는 것입니다. 이를 서비스 프로바이더를 통해 수행합니다. 다음 명령어를 사용하여 하나를 생성하십시오.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>php artisan make<span class="token operator">:</span>provider RepositoryServiceProvider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>app/Providers/RepositoryServiceProvider.php 파일을 열고 register 함수를 아래와 일치하도록 업데이트하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Providers<span class="token punctuation">;</span>

use Illuminate\Support\ServiceProvider<span class="token punctuation">;</span>
use App\Interfaces\ProductRepositoryInterface<span class="token punctuation">;</span>
use App\Repository\ProductRepository<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">RepositoryServiceProvider</span> <span class="token keyword">extends</span> <span class="token class-name">ServiceProvider</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 서비스 등록.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">{</span>
        $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>app<span class="token operator">-</span><span class="token operator">></span><span class="token function">bind</span><span class="token punctuation">(</span>ProductRepositoryInterface<span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token literal-property property">ProductRepository</span><span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 서비스 부트스트랩.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-08-요청-유효성-검사" tabindex="-1"><a class="header-anchor" href="#단계-08-요청-유효성-검사" aria-hidden="true">#</a> 단계 08: 요청 유효성 검사```</h2>
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
<p>두 가지 요청 StoreProductRequest 및 UpdateProductRequest를 만든 후 다음 코드를 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Http\Requests<span class="token punctuation">;</span>

use Illuminate\Foundation\Http\FormRequest<span class="token punctuation">;</span>
use Illuminate\Http\Exceptions\HttpResponseException<span class="token punctuation">;</span>
use Illuminate\Contracts\Validation\Validator<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">StoreProductRequest</span> <span class="token keyword">extends</span> <span class="token class-name">FormRequest</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 사용자가 이 요청을 수행할 권한이 있는지 확인합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> bool
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 요청에 적용되는 유효성 규칙을 가져옵니다.
     *
     * <span class="token keyword">@return</span> array&lt;string, \Illuminate\Contracts\Validation\ValidationRule|array&lt;mixed>|string>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> array
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string">'name'</span> <span class="token operator">=></span> <span class="token string">'required'</span><span class="token punctuation">,</span>
            <span class="token string">'details'</span> <span class="token operator">=></span> <span class="token string">'required'</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">failedValidation</span><span class="token punctuation">(</span><span class="token parameter">Validator $validator</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpResponseException</span><span class="token punctuation">(</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string">'success'</span>   <span class="token operator">=></span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string">'message'</span>   <span class="token operator">=></span> <span class="token string">'유효성 검사 오류'</span><span class="token punctuation">,</span>
            <span class="token string">'data'</span>      <span class="token operator">=></span> $validator<span class="token operator">-</span><span class="token operator">></span><span class="token function">errors</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Http\Requests<span class="token punctuation">;</span>

use Illuminate\Foundation\Http\FormRequest<span class="token punctuation">;</span>
use Illuminate\Http\Exceptions\HttpResponseException<span class="token punctuation">;</span>
use Illuminate\Contracts\Validation\Validator<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">UpdateProductRequest</span> <span class="token keyword">extends</span> <span class="token class-name">FormRequest</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 사용자가 이 요청을 수행할 권한이 있는지 확인합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> bool
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 요청에 적용되는 유효성 규칙을 가져옵니다.
     *
     * <span class="token keyword">@return</span> array&lt;string, \Illuminate\Contracts\Validation\ValidationRule|array&lt;mixed>|string>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">rules</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> array
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string">'name'</span> <span class="token operator">=></span> <span class="token string">'required'</span><span class="token punctuation">,</span>
            <span class="token string">'details'</span> <span class="token operator">=></span> <span class="token string">'required'</span>
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">failedValidation</span><span class="token punctuation">(</span><span class="token parameter">Validator $validator</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpResponseException</span><span class="token punctuation">(</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
            <span class="token string">'success'</span>   <span class="token operator">=></span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token string">'message'</span>   <span class="token operator">=></span> <span class="token string">'유효성 검사 오류'</span><span class="token punctuation">,</span>
            <span class="token string">'data'</span>      <span class="token operator">=></span> $validator<span class="token operator">-</span><span class="token operator">></span><span class="token function">errors</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-09-공통-apiresponseclass-생성하기" tabindex="-1"><a class="header-anchor" href="#단계-09-공통-apiresponseclass-생성하기" aria-hidden="true">#</a> 단계 09: 공통 ApiResponseClass 생성하기</h2>
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
<p>이 흔한 응답 클래스는 가장 좋은 실천 방법입니다. 왜냐하면 응답을 보낼 수 있는 'con' 함수를 사용할 수 있기 때문입니다. 다음 명령을 사용하여 하나를 생성하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>php artisan make<span class="token operator">:</span><span class="token keyword">class</span> <span class="token operator">/</span>Classes<span class="token operator">/</span>ApiResponseClass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>아래 코드를 추가하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Classes<span class="token punctuation">;</span>
use Illuminate\Support\Facades\<span class="token constant">DB</span><span class="token punctuation">;</span>
use Illuminate\Http\Exceptions\HttpResponseException<span class="token punctuation">;</span>
use Illuminate\Support\Facades\Log<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">ApiResponseClass</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">rollback</span><span class="token punctuation">(</span>$e<span class="token punctuation">,</span> $message <span class="token operator">=</span><span class="token string">"문제가 발생했습니다! 프로세스가 완료되지 않았습니다."</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token constant">DB</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">rollBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token literal-property property">self</span><span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">throw</span><span class="token punctuation">(</span>$e<span class="token punctuation">,</span> $message<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token keyword">throw</span><span class="token punctuation">(</span>$e<span class="token punctuation">,</span> $message <span class="token operator">=</span><span class="token string">"문제가 발생했습니다! 프로세스가 완료되지 않았습니다."</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token literal-property property">Log</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">info</span><span class="token punctuation">(</span>$e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">HttpResponseException</span><span class="token punctuation">(</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"message"</span><span class="token operator">=></span> $message<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function">sendResponse</span><span class="token punctuation">(</span><span class="token parameter">$result <span class="token punctuation">,</span> $message <span class="token punctuation">,</span>$code<span class="token operator">=</span><span class="token number">200</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        $response<span class="token operator">=</span><span class="token punctuation">[</span>
            <span class="token string">'success'</span> <span class="token operator">=></span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token string">'data'</span>    <span class="token operator">=></span> $result
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">empty</span><span class="token punctuation">(</span>$message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            $response<span class="token punctuation">[</span><span class="token string">'message'</span><span class="token punctuation">]</span> <span class="token operator">=</span>$message<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">json</span><span class="token punctuation">(</span>$response<span class="token punctuation">,</span> $code<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="단계-10-제품-리소스-생성" tabindex="-1"><a class="header-anchor" href="#단계-10-제품-리소스-생성" aria-hidden="true">#</a> 단계 10: 제품 리소스 생성</h2>
<p>다음 명령어를 사용하여 하나를 만드세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>php artisan make<span class="token operator">:</span>resource ProductResource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>그리고 다음 코드를 추가하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Http\Resources<span class="token punctuation">;</span>

use Illuminate\Http\Request<span class="token punctuation">;</span>
use Illuminate\Http\Resources\Json\JsonResource<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ProductResource</span> <span class="token keyword">extends</span> <span class="token class-name">JsonResource</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 리소스를 배열로 변환합니다.
     *
     * <span class="token keyword">@return</span> array&lt;string, mixed>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span><span class="token operator">:</span> array
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span>
            <span class="token string">'id'</span> <span class="token operator">=></span>$<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>id<span class="token punctuation">,</span>
            <span class="token string">'name'</span> <span class="token operator">=></span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>name<span class="token punctuation">,</span>
            <span class="token string">'details'</span> <span class="token operator">=></span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>details
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-11-productcontroller-클래스" tabindex="-1"><a class="header-anchor" href="#단계-11-productcontroller-클래스" aria-hidden="true">#</a> 단계 11: ProductController 클래스</h2>
<p>저희가 준비한 저장소가 준비되었으니, 컨트롤러에 몇 줄 코드를 추가해봅시다. app/Http/Controllers/ProductController.php 파일을 열고 다음 코드와 일치하도록 업데이트해주세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

namespace App\Http\Controllers<span class="token punctuation">;</span>

use App\Models\Product<span class="token punctuation">;</span>
use App\Http\Requests\StoreProductRequest<span class="token punctuation">;</span>
use App\Http\Requests\UpdateProductRequest<span class="token punctuation">;</span>
use App\Interfaces\ProductRepositoryInterface<span class="token punctuation">;</span>
use App\Classes\ResponseClass<span class="token punctuation">;</span>
use App\Http\Resources\ProductResource<span class="token punctuation">;</span>
use Illuminate\Support\Facades\<span class="token constant">DB</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ProductController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> ProductRepositoryInterface $productRepositoryInterface<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">__construct</span><span class="token punctuation">(</span><span class="token parameter">ProductRepositoryInterface $productRepositoryInterface</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>productRepositoryInterface <span class="token operator">=</span> $productRepositoryInterface<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 리소스 목록을 표시합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $data <span class="token operator">=</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>productRepositoryInterface<span class="token operator">-</span><span class="token operator">></span><span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token literal-property property">ResponseClass</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">sendResponse</span><span class="token punctuation">(</span>ProductResource<span class="token operator">:</span><span class="token operator">:</span><span class="token function">collection</span><span class="token punctuation">(</span>$data<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 새로운 리소스를 만들기 위한 양식을 표시합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 새로운 리소스를 저장소에 저장합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">store</span><span class="token punctuation">(</span><span class="token parameter">StoreProductRequest $request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $details <span class="token operator">=</span><span class="token punctuation">[</span>
            <span class="token string">'name'</span> <span class="token operator">=></span> $request<span class="token operator">-</span><span class="token operator">></span>name<span class="token punctuation">,</span>
            <span class="token string">'details'</span> <span class="token operator">=></span> $request<span class="token operator">-</span><span class="token operator">></span>details
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token constant">DB</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">beginTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
             $product <span class="token operator">=</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>productRepositoryInterface<span class="token operator">-</span><span class="token operator">></span><span class="token function">store</span><span class="token punctuation">(</span>$details<span class="token punctuation">)</span><span class="token punctuation">;</span>

             <span class="token constant">DB</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token literal-property property">ResponseClass</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">sendResponse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProductResource</span><span class="token punctuation">(</span>$product<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'Product Create Successful'</span><span class="token punctuation">,</span><span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>\Exception $ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token literal-property property">ResponseClass</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">rollback</span><span class="token punctuation">(</span>$ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 특정 리소스를 표시합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">show</span><span class="token punctuation">(</span><span class="token parameter">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $product <span class="token operator">=</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>productRepositoryInterface<span class="token operator">-</span><span class="token operator">></span><span class="token function">getById</span><span class="token punctuation">(</span>$id<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token literal-property property">ResponseClass</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">sendResponse</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ProductResource</span><span class="token punctuation">(</span>$product<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 특정 리소스를 편집하기 위한 양식을 표시합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">edit</span><span class="token punctuation">(</span><span class="token parameter">Product $product</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 특정 리소스를 저장소에서 업데이트합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token parameter">UpdateProductRequest $request<span class="token punctuation">,</span> $id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        $updateDetails <span class="token operator">=</span><span class="token punctuation">[</span>
            <span class="token string">'name'</span> <span class="token operator">=></span> $request<span class="token operator">-</span><span class="token operator">></span>name<span class="token punctuation">,</span>
            <span class="token string">'details'</span> <span class="token operator">=></span> $request<span class="token operator">-</span><span class="token operator">></span>details
        <span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token constant">DB</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">beginTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
             $product <span class="token operator">=</span> $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>productRepositoryInterface<span class="token operator">-</span><span class="token operator">></span><span class="token function">update</span><span class="token punctuation">(</span>$updateDetails<span class="token punctuation">,</span>$id<span class="token punctuation">)</span><span class="token punctuation">;</span>

             <span class="token constant">DB</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token keyword">return</span> <span class="token literal-property property">ResponseClass</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">sendResponse</span><span class="token punctuation">(</span><span class="token string">'Product Update Successful'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token number">201</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>\Exception $ex<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token literal-property property">ResponseClass</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">rollback</span><span class="token punctuation">(</span>$ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 특정 리소스를 저장소에서 삭제합니다.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token parameter">$id</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
         $<span class="token keyword">this</span><span class="token operator">-</span><span class="token operator">></span>productRepositoryInterface<span class="token operator">-</span><span class="token operator">></span><span class="token keyword">delete</span><span class="token punctuation">(</span>$id<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token literal-property property">ResponseClass</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">sendResponse</span><span class="token punctuation">(</span><span class="token string">'Product Delete Successful'</span><span class="token punctuation">,</span><span class="token string">''</span><span class="token punctuation">,</span><span class="token number">204</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h2 id="단계-12-api-라우트" tabindex="-1"><a class="header-anchor" href="#단계-12-api-라우트" aria-hidden="true">#</a> 단계 12: API 라우트</h2>
<p>다음 명령을 실행하면 API 라우트 파일을 게시할 수 있습니다:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>php artisan install<span class="token operator">:</span>api
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>컨트롤러에서 정의된 각 메서드를 특정 라우트에 매핑하려면 routes/api.php에 다음 코드를 추가하십시오.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">?</span>php

use Illuminate\Http\Request<span class="token punctuation">;</span>
use Illuminate\Support\Facades\Route<span class="token punctuation">;</span>
use App\Http\Controllers\ProductController<span class="token punctuation">;</span>
<span class="token literal-property property">Route</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/user'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Request $request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> $request<span class="token operator">-</span><span class="token operator">></span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token operator">></span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token string">'auth:sanctum'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token literal-property property">Route</span><span class="token operator">:</span><span class="token operator">:</span><span class="token function">apiResource</span><span class="token punctuation">(</span><span class="token string">'/products'</span><span class="token punctuation">,</span><span class="token literal-property property">ProductController</span><span class="token operator">:</span><span class="token operator">:</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>프로젝트를 실행할 수 있습니다.</p>
<p>감사합니다..........</p>
</div></template>
