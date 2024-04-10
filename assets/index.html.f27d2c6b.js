import{_ as c}from"./app.63e06a35.js";import{l as s,m as i,E as t,G as e,p as n,Y as p,K as o,C as a}from"./@vue.46e0ff50.js";import"./ts-debounce.471e9b22.js";import"./vue-router.66b7519d.js";import"./medium-zoom.0cdb07e4.js";import"./@vueuse.f471c5d7.js";var u="/assets/FunctionChaininginJavaScriptArrowFunctionvsFunctionPrototype_0.5928a79d.png";const l={},r=o('<img src="'+u+'"><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C\uC758 \uD568\uC218 \uCCB4\uC774\uB2DD\uC740 \uD55C \uC904\uC758 \uCF54\uB4DC\uB85C \uAC1D\uCCB4\uB098 \uD568\uC218\uC5D0 \uB300\uD574 \uC5EC\uB7EC \uC791\uC5C5\uC744 \uBCF4\uB2E4 \uAC04\uD3B8\uD558\uACE0 \uAC00\uB3C5\uC131 \uC788\uAC8C \uC218\uD589\uD560 \uC218 \uC788\uB294 \uBC29\uBC95\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uC774 \uAE00\uC5D0\uC11C\uB294 sum1 \uBC0F sum2 \uD568\uC218 \uC0AC\uC774\uC758 \uCC28\uC774\uB97C \uC790\uC138\uD788 \uC0B4\uD3B4\uBCF4\uBA74\uC11C \uCCB4\uC774\uB2DD\uB41C \uD569\uACC4 \uACC4\uC0B0\uC744 \uB2EC\uC131\uD558\uB294 \uB370 \uC0AC\uC6A9\uB41C \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uAC1C\uB150\uC5D0 \uCD08\uC810\uC744 \uB9DE\uCD9C \uAC83\uC785\uB2C8\uB2E4.</p><h1 id="\u1112\u1161\u11B7\u1109\u116E-\u1107\u1165\u110C\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u11B7\u1109\u116E-\u1107\u1165\u110C\u1165\u11AB" aria-hidden="true">#</a> \uD568\uC218 \uBC84\uC804</h1><h2 id="\u1107\u1165\u110C\u1165\u11AB-1-sum1" tabindex="-1"><a class="header-anchor" href="#\u1107\u1165\u110C\u1165\u11AB-1-sum1" aria-hidden="true">#</a> \uBC84\uC804 1: sum1</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),d=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>ar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> <span class="token function-variable function">sum1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num1 <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>num1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ar<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cv<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>ar<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="version-2-sum2" tabindex="-1"><a class="header-anchor" href="#version-2-sum2" aria-hidden="true">#</a> Version 2: sum2</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>ar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">sum2</span><span class="token punctuation">(</span><span class="token parameter">num1 <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>num1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> sum2<span class="token punctuation">.</span>ar<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cv</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cv<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    sum2<span class="token punctuation">.</span>ar<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="javascript-concepts-used" tabindex="-1"><a class="header-anchor" href="#javascript-concepts-used" aria-hidden="true">#</a> JavaScript Concepts Used</h1><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>`,5),k=o('<h2 id="_1-\u1112\u116A\u1109\u1161\u11AF\u1111\u116D-\u1112\u1161\u11B7\u1109\u116E\u110B\u116A-\u110B\u1175\u11AF\u1107\u1161\u11AB-\u1112\u1161\u11B7\u1109\u116E-\u1107\u1175\u1100\u116D" tabindex="-1"><a class="header-anchor" href="#_1-\u1112\u116A\u1109\u1161\u11AF\u1111\u116D-\u1112\u1161\u11B7\u1109\u116E\u110B\u116A-\u110B\u1175\u11AF\u1107\u1161\u11AB-\u1112\u1161\u11B7\u1109\u116E-\u1107\u1175\u1100\u116D" aria-hidden="true">#</a> 1. \uD654\uC0B4\uD45C \uD568\uC218\uC640 \uC77C\uBC18 \uD568\uC218 \uBE44\uAD50</h2><h2 id="sum1-\u1112\u116A\u1109\u1161\u11AF\u1111\u116D-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#sum1-\u1112\u116A\u1109\u1161\u11AF\u1111\u116D-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> sum1: \uD654\uC0B4\uD45C \uD568\uC218</h2><p>sum1\uC5D0\uC11C\uB294 \uD654\uC0B4\uD45C \uD568\uC218\uAC00 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uD654\uC0B4\uD45C \uD568\uC218\uB294 JavaScript\uC5D0\uC11C \uD568\uC218\uB97C \uAC04\uACB0\uD558\uAC8C \uC791\uC131\uD558\uB294 \uBC29\uBC95\uC73C\uB85C, \uC790\uC2E0\uB9CC\uC758 this \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uBC14\uC778\uB529\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774 \uBC84\uC804\uC5D0\uC11C\uB294 this.ar\uC774 \uC804\uC5ED \uBC94\uC704\uC5D0\uC11C \uC815\uC758\uB41C \uBC30\uC5F4\uC744 \uAC00\uB9AC\uD0A4\uBBC0\uB85C, \uC5EC\uB7EC \uD568\uC218 \uD638\uCD9C\uC744 \uD1B5\uD574 \uC22B\uC790\uB97C \uC800\uC7A5\uD558\uACE0 \uC561\uC138\uC2A4\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><h2 id="sum2-\u110B\u1175\u11AF\u1107\u1161\u11AB-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#sum2-\u110B\u1175\u11AF\u1107\u1161\u11AB-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> sum2: \uC77C\uBC18 \uD568\uC218</h2><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),h=o('<p>sum2\uC5D0\uC11C\uB294 \uC77C\uBC18 \uD568\uC218\uAC00 \uC0AC\uC6A9\uB429\uB2C8\uB2E4. \uC77C\uBC18 \uD568\uC218\uC5D0\uB294 \uACE0\uC720\uD55C this \uCEE8\uD14D\uC2A4\uD2B8\uAC00 \uC788\uC5B4\uC11C \uD2B9\uC815 \uC2DC\uB098\uB9AC\uC624\uC5D0\uC11C \uD63C\uB780\uC744 \uC904 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uC774\uB97C \uD53C\uD558\uAE30 \uC704\uD574 sum2\uB294 Function \uD504\uB85C\uD1A0 \uD0C0\uC785\uC744 \uD655\uC7A5\uD558\uACE0 sum2.ar\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC22B\uC790\uB97C \uC800\uC7A5\uD558\uBBC0\uB85C \uBC30\uC5F4\uC774 \uC62C\uBC14\uB978 \uCEE8\uD14D\uC2A4\uD2B8 \uB0B4\uC5D0\uC11C \uC561\uC138\uC2A4\uB429\uB2C8\uB2E4.</p><h2 id="_2-function-prototype-extension" tabindex="-1"><a class="header-anchor" href="#_2-function-prototype-extension" aria-hidden="true">#</a> 2. Function Prototype Extension</h2><h3 id="sum1-\u1111\u1173\u1105\u1169\u1110\u1169-\u1110\u1161\u110B\u1175\u11B8-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110B\u1165\u11B9\u110B\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#sum1-\u1111\u1173\u1105\u1169\u1110\u1169-\u1110\u1161\u110B\u1175\u11B8-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110B\u1165\u11B9\u110B\u1173\u11B7" aria-hidden="true">#</a> sum1: \uD504\uB85C\uD1A0 \uD0C0\uC785 \uD655\uC7A5 \uC5C6\uC74C</h3><p>sum1\uC5D0\uC11C\uB294 Function \uD504\uB85C\uD1A0 \uD0C0\uC785\uC744 \uD655\uC7A5\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB300\uC2E0, \uC774 \uD568\uC218\uB294 this \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBC30\uC5F4 this.ar\uC5D0 \uC561\uC138\uC2A4\uD558\uACE0 \uC870\uC791\uD569\uB2C8\uB2E4. \uC774 \uBC29\uBC95\uC740 \uB354 \uAC04\uB2E8\uD560 \uC218 \uC788\uC9C0\uB9CC, this \uCEE8\uD14D\uC2A4\uD2B8\uAC00 \uBCC0\uACBD\uB418\uBA74 \uC608\uAE30\uCE58 \uC54A\uC740 \uB3D9\uC791\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),m=o('<h2 id="sum2-\u1111\u1173\u1105\u1169\u1110\u1169\u1110\u1161\u110B\u1175\u11B8-\u1112\u116A\u11A8\u110C\u1161\u11BC" tabindex="-1"><a class="header-anchor" href="#sum2-\u1111\u1173\u1105\u1169\u1110\u1169\u1110\u1161\u110B\u1175\u11B8-\u1112\u116A\u11A8\u110C\u1161\u11BC" aria-hidden="true">#</a> sum2: \uD504\uB85C\uD1A0\uD0C0\uC785 \uD655\uC7A5</h2><p>sum2\uC5D0\uC11C \uD568\uC218 \uD504\uB85C\uD1A0\uD0C0\uC785\uC740 \uBC30\uC5F4 sum2.ar\uB97C \uCD94\uAC00\uD558\uC5EC \uD655\uC7A5\uB429\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368 sum2\uB294 \uD568\uC218 \uC790\uCCB4\uC5D0\uC11C \uBC30\uC5F4\uC5D0 \uC9C1\uC811 \uC811\uADFC\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uC5EC this \uCEE8\uD14D\uC2A4\uD2B8\uC640 \uAD00\uB828\uB41C \uC7A0\uC7AC\uC801\uC778 \uBB38\uC81C\uB97C \uC81C\uAC70\uD569\uB2C8\uB2E4.</p><h3 id="_3-\u1100\u1175\u1107\u1169\u11AB-\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#_3-\u1100\u1175\u1107\u1169\u11AB-\u1106\u1162\u1100\u1162\u1107\u1167\u11AB\u1109\u116E" aria-hidden="true">#</a> 3. \uAE30\uBCF8 \uB9E4\uAC1C\uBCC0\uC218</h3><p>sum1\uACFC sum2 \uBAA8\uB450 \uAE30\uBCF8 \uB9E4\uAC1C\uBCC0\uC218 (num1 = 0)\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD568\uC218\uC5D0 \uC778\uC218\uAC00 \uC81C\uACF5\uB418\uC9C0 \uC54A\uC740 \uACBD\uC6B0\uB97C \uCC98\uB9AC\uD569\uB2C8\uB2E4. \uC774\uB807\uAC8C \uD568\uC73C\uB85C\uC368 \uD568\uC218\uAC00 \uC190\uC0C1\uB418\uC9C0 \uC54A\uACE0 \uBC30\uC5F4\uC5D0 \uC800\uC7A5\uB41C \uC22B\uC790\uB4E4\uC758 \uC62C\uBC14\uB978 \uD569\uACC4\uB97C \uBC18\uD658\uD560 \uC218 \uC788\uB3C4\uB85D \uBCF4\uC7A5\uD569\uB2C8\uB2E4.</p><p><ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-4877378276818686" data-ad-slot="9743150776" data-ad-format="auto" data-full-width-responsive="true"></ins></p>',5),v=a("h1",{id:"\u1100\u1167\u11AF\u1105\u1169\u11AB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u1100\u1167\u11AF\u1105\u1169\u11AB","aria-hidden":"true"},"#"),n(" \uACB0\uB860")],-1),b=a("p",null,"sum1\uACFC sum2\uC5D0\uC11C \uC0AC\uC6A9\uB41C \uAE30\uBCF8 JavaScript \uAC1C\uB150\uC744 \uC774\uD574\uD558\uB294 \uAC83\uC740 \uB450 \uD568\uC218 \uBC84\uC804 \uAC04\uC758 \uCC28\uC774\uC5D0 \uB300\uD55C \uC18C\uC911\uD55C \uD1B5\uCC30\uB825\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4. \uB450 \uD568\uC218 \uBAA8\uB450 \uC22B\uC790\uC758 \uD569\uC744 \uC5F0\uC1C4\uC801\uC778 \uBC29\uC2DD\uC73C\uB85C \uACC4\uC0B0\uD558\uB294 \uB3D9\uC77C\uD55C \uBAA9\uD45C\uB97C \uB2EC\uC131\uD558\uC9C0\uB9CC, \uC774 \uAE30\uB2A5\uC744 \uC2E4\uD589\uD558\uAE30 \uC704\uD574 \uB2E4\uB978 \uAE30\uC220\uACFC \uAC1C\uB150\uC744 \uD65C\uC6A9\uD569\uB2C8\uB2E4.",-1),f=a("ul",null,[a("li",null,"sum1\uC740 \uD654\uC0B4\uD45C \uD568\uC218\uB97C \uD65C\uC6A9\uD558\uBA70, \uC22B\uC790\uB97C \uC800\uC7A5\uD558\uACE0 \uC561\uC138\uC2A4\uD558\uAE30 \uC704\uD574 this \uCEE8\uD14D\uC2A4\uD2B8\uB97C \uD65C\uC6A9\uD569\uB2C8\uB2E4."),a("li",null,"sum2\uB294 \uC77C\uBC18 \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uBA70, Function \uD504\uB85C\uD1A0\uD0C0\uC785\uC744 \uD655\uC7A5\uD558\uC5EC \uC22B\uC790\uB97C \uC800\uC7A5\uD558\uB294 \uC804\uC6A9 \uBC30\uC5F4\uC744 \uC0DD\uC131\uD558\uC5EC \uD568\uC218 \uC5F0\uC1C4\uC5D0 \uC77C\uAD00\uB418\uACE0 \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uC811\uADFC \uBC29\uC2DD\uC744 \uC81C\uACF5\uD569\uB2C8\uB2E4.")],-1),g=a("p",null,"\uD654\uC0B4\uD45C \uD568\uC218 \uB610\uB294 \uC77C\uBC18 \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uB294 \uCF54\uB529 \uC2A4\uD0C0\uC77C\uACFC \uAE30\uD638\uC5D0 \uB530\uB77C \uD544\uC694\uC5D0 \uB9DE\uB294 \uBC84\uC804\uC744 \uC120\uD0DD\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uB450 \uBC84\uC804 \uBAA8\uB450 JavaScript\uC5D0\uC11C \uD568\uC218 \uC5F0\uC1C4\uB97C \uAD6C\uD604\uD558\uB294 \uC2E4\uC6A9\uC801\uC778 \uC608\uB97C \uC81C\uACF5\uD558\uC5EC \uCF54\uB4DC \uAC00\uB3C5\uC131\uACFC \uC720\uC9C0 \uBCF4\uC218\uC131\uC744 \uD5A5\uC0C1\uC2DC\uD0B5\uB2C8\uB2E4. \uC5EC\uAE30\uC5D0 \uC7AC\uADC0\uC640 \uD074\uB85C\uC800\uB3C4 \uC0AC\uC6A9\uD560 \uC218 \uC788\uC9C0\uB9CC, \uAC1C\uC778\uC801\uC73C\uB85C \uC774 \uB450 \uBC29\uBC95\uC774 \uC7AC\uADC0\uC640 \uD074\uB85C\uC800\uBCF4\uB2E4 \uC9C1\uAD00\uC801\uC774\uB77C\uACE0 \uB290\uB08D\uB2C8\uB2E4! \uC990\uAC70\uC6B4 \uCF54\uB529\uD558\uC138\uC694!",-1);function _(y,w){return s(),i("div",null,[r,(s(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),d,(s(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),k,(s(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),h,(s(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),m,(s(),t(p("script"),null,{default:e(()=>[n(" (adsbygoogle = window.adsbygoogle || []).push({}); ")]),_:1})),v,b,f,g])}var B=c(l,[["render",_],["__file","index.html.vue"]]);export{B as default};
