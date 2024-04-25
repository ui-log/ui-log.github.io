import{_ as c}from"./app.3052dcfb.js";import{l as n,m as l,E as s,G as a,p as t,Y as p,K as o,C as e}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/Angular17CRUDusingjsonplaceholderAPIandBootstrap_0.01518521.png";const u={},r=o('<img src="'+i+`"><p>JSONPlaceholder API \uBC0F Bootstrap\uC744 \uC0AC\uC6A9\uD558\uC5EC CRUD \uC791\uC5C5(Create, Read, Update, Delete)\uC744 \uC218\uD589\uD558\uB294 \uB2E8\uC21C\uD654\uB41C Angular 17 \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC774 \uC544\uB798\uC5D0 \uD45C\uC2DC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uAC00\uC774\uB4DC\uB294 Angular CLI\uAC00 \uC124\uCE58\uB418\uC5B4 \uC788\uACE0 Angular \uAE30\uCD08\uB97C \uC54C\uACE0 \uC788\uB294 \uAC83\uC744 \uC804\uC81C\uB85C \uD569\uB2C8\uB2E4. Angular 17\uC5D0\uC11C\uB294 \uC774 \uAC00\uC774\uB4DC\uC5D0 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uB294 \uC0C8\uB85C\uC6B4 \uAE30\uB2A5\uC774\uB098 \uBCC0\uACBD \uC0AC\uD56D\uC774 \uC788\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h1 id="\u1103\u1161\u11AB\u1100\u1168-1-\u1109\u1162-angular-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-1-\u1109\u1162-angular-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 1: \uC0C8 Angular \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ng <span class="token keyword">new</span> <span class="token class-name">jsonplaceholder</span><span class="token operator">-</span>app
cd jsonplaceholder<span class="token operator">-</span>app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o(`<h1 id="\u1103\u1161\u11AB\u1100\u1168-2-angular-httpclient-\u1106\u1175\u11BE-bootstrap-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-angular-httpclient-\u1106\u1175\u11BE-bootstrap-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 2: Angular HttpClient \uBC0F Bootstrap \uCD94\uAC00\uD558\uAE30</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm install bootstrap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;styles&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;src/styles.css&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;node_modules/bootstrap/dist/css/bootstrap.min.css&quot;</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>angular.json \uD30C\uC77C\uC744 \uC5F4\uC5B4 &quot;build&quot; \uC544\uB798\uC758 &quot;scripts&quot; \uBC30\uC5F4\uC5D0 Bootstrap\uC758 JavaScript \uD30C\uC77C \uACBD\uB85C\uB97C \uCD94\uAC00\uD558\uC138\uC694.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),d=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token string">&quot;node_modules/bootstrap/dist/js/bootstrap.bundle.min.js&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClientModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common/http&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \uB2E4\uB978 imports...</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \uC5EC\uB7EC\uBD84\uC758 \uCEF4\uD3EC\uB10C\uD2B8\uB4E4...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    BrowserModule<span class="token punctuation">,</span>
    AppRoutingModule<span class="token punctuation">,</span>
    HttpClientModule  <span class="token comment">// \uC774 \uC904\uC744 \uCD94\uAC00\uD574\uC8FC\uC138\uC694</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">providers</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">bootstrap</span><span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-3-api-\u1112\u1169\u110E\u116E\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1109\u1165\u1107\u1175\u1109\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-api-\u1112\u1169\u110E\u116E\u11AF\u110B\u1173\u11AF-\u110B\u1171\u1112\u1161\u11AB-\u1109\u1165\u1107\u1175\u1109\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 3: API \uD638\uCD9C\uC744 \uC704\uD55C \uC11C\uBE44\uC2A4 \uC0DD\uC131</h1><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ng generate service data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),v=o(`<p>data.service.ts \uD30C\uC77C\uC5D0\uC11C HttpClient\uB97C \uC8FC\uC785\uD558\uACE0 CRUD \uC791\uC5C5\uC744 \uC704\uD55C \uBA54\uC11C\uB4DC\uB97C \uC815\uC758\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> HttpClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/common/http&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Observable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rxjs&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">providedIn</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">DataService</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> apiUrl <span class="token operator">=</span> <span class="token string">&#39;https://jsonplaceholder.typicode.com/posts&#39;</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">http</span><span class="token operator">:</span> HttpClient</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">getPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">createPost</span><span class="token punctuation">(</span>postData<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">;</span> body<span class="token operator">:</span> string<span class="token punctuation">;</span> userId<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token punctuation">,</span> postData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">updatePost</span><span class="token punctuation">(</span>id<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">postData</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">;</span> body<span class="token operator">:</span> string<span class="token punctuation">;</span> userId<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> postData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">deletePost</span><span class="token punctuation">(</span>id<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> Observable<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>http<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>apiUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-4-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1106\u1175\u11BE-\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1106\u1175\u11BE-\u1110\u1166\u11B7\u1111\u1173\u11AF\u1105\u1175\u11BA-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 4: \uCEF4\uD3EC\uB10C\uD2B8 \uBC0F \uD15C\uD50C\uB9BF \uC0DD\uC131</h1><p>\uAC04\uB2E8\uD558\uAC8C \uD558\uAE30 \uC704\uD574 \uC11C\uBE44\uC2A4\uC640 \uC0C1\uD638 \uC791\uC6A9\uD558\uAE30 \uC704\uD574 \uC571 \uCEF4\uD3EC\uB10C\uD2B8(app.component.ts \uBC0F app.component.html)\uB97C \uC0AC\uC6A9\uD569\uC2DC\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),m=o(`<p>app.component.ts\uC5D0 DataService\uB97C \uC8FC\uC785\uD558\uACE0 \uC0AC\uC6A9\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DataService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./data.service&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;app-root&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">&#39;./app.component.html&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./app.component.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">posts</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">dataService</span><span class="token operator">:</span> DataService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token function">ngOnInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">loadPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">getPosts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>posts <span class="token operator">=</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">addPost</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> newPost <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;New Post&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">&#39;This is a new post.&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">userId</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">createPost</span><span class="token punctuation">(</span>newPost<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>newPost<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// For demonstration, prepend locally</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">updatePost</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">post</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> updatedPost <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>post<span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;Updated Title&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">updatePost</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>id<span class="token punctuation">,</span> updatedPost<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>id <span class="token operator">===</span> post<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>posts<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> updatedPost<span class="token punctuation">;</span>  <span class="token comment">// For demonstration, update locally</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">deletePost</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataService<span class="token punctuation">.</span><span class="token function">deletePost</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>posts <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>posts<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> post<span class="token punctuation">.</span>id <span class="token operator">!==</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app.component.html\uC5D0\uB294 \uAC8C\uC2DC\uBB3C\uC744 \uD45C\uC2DC\uD558\uACE0 \uC791\uC5C5\uC744 \uC218\uD589\uD558\uAE30 \uC704\uD55C \uBC84\uD2BC\uC774 \uC788\uB294 \uAC04\uB2E8\uD55C UI\uB97C \uCD94\uAC00\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container mt-3&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-success mb-3&quot;</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&quot;addPost()&quot;</span><span class="token operator">&gt;</span>\uAC8C\uC2DC\uBB3C \uCD94\uAC00<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token operator">*</span>ngFor<span class="token operator">=</span><span class="token string">&quot;let post of posts; let i = index&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card mb-3&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card-body&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>h5 <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card-title&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> post<span class="token punctuation">.</span>title <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h5<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;card-text&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span> post<span class="token punctuation">.</span>body <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-primary&quot;</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&quot;updatePost(post)&quot;</span><span class="token operator">&gt;</span>\uC218\uC815<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-danger&quot;</span> <span class="token punctuation">(</span>click<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&quot;deletePost(post.id)&quot;</span><span class="token operator">&gt;</span>\uC0AD\uC81C<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=o(`<h1 id="\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1175\u11AF\u1112\u1162\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2E4\uD589\uD558\uAE30</h1><p>\uB2E4\uC74C \uBA85\uB839\uC5B4\uB85C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD574\uBCF4\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ng serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C http://localhost:4200/\uC744 \uBC29\uBB38\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=e("p",null,"\uB178\uD2B8",-1),y=e("p",null,"\uC774 \uC608\uC2DC\uB294 \uB370\uBAA8\uB97C \uC704\uD574 HTTP \uC694\uCCAD \uD6C4 \uAC04\uB2E8\uD55C \uBA54\uBAA8\uB9AC \uC791\uC5C5\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC2E4\uC81C \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0\uC11C\uB294 API \uC751\uB2F5\uACFC \uC624\uB958\uB97C \uC801\uC808\uD558\uAC8C \uCC98\uB9AC\uD574\uC57C \uD569\uB2C8\uB2E4. \uC0AC\uC6A9\uC790 \uACBD\uD5D8\uC744 \uD5A5\uC0C1\uC2DC\uD0A4\uAE30 \uC704\uD574 \uB85C\uB529 \uC0C1\uD0DC\uC640 \uC5D0\uB7EC \uCC98\uB9AC\uB97C \uAD6C\uD604\uD558\uB294 \uAC83\uC744 \uACE0\uB824\uD574\uBCF4\uC138\uC694.",-1);function h(w,f){return n(),l("div",null,[r,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),s(p("script"),null,{default:a(()=>[t(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,y])}var I=c(u,[["render",h],["__file","index.html.vue"]]);export{I as default};
