<template><div><p><img src="@source/docs/Tech/2024-03-28-CreatingaCRUDCreateReadUpdateDeleteFORMinAngularandBootstrap/img/CreatingaCRUDCreateReadUpdateDeleteFORMinAngularandBootstrap_0.png" alt="이미지"></p>
<p>앵귤러에서 CRUD (생성, 읽기, 업데이트, 삭제) 폼을 만드는 것은 사용자 입력을 처리하기 위해 FormGroup을 사용하는 반응형 폼과 폼을 스타일링하기 위해 부트스트랩을 활용하는 과정을 포함합니다. 아래에는 항목을 추가하고 편집하는 폼을 만드는 간단한 예제가 있습니다 (CRUD의 &quot;CU&quot; 부분). 이 예제에서는 작업을 처리하는 서비스를 만드는 과정, 반응형 폼을 설정하는 방법, 그리고 스타일링을 위해 부트스트랩을 사용하는 방법을 다룰 것입니다.</p>
<h1 id="단계-1-앵귤러-프로젝트-설정" tabindex="-1"><a class="header-anchor" href="#단계-1-앵귤러-프로젝트-설정" aria-hidden="true">#</a> 단계 1: 앵귤러 프로젝트 설정</h1>
<p>이미 앵귤러 프로젝트를 설정하고 부트스트랩을 포함하지 않은 경우, 환경을 설정하기 위해 이전 답변에서 제안한 초기 단계를 따라주시기 바랍니다.</p>
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
<h1 id="단계-2-컴포넌트-및-서비스-생성" tabindex="-1"><a class="header-anchor" href="#단계-2-컴포넌트-및-서비스-생성" aria-hidden="true">#</a> 단계 2: 컴포넌트 및 서비스 생성</h1>
<p>CRUD 작업을 처리하기 위한 컴포넌트와 서비스를 생성하세요.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ng generate component item<span class="token operator">-</span>form
ng generate service item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-모델-생성-선택사항" tabindex="-1"><a class="header-anchor" href="#단계-3-모델-생성-선택사항" aria-hidden="true">#</a> 단계 3: 모델 생성 (선택사항)</h1>
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
<p>새로운 항목을 생성하고 읽고 업데이트 및 삭제하는 간단한 모델을 만드세요. src/app 디렉토리에 item.ts라는 새 파일을 만드세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Item</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-4-서비스-구현하기" tabindex="-1"><a class="header-anchor" href="#단계-4-서비스-구현하기" aria-hidden="true">#</a> 단계 4: 서비스 구현하기</h1>
<p>생성된 서비스 파일 (item.service.ts)에서는 이 예제를 위해 항목을 목록에 추가하는 시뮬레이션을 원할 수 있습니다.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Item <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./item'</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">providedIn</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ItemService</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token literal-property property">items</span><span class="token operator">:</span> Item<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">addItem</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">item</span><span class="token operator">:</span> Item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Item<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-5-반응형-폼-설정" tabindex="-1"><a class="header-anchor" href="#단계-5-반응형-폼-설정" aria-hidden="true">#</a> 단계 5: 반응형 폼 설정</h1>
<p>아이템 폼 컴포넌트에서 반응형 폼을 설정하세요. 먼저, app.module.ts에서 ReactiveFormsModule을 import하고 imports 배열에 추가해주세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveFormsModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/forms'</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 다른 컴포넌트</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 다른 모듈</span>
    ReactiveFormsModule
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<p>그럼 item-form.component.ts에서 FormGroup을 설정하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FormBuilder<span class="token punctuation">,</span> FormGroup<span class="token punctuation">,</span> Validators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/forms'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ItemService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'../item.service'</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'app-item-form'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">'./item-form.component.html'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./item-form.component.css'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ItemFormComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">itemForm</span><span class="token operator">:</span> FormGroup<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">fb</span><span class="token operator">:</span> FormBuilder<span class="token punctuation">,</span> <span class="token keyword">private</span> <span class="token literal-property property">itemService</span><span class="token operator">:</span> ItemService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>itemForm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">''</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">''</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>

  <span class="token function">onSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>itemForm<span class="token punctuation">.</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>itemService<span class="token punctuation">.</span><span class="token function">addItem</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>itemForm<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>itemForm<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-6-html에서-폼-생성하기" tabindex="-1"><a class="header-anchor" href="#단계-6-html에서-폼-생성하기" aria-hidden="true">#</a> 단계 6: HTML에서 폼 생성하기</h1>
<p>이제 item-form.component.html에서 Bootstrap 클래스를 사용하여 폼을 생성하세요:</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container mt-5"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>form <span class="token punctuation">[</span>formGroup<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"itemForm"</span> <span class="token punctuation">(</span>ngSubmit<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">"onSubmit()"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"mb-3"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"id"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"form-label"</span><span class="token operator">></span><span class="token constant">ID</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"form-control"</span> id<span class="token operator">=</span><span class="token string">"id"</span> formControlName<span class="token operator">=</span><span class="token string">"id"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"mb-3"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"name"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"form-label"</span><span class="token operator">></span>이름<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">></span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"form-control"</span> id<span class="token operator">=</span><span class="token string">"name"</span> formControlName<span class="token operator">=</span><span class="token string">"name"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"submit"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn btn-primary"</span><span class="token operator">></span>제출<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-7-애플리케이션-실행" tabindex="-1"><a class="header-anchor" href="#단계-7-애플리케이션-실행" aria-hidden="true">#</a> 단계 7: 애플리케이션 실행</h1>
<p>애플리케이션을 실행하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ng serve
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
<p>http://localhost:4200/ 으로 이동하면 부트스트랩으로 스타일이 적용된 양식을 볼 수 있습니다.</p>
<p>이 예제는 항목을 추가하기 위해 양식을 생성하고 제출하는 내용을 다룹니다. 전체 CRUD 기능을 구현하려면 서비스를 확장하여 항목을 읽기, 수정 및 삭제할 수 있도록 처리하고 필요에 따라 추가 컴포넌트나 메소드를 생성해야 합니다. 실제 데이터의 영속성(예: 데이터베이스)은 서버 측 통합이 필요하며, 이 예제에서 다루지 않는 부분입니다.</p>
<h1 id="stackademic-🎓" tabindex="-1"><a class="header-anchor" href="#stackademic-🎓" aria-hidden="true">#</a> Stackademic 🎓</h1>
<p>끝까지 읽어주셔서 감사합니다. 마지막으로 가기 전에:</p>
<!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component></div></template>
