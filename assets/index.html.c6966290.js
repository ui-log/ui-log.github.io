import{_ as l}from"./app.d68f74da.js";import{l as n,m as r,E as e,G as t,p as s,Y as o,K as p,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var i="/assets/Understandingv-memoinVue3_0.40467868.png";const c={},d=p('<img src="'+i+'"><h1 id="vue-\u1109\u1175\u1105\u1175\u110C\u1173-\u1100\u1175\u1109\u1161" tabindex="-1"><a class="header-anchor" href="#vue-\u1109\u1175\u1105\u1175\u110C\u1173-\u1100\u1175\u1109\u1161" aria-hidden="true">#</a> Vue \uC2DC\uB9AC\uC988 \uAE30\uC0AC</h1><ul><li>Vue3\uC5D0\uC11C v-memo \uC774\uD574\uD558\uAE30</li><li>Vue3\uC5D0\uC11C Suspense \uC774\uD574\uD558\uAE30</li><li>Vue3\uC5D0\uC11C reactive, isReactive \uBC0F shallowReactive \uC774\uD574\uD558\uAE30</li><li>Vue3\uC5D0\uC11C defineModel \uC774\uD574\uD558\uAE30</li><li>Vue3\uC5D0\uC11C Fragment \uC774\uD574\uD558\uAE30</li><li>Vue3\uC5D0\uC11C Teleport \uC774\uD574\uD558\uAE30</li><li>Vue3\uC5D0\uC11C \uBE44\uB3D9\uAE30 \uCEF4\uD3EC\uB10C\uD2B8 \uC774\uD574\uD558\uAE30</li><li>Vue3\uC5D0\uC11C v-model \uC774\uD574\uD558\uAE30</li><li>Vue3\uC5D0\uC11C watch \uBC0F watchEffect \uC774\uD574\uD558\uAE30</li><li>Vue3 \uAD6C\uC131 API\uC758 \uC774\uD574 \uBC0F \uC2E4\uC2B5</li><li>Vue3\uC5D0\uC11C Hooks \uC774\uD574\uD558\uAE30 (Hooks \uC0AC\uC6A9\uD558\uB294 \uC774\uC720)</li><li>Vue3\uC5D0\uC11C \uC0AC\uC6A9\uD558\uB294 \uCEE4\uC2A4\uD140 Hooks \uD568\uC218\uC758 \uC0AC\uC6A9 \uBC0F \uCEA1\uC290\uD654 \uAC1C\uB150</li><li>Vue3\uC758 \uB2E4\uC591\uD55C ref \uC774\uD574\uD558\uAE30: toRef, toRefs, isRef, unref \uB4F1</li><li>Vue3 \uAC1C\uBC1C \uC194\uB8E8\uC158(\u2160)</li><li>Vue3 \uAC1C\uBC1C \uC194\uB8E8\uC158(\u2161)</li><li>\uC54C\uC9C0 \uBABB\uD588\uB358 Vue3\uC758 \uC138\uBD80 \uC815\uBCF4</li><li>Vue3 \uAC1C\uBC1C \uBB38\uC11C</li><li>\uC790\uC138\uD55C \uC124\uBA85\uC774 \uD3EC\uD568\uB41C 28\uAC00\uC9C0 Vue \uC778\uD130\uBDF0 \uC9C8\uBB38</li></ul><h1 id="\u1100\u1162\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u110B\u116D" aria-hidden="true">#</a> \uAC1C\uC694</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),u=a("p",null,"v-memo\uC758 \uACF5\uC2DD \uC815\uC758\uB294 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4:",-1),k=a("p",null,"\uD15C\uD50C\uB9BF\uC758 \uD558\uC704 \uD2B8\uB9AC\uB97C \uBA54\uBAA8\uC774\uC988\uD569\uB2C8\uB2E4. \uC694\uC18C\uC640 \uCEF4\uD3EC\uB10C\uD2B8 \uBAA8\uB450\uC5D0 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774 \uB514\uB809\uD2F0\uBE0C\uB294 \uBA54\uBAA8\uC774\uC81C\uC774\uC158\uC744 \uC704\uD574 \uBE44\uAD50\uD560 \uACE0\uC815 \uAE38\uC774\uC758 \uC758\uC874 \uAC12 \uBC30\uC5F4\uC744 \uC608\uC0C1\uD569\uB2C8\uB2E4. \uBC30\uC5F4\uC758 \uBAA8\uB4E0 \uAC12\uC774 \uB9C8\uC9C0\uB9C9 \uB80C\uB354\uB9C1\uACFC \uB3D9\uC77C\uD558\uB2E4\uBA74 \uC804\uCCB4 \uD558\uC704 \uD2B8\uB9AC\uC5D0 \uB300\uD55C \uC5C5\uB370\uC774\uD2B8\uB294 \uAC74\uB108\uB701\uB2C8\uB2E4.",-1),v=a("p",null,"\uAC04\uB2E8\uD788 \uB9D0\uD558\uBA74, v-memo\uAC00 \uD558\uB294 \uC77C\uC740 \uAE30\uC874\uC758 \uACC4\uC0B0\uB41C \uC18D\uC131\uACFC \uC720\uC0AC\uD558\uC9C0\uB9CC, v-memo\uC758 \uB300\uC0C1\uC740 DOM\uC785\uB2C8\uB2E4.",-1),m=a("p",null,"\uC774 \uC0C8\uB85C\uC6B4 \uB514\uB809\uD2F0\uBE0C\uB294 \uC81C\uC5B4\uD558\uB294 DOM \uC138\uADF8\uBA3C\uD2B8\uB97C \uCE90\uC2F1\uD558\uBA70, \uD2B9\uC815 \uAC12\uC774 \uBCC0\uACBD\uB418\uBA74 \uC5C5\uB370\uC774\uD2B8\uC640 \uB2E4\uC2DC \uB79C\uB354\uB9C1\uB9CC \uC2E4\uD589\uD569\uB2C8\uB2E4. \uC774\uB7EC\uD55C \uAC12\uC740 \uC218\uB3D9\uC73C\uB85C \uC124\uC815\uB429\uB2C8\uB2E4.",-1),g=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),h=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token operator">&lt;</span>div v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">&quot;[valueA, valueB]&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">...</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uC0AC\uC6A9\uBC95</h1><p>v-memo\uC740 \uC885\uC18D\uC131 \uBC30\uC5F4\uC744 \uBC1B\uC2B5\uB2C8\uB2E4. \uBC30\uC5F4\uC774 \uBCC0\uACBD\uB418\uBA74 v-memo\uC5D0 \uD574\uB2F9\uD558\uB294 DOM\uACFC \uD574\uB2F9 \uC790\uC2DD \uC694\uC18C\uAC00 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uBC18\uB300\uB85C, \uC885\uC18D\uC131 \uBC30\uC5F4\uC774 \uBCC0\uACBD\uB418\uC9C0 \uC54A\uC73C\uBA74 \uC804\uCCB4 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uC7AC\uB80C\uB354\uB9C1\uB418\uB354\uB77C\uB3C4 v-memo\uC5D0 \uD574\uB2F9\uD558\uB294 DOM \uBC0F \uD574\uB2F9 \uC790\uC2DD \uC694\uC18C\uC758 \uC5C5\uB370\uC774\uD2B8\uAC00 \uAC74\uB108\uB6F0\uC5B4\uC9D1\uB2C8\uB2E4.</p><p>\uB610\uD55C, \uC885\uC18D\uC131 \uBC30\uC5F4\uC740 v-memo=&quot;valueOne, valueTwo&quot;\uC640 \uAC19\uC774 \uD558\uB098 \uC774\uC0C1\uC758 \uAC12 \uB610\uB294 \uD45C\uD604\uC2DD(\uC608: v-memo=&quot;myValue === true&quot;)\uC744 \uBC1B\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),b=p(`<h2 id="\u110B\u1168\u1109\u1175-1-\u1107\u1175\u11AB-\u1107\u1162\u110B\u1167\u11AF" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175-1-\u1107\u1175\u11AB-\u1107\u1162\u110B\u1167\u11AF" aria-hidden="true">#</a> \uC608\uC2DC 1: \uBE48 \uBC30\uC5F4</h2><p>\uB9CC\uC57D \uBE48 \uBC30\uC5F4\uC774 \uC804\uB2EC\uB418\uBA74, \uD56D\uC0C1 \uCC98\uC74C \uB80C\uB354\uB9C1 \uC2DC\uC5D0 \uCE90\uC2DC\uB41C \uACB0\uACFC\uB97C \uC0AC\uC6A9\uD558\uBBC0\uB85C \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB9C8\uCE58 v-once\uC640 \uC720\uC0AC\uD569\uB2C8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>  
    <span class="token operator">&lt;</span>div v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">&quot;[]&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> equal to <span class="token operator">--</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div v<span class="token operator">-</span>once<span class="token operator">&gt;</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u110B\u1168\u1109\u1175-2-\u1107\u1167\u11AB\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u1109\u1175-2-\u1107\u1167\u11AB\u1109\u116E" aria-hidden="true">#</a> \uC608\uC2DC 2: \uBCC0\uC218</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),f=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">&quot;[name]&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span> name <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span> age <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token punctuation">{</span> message <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">&quot;handleBtnClick&quot;</span><span class="token operator">&gt;</span>change<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;loftyamb&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">handleBtnClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  age<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token comment">// Changes to the age value will not be updated on the page unless the name changes.</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD2B9\uC815 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C\uB294 \uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC774 \uBCF5\uC7A1\uD560 \uB54C \uC804\uBC18\uC801\uC778 \uC5C5\uB370\uC774\uD2B8\uB97C \uC218\uB3D9\uC73C\uB85C \uC81C\uC5B4\uD568\uC73C\uB85C\uC368 \uC131\uB2A5\uC744 \uD5A5\uC0C1\uC2DC\uD0AC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uAC83\uC740 \uD070 \uCEF4\uD3EC\uB10C\uD2B8\uAC00 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB420 \uB54C \uC815\uD655\uD55C \uC81C\uC5B4\uAC00 \uD544\uC694\uD55C \uACBD\uC6B0\uC5D0 \uB9E4\uC6B0 \uC720\uC6A9\uD569\uB2C8\uB2E4.</p><h2 id="\u110B\u1168\u110C\u1166-3-v-for\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1168\u110C\u1166-3-v-for\u110B\u116A-\u1112\u1161\u11B7\u1101\u1166-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC608\uC81C 3: v-for\uC640 \uD568\uAED8 \uC0AC\uC6A9\uD558\uAE30</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">&quot;item in list&quot;</span> <span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">&quot;item.id&quot;</span> v<span class="token operator">-</span>memo<span class="token operator">=</span><span class="token string">&quot;[item.id === selected]&quot;</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span> item<span class="token punctuation">.</span>id <span class="token punctuation">}</span> <span class="token operator">-</span> selected<span class="token operator">:</span> <span class="token punctuation">{</span> item<span class="token punctuation">.</span>id <span class="token operator">===</span> selected <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span><span class="token operator">...</span>\uB354 \uB9CE\uC740 \uC790\uC2DD \uB178\uB4DC<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),_=a("p",null,"\uC704\uC758 \uCF54\uB4DC\uC5D0\uC11C v-memo\uAC00 \uC0AC\uC6A9\uB418\uC9C0 \uC54A\uC73C\uBA74 \uC120\uD0DD\uD55C \uBCC0\uC218\uB97C \uBCC0\uACBD\uD560 \uB54C\uB9C8\uB2E4 \uBAA9\uB85D \uC804\uCCB4\uAC00 \uC644\uC804\uD788 \uB2E4\uC2DC \uB80C\uB354\uB9C1\uB429\uB2C8\uB2E4. \uC0C8 \uC9C0\uC2DC\uBB38\uC774 \uC81C\uACF5\uD558\uB294 \uCE90\uC2F1 \uAE30\uB2A5\uC740 \uD45C\uD604\uC2DD item.id === selected\uC774 \uBCC0\uACBD\uB418\uB294 \uB85C\uC6B0\uB9CC \uC5C5\uB370\uC774\uD2B8\uB418\uB3C4\uB85D \uD5C8\uC6A9\uD558\uBA70, \uC989, \uD56D\uBAA9\uC744 \uC120\uD0DD\uD558\uAC70\uB098 \uC120\uD0DD \uCDE8\uC18C\uD560 \uB54C\uB9CC \uC5C5\uB370\uC774\uD2B8\uB429\uB2C8\uB2E4.",-1),y=a("h1",{id:"\u110B\u116D\u110B\u1163\u11A8",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u110B\u116D\u110B\u1163\u11A8","aria-hidden":"true"},"#"),s(" \uC694\uC57D")],-1),w=a("p",null,"v-memo\uC758 \uC0AC\uC6A9\uC740 \uB2E4\uC74C\uACFC \uAC19\uC774 \uC694\uC57D\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4:",-1),V=a("ul",null,[a("li",null,"\uBE44\uC5B4\uC788\uB294 \uBAA9\uB85D\uC5D0 \uC758\uC874\uD558\uB294 \uACBD\uC6B0 v-memo\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uAD8C\uC7A5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."),a("li",null,"\uBE44\uC988\uB2C8\uC2A4 \uB85C\uC9C1\uC774 \uBCF5\uC7A1\uD560 \uB54C \uC77C\uBD80 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uC804\uBC18\uC801\uC778 \uC5C5\uB370\uC774\uD2B8\uB97C \uC218\uB3D9\uC73C\uB85C \uC81C\uC5B4\uD558\uBA74 \uC131\uB2A5\uC774 \uD5A5\uC0C1\uB420 \uC218 \uC788\uC2B5\uB2C8\uB2E4."),a("li",null,"\uB300\uADDC\uBAA8 \uAD6C\uC131 \uC694\uC18C\uC758 \uB2E4\uC2DC \uB80C\uB354\uB9C1 \uC2DC\uAC04\uC744 \uC81C\uC5B4\uD574\uC57C \uD560 \uB54C \uB9E4\uC6B0 \uC720\uC6A9\uD569\uB2C8\uB2E4."),a("li",null,"\uB300\uADDC\uBAA8 \uBAA9\uB85D\uC744 \uB80C\uB354\uB9C1\uD558\uB294 \uCD5C\uC801\uD654\uC785\uB2C8\uB2E4.")],-1),q=a("p",null,[a("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4877378276818686","data-ad-slot":"9743150776","data-ad-format":"auto","data-full-width-responsive":"true"})],-1),x=a("h1",{id:"stackademic-\u{1F393}",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#stackademic-\u{1F393}","aria-hidden":"true"},"#"),s(" Stackademic \u{1F393}")],-1),j=a("p",null,"\uB05D\uAE4C\uC9C0 \uC77D\uC5B4 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4. \uB5A0\uB098\uC2DC\uAE30 \uC804\uC5D0:",-1),C=a("ul",null,[a("li",null,"\uC791\uAC00\uB97C \uCD94\uC885\uD558\uACE0 \uBC15\uC218 \uCE58\uB294 \uAC83\uC744 \uACE0\uB824\uD574\uC8FC\uC138\uC694! \u{1F44F}"),a("li",null,"\uC6B0\uB9AC\uB97C \uD314\uB85C\uC6B0\uD574\uC8FC\uC138\uC694 X | LinkedIn | YouTube | Discord"),a("li",null,"\uB2E4\uB978 \uD50C\uB7AB\uD3FC\uC5D0 \uBC29\uBB38\uD574\uC8FC\uC138\uC694: In Plain English | CoFeed | Venture | Cubed"),a("li",null,"\uB354 \uB9CE\uC740 \uCF58\uD150\uCE20\uB294 Stackademic.com\uC5D0\uC11C \uD655\uC778\uD574\uC8FC\uC138\uC694.")],-1);function B(D,M){return n(),r("div",null,[d,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),u,k,v,m,g,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),b,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),f,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),_,y,w,V,q,(n(),e(o("script"),null,{default:t(()=>[s(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),x,j,C])}var H=l(c,[["render",B],["__file","index.html.vue"]]);export{H as default};
