import{_ as c}from"./app.63e06a35.js";import{l as n,m as l,E as t,G as o,p as a,Y as e,C as s,K as p}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var r="/assets/Privateroutesinreact_0.d7b1a955.png";const i={},u=s("img",{src:r},null,-1),d=s("p",null,"\uB9AC\uC561\uD2B8\uC5D0\uC11C\uB294 \uD504\uB77C\uC774\uBE57 \uB8E8\uD2B8(private routes)\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC560\uD50C\uB9AC\uCF00\uC774\uC158\uC758 \uD2B9\uC815 \uBD80\uBD84\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uB97C \uC81C\uC5B4\uD569\uB2C8\uB2E4. \uC77C\uBC18\uC801\uC73C\uB85C \uC0AC\uC6A9\uC790\uAC00 \uC778\uC99D\uB418\uC5C8\uB294\uC9C0 \uB610\uB294 \uD2B9\uC815 \uAD8C\uD55C\uC744 \uAC00\uC9C0\uACE0 \uC788\uB294\uC9C0\uC5D0 \uB530\uB77C \uD2B9\uC815 \uB8E8\uD2B8(route)\uB098 \uAD6C\uC131 \uC694\uC18C(components)\uC5D0 \uB300\uD55C \uC561\uC138\uC2A4\uB97C \uC81C\uD55C\uD558\uB824\uACE0 \uD569\uB2C8\uB2E4. \uD504\uB77C\uC774\uBE57 \uB8E8\uD2B8\uB97C \uAD6C\uD604\uD558\uB824\uBA74 \uB77C\uC6B0\uD130 \uB77C\uC774\uBE0C\uB7EC\uB9AC(\uC608: \uB9AC\uC561\uD2B8 \uB77C\uC6B0\uD130)\uB97C \uC0AC\uC6A9\uD558\uC5EC \uB8E8\uD2B8 \uCC98\uB9AC\uB97C \uC870\uD569\uD558\uACE0, \uC778\uC99D \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC870\uAC74\uBD80 \uB80C\uB354\uB9C1\uC744 \uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.",-1),k=s("p",null,"\uB2E4\uC74C\uC740 React Router\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD504\uB77C\uC774\uBE57 \uB8E8\uD2B8\uB97C \uAD6C\uD604\uD558\uB294 \uC608\uC2DC\uC785\uB2C8\uB2E4.",-1),m=s("h2",{id:"\u1111\u1173\u1105\u1161\u110B\u1175\u1107\u1175\u11BA-\u1105\u116E\u1110\u1173-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u1111\u1173\u1105\u1161\u110B\u1175\u1107\u1175\u11BA-\u1105\u116E\u1110\u1173-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175","aria-hidden":"true"},"#"),a(" \uD504\uB77C\uC774\uBE57 \uB8E8\uD2B8 \uCEF4\uD3EC\uB10C\uD2B8 \uC0DD\uC131\uD558\uAE30")],-1),v=s("p",null,[s("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),g=p(`<p>\uD504\uB77C\uC774\uBE57 \uB77C\uC6B0\uD2B8\uB97C \uB80C\uB354\uB9C1\uD558\uB294 \uB17C\uB9AC\uB97C \uCC98\uB9AC\uD558\uB294 PrivateRoute \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0DD\uC131\uD574\uBCF4\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Navigate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">PrivateRoute</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token literal-property property">component</span><span class="token operator">:</span> Component<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isAuthenticated<span class="token punctuation">,</span> setIsAuthenticated<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \uC5EC\uAE30\uC5D0 \uC778\uC99D \uB85C\uC9C1\uC744 \uCD94\uAC00\uD558\uC138\uC694...</span>

  <span class="token keyword">return</span> isAuthenticated <span class="token operator">?</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>rest<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span> <span class="token operator">:</span> <span class="token operator">&lt;</span>Navigate to<span class="token operator">=</span><span class="token string">&quot;/login&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> PrivateRoute<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uCEF4\uD3EC\uB10C\uD2B8\uB294 component \uC18D\uC131\uACFC \uB2E4\uB978 \uC18D\uC131\uC744 \uD568\uAED8 \uBC1B\uC2B5\uB2C8\uB2E4. \uC0AC\uC6A9\uC790\uAC00 \uC778\uC99D\uB418\uC5C8\uB294\uC9C0 \uD655\uC778\uD558\uACE0, \uC778\uC99D\uB418\uC5C8\uC744 \uACBD\uC6B0 \uC81C\uACF5\uB41C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB80C\uB354\uB9C1\uD558\uBA70, \uADF8\uB807\uC9C0 \uC54A\uC73C\uBA74 \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB85C \uB9AC\uB2E4\uC774\uB809\uD2B8\uD569\uB2C8\uB2E4.</p><h2 id="\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1105\u1161\u110B\u116E\u1110\u1175\u11BC-\u1100\u116E\u1112\u1167\u11AB\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uB77C\uC6B0\uD305 \uAD6C\uD604\uD558\uAE30</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=p(`<p>\uC774\uC81C \uB77C\uC6B0\uD305 \uC124\uC815 \uB0B4\uC5D0\uC11C PrivateRoute \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC138\uC694.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&quot;react-dom/client&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;./index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PrivateRoute <span class="token keyword">from</span> <span class="token string">&quot;./components/auth/PrivateRoute&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PageNotFound <span class="token keyword">from</span> <span class="token string">&quot;./components/PagenotFound/PageNotFound&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  createBrowserRouter<span class="token punctuation">,</span>
  createRoutesFromElements<span class="token punctuation">,</span>
  Route<span class="token punctuation">,</span>
  RouterProvider<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react-router-dom&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">&quot;./components/Home/Home&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createBrowserRouter</span><span class="token punctuation">(</span>
  <span class="token function">createRoutesFromElements</span><span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>App <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;/&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Home <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token punctuation">{</span><span class="token comment">/* Private route \uAD6C\uD604 */</span><span class="token punctuation">}</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;user&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>PrivateRoute Component<span class="token operator">=</span><span class="token punctuation">{</span>User<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Route path<span class="token operator">=</span><span class="token string">&quot;*&quot;</span> element<span class="token operator">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>PageNotFound <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>Route<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774 \uC608\uC81C\uC5D0\uC11C\uB294 /user \uACBD\uB85C\uC5D0 \uB300\uD55C private route\uAC00 \uC0AC\uC6A9\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC774\uB294 \uC778\uC99D\uB41C \uC0C1\uD0DC\uC778\uC9C0 \uC5EC\uBD80\uB97C \uD655\uC778\uD558\uC5EC \uC0AC\uC6A9\uC790 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uB80C\uB354\uB9C1\uD560\uC9C0 \uB610\uB294 \uB85C\uADF8\uC778 \uD398\uC774\uC9C0\uB85C \uB9AC\uB514\uB809\uC158\uD560\uC9C0\uB97C \uACB0\uC815\uD569\uB2C8\uB2E4.</p><p>\uAE30\uC5B5\uD558\uC138\uC694, isAuthenticated \uC0C1\uD0DC\uB294 \uBC31\uC5D4\uB4DC API, \uD1A0\uD070 \uB610\uB294 \uAE30\uD0C0 \uC778\uC99D \uBA54\uCEE4\uB2C8\uC998\uC744 \uD1B5\uD574 \uAD00\uB9AC\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),y=s("p",null,"\uC774 \uBE14\uB85C\uADF8 \uD3EC\uC2A4\uD2B8\uAC00 \uB3C4\uC6C0\uC774 \uB418\uC5C8\uB2E4\uBA74 \uCD94\uAC00 \uC9C8\uBB38\uC774\uB098 \uC54C\uACE0 \uC2F6\uC740 \uC8FC\uC81C\uAC00 \uC788\uB2E4\uBA74 \uC5B8\uC81C\uB4E0 \uC5F0\uB77D\uD574 \uC8FC\uC138\uC694.",-1),h=s("p",null,"\uC990\uAC70\uC6B4 \uCF54\uB529\uD558\uC2DC\uACE0 \uB354 \uB9CE\uC740 \uC720\uC775\uD55C \uCF58\uD150\uCE20 \uAE30\uB300\uD574 \uC8FC\uC138\uC694!!!",-1);function f(w,_){return n(),l("div",null,[u,d,k,m,v,(n(),t(e("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),g,(n(),t(e("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),t(e("script"),null,{default:o(()=>[a(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),y,h])}var B=c(i,[["render",f],["__file","index.html.vue"]]);export{B as default};
