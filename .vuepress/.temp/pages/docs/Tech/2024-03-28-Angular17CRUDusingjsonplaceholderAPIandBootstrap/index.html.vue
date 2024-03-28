<template><div><img src="@source/docs/Tech/2024-03-28-Angular17CRUDusingjsonplaceholderAPIandBootstrap/img/Angular17CRUDusingjsonplaceholderAPIandBootstrap_0.png" />
<p>JSONPlaceholder API 및 Bootstrap을 사용하여 CRUD 작업(Create, Read, Update, Delete)을 수행하는 단순화된 Angular 17 애플리케이션이 아래에 표시되어 있습니다. 이 가이드는 Angular CLI가 설치되어 있고 Angular 기초를 알고 있는 것을 전제로 합니다. Angular 17에서는 이 가이드에 영향을 줄 수 있는 새로운 기능이나 변경 사항이 있을 수 있습니다.</p>
<h1 id="단계-1-새-angular-프로젝트-생성" tabindex="-1"><a class="header-anchor" href="#단계-1-새-angular-프로젝트-생성" aria-hidden="true">#</a> 단계 1: 새 Angular 프로젝트 생성</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ng <span class="token keyword">new</span> <span class="token class-name">jsonplaceholder</span><span class="token operator">-</span>app
cd jsonplaceholder<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><!-- ui-log 수평형 -->
<p><ins class="adsbygoogle"
  style="display:block"
  data-ad-client="ca-pub-4877378276818686"
  data-ad-slot="9743150776"
  data-ad-format="auto"
  data-full-width-responsive="true"></ins></p>
<component is="script">
(adsbygoogle = window.adsbygoogle || []).push({});
</component>
<h1 id="단계-2-angular-httpclient-및-bootstrap-추가하기" tabindex="-1"><a class="header-anchor" href="#단계-2-angular-httpclient-및-bootstrap-추가하기" aria-hidden="true">#</a> 단계 2: Angular HttpClient 및 Bootstrap 추가하기</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>npm install bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"styles"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">"src/styles.css"</span><span class="token punctuation">,</span>
  <span class="token string">"node_modules/bootstrap/dist/css/bootstrap.min.css"</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>angular.json 파일을 열어 &quot;build&quot; 아래의 &quot;scripts&quot; 배열에 Bootstrap의 JavaScript 파일 경로를 추가하세요.</p>
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
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token string-property property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">"node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClientModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/common/http'</span><span class="token punctuation">;</span>
<span class="token comment">// 다른 imports...</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// 여러분의 컴포넌트들...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    BrowserModule<span class="token punctuation">,</span>
    AppRoutingModule<span class="token punctuation">,</span>
    HttpClientModule  <span class="token comment">// 이 줄을 추가해주세요</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bootstrap</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-3-api-호출을-위한-서비스-생성" tabindex="-1"><a class="header-anchor" href="#단계-3-api-호출을-위한-서비스-생성" aria-hidden="true">#</a> 단계 3: API 호출을 위한 서비스 생성</h1>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ng generate service data
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
<p>data.service.ts 파일에서 HttpClient를 주입하고 CRUD 작업을 위한 메서드를 정의하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/common/http'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'rxjs'</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">providedIn</span><span class="token operator">:</span> <span class="token string">'root'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> apiUrl <span class="token operator">=</span> <span class="token string">'https://jsonplaceholder.typicode.com/posts'</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">http</span><span class="token operator">:</span> HttpClient</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">getPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">createPost</span><span class="token punctuation">(</span>postData<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">;</span> body<span class="token operator">:</span> string<span class="token punctuation">;</span> userId<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token punctuation">,</span> postData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">updatePost</span><span class="token punctuation">(</span>id<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">postData</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">;</span> body<span class="token operator">:</span> string<span class="token punctuation">;</span> userId<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> postData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">deletePost</span><span class="token punctuation">(</span>id<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="단계-4-컴포넌트-및-템플릿-생성" tabindex="-1"><a class="header-anchor" href="#단계-4-컴포넌트-및-템플릿-생성" aria-hidden="true">#</a> 단계 4: 컴포넌트 및 템플릿 생성</h1>
<p>간단하게 하기 위해 서비스와 상호 작용하기 위해 앱 컴포넌트(app.component.ts 및 app.component.html)를 사용합시다.</p>
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
<p>app.component.ts에 DataService를 주입하고 사용하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@angular/core'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DataService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./data.service'</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">'app-root'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">'./app.component.html'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'./app.component.css'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">posts</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">dataService</span><span class="token operator">:</span> DataService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">loadPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">getPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>posts <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">addPost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newPost <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'New Post'</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">'This is a new post.'</span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">createPost</span><span class="token punctuation">(</span>newPost<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>newPost<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// For demonstration, prepend locally</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">updatePost</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">post</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> updatedPost <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>post<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Updated Title'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">updatePost</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>id<span class="token punctuation">,</span> updatedPost<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=></span> p<span class="token punctuation">.</span>id <span class="token operator">===</span> post<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>posts<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> updatedPost<span class="token punctuation">;</span>  <span class="token comment">// For demonstration, update locally</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">deletePost</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">deletePost</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>posts <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=></span> post<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app.component.html에는 게시물을 표시하고 작업을 수행하기 위한 버튼이 있는 간단한 UI를 추가하세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container mt-3"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn btn-success mb-3"</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">"addPost()"</span><span class="token operator">></span>게시물 추가<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token operator">*</span>ngFor<span class="token operator">=</span><span class="token string">"let post of posts; let i = index"</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"card mb-3"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"card-body"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>h5 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"card-title"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> post<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h5<span class="token operator">></span>
      <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"card-text"</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> post<span class="token punctuation">.</span>body <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn btn-primary"</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">"updatePost(post)"</span><span class="token operator">></span>수정<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
      <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"btn btn-danger"</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">"deletePost(post.id)"</span><span class="token operator">></span>삭제<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
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
<h1 id="애플리케이션-실행하기" tabindex="-1"><a class="header-anchor" href="#애플리케이션-실행하기" aria-hidden="true">#</a> 애플리케이션 실행하기</h1>
<p>다음 명령어로 애플리케이션을 실행해보세요:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>ng serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>브라우저에서 http://localhost:4200/을 방문하여 애플리케이션을 확인할 수 있습니다.</p>
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
<p>노트</p>
<p>이 예시는 데모를 위해 HTTP 요청 후 간단한 메모리 작업을 사용합니다. 실제 애플리케이션에서는 API 응답과 오류를 적절하게 처리해야 합니다. 사용자 경험을 향상시키기 위해 로딩 상태와 에러 처리를 구현하는 것을 고려해보세요.</p>
</div></template>
