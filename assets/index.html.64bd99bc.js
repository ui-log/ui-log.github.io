import{_ as l}from"./app.63e06a35.js";import{l as n,m as c,E as t,G as p,p as a,Y as e,C as s,K as o}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/CreatingaCRUDCreateReadUpdateDeleteFORMinAngularandBootstrap_0.7bc972c7.png";const r={},u=s("p",null,[s("img",{src:i,alt:"\uC774\uBBF8\uC9C0"})],-1),d=s("p",null,'\uC575\uADE4\uB7EC\uC5D0\uC11C CRUD (\uC0DD\uC131, \uC77D\uAE30, \uC5C5\uB370\uC774\uD2B8, \uC0AD\uC81C) \uD3FC\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC740 \uC0AC\uC6A9\uC790 \uC785\uB825\uC744 \uCC98\uB9AC\uD558\uAE30 \uC704\uD574 FormGroup\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC18\uC751\uD615 \uD3FC\uACFC \uD3FC\uC744 \uC2A4\uD0C0\uC77C\uB9C1\uD558\uAE30 \uC704\uD574 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uC744 \uD65C\uC6A9\uD558\uB294 \uACFC\uC815\uC744 \uD3EC\uD568\uD569\uB2C8\uB2E4. \uC544\uB798\uC5D0\uB294 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD558\uACE0 \uD3B8\uC9D1\uD558\uB294 \uD3FC\uC744 \uB9CC\uB4DC\uB294 \uAC04\uB2E8\uD55C \uC608\uC81C\uAC00 \uC788\uC2B5\uB2C8\uB2E4 (CRUD\uC758 "CU" \uBD80\uBD84). \uC774 \uC608\uC81C\uC5D0\uC11C\uB294 \uC791\uC5C5\uC744 \uCC98\uB9AC\uD558\uB294 \uC11C\uBE44\uC2A4\uB97C \uB9CC\uB4DC\uB294 \uACFC\uC815, \uBC18\uC751\uD615 \uD3FC\uC744 \uC124\uC815\uD558\uB294 \uBC29\uBC95, \uADF8\uB9AC\uACE0 \uC2A4\uD0C0\uC77C\uB9C1\uC744 \uC704\uD574 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uC744 \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC744 \uB2E4\uB8F0 \uAC83\uC785\uB2C8\uB2E4.',-1),k=s("h1",{id:"\u1103\u1161\u11AB\u1100\u1168-1-\u110B\u1162\u11BC\u1100\u1172\u11AF\u1105\u1165-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1103\u1161\u11AB\u1100\u1168-1-\u110B\u1162\u11BC\u1100\u1172\u11AF\u1105\u1165-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC","aria-hidden":"true"},"#"),a(" \uB2E8\uACC4 1: \uC575\uADE4\uB7EC \uD504\uB85C\uC81D\uD2B8 \uC124\uC815")],-1),m=s("p",null,"\uC774\uBBF8 \uC575\uADE4\uB7EC \uD504\uB85C\uC81D\uD2B8\uB97C \uC124\uC815\uD558\uACE0 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uC744 \uD3EC\uD568\uD558\uC9C0 \uC54A\uC740 \uACBD\uC6B0, \uD658\uACBD\uC744 \uC124\uC815\uD558\uAE30 \uC704\uD574 \uC774\uC804 \uB2F5\uBCC0\uC5D0\uC11C \uC81C\uC548\uD55C \uCD08\uAE30 \uB2E8\uACC4\uB97C \uB530\uB77C\uC8FC\uC2DC\uAE30 \uBC14\uB78D\uB2C8\uB2E4.",-1),v=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),b=o(`<h1 id="\u1103\u1161\u11AB\u1100\u1168-2-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1106\u1175\u11BE-\u1109\u1165\u1107\u1175\u1109\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-2-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1106\u1175\u11BE-\u1109\u1165\u1107\u1175\u1109\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 2: \uCEF4\uD3EC\uB10C\uD2B8 \uBC0F \uC11C\uBE44\uC2A4 \uC0DD\uC131</h1><p>CRUD \uC791\uC5C5\uC744 \uCC98\uB9AC\uD558\uAE30 \uC704\uD55C \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uC11C\uBE44\uC2A4\uB97C \uC0DD\uC131\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ng generate component item<span class="token operator">-</span>form
ng generate service item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-3-\u1106\u1169\u1103\u1166\u11AF-\u1109\u1162\u11BC\u1109\u1165\u11BC-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1109\u1161\u1112\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-3-\u1106\u1169\u1103\u1166\u11AF-\u1109\u1162\u11BC\u1109\u1165\u11BC-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1109\u1161\u1112\u1161\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 3: \uBAA8\uB378 \uC0DD\uC131 (\uC120\uD0DD\uC0AC\uD56D)</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),g=o(`<p>\uC0C8\uB85C\uC6B4 \uD56D\uBAA9\uC744 \uC0DD\uC131\uD558\uACE0 \uC77D\uACE0 \uC5C5\uB370\uC774\uD2B8 \uBC0F \uC0AD\uC81C\uD558\uB294 \uAC04\uB2E8\uD55C \uBAA8\uB378\uC744 \uB9CC\uB4DC\uC138\uC694. src/app \uB514\uB809\uD1A0\uB9AC\uC5D0 item.ts\uB77C\uB294 \uC0C8 \uD30C\uC77C\uC744 \uB9CC\uB4DC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Item</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-4-\u1109\u1165\u1107\u1175\u1109\u1173-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-4-\u1109\u1165\u1107\u1175\u1109\u1173-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 4: \uC11C\uBE44\uC2A4 \uAD6C\uD604\uD558\uAE30</h1><p>\uC0DD\uC131\uB41C \uC11C\uBE44\uC2A4 \uD30C\uC77C (item.service.ts)\uC5D0\uC11C\uB294 \uC774 \uC608\uC81C\uB97C \uC704\uD574 \uD56D\uBAA9\uC744 \uBAA9\uB85D\uC5D0 \uCD94\uAC00\uD558\uB294 \uC2DC\uBBAC\uB808\uC774\uC158\uC744 \uC6D0\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Injectable <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Item <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./item&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Injectable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">providedIn</span><span class="token operator">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-5-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1111\u1169\u11B7-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-5-\u1107\u1161\u11AB\u110B\u1173\u11BC\u1112\u1167\u11BC-\u1111\u1169\u11B7-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 5: \uBC18\uC751\uD615 \uD3FC \uC124\uC815</h1><p>\uC544\uC774\uD15C \uD3FC \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uBC18\uC751\uD615 \uD3FC\uC744 \uC124\uC815\uD558\uC138\uC694. \uBA3C\uC800, app.module.ts\uC5D0\uC11C ReactiveFormsModule\uC744 import\uD558\uACE0 imports \uBC30\uC5F4\uC5D0 \uCD94\uAC00\uD574\uC8FC\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ReactiveFormsModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span>

@<span class="token function">NgModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">declarations</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">imports</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \uB2E4\uB978 \uBAA8\uB4C8</span>
    ReactiveFormsModule
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),h=o(`<p>\uADF8\uB7FC item-form.component.ts\uC5D0\uC11C FormGroup\uC744 \uC124\uC815\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> OnInit <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FormBuilder<span class="token punctuation">,</span> FormGroup<span class="token punctuation">,</span> Validators <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/forms&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ItemService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../item.service&#39;</span><span class="token punctuation">;</span>

@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">selector</span><span class="token operator">:</span> <span class="token string">&#39;app-item-form&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">templateUrl</span><span class="token operator">:</span> <span class="token string">&#39;./item-form.component.html&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">styleUrls</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./item-form.component.css&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ItemFormComponent</span> <span class="token keyword">implements</span> <span class="token class-name">OnInit</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">itemForm</span><span class="token operator">:</span> FormGroup<span class="token punctuation">;</span>

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token keyword">private</span> <span class="token literal-property property">fb</span><span class="token operator">:</span> FormBuilder<span class="token punctuation">,</span> <span class="token keyword">private</span> <span class="token literal-property property">itemService</span><span class="token operator">:</span> ItemService</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>itemForm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fb<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> Validators<span class="token punctuation">.</span>required<span class="token punctuation">]</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-6-html\u110B\u1166\u1109\u1165-\u1111\u1169\u11B7-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-6-html\u110B\u1166\u1109\u1165-\u1111\u1169\u11B7-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB2E8\uACC4 6: HTML\uC5D0\uC11C \uD3FC \uC0DD\uC131\uD558\uAE30</h1><p>\uC774\uC81C item-form.component.html\uC5D0\uC11C Bootstrap \uD074\uB798\uC2A4\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD3FC\uC744 \uC0DD\uC131\uD558\uC138\uC694:</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;container mt-5&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>form <span class="token punctuation">[</span>formGroup<span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&quot;itemForm&quot;</span> <span class="token punctuation">(</span>ngSubmit<span class="token punctuation">)</span><span class="token operator">=</span><span class="token string">&quot;onSubmit()&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mb-3&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;id&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;form-label&quot;</span><span class="token operator">&gt;</span><span class="token constant">ID</span><span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;form-control&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;id&quot;</span> formControlName<span class="token operator">=</span><span class="token string">&quot;id&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;mb-3&quot;</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>label <span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;name&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;form-label&quot;</span><span class="token operator">&gt;</span>\uC774\uB984<span class="token operator">&lt;</span><span class="token operator">/</span>label<span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">&quot;text&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;form-control&quot;</span> id<span class="token operator">=</span><span class="token string">&quot;name&quot;</span> formControlName<span class="token operator">=</span><span class="token string">&quot;name&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">&quot;submit&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;btn btn-primary&quot;</span><span class="token operator">&gt;</span>\uC81C\uCD9C<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1103\u1161\u11AB\u1100\u1168-7-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1175\u11AF\u1112\u1162\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1103\u1161\u11AB\u1100\u1168-7-\u110B\u1162\u1111\u1173\u11AF\u1105\u1175\u110F\u1166\u110B\u1175\u1109\u1167\u11AB-\u1109\u1175\u11AF\u1112\u1162\u11BC" aria-hidden="true">#</a> \uB2E8\uACC4 7: \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uC2E4\uD589</h1><p>\uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC744 \uC2E4\uD589\uD558\uC138\uC694:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ng serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),w=s("p",null,"http://localhost:4200/ \uC73C\uB85C \uC774\uB3D9\uD558\uBA74 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uC73C\uB85C \uC2A4\uD0C0\uC77C\uC774 \uC801\uC6A9\uB41C \uC591\uC2DD\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),_=s("p",null,"\uC774 \uC608\uC81C\uB294 \uD56D\uBAA9\uC744 \uCD94\uAC00\uD558\uAE30 \uC704\uD574 \uC591\uC2DD\uC744 \uC0DD\uC131\uD558\uACE0 \uC81C\uCD9C\uD558\uB294 \uB0B4\uC6A9\uC744 \uB2E4\uB8F9\uB2C8\uB2E4. \uC804\uCCB4 CRUD \uAE30\uB2A5\uC744 \uAD6C\uD604\uD558\uB824\uBA74 \uC11C\uBE44\uC2A4\uB97C \uD655\uC7A5\uD558\uC5EC \uD56D\uBAA9\uC744 \uC77D\uAE30, \uC218\uC815 \uBC0F \uC0AD\uC81C\uD560 \uC218 \uC788\uB3C4\uB85D \uCC98\uB9AC\uD558\uACE0 \uD544\uC694\uC5D0 \uB530\uB77C \uCD94\uAC00 \uCEF4\uD3EC\uB10C\uD2B8\uB098 \uBA54\uC18C\uB4DC\uB97C \uC0DD\uC131\uD574\uC57C \uD569\uB2C8\uB2E4. \uC2E4\uC81C \uB370\uC774\uD130\uC758 \uC601\uC18D\uC131(\uC608: \uB370\uC774\uD130\uBCA0\uC774\uC2A4)\uC740 \uC11C\uBC84 \uCE21 \uD1B5\uD569\uC774 \uD544\uC694\uD558\uBA70, \uC774 \uC608\uC81C\uC5D0\uC11C \uB2E4\uB8E8\uC9C0 \uC54A\uB294 \uBD80\uBD84\uC785\uB2C8\uB2E4.",-1),q=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1);function x(j,I){return n(),c("div",null,[u,d,k,m,v,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),w,_,q,(n(),t(e("script"),null,{default:p(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1}))])}var D=l(r,[["render",x],["__file","index.html.vue"]]);export{D as default};
